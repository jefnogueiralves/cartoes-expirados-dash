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
GROUP BY 1
ORDER BY 1
"""

Q_TOTAL_GRUPO1 = f"""
SELECT
  REPLACE(EXPIRATION_DATE, '-', '') AS safra,
  COUNT(DISTINCT CUS_CUST_ID) AS qtde
FROM `{ANL_TABLE}`
WHERE FLAG_GRUPO = 'GRUPO1'
GROUP BY 1
ORDER BY 1
"""

Q_TOTAL_EXPIRADO = f"""
SELECT
  REPLACE(EXPIRATION_DATE, '-', '') AS safra,
  COUNT(DISTINCT CUS_CUST_ID) AS qtde
FROM `{ANL_TABLE}`
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
GROUP BY 1, 2
ORDER BY 1, 2
"""

Q_FUNIL = f"""
SELECT
  REPLACE(EXPIRATION_DATE, '-', '') AS safra,
  SUM(QTDE_RENOVADOS + QTDE_REEMITIDOS) AS base,
  SUM(QTDE_DESBLOQUEADO)                AS ativados,
  SUM(QTDE_ATIVO_TC)                    AS ativos_tc,
  SUM(QTDE_ATIVO_TD)                    AS ativos_td,
  SUM(TPV_TC_POS)                       AS tpv_tc,
  SUM(TPV_TD_POS)                       AS tpv_td,
FROM `{CUBO_TABLE}`
WHERE FLAG_GRUPO = 'GRUPO1'
GROUP BY 1
ORDER BY 1
"""

Q_SPENDING = f"""
SELECT
  REPLACE(EXPIRATION_DATE, '-', '') AS safra,
  SUM(TPV_TC_PRE)  AS tpv_tc_antes,
  SUM(TPV_TD_PRE)  AS tpv_td_antes,
FROM `{CUBO_TABLE}`
WHERE FLAG_GRUPO = 'GRUPO1'
GROUP BY 1
ORDER BY 1
"""

# ── Ciclo label → coluna cN ───────────────────────────────────
CICLO_MAP = {
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

    print(f'  MONTHLY: {len(rows_monthly)} safras')
    print(f'  TOTAL_GRUPO1: {len(rows_tg1)} safras')
    print(f'  CICLO_SAFRA: {len(rows_ciclo)} linhas')
    print(f'  FUNIL: {len(rows_funil)} safras')
    print(f'  SPENDING: {len(rows_spending)} safras')

    # ── TOTAL_GRUPO1 dict ──────────────────────────────────────
    total_g1 = {r['safra']: int(r['qtde']) for r in rows_tg1}

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
            'dm':       5,
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
            'safra':       safra,
            'base':        int(r['base'] or 0),
            'ativados':    int(r['ativados'] or 0),
            'ativos_tc':   ativos_tc,
            'ativos_td':   ativos_td,
            'ativos_ambos': 0,   # requer query adicional por customer
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

    # ── Renderiza JS ──────────────────────────────────────────
    def js_arr(items, indent='  '):
        lines = []
        for item in items:
            lines.append(indent + js_obj(item) + ',')
        return '[\n' + '\n'.join(lines) + '\n]'

    def js_dict(d):
        pairs = [f"  '{k}':{v}" for k, v in sorted(d.items())]
        return '{\n' + ',\n'.join(pairs) + ',\n}'

    monthly_js       = js_arr(monthly)
    ciclo_safra_js   = js_arr(ciclo_safra)
    funil_js         = js_arr(funil_data)
    spending_js      = js_arr(spending_antes)
    total_exp_js     = js_dict(total_exp)
    total_g1_js      = js_dict(total_g1)

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

// ── TOTAIS BQ — UNIVERSO COMPLETO ─────────────────────────────
const TOTAL_EXPIRADO = {total_exp_js};
const TOTAL_GRUPO1 = {total_g1_js};

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
