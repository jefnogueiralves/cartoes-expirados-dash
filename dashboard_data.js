// ═══════════════════════════════════════════════════════════════
//  dashboard_data.js — Dados do Dashboard Cartões Expirados
//  Atualizar este arquivo após cada extração BQ.
//  Fonte: meli-bi-data.SBOX_CREDITSTC.CARTAO_EXPIRADO_ANL_IA
//         meli-bi-data.SBOX_CREDITSTC.CARTAO_EXPIRADO_CUBO_IA
// ═══════════════════════════════════════════════════════════════

// ── DATA DA ÚLTIMA ATUALIZAÇÃO ────────────────────────────────
const DT_ATUALIZACAO = '27/03/2026';

// ── TOTAIS MENSAIS REAIS (BigQuery) ───────────────────────────
// KPIs sempre calculados até o ÚLTIMO MÊS COMPLETO (Fev/26)
// Mar/26* é parcial — aparece nos gráficos mas não nos KPIs
const MONTHLY = [
  {mes:'Mai/25',  completo:true,  ren:1075,  rei:69,   ent:923,   dm:5, tel:1354},
  {mes:'Jun/25',  completo:true,  ren:15968, rei:1004, ent:13859, dm:5, tel:20137},
  {mes:'Jul/25',  completo:true,  ren:29502, rei:1587, ent:23920, dm:5, tel:37718},
  {mes:'Ago/25',  completo:true,  ren:29403, rei:1813, ent:22850, dm:5, tel:39652},
  {mes:'Set/25',  completo:true,  ren:35274, rei:2263, ent:27080, dm:5, tel:48293},
  {mes:'Out/25',  completo:true,  ren:30829, rei:1769, ent:23420, dm:5, tel:43202},
  {mes:'Nov/25',  completo:true,  ren:46255, rei:2696, ent:34543, dm:5, tel:65527},
  {mes:'Dez/25',  completo:true,  ren:54975, rei:4092, ent:40485, dm:5, tel:77697},
  {mes:'Jan/26',  completo:true,  ren:27374, rei:2104, ent:19567, dm:5, tel:38177},
  {mes:'Fev/26',  completo:true,  ren:14120, rei:1397, ent:9738,  dm:5, tel:20976},
  {mes:'Mar/26*', completo:false, ren:9805,  rei:0,    ent:4877,  dm:5, tel:15983},
];

// ── SUMÁRIO EXECUTIVO ─────────────────────────────────────────
// Substitua pelos resultados reais (linha TOTAL da query)
const SUMARIO_TOTAL = {
  qtde_total:          0,
  qtde_renovados:      0,
  qtde_reemitidos:     0,
  qtde_total_renov:    0,
  qtde_entregue:       0,
  qtde_desbloqueado:   0,
};

// Por ciclo de uso — últimos 90 dias
const SUMARIO_CICLO = [
  // {ciclo:'0-30d', qtde_total:0, qtde_renovados:0, qtde_reemitidos:0, qtde_total_renov:0, qtde_entregue:0, qtde_desbloqueado:0},
];

// ── FUNIL DE ATIVAÇÃO PÓS-RENOVAÇÃO ──────────────────────────
// safra = mês da renovação/reemissão (YYYYMM)
const FUNIL_DATA = [
  {safra:'202504', base:14,    ativados:13,    ativos_tc:4,     ativos_td:5,     ativos_ambos:2,     tpv_tc:0,           tpv_td:0,           tpn_tc:0,      tpn_td:0,       maps_tc:4,     maps_td:5},
  {safra:'202505', base:1110,  ativados:923,   ativos_tc:542,   ativos_td:595,   ativos_ambos:348,   tpv_tc:2802121,     tpv_td:2789540,     tpn_tc:23561,  tpn_td:52243,   maps_tc:542,   maps_td:595},
  {safra:'202506', base:16545, ativados:13859, ativos_tc:8205,  ativos_td:8162,  ativos_ambos:5101,  tpv_tc:42965053,    tpv_td:33963617,    tpn_tc:306415, tpn_td:654599,  maps_tc:8205,  maps_td:8162},
  {safra:'202507', base:30199, ativados:23920, ativos_tc:12464, ativos_td:13310, ativos_ambos:7552,  tpv_tc:62768562,    tpv_td:53299581,    tpn_tc:413653, tpn_td:1010495, maps_tc:12464, maps_td:13310},
  {safra:'202508', base:30251, ativados:22850, ativos_tc:11178, ativos_td:12720, ativos_ambos:6688,  tpv_tc:50042011,    tpv_td:48106194,    tpn_tc:340251, tpn_td:879770,  maps_tc:11178, maps_td:12720},
  {safra:'202509', base:36305, ativados:27080, ativos_tc:13582, ativos_td:15460, ativos_ambos:8052,  tpv_tc:53516636,    tpv_td:50254404,    tpn_tc:367443, tpn_td:979404,  maps_tc:13582, maps_td:15460},
  {safra:'202510', base:31845, ativados:23420, ativos_tc:10769, ativos_td:12702, ativos_ambos:6197,  tpv_tc:37656927,    tpv_td:38145545,    tpn_tc:262427, tpn_td:699641,  maps_tc:10769, maps_td:12702},
  {safra:'202511', base:47933, ativados:34543, ativos_tc:16219, ativos_td:18217, ativos_ambos:8938,  tpv_tc:45535029,    tpv_td:41594102,    tpn_tc:332887, tpn_td:792570,  maps_tc:16219, maps_td:18217},
  {safra:'202512', base:57753, ativados:40485, ativos_tc:18599, ativos_td:21529, ativos_ambos:9871,  tpv_tc:43792340,    tpv_td:40261181,    tpn_tc:314627, tpn_td:784271,  maps_tc:18599, maps_td:21529},
  {safra:'202601', base:28789, ativados:19567, ativos_tc:8011,  ativos_td:9826,  ativos_ambos:4134,  tpv_tc:14833131,    tpv_td:14034883,    tpn_tc:104430, tpn_td:273464,  maps_tc:8011,  maps_td:9826},
  {safra:'202602', base:15161, ativados:9738,  ativos_tc:4153,  ativos_td:4071,  ativos_ambos:1728,  tpv_tc:5865477,     tpv_td:3965743,     tpn_tc:39047,  tpn_td:72994,   maps_tc:4153,  maps_td:4071},
  {safra:'202603', base:9805,  ativados:4877,  ativos_tc:2052,  ativos_td:1933,  ativos_ambos:700,   tpv_tc:1669767,     tpv_td:966733,      tpn_tc:11297,  tpn_td:19262,   maps_tc:2052,  maps_td:1933},
  {safra:'202604', base:2790,  ativados:7,     ativos_tc:4,     ativos_td:5,     ativos_ambos:2,     tpv_tc:0,           tpv_td:0,           tpn_tc:0,      tpn_td:0,       maps_tc:4,     maps_td:5},
  {safra:'202605', base:2518,  ativados:7,     ativos_tc:3,     ativos_td:5,     ativos_ambos:2,     tpv_tc:0,           tpv_td:0,           tpn_tc:0,      tpn_td:0,       maps_tc:3,     maps_td:5},
  {safra:'202606', base:0,     ativados:0,     ativos_tc:0,     ativos_td:0,     ativos_ambos:0,     tpv_tc:0,           tpv_td:0,           tpn_tc:0,      tpn_td:0,       maps_tc:0,     maps_td:0},
  {safra:'202607', base:0,     ativados:0,     ativos_tc:0,     ativos_td:0,     ativos_ambos:0,     tpv_tc:0,           tpv_td:0,           tpn_tc:0,      tpn_td:0,       maps_tc:0,     maps_td:0},
  {safra:'202608', base:0,     ativados:0,     ativos_tc:0,     ativos_td:0,     ativos_ambos:0,     tpv_tc:0,           tpv_td:0,           tpn_tc:0,      tpn_td:0,       maps_tc:0,     maps_td:0},
  {safra:'202609', base:2,     ativados:2,     ativos_tc:1,     ativos_td:2,     ativos_ambos:1,     tpv_tc:0,           tpv_td:0,           tpn_tc:0,      tpn_td:0,       maps_tc:1,     maps_td:2},
  {safra:'202610', base:17,    ativados:16,    ativos_tc:9,     ativos_td:12,    ativos_ambos:5,     tpv_tc:0,           tpv_td:0,           tpn_tc:0,      tpn_td:0,       maps_tc:9,     maps_td:12},
  {safra:'202611', base:1,     ativados:1,     ativos_tc:1,     ativos_td:1,     ativos_ambos:0,     tpv_tc:0,           tpv_td:0,           tpn_tc:0,      tpn_td:0,       maps_tc:1,     maps_td:1},
  {safra:'202612', base:3,     ativados:3,     ativos_tc:2,     ativos_td:2,     ativos_ambos:1,     tpv_tc:0,           tpv_td:0,           tpn_tc:0,      tpn_td:0,       maps_tc:2,     maps_td:2},
];

// ── SPENDING ANTES DA RENOVAÇÃO ───────────────────────────────
// TPV TC+TD onde data de uso < DT_RENOVACAO_REEMISSAO (90d antes)
const SPENDING_ANTES = [
  {safra:'202504', tpv_tc_antes:8052.71,       tpv_td_antes:83254.49,      tpn_tc_antes:77,     tpn_td_antes:399},
  {safra:'202505', tpv_tc_antes:825192.75,     tpv_td_antes:917020.83,     tpn_tc_antes:7140,   tpn_td_antes:17973},
  {safra:'202506', tpv_tc_antes:17876364.53,   tpv_td_antes:17321877.05,   tpn_tc_antes:143072, tpn_td_antes:329985},
  {safra:'202507', tpv_tc_antes:28670835.25,   tpv_td_antes:27986402.82,   tpn_tc_antes:206151, tpn_td_antes:520199},
  {safra:'202508', tpv_tc_antes:25875865.30,   tpv_td_antes:26973530.88,   tpn_tc_antes:187218, tpn_td_antes:490412},
  {safra:'202509', tpv_tc_antes:31442298.01,   tpv_td_antes:31627228.37,   tpn_tc_antes:229092, tpn_td_antes:604490},
  {safra:'202510', tpv_tc_antes:28543399.45,   tpv_td_antes:30183578.04,   tpn_tc_antes:213118, tpn_td_antes:548698},
  {safra:'202511', tpv_tc_antes:40065956.39,   tpv_td_antes:38494787.44,   tpn_tc_antes:313078, tpn_td_antes:738184},
  {safra:'202512', tpv_tc_antes:45810741.96,   tpv_td_antes:41695377.12,   tpn_tc_antes:341635, tpn_td_antes:811502},
  {safra:'202601', tpv_tc_antes:26139676.40,   tpv_td_antes:25707601.52,   tpn_tc_antes:188206, tpn_td_antes:468993},
  {safra:'202602', tpv_tc_antes:16612037.02,   tpv_td_antes:12290148.18,   tpn_tc_antes:114592, tpn_td_antes:216921},
  {safra:'202603', tpv_tc_antes:12272953.03,   tpv_td_antes:8534772.06,    tpn_tc_antes:88513,  tpn_td_antes:156100},
];

// ── CICLO DE USO POR SAFRA ─────────────────────────────────────
// Fonte: FLAG_CICLO_USO_TD por safra — GRUPO1
const CICLO_SAFRA = [
  {safra:'202504', c1:14,    c2:0,    c3:0,   c4:0,   c5:0,    c6:4,     c7:1},
  {safra:'202505', c1:322,   c2:72,   c3:50,  c4:30,  c5:62,   c6:651,   c7:167},
  {safra:'202506', c1:4844,  c2:1018, c3:718, c4:566, c5:852,  c6:9661,  c7:2478},
  {safra:'202507', c1:8545,  c2:1720, c3:1185,c4:963, c5:1412, c6:19239, c7:4654},
  {safra:'202508', c1:8532,  c2:1666, c3:1200,c4:949, c5:1443, c6:20929, c7:4933},
  {safra:'202509', c1:10202, c2:1992, c3:1436,c4:1106,c5:2341, c6:25243, c7:5973},
  {safra:'202510', c1:9531,  c2:1815, c3:1155,c4:953, c5:3507, c6:20196, c7:6045},
  {safra:'202511', c1:13859, c2:2737, c3:1825,c4:2615,c5:5825, c6:29452, c7:9214},
  {safra:'202512', c1:16257, c2:3226, c3:3634,c4:4543,c5:5081, c6:32997, c7:11959},
  {safra:'202601', c1:8145,  c2:2336, c3:2492,c4:1520,c5:2411, c6:15282, c7:5991},
  {safra:'202602', c1:4155,  c2:1709, c3:895, c4:736, c5:1326, c6:7405,  c7:4750},
  {safra:'202603', c1:3586,  c2:843,  c3:653, c4:600, c5:928,  c6:5401,  c7:3972},
  {safra:'202604', c1:4888,  c2:1185, c3:965, c4:889, c5:1316, c6:7289,  c7:6058},
  {safra:'202605', c1:10652, c2:2640, c3:1912,c4:1641,c5:2553, c6:12661, c7:10924},
  {safra:'202606', c1:19005, c2:4540, c3:3095,c4:2648,c5:3893, c6:240,   c7:0},
];

// ── TOTAIS BQ — UNIVERSO COMPLETO ─────────────────────────────
// Total cartões expirados (todos os grupos) por safra {YYYYMM: qtde}
const TOTAL_EXPIRADO = {
  '202503':3,'202504':26,'202505':7534,'202506':101859,'202507':231217,
  '202508':261551,'202509':343667,'202510':270351,'202511':416394,'202512':443759,
  '202601':214075,'202602':103236,'202603':84277,'202604':123555,'202605':210918,
  '202606':296175,'202607':274950,'202608':208356,'202609':341996,'202610':474521,
  '202611':181640,'202612':433024,
};

// Total elegível Grupo 1 por safra {YYYYMM: qtde}
const TOTAL_GRUPO1 = {
  '202504':19,'202505':1354,'202506':20137,'202507':37718,'202508':39652,
  '202509':48293,'202510':43202,'202511':65527,'202512':77697,
  '202601':38177,'202602':20976,'202603':15983,'202604':22590,'202605':42983,
  '202606':33421,'202607':29525,'202608':20649,'202609':30413,'202610':40159,
  '202611':11783,'202612':6,
};

// ── DIMENSÕES DOS FILTROS ─────────────────────────────────────
const PRODS  = ['HIBRIDO', 'PURO DEBITO'];
const CICLOS = ['0-30d','31-60d','61-90d','91-120d','121-180d','+181d'];

// Distribuição de produto (substituir por dados reais do BQ)
const P_W = {HIBRIDO: 0.65, 'PURO DEBITO': 0.35};

// Distribuição por ciclo — renovações (clientes mais ativos renovam mais)
const C_REN = {
  '0-30d':0.25, '31-60d':0.30, '61-90d':0.20,
  '91-120d':0.12, '121-180d':0.08, '+181d':0.05,
};

// Distribuição por ciclo — reemissões (clientes menos ativos reemitem mais)
const C_REI = {
  '0-30d':0.06, '31-60d':0.12, '61-90d':0.20,
  '91-120d':0.24, '121-180d':0.24, '+181d':0.14,
};

// ── DISTRIBUIÇÃO DIAS_ENTREGA POR FAIXA/MÊS ──────────────────
// Gerado por update_data.py · faixas: chaves do objeto interno
// Estrutura: { 'YYYYMM': { 'Faixa X': qtde, ... }, ... }
const DIAS_ENTREGA_DIST = {};

// ── DISTRIBUIÇÃO DIAS_ENTREGA V2 (dias inteiros do tracking) ──
// Estrutura: { 'YYYYMM': { '3': 1200, '5': 800, '7': 300, ... } }
// Gerado por update_data.py via Q_DIAS_V2 (LK_MP_CARDS_TRACKING)
const DIAS_ENTREGA_V2 = {};

// ── ENTREGA POR CICLO DE USO ───────────────────────────────────
// Quem é mais ativo está recebendo o cartão?
// { 'YYYYMM': { 'ciclo': { total, entregue, faixas:{...} } } }
const ENTREGA_CICLO = {};

// ── TOTAL GRUPO 2 (derivado) ──────────────────────────────────
// GRUPO2 = expirados NÃO em GRUPO1 (todos INATIVO — sem renovações)
const TOTAL_GRUPO2 = {};
Object.keys(TOTAL_EXPIRADO).forEach(s => {
  TOTAL_GRUPO2[s] = Math.max(0, (TOTAL_EXPIRADO[s] || 0) - (TOTAL_GRUPO1[s] || 0));
});

// ── HELPER ────────────────────────────────────────────────────
// safra YYYYMM → label Mês/AA
function safraLabel(s) {
  const mm = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'];
  return mm[parseInt(s.slice(4,6))-1] + '/' + s.slice(2,4);
}

// Retorna array MONTHLY filtrado por grupo
function getMonthlyByGrupo(grupo) {
  if (grupo === 'GRUPO1') return MONTHLY;
  // GRUPO2: sem renovações/reemissões, tel = TOTAL_GRUPO2 por safra
  return MONTHLY.map(m => {
    const s = m.mes.replace('*','');
    const yy = s.slice(-2), mo = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'].indexOf(s.slice(0,3)) + 1;
    const safra = '20' + yy + String(mo).padStart(2,'0');
    const tel = TOTAL_GRUPO2[safra] || 0;
    return { mes: m.mes, completo: m.completo, ren: 0, rei: 0, ent: 0, dm: 0, tel };
  });
}

// ── RAW_DATA — reconstruído por grupo; inicializado com GRUPO1 ──
const RAW_DATA = [];
function rebuildRawData(monthly) {
  RAW_DATA.length = 0;
  monthly.forEach(m => {
    PRODS.forEach(prod => {
      const pW = P_W[prod];
      CICLOS.forEach(ciclo => {
        RAW_DATA.push({
          mes: m.mes, prod, ciclo,
          ren: Math.round(m.ren * pW * C_REN[ciclo]),
          rei: Math.round(m.rei * pW * C_REI[ciclo]),
          tel: Math.round(m.tel * pW / CICLOS.length),
          ent: Math.round(m.ent * pW / CICLOS.length),
          dm: m.dm, completo: m.completo,
        });
      });
    });
  });
}
rebuildRawData(MONTHLY);
