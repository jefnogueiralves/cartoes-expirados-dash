// ═══════════════════════════════════════════════════════════════
//  dashboard_data.js — gerado automaticamente por update_data.py
//  Última atualização: 28/03/2026
//  Fonte: meli-bi-data.SBOX_CREDITSTC.CARTAO_EXPIRADO_ANL_IA
//         meli-bi-data.SBOX_CREDITSTC.CARTAO_EXPIRADO_CUBO_IA
// ═══════════════════════════════════════════════════════════════

// ── DATA DA ÚLTIMA ATUALIZAÇÃO ────────────────────────────────
const DT_ATUALIZACAO = '28/03/2026';

// ── TOTAIS MENSAIS REAIS (BigQuery) ───────────────────────────
const MONTHLY = [
  {mes:'Abr/25', completo:true, ren:14, rei:1, ent:13, dm:4.90, tel:19},
  {mes:'Mai/25', completo:true, ren:1075, rei:69, ent:923, dm:6.90, tel:1354},
  {mes:'Jun/25', completo:true, ren:15969, rei:1004, ent:13860, dm:6.90, tel:20137},
  {mes:'Jul/25', completo:true, ren:29502, rei:1587, ent:23920, dm:8.20, tel:37719},
  {mes:'Ago/25', completo:true, ren:29404, rei:1813, ent:22851, dm:5.70, tel:39652},
  {mes:'Set/25', completo:true, ren:35274, rei:2263, ent:27080, dm:5.00, tel:48293},
  {mes:'Out/25', completo:true, ren:30830, rei:1769, ent:23421, dm:4.10, tel:43202},
  {mes:'Nov/25', completo:true, ren:46256, rei:2696, ent:34544, dm:4.00, tel:65527},
  {mes:'Dez/25', completo:true, ren:54975, rei:4092, ent:40485, dm:4.50, tel:77697},
  {mes:'Jan/26', completo:true, ren:27374, rei:2104, ent:19567, dm:4.10, tel:38177},
  {mes:'Fev/26', completo:true, ren:14121, rei:1398, ent:9739, dm:4.00, tel:20976},
  {mes:'Mar/26*', completo:false, ren:9804, rei:0, ent:4939, dm:3.90, tel:15982},
  {mes:'Abr/26', completo:true, ren:2762, rei:0, ent:7, dm:3.60, tel:22562},
  {mes:'Mai/26', completo:true, ren:2454, rei:0, ent:7, dm:3.50, tel:42916},
  {mes:'Jun/26', completo:true, ren:0, rei:0, ent:0, dm:5.00, tel:33456},
  {mes:'Jul/26', completo:true, ren:0, rei:0, ent:0, dm:5.00, tel:29570},
  {mes:'Ago/26', completo:true, ren:0, rei:0, ent:0, dm:5.00, tel:20696},
  {mes:'Set/26', completo:true, ren:3, rei:0, ent:3, dm:3.50, tel:30505},
  {mes:'Out/26', completo:true, ren:21, rei:0, ent:20, dm:5.30, tel:40361},
  {mes:'Nov/26', completo:true, ren:1, rei:0, ent:1, dm:6.00, tel:11926},
  {mes:'Dez/26', completo:true, ren:3, rei:0, ent:3, dm:6.70, tel:6},
];

// ── SUMÁRIO EXECUTIVO ─────────────────────────────────────────
const SUMARIO_TOTAL = {
  qtde_total:          0,
  qtde_renovados:      0,
  qtde_reemitidos:     0,
  qtde_total_renov:    0,
  qtde_entregue:       0,
  qtde_desbloqueado:   0,
};
const SUMARIO_CICLO = [];

// ── FUNIL DE ATIVAÇÃO PÓS-RENOVAÇÃO ──────────────────────────
const FUNIL_DATA = [
  {safra:'202504', base:15, ativados:13, ativos_tc:4, ativos_td:13, ativos_ambos:0, tpv_tc:3256, tpv_td:103932, tpn_tc:0, tpn_td:0, maps_tc:4, maps_td:13},
  {safra:'202505', base:1144, ativados:923, ativos_tc:492, ativos_td:583, ativos_ambos:0, tpv_tc:844463, tpv_td:1128877, tpn_tc:0, tpn_td:0, maps_tc:492, maps_td:583},
  {safra:'202506', base:16973, ativados:13860, ativos_tc:7909, ativos_td:8693, ativos_ambos:0, tpv_tc:15512313, tpv_td:16299444, tpn_tc:0, tpn_td:0, maps_tc:7909, maps_td:8693},
  {safra:'202507', base:31089, ativados:23920, ativos_tc:13386, ativos_td:15080, ativos_ambos:0, tpv_tc:27860198, tpv_td:28118766, tpn_tc:0, tpn_td:0, maps_tc:13386, maps_td:15080},
  {safra:'202508', base:31217, ativados:22851, ativos_tc:12711, ativos_td:14805, ativos_ambos:0, tpv_tc:26102447, tpv_td:27988183, tpn_tc:0, tpn_td:0, maps_tc:12711, maps_td:14805},
  {safra:'202509', base:37537, ativados:27080, ativos_tc:14944, ativos_td:17906, ativos_ambos:0, tpv_tc:30987292, tpv_td:32653476, tpn_tc:0, tpn_td:0, maps_tc:14944, maps_td:17906},
  {safra:'202510', base:32599, ativados:23421, ativos_tc:12980, ativos_td:15559, ativos_ambos:0, tpv_tc:27982414, tpv_td:31494815, tpn_tc:0, tpn_td:0, maps_tc:12980, maps_td:15559},
  {safra:'202511', base:48952, ativados:34544, ativos_tc:19655, ativos_td:22970, ativos_ambos:0, tpv_tc:39223815, tpv_td:40750127, tpn_tc:0, tpn_td:0, maps_tc:19655, maps_td:22970},
  {safra:'202512', base:59067, ativados:40485, ativos_tc:23423, ativos_td:26931, ativos_ambos:0, tpv_tc:47601472, tpv_td:46300072, tpn_tc:0, tpn_td:0, maps_tc:23423, maps_td:26931},
  {safra:'202601', base:29478, ativados:19567, ativos_tc:11159, ativos_td:12988, ativos_ambos:0, tpv_tc:20827493, tpv_td:19302199, tpn_tc:0, tpn_td:0, maps_tc:11159, maps_td:12988},
  {safra:'202602', base:15519, ativados:9739, ativos_tc:5637, ativos_td:5537, ativos_ambos:0, tpv_tc:8767317, tpv_td:5993134, tpn_tc:0, tpn_td:0, maps_tc:5637, maps_td:5537},
  {safra:'202603', base:9804, ativados:4939, ativos_tc:2961, ativos_td:2955, ativos_ambos:0, tpv_tc:3084911, tpv_td:1906497, tpn_tc:0, tpn_td:0, maps_tc:2961, maps_td:2955},
  {safra:'202604', base:2762, ativados:7, ativos_tc:840, ativos_td:710, ativos_ambos:0, tpv_tc:1176156, tpv_td:630663, tpn_tc:0, tpn_td:0, maps_tc:840, maps_td:710},
  {safra:'202605', base:2454, ativados:7, ativos_tc:624, ativos_td:618, ativos_ambos:0, tpv_tc:474326, tpv_td:306726, tpn_tc:0, tpn_td:0, maps_tc:624, maps_td:618},
  {safra:'202606', base:0, ativados:0, ativos_tc:0, ativos_td:0, ativos_ambos:0, tpv_tc:0, tpv_td:0, tpn_tc:0, tpn_td:0, maps_tc:0, maps_td:0},
  {safra:'202607', base:0, ativados:0, ativos_tc:0, ativos_td:0, ativos_ambos:0, tpv_tc:0, tpv_td:0, tpn_tc:0, tpn_td:0, maps_tc:0, maps_td:0},
  {safra:'202608', base:0, ativados:0, ativos_tc:0, ativos_td:0, ativos_ambos:0, tpv_tc:0, tpv_td:0, tpn_tc:0, tpn_td:0, maps_tc:0, maps_td:0},
  {safra:'202609', base:3, ativados:3, ativos_tc:0, ativos_td:2, ativos_ambos:0, tpv_tc:0, tpv_td:497, tpn_tc:0, tpn_td:0, maps_tc:0, maps_td:2},
  {safra:'202610', base:21, ativados:20, ativos_tc:9, ativos_td:13, ativos_ambos:0, tpv_tc:11725, tpv_td:14408, tpn_tc:0, tpn_td:0, maps_tc:9, maps_td:13},
  {safra:'202611', base:1, ativados:1, ativos_tc:1, ativos_td:1, ativos_ambos:0, tpv_tc:583, tpv_td:823, tpn_tc:0, tpn_td:0, maps_tc:1, maps_td:1},
  {safra:'202612', base:3, ativados:3, ativos_tc:0, ativos_td:0, ativos_ambos:0, tpv_tc:0, tpv_td:0, tpn_tc:0, tpn_td:0, maps_tc:0, maps_td:0},
];

// ── SPENDING ANTES DA RENOVAÇÃO ───────────────────────────────
const SPENDING_ANTES = [
  {safra:'202504', tpv_tc_antes:7238.28, tpv_td_antes:139590.89, tpn_tc_antes:0, tpn_td_antes:0},
  {safra:'202505', tpv_tc_antes:932059.83, tpv_td_antes:1349661.19, tpn_tc_antes:0, tpn_td_antes:0},
  {safra:'202506', tpv_tc_antes:15523887.04, tpv_td_antes:19603234.49, tpn_tc_antes:0, tpn_td_antes:0},
  {safra:'202507', tpv_tc_antes:28872368.55, tpv_td_antes:34847930.56, tpn_tc_antes:0, tpn_td_antes:0},
  {safra:'202508', tpv_tc_antes:28230274.27, tpv_td_antes:35627066.84, tpn_tc_antes:0, tpn_td_antes:0},
  {safra:'202509', tpv_tc_antes:33969104.19, tpv_td_antes:41532590.01, tpn_tc_antes:0, tpn_td_antes:0},
  {safra:'202510', tpv_tc_antes:29830933.93, tpv_td_antes:39241034.53, tpn_tc_antes:0, tpn_td_antes:0},
  {safra:'202511', tpv_tc_antes:44395443.41, tpv_td_antes:53441044.51, tpn_tc_antes:0, tpn_td_antes:0},
  {safra:'202512', tpv_tc_antes:56967172.05, tpv_td_antes:60449175.32, tpn_tc_antes:0, tpn_td_antes:0},
  {safra:'202601', tpv_tc_antes:29432347.99, tpv_td_antes:32353048.57, tpn_tc_antes:0, tpn_td_antes:0},
  {safra:'202602', tpv_tc_antes:17485707.81, tpv_td_antes:15489675.83, tpn_tc_antes:0, tpn_td_antes:0},
  {safra:'202603', tpv_tc_antes:12708467.72, tpv_td_antes:10532038.86, tpn_tc_antes:0, tpn_td_antes:0},
  {safra:'202604', tpv_tc_antes:15997261.46, tpv_td_antes:13244461.29, tpn_tc_antes:0, tpn_td_antes:0},
  {safra:'202605', tpv_tc_antes:21928589.70, tpv_td_antes:17327601.98, tpn_tc_antes:0, tpn_td_antes:0},
  {safra:'202606', tpv_tc_antes:10065114.93, tpv_td_antes:11872350.53, tpn_tc_antes:0, tpn_td_antes:0},
  {safra:'202607', tpv_tc_antes:0.00, tpv_td_antes:0.00, tpn_tc_antes:0, tpn_td_antes:0},
  {safra:'202608', tpv_tc_antes:0.00, tpv_td_antes:0.00, tpn_tc_antes:0, tpn_td_antes:0},
  {safra:'202609', tpv_tc_antes:702.00, tpv_td_antes:0.00, tpn_tc_antes:0, tpn_td_antes:0},
  {safra:'202610', tpv_tc_antes:29878.10, tpv_td_antes:33251.08, tpn_tc_antes:0, tpn_td_antes:0},
  {safra:'202611', tpv_tc_antes:0.00, tpv_td_antes:0.00, tpn_tc_antes:0, tpn_td_antes:0},
  {safra:'202612', tpv_tc_antes:1439.70, tpv_td_antes:20.00, tpn_tc_antes:0, tpn_td_antes:0},
];

// ── CICLO DE USO POR SAFRA ─────────────────────────────────────
const CICLO_SAFRA = [
  {safra:'202504', c1:12, c2:0, c3:0, c4:0, c5:0, c6:3, c7:0},
  {safra:'202505', c1:306, c2:74, c3:47, c4:26, c5:61, c6:504, c7:126},
  {safra:'202506', c1:4779, c2:984, c3:689, c4:551, c5:842, c6:7264, c7:1864},
  {safra:'202507', c1:8564, c2:1690, c3:1165, c4:950, c5:1404, c6:13839, c7:3477},
  {safra:'202508', c1:8523, c2:1612, c3:1194, c4:932, c5:1452, c6:13979, c7:3525},
  {safra:'202509', c1:10307, c2:1931, c3:1410, c4:1110, c5:2119, c6:16435, c7:4225},
  {safra:'202510', c1:9420, c2:1743, c3:1135, c4:972, c5:2665, c6:12542, c7:4122},
  {safra:'202511', c1:13739, c2:2696, c3:1829, c4:1999, c5:4260, c6:18134, c7:6295},
  {safra:'202512', c1:16405, c2:3237, c3:2909, c4:3629, c5:3648, c6:20973, c7:8266},
  {safra:'202601', c1:8313, c2:2035, c3:2115, c4:1240, c5:1672, c6:9950, c7:4153},
  {safra:'202602', c1:4077, c2:1431, c3:700, c4:531, c5:860, c6:4668, c7:3252},
  {safra:'202603', c1:2638, c2:556, c3:417, c4:341, c5:443, c6:2980, c7:2429},
  {safra:'202604', c1:504, c2:164, c3:120, c4:90, c5:115, c6:852, c7:917},
  {safra:'202605', c1:535, c2:152, c3:108, c4:69, c5:102, c6:767, c7:721},
  {safra:'202606', c1:0, c2:0, c3:0, c4:0, c5:0, c6:0, c7:0},
  {safra:'202607', c1:0, c2:0, c3:0, c4:0, c5:0, c6:0, c7:0},
  {safra:'202608', c1:0, c2:0, c3:0, c4:0, c5:0, c6:0, c7:0},
  {safra:'202609', c1:0, c2:0, c3:2, c4:0, c5:0, c6:1, c7:0},
  {safra:'202610', c1:11, c2:0, c3:0, c4:2, c5:0, c6:7, c7:1},
  {safra:'202611', c1:1, c2:0, c3:0, c4:0, c5:0, c6:0, c7:0},
  {safra:'202612', c1:0, c2:0, c3:0, c4:0, c5:0, c6:0, c7:3},
];

// ── DISTRIBUIÇÃO DIAS_ENTREGA POR FAIXA/MÊS ──────────────────
const DIAS_ENTREGA_DIST = {
  '202504': {'00. CARTAO NAO ENTREGUE': 1, '01. ATE 2 DIAS': 2, '02. ATE 5 DIAS': 4, '03. ATE 7 DIAS': 5, '04. ATE 10 DIAS': 2, '06. NAO RENOVADO': 5},
  '202505': {'00. CARTAO NAO ENTREGUE': 56, '01. ATE 2 DIAS': 12, '02. ATE 5 DIAS': 334, '03. ATE 7 DIAS': 297, '04. ATE 10 DIAS': 176, '05. ACIMA DE 10 DIAS': 200, '06. NAO RENOVADO': 279},
  '202506': {'00. CARTAO NAO ENTREGUE': 670, '01. ATE 2 DIAS': 478, '02. ATE 5 DIAS': 5736, '03. ATE 7 DIAS': 2796, '04. ATE 10 DIAS': 3169, '05. ACIMA DE 10 DIAS': 3120, '06. NAO RENOVADO': 4169},
  '202507': {'00. CARTAO NAO ENTREGUE': 1463, '01. ATE 2 DIAS': 758, '02. ATE 5 DIAS': 6809, '03. ATE 7 DIAS': 4852, '04. ATE 10 DIAS': 6017, '05. ACIMA DE 10 DIAS': 9603, '06. NAO RENOVADO': 8217},
  '202508': {'00. CARTAO NAO ENTREGUE': 1687, '01. ATE 2 DIAS': 3607, '02. ATE 5 DIAS': 11710, '03. ATE 7 DIAS': 5065, '04. ATE 10 DIAS': 3003, '05. ACIMA DE 10 DIAS': 4332, '06. NAO RENOVADO': 10249},
  '202509': {'00. CARTAO NAO ENTREGUE': 1895, '01. ATE 2 DIAS': 6008, '02. ATE 5 DIAS': 15336, '03. ATE 7 DIAS': 5448, '04. ATE 10 DIAS': 2772, '05. ACIMA DE 10 DIAS': 3815, '06. NAO RENOVADO': 13020},
  '202510': {'00. CARTAO NAO ENTREGUE': 1102, '01. ATE 2 DIAS': 7758, '02. ATE 5 DIAS': 14472, '03. ATE 7 DIAS': 4253, '04. ATE 10 DIAS': 1628, '05. ACIMA DE 10 DIAS': 1617, '06. NAO RENOVADO': 12373},
  '202511': {'00. CARTAO NAO ENTREGUE': 1467, '01. ATE 2 DIAS': 10151, '02. ATE 5 DIAS': 23011, '03. ATE 7 DIAS': 8106, '04. ATE 10 DIAS': 1974, '05. ACIMA DE 10 DIAS': 1547, '06. NAO RENOVADO': 19273},
  '202512': {'00. CARTAO NAO ENTREGUE': 1571, '01. ATE 2 DIAS': 8637, '02. ATE 5 DIAS': 27157, '03. ATE 7 DIAS': 11274, '04. ATE 10 DIAS': 3732, '05. ACIMA DE 10 DIAS': 2604, '06. NAO RENOVADO': 22722},
  '202601': {'00. CARTAO NAO ENTREGUE': 613, '01. ATE 2 DIAS': 5930, '02. ATE 5 DIAS': 13704, '03. ATE 7 DIAS': 4872, '04. ATE 10 DIAS': 1448, '05. ACIMA DE 10 DIAS': 807, '06. NAO RENOVADO': 10803},
  '202602': {'00. CARTAO NAO ENTREGUE': 356, '01. ATE 2 DIAS': 2915, '02. ATE 5 DIAS': 7301, '03. ATE 7 DIAS': 2530, '04. ATE 10 DIAS': 676, '05. ACIMA DE 10 DIAS': 343, '06. NAO RENOVADO': 6857},
  '202603': {'00. CARTAO NAO ENTREGUE': 869, '01. ATE 2 DIAS': 2012, '02. ATE 5 DIAS': 4701, '03. ATE 7 DIAS': 1589, '04. ATE 10 DIAS': 506, '05. ACIMA DE 10 DIAS': 127, '06. NAO RENOVADO': 6178},
  '202604': {'00. CARTAO NAO ENTREGUE': 268, '01. ATE 2 DIAS': 684, '02. ATE 5 DIAS': 1350, '03. ATE 7 DIAS': 337, '04. ATE 10 DIAS': 79, '05. ACIMA DE 10 DIAS': 44, '06. NAO RENOVADO': 19800},
  '202605': {'00. CARTAO NAO ENTREGUE': 371, '01. ATE 2 DIAS': 657, '02. ATE 5 DIAS': 1060, '03. ATE 7 DIAS': 266, '04. ATE 10 DIAS': 66, '05. ACIMA DE 10 DIAS': 34, '06. NAO RENOVADO': 40462},
  '202606': {'06. NAO RENOVADO': 33456},
  '202607': {'06. NAO RENOVADO': 29570},
  '202608': {'06. NAO RENOVADO': 20696},
  '202609': {'02. ATE 5 DIAS': 3, '06. NAO RENOVADO': 30503},
  '202610': {'01. ATE 2 DIAS': 2, '02. ATE 5 DIAS': 11, '03. ATE 7 DIAS': 3, '04. ATE 10 DIAS': 3, '05. ACIMA DE 10 DIAS': 2, '06. NAO RENOVADO': 40347},
  '202611': {'03. ATE 7 DIAS': 1, '06. NAO RENOVADO': 11925},
  '202612': {'02. ATE 5 DIAS': 2, '05. ACIMA DE 10 DIAS': 1, '06. NAO RENOVADO': 3}
};

// ── DISTRIBUIÇÃO DIAS_ENTREGA V2 (dias inteiros do tracking) ──
const DIAS_ENTREGA_V2 = {
  '202504': {'2': 4, '4': 3, '5': 2, '6': 1, '7': 5, '8': 2},
  '202505': {'10': 33, '11': 30, '12': 18, '13': 14, '14': 17, '15': 16, '16': 9, '17': 8, '18': 11, '19': 9, '2': 12, '20': 6, '21': 7, '22': 8, '23': 2, '24': 6, '25': 2, '26': 3, '27': 4, '28': 3, '29': 6, '3': 76, '32': 2, '33': 1, '34': 2, '36': 5, '37': 1, '39': 1, '4': 77, '41': 1, '42': 3, '5': 181, '51': 1, '52': 1, '6': 164, '7': 134, '8': 90, '9': 53},
  '202506': {'1': 4, '10': 764, '11': 500, '12': 353, '13': 184, '14': 170, '15': 235, '16': 190, '17': 190, '18': 129, '19': 148, '2': 474, '20': 88, '21': 87, '22': 111, '23': 69, '24': 79, '25': 73, '26': 61, '27': 34, '28': 34, '29': 51, '3': 1495, '30': 38, '31': 42, '32': 26, '33': 33, '34': 11, '35': 10, '36': 23, '37': 13, '38': 20, '39': 6, '4': 2145, '40': 12, '41': 8, '42': 7, '43': 8, '44': 6, '45': 6, '46': 11, '47': 4, '48': 5, '5': 2095, '50': 4, '51': 5, '52': 3, '53': 3, '54': 2, '55': 1, '56': 1, '57': 3, '58': 2, '59': 2, '6': 1601, '60': 1, '7': 1195, '8': 1398, '9': 1008},
  '202507': {'1': 5, '10': 1493, '11': 1307, '12': 1272, '13': 1263, '14': 939, '15': 813, '16': 638, '17': 519, '18': 316, '19': 261, '2': 753, '20': 272, '21': 258, '22': 197, '23': 156, '24': 136, '25': 76, '26': 87, '27': 139, '28': 134, '29': 90, '3': 2087, '30': 90, '31': 70, '32': 45, '33': 58, '34': 62, '35': 55, '36': 46, '37': 38, '38': 24, '39': 21, '4': 2706, '40': 25, '41': 21, '42': 18, '43': 30, '44': 12, '45': 7, '46': 7, '47': 5, '48': 10, '49': 11, '5': 2017, '50': 11, '51': 5, '52': 4, '53': 1, '54': 3, '55': 5, '56': 3, '57': 5, '58': 4, '59': 1, '6': 2521, '7': 2332, '8': 2620, '9': 1904},
  '202508': {'1': 98, '10': 672, '11': 500, '12': 457, '13': 443, '14': 350, '15': 273, '16': 296, '17': 236, '18': 215, '19': 187, '2': 3509, '20': 169, '21': 168, '22': 106, '23': 93, '24': 88, '25': 68, '26': 64, '27': 80, '28': 53, '29': 60, '3': 3796, '30': 47, '31': 34, '32': 30, '33': 26, '34': 31, '35': 30, '36': 28, '37': 22, '38': 18, '39': 9, '4': 3964, '40': 10, '41': 18, '42': 8, '43': 8, '44': 10, '45': 3, '46': 1, '47': 3, '48': 7, '49': 10, '5': 3949, '50': 6, '51': 5, '52': 4, '53': 3, '54': 2, '55': 1, '57': 3, '58': 2, '59': 3, '6': 2941, '60': 2, '7': 2124, '8': 1409, '9': 922},
  '202509': {'1': 576, '10': 565, '11': 494, '12': 402, '13': 331, '14': 371, '15': 226, '16': 253, '17': 225, '18': 181, '19': 165, '2': 5432, '20': 134, '21': 140, '22': 102, '23': 68, '24': 72, '25': 71, '26': 50, '27': 44, '28': 51, '29': 41, '3': 5780, '30': 35, '31': 36, '32': 28, '33': 31, '34': 25, '35': 27, '36': 15, '37': 17, '38': 14, '39': 7, '4': 5025, '40': 11, '41': 7, '42': 7, '43': 7, '44': 8, '45': 6, '46': 7, '47': 4, '48': 7, '49': 6, '5': 4531, '50': 5, '51': 3, '52': 2, '53': 4, '54': 3, '55': 4, '56': 4, '57': 1, '58': 1, '59': 4, '6': 3142, '60': 1, '7': 2307, '8': 1339, '9': 868},
  '202510': {'1': 1587, '10': 280, '11': 206, '12': 163, '13': 143, '14': 167, '15': 111, '16': 108, '17': 80, '18': 69, '19': 53, '2': 6171, '20': 60, '21': 41, '22': 44, '23': 46, '24': 31, '25': 21, '26': 26, '27': 25, '28': 27, '29': 19, '3': 5802, '30': 22, '31': 12, '32': 18, '33': 12, '34': 13, '35': 15, '36': 6, '37': 8, '38': 6, '39': 5, '4': 4573, '40': 13, '41': 2, '42': 4, '43': 6, '44': 1, '45': 3, '46': 3, '47': 1, '49': 1, '5': 4096, '51': 2, '52': 2, '53': 1, '54': 2, '55': 3, '57': 1, '6': 2520, '60': 1, '7': 1733, '8': 877, '9': 472},
  '202511': {'1': 1716, '10': 290, '11': 124, '12': 130, '13': 136, '14': 119, '15': 79, '16': 108, '17': 60, '18': 52, '19': 52, '2': 8435, '20': 72, '21': 52, '22': 54, '23': 42, '24': 24, '25': 23, '26': 41, '27': 35, '28': 30, '29': 23, '3': 9259, '30': 24, '31': 20, '32': 11, '33': 24, '34': 17, '35': 16, '36': 11, '37': 6, '38': 6, '39': 6, '4': 7470, '40': 12, '41': 14, '42': 9, '43': 6, '44': 5, '45': 2, '46': 5, '47': 5, '48': 1, '49': 7, '5': 6281, '50': 5, '51': 2, '52': 2, '53': 2, '54': 4, '55': 2, '57': 3, '58': 3, '59': 2, '6': 5158, '60': 4, '7': 2949, '8': 1173, '9': 511},
  '202512': {'0': 1, '1': 1676, '10': 671, '11': 463, '12': 336, '13': 265, '14': 154, '15': 104, '16': 98, '17': 70, '18': 73, '19': 58, '2': 6961, '20': 50, '21': 66, '22': 53, '23': 44, '24': 31, '25': 49, '26': 44, '27': 56, '28': 52, '29': 47, '3': 9532, '30': 34, '31': 32, '32': 35, '33': 21, '34': 25, '35': 27, '36': 17, '37': 22, '38': 25, '39': 18, '4': 9206, '40': 20, '41': 15, '42': 13, '43': 14, '44': 9, '45': 14, '46': 7, '47': 8, '48': 6, '49': 5, '5': 8419, '50': 7, '51': 5, '52': 6, '53': 11, '54': 5, '55': 1, '56': 5, '57': 6, '58': 3, '59': 5, '6': 6707, '60': 1, '7': 4567, '8': 2070, '9': 991},
  '202601': {'1': 1374, '10': 194, '11': 139, '12': 92, '13': 44, '14': 35, '15': 32, '16': 22, '17': 25, '18': 24, '19': 19, '2': 4556, '20': 22, '21': 32, '22': 19, '23': 16, '24': 20, '25': 19, '26': 15, '27': 16, '28': 17, '29': 10, '3': 5097, '30': 10, '31': 5, '32': 5, '33': 12, '34': 11, '35': 10, '36': 4, '37': 13, '38': 11, '39': 6, '4': 4379, '40': 5, '41': 3, '42': 7, '43': 5, '44': 7, '45': 5, '46': 3, '47': 2, '48': 7, '49': 4, '5': 4229, '50': 3, '51': 3, '52': 2, '53': 3, '54': 1, '56': 1, '57': 1, '58': 1, '6': 3210, '60': 1, '7': 1662, '8': 884, '9': 370},
  '202602': {'1': 635, '10': 69, '11': 49, '12': 33, '13': 24, '14': 12, '15': 12, '16': 14, '17': 14, '18': 15, '19': 9, '2': 2279, '20': 8, '21': 11, '22': 11, '23': 10, '24': 9, '25': 12, '26': 5, '27': 4, '28': 11, '29': 6, '3': 2956, '30': 7, '31': 8, '32': 7, '33': 1, '34': 2, '35': 3, '36': 1, '37': 6, '38': 2, '39': 3, '4': 2164, '40': 2, '42': 6, '44': 4, '45': 1, '47': 2, '48': 1, '49': 1, '5': 2181, '51': 1, '57': 1, '6': 1656, '60': 1, '7': 874, '8': 416, '9': 191},
  '202603': {'0': 1, '1': 411, '10': 52, '11': 20, '12': 13, '13': 10, '14': 5, '15': 8, '16': 9, '17': 4, '18': 9, '19': 7, '2': 1600, '20': 2, '21': 2, '22': 3, '23': 5, '24': 4, '26': 1, '27': 1, '28': 2, '29': 1, '3': 1795, '30': 1, '31': 3, '32': 3, '33': 2, '35': 1, '36': 1, '37': 2, '4': 1522, '40': 1, '41': 2, '44': 1, '5': 1384, '53': 1, '6': 1045, '7': 544, '8': 319, '9': 135},
  '202604': {'1': 39, '10': 13, '11': 8, '12': 7, '13': 4, '14': 2, '15': 3, '16': 1, '17': 3, '18': 1, '2': 645, '21': 2, '22': 2, '23': 3, '24': 1, '28': 1, '3': 711, '34': 1, '37': 1, '4': 346, '44': 1, '45': 1, '47': 1, '5': 293, '53': 1, '6': 249, '7': 88, '8': 42, '9': 24},
  '202605': {'1': 38, '10': 11, '11': 4, '12': 3, '13': 1, '15': 1, '16': 6, '17': 2, '19': 1, '2': 619, '21': 6, '22': 4, '23': 2, '24': 1, '25': 3, '3': 556, '4': 263, '5': 241, '6': 198, '7': 68, '8': 36, '9': 19},
  '202609': {'3': 1, '4': 1},
  '202610': {'1': 1, '10': 1, '11': 1, '21': 1, '3': 1, '4': 5, '5': 2, '7': 3, '8': 1, '9': 1},
  '202611': {'7': 1},
  '202612': {'16': 1, '3': 1, '5': 1}
};

// ── ENTREGA POR CICLO DE USO ───────────────────────────────────
const ENTREGA_CICLO = {
  '202504': {
    '01. 1 A 30 D': {total:14, entregue:10, faixas:{'00. CARTAO NAO ENTREGUE': 1, '01. ATE 2 DIAS': 1, '02. ATE 5 DIAS': 3, '03. ATE 7 DIAS': 4, '04. ATE 10 DIAS': 2, '06. NAO RENOVADO': 3}},
    '06. ACIMA DE 180 D': {total:4, entregue:3, faixas:{'01. ATE 2 DIAS': 1, '02. ATE 5 DIAS': 1, '03. ATE 7 DIAS': 1, '06. NAO RENOVADO': 1}},
    '07. NAO ATIVO': {total:1, entregue:0, faixas:{'06. NAO RENOVADO': 1}}
  },
  '202505': {
    '01. 1 A 30 D': {total:324, entregue:282, faixas:{'00. CARTAO NAO ENTREGUE': 6, '01. ATE 2 DIAS': 3, '02. ATE 5 DIAS': 94, '03. ATE 7 DIAS': 90, '04. ATE 10 DIAS': 37, '05. ACIMA DE 10 DIAS': 58, '06. NAO RENOVADO': 36}},
    '02. 31 A 60 D': {total:72, entregue:64, faixas:{'00. CARTAO NAO ENTREGUE': 3, '01. ATE 2 DIAS': 1, '02. ATE 5 DIAS': 22, '03. ATE 7 DIAS': 18, '04. ATE 10 DIAS': 11, '05. ACIMA DE 10 DIAS': 12, '06. NAO RENOVADO': 5}},
    '03. 61 A 90 D': {total:49, entregue:38, faixas:{'00. CARTAO NAO ENTREGUE': 6, '01. ATE 2 DIAS': 1, '02. ATE 5 DIAS': 12, '03. ATE 7 DIAS': 9, '04. ATE 10 DIAS': 6, '05. ACIMA DE 10 DIAS': 10, '06. NAO RENOVADO': 5}},
    '04. 91 A 120 D': {total:27, entregue:24, faixas:{'00. CARTAO NAO ENTREGUE': 1, '02. ATE 5 DIAS': 10, '03. ATE 7 DIAS': 3, '04. ATE 10 DIAS': 4, '05. ACIMA DE 10 DIAS': 7, '06. NAO RENOVADO': 2}},
    '05. 121 A 180 D': {total:63, entregue:54, faixas:{'00. CARTAO NAO ENTREGUE': 4, '02. ATE 5 DIAS': 15, '03. ATE 7 DIAS': 15, '04. ATE 10 DIAS': 11, '05. ACIMA DE 10 DIAS': 13, '06. NAO RENOVADO': 5}},
    '06. ACIMA DE 180 D': {total:652, entregue:454, faixas:{'00. CARTAO NAO ENTREGUE': 26, '01. ATE 2 DIAS': 7, '02. ATE 5 DIAS': 152, '03. ATE 7 DIAS': 133, '04. ATE 10 DIAS': 83, '05. ACIMA DE 10 DIAS': 79, '06. NAO RENOVADO': 172}},
    '07. NAO ATIVO': {total:167, entregue:103, faixas:{'00. CARTAO NAO ENTREGUE': 10, '02. ATE 5 DIAS': 29, '03. ATE 7 DIAS': 29, '04. ATE 10 DIAS': 24, '05. ACIMA DE 10 DIAS': 21, '06. NAO RENOVADO': 54}}
  },
  '202506': {
    '01. 1 A 30 D': {total:4850, entregue:4254, faixas:{'00. CARTAO NAO ENTREGUE': 138, '01. ATE 2 DIAS': 150, '02. ATE 5 DIAS': 1686, '03. ATE 7 DIAS': 807, '04. ATE 10 DIAS': 851, '05. ACIMA DE 10 DIAS': 760, '06. NAO RENOVADO': 458}},
    '02. 31 A 60 D': {total:1005, entregue:905, faixas:{'00. CARTAO NAO ENTREGUE': 28, '01. ATE 2 DIAS': 35, '02. ATE 5 DIAS': 312, '03. ATE 7 DIAS': 163, '04. ATE 10 DIAS': 205, '05. ACIMA DE 10 DIAS': 190, '06. NAO RENOVADO': 72}},
    '03. 61 A 90 D': {total:715, entregue:627, faixas:{'00. CARTAO NAO ENTREGUE': 29, '01. ATE 2 DIAS': 21, '02. ATE 5 DIAS': 247, '03. ATE 7 DIAS': 104, '04. ATE 10 DIAS': 125, '05. ACIMA DE 10 DIAS': 130, '06. NAO RENOVADO': 59}},
    '04. 91 A 120 D': {total:570, entregue:500, faixas:{'00. CARTAO NAO ENTREGUE': 17, '01. ATE 2 DIAS': 11, '02. ATE 5 DIAS': 206, '03. ATE 7 DIAS': 89, '04. ATE 10 DIAS': 104, '05. ACIMA DE 10 DIAS': 90, '06. NAO RENOVADO': 53}},
    '05. 121 A 180 D': {total:855, entregue:768, faixas:{'00. CARTAO NAO ENTREGUE': 33, '01. ATE 2 DIAS': 22, '02. ATE 5 DIAS': 292, '03. ATE 7 DIAS': 141, '04. ATE 10 DIAS': 156, '05. ACIMA DE 10 DIAS': 157, '06. NAO RENOVADO': 54}},
    '06. ACIMA DE 180 D': {total:9665, entregue:6533, faixas:{'00. CARTAO NAO ENTREGUE': 343, '01. ATE 2 DIAS': 193, '02. ATE 5 DIAS': 2387, '03. ATE 7 DIAS': 1199, '04. ATE 10 DIAS': 1369, '05. ACIMA DE 10 DIAS': 1385, '06. NAO RENOVADO': 2789}},
    '07. NAO ATIVO': {total:2478, entregue:1712, faixas:{'00. CARTAO NAO ENTREGUE': 82, '01. ATE 2 DIAS': 46, '02. ATE 5 DIAS': 606, '03. ATE 7 DIAS': 293, '04. ATE 10 DIAS': 359, '05. ACIMA DE 10 DIAS': 408, '06. NAO RENOVADO': 684}}
  },
  '202507': {
    '01. 1 A 30 D': {total:8539, entregue:7532, faixas:{'00. CARTAO NAO ENTREGUE': 320, '01. ATE 2 DIAS': 195, '02. ATE 5 DIAS': 1973, '03. ATE 7 DIAS': 1357, '04. ATE 10 DIAS': 1560, '05. ACIMA DE 10 DIAS': 2446, '06. NAO RENOVADO': 688}},
    '02. 31 A 60 D': {total:1713, entregue:1511, faixas:{'00. CARTAO NAO ENTREGUE': 74, '01. ATE 2 DIAS': 33, '02. ATE 5 DIAS': 340, '03. ATE 7 DIAS': 267, '04. ATE 10 DIAS': 330, '05. ACIMA DE 10 DIAS': 541, '06. NAO RENOVADO': 128}},
    '03. 61 A 90 D': {total:1181, entregue:1046, faixas:{'00. CARTAO NAO ENTREGUE': 53, '01. ATE 2 DIAS': 17, '02. ATE 5 DIAS': 247, '03. ATE 7 DIAS': 176, '04. ATE 10 DIAS': 216, '05. ACIMA DE 10 DIAS': 390, '06. NAO RENOVADO': 82}},
    '04. 91 A 120 D': {total:971, entregue:856, faixas:{'00. CARTAO NAO ENTREGUE': 45, '01. ATE 2 DIAS': 25, '02. ATE 5 DIAS': 217, '03. ATE 7 DIAS': 138, '04. ATE 10 DIAS': 170, '05. ACIMA DE 10 DIAS': 306, '06. NAO RENOVADO': 70}},
    '05. 121 A 180 D': {total:1411, entregue:1262, faixas:{'00. CARTAO NAO ENTREGUE': 58, '01. ATE 2 DIAS': 23, '02. ATE 5 DIAS': 301, '03. ATE 7 DIAS': 205, '04. ATE 10 DIAS': 275, '05. ACIMA DE 10 DIAS': 458, '06. NAO RENOVADO': 91}},
    '06. ACIMA DE 180 D': {total:19251, entregue:12588, faixas:{'00. CARTAO NAO ENTREGUE': 754, '01. ATE 2 DIAS': 359, '02. ATE 5 DIAS': 3031, '03. ATE 7 DIAS': 2154, '04. ATE 10 DIAS': 2749, '05. ACIMA DE 10 DIAS': 4295, '06. NAO RENOVADO': 5909}},
    '07. NAO ATIVO': {total:4653, entregue:3245, faixas:{'00. CARTAO NAO ENTREGUE': 159, '01. ATE 2 DIAS': 106, '02. ATE 5 DIAS': 700, '03. ATE 7 DIAS': 555, '04. ATE 10 DIAS': 717, '05. ACIMA DE 10 DIAS': 1167, '06. NAO RENOVADO': 1249}}
  },
  '202508': {
    '01. 1 A 30 D': {total:8533, entregue:7280, faixas:{'00. CARTAO NAO ENTREGUE': 362, '01. ATE 2 DIAS': 1032, '02. ATE 5 DIAS': 3236, '03. ATE 7 DIAS': 1326, '04. ATE 10 DIAS': 735, '05. ACIMA DE 10 DIAS': 951, '06. NAO RENOVADO': 891}},
    '02. 31 A 60 D': {total:1663, entregue:1424, faixas:{'00. CARTAO NAO ENTREGUE': 68, '01. ATE 2 DIAS': 204, '02. ATE 5 DIAS': 597, '03. ATE 7 DIAS': 273, '04. ATE 10 DIAS': 141, '05. ACIMA DE 10 DIAS': 209, '06. NAO RENOVADO': 171}},
    '03. 61 A 90 D': {total:1217, entregue:1055, faixas:{'00. CARTAO NAO ENTREGUE': 56, '01. ATE 2 DIAS': 133, '02. ATE 5 DIAS': 444, '03. ATE 7 DIAS': 192, '04. ATE 10 DIAS': 113, '05. ACIMA DE 10 DIAS': 173, '06. NAO RENOVADO': 106}},
    '04. 91 A 120 D': {total:941, entregue:836, faixas:{'00. CARTAO NAO ENTREGUE': 46, '01. ATE 2 DIAS': 114, '02. ATE 5 DIAS': 370, '03. ATE 7 DIAS': 152, '04. ATE 10 DIAS': 87, '05. ACIMA DE 10 DIAS': 113, '06. NAO RENOVADO': 59}},
    '05. 121 A 180 D': {total:1443, entregue:1284, faixas:{'00. CARTAO NAO ENTREGUE': 61, '01. ATE 2 DIAS': 169, '02. ATE 5 DIAS': 560, '03. ATE 7 DIAS': 232, '04. ATE 10 DIAS': 137, '05. ACIMA DE 10 DIAS': 186, '06. NAO RENOVADO': 98}},
    '06. ACIMA DE 180 D': {total:20923, entregue:12547, faixas:{'00. CARTAO NAO ENTREGUE': 927, '01. ATE 2 DIAS': 1547, '02. ATE 5 DIAS': 5181, '03. ATE 7 DIAS': 2329, '04. ATE 10 DIAS': 1409, '05. ACIMA DE 10 DIAS': 2081, '06. NAO RENOVADO': 7449}},
    '07. NAO ATIVO': {total:4933, entregue:3291, faixas:{'00. CARTAO NAO ENTREGUE': 167, '01. ATE 2 DIAS': 408, '02. ATE 5 DIAS': 1322, '03. ATE 7 DIAS': 561, '04. ATE 10 DIAS': 381, '05. ACIMA DE 10 DIAS': 619, '06. NAO RENOVADO': 1475}}
  },
  '202509': {
    '01. 1 A 30 D': {total:10226, entregue:8834, faixas:{'00. CARTAO NAO ENTREGUE': 401, '01. ATE 2 DIAS': 1749, '02. ATE 5 DIAS': 4256, '03. ATE 7 DIAS': 1338, '04. ATE 10 DIAS': 666, '05. ACIMA DE 10 DIAS': 825, '06. NAO RENOVADO': 991}},
    '02. 31 A 60 D': {total:1971, entregue:1736, faixas:{'00. CARTAO NAO ENTREGUE': 64, '01. ATE 2 DIAS': 286, '02. ATE 5 DIAS': 808, '03. ATE 7 DIAS': 299, '04. ATE 10 DIAS': 145, '05. ACIMA DE 10 DIAS': 197, '06. NAO RENOVADO': 172}},
    '03. 61 A 90 D': {total:1425, entregue:1254, faixas:{'00. CARTAO NAO ENTREGUE': 55, '01. ATE 2 DIAS': 219, '02. ATE 5 DIAS': 582, '03. ATE 7 DIAS': 199, '04. ATE 10 DIAS': 108, '05. ACIMA DE 10 DIAS': 146, '06. NAO RENOVADO': 116}},
    '04. 91 A 120 D': {total:1119, entregue:985, faixas:{'00. CARTAO NAO ENTREGUE': 54, '01. ATE 2 DIAS': 170, '02. ATE 5 DIAS': 434, '03. ATE 7 DIAS': 172, '04. ATE 10 DIAS': 81, '05. ACIMA DE 10 DIAS': 128, '06. NAO RENOVADO': 80}},
    '05. 121 A 180 D': {total:2250, entregue:1831, faixas:{'00. CARTAO NAO ENTREGUE': 111, '01. ATE 2 DIAS': 300, '02. ATE 5 DIAS': 864, '03. ATE 7 DIAS': 304, '04. ATE 10 DIAS': 151, '05. ACIMA DE 10 DIAS': 211, '06. NAO RENOVADO': 309}},
    '06. ACIMA DE 180 D': {total:25332, entregue:14840, faixas:{'00. CARTAO NAO ENTREGUE': 1002, '01. ATE 2 DIAS': 2607, '02. ATE 5 DIAS': 6698, '03. ATE 7 DIAS': 2472, '04. ATE 10 DIAS': 1294, '05. ACIMA DE 10 DIAS': 1769, '06. NAO RENOVADO': 9490}},
    '07. NAO ATIVO': {total:5971, entregue:3902, faixas:{'00. CARTAO NAO ENTREGUE': 208, '01. ATE 2 DIAS': 677, '02. ATE 5 DIAS': 1694, '03. ATE 7 DIAS': 664, '04. ATE 10 DIAS': 327, '05. ACIMA DE 10 DIAS': 539, '06. NAO RENOVADO': 1862}}
  },
  '202510': {
    '01. 1 A 30 D': {total:9546, entregue:8220, faixas:{'00. CARTAO NAO ENTREGUE': 230, '01. ATE 2 DIAS': 2479, '02. ATE 5 DIAS': 3946, '03. ATE 7 DIAS': 1003, '04. ATE 10 DIAS': 417, '05. ACIMA DE 10 DIAS': 375, '06. NAO RENOVADO': 1096}},
    '02. 31 A 60 D': {total:1796, entregue:1584, faixas:{'00. CARTAO NAO ENTREGUE': 52, '01. ATE 2 DIAS': 411, '02. ATE 5 DIAS': 761, '03. ATE 7 DIAS': 220, '04. ATE 10 DIAS': 98, '05. ACIMA DE 10 DIAS': 93, '06. NAO RENOVADO': 161}},
    '03. 61 A 90 D': {total:1158, entregue:1034, faixas:{'00. CARTAO NAO ENTREGUE': 27, '01. ATE 2 DIAS': 292, '02. ATE 5 DIAS': 482, '03. ATE 7 DIAS': 146, '04. ATE 10 DIAS': 61, '05. ACIMA DE 10 DIAS': 53, '06. NAO RENOVADO': 97}},
    '04. 91 A 120 D': {total:966, entregue:898, faixas:{'00. CARTAO NAO ENTREGUE': 20, '01. ATE 2 DIAS': 219, '02. ATE 5 DIAS': 451, '03. ATE 7 DIAS': 120, '04. ATE 10 DIAS': 56, '05. ACIMA DE 10 DIAS': 52, '06. NAO RENOVADO': 48}},
    '05. 121 A 180 D': {total:3469, entregue:2361, faixas:{'00. CARTAO NAO ENTREGUE': 142, '01. ATE 2 DIAS': 594, '02. ATE 5 DIAS': 1137, '03. ATE 7 DIAS': 358, '04. ATE 10 DIAS': 136, '05. ACIMA DE 10 DIAS': 135, '06. NAO RENOVADO': 967}},
    '06. ACIMA DE 180 D': {total:20226, entregue:11726, faixas:{'00. CARTAO NAO ENTREGUE': 491, '01. ATE 2 DIAS': 2827, '02. ATE 5 DIAS': 5753, '03. ATE 7 DIAS': 1823, '04. ATE 10 DIAS': 644, '05. ACIMA DE 10 DIAS': 679, '06. NAO RENOVADO': 8009}},
    '07. NAO ATIVO': {total:6042, entregue:3907, faixas:{'00. CARTAO NAO ENTREGUE': 140, '01. ATE 2 DIAS': 936, '02. ATE 5 DIAS': 1942, '03. ATE 7 DIAS': 583, '04. ATE 10 DIAS': 216, '05. ACIMA DE 10 DIAS': 230, '06. NAO RENOVADO': 1995}}
  },
  '202511': {
    '01. 1 A 30 D': {total:13876, entregue:11961, faixas:{'00. CARTAO NAO ENTREGUE': 282, '01. ATE 2 DIAS': 2896, '02. ATE 5 DIAS': 6258, '03. ATE 7 DIAS': 1999, '04. ATE 10 DIAS': 460, '05. ACIMA DE 10 DIAS': 346, '06. NAO RENOVADO': 1635}},
    '02. 31 A 60 D': {total:2739, entregue:2445, faixas:{'00. CARTAO NAO ENTREGUE': 69, '01. ATE 2 DIAS': 492, '02. ATE 5 DIAS': 1287, '03. ATE 7 DIAS': 453, '04. ATE 10 DIAS': 124, '05. ACIMA DE 10 DIAS': 89, '06. NAO RENOVADO': 225}},
    '03. 61 A 90 D': {total:1815, entregue:1652, faixas:{'00. CARTAO NAO ENTREGUE': 40, '01. ATE 2 DIAS': 406, '02. ATE 5 DIAS': 799, '03. ATE 7 DIAS': 288, '04. ATE 10 DIAS': 94, '05. ACIMA DE 10 DIAS': 65, '06. NAO RENOVADO': 123}},
    '04. 91 A 120 D': {total:2466, entregue:1764, faixas:{'00. CARTAO NAO ENTREGUE': 86, '01. ATE 2 DIAS': 391, '02. ATE 5 DIAS': 923, '03. ATE 7 DIAS': 294, '04. ATE 10 DIAS': 96, '05. ACIMA DE 10 DIAS': 60, '06. NAO RENOVADO': 616}},
    '05. 121 A 180 D': {total:5939, entregue:3864, faixas:{'00. CARTAO NAO ENTREGUE': 211, '01. ATE 2 DIAS': 862, '02. ATE 5 DIAS': 1962, '03. ATE 7 DIAS': 733, '04. ATE 10 DIAS': 184, '05. ACIMA DE 10 DIAS': 123, '06. NAO RENOVADO': 1864}},
    '06. ACIMA DE 180 D': {total:29482, entregue:17052, faixas:{'00. CARTAO NAO ENTREGUE': 627, '01. ATE 2 DIAS': 3794, '02. ATE 5 DIAS': 8687, '03. ATE 7 DIAS': 3176, '04. ATE 10 DIAS': 738, '05. ACIMA DE 10 DIAS': 657, '06. NAO RENOVADO': 11803}},
    '07. NAO ATIVO': {total:9212, entregue:6053, faixas:{'00. CARTAO NAO ENTREGUE': 152, '01. ATE 2 DIAS': 1310, '02. ATE 5 DIAS': 3095, '03. ATE 7 DIAS': 1163, '04. ATE 10 DIAS': 278, '05. ACIMA DE 10 DIAS': 207, '06. NAO RENOVADO': 3007}}
  },
  '202512': {
    '01. 1 A 30 D': {total:16296, entregue:14204, faixas:{'00. CARTAO NAO ENTREGUE': 311, '01. ATE 2 DIAS': 2383, '02. ATE 5 DIAS': 7449, '03. ATE 7 DIAS': 2786, '04. ATE 10 DIAS': 916, '05. ACIMA DE 10 DIAS': 669, '06. NAO RENOVADO': 1782}},
    '02. 31 A 60 D': {total:3187, entregue:2909, faixas:{'00. CARTAO NAO ENTREGUE': 44, '01. ATE 2 DIAS': 493, '02. ATE 5 DIAS': 1480, '03. ATE 7 DIAS': 622, '04. ATE 10 DIAS': 175, '05. ACIMA DE 10 DIAS': 139, '06. NAO RENOVADO': 234}},
    '03. 61 A 90 D': {total:3477, entregue:2538, faixas:{'00. CARTAO NAO ENTREGUE': 116, '01. ATE 2 DIAS': 387, '02. ATE 5 DIAS': 1256, '03. ATE 7 DIAS': 571, '04. ATE 10 DIAS': 186, '05. ACIMA DE 10 DIAS': 137, '06. NAO RENOVADO': 824}},
    '04. 91 A 120 D': {total:4640, entregue:3245, faixas:{'00. CARTAO NAO ENTREGUE': 169, '01. ATE 2 DIAS': 482, '02. ATE 5 DIAS': 1724, '03. ATE 7 DIAS': 659, '04. ATE 10 DIAS': 227, '05. ACIMA DE 10 DIAS': 153, '06. NAO RENOVADO': 1226}},
    '05. 121 A 180 D': {total:5100, entregue:3311, faixas:{'00. CARTAO NAO ENTREGUE': 146, '01. ATE 2 DIAS': 557, '02. ATE 5 DIAS': 1704, '03. ATE 7 DIAS': 674, '04. ATE 10 DIAS': 210, '05. ACIMA DE 10 DIAS': 166, '06. NAO RENOVADO': 1643}},
    '06. ACIMA DE 180 D': {total:33040, entregue:19412, faixas:{'00. CARTAO NAO ENTREGUE': 617, '01. ATE 2 DIAS': 3056, '02. ATE 5 DIAS': 9676, '03. ATE 7 DIAS': 4218, '04. ATE 10 DIAS': 1474, '05. ACIMA DE 10 DIAS': 988, '06. NAO RENOVADO': 13011}},
    '07. NAO ATIVO': {total:11957, entregue:7788, faixas:{'00. CARTAO NAO ENTREGUE': 168, '01. ATE 2 DIAS': 1279, '02. ATE 5 DIAS': 3868, '03. ATE 7 DIAS': 1744, '04. ATE 10 DIAS': 544, '05. ACIMA DE 10 DIAS': 352, '06. NAO RENOVADO': 4002}}
  },
  '202601': {
    '01. 1 A 30 D': {total:8153, entregue:7301, faixas:{'00. CARTAO NAO ENTREGUE': 110, '01. ATE 2 DIAS': 1714, '02. ATE 5 DIAS': 3721, '03. ATE 7 DIAS': 1241, '04. ATE 10 DIAS': 404, '05. ACIMA DE 10 DIAS': 221, '06. NAO RENOVADO': 742}},
    '02. 31 A 60 D': {total:2240, entregue:1823, faixas:{'00. CARTAO NAO ENTREGUE': 57, '01. ATE 2 DIAS': 392, '02. ATE 5 DIAS': 916, '03. ATE 7 DIAS': 335, '04. ATE 10 DIAS': 113, '05. ACIMA DE 10 DIAS': 67, '06. NAO RENOVADO': 360}},
    '03. 61 A 90 D': {total:2541, entregue:1893, faixas:{'00. CARTAO NAO ENTREGUE': 75, '01. ATE 2 DIAS': 437, '02. ATE 5 DIAS': 954, '03. ATE 7 DIAS': 333, '04. ATE 10 DIAS': 116, '05. ACIMA DE 10 DIAS': 53, '06. NAO RENOVADO': 573}},
    '04. 91 A 120 D': {total:1533, entregue:1116, faixas:{'00. CARTAO NAO ENTREGUE': 40, '01. ATE 2 DIAS': 258, '02. ATE 5 DIAS': 570, '03. ATE 7 DIAS': 191, '04. ATE 10 DIAS': 54, '05. ACIMA DE 10 DIAS': 43, '06. NAO RENOVADO': 377}},
    '05. 121 A 180 D': {total:2414, entregue:1533, faixas:{'00. CARTAO NAO ENTREGUE': 57, '01. ATE 2 DIAS': 302, '02. ATE 5 DIAS': 802, '03. ATE 7 DIAS': 299, '04. ATE 10 DIAS': 87, '05. ACIMA DE 10 DIAS': 43, '06. NAO RENOVADO': 824}},
    '06. ACIMA DE 180 D': {total:15306, entregue:9193, faixas:{'00. CARTAO NAO ENTREGUE': 207, '01. ATE 2 DIAS': 1985, '02. ATE 5 DIAS': 4743, '03. ATE 7 DIAS': 1707, '04. ATE 10 DIAS': 474, '05. ACIMA DE 10 DIAS': 284, '06. NAO RENOVADO': 5906}},
    '07. NAO ATIVO': {total:5990, entregue:3902, faixas:{'00. CARTAO NAO ENTREGUE': 67, '01. ATE 2 DIAS': 842, '02. ATE 5 DIAS': 1998, '03. ATE 7 DIAS': 766, '04. ATE 10 DIAS': 200, '05. ACIMA DE 10 DIAS': 96, '06. NAO RENOVADO': 2021}}
  },
  '202602': {
    '01. 1 A 30 D': {total:4105, entregue:3449, faixas:{'00. CARTAO NAO ENTREGUE': 64, '01. ATE 2 DIAS': 816, '02. ATE 5 DIAS': 1803, '03. ATE 7 DIAS': 582, '04. ATE 10 DIAS': 152, '05. ACIMA DE 10 DIAS': 94, '06. NAO RENOVADO': 594}},
    '02. 31 A 60 D': {total:1745, entregue:1206, faixas:{'00. CARTAO NAO ENTREGUE': 56, '01. ATE 2 DIAS': 253, '02. ATE 5 DIAS': 649, '03. ATE 7 DIAS': 204, '04. ATE 10 DIAS': 63, '05. ACIMA DE 10 DIAS': 37, '06. NAO RENOVADO': 483}},
    '03. 61 A 90 D': {total:898, entregue:628, faixas:{'00. CARTAO NAO ENTREGUE': 18, '01. ATE 2 DIAS': 124, '02. ATE 5 DIAS': 333, '03. ATE 7 DIAS': 114, '04. ATE 10 DIAS': 39, '05. ACIMA DE 10 DIAS': 18, '06. NAO RENOVADO': 252}},
    '04. 91 A 120 D': {total:734, entregue:467, faixas:{'00. CARTAO NAO ENTREGUE': 13, '01. ATE 2 DIAS': 91, '02. ATE 5 DIAS': 239, '03. ATE 7 DIAS': 102, '04. ATE 10 DIAS': 27, '05. ACIMA DE 10 DIAS': 8, '06. NAO RENOVADO': 254}},
    '05. 121 A 180 D': {total:1328, entregue:761, faixas:{'00. CARTAO NAO ENTREGUE': 26, '01. ATE 2 DIAS': 164, '02. ATE 5 DIAS': 388, '03. ATE 7 DIAS': 145, '04. ATE 10 DIAS': 42, '05. ACIMA DE 10 DIAS': 22, '06. NAO RENOVADO': 541}},
    '06. ACIMA DE 180 D': {total:7418, entregue:4211, faixas:{'00. CARTAO NAO ENTREGUE': 109, '01. ATE 2 DIAS': 824, '02. ATE 5 DIAS': 2300, '03. ATE 7 DIAS': 787, '04. ATE 10 DIAS': 200, '05. ACIMA DE 10 DIAS': 100, '06. NAO RENOVADO': 3098}},
    '07. NAO ATIVO': {total:4750, entregue:3045, faixas:{'00. CARTAO NAO ENTREGUE': 70, '01. ATE 2 DIAS': 643, '02. ATE 5 DIAS': 1589, '03. ATE 7 DIAS': 596, '04. ATE 10 DIAS': 153, '05. ACIMA DE 10 DIAS': 64, '06. NAO RENOVADO': 1635}}
  },
  '202603': {
    '01. 1 A 30 D': {total:3595, entregue:2348, faixas:{'00. CARTAO NAO ENTREGUE': 204, '01. ATE 2 DIAS': 550, '02. ATE 5 DIAS': 1308, '03. ATE 7 DIAS': 404, '04. ATE 10 DIAS': 135, '05. ACIMA DE 10 DIAS': 37, '06. NAO RENOVADO': 957}},
    '02. 31 A 60 D': {total:833, entregue:478, faixas:{'00. CARTAO NAO ENTREGUE': 43, '01. ATE 2 DIAS': 105, '02. ATE 5 DIAS': 272, '03. ATE 7 DIAS': 104, '04. ATE 10 DIAS': 24, '05. ACIMA DE 10 DIAS': 8, '06. NAO RENOVADO': 277}},
    '03. 61 A 90 D': {total:652, entregue:347, faixas:{'00. CARTAO NAO ENTREGUE': 53, '01. ATE 2 DIAS': 73, '02. ATE 5 DIAS': 185, '03. ATE 7 DIAS': 73, '04. ATE 10 DIAS': 24, '05. ACIMA DE 10 DIAS': 9, '06. NAO RENOVADO': 235}},
    '04. 91 A 120 D': {total:599, entregue:284, faixas:{'00. CARTAO NAO ENTREGUE': 35, '01. ATE 2 DIAS': 64, '02. ATE 5 DIAS': 164, '03. ATE 7 DIAS': 57, '04. ATE 10 DIAS': 18, '05. ACIMA DE 10 DIAS': 3, '06. NAO RENOVADO': 258}},
    '05. 121 A 180 D': {total:933, entregue:373, faixas:{'00. CARTAO NAO ENTREGUE': 37, '01. ATE 2 DIAS': 82, '02. ATE 5 DIAS': 200, '03. ATE 7 DIAS': 89, '04. ATE 10 DIAS': 30, '05. ACIMA DE 10 DIAS': 5, '06. NAO RENOVADO': 490}},
    '06. ACIMA DE 180 D': {total:5399, entregue:2466, faixas:{'00. CARTAO NAO ENTREGUE': 304, '01. ATE 2 DIAS': 582, '02. ATE 5 DIAS': 1420, '03. ATE 7 DIAS': 471, '04. ATE 10 DIAS': 167, '05. ACIMA DE 10 DIAS': 36, '06. NAO RENOVADO': 2419}},
    '07. NAO ATIVO': {total:3971, entregue:2041, faixas:{'00. CARTAO NAO ENTREGUE': 193, '01. ATE 2 DIAS': 556, '02. ATE 5 DIAS': 1152, '03. ATE 7 DIAS': 391, '04. ATE 10 DIAS': 108, '05. ACIMA DE 10 DIAS': 29, '06. NAO RENOVADO': 1542}}
  },
  '202604': {
    '01. 1 A 30 D': {total:4874, entregue:414, faixas:{'00. CARTAO NAO ENTREGUE': 83, '01. ATE 2 DIAS': 108, '02. ATE 5 DIAS': 225, '03. ATE 7 DIAS': 61, '04. ATE 10 DIAS': 20, '05. ACIMA DE 10 DIAS': 7, '06. NAO RENOVADO': 4370}},
    '02. 31 A 60 D': {total:1176, entregue:140, faixas:{'00. CARTAO NAO ENTREGUE': 20, '01. ATE 2 DIAS': 25, '02. ATE 5 DIAS': 94, '03. ATE 7 DIAS': 18, '04. ATE 10 DIAS': 4, '05. ACIMA DE 10 DIAS': 3, '06. NAO RENOVADO': 1012}},
    '03. 61 A 90 D': {total:959, entregue:103, faixas:{'00. CARTAO NAO ENTREGUE': 17, '01. ATE 2 DIAS': 32, '02. ATE 5 DIAS': 53, '03. ATE 7 DIAS': 12, '04. ATE 10 DIAS': 3, '05. ACIMA DE 10 DIAS': 3, '06. NAO RENOVADO': 839}},
    '04. 91 A 120 D': {total:891, entregue:78, faixas:{'00. CARTAO NAO ENTREGUE': 9, '01. ATE 2 DIAS': 18, '02. ATE 5 DIAS': 42, '03. ATE 7 DIAS': 14, '04. ATE 10 DIAS': 3, '05. ACIMA DE 10 DIAS': 4, '06. NAO RENOVADO': 801}},
    '05. 121 A 180 D': {total:1314, entregue:104, faixas:{'00. CARTAO NAO ENTREGUE': 11, '01. ATE 2 DIAS': 26, '02. ATE 5 DIAS': 52, '03. ATE 7 DIAS': 20, '04. ATE 10 DIAS': 5, '05. ACIMA DE 10 DIAS': 1, '06. NAO RENOVADO': 1199}},
    '06. ACIMA DE 180 D': {total:7301, entregue:773, faixas:{'00. CARTAO NAO ENTREGUE': 70, '01. ATE 2 DIAS': 221, '02. ATE 5 DIAS': 424, '03. ATE 7 DIAS': 102, '04. ATE 10 DIAS': 23, '05. ACIMA DE 10 DIAS': 12, '06. NAO RENOVADO': 6449}},
    '07. NAO ATIVO': {total:6047, entregue:853, faixas:{'00. CARTAO NAO ENTREGUE': 58, '01. ATE 2 DIAS': 254, '02. ATE 5 DIAS': 460, '03. ATE 7 DIAS': 110, '04. ATE 10 DIAS': 21, '05. ACIMA DE 10 DIAS': 14, '06. NAO RENOVADO': 5130}}
  },
  '202605': {
    '01. 1 A 30 D': {total:10631, entregue:413, faixas:{'00. CARTAO NAO ENTREGUE': 110, '01. ATE 2 DIAS': 142, '02. ATE 5 DIAS': 219, '03. ATE 7 DIAS': 39, '04. ATE 10 DIAS': 20, '05. ACIMA DE 10 DIAS': 5, '06. NAO RENOVADO': 10096}},
    '02. 31 A 60 D': {total:2615, entregue:120, faixas:{'00. CARTAO NAO ENTREGUE': 29, '01. ATE 2 DIAS': 33, '02. ATE 5 DIAS': 62, '03. ATE 7 DIAS': 15, '04. ATE 10 DIAS': 8, '05. ACIMA DE 10 DIAS': 5, '06. NAO RENOVADO': 2463}},
    '03. 61 A 90 D': {total:1919, entregue:89, faixas:{'00. CARTAO NAO ENTREGUE': 16, '01. ATE 2 DIAS': 31, '02. ATE 5 DIAS': 40, '03. ATE 7 DIAS': 20, '05. ACIMA DE 10 DIAS': 1, '06. NAO RENOVADO': 1811}},
    '04. 91 A 120 D': {total:1629, entregue:53, faixas:{'00. CARTAO NAO ENTREGUE': 14, '01. ATE 2 DIAS': 13, '02. ATE 5 DIAS': 31, '03. ATE 7 DIAS': 10, '05. ACIMA DE 10 DIAS': 1, '06. NAO RENOVADO': 1560}},
    '05. 121 A 180 D': {total:2554, entregue:77, faixas:{'00. CARTAO NAO ENTREGUE': 20, '01. ATE 2 DIAS': 28, '02. ATE 5 DIAS': 33, '03. ATE 7 DIAS': 15, '04. ATE 10 DIAS': 4, '05. ACIMA DE 10 DIAS': 2, '06. NAO RENOVADO': 2452}},
    '06. ACIMA DE 180 D': {total:12665, entregue:643, faixas:{'00. CARTAO NAO ENTREGUE': 106, '01. ATE 2 DIAS': 197, '02. ATE 5 DIAS': 340, '03. ATE 7 DIAS': 93, '04. ATE 10 DIAS': 17, '05. ACIMA DE 10 DIAS': 14, '06. NAO RENOVADO': 11898}},
    '07. NAO ATIVO': {total:10903, entregue:633, faixas:{'00. CARTAO NAO ENTREGUE': 76, '01. ATE 2 DIAS': 213, '02. ATE 5 DIAS': 335, '03. ATE 7 DIAS': 74, '04. ATE 10 DIAS': 17, '05. ACIMA DE 10 DIAS': 6, '06. NAO RENOVADO': 10182}}
  },
  '202606': {
    '01. 1 A 30 D': {total:18974, entregue:0, faixas:{'06. NAO RENOVADO': 18974}},
    '02. 31 A 60 D': {total:4543, entregue:0, faixas:{'06. NAO RENOVADO': 4543}},
    '03. 61 A 90 D': {total:3091, entregue:0, faixas:{'06. NAO RENOVADO': 3091}},
    '04. 91 A 120 D': {total:2648, entregue:0, faixas:{'06. NAO RENOVADO': 2648}},
    '05. 121 A 180 D': {total:3959, entregue:0, faixas:{'06. NAO RENOVADO': 3959}},
    '06. ACIMA DE 180 D': {total:241, entregue:0, faixas:{'06. NAO RENOVADO': 241}}
  },
  '202607': {
    '01. 1 A 30 D': {total:17442, entregue:0, faixas:{'06. NAO RENOVADO': 17442}},
    '02. 31 A 60 D': {total:4375, entregue:0, faixas:{'06. NAO RENOVADO': 4375}},
    '03. 61 A 90 D': {total:3111, entregue:0, faixas:{'06. NAO RENOVADO': 3111}},
    '04. 91 A 120 D': {total:2601, entregue:0, faixas:{'06. NAO RENOVADO': 2601}},
    '05. 121 A 180 D': {total:1837, entregue:0, faixas:{'06. NAO RENOVADO': 1837}},
    '06. ACIMA DE 180 D': {total:204, entregue:0, faixas:{'06. NAO RENOVADO': 204}}
  },
  '202608': {
    '01. 1 A 30 D': {total:13113, entregue:0, faixas:{'06. NAO RENOVADO': 13113}},
    '02. 31 A 60 D': {total:3302, entregue:0, faixas:{'06. NAO RENOVADO': 3302}},
    '03. 61 A 90 D': {total:2337, entregue:0, faixas:{'06. NAO RENOVADO': 2337}},
    '04. 91 A 120 D': {total:1802, entregue:0, faixas:{'06. NAO RENOVADO': 1802}},
    '05. 121 A 180 D': {total:23, entregue:0, faixas:{'06. NAO RENOVADO': 23}},
    '06. ACIMA DE 180 D': {total:119, entregue:0, faixas:{'06. NAO RENOVADO': 119}}
  },
  '202609': {
    '01. 1 A 30 D': {total:21763, entregue:0, faixas:{'06. NAO RENOVADO': 21763}},
    '02. 31 A 60 D': {total:5253, entregue:0, faixas:{'06. NAO RENOVADO': 5253}},
    '03. 61 A 90 D': {total:3309, entregue:2, faixas:{'02. ATE 5 DIAS': 2, '06. NAO RENOVADO': 3307}},
    '04. 91 A 120 D': {total:29, entregue:0, faixas:{'06. NAO RENOVADO': 29}},
    '05. 121 A 180 D': {total:20, entregue:0, faixas:{'06. NAO RENOVADO': 20}},
    '06. ACIMA DE 180 D': {total:131, entregue:1, faixas:{'02. ATE 5 DIAS': 1, '06. NAO RENOVADO': 130}},
    '07. NAO ATIVO': {total:1, entregue:0, faixas:{'06. NAO RENOVADO': 1}}
  },
  '202610': {
    '01. 1 A 30 D': {total:33388, entregue:11, faixas:{'01. ATE 2 DIAS': 2, '02. ATE 5 DIAS': 8, '03. ATE 7 DIAS': 1, '06. NAO RENOVADO': 33377}},
    '02. 31 A 60 D': {total:6724, entregue:0, faixas:{'06. NAO RENOVADO': 6724}},
    '03. 61 A 90 D': {total:42, entregue:0, faixas:{'06. NAO RENOVADO': 42}},
    '04. 91 A 120 D': {total:17, entregue:2, faixas:{'02. ATE 5 DIAS': 1, '03. ATE 7 DIAS': 1, '06. NAO RENOVADO': 15}},
    '05. 121 A 180 D': {total:30, entregue:0, faixas:{'06. NAO RENOVADO': 30}},
    '06. ACIMA DE 180 D': {total:164, entregue:7, faixas:{'02. ATE 5 DIAS': 2, '03. ATE 7 DIAS': 1, '04. ATE 10 DIAS': 2, '05. ACIMA DE 10 DIAS': 2, '06. NAO RENOVADO': 157}},
    '07. NAO ATIVO': {total:3, entregue:1, faixas:{'04. ATE 10 DIAS': 1, '06. NAO RENOVADO': 2}}
  },
  '202611': {
    '01. 1 A 30 D': {total:11855, entregue:1, faixas:{'03. ATE 7 DIAS': 1, '06. NAO RENOVADO': 11854}},
    '02. 31 A 60 D': {total:17, entregue:0, faixas:{'06. NAO RENOVADO': 17}},
    '03. 61 A 90 D': {total:8, entregue:0, faixas:{'06. NAO RENOVADO': 8}},
    '04. 91 A 120 D': {total:3, entregue:0, faixas:{'06. NAO RENOVADO': 3}},
    '05. 121 A 180 D': {total:7, entregue:0, faixas:{'06. NAO RENOVADO': 7}},
    '06. ACIMA DE 180 D': {total:36, entregue:0, faixas:{'06. NAO RENOVADO': 36}}
  },
  '202612': {
    '06. ACIMA DE 180 D': {total:2, entregue:0, faixas:{'06. NAO RENOVADO': 2}},
    '07. NAO ATIVO': {total:4, entregue:3, faixas:{'02. ATE 5 DIAS': 2, '05. ACIMA DE 10 DIAS': 1, '06. NAO RENOVADO': 1}}
  }
};

// ── TOTAIS BQ — UNIVERSO COMPLETO ─────────────────────────────
const TOTAL_EXPIRADO = {
  '202503':3,
  '202504':26,
  '202505':7534,
  '202506':101859,
  '202507':231217,
  '202508':261551,
  '202509':343667,
  '202510':270351,
  '202511':416394,
  '202512':443759,
  '202601':214075,
  '202602':103236,
  '202603':84273,
  '202604':123496,
  '202605':210803,
  '202606':296125,
  '202607':274908,
  '202608':208324,
  '202609':341961,
  '202610':474455,
  '202611':181608,
  '202612':432945,
};
const TOTAL_GRUPO1 = {
  '202504':19,
  '202505':1354,
  '202506':20137,
  '202507':37719,
  '202508':39652,
  '202509':48293,
  '202510':43202,
  '202511':65527,
  '202512':77697,
  '202601':38177,
  '202602':20976,
  '202603':15982,
  '202604':22562,
  '202605':42916,
  '202606':33456,
  '202607':29570,
  '202608':20696,
  '202609':30505,
  '202610':40361,
  '202611':11926,
  '202612':6,
};

// ── DIMENSÕES DOS FILTROS ─────────────────────────────────────
const PRODS  = ['HIBRIDO', 'PURO DEBITO'];
const CICLOS = ['0-30d','31-60d','61-90d','91-120d','121-180d','+181d'];
const P_W    = {HIBRIDO: 0.65, 'PURO DEBITO': 0.35};
const C_REN  = {'0-30d':0.25, '31-60d':0.30, '61-90d':0.20, '91-120d':0.12, '121-180d':0.08, '+181d':0.05};
const C_REI  = {'0-30d':0.06, '31-60d':0.12, '61-90d':0.20, '91-120d':0.24, '121-180d':0.24, '+181d':0.14};

// ── HELPER ────────────────────────────────────────────────────
function safraLabel(s) {
  const mm = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'];
  return mm[parseInt(s.slice(4,6))-1] + '/' + s.slice(2,4);
}

// ── RAW_DATA — todas as combinações (mes × produto × ciclo) ──
const RAW_DATA = [];
MONTHLY.forEach(m => {
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
