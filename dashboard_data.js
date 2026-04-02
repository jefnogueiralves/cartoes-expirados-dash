// ═══════════════════════════════════════════════════════════════
//  dashboard_data.js — gerado automaticamente por update_data.py
//  Última atualização: 02/04/2026
//  Fonte: meli-bi-data.SBOX_CREDITSTC.CARTAO_EXPIRADO_ANL_IA
//         meli-bi-data.SBOX_CREDITSTC.CARTAO_EXPIRADO_CUBO_IA
// ═══════════════════════════════════════════════════════════════

// ── DATA DA ÚLTIMA ATUALIZAÇÃO ────────────────────────────────
const DT_ATUALIZACAO = '02/04/2026';

// ── TOTAIS MENSAIS REAIS (BigQuery) ───────────────────────────
const MONTHLY = [
  {mes:'Abr/25', completo:true, ren:14, rei:1, ent:13, dm:4.90, tel:19},
  {mes:'Mai/25', completo:true, ren:1075, rei:69, ent:923, dm:6.90, tel:1354},
  {mes:'Jun/25', completo:true, ren:15969, rei:1003, ent:13863, dm:6.90, tel:20137},
  {mes:'Jul/25', completo:true, ren:29502, rei:1585, ent:23934, dm:8.20, tel:37719},
  {mes:'Ago/25', completo:true, ren:29404, rei:1809, ent:22869, dm:5.70, tel:39652},
  {mes:'Set/25', completo:true, ren:35274, rei:2257, ent:27098, dm:5.00, tel:48294},
  {mes:'Out/25', completo:true, ren:30830, rei:1767, ent:23449, dm:4.10, tel:43202},
  {mes:'Nov/25', completo:true, ren:46256, rei:2692, ent:34621, dm:4.00, tel:65527},
  {mes:'Dez/25', completo:true, ren:54975, rei:4087, ent:40626, dm:4.50, tel:77697},
  {mes:'Jan/26', completo:true, ren:27374, rei:2100, ent:19690, dm:4.10, tel:38177},
  {mes:'Fev/26', completo:true, ren:14121, rei:1485, ent:9875, dm:4.00, tel:20976},
  {mes:'Mar/26', completo:true, ren:10370, rei:163, ent:5602, dm:3.90, tel:15821},
  {mes:'Abr/26*', completo:false, ren:3657, rei:0, ent:26, dm:3.60, tel:22417},
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
  {safra:'202506', base:16972, entregue:15299, ativados:13863, ativos_tc:7909, ativos_td:8693, ativos_fisico:11890, ativos_ambos:0, tpv_tc:15512499, tpv_td:16299444, tpn_tc:0, tpn_td:0, maps_tc:7909, maps_td:8693},
  {safra:'202507', base:31087, entregue:28040, ativados:23934, ativos_tc:13386, ativos_td:15080, ativos_fisico:20605, ativos_ambos:0, tpv_tc:27860198, tpv_td:28118792, tpn_tc:0, tpn_td:0, maps_tc:13386, maps_td:15080},
  {safra:'202508', base:31213, entregue:27717, ativados:22869, ativos_tc:12711, ativos_td:14805, ativos_fisico:19986, ativos_ambos:0, tpv_tc:26102447, tpv_td:27988183, tpn_tc:0, tpn_td:0, maps_tc:12711, maps_td:14805},
  {safra:'202509', base:37531, entregue:33382, ativados:27098, ativos_tc:14944, ativos_td:17906, ativos_fisico:23968, ativos_ambos:0, tpv_tc:30987292, tpv_td:32653476, tpn_tc:0, tpn_td:0, maps_tc:14944, maps_td:17906},
  {safra:'202510', base:32597, entregue:29730, ativados:23449, ativos_tc:12980, ativos_td:15559, ativos_fisico:20882, ativos_ambos:0, tpv_tc:27982414, tpv_td:31494815, tpn_tc:0, tpn_td:0, maps_tc:12980, maps_td:15559},
  {safra:'202511', base:48948, entregue:44791, ativados:34621, ativos_tc:19655, ativos_td:22970, ativos_fisico:31115, ativos_ambos:0, tpv_tc:39223815, tpv_td:40750127, tpn_tc:0, tpn_td:0, maps_tc:19655, maps_td:22970},
  {safra:'202512', base:59062, entregue:53409, ativados:40626, ativos_tc:23429, ativos_td:26933, ativos_fisico:36801, ativos_ambos:0, tpv_tc:47624084, tpv_td:46329358, tpn_tc:0, tpn_td:0, maps_tc:23429, maps_td:26933},
  {safra:'202601', base:29474, entregue:26763, ativados:19690, ativos_tc:11266, ativos_td:13106, ativos_fisico:17852, ativos_ambos:0, tpv_tc:21727031, tpv_td:20358654, tpn_tc:0, tpn_td:0, maps_tc:11266, maps_td:13106},
  {safra:'202602', base:15606, entregue:13774, ativados:9875, ativos_tc:5740, ativos_td:5634, ativos_fisico:8562, ativos_ambos:0, tpv_tc:9306911, tpv_td:6509580, tpn_tc:0, tpn_td:0, maps_tc:5740, maps_td:5634},
  {safra:'202603', base:10533, entregue:8950, ativados:5602, ativos_tc:3241, ativos_td:3176, ativos_fisico:5081, ativos_ambos:0, tpv_tc:3511125, tpv_td:2241038, tpn_tc:0, tpn_td:0, maps_tc:3241, maps_td:3176},
  {safra:'202604', base:3657, entregue:2415, ativados:26, ativos_tc:889, ativos_td:815, ativos_fisico:1363, ativos_ambos:0, tpv_tc:1234273, tpv_td:678781, tpn_tc:0, tpn_td:0, maps_tc:889, maps_td:815},
];

// ── SPENDING ANTES DA RENOVAÇÃO ───────────────────────────────
const SPENDING_ANTES = [
  {safra:'202504', tpv_tc_antes:7238.28, tpv_td_antes:139590.89, tpn_tc_antes:0, tpn_td_antes:0},
  {safra:'202505', tpv_tc_antes:932059.83, tpv_td_antes:1349661.19, tpn_tc_antes:0, tpn_td_antes:0},
  {safra:'202506', tpv_tc_antes:15524037.40, tpv_td_antes:19603234.49, tpn_tc_antes:0, tpn_td_antes:0},
  {safra:'202507', tpv_tc_antes:28872548.68, tpv_td_antes:34847930.56, tpn_tc_antes:0, tpn_td_antes:0},
  {safra:'202508', tpv_tc_antes:28230730.20, tpv_td_antes:35627066.84, tpn_tc_antes:0, tpn_td_antes:0},
  {safra:'202509', tpv_tc_antes:33970215.39, tpv_td_antes:41533288.41, tpn_tc_antes:0, tpn_td_antes:0},
  {safra:'202510', tpv_tc_antes:29830933.95, tpv_td_antes:39241034.53, tpn_tc_antes:0, tpn_td_antes:0},
  {safra:'202511', tpv_tc_antes:44395443.43, tpv_td_antes:53441044.51, tpn_tc_antes:0, tpn_td_antes:0},
  {safra:'202512', tpv_tc_antes:56967172.05, tpv_td_antes:60449175.32, tpn_tc_antes:0, tpn_td_antes:0},
  {safra:'202601', tpv_tc_antes:29432347.99, tpv_td_antes:32353048.57, tpn_tc_antes:0, tpn_td_antes:0},
  {safra:'202602', tpv_tc_antes:17485707.81, tpv_td_antes:15489675.83, tpn_tc_antes:0, tpn_td_antes:0},
  {safra:'202603', tpv_tc_antes:12708467.72, tpv_td_antes:10304208.35, tpn_tc_antes:0, tpn_td_antes:0},
  {safra:'202604', tpv_tc_antes:16507306.20, tpv_td_antes:13856653.50, tpn_tc_antes:0, tpn_td_antes:0},
];

// ── CICLO DE USO POR SAFRA ─────────────────────────────────────
const CICLO_SAFRA = [
  {safra:'202504', c1:12, c2:0, c3:0, c4:0, c5:0, c6:3, c7:0},
  {safra:'202505', c1:307, c2:68, c3:50, c4:36, c5:58, c6:500, c7:125},
  {safra:'202506', c1:4767, c2:972, c3:680, c4:552, c5:844, c6:7298, c7:1859},
  {safra:'202507', c1:8531, c2:1669, c3:1169, c4:957, c5:1411, c6:13874, c7:3476},
  {safra:'202508', c1:8479, c2:1636, c3:1145, c4:948, c5:1459, c6:14023, c7:3523},
  {safra:'202509', c1:10266, c2:1932, c3:1365, c4:1129, c5:1780, c6:16834, c7:4225},
  {safra:'202510', c1:9421, c2:1729, c3:1104, c4:963, c5:2534, c6:12729, c7:4117},
  {safra:'202511', c1:13723, c2:2648, c3:1817, c4:1495, c5:4730, c6:18251, c7:6284},
  {safra:'202512', c1:16446, c2:3173, c3:2102, c4:4155, c5:3811, c6:21120, c7:8255},
  {safra:'202601', c1:8295, c2:1625, c3:2373, c4:1303, c5:1710, c6:10018, c7:4150},
  {safra:'202602', c1:3878, c2:1579, c3:727, c4:562, c5:873, c6:4728, c7:3259},
  {safra:'202603', c1:2831, c2:601, c3:429, c4:373, c5:484, c6:3212, c7:2603},
  {safra:'202604', c1:785, c2:214, c3:170, c4:122, c5:164, c6:1116, c7:1086},
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
  '202512': {'00. CARTAO NAO ENTREGUE': 1569, '01. ATE 2 DIAS': 8637, '02. ATE 5 DIAS': 27157, '03. ATE 7 DIAS': 11274, '04. ATE 10 DIAS': 3732, '05. ACIMA DE 10 DIAS': 2606, '06. NAO RENOVADO': 22722},
  '202601': {'00. CARTAO NAO ENTREGUE': 611, '01. ATE 2 DIAS': 5930, '02. ATE 5 DIAS': 13704, '03. ATE 7 DIAS': 4872, '04. ATE 10 DIAS': 1448, '05. ACIMA DE 10 DIAS': 809, '06. NAO RENOVADO': 10803},
  '202602': {'00. CARTAO NAO ENTREGUE': 349, '01. ATE 2 DIAS': 2915, '02. ATE 5 DIAS': 7301, '03. ATE 7 DIAS': 2530, '04. ATE 10 DIAS': 676, '05. ACIMA DE 10 DIAS': 350, '06. NAO RENOVADO': 6857},
  '202603': {'00. CARTAO NAO ENTREGUE': 745, '01. ATE 2 DIAS': 2266, '02. ATE 5 DIAS': 5018, '03. ATE 7 DIAS': 1657, '04. ATE 10 DIAS': 529, '05. ACIMA DE 10 DIAS': 155, '06. NAO RENOVADO': 5451},
  '202604': {'00. CARTAO NAO ENTREGUE': 1186, '01. ATE 2 DIAS': 685, '02. ATE 5 DIAS': 1337, '03. ATE 7 DIAS': 326, '04. ATE 10 DIAS': 76, '05. ACIMA DE 10 DIAS': 47, '06. NAO RENOVADO': 18760}
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
  '202602': {'1': 635, '10': 69, '11': 49, '12': 33, '13': 24, '14': 12, '15': 12, '16': 14, '17': 14, '18': 15, '19': 9, '2': 2279, '20': 8, '21': 11, '22': 11, '23': 10, '24': 9, '25': 12, '26': 5, '27': 4, '28': 11, '29': 7, '3': 2956, '30': 7, '31': 8, '32': 7, '33': 1, '34': 3, '35': 3, '36': 1, '37': 7, '38': 2, '39': 3, '4': 2164, '40': 3, '42': 7, '44': 4, '45': 1, '47': 2, '48': 1, '49': 1, '5': 2181, '51': 1, '52': 1, '56': 1, '57': 1, '6': 1656, '60': 1, '7': 874, '8': 416, '9': 191},
  '202603': {'0': 1, '1': 480, '10': 57, '11': 23, '12': 13, '13': 11, '14': 5, '15': 13, '16': 11, '17': 7, '18': 10, '19': 8, '2': 1785, '20': 3, '21': 3, '22': 5, '23': 8, '24': 6, '26': 1, '27': 1, '28': 2, '29': 1, '3': 1892, '30': 3, '31': 3, '32': 3, '33': 2, '35': 1, '36': 1, '37': 2, '4': 1635, '40': 1, '41': 2, '44': 1, '5': 1491, '51': 1, '53': 1, '6': 1093, '7': 564, '8': 333, '9': 139},
  '202604': {'1': 44, '10': 13, '11': 10, '12': 5, '13': 4, '14': 2, '15': 3, '16': 1, '17': 3, '18': 1, '2': 641, '21': 2, '22': 3, '23': 3, '24': 1, '28': 3, '3': 707, '34': 1, '37': 1, '4': 344, '44': 1, '45': 1, '47': 1, '5': 286, '53': 1, '6': 241, '7': 85, '8': 38, '9': 25}
};

// ── ENTREGA POR CICLO DE USO ───────────────────────────────────
const ENTREGA_CICLO = {
  '202504': {
    '01. 1 A 30 D': {total:14, entregue:10, faixas:{'00. CARTAO NAO ENTREGUE': 1, '01. ATE 2 DIAS': 1, '02. ATE 5 DIAS': 3, '03. ATE 7 DIAS': 4, '04. ATE 10 DIAS': 2, '06. NAO RENOVADO': 3}},
    '06. ACIMA DE 180 D': {total:4, entregue:3, faixas:{'01. ATE 2 DIAS': 1, '02. ATE 5 DIAS': 1, '03. ATE 7 DIAS': 1, '06. NAO RENOVADO': 1}},
    '07. NAO ATIVO': {total:1, entregue:0, faixas:{'06. NAO RENOVADO': 1}}
  },
  '202505': {
    '01. 1 A 30 D': {total:325, entregue:285, faixas:{'00. CARTAO NAO ENTREGUE': 4, '01. ATE 2 DIAS': 3, '02. ATE 5 DIAS': 96, '03. ATE 7 DIAS': 88, '04. ATE 10 DIAS': 41, '05. ACIMA DE 10 DIAS': 57, '06. NAO RENOVADO': 36}},
    '02. 31 A 60 D': {total:66, entregue:60, faixas:{'00. CARTAO NAO ENTREGUE': 3, '01. ATE 2 DIAS': 1, '02. ATE 5 DIAS': 17, '03. ATE 7 DIAS': 17, '04. ATE 10 DIAS': 12, '05. ACIMA DE 10 DIAS': 13, '06. NAO RENOVADO': 3}},
    '03. 61 A 90 D': {total:51, entregue:37, faixas:{'00. CARTAO NAO ENTREGUE': 7, '02. ATE 5 DIAS': 14, '03. ATE 7 DIAS': 10, '04. ATE 10 DIAS': 3, '05. ACIMA DE 10 DIAS': 10, '06. NAO RENOVADO': 7}},
    '04. 91 A 120 D': {total:38, entregue:33, faixas:{'00. CARTAO NAO ENTREGUE': 2, '01. ATE 2 DIAS': 1, '02. ATE 5 DIAS': 13, '03. ATE 7 DIAS': 6, '04. ATE 10 DIAS': 4, '05. ACIMA DE 10 DIAS': 9, '06. NAO RENOVADO': 3}},
    '05. 121 A 180 D': {total:60, entregue:51, faixas:{'00. CARTAO NAO ENTREGUE': 4, '02. ATE 5 DIAS': 13, '03. ATE 7 DIAS': 15, '04. ATE 10 DIAS': 12, '05. ACIMA DE 10 DIAS': 11, '06. NAO RENOVADO': 5}},
    '06. ACIMA DE 180 D': {total:648, entregue:451, faixas:{'00. CARTAO NAO ENTREGUE': 26, '01. ATE 2 DIAS': 7, '02. ATE 5 DIAS': 152, '03. ATE 7 DIAS': 132, '04. ATE 10 DIAS': 80, '05. ACIMA DE 10 DIAS': 80, '06. NAO RENOVADO': 171}},
    '07. NAO ATIVO': {total:166, entregue:102, faixas:{'00. CARTAO NAO ENTREGUE': 10, '02. ATE 5 DIAS': 29, '03. ATE 7 DIAS': 29, '04. ATE 10 DIAS': 24, '05. ACIMA DE 10 DIAS': 20, '06. NAO RENOVADO': 54}}
  },
  '202506': {
    '01. 1 A 30 D': {total:4843, entregue:4256, faixas:{'00. CARTAO NAO ENTREGUE': 130, '01. ATE 2 DIAS': 153, '02. ATE 5 DIAS': 1687, '03. ATE 7 DIAS': 814, '04. ATE 10 DIAS': 844, '05. ACIMA DE 10 DIAS': 758, '06. NAO RENOVADO': 457}},
    '02. 31 A 60 D': {total:988, entregue:880, faixas:{'00. CARTAO NAO ENTREGUE': 34, '01. ATE 2 DIAS': 29, '02. ATE 5 DIAS': 305, '03. ATE 7 DIAS': 147, '04. ATE 10 DIAS': 200, '05. ACIMA DE 10 DIAS': 199, '06. NAO RENOVADO': 74}},
    '03. 61 A 90 D': {total:713, entregue:619, faixas:{'00. CARTAO NAO ENTREGUE': 30, '01. ATE 2 DIAS': 18, '02. ATE 5 DIAS': 244, '03. ATE 7 DIAS': 111, '04. ATE 10 DIAS': 124, '05. ACIMA DE 10 DIAS': 122, '06. NAO RENOVADO': 64}},
    '04. 91 A 120 D': {total:567, entregue:500, faixas:{'00. CARTAO NAO ENTREGUE': 18, '01. ATE 2 DIAS': 14, '02. ATE 5 DIAS': 201, '03. ATE 7 DIAS': 89, '04. ATE 10 DIAS': 107, '05. ACIMA DE 10 DIAS': 89, '06. NAO RENOVADO': 49}},
    '05. 121 A 180 D': {total:857, entregue:770, faixas:{'00. CARTAO NAO ENTREGUE': 33, '01. ATE 2 DIAS': 22, '02. ATE 5 DIAS': 299, '03. ATE 7 DIAS': 140, '04. ATE 10 DIAS': 158, '05. ACIMA DE 10 DIAS': 151, '06. NAO RENOVADO': 54}},
    '06. ACIMA DE 180 D': {total:9698, entregue:6567, faixas:{'00. CARTAO NAO ENTREGUE': 343, '01. ATE 2 DIAS': 196, '02. ATE 5 DIAS': 2395, '03. ATE 7 DIAS': 1203, '04. ATE 10 DIAS': 1379, '05. ACIMA DE 10 DIAS': 1394, '06. NAO RENOVADO': 2788}},
    '07. NAO ATIVO': {total:2472, entregue:1707, faixas:{'00. CARTAO NAO ENTREGUE': 82, '01. ATE 2 DIAS': 46, '02. ATE 5 DIAS': 605, '03. ATE 7 DIAS': 292, '04. ATE 10 DIAS': 358, '05. ACIMA DE 10 DIAS': 406, '06. NAO RENOVADO': 683}}
  },
  '202507': {
    '01. 1 A 30 D': {total:8512, entregue:7499, faixas:{'00. CARTAO NAO ENTREGUE': 319, '01. ATE 2 DIAS': 193, '02. ATE 5 DIAS': 1960, '03. ATE 7 DIAS': 1349, '04. ATE 10 DIAS': 1563, '05. ACIMA DE 10 DIAS': 2433, '06. NAO RENOVADO': 695}},
    '02. 31 A 60 D': {total:1693, entregue:1495, faixas:{'00. CARTAO NAO ENTREGUE': 76, '01. ATE 2 DIAS': 34, '02. ATE 5 DIAS': 340, '03. ATE 7 DIAS': 275, '04. ATE 10 DIAS': 316, '05. ACIMA DE 10 DIAS': 530, '06. NAO RENOVADO': 122}},
    '03. 61 A 90 D': {total:1174, entregue:1045, faixas:{'00. CARTAO NAO ENTREGUE': 53, '01. ATE 2 DIAS': 18, '02. ATE 5 DIAS': 231, '03. ATE 7 DIAS': 175, '04. ATE 10 DIAS': 221, '05. ACIMA DE 10 DIAS': 400, '06. NAO RENOVADO': 76}},
    '04. 91 A 120 D': {total:985, entregue:866, faixas:{'00. CARTAO NAO ENTREGUE': 44, '01. ATE 2 DIAS': 25, '02. ATE 5 DIAS': 222, '03. ATE 7 DIAS': 139, '04. ATE 10 DIAS': 167, '05. ACIMA DE 10 DIAS': 313, '06. NAO RENOVADO': 75}},
    '05. 121 A 180 D': {total:1420, entregue:1263, faixas:{'00. CARTAO NAO ENTREGUE': 61, '01. ATE 2 DIAS': 25, '02. ATE 5 DIAS': 311, '03. ATE 7 DIAS': 204, '04. ATE 10 DIAS': 274, '05. ACIMA DE 10 DIAS': 449, '06. NAO RENOVADO': 96}},
    '06. ACIMA DE 180 D': {total:19283, entregue:12628, faixas:{'00. CARTAO NAO ENTREGUE': 751, '01. ATE 2 DIAS': 357, '02. ATE 5 DIAS': 3045, '03. ATE 7 DIAS': 2155, '04. ATE 10 DIAS': 2760, '05. ACIMA DE 10 DIAS': 4311, '06. NAO RENOVADO': 5904}},
    '07. NAO ATIVO': {total:4652, entregue:3244, faixas:{'00. CARTAO NAO ENTREGUE': 159, '01. ATE 2 DIAS': 106, '02. ATE 5 DIAS': 700, '03. ATE 7 DIAS': 555, '04. ATE 10 DIAS': 716, '05. ACIMA DE 10 DIAS': 1167, '06. NAO RENOVADO': 1249}}
  },
  '202508': {
    '01. 1 A 30 D': {total:8483, entregue:7221, faixas:{'00. CARTAO NAO ENTREGUE': 372, '01. ATE 2 DIAS': 1049, '02. ATE 5 DIAS': 3198, '03. ATE 7 DIAS': 1289, '04. ATE 10 DIAS': 729, '05. ACIMA DE 10 DIAS': 956, '06. NAO RENOVADO': 890}},
    '02. 31 A 60 D': {total:1691, entregue:1455, faixas:{'00. CARTAO NAO ENTREGUE': 62, '01. ATE 2 DIAS': 181, '02. ATE 5 DIAS': 623, '03. ATE 7 DIAS': 300, '04. ATE 10 DIAS': 147, '05. ACIMA DE 10 DIAS': 204, '06. NAO RENOVADO': 174}},
    '03. 61 A 90 D': {total:1179, entregue:1013, faixas:{'00. CARTAO NAO ENTREGUE': 55, '01. ATE 2 DIAS': 137, '02. ATE 5 DIAS': 424, '03. ATE 7 DIAS': 187, '04. ATE 10 DIAS': 111, '05. ACIMA DE 10 DIAS': 154, '06. NAO RENOVADO': 111}},
    '04. 91 A 120 D': {total:962, entregue:857, faixas:{'00. CARTAO NAO ENTREGUE': 41, '01. ATE 2 DIAS': 114, '02. ATE 5 DIAS': 374, '03. ATE 7 DIAS': 159, '04. ATE 10 DIAS': 80, '05. ACIMA DE 10 DIAS': 130, '06. NAO RENOVADO': 64}},
    '05. 121 A 180 D': {total:1452, entregue:1287, faixas:{'00. CARTAO NAO ENTREGUE': 67, '01. ATE 2 DIAS': 167, '02. ATE 5 DIAS': 559, '03. ATE 7 DIAS': 231, '04. ATE 10 DIAS': 142, '05. ACIMA DE 10 DIAS': 188, '06. NAO RENOVADO': 98}},
    '06. ACIMA DE 180 D': {total:20956, entregue:12595, faixas:{'00. CARTAO NAO ENTREGUE': 923, '01. ATE 2 DIAS': 1552, '02. ATE 5 DIAS': 5210, '03. ATE 7 DIAS': 2338, '04. ATE 10 DIAS': 1413, '05. ACIMA DE 10 DIAS': 2082, '06. NAO RENOVADO': 7438}},
    '07. NAO ATIVO': {total:4930, entregue:3289, faixas:{'00. CARTAO NAO ENTREGUE': 167, '01. ATE 2 DIAS': 407, '02. ATE 5 DIAS': 1322, '03. ATE 7 DIAS': 561, '04. ATE 10 DIAS': 381, '05. ACIMA DE 10 DIAS': 618, '06. NAO RENOVADO': 1474}}
  },
  '202509': {
    '01. 1 A 30 D': {total:10185, entregue:8814, faixas:{'00. CARTAO NAO ENTREGUE': 395, '01. ATE 2 DIAS': 1744, '02. ATE 5 DIAS': 4265, '03. ATE 7 DIAS': 1314, '04. ATE 10 DIAS': 664, '05. ACIMA DE 10 DIAS': 827, '06. NAO RENOVADO': 976}},
    '02. 31 A 60 D': {total:1982, entregue:1736, faixas:{'00. CARTAO NAO ENTREGUE': 64, '01. ATE 2 DIAS': 287, '02. ATE 5 DIAS': 812, '03. ATE 7 DIAS': 307, '04. ATE 10 DIAS': 138, '05. ACIMA DE 10 DIAS': 191, '06. NAO RENOVADO': 183}},
    '03. 61 A 90 D': {total:1384, entregue:1215, faixas:{'00. CARTAO NAO ENTREGUE': 55, '01. ATE 2 DIAS': 219, '02. ATE 5 DIAS': 558, '03. ATE 7 DIAS': 194, '04. ATE 10 DIAS': 103, '05. ACIMA DE 10 DIAS': 141, '06. NAO RENOVADO': 114}},
    '04. 91 A 120 D': {total:1144, entregue:1000, faixas:{'00. CARTAO NAO ENTREGUE': 54, '01. ATE 2 DIAS': 169, '02. ATE 5 DIAS': 439, '03. ATE 7 DIAS': 170, '04. ATE 10 DIAS': 92, '05. ACIMA DE 10 DIAS': 130, '06. NAO RENOVADO': 90}},
    '05. 121 A 180 D': {total:1732, entregue:1590, faixas:{'00. CARTAO NAO ENTREGUE': 50, '01. ATE 2 DIAS': 282, '02. ATE 5 DIAS': 730, '03. ATE 7 DIAS': 276, '04. ATE 10 DIAS': 125, '05. ACIMA DE 10 DIAS': 177, '06. NAO RENOVADO': 92}},
    '06. ACIMA DE 180 D': {total:25898, entregue:15125, faixas:{'00. CARTAO NAO ENTREGUE': 1069, '01. ATE 2 DIAS': 2630, '02. ATE 5 DIAS': 6838, '03. ATE 7 DIAS': 2523, '04. ATE 10 DIAS': 1323, '05. ACIMA DE 10 DIAS': 1810, '06. NAO RENOVADO': 9705}},
    '07. NAO ATIVO': {total:5970, entregue:3902, faixas:{'00. CARTAO NAO ENTREGUE': 208, '01. ATE 2 DIAS': 677, '02. ATE 5 DIAS': 1694, '03. ATE 7 DIAS': 664, '04. ATE 10 DIAS': 327, '05. ACIMA DE 10 DIAS': 539, '06. NAO RENOVADO': 1861}}
  },
  '202510': {
    '01. 1 A 30 D': {total:9555, entregue:8219, faixas:{'00. CARTAO NAO ENTREGUE': 229, '01. ATE 2 DIAS': 2487, '02. ATE 5 DIAS': 3940, '03. ATE 7 DIAS': 996, '04. ATE 10 DIAS': 416, '05. ACIMA DE 10 DIAS': 380, '06. NAO RENOVADO': 1107}},
    '02. 31 A 60 D': {total:1779, entregue:1575, faixas:{'00. CARTAO NAO ENTREGUE': 52, '01. ATE 2 DIAS': 415, '02. ATE 5 DIAS': 760, '03. ATE 7 DIAS': 218, '04. ATE 10 DIAS': 94, '05. ACIMA DE 10 DIAS': 87, '06. NAO RENOVADO': 153}},
    '03. 61 A 90 D': {total:1138, entregue:1001, faixas:{'00. CARTAO NAO ENTREGUE': 31, '01. ATE 2 DIAS': 265, '02. ATE 5 DIAS': 478, '03. ATE 7 DIAS': 141, '04. ATE 10 DIAS': 63, '05. ACIMA DE 10 DIAS': 54, '06. NAO RENOVADO': 106}},
    '04. 91 A 120 D': {total:963, entregue:893, faixas:{'00. CARTAO NAO ENTREGUE': 18, '01. ATE 2 DIAS': 225, '02. ATE 5 DIAS': 443, '03. ATE 7 DIAS': 123, '04. ATE 10 DIAS': 55, '05. ACIMA DE 10 DIAS': 47, '06. NAO RENOVADO': 52}},
    '05. 121 A 180 D': {total:3259, entregue:2242, faixas:{'00. CARTAO NAO ENTREGUE': 130, '01. ATE 2 DIAS': 576, '02. ATE 5 DIAS': 1076, '03. ATE 7 DIAS': 332, '04. ATE 10 DIAS': 129, '05. ACIMA DE 10 DIAS': 128, '06. NAO RENOVADO': 888}},
    '06. ACIMA DE 180 D': {total:20472, entregue:11898, faixas:{'00. CARTAO NAO ENTREGUE': 502, '01. ATE 2 DIAS': 2854, '02. ATE 5 DIAS': 5838, '03. ATE 7 DIAS': 1860, '04. ATE 10 DIAS': 655, '05. ACIMA DE 10 DIAS': 691, '06. NAO RENOVADO': 8072}},
    '07. NAO ATIVO': {total:6037, entregue:3902, faixas:{'00. CARTAO NAO ENTREGUE': 140, '01. ATE 2 DIAS': 936, '02. ATE 5 DIAS': 1937, '03. ATE 7 DIAS': 583, '04. ATE 10 DIAS': 216, '05. ACIMA DE 10 DIAS': 230, '06. NAO RENOVADO': 1995}}
  },
  '202511': {
    '01. 1 A 30 D': {total:13864, entregue:11940, faixas:{'00. CARTAO NAO ENTREGUE': 287, '01. ATE 2 DIAS': 2894, '02. ATE 5 DIAS': 6240, '03. ATE 7 DIAS': 1985, '04. ATE 10 DIAS': 481, '05. ACIMA DE 10 DIAS': 338, '06. NAO RENOVADO': 1639}},
    '02. 31 A 60 D': {total:2722, entregue:2420, faixas:{'00. CARTAO NAO ENTREGUE': 61, '01. ATE 2 DIAS': 500, '02. ATE 5 DIAS': 1261, '03. ATE 7 DIAS': 460, '04. ATE 10 DIAS': 105, '05. ACIMA DE 10 DIAS': 94, '06. NAO RENOVADO': 241}},
    '03. 61 A 90 D': {total:1812, entregue:1645, faixas:{'00. CARTAO NAO ENTREGUE': 43, '01. ATE 2 DIAS': 389, '02. ATE 5 DIAS': 826, '03. ATE 7 DIAS': 286, '04. ATE 10 DIAS': 83, '05. ACIMA DE 10 DIAS': 61, '06. NAO RENOVADO': 124}},
    '04. 91 A 120 D': {total:1462, entregue:1373, faixas:{'00. CARTAO NAO ENTREGUE': 18, '01. ATE 2 DIAS': 298, '02. ATE 5 DIAS': 713, '03. ATE 7 DIAS': 237, '04. ATE 10 DIAS': 77, '05. ACIMA DE 10 DIAS': 48, '06. NAO RENOVADO': 71}},
    '05. 121 A 180 D': {total:6775, entregue:4214, faixas:{'00. CARTAO NAO ENTREGUE': 270, '01. ATE 2 DIAS': 951, '02. ATE 5 DIAS': 2146, '03. ATE 7 DIAS': 774, '04. ATE 10 DIAS': 205, '05. ACIMA DE 10 DIAS': 138, '06. NAO RENOVADO': 2291}},
    '06. ACIMA DE 180 D': {total:29693, entregue:17156, faixas:{'00. CARTAO NAO ENTREGUE': 636, '01. ATE 2 DIAS': 3811, '02. ATE 5 DIAS': 8737, '03. ATE 7 DIAS': 3202, '04. ATE 10 DIAS': 745, '05. ACIMA DE 10 DIAS': 661, '06. NAO RENOVADO': 11901}},
    '07. NAO ATIVO': {total:9201, entregue:6043, faixas:{'00. CARTAO NAO ENTREGUE': 152, '01. ATE 2 DIAS': 1308, '02. ATE 5 DIAS': 3088, '03. ATE 7 DIAS': 1162, '04. ATE 10 DIAS': 278, '05. ACIMA DE 10 DIAS': 207, '06. NAO RENOVADO': 3006}}
  },
  '202512': {
    '01. 1 A 30 D': {total:16363, entregue:14228, faixas:{'00. CARTAO NAO ENTREGUE': 313, '01. ATE 2 DIAS': 2384, '02. ATE 5 DIAS': 7467, '03. ATE 7 DIAS': 2812, '04. ATE 10 DIAS': 908, '05. ACIMA DE 10 DIAS': 656, '06. NAO RENOVADO': 1823}},
    '02. 31 A 60 D': {total:3142, entregue:2852, faixas:{'00. CARTAO NAO ENTREGUE': 51, '01. ATE 2 DIAS': 478, '02. ATE 5 DIAS': 1444, '03. ATE 7 DIAS': 597, '04. ATE 10 DIAS': 187, '05. ACIMA DE 10 DIAS': 146, '06. NAO RENOVADO': 239}},
    '03. 61 A 90 D': {total:2051, entregue:1949, faixas:{'00. CARTAO NAO ENTREGUE': 18, '01. ATE 2 DIAS': 317, '02. ATE 5 DIAS': 1000, '03. ATE 7 DIAS': 424, '04. ATE 10 DIAS': 123, '05. ACIMA DE 10 DIAS': 84, '06. NAO RENOVADO': 85}},
    '04. 91 A 120 D': {total:5638, entregue:3607, faixas:{'00. CARTAO NAO ENTREGUE': 234, '01. ATE 2 DIAS': 525, '02. ATE 5 DIAS': 1857, '03. ATE 7 DIAS': 761, '04. ATE 10 DIAS': 267, '05. ACIMA DE 10 DIAS': 197, '06. NAO RENOVADO': 1797}},
    '05. 121 A 180 D': {total:5234, entregue:3446, faixas:{'00. CARTAO NAO ENTREGUE': 163, '01. ATE 2 DIAS': 573, '02. ATE 5 DIAS': 1793, '03. ATE 7 DIAS': 693, '04. ATE 10 DIAS': 219, '05. ACIMA DE 10 DIAS': 168, '06. NAO RENOVADO': 1625}},
    '06. ACIMA DE 180 D': {total:33320, entregue:19547, faixas:{'00. CARTAO NAO ENTREGUE': 622, '01. ATE 2 DIAS': 3082, '02. ATE 5 DIAS': 9731, '03. ATE 7 DIAS': 4245, '04. ATE 10 DIAS': 1485, '05. ACIMA DE 10 DIAS': 1004, '06. NAO RENOVADO': 13151}},
    '07. NAO ATIVO': {total:11949, entregue:7780, faixas:{'00. CARTAO NAO ENTREGUE': 168, '01. ATE 2 DIAS': 1278, '02. ATE 5 DIAS': 3865, '03. ATE 7 DIAS': 1742, '04. ATE 10 DIAS': 543, '05. ACIMA DE 10 DIAS': 351, '06. NAO RENOVADO': 4002}}
  },
  '202601': {
    '01. 1 A 30 D': {total:8165, entregue:7274, faixas:{'00. CARTAO NAO ENTREGUE': 117, '01. ATE 2 DIAS': 1701, '02. ATE 5 DIAS': 3745, '03. ATE 7 DIAS': 1208, '04. ATE 10 DIAS': 397, '05. ACIMA DE 10 DIAS': 223, '06. NAO RENOVADO': 774}},
    '02. 31 A 60 D': {total:1633, entregue:1513, faixas:{'00. CARTAO NAO ENTREGUE': 14, '01. ATE 2 DIAS': 312, '02. ATE 5 DIAS': 741, '03. ATE 7 DIAS': 317, '04. ATE 10 DIAS': 98, '05. ACIMA DE 10 DIAS': 45, '06. NAO RENOVADO': 106}},
    '03. 61 A 90 D': {total:2915, entregue:2068, faixas:{'00. CARTAO NAO ENTREGUE': 103, '01. ATE 2 DIAS': 488, '02. ATE 5 DIAS': 1011, '03. ATE 7 DIAS': 366, '04. ATE 10 DIAS': 131, '05. ACIMA DE 10 DIAS': 72, '06. NAO RENOVADO': 744}},
    '04. 91 A 120 D': {total:1605, entregue:1184, faixas:{'00. CARTAO NAO ENTREGUE': 41, '01. ATE 2 DIAS': 271, '02. ATE 5 DIAS': 619, '03. ATE 7 DIAS': 197, '04. ATE 10 DIAS': 58, '05. ACIMA DE 10 DIAS': 39, '06. NAO RENOVADO': 380}},
    '05. 121 A 180 D': {total:2436, entregue:1560, faixas:{'00. CARTAO NAO ENTREGUE': 61, '01. ATE 2 DIAS': 316, '02. ATE 5 DIAS': 806, '03. ATE 7 DIAS': 305, '04. ATE 10 DIAS': 88, '05. ACIMA DE 10 DIAS': 45, '06. NAO RENOVADO': 815}},
    '06. ACIMA DE 180 D': {total:15437, entregue:9263, faixas:{'00. CARTAO NAO ENTREGUE': 209, '01. ATE 2 DIAS': 2001, '02. ATE 5 DIAS': 4784, '03. ATE 7 DIAS': 1714, '04. ATE 10 DIAS': 476, '05. ACIMA DE 10 DIAS': 288, '06. NAO RENOVADO': 5965}},
    '07. NAO ATIVO': {total:5986, entregue:3901, faixas:{'00. CARTAO NAO ENTREGUE': 66, '01. ATE 2 DIAS': 841, '02. ATE 5 DIAS': 1998, '03. ATE 7 DIAS': 765, '04. ATE 10 DIAS': 200, '05. ACIMA DE 10 DIAS': 97, '06. NAO RENOVADO': 2019}}
  },
  '202602': {
    '01. 1 A 30 D': {total:3775, entregue:3319, faixas:{'00. CARTAO NAO ENTREGUE': 39, '01. ATE 2 DIAS': 780, '02. ATE 5 DIAS': 1746, '03. ATE 7 DIAS': 558, '04. ATE 10 DIAS': 142, '05. ACIMA DE 10 DIAS': 91, '06. NAO RENOVADO': 419}},
    '02. 31 A 60 D': {total:1945, entregue:1257, faixas:{'00. CARTAO NAO ENTREGUE': 74, '01. ATE 2 DIAS': 273, '02. ATE 5 DIAS': 663, '03. ATE 7 DIAS': 217, '04. ATE 10 DIAS': 66, '05. ACIMA DE 10 DIAS': 38, '06. NAO RENOVADO': 614}},
    '03. 61 A 90 D': {total:936, entregue:647, faixas:{'00. CARTAO NAO ENTREGUE': 24, '01. ATE 2 DIAS': 135, '02. ATE 5 DIAS': 343, '03. ATE 7 DIAS': 114, '04. ATE 10 DIAS': 36, '05. ACIMA DE 10 DIAS': 19, '06. NAO RENOVADO': 265}},
    '04. 91 A 120 D': {total:758, entregue:495, faixas:{'00. CARTAO NAO ENTREGUE': 13, '01. ATE 2 DIAS': 93, '02. ATE 5 DIAS': 253, '03. ATE 7 DIAS': 100, '04. ATE 10 DIAS': 37, '05. ACIMA DE 10 DIAS': 12, '06. NAO RENOVADO': 250}},
    '05. 121 A 180 D': {total:1348, entregue:769, faixas:{'00. CARTAO NAO ENTREGUE': 25, '01. ATE 2 DIAS': 162, '02. ATE 5 DIAS': 397, '03. ATE 7 DIAS': 147, '04. ATE 10 DIAS': 41, '05. ACIMA DE 10 DIAS': 22, '06. NAO RENOVADO': 554}},
    '06. ACIMA DE 180 D': {total:7470, entregue:4244, faixas:{'00. CARTAO NAO ENTREGUE': 106, '01. ATE 2 DIAS': 829, '02. ATE 5 DIAS': 2314, '03. ATE 7 DIAS': 798, '04. ATE 10 DIAS': 201, '05. ACIMA DE 10 DIAS': 102, '06. NAO RENOVADO': 3120}},
    '07. NAO ATIVO': {total:4746, entregue:3043, faixas:{'00. CARTAO NAO ENTREGUE': 68, '01. ATE 2 DIAS': 643, '02. ATE 5 DIAS': 1585, '03. ATE 7 DIAS': 596, '04. ATE 10 DIAS': 153, '05. ACIMA DE 10 DIAS': 66, '06. NAO RENOVADO': 1635}}
  },
  '202603': {
    '01. 1 A 30 D': {total:3498, entregue:2432, faixas:{'00. CARTAO NAO ENTREGUE': 194, '01. ATE 2 DIAS': 593, '02. ATE 5 DIAS': 1371, '03. ATE 7 DIAS': 421, '04. ATE 10 DIAS': 138, '05. ACIMA DE 10 DIAS': 41, '06. NAO RENOVADO': 740}},
    '02. 31 A 60 D': {total:824, entregue:507, faixas:{'00. CARTAO NAO ENTREGUE': 52, '01. ATE 2 DIAS': 122, '02. ATE 5 DIAS': 276, '03. ATE 7 DIAS': 108, '04. ATE 10 DIAS': 23, '05. ACIMA DE 10 DIAS': 12, '06. NAO RENOVADO': 231}},
    '03. 61 A 90 D': {total:619, entregue:364, faixas:{'00. CARTAO NAO ENTREGUE': 32, '01. ATE 2 DIAS': 84, '02. ATE 5 DIAS': 198, '03. ATE 7 DIAS': 71, '04. ATE 10 DIAS': 28, '05. ACIMA DE 10 DIAS': 10, '06. NAO RENOVADO': 196}},
    '04. 91 A 120 D': {total:590, entregue:308, faixas:{'00. CARTAO NAO ENTREGUE': 34, '01. ATE 2 DIAS': 78, '02. ATE 5 DIAS': 175, '03. ATE 7 DIAS': 61, '04. ATE 10 DIAS': 16, '05. ACIMA DE 10 DIAS': 5, '06. NAO RENOVADO': 221}},
    '05. 121 A 180 D': {total:919, entregue:408, faixas:{'00. CARTAO NAO ENTREGUE': 32, '01. ATE 2 DIAS': 90, '02. ATE 5 DIAS': 215, '03. ATE 7 DIAS': 95, '04. ATE 10 DIAS': 35, '05. ACIMA DE 10 DIAS': 3, '06. NAO RENOVADO': 449}},
    '06. ACIMA DE 180 D': {total:5407, entregue:2687, faixas:{'00. CARTAO NAO ENTREGUE': 239, '01. ATE 2 DIAS': 670, '02. ATE 5 DIAS': 1548, '03. ATE 7 DIAS': 493, '04. ATE 10 DIAS': 173, '05. ACIMA DE 10 DIAS': 50, '06. NAO RENOVADO': 2234}},
    '07. NAO ATIVO': {total:3964, entregue:2244, faixas:{'00. CARTAO NAO ENTREGUE': 162, '01. ATE 2 DIAS': 629, '02. ATE 5 DIAS': 1235, '03. ATE 7 DIAS': 408, '04. ATE 10 DIAS': 116, '05. ACIMA DE 10 DIAS': 34, '06. NAO RENOVADO': 1380}}
  },
  '202604': {
    '01. 1 A 30 D': {total:4766, entregue:385, faixas:{'00. CARTAO NAO ENTREGUE': 377, '01. ATE 2 DIAS': 114, '02. ATE 5 DIAS': 215, '03. ATE 7 DIAS': 55, '04. ATE 10 DIAS': 16, '05. ACIMA DE 10 DIAS': 8, '06. NAO RENOVADO': 3981}},
    '02. 31 A 60 D': {total:1153, entregue:128, faixas:{'00. CARTAO NAO ENTREGUE': 84, '01. ATE 2 DIAS': 25, '02. ATE 5 DIAS': 78, '03. ATE 7 DIAS': 17, '04. ATE 10 DIAS': 7, '05. ACIMA DE 10 DIAS': 3, '06. NAO RENOVADO': 939}},
    '03. 61 A 90 D': {total:969, entregue:115, faixas:{'00. CARTAO NAO ENTREGUE': 54, '01. ATE 2 DIAS': 25, '02. ATE 5 DIAS': 74, '03. ATE 7 DIAS': 12, '04. ATE 10 DIAS': 2, '05. ACIMA DE 10 DIAS': 3, '06. NAO RENOVADO': 799}},
    '04. 91 A 120 D': {total:877, entregue:75, faixas:{'00. CARTAO NAO ENTREGUE': 44, '01. ATE 2 DIAS': 21, '02. ATE 5 DIAS': 36, '03. ATE 7 DIAS': 14, '04. ATE 10 DIAS': 3, '05. ACIMA DE 10 DIAS': 4, '06. NAO RENOVADO': 755}},
    '05. 121 A 180 D': {total:1308, entregue:111, faixas:{'00. CARTAO NAO ENTREGUE': 51, '01. ATE 2 DIAS': 25, '02. ATE 5 DIAS': 58, '03. ATE 7 DIAS': 21, '04. ATE 10 DIAS': 6, '05. ACIMA DE 10 DIAS': 3, '06. NAO RENOVADO': 1144}},
    '06. ACIMA DE 180 D': {total:7343, entregue:764, faixas:{'00. CARTAO NAO ENTREGUE': 341, '01. ATE 2 DIAS': 219, '02. ATE 5 DIAS': 423, '03. ATE 7 DIAS': 99, '04. ATE 10 DIAS': 22, '05. ACIMA DE 10 DIAS': 12, '06. NAO RENOVADO': 6227}},
    '07. NAO ATIVO': {total:6001, entregue:837, faixas:{'00. CARTAO NAO ENTREGUE': 235, '01. ATE 2 DIAS': 256, '02. ATE 5 DIAS': 453, '03. ATE 7 DIAS': 108, '04. ATE 10 DIAS': 20, '05. ACIMA DE 10 DIAS': 14, '06. NAO RENOVADO': 4915}}
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
  '202604':123214,
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
  '202604':22417,
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
  '202604':100801,
};

// ── GRUPO 2 — TOTAIS MENSAIS ──────────────────────────────────
const MONTHLY_G2 = [
  {mes:'Mar/25', completo:true, ren:0, rei:0, ent:0, dm:0, tel:3},
  {mes:'Abr/25', completo:true, ren:0, rei:0, ent:0, dm:0, tel:7},
  {mes:'Mai/25', completo:true, ren:155, rei:173, ent:117, dm:0, tel:6180},
  {mes:'Jun/25', completo:true, ren:2922, rei:1859, ent:2167, dm:0, tel:81730},
  {mes:'Jul/25', completo:true, ren:7731, rei:3839, ent:5734, dm:0, tel:193505},
  {mes:'Ago/25', completo:true, ren:7862, rei:4903, ent:5727, dm:0, tel:221905},
  {mes:'Set/25', completo:true, ren:7566, rei:6751, ent:5769, dm:0, tel:295382},
  {mes:'Out/25', completo:true, ren:7576, rei:3569, ent:5759, dm:0, tel:227158},
  {mes:'Nov/25', completo:true, ren:12896, rei:6617, ent:9674, dm:0, tel:350875},
  {mes:'Dez/25', completo:true, ren:14422, rei:7578, ent:10560, dm:0, tel:366068},
  {mes:'Jan/26', completo:true, ren:7602, rei:3548, ent:5048, dm:0, tel:175904},
  {mes:'Fev/26', completo:true, ren:3686, rei:1609, ent:2432, dm:0, tel:82266},
  {mes:'Mar/26', completo:true, ren:3160, rei:195, ent:993, dm:0, tel:65428},
  {mes:'Abr/26*', completo:false, ren:876, rei:0, ent:8, dm:0, tel:100801},
];

// ── BREAKDOWN POR PRODUTO (G1) ────────────────────────────────
const MONTHLY_HIBRIDO  = [
  {mes:'Abr/25', completo:true, ren:14, rei:1},
  {mes:'Mai/25', completo:true, ren:901, rei:44},
  {mes:'Jun/25', completo:true, ren:13864, rei:735},
  {mes:'Jul/25', completo:true, ren:25517, rei:1124},
  {mes:'Ago/25', completo:true, ren:25201, rei:1235},
  {mes:'Set/25', completo:true, ren:30191, rei:1610},
  {mes:'Out/25', completo:true, ren:26279, rei:1123},
  {mes:'Nov/25', completo:true, ren:39814, rei:1752},
  {mes:'Dez/25', completo:true, ren:48251, rei:3090},
  {mes:'Jan/26', completo:true, ren:24016, rei:1634},
  {mes:'Fev/26', completo:true, ren:12780, rei:1217},
  {mes:'Mar/26', completo:true, ren:9462, rei:140},
  {mes:'Abr/26*', completo:false, ren:3434, rei:0},
];
const MONTHLY_DEBITO   = [
  {mes:'Abr/25', completo:true, ren:0, rei:0},
  {mes:'Mai/25', completo:true, ren:174, rei:25},
  {mes:'Jun/25', completo:true, ren:2105, rei:268},
  {mes:'Jul/25', completo:true, ren:3985, rei:461},
  {mes:'Ago/25', completo:true, ren:4203, rei:574},
  {mes:'Set/25', completo:true, ren:5083, rei:647},
  {mes:'Out/25', completo:true, ren:4551, rei:644},
  {mes:'Nov/25', completo:true, ren:6442, rei:940},
  {mes:'Dez/25', completo:true, ren:6724, rei:997},
  {mes:'Jan/26', completo:true, ren:3358, rei:466},
  {mes:'Fev/26', completo:true, ren:1341, rei:268},
  {mes:'Mar/26', completo:true, ren:908, rei:23},
  {mes:'Abr/26*', completo:false, ren:223, rei:0},
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
