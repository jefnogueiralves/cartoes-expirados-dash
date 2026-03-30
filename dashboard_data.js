// ═══════════════════════════════════════════════════════════════
//  dashboard_data.js — gerado automaticamente por update_data.py
//  Última atualização: 30/03/2026
//  Fonte: meli-bi-data.SBOX_CREDITSTC.CARTAO_EXPIRADO_ANL_IA
//         meli-bi-data.SBOX_CREDITSTC.CARTAO_EXPIRADO_CUBO_IA
// ═══════════════════════════════════════════════════════════════

// ── DATA DA ÚLTIMA ATUALIZAÇÃO ────────────────────────────────
const DT_ATUALIZACAO = '30/03/2026';

// ── TOTAIS MENSAIS REAIS (BigQuery) ───────────────────────────
const MONTHLY = [
  {mes:'Abr/25', completo:true, ren:14, rei:1, ent:13, dm:4.90, tel:19},
  {mes:'Mai/25', completo:true, ren:1075, rei:69, ent:923, dm:6.90, tel:1354},
  {mes:'Jun/25', completo:true, ren:15969, rei:1003, ent:13862, dm:6.90, tel:20137},
  {mes:'Jul/25', completo:true, ren:29502, rei:1586, ent:23926, dm:8.20, tel:37719},
  {mes:'Ago/25', completo:true, ren:29404, rei:1811, ent:22860, dm:5.70, tel:39652},
  {mes:'Set/25', completo:true, ren:35274, rei:2260, ent:27088, dm:5.00, tel:48293},
  {mes:'Out/25', completo:true, ren:30830, rei:1769, ent:23438, dm:4.10, tel:43202},
  {mes:'Nov/25', completo:true, ren:46256, rei:2694, ent:34576, dm:4.00, tel:65527},
  {mes:'Dez/25', completo:true, ren:54975, rei:4092, ent:40552, dm:4.50, tel:77697},
  {mes:'Jan/26', completo:true, ren:27374, rei:2102, ent:19631, dm:4.10, tel:38177},
  {mes:'Fev/26', completo:true, ren:14121, rei:1430, ent:9799, dm:4.00, tel:20976},
  {mes:'Mar/26*', completo:false, ren:10021, rei:0, ent:5289, dm:3.90, tel:15975},
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
  {safra:'202506', base:16972, entregue:15299, ativados:13862, ativos_tc:7909, ativos_td:8693, ativos_fisico:11890, ativos_ambos:0, tpv_tc:15512499, tpv_td:16299444, tpn_tc:0, tpn_td:0, maps_tc:7909, maps_td:8693},
  {safra:'202507', base:31088, entregue:28040, ativados:23926, ativos_tc:13386, ativos_td:15080, ativos_fisico:20605, ativos_ambos:0, tpv_tc:27860045, tpv_td:28118791, tpn_tc:0, tpn_td:0, maps_tc:13386, maps_td:15080},
  {safra:'202508', base:31215, entregue:27717, ativados:22860, ativos_tc:12711, ativos_td:14805, ativos_fisico:19986, ativos_ambos:0, tpv_tc:26102260, tpv_td:27988183, tpn_tc:0, tpn_td:0, maps_tc:12711, maps_td:14805},
  {safra:'202509', base:37534, entregue:33382, ativados:27088, ativos_tc:14944, ativos_td:17906, ativos_fisico:23968, ativos_ambos:0, tpv_tc:30986431, tpv_td:32653476, tpn_tc:0, tpn_td:0, maps_tc:14944, maps_td:17906},
  {safra:'202510', base:32599, entregue:29730, ativados:23438, ativos_tc:12980, ativos_td:15559, ativos_fisico:20882, ativos_ambos:0, tpv_tc:27982414, tpv_td:31494815, tpn_tc:0, tpn_td:0, maps_tc:12980, maps_td:15559},
  {safra:'202511', base:48950, entregue:44791, ativados:34576, ativos_tc:19655, ativos_td:22970, ativos_fisico:31115, ativos_ambos:0, tpv_tc:39223815, tpv_td:40750127, tpn_tc:0, tpn_td:0, maps_tc:19655, maps_td:22970},
  {safra:'202512', base:59067, entregue:53409, ativados:40552, ativos_tc:23428, ativos_td:26933, ativos_fisico:36801, ativos_ambos:0, tpv_tc:47620472, tpv_td:46323365, tpn_tc:0, tpn_td:0, maps_tc:23428, maps_td:26933},
  {safra:'202601', base:29476, entregue:26761, ativados:19631, ativos_tc:11205, ativos_td:13042, ativos_fisico:17784, ativos_ambos:0, tpv_tc:21133259, tpv_td:19747786, tpn_tc:0, tpn_td:0, maps_tc:11205, maps_td:13042},
  {safra:'202602', base:15551, entregue:13772, ativados:9799, ativos_tc:5687, ativos_td:5584, ativos_fisico:8501, ativos_ambos:0, tpv_tc:8945448, tpv_td:6206118, tpn_tc:0, tpn_td:0, maps_tc:5687, maps_td:5584},
  {safra:'202603', base:10021, entregue:8725, ativados:5289, ativos_tc:3083, ativos_td:3068, ativos_fisico:4889, ativos_ambos:0, tpv_tc:3251946, tpv_td:2064547, tpn_tc:0, tpn_td:0, maps_tc:3083, maps_td:3068},
];

// ── SPENDING ANTES DA RENOVAÇÃO ───────────────────────────────
const SPENDING_ANTES = [
  {safra:'202504', tpv_tc_antes:7238.28, tpv_td_antes:139590.89, tpn_tc_antes:0, tpn_td_antes:0},
  {safra:'202505', tpv_tc_antes:932059.83, tpv_td_antes:1349661.19, tpn_tc_antes:0, tpn_td_antes:0},
  {safra:'202506', tpv_tc_antes:15523887.06, tpv_td_antes:19603234.49, tpn_tc_antes:0, tpn_td_antes:0},
  {safra:'202507', tpv_tc_antes:28872368.56, tpv_td_antes:34847930.56, tpn_tc_antes:0, tpn_td_antes:0},
  {safra:'202508', tpv_tc_antes:28229985.03, tpv_td_antes:35627066.84, tpn_tc_antes:0, tpn_td_antes:0},
  {safra:'202509', tpv_tc_antes:33968883.84, tpv_td_antes:41532838.64, tpn_tc_antes:0, tpn_td_antes:0},
  {safra:'202510', tpv_tc_antes:29830450.75, tpv_td_antes:39241034.53, tpn_tc_antes:0, tpn_td_antes:0},
  {safra:'202511', tpv_tc_antes:44394127.87, tpv_td_antes:53441044.51, tpn_tc_antes:0, tpn_td_antes:0},
  {safra:'202512', tpv_tc_antes:56966367.85, tpv_td_antes:60449175.32, tpn_tc_antes:0, tpn_td_antes:0},
  {safra:'202601', tpv_tc_antes:29432347.99, tpv_td_antes:32353048.57, tpn_tc_antes:0, tpn_td_antes:0},
  {safra:'202602', tpv_tc_antes:17485707.81, tpv_td_antes:15489675.83, tpn_tc_antes:0, tpn_td_antes:0},
  {safra:'202603', tpv_tc_antes:12708467.72, tpv_td_antes:10528008.09, tpn_tc_antes:0, tpn_td_antes:0},
];

// ── CICLO DE USO POR SAFRA ─────────────────────────────────────
const CICLO_SAFRA = [
  {safra:'202504', c1:12, c2:0, c3:0, c4:0, c5:0, c6:3, c7:0},
  {safra:'202505', c1:307, c2:70, c3:47, c4:33, c5:61, c6:500, c7:126},
  {safra:'202506', c1:4778, c2:990, c3:682, c4:545, c5:838, c6:7277, c7:1862},
  {safra:'202507', c1:8564, c2:1686, c3:1158, c4:938, c5:1408, c6:13858, c7:3476},
  {safra:'202508', c1:8512, c2:1639, c3:1156, c4:930, c5:1466, c6:13987, c7:3525},
  {safra:'202509', c1:10324, c2:1921, c3:1364, c4:1118, c5:1952, c6:16630, c7:4225},
  {safra:'202510', c1:9430, c2:1733, c3:1125, c4:961, c5:2611, c6:12619, c7:4120},
  {safra:'202511', c1:13723, c2:2714, c3:1815, c4:1737, c5:4505, c6:18163, c7:6293},
  {safra:'202512', c1:16469, c2:3184, c3:2712, c4:3668, c5:3740, c6:21031, c7:8263},
  {safra:'202601', c1:8324, c2:1911, c3:2166, c4:1258, c5:1688, c6:9977, c7:4152},
  {safra:'202602', c1:3965, c2:1530, c3:688, c4:553, c5:867, c6:4690, c7:3258},
  {safra:'202603', c1:2699, c2:561, c3:417, c4:347, c5:450, c6:3071, c7:2476},
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
  '202512': {'00. CARTAO NAO ENTREGUE': 1569, '01. ATE 2 DIAS': 8637, '02. ATE 5 DIAS': 27157, '03. ATE 7 DIAS': 11274, '04. ATE 10 DIAS': 3732, '05. ACIMA DE 10 DIAS': 2606, '06. NAO RENOVADO': 22722},
  '202601': {'00. CARTAO NAO ENTREGUE': 613, '01. ATE 2 DIAS': 5930, '02. ATE 5 DIAS': 13704, '03. ATE 7 DIAS': 4872, '04. ATE 10 DIAS': 1448, '05. ACIMA DE 10 DIAS': 807, '06. NAO RENOVADO': 10803},
  '202602': {'00. CARTAO NAO ENTREGUE': 351, '01. ATE 2 DIAS': 2915, '02. ATE 5 DIAS': 7301, '03. ATE 7 DIAS': 2530, '04. ATE 10 DIAS': 676, '05. ACIMA DE 10 DIAS': 348, '06. NAO RENOVADO': 6857},
  '202603': {'00. CARTAO NAO ENTREGUE': 683, '01. ATE 2 DIAS': 2222, '02. ATE 5 DIAS': 4840, '03. ATE 7 DIAS': 1618, '04. ATE 10 DIAS': 523, '05. ACIMA DE 10 DIAS': 135, '06. NAO RENOVADO': 5954}
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
  '202602': {'1': 635, '10': 69, '11': 49, '12': 33, '13': 24, '14': 12, '15': 12, '16': 14, '17': 14, '18': 15, '19': 9, '2': 2279, '20': 8, '21': 11, '22': 11, '23': 10, '24': 9, '25': 12, '26': 6, '27': 4, '28': 11, '29': 7, '3': 2956, '30': 7, '31': 8, '32': 7, '33': 1, '34': 2, '35': 3, '36': 1, '37': 6, '38': 2, '39': 3, '4': 2164, '40': 3, '42': 7, '44': 4, '45': 1, '47': 2, '48': 1, '49': 1, '5': 2181, '51': 1, '52': 1, '57': 1, '6': 1656, '60': 1, '7': 874, '8': 416, '9': 191},
  '202603': {'0': 1, '1': 458, '10': 54, '11': 21, '12': 13, '13': 10, '14': 6, '15': 8, '16': 10, '17': 5, '18': 10, '19': 7, '2': 1763, '20': 2, '21': 3, '22': 3, '23': 5, '24': 5, '26': 1, '27': 1, '28': 2, '29': 1, '3': 1868, '30': 1, '31': 3, '32': 3, '33': 2, '35': 1, '36': 1, '37': 2, '4': 1564, '40': 1, '41': 2, '44': 1, '5': 1408, '51': 1, '53': 1, '6': 1061, '7': 557, '8': 330, '9': 139}
};

// ── ENTREGA POR CICLO DE USO ───────────────────────────────────
const ENTREGA_CICLO = {
  '202504': {
    '01. 1 A 30 D': {total:14, entregue:10, faixas:{'00. CARTAO NAO ENTREGUE': 1, '01. ATE 2 DIAS': 1, '02. ATE 5 DIAS': 3, '03. ATE 7 DIAS': 4, '04. ATE 10 DIAS': 2, '06. NAO RENOVADO': 3}},
    '06. ACIMA DE 180 D': {total:4, entregue:3, faixas:{'01. ATE 2 DIAS': 1, '02. ATE 5 DIAS': 1, '03. ATE 7 DIAS': 1, '06. NAO RENOVADO': 1}},
    '07. NAO ATIVO': {total:1, entregue:0, faixas:{'06. NAO RENOVADO': 1}}
  },
  '202505': {
    '01. 1 A 30 D': {total:326, entregue:282, faixas:{'00. CARTAO NAO ENTREGUE': 6, '01. ATE 2 DIAS': 3, '02. ATE 5 DIAS': 95, '03. ATE 7 DIAS': 89, '04. ATE 10 DIAS': 39, '05. ACIMA DE 10 DIAS': 56, '06. NAO RENOVADO': 38}},
    '02. 31 A 60 D': {total:66, entregue:62, faixas:{'00. CARTAO NAO ENTREGUE': 2, '01. ATE 2 DIAS': 1, '02. ATE 5 DIAS': 20, '03. ATE 7 DIAS': 18, '04. ATE 10 DIAS': 10, '05. ACIMA DE 10 DIAS': 13, '06. NAO RENOVADO': 2}},
    '03. 61 A 90 D': {total:50, entregue:36, faixas:{'00. CARTAO NAO ENTREGUE': 7, '01. ATE 2 DIAS': 1, '02. ATE 5 DIAS': 13, '03. ATE 7 DIAS': 8, '04. ATE 10 DIAS': 4, '05. ACIMA DE 10 DIAS': 10, '06. NAO RENOVADO': 7}},
    '04. 91 A 120 D': {total:34, entregue:31, faixas:{'00. CARTAO NAO ENTREGUE': 1, '02. ATE 5 DIAS': 11, '03. ATE 7 DIAS': 5, '04. ATE 10 DIAS': 7, '05. ACIMA DE 10 DIAS': 8, '06. NAO RENOVADO': 2}},
    '05. 121 A 180 D': {total:63, entregue:54, faixas:{'00. CARTAO NAO ENTREGUE': 4, '02. ATE 5 DIAS': 15, '03. ATE 7 DIAS': 15, '04. ATE 10 DIAS': 11, '05. ACIMA DE 10 DIAS': 13, '06. NAO RENOVADO': 5}},
    '06. ACIMA DE 180 D': {total:648, entregue:451, faixas:{'00. CARTAO NAO ENTREGUE': 26, '01. ATE 2 DIAS': 7, '02. ATE 5 DIAS': 151, '03. ATE 7 DIAS': 133, '04. ATE 10 DIAS': 81, '05. ACIMA DE 10 DIAS': 79, '06. NAO RENOVADO': 171}},
    '07. NAO ATIVO': {total:167, entregue:103, faixas:{'00. CARTAO NAO ENTREGUE': 10, '02. ATE 5 DIAS': 29, '03. ATE 7 DIAS': 29, '04. ATE 10 DIAS': 24, '05. ACIMA DE 10 DIAS': 21, '06. NAO RENOVADO': 54}}
  },
  '202506': {
    '01. 1 A 30 D': {total:4853, entregue:4255, faixas:{'00. CARTAO NAO ENTREGUE': 137, '01. ATE 2 DIAS': 151, '02. ATE 5 DIAS': 1679, '03. ATE 7 DIAS': 816, '04. ATE 10 DIAS': 847, '05. ACIMA DE 10 DIAS': 762, '06. NAO RENOVADO': 461}},
    '02. 31 A 60 D': {total:1006, entregue:906, faixas:{'00. CARTAO NAO ENTREGUE': 29, '01. ATE 2 DIAS': 32, '02. ATE 5 DIAS': 316, '03. ATE 7 DIAS': 159, '04. ATE 10 DIAS': 211, '05. ACIMA DE 10 DIAS': 188, '06. NAO RENOVADO': 71}},
    '03. 61 A 90 D': {total:712, entregue:622, faixas:{'00. CARTAO NAO ENTREGUE': 30, '01. ATE 2 DIAS': 20, '02. ATE 5 DIAS': 247, '03. ATE 7 DIAS': 105, '04. ATE 10 DIAS': 121, '05. ACIMA DE 10 DIAS': 129, '06. NAO RENOVADO': 60}},
    '04. 91 A 120 D': {total:564, entregue:494, faixas:{'00. CARTAO NAO ENTREGUE': 17, '01. ATE 2 DIAS': 14, '02. ATE 5 DIAS': 204, '03. ATE 7 DIAS': 87, '04. ATE 10 DIAS': 101, '05. ACIMA DE 10 DIAS': 88, '06. NAO RENOVADO': 53}},
    '05. 121 A 180 D': {total:852, entregue:765, faixas:{'00. CARTAO NAO ENTREGUE': 33, '01. ATE 2 DIAS': 20, '02. ATE 5 DIAS': 295, '03. ATE 7 DIAS': 140, '04. ATE 10 DIAS': 156, '05. ACIMA DE 10 DIAS': 154, '06. NAO RENOVADO': 54}},
    '06. ACIMA DE 180 D': {total:9675, entregue:6547, faixas:{'00. CARTAO NAO ENTREGUE': 342, '01. ATE 2 DIAS': 195, '02. ATE 5 DIAS': 2390, '03. ATE 7 DIAS': 1197, '04. ATE 10 DIAS': 1374, '05. ACIMA DE 10 DIAS': 1391, '06. NAO RENOVADO': 2786}},
    '07. NAO ATIVO': {total:2476, entregue:1710, faixas:{'00. CARTAO NAO ENTREGUE': 82, '01. ATE 2 DIAS': 46, '02. ATE 5 DIAS': 605, '03. ATE 7 DIAS': 292, '04. ATE 10 DIAS': 359, '05. ACIMA DE 10 DIAS': 408, '06. NAO RENOVADO': 684}}
  },
  '202507': {
    '01. 1 A 30 D': {total:8539, entregue:7524, faixas:{'00. CARTAO NAO ENTREGUE': 323, '01. ATE 2 DIAS': 192, '02. ATE 5 DIAS': 1965, '03. ATE 7 DIAS': 1352, '04. ATE 10 DIAS': 1571, '05. ACIMA DE 10 DIAS': 2443, '06. NAO RENOVADO': 693}},
    '02. 31 A 60 D': {total:1706, entregue:1511, faixas:{'00. CARTAO NAO ENTREGUE': 72, '01. ATE 2 DIAS': 35, '02. ATE 5 DIAS': 346, '03. ATE 7 DIAS': 277, '04. ATE 10 DIAS': 313, '05. ACIMA DE 10 DIAS': 540, '06. NAO RENOVADO': 123}},
    '03. 61 A 90 D': {total:1174, entregue:1041, faixas:{'00. CARTAO NAO ENTREGUE': 52, '01. ATE 2 DIAS': 17, '02. ATE 5 DIAS': 238, '03. ATE 7 DIAS': 172, '04. ATE 10 DIAS': 223, '05. ACIMA DE 10 DIAS': 391, '06. NAO RENOVADO': 81}},
    '04. 91 A 120 D': {total:963, entregue:845, faixas:{'00. CARTAO NAO ENTREGUE': 45, '01. ATE 2 DIAS': 25, '02. ATE 5 DIAS': 221, '03. ATE 7 DIAS': 134, '04. ATE 10 DIAS': 164, '05. ACIMA DE 10 DIAS': 301, '06. NAO RENOVADO': 73}},
    '05. 121 A 180 D': {total:1417, entregue:1264, faixas:{'00. CARTAO NAO ENTREGUE': 59, '01. ATE 2 DIAS': 24, '02. ATE 5 DIAS': 302, '03. ATE 7 DIAS': 204, '04. ATE 10 DIAS': 273, '05. ACIMA DE 10 DIAS': 461, '06. NAO RENOVADO': 94}},
    '06. ACIMA DE 180 D': {total:19268, entregue:12611, faixas:{'00. CARTAO NAO ENTREGUE': 753, '01. ATE 2 DIAS': 359, '02. ATE 5 DIAS': 3037, '03. ATE 7 DIAS': 2158, '04. ATE 10 DIAS': 2757, '05. ACIMA DE 10 DIAS': 4300, '06. NAO RENOVADO': 5904}},
    '07. NAO ATIVO': {total:4652, entregue:3244, faixas:{'00. CARTAO NAO ENTREGUE': 159, '01. ATE 2 DIAS': 106, '02. ATE 5 DIAS': 700, '03. ATE 7 DIAS': 555, '04. ATE 10 DIAS': 716, '05. ACIMA DE 10 DIAS': 1167, '06. NAO RENOVADO': 1249}}
  },
  '202508': {
    '01. 1 A 30 D': {total:8520, entregue:7262, faixas:{'00. CARTAO NAO ENTREGUE': 363, '01. ATE 2 DIAS': 1040, '02. ATE 5 DIAS': 3232, '03. ATE 7 DIAS': 1310, '04. ATE 10 DIAS': 730, '05. ACIMA DE 10 DIAS': 950, '06. NAO RENOVADO': 895}},
    '02. 31 A 60 D': {total:1691, entregue:1449, faixas:{'00. CARTAO NAO ENTREGUE': 71, '01. ATE 2 DIAS': 201, '02. ATE 5 DIAS': 603, '03. ATE 7 DIAS': 290, '04. ATE 10 DIAS': 145, '05. ACIMA DE 10 DIAS': 210, '06. NAO RENOVADO': 171}},
    '03. 61 A 90 D': {total:1179, entregue:1029, faixas:{'00. CARTAO NAO ENTREGUE': 50, '01. ATE 2 DIAS': 128, '02. ATE 5 DIAS': 433, '03. ATE 7 DIAS': 190, '04. ATE 10 DIAS': 117, '05. ACIMA DE 10 DIAS': 161, '06. NAO RENOVADO': 100}},
    '04. 91 A 120 D': {total:940, entregue:832, faixas:{'00. CARTAO NAO ENTREGUE': 48, '01. ATE 2 DIAS': 108, '02. ATE 5 DIAS': 374, '03. ATE 7 DIAS': 150, '04. ATE 10 DIAS': 79, '05. ACIMA DE 10 DIAS': 121, '06. NAO RENOVADO': 60}},
    '05. 121 A 180 D': {total:1461, entregue:1297, faixas:{'00. CARTAO NAO ENTREGUE': 63, '01. ATE 2 DIAS': 173, '02. ATE 5 DIAS': 558, '03. ATE 7 DIAS': 233, '04. ATE 10 DIAS': 142, '05. ACIMA DE 10 DIAS': 191, '06. NAO RENOVADO': 101}},
    '06. ACIMA DE 180 D': {total:20929, entregue:12557, faixas:{'00. CARTAO NAO ENTREGUE': 925, '01. ATE 2 DIAS': 1549, '02. ATE 5 DIAS': 5188, '03. ATE 7 DIAS': 2331, '04. ATE 10 DIAS': 1409, '05. ACIMA DE 10 DIAS': 2080, '06. NAO RENOVADO': 7447}},
    '07. NAO ATIVO': {total:4933, entregue:3291, faixas:{'00. CARTAO NAO ENTREGUE': 167, '01. ATE 2 DIAS': 408, '02. ATE 5 DIAS': 1322, '03. ATE 7 DIAS': 561, '04. ATE 10 DIAS': 381, '05. ACIMA DE 10 DIAS': 619, '06. NAO RENOVADO': 1475}}
  },
  '202509': {
    '01. 1 A 30 D': {total:10238, entregue:8860, faixas:{'00. CARTAO NAO ENTREGUE': 399, '01. ATE 2 DIAS': 1754, '02. ATE 5 DIAS': 4267, '03. ATE 7 DIAS': 1334, '04. ATE 10 DIAS': 671, '05. ACIMA DE 10 DIAS': 834, '06. NAO RENOVADO': 979}},
    '02. 31 A 60 D': {total:1971, entregue:1725, faixas:{'00. CARTAO NAO ENTREGUE': 64, '01. ATE 2 DIAS': 288, '02. ATE 5 DIAS': 801, '03. ATE 7 DIAS': 299, '04. ATE 10 DIAS': 141, '05. ACIMA DE 10 DIAS': 195, '06. NAO RENOVADO': 183}},
    '03. 61 A 90 D': {total:1379, entregue:1215, faixas:{'00. CARTAO NAO ENTREGUE': 53, '01. ATE 2 DIAS': 216, '02. ATE 5 DIAS': 574, '03. ATE 7 DIAS': 191, '04. ATE 10 DIAS': 100, '05. ACIMA DE 10 DIAS': 134, '06. NAO RENOVADO': 111}},
    '04. 91 A 120 D': {total:1130, entregue:992, faixas:{'00. CARTAO NAO ENTREGUE': 54, '01. ATE 2 DIAS': 169, '02. ATE 5 DIAS': 431, '03. ATE 7 DIAS': 176, '04. ATE 10 DIAS': 86, '05. ACIMA DE 10 DIAS': 130, '06. NAO RENOVADO': 84}},
    '05. 121 A 180 D': {total:1980, entregue:1705, faixas:{'00. CARTAO NAO ENTREGUE': 89, '01. ATE 2 DIAS': 279, '02. ATE 5 DIAS': 807, '03. ATE 7 DIAS': 284, '04. ATE 10 DIAS': 138, '05. ACIMA DE 10 DIAS': 196, '06. NAO RENOVADO': 187}},
    '06. ACIMA DE 180 D': {total:25625, entregue:14983, faixas:{'00. CARTAO NAO ENTREGUE': 1028, '01. ATE 2 DIAS': 2625, '02. ATE 5 DIAS': 6762, '03. ATE 7 DIAS': 2500, '04. ATE 10 DIAS': 1309, '05. ACIMA DE 10 DIAS': 1787, '06. NAO RENOVADO': 9614}},
    '07. NAO ATIVO': {total:5971, entregue:3902, faixas:{'00. CARTAO NAO ENTREGUE': 208, '01. ATE 2 DIAS': 677, '02. ATE 5 DIAS': 1694, '03. ATE 7 DIAS': 664, '04. ATE 10 DIAS': 327, '05. ACIMA DE 10 DIAS': 539, '06. NAO RENOVADO': 1862}}
  },
  '202510': {
    '01. 1 A 30 D': {total:9562, entregue:8227, faixas:{'00. CARTAO NAO ENTREGUE': 227, '01. ATE 2 DIAS': 2474, '02. ATE 5 DIAS': 3947, '03. ATE 7 DIAS': 1003, '04. ATE 10 DIAS': 423, '05. ACIMA DE 10 DIAS': 380, '06. NAO RENOVADO': 1108}},
    '02. 31 A 60 D': {total:1780, entregue:1581, faixas:{'00. CARTAO NAO ENTREGUE': 53, '01. ATE 2 DIAS': 418, '02. ATE 5 DIAS': 762, '03. ATE 7 DIAS': 217, '04. ATE 10 DIAS': 93, '05. ACIMA DE 10 DIAS': 90, '06. NAO RENOVADO': 147}},
    '03. 61 A 90 D': {total:1151, entregue:1023, faixas:{'00. CARTAO NAO ENTREGUE': 28, '01. ATE 2 DIAS': 286, '02. ATE 5 DIAS': 481, '03. ATE 7 DIAS': 144, '04. ATE 10 DIAS': 62, '05. ACIMA DE 10 DIAS': 50, '06. NAO RENOVADO': 100}},
    '04. 91 A 120 D': {total:959, entregue:887, faixas:{'00. CARTAO NAO ENTREGUE': 21, '01. ATE 2 DIAS': 216, '02. ATE 5 DIAS': 448, '03. ATE 7 DIAS': 118, '04. ATE 10 DIAS': 56, '05. ACIMA DE 10 DIAS': 49, '06. NAO RENOVADO': 51}},
    '05. 121 A 180 D': {total:3387, entregue:2310, faixas:{'00. CARTAO NAO ENTREGUE': 139, '01. ATE 2 DIAS': 585, '02. ATE 5 DIAS': 1109, '03. ATE 7 DIAS': 351, '04. ATE 10 DIAS': 132, '05. ACIMA DE 10 DIAS': 132, '06. NAO RENOVADO': 939}},
    '06. ACIMA DE 180 D': {total:20324, entregue:11797, faixas:{'00. CARTAO NAO ENTREGUE': 494, '01. ATE 2 DIAS': 2843, '02. ATE 5 DIAS': 5785, '03. ATE 7 DIAS': 1837, '04. ATE 10 DIAS': 646, '05. ACIMA DE 10 DIAS': 686, '06. NAO RENOVADO': 8033}},
    '07. NAO ATIVO': {total:6040, entregue:3905, faixas:{'00. CARTAO NAO ENTREGUE': 140, '01. ATE 2 DIAS': 936, '02. ATE 5 DIAS': 1940, '03. ATE 7 DIAS': 583, '04. ATE 10 DIAS': 216, '05. ACIMA DE 10 DIAS': 230, '06. NAO RENOVADO': 1995}}
  },
  '202511': {
    '01. 1 A 30 D': {total:13859, entregue:11945, faixas:{'00. CARTAO NAO ENTREGUE': 286, '01. ATE 2 DIAS': 2894, '02. ATE 5 DIAS': 6238, '03. ATE 7 DIAS': 2006, '04. ATE 10 DIAS': 469, '05. ACIMA DE 10 DIAS': 336, '06. NAO RENOVADO': 1630}},
    '02. 31 A 60 D': {total:2770, entregue:2470, faixas:{'00. CARTAO NAO ENTREGUE': 65, '01. ATE 2 DIAS': 503, '02. ATE 5 DIAS': 1297, '03. ATE 7 DIAS': 453, '04. ATE 10 DIAS': 120, '05. ACIMA DE 10 DIAS': 97, '06. NAO RENOVADO': 235}},
    '03. 61 A 90 D': {total:1807, entregue:1643, faixas:{'00. CARTAO NAO ENTREGUE': 41, '01. ATE 2 DIAS': 400, '02. ATE 5 DIAS': 804, '03. ATE 7 DIAS': 285, '04. ATE 10 DIAS': 89, '05. ACIMA DE 10 DIAS': 65, '06. NAO RENOVADO': 123}},
    '04. 91 A 120 D': {total:1970, entregue:1553, faixas:{'00. CARTAO NAO ENTREGUE': 47, '01. ATE 2 DIAS': 337, '02. ATE 5 DIAS': 820, '03. ATE 7 DIAS': 262, '04. ATE 10 DIAS': 78, '05. ACIMA DE 10 DIAS': 56, '06. NAO RENOVADO': 370}},
    '05. 121 A 180 D': {total:6368, entregue:4050, faixas:{'00. CARTAO NAO ENTREGUE': 247, '01. ATE 2 DIAS': 912, '02. ATE 5 DIAS': 2057, '03. ATE 7 DIAS': 753, '04. ATE 10 DIAS': 201, '05. ACIMA DE 10 DIAS': 127, '06. NAO RENOVADO': 2071}},
    '06. ACIMA DE 180 D': {total:29546, entregue:17079, faixas:{'00. CARTAO NAO ENTREGUE': 629, '01. ATE 2 DIAS': 3796, '02. ATE 5 DIAS': 8701, '03. ATE 7 DIAS': 3184, '04. ATE 10 DIAS': 739, '05. ACIMA DE 10 DIAS': 659, '06. NAO RENOVADO': 11838}},
    '07. NAO ATIVO': {total:9209, entregue:6051, faixas:{'00. CARTAO NAO ENTREGUE': 152, '01. ATE 2 DIAS': 1309, '02. ATE 5 DIAS': 3094, '03. ATE 7 DIAS': 1163, '04. ATE 10 DIAS': 278, '05. ACIMA DE 10 DIAS': 207, '06. NAO RENOVADO': 3006}}
  },
  '202512': {
    '01. 1 A 30 D': {total:16368, entregue:14259, faixas:{'00. CARTAO NAO ENTREGUE': 308, '01. ATE 2 DIAS': 2399, '02. ATE 5 DIAS': 7478, '03. ATE 7 DIAS': 2801, '04. ATE 10 DIAS': 917, '05. ACIMA DE 10 DIAS': 663, '06. NAO RENOVADO': 1802}},
    '02. 31 A 60 D': {total:3140, entregue:2862, faixas:{'00. CARTAO NAO ENTREGUE': 48, '01. ATE 2 DIAS': 482, '02. ATE 5 DIAS': 1462, '03. ATE 7 DIAS': 604, '04. ATE 10 DIAS': 177, '05. ACIMA DE 10 DIAS': 137, '06. NAO RENOVADO': 230}},
    '03. 61 A 90 D': {total:3115, entregue:2394, faixas:{'00. CARTAO NAO ENTREGUE': 89, '01. ATE 2 DIAS': 363, '02. ATE 5 DIAS': 1170, '03. ATE 7 DIAS': 554, '04. ATE 10 DIAS': 174, '05. ACIMA DE 10 DIAS': 132, '06. NAO RENOVADO': 633}},
    '04. 91 A 120 D': {total:4786, entregue:3252, faixas:{'00. CARTAO NAO ENTREGUE': 187, '01. ATE 2 DIAS': 494, '02. ATE 5 DIAS': 1723, '03. ATE 7 DIAS': 648, '04. ATE 10 DIAS': 229, '05. ACIMA DE 10 DIAS': 158, '06. NAO RENOVADO': 1347}},
    '05. 121 A 180 D': {total:5178, entregue:3394, faixas:{'00. CARTAO NAO ENTREGUE': 150, '01. ATE 2 DIAS': 558, '02. ATE 5 DIAS': 1770, '03. ATE 7 DIAS': 687, '04. ATE 10 DIAS': 213, '05. ACIMA DE 10 DIAS': 166, '06. NAO RENOVADO': 1634}},
    '06. ACIMA DE 180 D': {total:33156, entregue:19463, faixas:{'00. CARTAO NAO ENTREGUE': 619, '01. ATE 2 DIAS': 3063, '02. ATE 5 DIAS': 9686, '03. ATE 7 DIAS': 4237, '04. ATE 10 DIAS': 1479, '05. ACIMA DE 10 DIAS': 998, '06. NAO RENOVADO': 13074}},
    '07. NAO ATIVO': {total:11954, entregue:7785, faixas:{'00. CARTAO NAO ENTREGUE': 168, '01. ATE 2 DIAS': 1278, '02. ATE 5 DIAS': 3868, '03. ATE 7 DIAS': 1743, '04. ATE 10 DIAS': 543, '05. ACIMA DE 10 DIAS': 352, '06. NAO RENOVADO': 4002}}
  },
  '202601': {
    '01. 1 A 30 D': {total:8180, entregue:7315, faixas:{'00. CARTAO NAO ENTREGUE': 111, '01. ATE 2 DIAS': 1712, '02. ATE 5 DIAS': 3750, '03. ATE 7 DIAS': 1228, '04. ATE 10 DIAS': 403, '05. ACIMA DE 10 DIAS': 222, '06. NAO RENOVADO': 754}},
    '02. 31 A 60 D': {total:2063, entregue:1724, faixas:{'00. CARTAO NAO ENTREGUE': 45, '01. ATE 2 DIAS': 368, '02. ATE 5 DIAS': 853, '03. ATE 7 DIAS': 337, '04. ATE 10 DIAS': 106, '05. ACIMA DE 10 DIAS': 60, '06. NAO RENOVADO': 294}},
    '03. 61 A 90 D': {total:2613, entregue:1924, faixas:{'00. CARTAO NAO ENTREGUE': 83, '01. ATE 2 DIAS': 446, '02. ATE 5 DIAS': 962, '03. ATE 7 DIAS': 337, '04. ATE 10 DIAS': 122, '05. ACIMA DE 10 DIAS': 57, '06. NAO RENOVADO': 606}},
    '04. 91 A 120 D': {total:1548, entregue:1135, faixas:{'00. CARTAO NAO ENTREGUE': 38, '01. ATE 2 DIAS': 259, '02. ATE 5 DIAS': 582, '03. ATE 7 DIAS': 194, '04. ATE 10 DIAS': 58, '05. ACIMA DE 10 DIAS': 42, '06. NAO RENOVADO': 375}},
    '05. 121 A 180 D': {total:2429, entregue:1542, faixas:{'00. CARTAO NAO ENTREGUE': 61, '01. ATE 2 DIAS': 311, '02. ATE 5 DIAS': 803, '03. ATE 7 DIAS': 300, '04. ATE 10 DIAS': 83, '05. ACIMA DE 10 DIAS': 45, '06. NAO RENOVADO': 826}},
    '06. ACIMA DE 180 D': {total:15356, entregue:9219, faixas:{'00. CARTAO NAO ENTREGUE': 208, '01. ATE 2 DIAS': 1992, '02. ATE 5 DIAS': 4756, '03. ATE 7 DIAS': 1710, '04. ATE 10 DIAS': 476, '05. ACIMA DE 10 DIAS': 285, '06. NAO RENOVADO': 5929}},
    '07. NAO ATIVO': {total:5988, entregue:3902, faixas:{'00. CARTAO NAO ENTREGUE': 67, '01. ATE 2 DIAS': 842, '02. ATE 5 DIAS': 1998, '03. ATE 7 DIAS': 766, '04. ATE 10 DIAS': 200, '05. ACIMA DE 10 DIAS': 96, '06. NAO RENOVADO': 2019}}
  },
  '202602': {
    '01. 1 A 30 D': {total:3941, entregue:3370, faixas:{'00. CARTAO NAO ENTREGUE': 57, '01. ATE 2 DIAS': 788, '02. ATE 5 DIAS': 1765, '03. ATE 7 DIAS': 570, '04. ATE 10 DIAS': 151, '05. ACIMA DE 10 DIAS': 94, '06. NAO RENOVADO': 516}},
    '02. 31 A 60 D': {total:1874, entregue:1264, faixas:{'00. CARTAO NAO ENTREGUE': 62, '01. ATE 2 DIAS': 274, '02. ATE 5 DIAS': 676, '03. ATE 7 DIAS': 216, '04. ATE 10 DIAS': 62, '05. ACIMA DE 10 DIAS': 36, '06. NAO RENOVADO': 548}},
    '03. 61 A 90 D': {total:891, entregue:615, faixas:{'00. CARTAO NAO ENTREGUE': 21, '01. ATE 2 DIAS': 127, '02. ATE 5 DIAS': 329, '03. ATE 7 DIAS': 106, '04. ATE 10 DIAS': 36, '05. ACIMA DE 10 DIAS': 17, '06. NAO RENOVADO': 255}},
    '04. 91 A 120 D': {total:747, entregue:488, faixas:{'00. CARTAO NAO ENTREGUE': 12, '01. ATE 2 DIAS': 93, '02. ATE 5 DIAS': 250, '03. ATE 7 DIAS': 102, '04. ATE 10 DIAS': 32, '05. ACIMA DE 10 DIAS': 11, '06. NAO RENOVADO': 247}},
    '05. 121 A 180 D': {total:1340, entregue:765, faixas:{'00. CARTAO NAO ENTREGUE': 26, '01. ATE 2 DIAS': 164, '02. ATE 5 DIAS': 390, '03. ATE 7 DIAS': 147, '04. ATE 10 DIAS': 42, '05. ACIMA DE 10 DIAS': 22, '06. NAO RENOVADO': 549}},
    '06. ACIMA DE 180 D': {total:7437, entregue:4226, faixas:{'00. CARTAO NAO ENTREGUE': 104, '01. ATE 2 DIAS': 826, '02. ATE 5 DIAS': 2304, '03. ATE 7 DIAS': 793, '04. ATE 10 DIAS': 200, '05. ACIMA DE 10 DIAS': 103, '06. NAO RENOVADO': 3107}},
    '07. NAO ATIVO': {total:4748, entregue:3044, faixas:{'00. CARTAO NAO ENTREGUE': 69, '01. ATE 2 DIAS': 643, '02. ATE 5 DIAS': 1587, '03. ATE 7 DIAS': 596, '04. ATE 10 DIAS': 153, '05. ACIMA DE 10 DIAS': 65, '06. NAO RENOVADO': 1635}}
  },
  '202603': {
    '01. 1 A 30 D': {total:3600, entregue:2428, faixas:{'00. CARTAO NAO ENTREGUE': 164, '01. ATE 2 DIAS': 596, '02. ATE 5 DIAS': 1347, '03. ATE 7 DIAS': 416, '04. ATE 10 DIAS': 137, '05. ACIMA DE 10 DIAS': 39, '06. NAO RENOVADO': 901}},
    '02. 31 A 60 D': {total:825, entregue:488, faixas:{'00. CARTAO NAO ENTREGUE': 49, '01. ATE 2 DIAS': 116, '02. ATE 5 DIAS': 258, '03. ATE 7 DIAS': 106, '04. ATE 10 DIAS': 24, '05. ACIMA DE 10 DIAS': 8, '06. NAO RENOVADO': 264}},
    '03. 61 A 90 D': {total:635, entregue:357, faixas:{'00. CARTAO NAO ENTREGUE': 36, '01. ATE 2 DIAS': 77, '02. ATE 5 DIAS': 197, '03. ATE 7 DIAS': 68, '04. ATE 10 DIAS': 29, '05. ACIMA DE 10 DIAS': 10, '06. NAO RENOVADO': 218}},
    '04. 91 A 120 D': {total:594, entregue:294, faixas:{'00. CARTAO NAO ENTREGUE': 34, '01. ATE 2 DIAS': 75, '02. ATE 5 DIAS': 164, '03. ATE 7 DIAS': 57, '04. ATE 10 DIAS': 14, '05. ACIMA DE 10 DIAS': 3, '06. NAO RENOVADO': 247}},
    '05. 121 A 180 D': {total:935, entregue:395, faixas:{'00. CARTAO NAO ENTREGUE': 28, '01. ATE 2 DIAS': 89, '02. ATE 5 DIAS': 203, '03. ATE 7 DIAS': 93, '04. ATE 10 DIAS': 34, '05. ACIMA DE 10 DIAS': 3, '06. NAO RENOVADO': 485}},
    '06. ACIMA DE 180 D': {total:5419, entregue:2605, faixas:{'00. CARTAO NAO ENTREGUE': 245, '01. ATE 2 DIAS': 655, '02. ATE 5 DIAS': 1477, '03. ATE 7 DIAS': 482, '04. ATE 10 DIAS': 171, '05. ACIMA DE 10 DIAS': 41, '06. NAO RENOVADO': 2348}},
    '07. NAO ATIVO': {total:3967, entregue:2158, faixas:{'00. CARTAO NAO ENTREGUE': 127, '01. ATE 2 DIAS': 614, '02. ATE 5 DIAS': 1194, '03. ATE 7 DIAS': 396, '04. ATE 10 DIAS': 114, '05. ACIMA DE 10 DIAS': 31, '06. NAO RENOVADO': 1491}}
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
  '202603':84260,
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
  '202603':15975,
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
  '202603':68288,
};

// ── GRUPO 2 — TOTAIS MENSAIS ──────────────────────────────────
const MONTHLY_G2 = [
  {mes:'Mar/25', completo:true, ren:0, rei:0, ent:0, dm:0, tel:3},
  {mes:'Abr/25', completo:true, ren:0, rei:0, ent:0, dm:0, tel:7},
  {mes:'Mai/25', completo:true, ren:155, rei:173, ent:117, dm:0, tel:6180},
  {mes:'Jun/25', completo:true, ren:2922, rei:1860, ent:2166, dm:0, tel:81730},
  {mes:'Jul/25', completo:true, ren:7731, rei:3841, ent:5732, dm:0, tel:193505},
  {mes:'Ago/25', completo:true, ren:7862, rei:4903, ent:5723, dm:0, tel:221905},
  {mes:'Set/25', completo:true, ren:7566, rei:6756, ent:5765, dm:0, tel:295382},
  {mes:'Out/25', completo:true, ren:7576, rei:3570, ent:5754, dm:0, tel:227158},
  {mes:'Nov/25', completo:true, ren:12896, rei:6620, ent:9666, dm:0, tel:350875},
  {mes:'Dez/25', completo:true, ren:14422, rei:7582, ent:10542, dm:0, tel:366068},
  {mes:'Jan/26', completo:true, ren:7602, rei:3550, ent:5039, dm:0, tel:175904},
  {mes:'Fev/26', completo:true, ren:3686, rei:1542, ent:2415, dm:0, tel:82266},
  {mes:'Mar/26*', completo:false, ren:2035, rei:0, ent:881, dm:0, tel:68288},
];

// ── BREAKDOWN POR PRODUTO (G1) ────────────────────────────────
const MONTHLY_HIBRIDO  = [
  {mes:'Abr/25', completo:true, ren:14, rei:1},
  {mes:'Mai/25', completo:true, ren:901, rei:44},
  {mes:'Jun/25', completo:true, ren:13864, rei:735},
  {mes:'Jul/25', completo:true, ren:25517, rei:1125},
  {mes:'Ago/25', completo:true, ren:25201, rei:1234},
  {mes:'Set/25', completo:true, ren:30191, rei:1611},
  {mes:'Out/25', completo:true, ren:26279, rei:1123},
  {mes:'Nov/25', completo:true, ren:39814, rei:1754},
  {mes:'Dez/25', completo:true, ren:48251, rei:3095},
  {mes:'Jan/26', completo:true, ren:24016, rei:1636},
  {mes:'Fev/26', completo:true, ren:12780, rei:1168},
  {mes:'Mar/26*', completo:false, ren:9162, rei:0},
];
const MONTHLY_DEBITO   = [
  {mes:'Abr/25', completo:true, ren:0, rei:0},
  {mes:'Mai/25', completo:true, ren:174, rei:25},
  {mes:'Jun/25', completo:true, ren:2105, rei:268},
  {mes:'Jul/25', completo:true, ren:3985, rei:461},
  {mes:'Ago/25', completo:true, ren:4203, rei:577},
  {mes:'Set/25', completo:true, ren:5083, rei:649},
  {mes:'Out/25', completo:true, ren:4551, rei:646},
  {mes:'Nov/25', completo:true, ren:6442, rei:940},
  {mes:'Dez/25', completo:true, ren:6724, rei:997},
  {mes:'Jan/26', completo:true, ren:3358, rei:466},
  {mes:'Fev/26', completo:true, ren:1341, rei:262},
  {mes:'Mar/26*', completo:false, ren:859, rei:0},
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
