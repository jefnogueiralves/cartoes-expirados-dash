// ═══════════════════════════════════════════════════════════════
//  dashboard_data.js — gerado automaticamente por update_data.py
//  Última atualização: 04/04/2026
//  Fonte: meli-bi-data.SBOX_CREDITSTC.CARTAO_EXPIRADO_ANL_IA
//         meli-bi-data.SBOX_CREDITSTC.CARTAO_EXPIRADO_CUBO_IA
// ═══════════════════════════════════════════════════════════════

// ── DATA DA ÚLTIMA ATUALIZAÇÃO ────────────────────────────────
const DT_ATUALIZACAO = '04/04/2026';

// ── TOTAIS MENSAIS REAIS (BigQuery) ───────────────────────────
const MONTHLY = [
  {mes:'Abr/25', completo:true, ren:14, rei:1, ent:13, dm:4.90, tel:19},
  {mes:'Mai/25', completo:true, ren:1075, rei:69, ent:923, dm:6.90, tel:1354},
  {mes:'Jun/25', completo:true, ren:15969, rei:1003, ent:13864, dm:6.90, tel:20137},
  {mes:'Jul/25', completo:true, ren:29502, rei:1585, ent:23934, dm:8.20, tel:37719},
  {mes:'Ago/25', completo:true, ren:29404, rei:1808, ent:22875, dm:5.70, tel:39652},
  {mes:'Set/25', completo:true, ren:35274, rei:2257, ent:27102, dm:5.00, tel:48294},
  {mes:'Out/25', completo:true, ren:30830, rei:1765, ent:23453, dm:4.10, tel:43202},
  {mes:'Nov/25', completo:true, ren:46256, rei:2689, ent:34638, dm:4.00, tel:65527},
  {mes:'Dez/25', completo:true, ren:54975, rei:4085, ent:40643, dm:4.50, tel:77697},
  {mes:'Jan/26', completo:true, ren:27374, rei:2096, ent:19720, dm:4.10, tel:38177},
  {mes:'Fev/26', completo:true, ren:14121, rei:1485, ent:9895, dm:4.00, tel:20976},
  {mes:'Mar/26', completo:true, ren:10370, rei:290, ent:5762, dm:3.90, tel:15821},
  {mes:'Abr/26*', completo:false, ren:4636, rei:0, ent:57, dm:3.60, tel:22415},
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
  {safra:'202504', base:15, entregue:13, ativados:13, ativos_tc:4, ativos_td:13, ativos_fisico:13, ativos_ambos:0, tpv_tc:3256, tpv_td:103932, tpn_tc:0, tpn_td:0, maps_tc:4, maps_td:13},
  {safra:'202505', base:1144, entregue:1019, ativados:923, ativos_tc:492, ativos_td:583, ativos_fisico:789, ativos_ambos:0, tpv_tc:844463, tpv_td:1128877, tpn_tc:0, tpn_td:0, maps_tc:492, maps_td:583},
  {safra:'202506', base:16972, entregue:15299, ativados:13864, ativos_tc:7909, ativos_td:8693, ativos_fisico:11890, ativos_ambos:0, tpv_tc:15512499, tpv_td:16299444, tpn_tc:0, tpn_td:0, maps_tc:7909, maps_td:8693},
  {safra:'202507', base:31087, entregue:28040, ativados:23934, ativos_tc:13386, ativos_td:15080, ativos_fisico:20605, ativos_ambos:0, tpv_tc:27860198, tpv_td:28118792, tpn_tc:0, tpn_td:0, maps_tc:13386, maps_td:15080},
  {safra:'202508', base:31212, entregue:27717, ativados:22875, ativos_tc:12711, ativos_td:14805, ativos_fisico:19986, ativos_ambos:0, tpv_tc:26102447, tpv_td:27988183, tpn_tc:0, tpn_td:0, maps_tc:12711, maps_td:14805},
  {safra:'202509', base:37531, entregue:33382, ativados:27102, ativos_tc:14944, ativos_td:17906, ativos_fisico:23968, ativos_ambos:0, tpv_tc:30987292, tpv_td:32653476, tpn_tc:0, tpn_td:0, maps_tc:14944, maps_td:17906},
  {safra:'202510', base:32595, entregue:29730, ativados:23453, ativos_tc:12980, ativos_td:15559, ativos_fisico:20882, ativos_ambos:0, tpv_tc:27982414, tpv_td:31494815, tpn_tc:0, tpn_td:0, maps_tc:12980, maps_td:15559},
  {safra:'202511', base:48945, entregue:44791, ativados:34638, ativos_tc:19655, ativos_td:22970, ativos_fisico:31115, ativos_ambos:0, tpv_tc:39223815, tpv_td:40750127, tpn_tc:0, tpn_td:0, maps_tc:19655, maps_td:22970},
  {safra:'202512', base:59060, entregue:53410, ativados:40643, ativos_tc:23429, ativos_td:26933, ativos_fisico:36801, ativos_ambos:0, tpv_tc:47624066, tpv_td:46329358, tpn_tc:0, tpn_td:0, maps_tc:23429, maps_td:26933},
  {safra:'202601', base:29470, entregue:26763, ativados:19720, ativos_tc:11302, ativos_td:13106, ativos_fisico:17869, ativos_ambos:0, tpv_tc:21958866, tpv_td:20358654, tpn_tc:0, tpn_td:0, maps_tc:11302, maps_td:13106},
  {safra:'202602', base:15606, entregue:13774, ativados:9895, ativos_tc:5773, ativos_td:5634, ativos_fisico:8583, ativos_ambos:0, tpv_tc:9456315, tpv_td:6509580, tpn_tc:0, tpn_td:0, maps_tc:5773, maps_td:5634},
  {safra:'202603', base:10660, entregue:9021, ativados:5762, ativos_tc:3283, ativos_td:3176, ativos_fisico:5111, ativos_ambos:0, tpv_tc:3585551, tpv_td:2241038, tpn_tc:0, tpn_td:0, maps_tc:3283, maps_td:3176},
  {safra:'202604', base:4636, entregue:2425, ativados:57, ativos_tc:992, ativos_td:815, ativos_fisico:1456, ativos_ambos:0, tpv_tc:1300869, tpv_td:678781, tpn_tc:0, tpn_td:0, maps_tc:992, maps_td:815},
];

// ── SPENDING ANTES DA RENOVAÇÃO ───────────────────────────────
const SPENDING_ANTES = [
  {safra:'202504', tpv_tc_antes:7238.28, tpv_td_antes:139590.89, tpn_tc_antes:0, tpn_td_antes:0},
  {safra:'202505', tpv_tc_antes:932059.83, tpv_td_antes:1349661.19, tpn_tc_antes:0, tpn_td_antes:0},
  {safra:'202506', tpv_tc_antes:15524037.41, tpv_td_antes:19603234.49, tpn_tc_antes:0, tpn_td_antes:0},
  {safra:'202507', tpv_tc_antes:28872548.69, tpv_td_antes:34847930.56, tpn_tc_antes:0, tpn_td_antes:0},
  {safra:'202508', tpv_tc_antes:28230730.20, tpv_td_antes:35627066.84, tpn_tc_antes:0, tpn_td_antes:0},
  {safra:'202509', tpv_tc_antes:33970215.40, tpv_td_antes:41533288.41, tpn_tc_antes:0, tpn_td_antes:0},
  {safra:'202510', tpv_tc_antes:29830933.95, tpv_td_antes:39241034.53, tpn_tc_antes:0, tpn_td_antes:0},
  {safra:'202511', tpv_tc_antes:44395443.43, tpv_td_antes:53441044.51, tpn_tc_antes:0, tpn_td_antes:0},
  {safra:'202512', tpv_tc_antes:56967074.85, tpv_td_antes:60449175.32, tpn_tc_antes:0, tpn_td_antes:0},
  {safra:'202601', tpv_tc_antes:29432347.99, tpv_td_antes:32353048.57, tpn_tc_antes:0, tpn_td_antes:0},
  {safra:'202602', tpv_tc_antes:17485707.81, tpv_td_antes:15489675.83, tpn_tc_antes:0, tpn_td_antes:0},
  {safra:'202603', tpv_tc_antes:12708467.72, tpv_td_antes:10304208.35, tpn_tc_antes:0, tpn_td_antes:0},
  {safra:'202604', tpv_tc_antes:16506562.88, tpv_td_antes:13856058.43, tpn_tc_antes:0, tpn_td_antes:0},
];

// ── CICLO DE USO POR SAFRA ─────────────────────────────────────
const CICLO_SAFRA = [
  {safra:'202504', c1:12, c2:0, c3:0, c4:0, c5:0, c6:3, c7:0},
  {safra:'202505', c1:305, c2:69, c3:49, c4:38, c5:58, c6:500, c7:125},
  {safra:'202506', c1:4723, c2:994, c3:674, c4:565, c5:844, c6:7313, c7:1859},
  {safra:'202507', c1:8458, c2:1695, c3:1182, c4:965, c5:1413, c6:13898, c7:3476},
  {safra:'202508', c1:8391, c2:1690, c3:1146, c4:954, c5:1453, c6:14055, c7:3523},
  {safra:'202509', c1:10182, c2:1960, c3:1387, c4:1140, c5:1769, c6:16868, c7:4225},
  {safra:'202510', c1:9357, c2:1756, c3:1103, c4:975, c5:2517, c6:12770, c7:4117},
  {safra:'202511', c1:13624, c2:2672, c3:1846, c4:1499, c5:4710, c6:18310, c7:6284},
  {safra:'202512', c1:16301, c2:3240, c3:2130, c4:4110, c5:3843, c6:21182, c7:8254},
  {safra:'202601', c1:8219, c2:1578, c3:2444, c4:1325, c5:1710, c6:10045, c7:4149},
  {safra:'202602', c1:3848, c2:1575, c3:742, c4:562, c5:877, c6:4743, c7:3259},
  {safra:'202603', c1:2894, c2:603, c3:430, c4:383, c5:489, c6:3244, c7:2617},
  {safra:'202604', c1:1068, c2:267, c3:206, c4:163, c5:198, c6:1384, c7:1350},
];

// ── DISTRIBUIÇÃO DIAS_ENTREGA POR FAIXA/MÊS ──────────────────
const DIAS_ENTREGA_DIST = {
  '202504': {'00. CARTAO NAO ENTREGUE': 1, '01. ATE 2 DIAS': 2, '02. ATE 5 DIAS': 4, '03. ATE 7 DIAS': 5, '04. ATE 10 DIAS': 2, '06. NAO RENOVADO': 5},
  '202505': {'00. CARTAO NAO ENTREGUE': 56, '01. ATE 2 DIAS': 12, '02. ATE 5 DIAS': 334, '03. ATE 7 DIAS': 297, '04. ATE 10 DIAS': 176, '05. ACIMA DE 10 DIAS': 200, '06. NAO RENOVADO': 279},
  '202506': {'00. CARTAO NAO ENTREGUE': 670, '01. ATE 2 DIAS': 478, '02. ATE 5 DIAS': 5736, '03. ATE 7 DIAS': 2796, '04. ATE 10 DIAS': 3170, '05. ACIMA DE 10 DIAS': 3119, '06. NAO RENOVADO': 4169},
  '202507': {'00. CARTAO NAO ENTREGUE': 1463, '01. ATE 2 DIAS': 758, '02. ATE 5 DIAS': 6809, '03. ATE 7 DIAS': 4852, '04. ATE 10 DIAS': 6017, '05. ACIMA DE 10 DIAS': 9603, '06. NAO RENOVADO': 8217},
  '202508': {'00. CARTAO NAO ENTREGUE': 1687, '01. ATE 2 DIAS': 3607, '02. ATE 5 DIAS': 11710, '03. ATE 7 DIAS': 5065, '04. ATE 10 DIAS': 3003, '05. ACIMA DE 10 DIAS': 4332, '06. NAO RENOVADO': 10249},
  '202509': {'00. CARTAO NAO ENTREGUE': 1895, '01. ATE 2 DIAS': 6008, '02. ATE 5 DIAS': 15336, '03. ATE 7 DIAS': 5448, '04. ATE 10 DIAS': 2772, '05. ACIMA DE 10 DIAS': 3815, '06. NAO RENOVADO': 13021},
  '202510': {'00. CARTAO NAO ENTREGUE': 1102, '01. ATE 2 DIAS': 7758, '02. ATE 5 DIAS': 14472, '03. ATE 7 DIAS': 4253, '04. ATE 10 DIAS': 1628, '05. ACIMA DE 10 DIAS': 1617, '06. NAO RENOVADO': 12373},
  '202511': {'00. CARTAO NAO ENTREGUE': 1467, '01. ATE 2 DIAS': 10151, '02. ATE 5 DIAS': 23011, '03. ATE 7 DIAS': 8106, '04. ATE 10 DIAS': 1974, '05. ACIMA DE 10 DIAS': 1547, '06. NAO RENOVADO': 19273},
  '202512': {'00. CARTAO NAO ENTREGUE': 1568, '01. ATE 2 DIAS': 8638, '02. ATE 5 DIAS': 27157, '03. ATE 7 DIAS': 11274, '04. ATE 10 DIAS': 3732, '05. ACIMA DE 10 DIAS': 2606, '06. NAO RENOVADO': 22722},
  '202601': {'00. CARTAO NAO ENTREGUE': 611, '01. ATE 2 DIAS': 5930, '02. ATE 5 DIAS': 13704, '03. ATE 7 DIAS': 4872, '04. ATE 10 DIAS': 1448, '05. ACIMA DE 10 DIAS': 809, '06. NAO RENOVADO': 10803},
  '202602': {'00. CARTAO NAO ENTREGUE': 349, '01. ATE 2 DIAS': 2915, '02. ATE 5 DIAS': 7301, '03. ATE 7 DIAS': 2530, '04. ATE 10 DIAS': 676, '05. ACIMA DE 10 DIAS': 350, '06. NAO RENOVADO': 6857},
  '202603': {'00. CARTAO NAO ENTREGUE': 594, '01. ATE 2 DIAS': 2376, '02. ATE 5 DIAS': 5044, '03. ATE 7 DIAS': 1663, '04. ATE 10 DIAS': 531, '05. ACIMA DE 10 DIAS': 162, '06. NAO RENOVADO': 5451},
  '202604': {'00. CARTAO NAO ENTREGUE': 2131, '01. ATE 2 DIAS': 705, '02. ATE 5 DIAS': 1343, '03. ATE 7 DIAS': 328, '04. ATE 10 DIAS': 77, '05. ACIMA DE 10 DIAS': 52, '06. NAO RENOVADO': 17779}
};

// ── DISTRIBUIÇÃO DIAS_ENTREGA V2 (dias inteiros do tracking) ──
const DIAS_ENTREGA_V2 = {
  '202504': {'2': 4, '4': 3, '5': 2, '6': 1, '7': 5, '8': 2},
  '202505': {'10': 33, '11': 30, '12': 18, '13': 14, '14': 17, '15': 16, '16': 9, '17': 8, '18': 11, '19': 9, '2': 12, '20': 6, '21': 7, '22': 8, '23': 2, '24': 6, '25': 2, '26': 3, '27': 4, '28': 3, '29': 6, '3': 76, '32': 2, '33': 1, '34': 2, '36': 5, '37': 1, '39': 1, '4': 77, '41': 1, '42': 3, '5': 181, '51': 1, '52': 1, '6': 164, '7': 134, '8': 90, '9': 53},
  '202506': {'1': 4, '10': 764, '11': 500, '12': 353, '13': 184, '14': 170, '15': 235, '16': 190, '17': 190, '18': 129, '19': 148, '2': 474, '20': 88, '21': 87, '22': 111, '23': 69, '24': 79, '25': 73, '26': 61, '27': 34, '28': 34, '29': 51, '3': 1495, '30': 38, '31': 42, '32': 26, '33': 33, '34': 11, '35': 10, '36': 23, '37': 13, '38': 20, '39': 6, '4': 2145, '40': 12, '41': 8, '42': 7, '43': 8, '44': 6, '45': 6, '46': 11, '47': 4, '48': 5, '5': 2095, '50': 4, '51': 5, '52': 3, '53': 3, '54': 2, '55': 1, '56': 1, '57': 3, '58': 2, '59': 2, '6': 1601, '60': 1, '7': 1195, '8': 1398, '9': 1008},
  '202507': {'1': 5, '10': 1493, '11': 1307, '12': 1272, '13': 1263, '14': 939, '15': 813, '16': 638, '17': 519, '18': 316, '19': 261, '2': 753, '20': 272, '21': 258, '22': 197, '23': 156, '24': 136, '25': 76, '26': 87, '27': 139, '28': 134, '29': 90, '3': 2087, '30': 90, '31': 70, '32': 45, '33': 58, '34': 62, '35': 55, '36': 46, '37': 38, '38': 24, '39': 21, '4': 2706, '40': 25, '41': 21, '42': 18, '43': 30, '44': 12, '45': 7, '46': 7, '47': 5, '48': 10, '49': 11, '5': 2017, '50': 11, '51': 5, '52': 4, '53': 1, '54': 3, '55': 5, '56': 3, '57': 5, '58': 4, '59': 1, '6': 2521, '7': 2332, '8': 2620, '9': 1904},
  '202508': {'1': 98, '10': 672, '11': 500, '12': 457, '13': 443, '14': 350, '15': 273, '16': 296, '17': 236, '18': 215, '19': 187, '2': 3509, '20': 169, '21': 168, '22': 106, '23': 93, '24': 88, '25': 68, '26': 64, '27': 80, '28': 53, '29': 60, '3': 3796, '30': 47, '31': 34, '32': 30, '33': 26, '34': 31, '35': 30, '36': 28, '37': 22, '38': 18, '39': 9, '4': 3964, '40': 10, '41': 18, '42': 8, '43': 8, '44': 10, '45': 3, '46': 1, '47': 3, '48': 7, '49': 10, '5': 3949, '50': 6, '51': 5, '52': 4, '53': 3, '54': 2, '55': 1, '57': 3, '58': 2, '59': 3, '6': 2941, '60': 2, '7': 2124, '8': 1409, '9': 922},
  '202509': {'1': 576, '10': 565, '11': 494, '12': 402, '13': 331, '14': 371, '15': 226, '16': 253, '17': 225, '18': 181, '19': 165, '2': 5433, '20': 134, '21': 140, '22': 102, '23': 68, '24': 72, '25': 71, '26': 50, '27': 44, '28': 51, '29': 41, '3': 5780, '30': 35, '31': 36, '32': 28, '33': 31, '34': 25, '35': 27, '36': 15, '37': 17, '38': 14, '39': 7, '4': 5025, '40': 11, '41': 7, '42': 7, '43': 7, '44': 8, '45': 6, '46': 7, '47': 4, '48': 7, '49': 6, '5': 4531, '50': 5, '51': 3, '52': 2, '53': 4, '54': 3, '55': 4, '56': 4, '57': 1, '58': 1, '59': 4, '6': 3142, '60': 1, '7': 2307, '8': 1339, '9': 868},
  '202510': {'1': 1587, '10': 280, '11': 206, '12': 163, '13': 143, '14': 167, '15': 111, '16': 108, '17': 80, '18': 69, '19': 53, '2': 6171, '20': 60, '21': 41, '22': 44, '23': 46, '24': 31, '25': 21, '26': 26, '27': 25, '28': 27, '29': 19, '3': 5802, '30': 22, '31': 12, '32': 18, '33': 12, '34': 13, '35': 15, '36': 6, '37': 8, '38': 6, '39': 5, '4': 4573, '40': 13, '41': 2, '42': 4, '43': 6, '44': 1, '45': 3, '46': 3, '47': 1, '49': 1, '5': 4096, '51': 2, '52': 2, '53': 1, '54': 2, '55': 3, '57': 1, '6': 2520, '60': 1, '7': 1733, '8': 877, '9': 472},
  '202511': {'1': 1716, '10': 290, '11': 124, '12': 130, '13': 136, '14': 119, '15': 79, '16': 108, '17': 60, '18': 52, '19': 52, '2': 8435, '20': 72, '21': 52, '22': 54, '23': 42, '24': 24, '25': 23, '26': 41, '27': 35, '28': 30, '29': 23, '3': 9259, '30': 24, '31': 20, '32': 11, '33': 24, '34': 17, '35': 16, '36': 11, '37': 6, '38': 6, '39': 6, '4': 7470, '40': 12, '41': 14, '42': 9, '43': 6, '44': 5, '45': 2, '46': 5, '47': 5, '48': 1, '49': 7, '5': 6281, '50': 5, '51': 2, '52': 2, '53': 2, '54': 4, '55': 2, '57': 3, '58': 3, '59': 2, '6': 5158, '60': 4, '7': 2949, '8': 1173, '9': 511},
  '202512': {'0': 1, '1': 1676, '10': 671, '11': 463, '12': 336, '13': 265, '14': 154, '15': 104, '16': 98, '17': 70, '18': 73, '19': 58, '2': 6961, '20': 50, '21': 66, '22': 53, '23': 44, '24': 31, '25': 49, '26': 44, '27': 56, '28': 52, '29': 47, '3': 9532, '30': 34, '31': 32, '32': 35, '33': 21, '34': 25, '35': 27, '36': 17, '37': 22, '38': 25, '39': 18, '4': 9206, '40': 20, '41': 15, '42': 13, '43': 14, '44': 9, '45': 14, '46': 7, '47': 8, '48': 6, '49': 5, '5': 8419, '50': 7, '51': 5, '52': 6, '53': 11, '54': 5, '55': 1, '56': 5, '57': 6, '58': 3, '59': 5, '6': 6707, '60': 1, '7': 4567, '8': 2070, '9': 991},
  '202601': {'1': 1374, '10': 194, '11': 139, '12': 92, '13': 44, '14': 35, '15': 32, '16': 22, '17': 25, '18': 24, '19': 19, '2': 4556, '20': 22, '21': 32, '22': 19, '23': 16, '24': 20, '25': 19, '26': 15, '27': 16, '28': 17, '29': 10, '3': 5097, '30': 10, '31': 5, '32': 5, '33': 12, '34': 11, '35': 10, '36': 4, '37': 13, '38': 11, '39': 6, '4': 4379, '40': 5, '41': 3, '42': 7, '43': 5, '44': 7, '45': 5, '46': 3, '47': 2, '48': 7, '49': 4, '5': 4229, '50': 3, '51': 3, '52': 2, '53': 3, '54': 1, '56': 1, '57': 1, '58': 1, '6': 3210, '60': 1, '7': 1662, '8': 884, '9': 370},
  '202602': {'1': 635, '10': 69, '11': 49, '12': 33, '13': 24, '14': 12, '15': 12, '16': 14, '17': 14, '18': 15, '19': 9, '2': 2279, '20': 8, '21': 11, '22': 11, '23': 10, '24': 9, '25': 12, '26': 5, '27': 4, '28': 11, '29': 7, '3': 2956, '30': 7, '31': 8, '32': 7, '33': 1, '34': 3, '35': 3, '36': 1, '37': 7, '38': 2, '39': 3, '4': 2164, '40': 3, '42': 7, '44': 4, '45': 1, '47': 2, '48': 1, '49': 1, '5': 2181, '51': 1, '52': 1, '56': 1, '57': 1, '6': 1656, '60': 1, '7': 874, '8': 416, '9': 191},
  '202603': {'0': 1, '1': 489, '10': 57, '11': 23, '12': 13, '13': 11, '14': 5, '15': 13, '16': 11, '17': 7, '18': 10, '19': 8, '2': 1893, '20': 4, '21': 4, '22': 6, '23': 8, '24': 6, '26': 2, '27': 3, '28': 2, '29': 1, '3': 1969, '30': 3, '31': 4, '32': 3, '33': 2, '35': 1, '36': 1, '37': 2, '4': 1647, '40': 1, '41': 2, '44': 1, '5': 1505, '50': 1, '51': 1, '53': 1, '6': 1105, '7': 574, '8': 336, '9': 139},
  '202604': {'1': 304, '10': 13, '11': 10, '12': 5, '13': 4, '14': 2, '15': 3, '16': 1, '17': 3, '18': 1, '2': 887, '21': 2, '22': 3, '23': 3, '24': 1, '28': 4, '29': 1, '3': 716, '32': 3, '34': 1, '37': 1, '4': 346, '44': 1, '45': 1, '47': 1, '5': 289, '53': 1, '6': 245, '7': 89, '8': 39, '9': 25}
};

// ── ENTREGA POR CICLO DE USO ───────────────────────────────────
const ENTREGA_CICLO = {
  '202504': {
    '01. 1 A 30 D': {total:14, entregue:10, faixas:{'00. CARTAO NAO ENTREGUE': 1, '01. ATE 2 DIAS': 1, '02. ATE 5 DIAS': 3, '03. ATE 7 DIAS': 4, '04. ATE 10 DIAS': 2, '06. NAO RENOVADO': 3}},
    '06. ACIMA DE 180 D': {total:4, entregue:3, faixas:{'01. ATE 2 DIAS': 1, '02. ATE 5 DIAS': 1, '03. ATE 7 DIAS': 1, '06. NAO RENOVADO': 1}},
    '07. NAO ATIVO': {total:1, entregue:0, faixas:{'06. NAO RENOVADO': 1}}
  },
  '202505': {
    '01. 1 A 30 D': {total:323, entregue:283, faixas:{'00. CARTAO NAO ENTREGUE': 4, '01. ATE 2 DIAS': 3, '02. ATE 5 DIAS': 95, '03. ATE 7 DIAS': 88, '04. ATE 10 DIAS': 40, '05. ACIMA DE 10 DIAS': 57, '06. NAO RENOVADO': 36}},
    '02. 31 A 60 D': {total:67, entregue:61, faixas:{'00. CARTAO NAO ENTREGUE': 3, '01. ATE 2 DIAS': 1, '02. ATE 5 DIAS': 18, '03. ATE 7 DIAS': 17, '04. ATE 10 DIAS': 13, '05. ACIMA DE 10 DIAS': 12, '06. NAO RENOVADO': 3}},
    '03. 61 A 90 D': {total:50, entregue:36, faixas:{'00. CARTAO NAO ENTREGUE': 7, '02. ATE 5 DIAS': 14, '03. ATE 7 DIAS': 9, '04. ATE 10 DIAS': 2, '05. ACIMA DE 10 DIAS': 11, '06. NAO RENOVADO': 7}},
    '04. 91 A 120 D': {total:40, entregue:35, faixas:{'00. CARTAO NAO ENTREGUE': 2, '01. ATE 2 DIAS': 1, '02. ATE 5 DIAS': 13, '03. ATE 7 DIAS': 7, '04. ATE 10 DIAS': 5, '05. ACIMA DE 10 DIAS': 9, '06. NAO RENOVADO': 3}},
    '05. 121 A 180 D': {total:59, entregue:51, faixas:{'00. CARTAO NAO ENTREGUE': 4, '02. ATE 5 DIAS': 13, '03. ATE 7 DIAS': 15, '04. ATE 10 DIAS': 12, '05. ACIMA DE 10 DIAS': 11, '06. NAO RENOVADO': 4}},
    '06. ACIMA DE 180 D': {total:649, entregue:451, faixas:{'00. CARTAO NAO ENTREGUE': 26, '01. ATE 2 DIAS': 7, '02. ATE 5 DIAS': 152, '03. ATE 7 DIAS': 132, '04. ATE 10 DIAS': 80, '05. ACIMA DE 10 DIAS': 80, '06. NAO RENOVADO': 172}},
    '07. NAO ATIVO': {total:166, entregue:102, faixas:{'00. CARTAO NAO ENTREGUE': 10, '02. ATE 5 DIAS': 29, '03. ATE 7 DIAS': 29, '04. ATE 10 DIAS': 24, '05. ACIMA DE 10 DIAS': 20, '06. NAO RENOVADO': 54}}
  },
  '202506': {
    '01. 1 A 30 D': {total:4797, entregue:4213, faixas:{'00. CARTAO NAO ENTREGUE': 130, '01. ATE 2 DIAS': 153, '02. ATE 5 DIAS': 1674, '03. ATE 7 DIAS': 808, '04. ATE 10 DIAS': 830, '05. ACIMA DE 10 DIAS': 748, '06. NAO RENOVADO': 454}},
    '02. 31 A 60 D': {total:1011, entregue:901, faixas:{'00. CARTAO NAO ENTREGUE': 34, '01. ATE 2 DIAS': 27, '02. ATE 5 DIAS': 312, '03. ATE 7 DIAS': 150, '04. ATE 10 DIAS': 208, '05. ACIMA DE 10 DIAS': 204, '06. NAO RENOVADO': 76}},
    '03. 61 A 90 D': {total:708, entregue:617, faixas:{'00. CARTAO NAO ENTREGUE': 28, '01. ATE 2 DIAS': 19, '02. ATE 5 DIAS': 241, '03. ATE 7 DIAS': 110, '04. ATE 10 DIAS': 127, '05. ACIMA DE 10 DIAS': 120, '06. NAO RENOVADO': 63}},
    '04. 91 A 120 D': {total:578, entregue:509, faixas:{'00. CARTAO NAO ENTREGUE': 20, '01. ATE 2 DIAS': 15, '02. ATE 5 DIAS': 202, '03. ATE 7 DIAS': 92, '04. ATE 10 DIAS': 105, '05. ACIMA DE 10 DIAS': 95, '06. NAO RENOVADO': 49}},
    '05. 121 A 180 D': {total:861, entregue:774, faixas:{'00. CARTAO NAO ENTREGUE': 32, '01. ATE 2 DIAS': 22, '02. ATE 5 DIAS': 304, '03. ATE 7 DIAS': 138, '04. ATE 10 DIAS': 158, '05. ACIMA DE 10 DIAS': 152, '06. NAO RENOVADO': 55}},
    '06. ACIMA DE 180 D': {total:9711, entregue:6578, faixas:{'00. CARTAO NAO ENTREGUE': 344, '01. ATE 2 DIAS': 196, '02. ATE 5 DIAS': 2398, '03. ATE 7 DIAS': 1206, '04. ATE 10 DIAS': 1384, '05. ACIMA DE 10 DIAS': 1394, '06. NAO RENOVADO': 2789}},
    '07. NAO ATIVO': {total:2472, entregue:1707, faixas:{'00. CARTAO NAO ENTREGUE': 82, '01. ATE 2 DIAS': 46, '02. ATE 5 DIAS': 605, '03. ATE 7 DIAS': 292, '04. ATE 10 DIAS': 358, '05. ACIMA DE 10 DIAS': 406, '06. NAO RENOVADO': 683}}
  },
  '202507': {
    '01. 1 A 30 D': {total:8440, entregue:7429, faixas:{'00. CARTAO NAO ENTREGUE': 318, '01. ATE 2 DIAS': 191, '02. ATE 5 DIAS': 1941, '03. ATE 7 DIAS': 1332, '04. ATE 10 DIAS': 1549, '05. ACIMA DE 10 DIAS': 2415, '06. NAO RENOVADO': 694}},
    '02. 31 A 60 D': {total:1720, entregue:1526, faixas:{'00. CARTAO NAO ENTREGUE': 74, '01. ATE 2 DIAS': 36, '02. ATE 5 DIAS': 344, '03. ATE 7 DIAS': 279, '04. ATE 10 DIAS': 325, '05. ACIMA DE 10 DIAS': 542, '06. NAO RENOVADO': 120}},
    '03. 61 A 90 D': {total:1187, entregue:1054, faixas:{'00. CARTAO NAO ENTREGUE': 55, '01. ATE 2 DIAS': 17, '02. ATE 5 DIAS': 234, '03. ATE 7 DIAS': 185, '04. ATE 10 DIAS': 221, '05. ACIMA DE 10 DIAS': 397, '06. NAO RENOVADO': 78}},
    '04. 91 A 120 D': {total:989, entregue:872, faixas:{'00. CARTAO NAO ENTREGUE': 45, '01. ATE 2 DIAS': 26, '02. ATE 5 DIAS': 229, '03. ATE 7 DIAS': 138, '04. ATE 10 DIAS': 169, '05. ACIMA DE 10 DIAS': 310, '06. NAO RENOVADO': 72}},
    '05. 121 A 180 D': {total:1424, entregue:1265, faixas:{'00. CARTAO NAO ENTREGUE': 60, '01. ATE 2 DIAS': 24, '02. ATE 5 DIAS': 313, '03. ATE 7 DIAS': 206, '04. ATE 10 DIAS': 270, '05. ACIMA DE 10 DIAS': 452, '06. NAO RENOVADO': 99}},
    '06. ACIMA DE 180 D': {total:19307, entregue:12650, faixas:{'00. CARTAO NAO ENTREGUE': 752, '01. ATE 2 DIAS': 358, '02. ATE 5 DIAS': 3048, '03. ATE 7 DIAS': 2157, '04. ATE 10 DIAS': 2767, '05. ACIMA DE 10 DIAS': 4320, '06. NAO RENOVADO': 5905}},
    '07. NAO ATIVO': {total:4652, entregue:3244, faixas:{'00. CARTAO NAO ENTREGUE': 159, '01. ATE 2 DIAS': 106, '02. ATE 5 DIAS': 700, '03. ATE 7 DIAS': 555, '04. ATE 10 DIAS': 716, '05. ACIMA DE 10 DIAS': 1167, '06. NAO RENOVADO': 1249}}
  },
  '202508': {
    '01. 1 A 30 D': {total:8395, entregue:7145, faixas:{'00. CARTAO NAO ENTREGUE': 368, '01. ATE 2 DIAS': 1038, '02. ATE 5 DIAS': 3163, '03. ATE 7 DIAS': 1278, '04. ATE 10 DIAS': 720, '05. ACIMA DE 10 DIAS': 946, '06. NAO RENOVADO': 882}},
    '02. 31 A 60 D': {total:1742, entregue:1498, faixas:{'00. CARTAO NAO ENTREGUE': 65, '01. ATE 2 DIAS': 187, '02. ATE 5 DIAS': 645, '03. ATE 7 DIAS': 304, '04. ATE 10 DIAS': 156, '05. ACIMA DE 10 DIAS': 206, '06. NAO RENOVADO': 179}},
    '03. 61 A 90 D': {total:1183, entregue:1019, faixas:{'00. CARTAO NAO ENTREGUE': 54, '01. ATE 2 DIAS': 135, '02. ATE 5 DIAS': 427, '03. ATE 7 DIAS': 191, '04. ATE 10 DIAS': 108, '05. ACIMA DE 10 DIAS': 158, '06. NAO RENOVADO': 110}},
    '04. 91 A 120 D': {total:969, entregue:861, faixas:{'00. CARTAO NAO ENTREGUE': 40, '01. ATE 2 DIAS': 116, '02. ATE 5 DIAS': 373, '03. ATE 7 DIAS': 161, '04. ATE 10 DIAS': 81, '05. ACIMA DE 10 DIAS': 130, '06. NAO RENOVADO': 68}},
    '05. 121 A 180 D': {total:1445, entregue:1280, faixas:{'00. CARTAO NAO ENTREGUE': 70, '01. ATE 2 DIAS': 167, '02. ATE 5 DIAS': 556, '03. ATE 7 DIAS': 225, '04. ATE 10 DIAS': 144, '05. ACIMA DE 10 DIAS': 188, '06. NAO RENOVADO': 95}},
    '06. ACIMA DE 180 D': {total:20989, entregue:12625, faixas:{'00. CARTAO NAO ENTREGUE': 923, '01. ATE 2 DIAS': 1557, '02. ATE 5 DIAS': 5224, '03. ATE 7 DIAS': 2345, '04. ATE 10 DIAS': 1413, '05. ACIMA DE 10 DIAS': 2086, '06. NAO RENOVADO': 7441}},
    '07. NAO ATIVO': {total:4930, entregue:3289, faixas:{'00. CARTAO NAO ENTREGUE': 167, '01. ATE 2 DIAS': 407, '02. ATE 5 DIAS': 1322, '03. ATE 7 DIAS': 561, '04. ATE 10 DIAS': 381, '05. ACIMA DE 10 DIAS': 618, '06. NAO RENOVADO': 1474}}
  },
  '202509': {
    '01. 1 A 30 D': {total:10099, entregue:8737, faixas:{'00. CARTAO NAO ENTREGUE': 392, '01. ATE 2 DIAS': 1730, '02. ATE 5 DIAS': 4224, '03. ATE 7 DIAS': 1307, '04. ATE 10 DIAS': 660, '05. ACIMA DE 10 DIAS': 816, '06. NAO RENOVADO': 970}},
    '02. 31 A 60 D': {total:2011, entregue:1766, faixas:{'00. CARTAO NAO ENTREGUE': 64, '01. ATE 2 DIAS': 294, '02. ATE 5 DIAS': 827, '03. ATE 7 DIAS': 304, '04. ATE 10 DIAS': 141, '05. ACIMA DE 10 DIAS': 199, '06. NAO RENOVADO': 182}},
    '03. 61 A 90 D': {total:1408, entregue:1235, faixas:{'00. CARTAO NAO ENTREGUE': 55, '01. ATE 2 DIAS': 223, '02. ATE 5 DIAS': 570, '03. ATE 7 DIAS': 201, '04. ATE 10 DIAS': 101, '05. ACIMA DE 10 DIAS': 140, '06. NAO RENOVADO': 118}},
    '04. 91 A 120 D': {total:1153, entregue:1007, faixas:{'00. CARTAO NAO ENTREGUE': 55, '01. ATE 2 DIAS': 170, '02. ATE 5 DIAS': 442, '03. ATE 7 DIAS': 170, '04. ATE 10 DIAS': 93, '05. ACIMA DE 10 DIAS': 132, '06. NAO RENOVADO': 91}},
    '05. 121 A 180 D': {total:1721, entregue:1576, faixas:{'00. CARTAO NAO ENTREGUE': 52, '01. ATE 2 DIAS': 277, '02. ATE 5 DIAS': 723, '03. ATE 7 DIAS': 276, '04. ATE 10 DIAS': 125, '05. ACIMA DE 10 DIAS': 175, '06. NAO RENOVADO': 93}},
    '06. ACIMA DE 180 D': {total:25933, entregue:15159, faixas:{'00. CARTAO NAO ENTREGUE': 1069, '01. ATE 2 DIAS': 2637, '02. ATE 5 DIAS': 6856, '03. ATE 7 DIAS': 2526, '04. ATE 10 DIAS': 1325, '05. ACIMA DE 10 DIAS': 1814, '06. NAO RENOVADO': 9706}},
    '07. NAO ATIVO': {total:5970, entregue:3902, faixas:{'00. CARTAO NAO ENTREGUE': 208, '01. ATE 2 DIAS': 677, '02. ATE 5 DIAS': 1694, '03. ATE 7 DIAS': 664, '04. ATE 10 DIAS': 327, '05. ACIMA DE 10 DIAS': 539, '06. NAO RENOVADO': 1861}}
  },
  '202510': {
    '01. 1 A 30 D': {total:9491, entregue:8164, faixas:{'00. CARTAO NAO ENTREGUE': 227, '01. ATE 2 DIAS': 2466, '02. ATE 5 DIAS': 3918, '03. ATE 7 DIAS': 991, '04. ATE 10 DIAS': 414, '05. ACIMA DE 10 DIAS': 375, '06. NAO RENOVADO': 1100}},
    '02. 31 A 60 D': {total:1805, entregue:1598, faixas:{'00. CARTAO NAO ENTREGUE': 53, '01. ATE 2 DIAS': 431, '02. ATE 5 DIAS': 770, '03. ATE 7 DIAS': 215, '04. ATE 10 DIAS': 92, '05. ACIMA DE 10 DIAS': 89, '06. NAO RENOVADO': 155}},
    '03. 61 A 90 D': {total:1142, entregue:1001, faixas:{'00. CARTAO NAO ENTREGUE': 31, '01. ATE 2 DIAS': 260, '02. ATE 5 DIAS': 476, '03. ATE 7 DIAS': 146, '04. ATE 10 DIAS': 65, '05. ACIMA DE 10 DIAS': 54, '06. NAO RENOVADO': 110}},
    '04. 91 A 120 D': {total:975, entregue:904, faixas:{'00. CARTAO NAO ENTREGUE': 19, '01. ATE 2 DIAS': 231, '02. ATE 5 DIAS': 447, '03. ATE 7 DIAS': 121, '04. ATE 10 DIAS': 57, '05. ACIMA DE 10 DIAS': 48, '06. NAO RENOVADO': 52}},
    '05. 121 A 180 D': {total:3229, entregue:2229, faixas:{'00. CARTAO NAO ENTREGUE': 127, '01. ATE 2 DIAS': 570, '02. ATE 5 DIAS': 1068, '03. ATE 7 DIAS': 332, '04. ATE 10 DIAS': 129, '05. ACIMA DE 10 DIAS': 129, '06. NAO RENOVADO': 874}},
    '06. ACIMA DE 180 D': {total:20524, entregue:11932, faixas:{'00. CARTAO NAO ENTREGUE': 505, '01. ATE 2 DIAS': 2864, '02. ATE 5 DIAS': 5856, '03. ATE 7 DIAS': 1865, '04. ATE 10 DIAS': 655, '05. ACIMA DE 10 DIAS': 692, '06. NAO RENOVADO': 8087}},
    '07. NAO ATIVO': {total:6037, entregue:3902, faixas:{'00. CARTAO NAO ENTREGUE': 140, '01. ATE 2 DIAS': 936, '02. ATE 5 DIAS': 1937, '03. ATE 7 DIAS': 583, '04. ATE 10 DIAS': 216, '05. ACIMA DE 10 DIAS': 230, '06. NAO RENOVADO': 1995}}
  },
  '202511': {
    '01. 1 A 30 D': {total:13760, entregue:11853, faixas:{'00. CARTAO NAO ENTREGUE': 284, '01. ATE 2 DIAS': 2870, '02. ATE 5 DIAS': 6194, '03. ATE 7 DIAS': 1974, '04. ATE 10 DIAS': 478, '05. ACIMA DE 10 DIAS': 335, '06. NAO RENOVADO': 1625}},
    '02. 31 A 60 D': {total:2751, entregue:2439, faixas:{'00. CARTAO NAO ENTREGUE': 63, '01. ATE 2 DIAS': 509, '02. ATE 5 DIAS': 1271, '03. ATE 7 DIAS': 457, '04. ATE 10 DIAS': 106, '05. ACIMA DE 10 DIAS': 96, '06. NAO RENOVADO': 249}},
    '03. 61 A 90 D': {total:1839, entregue:1672, faixas:{'00. CARTAO NAO ENTREGUE': 43, '01. ATE 2 DIAS': 392, '02. ATE 5 DIAS': 842, '03. ATE 7 DIAS': 296, '04. ATE 10 DIAS': 83, '05. ACIMA DE 10 DIAS': 59, '06. NAO RENOVADO': 124}},
    '04. 91 A 120 D': {total:1468, entregue:1375, faixas:{'00. CARTAO NAO ENTREGUE': 19, '01. ATE 2 DIAS': 301, '02. ATE 5 DIAS': 712, '03. ATE 7 DIAS': 236, '04. ATE 10 DIAS': 76, '05. ACIMA DE 10 DIAS': 50, '06. NAO RENOVADO': 74}},
    '05. 121 A 180 D': {total:6725, entregue:4197, faixas:{'00. CARTAO NAO ENTREGUE': 268, '01. ATE 2 DIAS': 946, '02. ATE 5 DIAS': 2136, '03. ATE 7 DIAS': 771, '04. ATE 10 DIAS': 206, '05. ACIMA DE 10 DIAS': 138, '06. NAO RENOVADO': 2260}},
    '06. ACIMA DE 180 D': {total:29785, entregue:17212, faixas:{'00. CARTAO NAO ENTREGUE': 638, '01. ATE 2 DIAS': 3825, '02. ATE 5 DIAS': 8768, '03. ATE 7 DIAS': 3210, '04. ATE 10 DIAS': 747, '05. ACIMA DE 10 DIAS': 662, '06. NAO RENOVADO': 11935}},
    '07. NAO ATIVO': {total:9201, entregue:6043, faixas:{'00. CARTAO NAO ENTREGUE': 152, '01. ATE 2 DIAS': 1308, '02. ATE 5 DIAS': 3088, '03. ATE 7 DIAS': 1162, '04. ATE 10 DIAS': 278, '05. ACIMA DE 10 DIAS': 207, '06. NAO RENOVADO': 3006}}
  },
  '202512': {
    '01. 1 A 30 D': {total:16219, entregue:14096, faixas:{'00. CARTAO NAO ENTREGUE': 309, '01. ATE 2 DIAS': 2360, '02. ATE 5 DIAS': 7402, '03. ATE 7 DIAS': 2790, '04. ATE 10 DIAS': 895, '05. ACIMA DE 10 DIAS': 648, '06. NAO RENOVADO': 1815}},
    '02. 31 A 60 D': {total:3209, entregue:2911, faixas:{'00. CARTAO NAO ENTREGUE': 55, '01. ATE 2 DIAS': 489, '02. ATE 5 DIAS': 1477, '03. ATE 7 DIAS': 603, '04. ATE 10 DIAS': 193, '05. ACIMA DE 10 DIAS': 149, '06. NAO RENOVADO': 243}},
    '03. 61 A 90 D': {total:2079, entregue:1974, faixas:{'00. CARTAO NAO ENTREGUE': 17, '01. ATE 2 DIAS': 322, '02. ATE 5 DIAS': 1005, '03. ATE 7 DIAS': 434, '04. ATE 10 DIAS': 126, '05. ACIMA DE 10 DIAS': 86, '06. NAO RENOVADO': 89}},
    '04. 91 A 120 D': {total:5573, entregue:3568, faixas:{'00. CARTAO NAO ENTREGUE': 232, '01. ATE 2 DIAS': 519, '02. ATE 5 DIAS': 1831, '03. ATE 7 DIAS': 756, '04. ATE 10 DIAS': 265, '05. ACIMA DE 10 DIAS': 197, '06. NAO RENOVADO': 1773}},
    '05. 121 A 180 D': {total:5261, entregue:3477, faixas:{'00. CARTAO NAO ENTREGUE': 165, '01. ATE 2 DIAS': 579, '02. ATE 5 DIAS': 1814, '03. ATE 7 DIAS': 691, '04. ATE 10 DIAS': 225, '05. ACIMA DE 10 DIAS': 168, '06. NAO RENOVADO': 1619}},
    '06. ACIMA DE 180 D': {total:33407, entregue:19604, faixas:{'00. CARTAO NAO ENTREGUE': 622, '01. ATE 2 DIAS': 3091, '02. ATE 5 DIAS': 9763, '03. ATE 7 DIAS': 4258, '04. ATE 10 DIAS': 1485, '05. ACIMA DE 10 DIAS': 1007, '06. NAO RENOVADO': 13181}},
    '07. NAO ATIVO': {total:11949, entregue:7780, faixas:{'00. CARTAO NAO ENTREGUE': 168, '01. ATE 2 DIAS': 1278, '02. ATE 5 DIAS': 3865, '03. ATE 7 DIAS': 1742, '04. ATE 10 DIAS': 543, '05. ACIMA DE 10 DIAS': 351, '06. NAO RENOVADO': 4002}}
  },
  '202601': {
    '01. 1 A 30 D': {total:8092, entregue:7209, faixas:{'00. CARTAO NAO ENTREGUE': 115, '01. ATE 2 DIAS': 1685, '02. ATE 5 DIAS': 3716, '03. ATE 7 DIAS': 1195, '04. ATE 10 DIAS': 393, '05. ACIMA DE 10 DIAS': 220, '06. NAO RENOVADO': 768}},
    '02. 31 A 60 D': {total:1536, entregue:1476, faixas:{'00. CARTAO NAO ENTREGUE': 7, '01. ATE 2 DIAS': 303, '02. ATE 5 DIAS': 725, '03. ATE 7 DIAS': 310, '04. ATE 10 DIAS': 91, '05. ACIMA DE 10 DIAS': 47, '06. NAO RENOVADO': 53}},
    '03. 61 A 90 D': {total:3025, entregue:2121, faixas:{'00. CARTAO NAO ENTREGUE': 111, '01. ATE 2 DIAS': 502, '02. ATE 5 DIAS': 1034, '03. ATE 7 DIAS': 375, '04. ATE 10 DIAS': 140, '05. ACIMA DE 10 DIAS': 70, '06. NAO RENOVADO': 793}},
    '04. 91 A 120 D': {total:1627, entregue:1209, faixas:{'00. CARTAO NAO ENTREGUE': 41, '01. ATE 2 DIAS': 272, '02. ATE 5 DIAS': 630, '03. ATE 7 DIAS': 206, '04. ATE 10 DIAS': 60, '05. ACIMA DE 10 DIAS': 41, '06. NAO RENOVADO': 377}},
    '05. 121 A 180 D': {total:2427, entregue:1559, faixas:{'00. CARTAO NAO ENTREGUE': 61, '01. ATE 2 DIAS': 320, '02. ATE 5 DIAS': 802, '03. ATE 7 DIAS': 306, '04. ATE 10 DIAS': 87, '05. ACIMA DE 10 DIAS': 44, '06. NAO RENOVADO': 807}},
    '06. ACIMA DE 180 D': {total:15484, entregue:9288, faixas:{'00. CARTAO NAO ENTREGUE': 210, '01. ATE 2 DIAS': 2007, '02. ATE 5 DIAS': 4799, '03. ATE 7 DIAS': 1715, '04. ATE 10 DIAS': 477, '05. ACIMA DE 10 DIAS': 290, '06. NAO RENOVADO': 5986}},
    '07. NAO ATIVO': {total:5986, entregue:3901, faixas:{'00. CARTAO NAO ENTREGUE': 66, '01. ATE 2 DIAS': 841, '02. ATE 5 DIAS': 1998, '03. ATE 7 DIAS': 765, '04. ATE 10 DIAS': 200, '05. ACIMA DE 10 DIAS': 97, '06. NAO RENOVADO': 2019}}
  },
  '202602': {
    '01. 1 A 30 D': {total:3745, entregue:3289, faixas:{'00. CARTAO NAO ENTREGUE': 39, '01. ATE 2 DIAS': 777, '02. ATE 5 DIAS': 1733, '03. ATE 7 DIAS': 547, '04. ATE 10 DIAS': 140, '05. ACIMA DE 10 DIAS': 90, '06. NAO RENOVADO': 419}},
    '02. 31 A 60 D': {total:1931, entregue:1258, faixas:{'00. CARTAO NAO ENTREGUE': 71, '01. ATE 2 DIAS': 272, '02. ATE 5 DIAS': 659, '03. ATE 7 DIAS': 220, '04. ATE 10 DIAS': 68, '05. ACIMA DE 10 DIAS': 39, '06. NAO RENOVADO': 602}},
    '03. 61 A 90 D': {total:957, entregue:661, faixas:{'00. CARTAO NAO ENTREGUE': 26, '01. ATE 2 DIAS': 137, '02. ATE 5 DIAS': 352, '03. ATE 7 DIAS': 119, '04. ATE 10 DIAS': 35, '05. ACIMA DE 10 DIAS': 18, '06. NAO RENOVADO': 270}},
    '04. 91 A 120 D': {total:753, entregue:494, faixas:{'00. CARTAO NAO ENTREGUE': 14, '01. ATE 2 DIAS': 92, '02. ATE 5 DIAS': 252, '03. ATE 7 DIAS': 102, '04. ATE 10 DIAS': 38, '05. ACIMA DE 10 DIAS': 10, '06. NAO RENOVADO': 245}},
    '05. 121 A 180 D': {total:1351, entregue:770, faixas:{'00. CARTAO NAO ENTREGUE': 25, '01. ATE 2 DIAS': 162, '02. ATE 5 DIAS': 398, '03. ATE 7 DIAS': 145, '04. ATE 10 DIAS': 40, '05. ACIMA DE 10 DIAS': 25, '06. NAO RENOVADO': 556}},
    '06. ACIMA DE 180 D': {total:7495, entregue:4259, faixas:{'00. CARTAO NAO ENTREGUE': 106, '01. ATE 2 DIAS': 832, '02. ATE 5 DIAS': 2322, '03. ATE 7 DIAS': 801, '04. ATE 10 DIAS': 202, '05. ACIMA DE 10 DIAS': 102, '06. NAO RENOVADO': 3130}},
    '07. NAO ATIVO': {total:4746, entregue:3043, faixas:{'00. CARTAO NAO ENTREGUE': 68, '01. ATE 2 DIAS': 643, '02. ATE 5 DIAS': 1585, '03. ATE 7 DIAS': 596, '04. ATE 10 DIAS': 153, '05. ACIMA DE 10 DIAS': 66, '06. NAO RENOVADO': 1635}}
  },
  '202603': {
    '01. 1 A 30 D': {total:3475, entregue:2423, faixas:{'00. CARTAO NAO ENTREGUE': 152, '01. ATE 2 DIAS': 621, '02. ATE 5 DIAS': 1369, '03. ATE 7 DIAS': 421, '04. ATE 10 DIAS': 138, '05. ACIMA DE 10 DIAS': 41, '06. NAO RENOVADO': 733}},
    '02. 31 A 60 D': {total:824, entregue:514, faixas:{'00. CARTAO NAO ENTREGUE': 43, '01. ATE 2 DIAS': 134, '02. ATE 5 DIAS': 276, '03. ATE 7 DIAS': 106, '04. ATE 10 DIAS': 23, '05. ACIMA DE 10 DIAS': 13, '06. NAO RENOVADO': 229}},
    '03. 61 A 90 D': {total:615, entregue:369, faixas:{'00. CARTAO NAO ENTREGUE': 28, '01. ATE 2 DIAS': 83, '02. ATE 5 DIAS': 199, '03. ATE 7 DIAS': 70, '04. ATE 10 DIAS': 29, '05. ACIMA DE 10 DIAS': 11, '06. NAO RENOVADO': 195}},
    '04. 91 A 120 D': {total:600, entregue:317, faixas:{'00. CARTAO NAO ENTREGUE': 27, '01. ATE 2 DIAS': 82, '02. ATE 5 DIAS': 181, '03. ATE 7 DIAS': 63, '04. ATE 10 DIAS': 16, '05. ACIMA DE 10 DIAS': 5, '06. NAO RENOVADO': 226}},
    '05. 121 A 180 D': {total:917, entregue:415, faixas:{'00. CARTAO NAO ENTREGUE': 23, '01. ATE 2 DIAS': 99, '02. ATE 5 DIAS': 216, '03. ATE 7 DIAS': 96, '04. ATE 10 DIAS': 35, '05. ACIMA DE 10 DIAS': 4, '06. NAO RENOVADO': 444}},
    '06. ACIMA DE 180 D': {total:5426, entregue:2721, faixas:{'00. CARTAO NAO ENTREGUE': 193, '01. ATE 2 DIAS': 702, '02. ATE 5 DIAS': 1564, '03. ATE 7 DIAS': 497, '04. ATE 10 DIAS': 174, '05. ACIMA DE 10 DIAS': 52, '06. NAO RENOVADO': 2244}},
    '07. NAO ATIVO': {total:3964, entregue:2262, faixas:{'00. CARTAO NAO ENTREGUE': 128, '01. ATE 2 DIAS': 655, '02. ATE 5 DIAS': 1239, '03. ATE 7 DIAS': 410, '04. ATE 10 DIAS': 116, '05. ACIMA DE 10 DIAS': 36, '06. NAO RENOVADO': 1380}}
  },
  '202604': {
    '01. 1 A 30 D': {total:4713, entregue:383, faixas:{'00. CARTAO NAO ENTREGUE': 654, '01. ATE 2 DIAS': 122, '02. ATE 5 DIAS': 214, '03. ATE 7 DIAS': 54, '04. ATE 10 DIAS': 16, '05. ACIMA DE 10 DIAS': 8, '06. NAO RENOVADO': 3645}},
    '02. 31 A 60 D': {total:1180, entregue:129, faixas:{'00. CARTAO NAO ENTREGUE': 135, '01. ATE 2 DIAS': 23, '02. ATE 5 DIAS': 79, '03. ATE 7 DIAS': 19, '04. ATE 10 DIAS': 7, '05. ACIMA DE 10 DIAS': 4, '06. NAO RENOVADO': 913}},
    '03. 61 A 90 D': {total:965, entregue:114, faixas:{'00. CARTAO NAO ENTREGUE': 90, '01. ATE 2 DIAS': 26, '02. ATE 5 DIAS': 74, '03. ATE 7 DIAS': 12, '04. ATE 10 DIAS': 1, '05. ACIMA DE 10 DIAS': 3, '06. NAO RENOVADO': 759}},
    '04. 91 A 120 D': {total:880, entregue:78, faixas:{'00. CARTAO NAO ENTREGUE': 79, '01. ATE 2 DIAS': 25, '02. ATE 5 DIAS': 36, '03. ATE 7 DIAS': 15, '04. ATE 10 DIAS': 4, '05. ACIMA DE 10 DIAS': 4, '06. NAO RENOVADO': 717}},
    '05. 121 A 180 D': {total:1308, entregue:110, faixas:{'00. CARTAO NAO ENTREGUE': 85, '01. ATE 2 DIAS': 26, '02. ATE 5 DIAS': 59, '03. ATE 7 DIAS': 20, '04. ATE 10 DIAS': 5, '05. ACIMA DE 10 DIAS': 3, '06. NAO RENOVADO': 1110}},
    '06. ACIMA DE 180 D': {total:7368, entregue:771, faixas:{'00. CARTAO NAO ENTREGUE': 600, '01. ATE 2 DIAS': 223, '02. ATE 5 DIAS': 424, '03. ATE 7 DIAS': 100, '04. ATE 10 DIAS': 24, '05. ACIMA DE 10 DIAS': 13, '06. NAO RENOVADO': 5984}},
    '07. NAO ATIVO': {total:6001, entregue:840, faixas:{'00. CARTAO NAO ENTREGUE': 488, '01. ATE 2 DIAS': 260, '02. ATE 5 DIAS': 457, '03. ATE 7 DIAS': 108, '04. ATE 10 DIAS': 20, '05. ACIMA DE 10 DIAS': 17, '06. NAO RENOVADO': 4651}}
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
  '202603':81246,
  '202604':123211,
};
const TOTAL_GRUPO1 = {
  '202504':19,
  '202505':1354,
  '202506':20137,
  '202507':37719,
  '202508':39652,
  '202509':48294,
  '202510':43202,
  '202511':65527,
  '202512':77697,
  '202601':38177,
  '202602':20976,
  '202603':15821,
  '202604':22415,
};
const TOTAL_GRUPO2 = {
  '202503':3,
  '202504':7,
  '202505':6180,
  '202506':81730,
  '202507':193505,
  '202508':221905,
  '202509':295382,
  '202510':227158,
  '202511':350875,
  '202512':366068,
  '202601':175904,
  '202602':82266,
  '202603':65428,
  '202604':100800,
};

// ── GRUPO 2 — TOTAIS MENSAIS ──────────────────────────────────
const MONTHLY_G2 = [
  {mes:'Mar/25', completo:true, ren:0, rei:0, ent:0, dm:0, tel:3},
  {mes:'Abr/25', completo:true, ren:0, rei:0, ent:0, dm:0, tel:7},
  {mes:'Mai/25', completo:true, ren:155, rei:172, ent:117, dm:0, tel:6180},
  {mes:'Jun/25', completo:true, ren:2922, rei:1859, ent:2167, dm:0, tel:81730},
  {mes:'Jul/25', completo:true, ren:7731, rei:3838, ent:5735, dm:0, tel:193505},
  {mes:'Ago/25', completo:true, ren:7862, rei:4901, ent:5728, dm:0, tel:221905},
  {mes:'Set/25', completo:true, ren:7566, rei:6749, ent:5770, dm:0, tel:295382},
  {mes:'Out/25', completo:true, ren:7576, rei:3568, ent:5759, dm:0, tel:227158},
  {mes:'Nov/25', completo:true, ren:12896, rei:6616, ent:9677, dm:0, tel:350875},
  {mes:'Dez/25', completo:true, ren:14422, rei:7577, ent:10562, dm:0, tel:366068},
  {mes:'Jan/26', completo:true, ren:7602, rei:3547, ent:5053, dm:0, tel:175904},
  {mes:'Fev/26', completo:true, ren:3686, rei:1607, ent:2435, dm:0, tel:82266},
  {mes:'Mar/26', completo:true, ren:3160, rei:293, ent:1021, dm:0, tel:65428},
  {mes:'Abr/26*', completo:false, ren:956, rei:0, ent:16, dm:0, tel:100800},
];

// ── BREAKDOWN POR PRODUTO (G1) ────────────────────────────────
const MONTHLY_HIBRIDO  = [
  {mes:'Abr/25', completo:true, ren:14, rei:1},
  {mes:'Mai/25', completo:true, ren:901, rei:44},
  {mes:'Jun/25', completo:true, ren:13864, rei:735},
  {mes:'Jul/25', completo:true, ren:25517, rei:1124},
  {mes:'Ago/25', completo:true, ren:25201, rei:1234},
  {mes:'Set/25', completo:true, ren:30191, rei:1610},
  {mes:'Out/25', completo:true, ren:26279, rei:1121},
  {mes:'Nov/25', completo:true, ren:39814, rei:1750},
  {mes:'Dez/25', completo:true, ren:48251, rei:3088},
  {mes:'Jan/26', completo:true, ren:24016, rei:1630},
  {mes:'Fev/26', completo:true, ren:12780, rei:1217},
  {mes:'Mar/26', completo:true, ren:9462, rei:239},
  {mes:'Abr/26*', completo:false, ren:4352, rei:0},
];
const MONTHLY_DEBITO   = [
  {mes:'Abr/25', completo:true, ren:0, rei:0},
  {mes:'Mai/25', completo:true, ren:174, rei:25},
  {mes:'Jun/25', completo:true, ren:2105, rei:268},
  {mes:'Jul/25', completo:true, ren:3985, rei:461},
  {mes:'Ago/25', completo:true, ren:4203, rei:574},
  {mes:'Set/25', completo:true, ren:5083, rei:647},
  {mes:'Out/25', completo:true, ren:4551, rei:644},
  {mes:'Nov/25', completo:true, ren:6442, rei:939},
  {mes:'Dez/25', completo:true, ren:6724, rei:997},
  {mes:'Jan/26', completo:true, ren:3358, rei:466},
  {mes:'Fev/26', completo:true, ren:1341, rei:268},
  {mes:'Mar/26', completo:true, ren:908, rei:51},
  {mes:'Abr/26*', completo:false, ren:284, rei:0},
];

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
