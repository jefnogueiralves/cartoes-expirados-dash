#!/usr/bin/env python3
"""
update_data.py — Extrai dados do BigQuery e gera dashboard_data.js
----------------------------------------------------------------------
Uso local:   python scripts/update_data.py
Pré-req:     pip install google-cloud-bigquery
Auth local:  gcloud auth application-default login
Auth CI/CD:  variável GOOGLE_APPLICATION_CREDENTIALS (JSON da SA)
"""

import os
import sys
from datetime import date, datetime
from google.cloud import bigquery

# ── Configuração ────────────────────────────────────────────────
PROJECT    = 'meli-bi-data'
ANL_TABLE  = f'{PROJECT}.SBOX_CREDITSTC.CARTAO_EXPIRADO_ANL_IA'
CUBO_TABLE = f'{PROJECT}.SBOX_CREDITSTC.CARTAO_EXPIRADO_CUBO_IA'

SCRIPT_DIR  = os.path.dirname(os.path.abspath(__file__))
OUTPUT_PATH = os.path.join(SCRIPT_DIR, '..', 'dashboard_data.js')

# ── Cliente BQ ─────────────────────────────────────────────────
client = bigquery.Client(project=PROJECT)

def run(sql):
    return list(client.query(sql).result())

# ── Helpers ────────────────────────────────────────────────────
MES_PT = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez']

def safra_to_label(yyyymm: str, parcial: bool) -> str:
    """'202505' -> 'Mai/25', parcial=True -> 'Mai/25*'"""
    m = MES_PT[int(yyyymm[4:6]) - 1]
    label = f"{m}/{yyyymm[2:4]}"
    return label + ('*' if parcial else '')

def hoje_br() -> str:
    d = date.today()
    return f"{d.day:02d}/{d.month:02d}/{d.year}"

def js_obj(d: dict) -> str:
    """Serializa dict Python como objeto JS literal."""
    parts = []
    for k, v in d.items():
        if isinstance(v, str):
            parts.append(f"{k}:'{v}'")
        elif isinstance(v, bool):
            parts.append(f"{k}:{'true' if v else 'false'}")
        elif isinstance(v, float):
            parts.append(f"{k}:{v:.2f}")
        else:
            parts.append(f"{k}:{v}")
    return '{' + ', '.join(parts) + '}'

# ── Queries ────────────────────────────────────────────────────

Q_MONTHLY = f"""
SELECT
  REPLACE(EXPIRATION_DATE, '-', '') AS safra,
  SUM(QTDE_RENOVADOS)    AS ren,
  SUM(QTDE_REEMITIDOS)   AS rei,
  SUM(QTDE_DESBLOQUEADO) AS ent,
  SUM(QTDE_RENOVADOS + QTDE_REEMITIDOS) AS tel_ren,
FROM `{CUBO_TABLE}`
WHERE FLAG_GRUPO = 'GRUPO1'
  AND EXPIRATION_DATE <= FORMAT_DATE('%Y-%m', CURRENT_DATE())
GROUP BY 1
ORDER BY 1
"""

Q_TOTAL_GRUPO1 = f"""
SELECT
  REPLACE(EXPIRATION_DATE, '-', '') AS safra,
  COUNT(DISTINCT CUS_CUST_ID) AS qtde
FROM `{ANL_TABLE}`
WHERE FLAG_GRUPO = 'GRUPO1'
  AND EXPIRATION_DATE <= FORMAT_DATE('%Y-%m', CURRENT_DATE())
GROUP BY 1
ORDER BY 1
"""

Q_MONTHLY_G2 = f"""
SELECT
  REPLACE(EXPIRATION_DATE, '-', '') AS safra,
  SUM(QTDE_RENOVADOS)    AS ren,
  SUM(QTDE_REEMITIDOS)   AS rei,
  SUM(QTDE_DESBLOQUEADO) AS ent,
  SUM(QTDE_RENOVADOS + QTDE_REEMITIDOS) AS tel_ren,
FROM `{CUBO_TABLE}`
WHERE FLAG_GRUPO = 'GRUPO2'
  AND EXPIRATION_DATE <= FORMAT_DATE('%Y-%m', CURRENT_DATE())
GROUP BY 1
ORDER BY 1
"""

Q_TOTAL_GRUPO2 = f"""
SELECT
  REPLACE(EXPIRATION_DATE, '-', '') AS safra,
  COUNT(DISTINCT CUS_CUST_ID) AS qtde
FROM `{ANL_TABLE}`
WHERE FLAG_GRUPO = 'GRUPO2'
  AND EXPIRATION_DATE <= FORMAT_DATE('%Y-%m', CURRENT_DATE())
GROUP BY 1
ORDER BY 1
"""

Q_MONTHLY_PROD = f"""
SELECT
  REPLACE(EXPIRATION_DATE, '-', '') AS safra,
  FLAG_PROD AS prod,
  SUM(QTDE_RENOVADOS)    AS ren,
  SUM(QTDE_REEMITIDOS)   AS rei,
FROM `{CUBO_TABLE}`
WHERE FLAG_GRUPO = 'GRUPO1'
  AND EXPIRATION_DATE <= FORMAT_DATE('%Y-%m', CURRENT_DATE())
GROUP BY 1, 2
ORDER BY 1, 2
"""

Q_TOTAL_EXPIRADO = f"""
SELECT
  REPLACE(EXPIRATION_DATE, '-', '') AS safra,
  COUNT(DISTINCT CUS_CUST_ID) AS qtde
FROM `{ANL_TABLE}`
WHERE EXPIRATION_DATE <= FORMAT_DATE('%Y-%m', CURRENT_DATE())
GROUP BY 1
ORDER BY 1
"""

Q_CICLO_SAFRA = f"""
SELECT
  REPLACE(EXPIRATION_DATE, '-', '') AS safra,
  FLAG_CICLO_USO_TD                 AS ciclo,
  SUM(QTDE_RENOVADOS + QTDE_REEMITIDOS) AS qtde
FROM `{CUBO_TABLE}`
WHERE FLAG_GRUPO = 'GRUPO1'
  AND FLAG_CICLO_USO_TD IS NOT NULL
  AND EXPIRATION_DATE <= FORMAT_DATE('%Y-%m', CURRENT_DATE())
GROUP BY 1, 2
ORDER BY 1, 2
"""

Q_FUNIL = f"""
SELECT
  REPLACE(EXPIRATION_DATE, '-', '') AS safra,
  SUM(QTDE_RENOVADOS + QTDE_REEMITIDOS) AS base,
  SUM(QTDE_ENTREGUE)                    AS entregue,
  SUM(QTDE_DESBLOQUEADO)                AS ativados,
  SUM(QTDE_ATIVO_TC)                    AS ativos_tc,
  SUM(QTDE_ATIVO_TD)                    AS ativos_td,
  -- QTDE_ATIVO_FISICO = TC OU TD pós-renovação (sem dupla contagem)
  -- Disponível após re-execução de criar_tabelas.sql no BQ
  SUM(COALESCE(QTDE_ATIVO_FISICO, 0))   AS ativos_fisico,
  SUM(TPV_TC_POS)                       AS tpv_tc,
  SUM(TPV_TD_POS)                       AS tpv_td,
FROM `{CUBO_TABLE}`
WHERE FLAG_GRUPO = 'GRUPO1'
  AND EXPIRATION_DATE <= FORMAT_DATE('%Y-%m', CURRENT_DATE())
GROUP BY 1
ORDER BY 1
"""

Q_DIAS_ENTREGA = f"""
SELECT
  REPLACE(EXPIRATION_DATE, '-', '') AS safra,
  DIAS_ENTREGA,
  SUM(QTDE_TOTAL)                   AS qtde
FROM `{CUBO_TABLE}`
WHERE FLAG_GRUPO = 'GRUPO1'
  AND DIAS_ENTREGA IS NOT NULL
  AND EXPIRATION_DATE <= FORMAT_DATE('%Y-%m', CURRENT_DATE())
GROUP BY 1, 2
ORDER BY 1, 2
"""

Q_ENTREGA_CICLO = f"""
SELECT
  REPLACE(EXPIRATION_DATE, '-', '') AS safra,
  FLAG_CICLO_USO_TD                 AS ciclo,
  DIAS_ENTREGA,
  SUM(QTDE_TOTAL)                   AS qtde,
  SUM(QTDE_ENTREGUE)                AS qtde_entregue
FROM `{CUBO_TABLE}`
WHERE FLAG_GRUPO = 'GRUPO1'
  AND FLAG_CICLO_USO_TD IS NOT NULL
  AND EXPIRATION_DATE <= FORMAT_DATE('%Y-%m', CURRENT_DATE())
GROUP BY 1, 2, 3
ORDER BY 1, 2, 3
"""

Q_DIAS_V2 = f"""
SELECT
  REPLACE(cf.EXPIRATION_DATE, '-', '') AS safra,
  DATE_DIFF(
    CAST(t.DELIVERED_DATE AS DATE),
    CAST(t.CREATE_DATE    AS DATE),
    DAY
  ) AS dias,
  COUNT(DISTINCT t.CUS_CUST_ID) AS qtde
FROM `{ANL_TABLE}` cf
INNER JOIN `meli-bi-data.WHOWNER.LK_MP_CARDS_TRACKING` t
  ON cf.CUS_CUST_ID = t.CUS_CUST_ID
WHERE cf.FLAG_GRUPO = 'GRUPO1'
  AND cf.EXPIRATION_DATE <= FORMAT_DATE('%Y-%m', CURRENT_DATE())
  AND t.DELIVERED_DATE IS NOT NULL
  AND t.SIT_SITE_ID   = 'MLB'
  AND t.DBT_CARD_REQ_ACQUISITON_FLOW = 'renewal'
  AND t.CARD_TYPE_GROUP = 'FISICA_DEBITO_HIBRIDA'
  AND DATE_DIFF(CAST(t.DELIVERED_DATE AS DATE), CAST(t.CREATE_DATE AS DATE), DAY) BETWEEN 0 AND 60
GROUP BY 1, 2
ORDER BY 1, 2
"""

Q_SPENDING = f"""
SELECT
  REPLACE(EXPIRATION_DATE, '-', '') AS safra,
  SUM(TPV_TC_PRE)  AS tpv_tc_antes,
  SUM(TPV_TD_PRE)  AS tpv_td_antes,
FROM `{CUBO_TABLE}`
WHERE FLAG_GRUPO = 'GRUPO1'
  AND EXPIRATION_DATE <= FORMAT_DATE('%Y-%m', CURRENT_DATE())
GROUP BY 1
ORDER BY 1
"""

# ── DIAS_ENTREGA faixa → ponto médio (dias) ──────────────────
# Valores exatos do campo DIAS_ENTREGA conforme a query da base.
DIAS_MIDPOINT = {
    '00. CARTAO NAO ENTREGUE': 0,   # excluído da média (não entregue)
    '01. ATE 2 DIAS':          1.5,
    '02. ATE 5 DIAS':          3.5,
    '03. ATE 7 DIAS':          6.0,
    '04. ATE 10 DIAS':         8.5,
    '05. ACIMA DE 10 DIAS':   13.0,
    '06. NAO RENOVADO':        0,   # excluído da média (não renovado)
}

def calc_dm(rows_faixas: list, safra: str) -> float:
    """Média ponderada das faixas DIAS_ENTREGA para uma safra."""
    total_qtde = 0
    total_dias = 0.0
    unknown = set()
    for r in rows_faixas:
        if r['safra'] != safra:
            continue
        faixa = str(r['DIAS_ENTREGA'] or '').strip()
        qtde  = int(r['qtde'] or 0)
        mp    = DIAS_MIDPOINT.get(faixa)
        if mp is None:
            unknown.add(faixa)
            continue
        if mp == 0:          # faixas excluídas da média (não entregue / não renovado)
            continue
        total_qtde += qtde
        total_dias += mp * qtde
    if unknown:
        print(f'  [AVISO] DIAS_ENTREGA faixas não mapeadas: {unknown}')
    return round(total_dias / total_qtde, 1) if total_qtde > 0 else 5.0

# ── Ciclo label → coluna cN ───────────────────────────────────
# Valores exatos de FLAG_CICLO_USO_TD conforme a query da base.
CICLO_MAP = {
    '01. 1 A 30 D':       'c1',
    '02. 31 A 60 D':      'c2',
    '03. 61 A 90 D':      'c3',
    '04. 91 A 120 D':     'c4',
    '05. 121 A 180 D':    'c5',
    '06. ACIMA DE 180 D': 'c6',
    '07. NAO ATIVO':      'c7',
    # fallbacks para tabelas antigas sem prefixo numérico
    '0-30d':     'c1',
    '31-60d':    'c2',
    '61-90d':    'c3',
    '91-120d':   'c4',
    '121-180d':  'c5',
    '+181d':     'c6',
    'NAO ATIVO': 'c7',
    'INATIVO':   'c7',
}

# ── Execução ───────────────────────────────────────────────────
def main():
    today     = date.today()
    cur_safra = today.strftime('%Y%m')   # safra atual = mes em curso (parcial)

    print('Consultando BigQuery...')

    rows_monthly    = run(Q_MONTHLY)
    rows_tg1        = run(Q_TOTAL_GRUPO1)
    rows_texp       = run(Q_TOTAL_EXPIRADO)
    rows_ciclo      = run(Q_CICLO_SAFRA)
    rows_funil      = run(Q_FUNIL)
    rows_spending   = run(Q_SPENDING)
    rows_dias       = run(Q_DIAS_ENTREGA)
    rows_dias_v2    = run(Q_DIAS_V2)
    rows_entrega_ciclo = run(Q_ENTREGA_CICLO)
    rows_monthly_g2 = run(Q_MONTHLY_G2)
    rows_tg2        = run(Q_TOTAL_GRUPO2)
    rows_monthly_prod = run(Q_MONTHLY_PROD)

    print(f'  MONTHLY: {len(rows_monthly)} safras')
    print(f'  TOTAL_GRUPO1: {len(rows_tg1)} safras')
    print(f'  CICLO_SAFRA: {len(rows_ciclo)} linhas')
    print(f'  FUNIL: {len(rows_funil)} safras')
    print(f'  SPENDING: {len(rows_spending)} safras')
    print(f'  DIAS_ENTREGA: {len(rows_dias)} linhas')
    print(f'  DIAS_ENTREGA_V2: {len(rows_dias_v2)} linhas')
    print(f'  ENTREGA_CICLO: {len(rows_entrega_ciclo)} linhas')
    print(f'  MONTHLY_G2: {len(rows_monthly_g2)} safras')
    print(f'  MONTHLY_PROD: {len(rows_monthly_prod)} linhas')

    # ── TOTAL_GRUPO1 dict ──────────────────────────────────────
    total_g1 = {r['safra']: int(r['qtde']) for r in rows_tg1}

    # ── TOTAL_GRUPO2 dict ──────────────────────────────────────
    total_g2 = {r['safra']: int(r['qtde']) for r in rows_tg2}

    # ── TOTAL_EXPIRADO dict ────────────────────────────────────
    total_exp = {r['safra']: int(r['qtde']) for r in rows_texp}

    # ── MONTHLY list ──────────────────────────────────────────
    monthly = []
    for r in rows_monthly:
        safra   = r['safra']
        parcial = (safra == cur_safra)
        label   = safra_to_label(safra, parcial)
        tel     = total_g1.get(safra, int(r['tel_ren'] or 0))
        monthly.append({
            'mes':      label,
            'completo': not parcial,
            'ren':      int(r['ren'] or 0),
            'rei':      int(r['rei'] or 0),
            'ent':      int(r['ent'] or 0),
            'dm':       calc_dm(rows_dias, safra),
            'tel':      tel,
        })

    # ── CICLO_SAFRA list ──────────────────────────────────────
    ciclo_map_by_safra = {}
    for r in rows_ciclo:
        safra = r['safra']
        col   = CICLO_MAP.get(str(r['ciclo']), None)
        if col is None:
            continue
        if safra not in ciclo_map_by_safra:
            ciclo_map_by_safra[safra] = {f'c{i}': 0 for i in range(1, 8)}
        ciclo_map_by_safra[safra][col] += int(r['qtde'] or 0)

    ciclo_safra = []
    for safra in sorted(ciclo_map_by_safra.keys()):
        row = {'safra': safra}
        row.update(ciclo_map_by_safra[safra])
        ciclo_safra.append(row)

    # ── FUNIL_DATA list ───────────────────────────────────────
    funil_data = []
    for r in rows_funil:
        safra     = r['safra']
        ativos_tc = int(r['ativos_tc'] or 0)
        ativos_td = int(r['ativos_td'] or 0)
        funil_data.append({
            'safra':         safra,
            'base':          int(r['base'] or 0),
            'entregue':      int(r['entregue'] or 0),
            'ativados':      int(r['ativados'] or 0),
            'ativos_tc':     ativos_tc,
            'ativos_td':     ativos_td,
            'ativos_fisico': int(r['ativos_fisico'] or 0),
            'ativos_ambos':  0,
            'tpv_tc':      int(r['tpv_tc'] or 0),
            'tpv_td':      int(r['tpv_td'] or 0),
            'tpn_tc':      0,
            'tpn_td':      0,
            'maps_tc':     ativos_tc,
            'maps_td':     ativos_td,
        })

    # ── SPENDING_ANTES list ───────────────────────────────────
    spending_antes = []
    for r in rows_spending:
        spending_antes.append({
            'safra':        r['safra'],
            'tpv_tc_antes': float(r['tpv_tc_antes'] or 0),
            'tpv_td_antes': float(r['tpv_td_antes'] or 0),
            'tpn_tc_antes': 0,
            'tpn_td_antes': 0,
        })

    # ── DIAS_ENTREGA_DIST dict of dicts ───────────────────────
    dias_dist_by_safra = {}
    for r in rows_dias:
        safra = r['safra']
        faixa = str(r['DIAS_ENTREGA'] or '').strip()
        qtde  = int(r['qtde'] or 0)
        if faixa and qtde > 0:
            if safra not in dias_dist_by_safra:
                dias_dist_by_safra[safra] = {}
            dias_dist_by_safra[safra][faixa] = dias_dist_by_safra[safra].get(faixa, 0) + qtde

    def js_dist(dist_by_safra):
        """Serializa { 'YYYYMM': { 'Faixa': N, ... }, ... } como objeto JS."""
        lines = []
        for safra in sorted(dist_by_safra.keys()):
            inner = ', '.join(
                f"'{f}': {v}"
                for f, v in sorted(dist_by_safra[safra].items())
            )
            lines.append(f"  '{safra}': {{{inner}}}")
        return '{\n' + ',\n'.join(lines) + '\n}'

    dias_dist_js = js_dist(dias_dist_by_safra) if dias_dist_by_safra else '{}'

    # ── DIAS_ENTREGA_V2: dias inteiros por safra ────────────────
    dias_v2_by_safra = {}
    for r in rows_dias_v2:
        safra = r['safra']
        dias  = int(r['dias'] or 0)
        qtde  = int(r['qtde'] or 0)
        if qtde > 0:
            if safra not in dias_v2_by_safra:
                dias_v2_by_safra[safra] = {}
            dias_v2_by_safra[safra][str(dias)] = dias_v2_by_safra[safra].get(str(dias), 0) + qtde

    dias_v2_js = js_dist(dias_v2_by_safra) if dias_v2_by_safra else '{}'

    # ── ENTREGA_CICLO: taxa de entrega e faixa por ciclo de uso ─
    # Estrutura: { 'YYYYMM': { 'ciclo': { 'entregue': N, 'total': N, 'faixas': {...} } } }
    entrega_ciclo = {}
    for r in rows_entrega_ciclo:
        safra  = r['safra']
        ciclo  = str(r['ciclo'] or '')
        faixa  = str(r['DIAS_ENTREGA'] or '')
        qtde   = int(r['qtde'] or 0)
        entregue = int(r['qtde_entregue'] or 0)
        if not safra or not ciclo: continue
        ec = entrega_ciclo.setdefault(safra, {}).setdefault(ciclo, {'total':0,'entregue':0,'faixas':{}})
        ec['total']   += qtde
        ec['entregue'] += entregue
        if faixa:
            ec['faixas'][faixa] = ec['faixas'].get(faixa, 0) + qtde

    def js_entrega_ciclo(ec):
        lines = []
        for safra in sorted(ec.keys()):
            ciclos = ec[safra]
            inner = []
            for ciclo, v in sorted(ciclos.items()):
                faixas_str = ', '.join(f"'{f}': {n}" for f,n in sorted(v['faixas'].items()))
                inner.append(f"    '{ciclo}': {{total:{v['total']}, entregue:{v['entregue']}, faixas:{{{faixas_str}}}}}")
            lines.append(f"  '{safra}': {{\n" + ',\n'.join(inner) + '\n  }')
        return '{\n' + ',\n'.join(lines) + '\n}'

    entrega_ciclo_js = js_entrega_ciclo(entrega_ciclo) if entrega_ciclo else '{}'

    # ── Renderiza JS ──────────────────────────────────────────
    def js_arr(items, indent='  '):
        lines = []
        for item in items:
            lines.append(indent + js_obj(item) + ',')
        return '[\n' + '\n'.join(lines) + '\n]'

    def js_dict(d):
        pairs = [f"  '{k}':{v}" for k, v in sorted(d.items())]
        return '{\n' + ',\n'.join(pairs) + ',\n}'

    # ── MONTHLY_G2 list ────────────────────────────────────────
    monthly_g2 = []
    g2_safras  = {r['safra'] for r in rows_monthly_g2}
    all_safras = sorted({r['safra'] for r in rows_monthly} | g2_safras)
    g2_by_safra = {r['safra']: r for r in rows_monthly_g2}
    for safra in sorted(g2_by_safra.keys()):
        r       = g2_by_safra[safra]
        parcial = (safra == cur_safra)
        label   = safra_to_label(safra, parcial)
        monthly_g2.append({
            'mes':      label,
            'completo': not parcial,
            'ren':      int(r['ren'] or 0),
            'rei':      int(r['rei'] or 0),
            'ent':      int(r['ent'] or 0),
            'dm':       0,
            'tel':      total_g2.get(safra, 0),
        })

    # ── MONTHLY_PROD: G1 breakdown por FLAG_PROD ───────────────
    PROD_MAP = {'01. CREDITO': 'HIBRIDO', '02. DEBITO': 'PURO DEBITO'}
    prod_by_safra = {}
    for r in rows_monthly_prod:
        safra = r['safra']
        prod  = PROD_MAP.get(str(r['prod'] or ''), str(r['prod'] or ''))
        if safra not in prod_by_safra:
            prod_by_safra[safra] = {}
        prod_by_safra[safra][prod] = {
            'ren': int(r['ren'] or 0),
            'rei': int(r['rei'] or 0),
        }

    def js_monthly_prod(by_safra, all_labels_monthly):
        """Gera MONTHLY_HIBRIDO e MONTHLY_DEBITO alinhados com MONTHLY."""
        result_h, result_d = [], []
        for mo in all_labels_monthly:
            safra = '20' + mo['mes'].replace('*','').strip()
            # converter label "Mai/25" -> "202505"
            mm = {'Jan':'01','Fev':'02','Mar':'03','Abr':'04','Mai':'05','Jun':'06',
                  'Jul':'07','Ago':'08','Set':'09','Out':'10','Nov':'11','Dez':'12'}
            parts = mo['mes'].replace('*','').split('/')
            safra = '20' + parts[1] + mm.get(parts[0],'00')
            sd = by_safra.get(safra, {})
            h  = sd.get('HIBRIDO',    {'ren':0,'rei':0})
            d  = sd.get('PURO DEBITO',{'ren':0,'rei':0})
            result_h.append({'mes':mo['mes'],'completo':mo['completo'],'ren':h['ren'],'rei':h['rei']})
            result_d.append({'mes':mo['mes'],'completo':mo['completo'],'ren':d['ren'],'rei':d['rei']})
        return js_arr(result_h), js_arr(result_d)

    monthly_hibrido_js, monthly_debito_js = js_monthly_prod(prod_by_safra, monthly)

    monthly_js       = js_arr(monthly)
    monthly_g2_js    = js_arr(monthly_g2)
    ciclo_safra_js   = js_arr(ciclo_safra)
    funil_js         = js_arr(funil_data)
    spending_js      = js_arr(spending_antes)
    total_exp_js     = js_dict(total_exp)
    total_g1_js      = js_dict(total_g1)
    total_g2_js      = js_dict(total_g2)

    output = f"""// ═══════════════════════════════════════════════════════════════
//  dashboard_data.js — gerado automaticamente por update_data.py
//  Última atualização: {hoje_br()}
//  Fonte: {ANL_TABLE}
//         {CUBO_TABLE}
// ═══════════════════════════════════════════════════════════════

// ── DATA DA ÚLTIMA ATUALIZAÇÃO ────────────────────────────────
const DT_ATUALIZACAO = '{hoje_br()}';

// ── TOTAIS MENSAIS REAIS (BigQuery) ───────────────────────────
const MONTHLY = {monthly_js};

// ── SUMÁRIO EXECUTIVO ─────────────────────────────────────────
const SUMARIO_TOTAL = {{
  qtde_total:          0,
  qtde_renovados:      0,
  qtde_reemitidos:     0,
  qtde_total_renov:    0,
  qtde_entregue:       0,
  qtde_desbloqueado:   0,
}};
const SUMARIO_CICLO = [];

// ── FUNIL DE ATIVAÇÃO PÓS-RENOVAÇÃO ──────────────────────────
const FUNIL_DATA = {funil_js};

// ── SPENDING ANTES DA RENOVAÇÃO ───────────────────────────────
const SPENDING_ANTES = {spending_js};

// ── CICLO DE USO POR SAFRA ─────────────────────────────────────
const CICLO_SAFRA = {ciclo_safra_js};

// ── DISTRIBUIÇÃO DIAS_ENTREGA POR FAIXA/MÊS ──────────────────
const DIAS_ENTREGA_DIST = {dias_dist_js};

// ── DISTRIBUIÇÃO DIAS_ENTREGA V2 (dias inteiros do tracking) ──
const DIAS_ENTREGA_V2 = {dias_v2_js};

// ── ENTREGA POR CICLO DE USO ───────────────────────────────────
const ENTREGA_CICLO = {entrega_ciclo_js};

// ── TOTAIS BQ — UNIVERSO COMPLETO ─────────────────────────────
const TOTAL_EXPIRADO = {total_exp_js};
const TOTAL_GRUPO1 = {total_g1_js};
const TOTAL_GRUPO2 = {total_g2_js};

// ── GRUPO 2 — TOTAIS MENSAIS ──────────────────────────────────
const MONTHLY_G2 = {monthly_g2_js};

// ── BREAKDOWN POR PRODUTO (G1) ────────────────────────────────
const MONTHLY_HIBRIDO  = {monthly_hibrido_js};
const MONTHLY_DEBITO   = {monthly_debito_js};

// ── DIMENSÕES DOS FILTROS ─────────────────────────────────────
const PRODS  = ['HIBRIDO', 'PURO DEBITO'];
const CICLOS = ['0-30d','31-60d','61-90d','91-120d','121-180d','+181d'];
const P_W    = {{HIBRIDO: 0.65, 'PURO DEBITO': 0.35}};
const C_REN  = {{'0-30d':0.25, '31-60d':0.30, '61-90d':0.20, '91-120d':0.12, '121-180d':0.08, '+181d':0.05}};
const C_REI  = {{'0-30d':0.06, '31-60d':0.12, '61-90d':0.20, '91-120d':0.24, '121-180d':0.24, '+181d':0.14}};

// ── HELPER ────────────────────────────────────────────────────
function safraLabel(s) {{
  const mm = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'];
  return mm[parseInt(s.slice(4,6))-1] + '/' + s.slice(2,4);
}}

// ── RAW_DATA — todas as combinações (mes × produto × ciclo) ──
const RAW_DATA = [];
MONTHLY.forEach(m => {{
  PRODS.forEach(prod => {{
    const pW = P_W[prod];
    CICLOS.forEach(ciclo => {{
      RAW_DATA.push({{
        mes: m.mes, prod, ciclo,
        ren: Math.round(m.ren * pW * C_REN[ciclo]),
        rei: Math.round(m.rei * pW * C_REI[ciclo]),
        tel: Math.round(m.tel * pW / CICLOS.length),
        ent: Math.round(m.ent * pW / CICLOS.length),
        dm: m.dm, completo: m.completo,
      }});
    }});
  }});
}});
"""

    with open(OUTPUT_PATH, 'w', encoding='utf-8') as f:
        f.write(output)

    print(f'\ndashboard_data.js gerado em: {os.path.abspath(OUTPUT_PATH)}')

if __name__ == '__main__':
    main()
