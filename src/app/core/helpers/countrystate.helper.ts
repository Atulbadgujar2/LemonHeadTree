//===============================================================================
// © 2021 ThinkAI Apps.  All rights reserved.
// Original Author: Atul Badgujar
// Original Date: 26 Feb 2021
//==============================================================================


export class CountryStateHelper {

    private static GetStateList = [
        {
            StateName: "Buenos Aires (B)",
            StateCode: "B",
            CountryCode: "AR"
        },
        {
            StateName: "Catamarca (K)",
            StateCode: "K",
            CountryCode: "AR"
        },
        {
            StateName: "Chaco (H)",
            StateCode: "H",
            CountryCode: "AR"
        },
        {
            StateName: "Chubut (U)",
            StateCode: "U",
            CountryCode: "AR"
        },
        {
            StateName: "Ciudad Autónoma de Buenos Aires (C)",
            StateCode: "C",
            CountryCode: "AR"
        },
        {
            StateName: "Corrientes (W)",
            StateCode: "W",
            CountryCode: "AR"
        },
        {
            StateName: "Córdoba (X)",
            StateCode: "X",
            CountryCode: "AR"
        },
        {
            StateName: "Entre Ríos (E)",
            StateCode: "E",
            CountryCode: "AR"
        },
        {
            StateName: "Formosa (P)",
            StateCode: "P",
            CountryCode: "AR"
        },
        {
            StateName: "Jujuy (Y)",
            StateCode: "Y",
            CountryCode: "AR"
        },
        {
            StateName: "La Pampa (L)",
            StateCode: "L",
            CountryCode: "AR"
        },
        {
            StateName: "La Rioja (F)",
            StateCode: "F",
            CountryCode: "AR"
        },
        {
            StateName: "Mendoza (M)",
            StateCode: "M",
            CountryCode: "AR"
        },
        {
            StateName: "Misiones (N)",
            StateCode: "N",
            CountryCode: "AR"
        },
        {
            StateName: "Neuquén (Q)",
            StateCode: "Q",
            CountryCode: "AR"
        },
        {
            StateName: "Río Negro (R)",
            StateCode: "R",
            CountryCode: "AR"
        },
        {
            StateName: "Salta (A)",
            StateCode: "A",
            CountryCode: "AR"
        },
        {
            StateName: "San Juan (J)",
            StateCode: "J",
            CountryCode: "AR"
        },
        {
            StateName: "San Luis (D)",
            StateCode: "D",
            CountryCode: "AR"
        },
        {
            StateName: "Santa Cruz (Z)",
            StateCode: "Z",
            CountryCode: "AR"
        },
        {
            StateName: "Santa Fe (S)",
            StateCode: "S",
            CountryCode: "AR"
        },
        {
            StateName: "Santiago del Estero (G)",
            StateCode: "G",
            CountryCode: "AR"
        },
        {
            StateName: "Tierra del Fuego (V)",
            StateCode: "V",
            CountryCode: "AR"
        },
        {
            StateName: "Tucumán (T)",
            StateCode: "T",
            CountryCode: "AR"
        },
        {
            StateName: "Australian Capital Territory (ACT)",
            StateCode: "ACT",
            CountryCode: "AU"
        },
        {
            StateName: "New South Wales (NSW)",
            StateCode: "NSW",
            CountryCode: "AU"
        },
        {
            StateName: "Northern Territory (NT)",
            StateCode: "NT",
            CountryCode: "AU"
        },
        {
            StateName: "Queensland (QLD)",
            StateCode: "QLD",
            CountryCode: "AU"
        },
        {
            StateName: "South Australia (SA)",
            StateCode: "SA",
            CountryCode: "AU"
        },
        {
            StateName: "Tasmania (TAS)",
            StateCode: "TAS",
            CountryCode: "AU"
        },
        {
            StateName: "Victoria (VIC)",
            StateCode: "VIC",
            CountryCode: "AU"
        },
        {
            StateName: "Western Australia (WA)",
            StateCode: "WA",
            CountryCode: "AU"
        },
        {
            StateName: "Burgenland (1)",
            StateCode: "1",
            CountryCode: "AT"
        },
        {
            StateName: "Kärnten (2)",
            StateCode: "2",
            CountryCode: "AT"
        },
        {
            StateName: "Niederösterreich (3)",
            StateCode: "3",
            CountryCode: "AT"
        },
        {
            StateName: "Oberösterreich (4)",
            StateCode: "4",
            CountryCode: "AT"
        },
        {
            StateName: "Salzburg (5)",
            StateCode: "5",
            CountryCode: "AT"
        },
        {
            StateName: "Steiermark (6)",
            StateCode: "6",
            CountryCode: "AT"
        },
        {
            StateName: "Tirol (7)",
            StateCode: "7",
            CountryCode: "AT"
        },
        {
            StateName: "Vorarlberg (8)",
            StateCode: "8",
            CountryCode: "AT"
        },
        {
            StateName: "Wien (9)",
            StateCode: "9",
            CountryCode: "AT"
        },
        {
            StateName: "Acklins (AK)",
            StateCode: "AK",
            CountryCode: "BS"
        },
        {
            StateName: "Berry Islands (BY)",
            StateCode: "BY",
            CountryCode: "BS"
        },
        {
            StateName: "Bimini (BI)",
            StateCode: "BI",
            CountryCode: "BS"
        },
        {
            StateName: "Black Point (BP)",
            StateCode: "BP",
            CountryCode: "BS"
        },
        {
            StateName: "Cat Island (CI)",
            StateCode: "CI",
            CountryCode: "BS"
        },
        {
            StateName: "Central Abaco (CO)",
            StateCode: "CO",
            CountryCode: "BS"
        },
        {
            StateName: "Central Andros (CS)",
            StateCode: "CS",
            CountryCode: "BS"
        },
        {
            StateName: "Central Eleuthera (CE)",
            StateCode: "CE",
            CountryCode: "BS"
        },
        {
            StateName: "City of Freeport (FP)",
            StateCode: "FP",
            CountryCode: "BS"
        },
        {
            StateName: "Crooked Island and Long Cay (CK)",
            StateCode: "CK",
            CountryCode: "BS"
        },
        {
            StateName: "East Grand Bahama (EG)",
            StateCode: "EG",
            CountryCode: "BS"
        },
        {
            StateName: "Exuma (EX)",
            StateCode: "EX",
            CountryCode: "BS"
        },
        {
            StateName: "Grand Cay (GC)",
            StateCode: "GC",
            CountryCode: "BS"
        },
        {
            StateName: "Harbour Island (HI)",
            StateCode: "HI",
            CountryCode: "BS"
        },
        {
            StateName: "Hope Town (HT)",
            StateCode: "HT",
            CountryCode: "BS"
        },
        {
            StateName: "Inagua (IN)",
            StateCode: "IN",
            CountryCode: "BS"
        },
        {
            StateName: "Long Island (LI)",
            StateCode: "LI",
            CountryCode: "BS"
        },
        {
            StateName: "Mangrove Cay (MC)",
            StateCode: "MC",
            CountryCode: "BS"
        },
        {
            StateName: "Mayaguana (MG)",
            StateCode: "MG",
            CountryCode: "BS"
        },
        {
            StateName: "Moore's Island (MI)",
            StateCode: "MI",
            CountryCode: "BS"
        },
        {
            StateName: "New Providence (NP)",
            StateCode: "NP",
            CountryCode: "BS"
        },
        {
            StateName: "North Abaco (NO)",
            StateCode: "NO",
            CountryCode: "BS"
        },
        {
            StateName: "North Andros (NS)",
            StateCode: "NS",
            CountryCode: "BS"
        },
        {
            StateName: "North Eleuthera (NE)",
            StateCode: "NE",
            CountryCode: "BS"
        },
        {
            StateName: "Ragged Island (RI)",
            StateCode: "RI",
            CountryCode: "BS"
        },
        {
            StateName: "Rum Cay (RC)",
            StateCode: "RC",
            CountryCode: "BS"
        },
        {
            StateName: "San Salvador (SS)",
            StateCode: "SS",
            CountryCode: "BS"
        },
        {
            StateName: "South Abaco (SO)",
            StateCode: "SO",
            CountryCode: "BS"
        },
        {
            StateName: "South Andros (SA)",
            StateCode: "SA",
            CountryCode: "BS"
        },
        {
            StateName: "South Eleuthera (SE)",
            StateCode: "SE",
            CountryCode: "BS"
        },
        {
            StateName: "Spanish Wells (SW)",
            StateCode: "SW",
            CountryCode: "BS"
        },
        {
            StateName: "West Grand Bahama (WG)",
            StateCode: "WG",
            CountryCode: "BS"
        },
        {
            StateName: "Al Janūbīyah (14)",
            StateCode: "14",
            CountryCode: "BH"
        },
        {
            StateName: "Al Muḩarraq (15)",
            StateCode: "15",
            CountryCode: "BH"
        },
        {
            StateName: "Al ‘Āşimah (13)",
            StateCode: "13",
            CountryCode: "BH"
        },
        {
            StateName: "Ash Shamālīyah (17)",
            StateCode: "17",
            CountryCode: "BH"
        },
        {
            StateName: "Alabama (AL)",
            StateCode: "AL",
            CountryCode: "US"
        },
        {
            StateName: "Alaska (AK)",
            StateCode: "AK",
            CountryCode: "US"
        },
        {
            StateName: "American Samoa (AS)",
            StateCode: "AS",
            CountryCode: "US"
        },
        {
            StateName: "Arizona (AZ)",
            StateCode: "AZ",
            CountryCode: "US"
        },
        {
            StateName: "Arkansas (AR)",
            StateCode: "AR",
            CountryCode: "US"
        },
        {
            StateName: "California (CA)",
            StateCode: "CA",
            CountryCode: "US"
        },
        {
            StateName: "Colorado (CO)",
            StateCode: "CO",
            CountryCode: "US"
        },
        {
            StateName: "Connecticut (CT)",
            StateCode: "CT",
            CountryCode: "US"
        },
        {
            StateName: "Delaware (DE)",
            StateCode: "DE",
            CountryCode: "US"
        },
        {
            StateName: "District of Columbia (DC)",
            StateCode: "DC",
            CountryCode: "US"
        },
        {
            StateName: "Florida (FL)",
            StateCode: "FL",
            CountryCode: "US"
        },
        {
            StateName: "Georgia (GA)",
            StateCode: "GA",
            CountryCode: "US"
        },
        {
            StateName: "Guam (GU)",
            StateCode: "GU",
            CountryCode: "US"
        },
        {
            StateName: "Hawaii (HI)",
            StateCode: "HI",
            CountryCode: "US"
        },
        {
            StateName: "Idaho (ID)",
            StateCode: "ID",
            CountryCode: "US"
        },
        {
            StateName: "Illinois (IL)",
            StateCode: "IL",
            CountryCode: "US"
        },
        {
            StateName: "Indiana (IN)",
            StateCode: "IN",
            CountryCode: "US"
        },
        {
            StateName: "Iowa (IA)",
            StateCode: "IA",
            CountryCode: "US"
        },
        {
            StateName: "Kansas (KS)",
            StateCode: "KS",
            CountryCode: "US"
        },
        {
            StateName: "Kentucky (KY)",
            StateCode: "KY",
            CountryCode: "US"
        },
        {
            StateName: "Louisiana (LA)",
            StateCode: "LA",
            CountryCode: "US"
        },
        {
            StateName: "Maine (ME)",
            StateCode: "ME",
            CountryCode: "US"
        },
        {
            StateName: "Maryland (MD)",
            StateCode: "MD",
            CountryCode: "US"
        },
        {
            StateName: "Massachusetts (MA)",
            StateCode: "MA",
            CountryCode: "US"
        },
        {
            StateName: "Michigan (MI)",
            StateCode: "MI",
            CountryCode: "US"
        },
        {
            StateName: "Minnesota (MN)",
            StateCode: "MN",
            CountryCode: "US"
        },
        {
            StateName: "Mississippi (MS)",
            StateCode: "MS",
            CountryCode: "US"
        },
        {
            StateName: "Missouri (MO)",
            StateCode: "MO",
            CountryCode: "US"
        },
        {
            StateName: "Montana (MT)",
            StateCode: "MT",
            CountryCode: "US"
        },
        {
            StateName: "Nebraska (NE)",
            StateCode: "NE",
            CountryCode: "US"
        },
        {
            StateName: "Nevada (NV)",
            StateCode: "NV",
            CountryCode: "US"
        },
        {
            StateName: "New Hampshire (NH)",
            StateCode: "NH",
            CountryCode: "US"
        },
        {
            StateName: "New Jersey (NJ)",
            StateCode: "NJ",
            CountryCode: "US"
        },
        {
            StateName: "New Mexico (NM)",
            StateCode: "NM",
            CountryCode: "US"
        },
        {
            StateName: "New York (NY)",
            StateCode: "NY",
            CountryCode: "US"
        },
        {
            StateName: "North Carolina (NC)",
            StateCode: "NC",
            CountryCode: "US"
        },
        {
            StateName: "North Dakota (ND)",
            StateCode: "ND",
            CountryCode: "US"
        },
        {
            StateName: "Northern Mariana Islands (MP)",
            StateCode: "MP",
            CountryCode: "US"
        },
        {
            StateName: "Ohio (OH)",
            StateCode: "OH",
            CountryCode: "US"
        },
        {
            StateName: "Oklahoma (OK)",
            StateCode: "OK",
            CountryCode: "US"
        },
        {
            StateName: "Oregon (OR)",
            StateCode: "OR",
            CountryCode: "US"
        },
        {
            StateName: "Pennsylvania (PA)",
            StateCode: "PA",
            CountryCode: "US"
        },
        {
            StateName: "Puerto Rico (PR)",
            StateCode: "PR",
            CountryCode: "US"
        },
        {
            StateName: "Rhode Island (RI)",
            StateCode: "RI",
            CountryCode: "US"
        },
        {
            StateName: "South Carolina (SC)",
            StateCode: "SC",
            CountryCode: "US"
        },
        {
            StateName: "South Dakota (SD)",
            StateCode: "SD",
            CountryCode: "US"
        },
        {
            StateName: "Tennessee (TN)",
            StateCode: "TN",
            CountryCode: "US"
        },
        {
            StateName: "Texas (TX)",
            StateCode: "TX",
            CountryCode: "US"
        },
        {
            StateName: "United States Minor Outlying Islands (UM)",
            StateCode: "UM",
            CountryCode: "US"
        },
        {
            StateName: "Utah (UT)",
            StateCode: "UT",
            CountryCode: "US"
        },
        {
            StateName: "Vermont (VT)",
            StateCode: "VT",
            CountryCode: "US"
        },
        {
            StateName: "Virgin Islands, U.S. (VI)",
            StateCode: "VI",
            CountryCode: "US"
        },
        {
            StateName: "Virginia (VA)",
            StateCode: "VA",
            CountryCode: "US"
        },
        {
            StateName: "Washington (WA)",
            StateCode: "WA",
            CountryCode: "US"
        },
        {
            StateName: "West Virginia (WV)",
            StateCode: "WV",
            CountryCode: "US"
        },
        {
            StateName: "Wisconsin (WI)",
            StateCode: "WI",
            CountryCode: "US"
        },
        {
            StateName: "Wyoming (WY)",
            StateCode: "WY",
            CountryCode: "US"
        },
        {
            StateName: "Acre (AC)",
            StateCode: "AC",
            CountryCode: "BR"
        },
        {
            StateName: "Alagoas (AL)",
            StateCode: "AL",
            CountryCode: "BR"
        },
        {
            StateName: "Amapá (AP)",
            StateCode: "AP",
            CountryCode: "BR"
        },
        {
            StateName: "Amazonas (AM)",
            StateCode: "AM",
            CountryCode: "BR"
        },
        {
            StateName: "Bahia (BA)",
            StateCode: "BA",
            CountryCode: "BR"
        },
        {
            StateName: "Ceará (CE)",
            StateCode: "CE",
            CountryCode: "BR"
        },
        {
            StateName: "Distrito Federal (DF)",
            StateCode: "DF",
            CountryCode: "BR"
        },
        {
            StateName: "Espírito Santo (ES)",
            StateCode: "ES",
            CountryCode: "BR"
        },
        {
            StateName: "Goiás (GO)",
            StateCode: "GO",
            CountryCode: "BR"
        },
        {
            StateName: "Maranhão (MA)",
            StateCode: "MA",
            CountryCode: "BR"
        },
        {
            StateName: "Mato Grosso (MT)",
            StateCode: "MT",
            CountryCode: "BR"
        },
        {
            StateName: "Mato Grosso do Sul (MS)",
            StateCode: "MS",
            CountryCode: "BR"
        },
        {
            StateName: "Minas Gerais (MG)",
            StateCode: "MG",
            CountryCode: "BR"
        },
        {
            StateName: "Paraná (PR)",
            StateCode: "PR",
            CountryCode: "BR"
        },
        {
            StateName: "Paraíba (PB)",
            StateCode: "PB",
            CountryCode: "BR"
        },
        {
            StateName: "Pará (PA)",
            StateCode: "PA",
            CountryCode: "BR"
        },
        {
            StateName: "Pernambuco (PE)",
            StateCode: "PE",
            CountryCode: "BR"
        },
        {
            StateName: "Piauí (PI)",
            StateCode: "PI",
            CountryCode: "BR"
        },
        {
            StateName: "Rio Grande do Norte (RN)",
            StateCode: "RN",
            CountryCode: "BR"
        },
        {
            StateName: "Rio Grande do Sul (RS)",
            StateCode: "RS",
            CountryCode: "BR"
        },
        {
            StateName: "Rio de Janeiro (RJ)",
            StateCode: "RJ",
            CountryCode: "BR"
        },
        {
            StateName: "Rondônia (RO)",
            StateCode: "RO",
            CountryCode: "BR"
        },
        {
            StateName: "Roraima (RR)",
            StateCode: "RR",
            CountryCode: "BR"
        },
        {
            StateName: "Santa Catarina (SC)",
            StateCode: "SC",
            CountryCode: "BR"
        },
        {
            StateName: "Sergipe (SE)",
            StateCode: "SE",
            CountryCode: "BR"
        },
        {
            StateName: "São Paulo (SP)",
            StateCode: "SP",
            CountryCode: "BR"
        },
        {
            StateName: "Tocantins (TO)",
            StateCode: "TO",
            CountryCode: "BR"
        },
        {
            StateName: "Anhui Sheng (AH)",
            StateCode: "AH",
            CountryCode: "CN"
        },
        {
            StateName: "Aomen Tebiexingzhengqu (MO)",
            StateCode: "MO",
            CountryCode: "CN"
        },
        {
            StateName: "Beijing Shi (BJ)",
            StateCode: "BJ",
            CountryCode: "CN"
        },
        {
            StateName: "Chongqing Shi (CQ)",
            StateCode: "CQ",
            CountryCode: "CN"
        },
        {
            StateName: "Fujian Sheng (FJ)",
            StateCode: "FJ",
            CountryCode: "CN"
        },
        {
            StateName: "Gansu Sheng (GS)",
            StateCode: "GS",
            CountryCode: "CN"
        },
        {
            StateName: "Guangdong Sheng (GD)",
            StateCode: "GD",
            CountryCode: "CN"
        },
        {
            StateName: "Guangxi Zhuangzu Zizhiqu (GX)",
            StateCode: "GX",
            CountryCode: "CN"
        },
        {
            StateName: "Guizhou Sheng (GZ)",
            StateCode: "GZ",
            CountryCode: "CN"
        },
        {
            StateName: "Hainan Sheng (HI)",
            StateCode: "HI",
            CountryCode: "CN"
        },
        {
            StateName: "Hebei Sheng (HE)",
            StateCode: "HE",
            CountryCode: "CN"
        },
        {
            StateName: "Heilongjiang Sheng (HL)",
            StateCode: "HL",
            CountryCode: "CN"
        },
        {
            StateName: "Henan Sheng (HA)",
            StateCode: "HA",
            CountryCode: "CN"
        },
        {
            StateName: "Hong Kong SAR (HK)",
            StateCode: "HK",
            CountryCode: "CN"
        },
        {
            StateName: "Hubei Sheng (HB)",
            StateCode: "HB",
            CountryCode: "CN"
        },
        {
            StateName: "Hunan Sheng (HN)",
            StateCode: "HN",
            CountryCode: "CN"
        },
        {
            StateName: "Jiangsu Sheng (JS)",
            StateCode: "JS",
            CountryCode: "CN"
        },
        {
            StateName: "Jiangxi Sheng (JX)",
            StateCode: "JX",
            CountryCode: "CN"
        },
        {
            StateName: "Jilin Sheng (JL)",
            StateCode: "JL",
            CountryCode: "CN"
        },
        {
            StateName: "Liaoning Sheng (LN)",
            StateCode: "LN",
            CountryCode: "CN"
        },
        {
            StateName: "Macao SAR (MO)",
            StateCode: "MO",
            CountryCode: "CN"
        },
        {
            StateName: "Macau SAR (MO)",
            StateCode: "MO",
            CountryCode: "CN"
        },
        {
            StateName: "Nei Mongol Zizhiqu (NM)",
            StateCode: "NM",
            CountryCode: "CN"
        },
        {
            StateName: "Ningxia Huizi Zizhiqu (NX)",
            StateCode: "NX",
            CountryCode: "CN"
        },
        {
            StateName: "Qinghai Sheng (QH)",
            StateCode: "QH",
            CountryCode: "CN"
        },
        {
            StateName: "Shaanxi Sheng (SN)",
            StateCode: "SN",
            CountryCode: "CN"
        },
        {
            StateName: "Shandong Sheng (SD)",
            StateCode: "SD",
            CountryCode: "CN"
        },
        {
            StateName: "Shanghai Shi (SH)",
            StateCode: "SH",
            CountryCode: "CN"
        },
        {
            StateName: "Shanxi Sheng (SX)",
            StateCode: "SX",
            CountryCode: "CN"
        },
        {
            StateName: "Sichuan Sheng (SC)",
            StateCode: "SC",
            CountryCode: "CN"
        },
        {
            StateName: "Taiwan Sheng (TW)",
            StateCode: "TW",
            CountryCode: "CN"
        },
        {
            StateName: "Tianjin Shi (TJ)",
            StateCode: "TJ",
            CountryCode: "CN"
        },
        {
            StateName: "Xianggang Tebiexingzhengqu (HK)",
            StateCode: "HK",
            CountryCode: "CN"
        },
        {
            StateName: "Xinjiang Uygur Zizhiqu (XJ)",
            StateCode: "XJ",
            CountryCode: "CN"
        },
        {
            StateName: "Xizang Zizhiqu (XZ)",
            StateCode: "XZ",
            CountryCode: "CN"
        },
        {
            StateName: "Yunnan Sheng (YN)",
            StateCode: "YN",
            CountryCode: "CN"
        },
        {
            StateName: "Zhejiang Sheng (ZJ)",
            StateCode: "ZJ",
            CountryCode: "CN"
        },
        {
            StateName: "Amazonas (AMA)",
            StateCode: "AMA",
            CountryCode: "CO"
        },
        {
            StateName: "Antioquia (ANT)",
            StateCode: "ANT",
            CountryCode: "CO"
        },
        {
            StateName: "Arauca (ARA)",
            StateCode: "ARA",
            CountryCode: "CO"
        },
        {
            StateName: "Atlántico (ATL)",
            StateCode: "ATL",
            CountryCode: "CO"
        },
        {
            StateName: "Bolívar (BOL)",
            StateCode: "BOL",
            CountryCode: "CO"
        },
        {
            StateName: "Boyacá (BOY)",
            StateCode: "BOY",
            CountryCode: "CO"
        },
        {
            StateName: "Caldas (CAL)",
            StateCode: "CAL",
            CountryCode: "CO"
        },
        {
            StateName: "Caquetá (CAQ)",
            StateCode: "CAQ",
            CountryCode: "CO"
        },
        {
            StateName: "Casanare (CAS)",
            StateCode: "CAS",
            CountryCode: "CO"
        },
        {
            StateName: "Cauca (CAU)",
            StateCode: "CAU",
            CountryCode: "CO"
        },
        {
            StateName: "Cesar (CES)",
            StateCode: "CES",
            CountryCode: "CO"
        },
        {
            StateName: "Chocó (CHO)",
            StateCode: "CHO",
            CountryCode: "CO"
        },
        {
            StateName: "Cundinamarca (CUN)",
            StateCode: "CUN",
            CountryCode: "CO"
        },
        {
            StateName: "Córdoba (COR)",
            StateCode: "COR",
            CountryCode: "CO"
        },
        {
            StateName: "Distrito Capital de Bogotá (DC)",
            StateCode: "DC",
            CountryCode: "CO"
        },
        {
            StateName: "Guainía (GUA)",
            StateCode: "GUA",
            CountryCode: "CO"
        },
        {
            StateName: "Guaviare (GUV)",
            StateCode: "GUV",
            CountryCode: "CO"
        },
        {
            StateName: "Huila (HUI)",
            StateCode: "HUI",
            CountryCode: "CO"
        },
        {
            StateName: "La Guajira (LAG)",
            StateCode: "LAG",
            CountryCode: "CO"
        },
        {
            StateName: "Magdalena (MAG)",
            StateCode: "MAG",
            CountryCode: "CO"
        },
        {
            StateName: "Meta (MET)",
            StateCode: "MET",
            CountryCode: "CO"
        },
        {
            StateName: "Nariño (NAR)",
            StateCode: "NAR",
            CountryCode: "CO"
        },
        {
            StateName: "Norte de Santander (NSA)",
            StateCode: "NSA",
            CountryCode: "CO"
        },
        {
            StateName: "Putumayo (PUT)",
            StateCode: "PUT",
            CountryCode: "CO"
        },
        {
            StateName: "Quindío (QUI)",
            StateCode: "QUI",
            CountryCode: "CO"
        },
        {
            StateName: "Risaralda (RIS)",
            StateCode: "RIS",
            CountryCode: "CO"
        },
        {
            StateName: "San Andrés, Providencia y Santa Catalina (SAP)",
            StateCode: "SAP",
            CountryCode: "CO"
        },
        {
            StateName: "Santander (SAN)",
            StateCode: "SAN",
            CountryCode: "CO"
        },
        {
            StateName: "Sucre (SUC)",
            StateCode: "SUC",
            CountryCode: "CO"
        },
        {
            StateName: "Tolima (TOL)",
            StateCode: "TOL",
            CountryCode: "CO"
        },
        {
            StateName: "Valle del Cauca (VAC)",
            StateCode: "VAC",
            CountryCode: "CO"
        },
        {
            StateName: "Vaupés (VAU)",
            StateCode: "VAU",
            CountryCode: "CO"
        },
        {
            StateName: "Vichada (VID)",
            StateCode: "VID",
            CountryCode: "CO"
        },
        {
            StateName: "Alajuela (A)",
            StateCode: "A",
            CountryCode: "CR"
        },
        {
            StateName: "Cartago (C)",
            StateCode: "C",
            CountryCode: "CR"
        },
        {
            StateName: "Guanacaste (G)",
            StateCode: "G",
            CountryCode: "CR"
        },
        {
            StateName: "Heredia (H)",
            StateCode: "H",
            CountryCode: "CR"
        },
        {
            StateName: "Limón (L)",
            StateCode: "L",
            CountryCode: "CR"
        },
        {
            StateName: "Puntarenas (P)",
            StateCode: "P",
            CountryCode: "CR"
        },
        {
            StateName: "San José (SJ)",
            StateCode: "SJ",
            CountryCode: "CR"
        },
        {
            StateName: "Artemisa (15*)",
            StateCode: "15*",
            CountryCode: "CU"
        },
        {
            StateName: "Camagüey (9)",
            StateCode: "9",
            CountryCode: "CU"
        },
        {
            StateName: "Ciego de Ávila (8)",
            StateCode: "8",
            CountryCode: "CU"
        },
        {
            StateName: "Cienfuegos (6)",
            StateCode: "6",
            CountryCode: "CU"
        },
        {
            StateName: "Granma (12)",
            StateCode: "12",
            CountryCode: "CU"
        },
        {
            StateName: "Guantánamo (14)",
            StateCode: "14",
            CountryCode: "CU"
        },
        {
            StateName: "Holguín (11)",
            StateCode: "11",
            CountryCode: "CU"
        },
        {
            StateName: "Isla de la Juventud (99)",
            StateCode: "99",
            CountryCode: "CU"
        },
        {
            StateName: "La Habana (3)",
            StateCode: "3",
            CountryCode: "CU"
        },
        {
            StateName: "Las Tunas (10)",
            StateCode: "10",
            CountryCode: "CU"
        },
        {
            StateName: "Matanzas (4)",
            StateCode: "4",
            CountryCode: "CU"
        },
        {
            StateName: "Mayabeque (16)",
            StateCode: "16",
            CountryCode: "CU"
        },
        {
            StateName: "Pinar del Río (1)",
            StateCode: "1",
            CountryCode: "CU"
        },
        {
            StateName: "Sancti Spíritus (7)",
            StateCode: "7",
            CountryCode: "CU"
        },
        {
            StateName: "Santiago de Cuba (13)",
            StateCode: "13",
            CountryCode: "CU"
        },
        {
            StateName: "Villa Clara (5)",
            StateCode: "5",
            CountryCode: "CU"
        },
        {
            StateName: "Hovedstaden (84)",
            StateCode: "84",
            CountryCode: "DK"
        },
        {
            StateName: "Midtjylland (82)",
            StateCode: "82",
            CountryCode: "DK"
        },
        {
            StateName: "Nordjylland (81)",
            StateCode: "81",
            CountryCode: "DK"
        },
        {
            StateName: "Sjælland (85)",
            StateCode: "85",
            CountryCode: "DK"
        },
        {
            StateName: "Syddanmark (83)",
            StateCode: "83",
            CountryCode: "DK"
        },
        {
            StateName: "Azuay (A)",
            StateCode: "A",
            CountryCode: "EC"
        },
        {
            StateName: "Bolívar (B)",
            StateCode: "B",
            CountryCode: "EC"
        },
        {
            StateName: "Carchi (C)",
            StateCode: "C",
            CountryCode: "EC"
        },
        {
            StateName: "Cañar (F)",
            StateCode: "F",
            CountryCode: "EC"
        },
        {
            StateName: "Chimborazo (H)",
            StateCode: "H",
            CountryCode: "EC"
        },
        {
            StateName: "Cotopaxi (X)",
            StateCode: "X",
            CountryCode: "EC"
        },
        {
            StateName: "El Oro (O)",
            StateCode: "O",
            CountryCode: "EC"
        },
        {
            StateName: "Esmeraldas (E)",
            StateCode: "E",
            CountryCode: "EC"
        },
        {
            StateName: "Galápagos (W)",
            StateCode: "W",
            CountryCode: "EC"
        },
        {
            StateName: "Guayas (G)",
            StateCode: "G",
            CountryCode: "EC"
        },
        {
            StateName: "Imbabura (I)",
            StateCode: "I",
            CountryCode: "EC"
        },
        {
            StateName: "Loja (L)",
            StateCode: "L",
            CountryCode: "EC"
        },
        {
            StateName: "Los Ríos (R)",
            StateCode: "R",
            CountryCode: "EC"
        },
        {
            StateName: "Manabí (M)",
            StateCode: "M",
            CountryCode: "EC"
        },
        {
            StateName: "Morona Santiago (S)",
            StateCode: "S",
            CountryCode: "EC"
        },
        {
            StateName: "Napo (N)",
            StateCode: "N",
            CountryCode: "EC"
        },
        {
            StateName: "Orellana (D)",
            StateCode: "D",
            CountryCode: "EC"
        },
        {
            StateName: "Pastaza (Y)",
            StateCode: "Y",
            CountryCode: "EC"
        },
        {
            StateName: "Pichincha (P)",
            StateCode: "P",
            CountryCode: "EC"
        },
        {
            StateName: "Santa Elena (SE)",
            StateCode: "SE",
            CountryCode: "EC"
        },
        {
            StateName: "Santo Domingo de los Tsáchilas (SD)",
            StateCode: "SD",
            CountryCode: "EC"
        },
        {
            StateName: "Sucumbíos (U)",
            StateCode: "U",
            CountryCode: "EC"
        },
        {
            StateName: "Tungurahua (T)",
            StateCode: "T",
            CountryCode: "EC"
        },
        {
            StateName: "Zamora Chinchipe (Z)",
            StateCode: "Z",
            CountryCode: "EC"
        },
        {
            StateName: "Auvergne-Rhône-Alpes (ARA)",
            StateCode: "ARA",
            CountryCode: "FR"
        },
        {
            StateName: "Bourgogne-Franche-Comté (BFC)",
            StateCode: "BFC",
            CountryCode: "FR"
        },
        {
            StateName: "Bretagne (BRE)",
            StateCode: "BRE",
            CountryCode: "FR"
        },
        {
            StateName: "Centre-Val de Loire (CVL)",
            StateCode: "CVL",
            CountryCode: "FR"
        },
        {
            StateName: "Clipperton (CP)",
            StateCode: "CP",
            CountryCode: "FR"
        },
        {
            StateName: "Corse (COR)",
            StateCode: "COR",
            CountryCode: "FR"
        },
        {
            StateName: "Grand-Est (GES)",
            StateCode: "GES",
            CountryCode: "FR"
        },
        {
            StateName: "Guadeloupe (GUA)",
            StateCode: "GUA",
            CountryCode: "FR"
        },
        {
            StateName: "Guyane (française) (GF)",
            StateCode: "GF",
            CountryCode: "FR"
        },
        {
            StateName: "Hauts-de-France (HDF)",
            StateCode: "HDF",
            CountryCode: "FR"
        },
        {
            StateName: "La Réunion (LRE)",
            StateCode: "LRE",
            CountryCode: "FR"
        },
        {
            StateName: "Martinique (MQ)",
            StateCode: "MQ",
            CountryCode: "FR"
        },
        {
            StateName: "Mayotte (MAY)",
            StateCode: "MAY",
            CountryCode: "FR"
        },
        {
            StateName: "Normandie (NOR)",
            StateCode: "NOR",
            CountryCode: "FR"
        },
        {
            StateName: "Nouvelle-Aquitaine (NAQ)",
            StateCode: "NAQ",
            CountryCode: "FR"
        },
        {
            StateName: "Nouvelle-Calédonie (NC)",
            StateCode: "NC",
            CountryCode: "FR"
        },
        {
            StateName: "Occitanie (OCC)",
            StateCode: "OCC",
            CountryCode: "FR"
        },
        {
            StateName: "Pays-de-la-Loire (PDL)",
            StateCode: "PDL",
            CountryCode: "FR"
        },
        {
            StateName: "Polynésie française (PF)",
            StateCode: "PF",
            CountryCode: "FR"
        },
        {
            StateName: "Provence-Alpes-Côte-d’Azur (PAC)",
            StateCode: "PAC",
            CountryCode: "FR"
        },
        {
            StateName: "Saint-Barthélemy (BL)",
            StateCode: "BL",
            CountryCode: "FR"
        },
        {
            StateName: "Saint-Martin (MF)",
            StateCode: "MF",
            CountryCode: "FR"
        },
        {
            StateName: "Saint-Pierre-et-Miquelon (PM)",
            StateCode: "PM",
            CountryCode: "FR"
        },
        {
            StateName: "Terres australes françaises (TF)",
            StateCode: "TF",
            CountryCode: "FR"
        },
        {
            StateName: "Wallis-et-Futuna (WF)",
            StateCode: "WF",
            CountryCode: "FR"
        },
        {
            StateName: "Île-de-France (IDF)",
            StateCode: "IDF",
            CountryCode: "FR"
        },
        {
            StateName: "Ain (1)",
            StateCode: "1",
            CountryCode: "FR"
        },
        {
            StateName: "Allier (3)",
            StateCode: "3",
            CountryCode: "FR"
        },
        {
            StateName: "Ardèche (7)",
            StateCode: "7",
            CountryCode: "FR"
        },
        {
            StateName: "Cantal (15)",
            StateCode: "15",
            CountryCode: "FR"
        },
        {
            StateName: "Drôme (26)",
            StateCode: "26",
            CountryCode: "FR"
        },
        {
            StateName: "Haute-Loire (43)",
            StateCode: "43",
            CountryCode: "FR"
        },
        {
            StateName: "Haute-Savoie (74)",
            StateCode: "74",
            CountryCode: "FR"
        },
        {
            StateName: "Isère (38)",
            StateCode: "38",
            CountryCode: "FR"
        },
        {
            StateName: "Loire (42)",
            StateCode: "42",
            CountryCode: "FR"
        },
        {
            StateName: "Puy-de-Dôme (63)",
            StateCode: "63",
            CountryCode: "FR"
        },
        {
            StateName: "Rhône (69)",
            StateCode: "69",
            CountryCode: "FR"
        },
        {
            StateName: "Savoie (73)",
            StateCode: "73",
            CountryCode: "FR"
        },
        {
            StateName: "Côte-d'Or (21)",
            StateCode: "21",
            CountryCode: "FR"
        },
        {
            StateName: "Doubs (25)",
            StateCode: "25",
            CountryCode: "FR"
        },
        {
            StateName: "Haute-Saône (70)",
            StateCode: "70",
            CountryCode: "FR"
        },
        {
            StateName: "Jura (39)",
            StateCode: "39",
            CountryCode: "FR"
        },
        {
            StateName: "Nièvre (58)",
            StateCode: "58",
            CountryCode: "FR"
        },
        {
            StateName: "Saône-et-Loire (71)",
            StateCode: "71",
            CountryCode: "FR"
        },
        {
            StateName: "Territoire de Belfort (90)",
            StateCode: "90",
            CountryCode: "FR"
        },
        {
            StateName: "Yonne (89)",
            StateCode: "89",
            CountryCode: "FR"
        },
        {
            StateName: "Côtes-d'Armor (22)",
            StateCode: "22",
            CountryCode: "FR"
        },
        {
            StateName: "Finistère (29)",
            StateCode: "29",
            CountryCode: "FR"
        },
        {
            StateName: "Ille-et-Vilaine (35)",
            StateCode: "35",
            CountryCode: "FR"
        },
        {
            StateName: "Morbihan (56)",
            StateCode: "56",
            CountryCode: "FR"
        },
        {
            StateName: "Corse-du-Sud (2A)",
            StateCode: "2A",
            CountryCode: "FR"
        },
        {
            StateName: "Haute-Corse (2B)",
            StateCode: "2B",
            CountryCode: "FR"
        },
        {
            StateName: "Cher (18)",
            StateCode: "18",
            CountryCode: "FR"
        },
        {
            StateName: "Eure-et-Loir (28)",
            StateCode: "28",
            CountryCode: "FR"
        },
        {
            StateName: "Indre (36)",
            StateCode: "36",
            CountryCode: "FR"
        },
        {
            StateName: "Indre-et-Loire (37)",
            StateCode: "37",
            CountryCode: "FR"
        },
        {
            StateName: "Loir-et-Cher (41)",
            StateCode: "41",
            CountryCode: "FR"
        },
        {
            StateName: "Loiret (45)",
            StateCode: "45",
            CountryCode: "FR"
        },
        {
            StateName: "Ardennes (8)",
            StateCode: "8",
            CountryCode: "FR"
        },
        {
            StateName: "Aube (10)",
            StateCode: "10",
            CountryCode: "FR"
        },
        {
            StateName: "Bas-Rhin (67)",
            StateCode: "67",
            CountryCode: "FR"
        },
        {
            StateName: "Haut-Rhin (68)",
            StateCode: "68",
            CountryCode: "FR"
        },
        {
            StateName: "Haute-Marne (52)",
            StateCode: "52",
            CountryCode: "FR"
        },
        {
            StateName: "Marne (51)",
            StateCode: "51",
            CountryCode: "FR"
        },
        {
            StateName: "Meurthe-et-Moselle (54)",
            StateCode: "54",
            CountryCode: "FR"
        },
        {
            StateName: "Meuse (55)",
            StateCode: "55",
            CountryCode: "FR"
        },
        {
            StateName: "Moselle (57)",
            StateCode: "57",
            CountryCode: "FR"
        },
        {
            StateName: "Vosges (88)",
            StateCode: "88",
            CountryCode: "FR"
        },
        {
            StateName: "Guadeloupe (GP)",
            StateCode: "GP",
            CountryCode: "FR"
        },
        {
            StateName: "Aisne (2)",
            StateCode: "2",
            CountryCode: "FR"
        },
        {
            StateName: "Nord (59)",
            StateCode: "59",
            CountryCode: "FR"
        },
        {
            StateName: "Oise (60)",
            StateCode: "60",
            CountryCode: "FR"
        },
        {
            StateName: "Pas-de-Calais (62)",
            StateCode: "62",
            CountryCode: "FR"
        },
        {
            StateName: "Somme (80)",
            StateCode: "80",
            CountryCode: "FR"
        },
        {
            StateName: "Essonne (91)",
            StateCode: "91",
            CountryCode: "FR"
        },
        {
            StateName: "Hauts-de-Seine (92)",
            StateCode: "92",
            CountryCode: "FR"
        },
        {
            StateName: "Paris (75)",
            StateCode: "75",
            CountryCode: "FR"
        },
        {
            StateName: "Seine-Saint-Denis (93)",
            StateCode: "93",
            CountryCode: "FR"
        },
        {
            StateName: "Seine-et-Marne (77)",
            StateCode: "77",
            CountryCode: "FR"
        },
        {
            StateName: "Val-d'Oise (95)",
            StateCode: "95",
            CountryCode: "FR"
        },
        {
            StateName: "Val-de-Marne (94)",
            StateCode: "94",
            CountryCode: "FR"
        },
        {
            StateName: "Yvelines (78)",
            StateCode: "78",
            CountryCode: "FR"
        },
        {
            StateName: "La Réunion (RE)",
            StateCode: "RE",
            CountryCode: "FR"
        },
        {
            StateName: "Mayotte (YT)",
            StateCode: "YT",
            CountryCode: "FR"
        },
        {
            StateName: "Charente (16)",
            StateCode: "16",
            CountryCode: "FR"
        },
        {
            StateName: "Charente-Maritime (17)",
            StateCode: "17",
            CountryCode: "FR"
        },
        {
            StateName: "Corrèze (19)",
            StateCode: "19",
            CountryCode: "FR"
        },
        {
            StateName: "Creuse (23)",
            StateCode: "23",
            CountryCode: "FR"
        },
        {
            StateName: "Deux-Sèvres (79)",
            StateCode: "79",
            CountryCode: "FR"
        },
        {
            StateName: "Dordogne (24)",
            StateCode: "24",
            CountryCode: "FR"
        },
        {
            StateName: "Gironde (33)",
            StateCode: "33",
            CountryCode: "FR"
        },
        {
            StateName: "Haute-Vienne (87)",
            StateCode: "87",
            CountryCode: "FR"
        },
        {
            StateName: "Landes (40)",
            StateCode: "40",
            CountryCode: "FR"
        },
        {
            StateName: "Lot-et-Garonne (47)",
            StateCode: "47",
            CountryCode: "FR"
        },
        {
            StateName: "Pyrénées-Atlantiques (64)",
            StateCode: "64",
            CountryCode: "FR"
        },
        {
            StateName: "Vienne (86)",
            StateCode: "86",
            CountryCode: "FR"
        },
        {
            StateName: "Calvados (14)",
            StateCode: "14",
            CountryCode: "FR"
        },
        {
            StateName: "Eure (27)",
            StateCode: "27",
            CountryCode: "FR"
        },
        {
            StateName: "Manche (50)",
            StateCode: "50",
            CountryCode: "FR"
        },
        {
            StateName: "Orne (61)",
            StateCode: "61",
            CountryCode: "FR"
        },
        {
            StateName: "Seine-Maritime (76)",
            StateCode: "76",
            CountryCode: "FR"
        },
        {
            StateName: "Ariège (9)",
            StateCode: "9",
            CountryCode: "FR"
        },
        {
            StateName: "Aude (11)",
            StateCode: "11",
            CountryCode: "FR"
        },
        {
            StateName: "Aveyron (12)",
            StateCode: "12",
            CountryCode: "FR"
        },
        {
            StateName: "Gard (30)",
            StateCode: "30",
            CountryCode: "FR"
        },
        {
            StateName: "Gers (32)",
            StateCode: "32",
            CountryCode: "FR"
        },
        {
            StateName: "Haute-Garonne (31)",
            StateCode: "31",
            CountryCode: "FR"
        },
        {
            StateName: "Hautes-Pyrénées (65)",
            StateCode: "65",
            CountryCode: "FR"
        },
        {
            StateName: "Hérault (34)",
            StateCode: "34",
            CountryCode: "FR"
        },
        {
            StateName: "Lot (46)",
            StateCode: "46",
            CountryCode: "FR"
        },
        {
            StateName: "Lozère (48)",
            StateCode: "48",
            CountryCode: "FR"
        },
        {
            StateName: "Pyrénées-Orientales (66)",
            StateCode: "66",
            CountryCode: "FR"
        },
        {
            StateName: "Tarn (81)",
            StateCode: "81",
            CountryCode: "FR"
        },
        {
            StateName: "Tarn-et-Garonne (82)",
            StateCode: "82",
            CountryCode: "FR"
        },
        {
            StateName: "Alpes-Maritimes (6)",
            StateCode: "6",
            CountryCode: "FR"
        },
        {
            StateName: "Alpes-de-Haute-Provence (4)",
            StateCode: "4",
            CountryCode: "FR"
        },
        {
            StateName: "Bouches-du-Rhône (13)",
            StateCode: "13",
            CountryCode: "FR"
        },
        {
            StateName: "Hautes-Alpes (5)",
            StateCode: "5",
            CountryCode: "FR"
        },
        {
            StateName: "Var (83)",
            StateCode: "83",
            CountryCode: "FR"
        },
        {
            StateName: "Vaucluse (84)",
            StateCode: "84",
            CountryCode: "FR"
        },
        {
            StateName: "Loire-Atlantique (44)",
            StateCode: "44",
            CountryCode: "FR"
        },
        {
            StateName: "Maine-et-Loire (49)",
            StateCode: "49",
            CountryCode: "FR"
        },
        {
            StateName: "Mayenne (53)",
            StateCode: "53",
            CountryCode: "FR"
        },
        {
            StateName: "Sarthe (72)",
            StateCode: "72",
            CountryCode: "FR"
        },
        {
            StateName: "Vendée (85)",
            StateCode: "85",
            CountryCode: "FR"
        },
        {
            StateName: "Baden-Württemberg (BW)",
            StateCode: "BW",
            CountryCode: "DE"
        },
        {
            StateName: "Bayern (BY)",
            StateCode: "BY",
            CountryCode: "DE"
        },
        {
            StateName: "Berlin (BE)",
            StateCode: "BE",
            CountryCode: "DE"
        },
        {
            StateName: "Brandenburg (BB)",
            StateCode: "BB",
            CountryCode: "DE"
        },
        {
            StateName: "Bremen (HB)",
            StateCode: "HB",
            CountryCode: "DE"
        },
        {
            StateName: "Hamburg (HH)",
            StateCode: "HH",
            CountryCode: "DE"
        },
        {
            StateName: "Hessen (HE)",
            StateCode: "HE",
            CountryCode: "DE"
        },
        {
            StateName: "Mecklenburg-Vorpommern (MV)",
            StateCode: "MV",
            CountryCode: "DE"
        },
        {
            StateName: "Niedersachsen (NI)",
            StateCode: "NI",
            CountryCode: "DE"
        },
        {
            StateName: "Nordrhein-Westfalen (NW)",
            StateCode: "NW",
            CountryCode: "DE"
        },
        {
            StateName: "Rheinland-Pfalz (RP)",
            StateCode: "RP",
            CountryCode: "DE"
        },
        {
            StateName: "Saarland (SL)",
            StateCode: "SL",
            CountryCode: "DE"
        },
        {
            StateName: "Sachsen (SN)",
            StateCode: "SN",
            CountryCode: "DE"
        },
        {
            StateName: "Sachsen-Anhalt (ST)",
            StateCode: "ST",
            CountryCode: "DE"
        },
        {
            StateName: "Schleswig-Holstein (SH)",
            StateCode: "SH",
            CountryCode: "DE"
        },
        {
            StateName: "Thüringen (TH)",
            StateCode: "TH",
            CountryCode: "DE"
        },
        {
            StateName: "Andaman and Nicobar Islands (AN)",
            StateCode: "AN",
            CountryCode: "IN"
        },
        {
            StateName: "Andhra Pradesh (AP)",
            StateCode: "AP",
            CountryCode: "IN"
        },
        {
            StateName: "Arunachal Pradesh (AR)",
            StateCode: "AR",
            CountryCode: "IN"
        },
        {
            StateName: "Assam (AS)",
            StateCode: "AS",
            CountryCode: "IN"
        },
        {
            StateName: "Bihar (BR)",
            StateCode: "BR",
            CountryCode: "IN"
        },
        {
            StateName: "Chandigarh (CH)",
            StateCode: "CH",
            CountryCode: "IN"
        },
        {
            StateName: "Chhattisgarh (CT)",
            StateCode: "CT",
            CountryCode: "IN"
        },
        {
            StateName: "Dadra and Nagar Haveli (DN)",
            StateCode: "DN",
            CountryCode: "IN"
        },
        {
            StateName: "Daman and Diu (DD)",
            StateCode: "DD",
            CountryCode: "IN"
        },
        {
            StateName: "Delhi (DL)",
            StateCode: "DL",
            CountryCode: "IN"
        },
        {
            StateName: "Goa (GA)",
            StateCode: "GA",
            CountryCode: "IN"
        },
        {
            StateName: "Gujarat (GJ)",
            StateCode: "GJ",
            CountryCode: "IN"
        },
        {
            StateName: "Haryana (HR)",
            StateCode: "HR",
            CountryCode: "IN"
        },
        {
            StateName: "Himachal Pradesh (HP)",
            StateCode: "HP",
            CountryCode: "IN"
        },
        {
            StateName: "Jammu and Kashmir (JK)",
            StateCode: "JK",
            CountryCode: "IN"
        },
        {
            StateName: "Jharkhand (JH)",
            StateCode: "JH",
            CountryCode: "IN"
        },
        {
            StateName: "Karnataka (KA)",
            StateCode: "KA",
            CountryCode: "IN"
        },
        {
            StateName: "Kerala (KL)",
            StateCode: "KL",
            CountryCode: "IN"
        },
        {
            StateName: "Lakshadweep (LD)",
            StateCode: "LD",
            CountryCode: "IN"
        },
        {
            StateName: "Madhya Pradesh (MP)",
            StateCode: "MP",
            CountryCode: "IN"
        },
        {
            StateName: "Maharashtra (MH)",
            StateCode: "MH",
            CountryCode: "IN"
        },
        {
            StateName: "Manipur (MN)",
            StateCode: "MN",
            CountryCode: "IN"
        },
        {
            StateName: "Meghalaya (ML)",
            StateCode: "ML",
            CountryCode: "IN"
        },
        {
            StateName: "Mizoram (MZ)",
            StateCode: "MZ",
            CountryCode: "IN"
        },
        {
            StateName: "Nagaland (NL)",
            StateCode: "NL",
            CountryCode: "IN"
        },
        {
            StateName: "Odisha (OR)",
            StateCode: "OR",
            CountryCode: "IN"
        },
        {
            StateName: "Puducherry (PY)",
            StateCode: "PY",
            CountryCode: "IN"
        },
        {
            StateName: "Punjab (PB)",
            StateCode: "PB",
            CountryCode: "IN"
        },
        {
            StateName: "Rajasthan (RJ)",
            StateCode: "RJ",
            CountryCode: "IN"
        },
        {
            StateName: "Sikkim (SK)",
            StateCode: "SK",
            CountryCode: "IN"
        },
        {
            StateName: "Tamil Nadu (TN)",
            StateCode: "TN",
            CountryCode: "IN"
        },
        {
            StateName: "Telangana (TG)",
            StateCode: "TG",
            CountryCode: "IN"
        },
        {
            StateName: "Tripura (TR)",
            StateCode: "TR",
            CountryCode: "IN"
        },
        {
            StateName: "Uttar Pradesh (UP)",
            StateCode: "UP",
            CountryCode: "IN"
        },
        {
            StateName: "Uttarakhand (UT*)",
            StateCode: "UT*",
            CountryCode: "IN"
        },
        {
            StateName: "West Bengal (WB)",
            StateCode: "WB",
            CountryCode: "IN"
        },
        {
            StateName: "Baranya (BA)",
            StateCode: "BA",
            CountryCode: "HU"
        },
        {
            StateName: "Borsod-Abaúj-Zemplén (BZ)",
            StateCode: "BZ",
            CountryCode: "HU"
        },
        {
            StateName: "Budapest (BU)",
            StateCode: "BU",
            CountryCode: "HU"
        },
        {
            StateName: "Bács-Kiskun (BK)",
            StateCode: "BK",
            CountryCode: "HU"
        },
        {
            StateName: "Békés (BE)",
            StateCode: "BE",
            CountryCode: "HU"
        },
        {
            StateName: "Békéscsaba (BC)",
            StateCode: "BC",
            CountryCode: "HU"
        },
        {
            StateName: "Csongrád (CS)",
            StateCode: "CS",
            CountryCode: "HU"
        },
        {
            StateName: "Debrecen (DE)",
            StateCode: "DE",
            CountryCode: "HU"
        },
        {
            StateName: "Dunaújváros (DU)",
            StateCode: "DU",
            CountryCode: "HU"
        },
        {
            StateName: "Eger (EG)",
            StateCode: "EG",
            CountryCode: "HU"
        },
        {
            StateName: "Fejér (FE)",
            StateCode: "FE",
            CountryCode: "HU"
        },
        {
            StateName: "Győr (GY)",
            StateCode: "GY",
            CountryCode: "HU"
        },
        {
            StateName: "Győr-Moson-Sopron (GS)",
            StateCode: "GS",
            CountryCode: "HU"
        },
        {
            StateName: "Hajdú-Bihar (HB)",
            StateCode: "HB",
            CountryCode: "HU"
        },
        {
            StateName: "Heves (HE)",
            StateCode: "HE",
            CountryCode: "HU"
        },
        {
            StateName: "Hódmezővásárhely (HV)",
            StateCode: "HV",
            CountryCode: "HU"
        },
        {
            StateName: "Jász-Nagykun-Szolnok (JN)",
            StateCode: "JN",
            CountryCode: "HU"
        },
        {
            StateName: "Kaposvár (KV)",
            StateCode: "KV",
            CountryCode: "HU"
        },
        {
            StateName: "Kecskemét (KM)",
            StateCode: "KM",
            CountryCode: "HU"
        },
        {
            StateName: "Komárom-Esztergom (KE)",
            StateCode: "KE",
            CountryCode: "HU"
        },
        {
            StateName: "Miskolc (MI)",
            StateCode: "MI",
            CountryCode: "HU"
        },
        {
            StateName: "Nagykanizsa (NK)",
            StateCode: "NK",
            CountryCode: "HU"
        },
        {
            StateName: "Nyíregyháza (NY)",
            StateCode: "NY",
            CountryCode: "HU"
        },
        {
            StateName: "Nógrád (NO)",
            StateCode: "NO",
            CountryCode: "HU"
        },
        {
            StateName: "Pest (PE)",
            StateCode: "PE",
            CountryCode: "HU"
        },
        {
            StateName: "Pécs (PS)",
            StateCode: "PS",
            CountryCode: "HU"
        },
        {
            StateName: "Salgótarján (ST)",
            StateCode: "ST",
            CountryCode: "HU"
        },
        {
            StateName: "Somogy (SO)",
            StateCode: "SO",
            CountryCode: "HU"
        },
        {
            StateName: "Sopron (SN)",
            StateCode: "SN",
            CountryCode: "HU"
        },
        {
            StateName: "Szabolcs-Szatmár-Bereg (SZ)",
            StateCode: "SZ",
            CountryCode: "HU"
        },
        {
            StateName: "Szeged (SD)",
            StateCode: "SD",
            CountryCode: "HU"
        },
        {
            StateName: "Szekszárd (SS)",
            StateCode: "SS",
            CountryCode: "HU"
        },
        {
            StateName: "Szolnok (SK)",
            StateCode: "SK",
            CountryCode: "HU"
        },
        {
            StateName: "Szombathely (SH)",
            StateCode: "SH",
            CountryCode: "HU"
        },
        {
            StateName: "Székesfehérvár (SF)",
            StateCode: "SF",
            CountryCode: "HU"
        },
        {
            StateName: "Tatabánya (TB)",
            StateCode: "TB",
            CountryCode: "HU"
        },
        {
            StateName: "Tolna (TO)",
            StateCode: "TO",
            CountryCode: "HU"
        },
        {
            StateName: "Vas (VA)",
            StateCode: "VA",
            CountryCode: "HU"
        },
        {
            StateName: "Veszprém (VE)",
            StateCode: "VE",
            CountryCode: "HU"
        },
        {
            StateName: "Veszprém (VM)",
            StateCode: "VM",
            CountryCode: "HU"
        },
        {
            StateName: "Zala (ZA)",
            StateCode: "ZA",
            CountryCode: "HU"
        },
        {
            StateName: "Zalaegerszeg (ZE)",
            StateCode: "ZE",
            CountryCode: "HU"
        },
        {
            StateName: "Érd (ER*)",
            StateCode: "ER*",
            CountryCode: "HU"
        },
        {
            StateName: "Austurland (7)",
            StateCode: "7",
            CountryCode: "IS"
        },
        {
            StateName: "Höfuðborgarsvæði (1)",
            StateCode: "1",
            CountryCode: "IS"
        },
        {
            StateName: "Norðurland eystra (6)",
            StateCode: "6",
            CountryCode: "IS"
        },
        {
            StateName: "Norðurland vestra (5)",
            StateCode: "5",
            CountryCode: "IS"
        },
        {
            StateName: "Suðurland (8)",
            StateCode: "8",
            CountryCode: "IS"
        },
        {
            StateName: "Suðurnes (2)",
            StateCode: "2",
            CountryCode: "IS"
        },
        {
            StateName: "Vestfirðir (4)",
            StateCode: "4",
            CountryCode: "IS"
        },
        {
            StateName: "Vesturland (3)",
            StateCode: "3",
            CountryCode: "IS"
        },
        {
            StateName: "Aceh (AC)",
            StateCode: "AC",
            CountryCode: "ID"
        },
        {
            StateName: "Bali (BA)",
            StateCode: "BA",
            CountryCode: "ID"
        },
        {
            StateName: "Banten (BT*)",
            StateCode: "BT*",
            CountryCode: "ID"
        },
        {
            StateName: "Bengkulu (BE)",
            StateCode: "BE",
            CountryCode: "ID"
        },
        {
            StateName: "Gorontalo (GO*)",
            StateCode: "GO*",
            CountryCode: "ID"
        },
        {
            StateName: "Jakarta Raya (JK)",
            StateCode: "JK",
            CountryCode: "ID"
        },
        {
            StateName: "Jambi (JA)",
            StateCode: "JA",
            CountryCode: "ID"
        },
        {
            StateName: "Jawa (JW*)",
            StateCode: "JW*",
            CountryCode: "ID"
        },
        {
            StateName: "Jawa Barat (JB)",
            StateCode: "JB",
            CountryCode: "ID"
        },
        {
            StateName: "Jawa Tengah (JT)",
            StateCode: "JT",
            CountryCode: "ID"
        },
        {
            StateName: "Jawa Timur (JI)",
            StateCode: "JI",
            CountryCode: "ID"
        },
        {
            StateName: "Kalimantan (KA*)",
            StateCode: "KA*",
            CountryCode: "ID"
        },
        {
            StateName: "Kalimantan Barat (KB)",
            StateCode: "KB",
            CountryCode: "ID"
        },
        {
            StateName: "Kalimantan Selatan (KS)",
            StateCode: "KS",
            CountryCode: "ID"
        },
        {
            StateName: "Kalimantan Tengah (KT)",
            StateCode: "KT",
            CountryCode: "ID"
        },
        {
            StateName: "Kalimantan Timur (KI)",
            StateCode: "KI",
            CountryCode: "ID"
        },
        {
            StateName: "Kalimantan Utara (KU)",
            StateCode: "KU",
            CountryCode: "ID"
        },
        {
            StateName: "Kepulauan Bangka Belitung (BB*)",
            StateCode: "BB*",
            CountryCode: "ID"
        },
        {
            StateName: "Kepulauan Riau (KR*)",
            StateCode: "KR*",
            CountryCode: "ID"
        },
        {
            StateName: "Lampung (LA)",
            StateCode: "LA",
            CountryCode: "ID"
        },
        {
            StateName: "Maluku (ML*)",
            StateCode: "ML*",
            CountryCode: "ID"
        },
        {
            StateName: "Maluku (MA)",
            StateCode: "MA",
            CountryCode: "ID"
        },
        {
            StateName: "Maluku Utara (MU*)",
            StateCode: "MU*",
            CountryCode: "ID"
        },
        {
            StateName: "Nusa Tenggara (NU*)",
            StateCode: "NU*",
            CountryCode: "ID"
        },
        {
            StateName: "Nusa Tenggara Barat (NB)",
            StateCode: "NB",
            CountryCode: "ID"
        },
        {
            StateName: "Nusa Tenggara Timur (NT)",
            StateCode: "NT",
            CountryCode: "ID"
        },
        {
            StateName: "Papua (PP*)",
            StateCode: "PP*",
            CountryCode: "ID"
        },
        {
            StateName: "Papua (PA*)",
            StateCode: "PA*",
            CountryCode: "ID"
        },
        {
            StateName: "Papua Barat (PB)",
            StateCode: "PB",
            CountryCode: "ID"
        },
        {
            StateName: "Riau (RI)",
            StateCode: "RI",
            CountryCode: "ID"
        },
        {
            StateName: "Sulawesi (SL*)",
            StateCode: "SL*",
            CountryCode: "ID"
        },
        {
            StateName: "Sulawesi Barat (SR*)",
            StateCode: "SR*",
            CountryCode: "ID"
        },
        {
            StateName: "Sulawesi Selatan (SN)",
            StateCode: "SN",
            CountryCode: "ID"
        },
        {
            StateName: "Sulawesi Tengah (ST)",
            StateCode: "ST",
            CountryCode: "ID"
        },
        {
            StateName: "Sulawesi Tenggara (SG)",
            StateCode: "SG",
            CountryCode: "ID"
        },
        {
            StateName: "Sulawesi Utara (SA)",
            StateCode: "SA",
            CountryCode: "ID"
        },
        {
            StateName: "Sumatera (SM*)",
            StateCode: "SM*",
            CountryCode: "ID"
        },
        {
            StateName: "Sumatera Barat (SB)",
            StateCode: "SB",
            CountryCode: "ID"
        },
        {
            StateName: "Sumatera Selatan (SS)",
            StateCode: "SS",
            CountryCode: "ID"
        },
        {
            StateName: "Sumatera Utara (SU)",
            StateCode: "SU",
            CountryCode: "ID"
        },
        {
            StateName: "Yogyakarta (YO)",
            StateCode: "YO",
            CountryCode: "ID"
        },
        {
            StateName: "Alborz (32)",
            StateCode: "32",
            CountryCode: "IR"
        },
        {
            StateName: "Ardabīl (3)",
            StateCode: "3",
            CountryCode: "IR"
        },
        {
            StateName: "Būshehr (6)",
            StateCode: "6",
            CountryCode: "IR"
        },
        {
            StateName: "Chahār Maḩāl va Bakhtīārī (8)",
            StateCode: "8",
            CountryCode: "IR"
        },
        {
            StateName: "Eşfahān (4)",
            StateCode: "4",
            CountryCode: "IR"
        },
        {
            StateName: "Fārs (14)",
            StateCode: "14",
            CountryCode: "IR"
        },
        {
            StateName: "Golestān (27)",
            StateCode: "27",
            CountryCode: "IR"
        },
        {
            StateName: "Gīlān (19)",
            StateCode: "19",
            CountryCode: "IR"
        },
        {
            StateName: "Hamadān (24)",
            StateCode: "24",
            CountryCode: "IR"
        },
        {
            StateName: "Hormozgān (23)",
            StateCode: "23",
            CountryCode: "IR"
        },
        {
            StateName: "Kermān (15)",
            StateCode: "15",
            CountryCode: "IR"
        },
        {
            StateName: "Kermānshāh (17)",
            StateCode: "17",
            CountryCode: "IR"
        },
        {
            StateName: "Khorāsān-e Jonūbī (29)",
            StateCode: "29",
            CountryCode: "IR"
        },
        {
            StateName: "Khorāsān-e Raẕavī (30)",
            StateCode: "30",
            CountryCode: "IR"
        },
        {
            StateName: "Khorāsān-e Shomālī (31)",
            StateCode: "31",
            CountryCode: "IR"
        },
        {
            StateName: "Khūzestān (10)",
            StateCode: "10",
            CountryCode: "IR"
        },
        {
            StateName: "Kohgīlūyeh va Bowyer Aḩmad (18)",
            StateCode: "18",
            CountryCode: "IR"
        },
        {
            StateName: "Kordestān (16)",
            StateCode: "16",
            CountryCode: "IR"
        },
        {
            StateName: "Lorestān (20)",
            StateCode: "20",
            CountryCode: "IR"
        },
        {
            StateName: "Markazī (22)",
            StateCode: "22",
            CountryCode: "IR"
        },
        {
            StateName: "Māzandarān (21)",
            StateCode: "21",
            CountryCode: "IR"
        },
        {
            StateName: "Qazvīn (28)",
            StateCode: "28",
            CountryCode: "IR"
        },
        {
            StateName: "Qom (26*)",
            StateCode: "26*",
            CountryCode: "IR"
        },
        {
            StateName: "Semnān (12)",
            StateCode: "12",
            CountryCode: "IR"
        },
        {
            StateName: "Sīstān va Balūchestān (13)",
            StateCode: "13",
            CountryCode: "IR"
        },
        {
            StateName: "Tehrān (7)",
            StateCode: "7",
            CountryCode: "IR"
        },
        {
            StateName: "Yazd (25)",
            StateCode: "25",
            CountryCode: "IR"
        },
        {
            StateName: "Zanjān (11)",
            StateCode: "11",
            CountryCode: "IR"
        },
        {
            StateName: "Āz̄ārbāyjān-e Ghārbī (2)",
            StateCode: "2",
            CountryCode: "IR"
        },
        {
            StateName: "Āz̄ārbāyjān-e Shārqī (1)",
            StateCode: "1",
            CountryCode: "IR"
        },
        {
            StateName: "Īlām (5)",
            StateCode: "5",
            CountryCode: "IR"
        },
        {
            StateName: "Al Anbār (AN)",
            StateCode: "AN",
            CountryCode: "IQ"
        },
        {
            StateName: "Al Başrah (BA)",
            StateCode: "BA",
            CountryCode: "IQ"
        },
        {
            StateName: "Al Muthanná (MU)",
            StateCode: "MU",
            CountryCode: "IQ"
        },
        {
            StateName: "Al Qādisīyah (QA)",
            StateCode: "QA",
            CountryCode: "IQ"
        },
        {
            StateName: "An Najaf (NA)",
            StateCode: "NA",
            CountryCode: "IQ"
        },
        {
            StateName: "Arbīl (AR)",
            StateCode: "AR",
            CountryCode: "IQ"
        },
        {
            StateName: "As Sulaymānīyah (SU)",
            StateCode: "SU",
            CountryCode: "IQ"
        },
        {
            StateName: "Baghdād (BG)",
            StateCode: "BG",
            CountryCode: "IQ"
        },
        {
            StateName: "Bābil (BB)",
            StateCode: "BB",
            CountryCode: "IQ"
        },
        {
            StateName: "Dahūk (DA)",
            StateCode: "DA",
            CountryCode: "IQ"
        },
        {
            StateName: "Dhī Qār (DQ)",
            StateCode: "DQ",
            CountryCode: "IQ"
        },
        {
            StateName: "Dihok (DA)",
            StateCode: "DA",
            CountryCode: "IQ"
        },
        {
            StateName: "Diyālá (DI)",
            StateCode: "DI",
            CountryCode: "IQ"
        },
        {
            StateName: "Hewlêr (AR)",
            StateCode: "AR",
            CountryCode: "IQ"
        },
        {
            StateName: "Karbalā’ (KA)",
            StateCode: "KA",
            CountryCode: "IQ"
        },
        {
            StateName: "Kirkūk (KI)",
            StateCode: "KI",
            CountryCode: "IQ"
        },
        {
            StateName: "Maysān (MA)",
            StateCode: "MA",
            CountryCode: "IQ"
        },
        {
            StateName: "Nīnawá (NI)",
            StateCode: "NI",
            CountryCode: "IQ"
        },
        {
            StateName: "Slêmanî (SU)",
            StateCode: "SU",
            CountryCode: "IQ"
        },
        {
            StateName: "Wāsiţ (WA)",
            StateCode: "WA",
            CountryCode: "IQ"
        },
        {
            StateName: "Şalāḩ ad Dīn (SD)",
            StateCode: "SD",
            CountryCode: "IQ"
        },
        {
            StateName: "An Cabhán (CN)",
            StateCode: "CN",
            CountryCode: "IE"
        },
        {
            StateName: "An Clár (CE)",
            StateCode: "CE",
            CountryCode: "IE"
        },
        {
            StateName: "An Iarmhí (WH)",
            StateCode: "WH",
            CountryCode: "IE"
        },
        {
            StateName: "An Longfort (LD)",
            StateCode: "LD",
            CountryCode: "IE"
        },
        {
            StateName: "An Mhumhain (M)",
            StateCode: "M",
            CountryCode: "IE"
        },
        {
            StateName: "An Mhí (MH)",
            StateCode: "MH",
            CountryCode: "IE"
        },
        {
            StateName: "Baile Átha Cliath (D)",
            StateCode: "D",
            CountryCode: "IE"
        },
        {
            StateName: "Carlow (CW)",
            StateCode: "CW",
            CountryCode: "IE"
        },
        {
            StateName: "Cavan (CN)",
            StateCode: "CN",
            CountryCode: "IE"
        },
        {
            StateName: "Ceatharlach (CW)",
            StateCode: "CW",
            CountryCode: "IE"
        },
        {
            StateName: "Ciarraí (KY)",
            StateCode: "KY",
            CountryCode: "IE"
        },
        {
            StateName: "Cill Chainnigh (KK)",
            StateCode: "KK",
            CountryCode: "IE"
        },
        {
            StateName: "Cill Dara (KE)",
            StateCode: "KE",
            CountryCode: "IE"
        },
        {
            StateName: "Cill Mhantáin (WW)",
            StateCode: "WW",
            CountryCode: "IE"
        },
        {
            StateName: "Clare (CE)",
            StateCode: "CE",
            CountryCode: "IE"
        },
        {
            StateName: "Connacht (C)",
            StateCode: "C",
            CountryCode: "IE"
        },
        {
            StateName: "Connaught (C)",
            StateCode: "C",
            CountryCode: "IE"
        },
        {
            StateName: "Corcaigh (CO)",
            StateCode: "CO",
            CountryCode: "IE"
        },
        {
            StateName: "Cork (CO)",
            StateCode: "CO",
            CountryCode: "IE"
        },
        {
            StateName: "Donegal (DL)",
            StateCode: "DL",
            CountryCode: "IE"
        },
        {
            StateName: "Dublin (D)",
            StateCode: "D",
            CountryCode: "IE"
        },
        {
            StateName: "Dún na nGall (DL)",
            StateCode: "DL",
            CountryCode: "IE"
        },
        {
            StateName: "Gaillimh (G)",
            StateCode: "G",
            CountryCode: "IE"
        },
        {
            StateName: "Galway (G)",
            StateCode: "G",
            CountryCode: "IE"
        },
        {
            StateName: "Kerry (KY)",
            StateCode: "KY",
            CountryCode: "IE"
        },
        {
            StateName: "Kildare (KE)",
            StateCode: "KE",
            CountryCode: "IE"
        },
        {
            StateName: "Kilkenny (KK)",
            StateCode: "KK",
            CountryCode: "IE"
        },
        {
            StateName: "Laighin (L)",
            StateCode: "L",
            CountryCode: "IE"
        },
        {
            StateName: "Laois (LS)",
            StateCode: "LS",
            CountryCode: "IE"
        },
        {
            StateName: "Leinster (L)",
            StateCode: "L",
            CountryCode: "IE"
        },
        {
            StateName: "Leitrim (LM)",
            StateCode: "LM",
            CountryCode: "IE"
        },
        {
            StateName: "Liatroim (LM)",
            StateCode: "LM",
            CountryCode: "IE"
        },
        {
            StateName: "Limerick (LK)",
            StateCode: "LK",
            CountryCode: "IE"
        },
        {
            StateName: "Loch Garman (WX)",
            StateCode: "WX",
            CountryCode: "IE"
        },
        {
            StateName: "Longford (LD)",
            StateCode: "LD",
            CountryCode: "IE"
        },
        {
            StateName: "Louth (LH)",
            StateCode: "LH",
            CountryCode: "IE"
        },
        {
            StateName: "Luimneach (LK)",
            StateCode: "LK",
            CountryCode: "IE"
        },
        {
            StateName: "Lú (LH)",
            StateCode: "LH",
            CountryCode: "IE"
        },
        {
            StateName: "Maigh Eo (MO)",
            StateCode: "MO",
            CountryCode: "IE"
        },
        {
            StateName: "Mayo (MO)",
            StateCode: "MO",
            CountryCode: "IE"
        },
        {
            StateName: "Meath (MH)",
            StateCode: "MH",
            CountryCode: "IE"
        },
        {
            StateName: "Monaghan (MN)",
            StateCode: "MN",
            CountryCode: "IE"
        },
        {
            StateName: "Muineachán (MN)",
            StateCode: "MN",
            CountryCode: "IE"
        },
        {
            StateName: "Munster (M)",
            StateCode: "M",
            CountryCode: "IE"
        },
        {
            StateName: "Offaly (OY)",
            StateCode: "OY",
            CountryCode: "IE"
        },
        {
            StateName: "Port Láirge (WD)",
            StateCode: "WD",
            CountryCode: "IE"
        },
        {
            StateName: "Ros Comáin (RN)",
            StateCode: "RN",
            CountryCode: "IE"
        },
        {
            StateName: "Roscommon (RN)",
            StateCode: "RN",
            CountryCode: "IE"
        },
        {
            StateName: "Sligeach (SO)",
            StateCode: "SO",
            CountryCode: "IE"
        },
        {
            StateName: "Sligo (SO)",
            StateCode: "SO",
            CountryCode: "IE"
        },
        {
            StateName: "Tiobraid Árann (TA)",
            StateCode: "TA",
            CountryCode: "IE"
        },
        {
            StateName: "Tipperary (TA)",
            StateCode: "TA",
            CountryCode: "IE"
        },
        {
            StateName: "Ulaidh (U)",
            StateCode: "U",
            CountryCode: "IE"
        },
        {
            StateName: "Ulster (U)",
            StateCode: "U",
            CountryCode: "IE"
        },
        {
            StateName: "Uíbh Fhailí (OY)",
            StateCode: "OY",
            CountryCode: "IE"
        },
        {
            StateName: "Waterford (WD)",
            StateCode: "WD",
            CountryCode: "IE"
        },
        {
            StateName: "Westmeath (WH)",
            StateCode: "WH",
            CountryCode: "IE"
        },
        {
            StateName: "Wexford (WX)",
            StateCode: "WX",
            CountryCode: "IE"
        },
        {
            StateName: "Wicklow (WW)",
            StateCode: "WW",
            CountryCode: "IE"
        },
        {
            StateName: "Al Awsaţ (M)",
            StateCode: "M",
            CountryCode: "IL"
        },
        {
            StateName: "Al Janūbī (D)",
            StateCode: "D",
            CountryCode: "IL"
        },
        {
            StateName: "Al Quds (JM)",
            StateCode: "JM",
            CountryCode: "IL"
        },
        {
            StateName: "Ash Shamālī (Z)",
            StateCode: "Z",
            CountryCode: "IL"
        },
        {
            StateName: "HaDarom (D)",
            StateCode: "D",
            CountryCode: "IL"
        },
        {
            StateName: "HaMerkaz (M)",
            StateCode: "M",
            CountryCode: "IL"
        },
        {
            StateName: "HaTsafon (Z)",
            StateCode: "Z",
            CountryCode: "IL"
        },
        {
            StateName: "H̱efa (HA)",
            StateCode: "HA",
            CountryCode: "IL"
        },
        {
            StateName: "Tall Abīb (TA)",
            StateCode: "TA",
            CountryCode: "IL"
        },
        {
            StateName: "Tel Aviv (TA)",
            StateCode: "TA",
            CountryCode: "IL"
        },
        {
            StateName: "Yerushalayim (JM)",
            StateCode: "JM",
            CountryCode: "IL"
        },
        {
            StateName: "Ḩayfā (HA)",
            StateCode: "HA",
            CountryCode: "IL"
        },
        {
            StateName: "Abruzzo (65)",
            StateCode: "65",
            CountryCode: "IT"
        },
        {
            StateName: "Agrigento (AG)",
            StateCode: "AG",
            CountryCode: "IT"
        },
        {
            StateName: "Alessandria (AL)",
            StateCode: "AL",
            CountryCode: "IT"
        },
        {
            StateName: "Ancona (AN)",
            StateCode: "AN",
            CountryCode: "IT"
        },
        {
            StateName: "Aosta (AO)",
            StateCode: "AO",
            CountryCode: "IT"
        },
        {
            StateName: "Aoste (AO)",
            StateCode: "AO",
            CountryCode: "IT"
        },
        {
            StateName: "Arezzo (AR)",
            StateCode: "AR",
            CountryCode: "IT"
        },
        {
            StateName: "Ascoli Piceno (AP)",
            StateCode: "AP",
            CountryCode: "IT"
        },
        {
            StateName: "Asti (AT)",
            StateCode: "AT",
            CountryCode: "IT"
        },
        {
            StateName: "Avellino (AV)",
            StateCode: "AV",
            CountryCode: "IT"
        },
        {
            StateName: "Bari (BA)",
            StateCode: "BA",
            CountryCode: "IT"
        },
        {
            StateName: "Barletta-Andria-Trani (BT)",
            StateCode: "BT",
            CountryCode: "IT"
        },
        {
            StateName: "Basilicata (77)",
            StateCode: "77",
            CountryCode: "IT"
        },
        {
            StateName: "Belluno (BL)",
            StateCode: "BL",
            CountryCode: "IT"
        },
        {
            StateName: "Benevento (BN)",
            StateCode: "BN",
            CountryCode: "IT"
        },
        {
            StateName: "Bergamo (BG)",
            StateCode: "BG",
            CountryCode: "IT"
        },
        {
            StateName: "Biella (BI)",
            StateCode: "BI",
            CountryCode: "IT"
        },
        {
            StateName: "Bologna (BO)",
            StateCode: "BO",
            CountryCode: "IT"
        },
        {
            StateName: "Bolzano (BZ)",
            StateCode: "BZ",
            CountryCode: "IT"
        },
        {
            StateName: "Bozen (BZ)",
            StateCode: "BZ",
            CountryCode: "IT"
        },
        {
            StateName: "Brescia (BS)",
            StateCode: "BS",
            CountryCode: "IT"
        },
        {
            StateName: "Brindisi (BR)",
            StateCode: "BR",
            CountryCode: "IT"
        },
        {
            StateName: "Cagliari (CA)",
            StateCode: "CA",
            CountryCode: "IT"
        },
        {
            StateName: "Calabria (78)",
            StateCode: "78",
            CountryCode: "IT"
        },
        {
            StateName: "Caltanissetta (CL)",
            StateCode: "CL",
            CountryCode: "IT"
        },
        {
            StateName: "Campania (72)",
            StateCode: "72",
            CountryCode: "IT"
        },
        {
            StateName: "Campobasso (CB)",
            StateCode: "CB",
            CountryCode: "IT"
        },
        {
            StateName: "Caserta (CE)",
            StateCode: "CE",
            CountryCode: "IT"
        },
        {
            StateName: "Catania (CT)",
            StateCode: "CT",
            CountryCode: "IT"
        },
        {
            StateName: "Catanzaro (CZ)",
            StateCode: "CZ",
            CountryCode: "IT"
        },
        {
            StateName: "Chieti (CH)",
            StateCode: "CH",
            CountryCode: "IT"
        },
        {
            StateName: "Como (CO)",
            StateCode: "CO",
            CountryCode: "IT"
        },
        {
            StateName: "Cosenza (CS)",
            StateCode: "CS",
            CountryCode: "IT"
        },
        {
            StateName: "Cremona (CR)",
            StateCode: "CR",
            CountryCode: "IT"
        },
        {
            StateName: "Crotone (KR)",
            StateCode: "KR",
            CountryCode: "IT"
        },
        {
            StateName: "Cuneo (CN)",
            StateCode: "CN",
            CountryCode: "IT"
        },
        {
            StateName: "Emilia-Romagna (45)",
            StateCode: "45",
            CountryCode: "IT"
        },
        {
            StateName: "Enna (EN)",
            StateCode: "EN",
            CountryCode: "IT"
        },
        {
            StateName: "Fermo (FM)",
            StateCode: "FM",
            CountryCode: "IT"
        },
        {
            StateName: "Ferrara (FE)",
            StateCode: "FE",
            CountryCode: "IT"
        },
        {
            StateName: "Firenze (FI)",
            StateCode: "FI",
            CountryCode: "IT"
        },
        {
            StateName: "Foggia (FG)",
            StateCode: "FG",
            CountryCode: "IT"
        },
        {
            StateName: "Forlì-Cesena (FC)",
            StateCode: "FC",
            CountryCode: "IT"
        },
        {
            StateName: "Friuli-Venezia Giulia (36)",
            StateCode: "36",
            CountryCode: "IT"
        },
        {
            StateName: "Frosinone (FR)",
            StateCode: "FR",
            CountryCode: "IT"
        },
        {
            StateName: "Genova (GE)",
            StateCode: "GE",
            CountryCode: "IT"
        },
        {
            StateName: "Grosseto (GR)",
            StateCode: "GR",
            CountryCode: "IT"
        },
        {
            StateName: "Imperia (IM)",
            StateCode: "IM",
            CountryCode: "IT"
        },
        {
            StateName: "Isernia (IS)",
            StateCode: "IS",
            CountryCode: "IT"
        },
        {
            StateName: "L'Aquila (AQ)",
            StateCode: "AQ",
            CountryCode: "IT"
        },
        {
            StateName: "La Spezia (SP)",
            StateCode: "SP",
            CountryCode: "IT"
        },
        {
            StateName: "Latina (LT)",
            StateCode: "LT",
            CountryCode: "IT"
        },
        {
            StateName: "Lazio (62)",
            StateCode: "62",
            CountryCode: "IT"
        },
        {
            StateName: "Lecce (LE)",
            StateCode: "LE",
            CountryCode: "IT"
        },
        {
            StateName: "Lecco (LC)",
            StateCode: "LC",
            CountryCode: "IT"
        },
        {
            StateName: "Liguria (42)",
            StateCode: "42",
            CountryCode: "IT"
        },
        {
            StateName: "Livorno (LI)",
            StateCode: "LI",
            CountryCode: "IT"
        },
        {
            StateName: "Lodi (LO)",
            StateCode: "LO",
            CountryCode: "IT"
        },
        {
            StateName: "Lombardia (25)",
            StateCode: "25",
            CountryCode: "IT"
        },
        {
            StateName: "Lucca (LU)",
            StateCode: "LU",
            CountryCode: "IT"
        },
        {
            StateName: "Macerata (MC)",
            StateCode: "MC",
            CountryCode: "IT"
        },
        {
            StateName: "Mantova (MN)",
            StateCode: "MN",
            CountryCode: "IT"
        },
        {
            StateName: "Marche (57)",
            StateCode: "57",
            CountryCode: "IT"
        },
        {
            StateName: "Massa-Carrara (MS)",
            StateCode: "MS",
            CountryCode: "IT"
        },
        {
            StateName: "Matera (MT)",
            StateCode: "MT",
            CountryCode: "IT"
        },
        {
            StateName: "Messina (ME)",
            StateCode: "ME",
            CountryCode: "IT"
        },
        {
            StateName: "Milano (MI)",
            StateCode: "MI",
            CountryCode: "IT"
        },
        {
            StateName: "Modena (MO)",
            StateCode: "MO",
            CountryCode: "IT"
        },
        {
            StateName: "Molise (67)",
            StateCode: "67",
            CountryCode: "IT"
        },
        {
            StateName: "Monza e Brianza (MB)",
            StateCode: "MB",
            CountryCode: "IT"
        },
        {
            StateName: "Napoli (NA)",
            StateCode: "NA",
            CountryCode: "IT"
        },
        {
            StateName: "Novara (NO)",
            StateCode: "NO",
            CountryCode: "IT"
        },
        {
            StateName: "Nuoro (NU)",
            StateCode: "NU",
            CountryCode: "IT"
        },
        {
            StateName: "Oristano (OR)",
            StateCode: "OR",
            CountryCode: "IT"
        },
        {
            StateName: "Padova (PD)",
            StateCode: "PD",
            CountryCode: "IT"
        },
        {
            StateName: "Palermo (PA)",
            StateCode: "PA",
            CountryCode: "IT"
        },
        {
            StateName: "Parma (PR)",
            StateCode: "PR",
            CountryCode: "IT"
        },
        {
            StateName: "Pavia (PV)",
            StateCode: "PV",
            CountryCode: "IT"
        },
        {
            StateName: "Perugia (PG)",
            StateCode: "PG",
            CountryCode: "IT"
        },
        {
            StateName: "Pesaro e Urbino (PU)",
            StateCode: "PU",
            CountryCode: "IT"
        },
        {
            StateName: "Pescara (PE)",
            StateCode: "PE",
            CountryCode: "IT"
        },
        {
            StateName: "Piacenza (PC)",
            StateCode: "PC",
            CountryCode: "IT"
        },
        {
            StateName: "Piemonte (21)",
            StateCode: "21",
            CountryCode: "IT"
        },
        {
            StateName: "Pisa (PI)",
            StateCode: "PI",
            CountryCode: "IT"
        },
        {
            StateName: "Pistoia (PT)",
            StateCode: "PT",
            CountryCode: "IT"
        },
        {
            StateName: "Potenza (PZ)",
            StateCode: "PZ",
            CountryCode: "IT"
        },
        {
            StateName: "Prato (PO)",
            StateCode: "PO",
            CountryCode: "IT"
        },
        {
            StateName: "Puglia (75)",
            StateCode: "75",
            CountryCode: "IT"
        },
        {
            StateName: "Ragusa (RG)",
            StateCode: "RG",
            CountryCode: "IT"
        },
        {
            StateName: "Ravenna (RA)",
            StateCode: "RA",
            CountryCode: "IT"
        },
        {
            StateName: "Reggio Calabria (RC)",
            StateCode: "RC",
            CountryCode: "IT"
        },
        {
            StateName: "Reggio Emilia (RE)",
            StateCode: "RE",
            CountryCode: "IT"
        },
        {
            StateName: "Rieti (RI)",
            StateCode: "RI",
            CountryCode: "IT"
        },
        {
            StateName: "Rimini (RN)",
            StateCode: "RN",
            CountryCode: "IT"
        },
        {
            StateName: "Roma (RM)",
            StateCode: "RM",
            CountryCode: "IT"
        },
        {
            StateName: "Rovigo (RO)",
            StateCode: "RO",
            CountryCode: "IT"
        },
        {
            StateName: "Salerno (SA)",
            StateCode: "SA",
            CountryCode: "IT"
        },
        {
            StateName: "Sardegna (88)",
            StateCode: "88",
            CountryCode: "IT"
        },
        {
            StateName: "Sassari (SS)",
            StateCode: "SS",
            CountryCode: "IT"
        },
        {
            StateName: "Savona (SV)",
            StateCode: "SV",
            CountryCode: "IT"
        },
        {
            StateName: "Sicilia (82)",
            StateCode: "82",
            CountryCode: "IT"
        },
        {
            StateName: "Siena (SI)",
            StateCode: "SI",
            CountryCode: "IT"
        },
        {
            StateName: "Siracusa (SR)",
            StateCode: "SR",
            CountryCode: "IT"
        },
        {
            StateName: "Sondrio (SO)",
            StateCode: "SO",
            CountryCode: "IT"
        },
        {
            StateName: "Sud Sardegna (SD)",
            StateCode: "SD",
            CountryCode: "IT"
        },
        {
            StateName: "Taranto (TA)",
            StateCode: "TA",
            CountryCode: "IT"
        },
        {
            StateName: "Teramo (TE)",
            StateCode: "TE",
            CountryCode: "IT"
        },
        {
            StateName: "Terni (TR)",
            StateCode: "TR",
            CountryCode: "IT"
        },
        {
            StateName: "Torino (TO)",
            StateCode: "TO",
            CountryCode: "IT"
        },
        {
            StateName: "Toscana (52)",
            StateCode: "52",
            CountryCode: "IT"
        },
        {
            StateName: "Trapani (TP)",
            StateCode: "TP",
            CountryCode: "IT"
        },
        {
            StateName: "Trentino-Alto Adige (32)",
            StateCode: "32",
            CountryCode: "IT"
        },
        {
            StateName: "Trentino-Südtirol (32)",
            StateCode: "32",
            CountryCode: "IT"
        },
        {
            StateName: "Trento (TN)",
            StateCode: "TN",
            CountryCode: "IT"
        },
        {
            StateName: "Treviso (TV)",
            StateCode: "TV",
            CountryCode: "IT"
        },
        {
            StateName: "Umbria (55)",
            StateCode: "55",
            CountryCode: "IT"
        },
        {
            StateName: "Val d'Aoste (23)",
            StateCode: "23",
            CountryCode: "IT"
        },
        {
            StateName: "Valle d'Aosta (23)",
            StateCode: "23",
            CountryCode: "IT"
        },
        {
            StateName: "Varese (VA)",
            StateCode: "VA",
            CountryCode: "IT"
        },
        {
            StateName: "Veneto (34)",
            StateCode: "34",
            CountryCode: "IT"
        },
        {
            StateName: "Venezia (VE)",
            StateCode: "VE",
            CountryCode: "IT"
        },
        {
            StateName: "Verbano-Cusio-Ossola (VB)",
            StateCode: "VB",
            CountryCode: "IT"
        },
        {
            StateName: "Vercelli (VC)",
            StateCode: "VC",
            CountryCode: "IT"
        },
        {
            StateName: "Verona (VR)",
            StateCode: "VR",
            CountryCode: "IT"
        },
        {
            StateName: "Vibo Valentia (VV)",
            StateCode: "VV",
            CountryCode: "IT"
        },
        {
            StateName: "Vicenza (VI)",
            StateCode: "VI",
            CountryCode: "IT"
        },
        {
            StateName: "Viterbo (VT)",
            StateCode: "VT",
            CountryCode: "IT"
        },
        {
            StateName: "Clarendon (13)",
            StateCode: "13",
            CountryCode: "JM"
        },
        {
            StateName: "Hanover (9)",
            StateCode: "9",
            CountryCode: "JM"
        },
        {
            StateName: "Kingston (1)",
            StateCode: "1",
            CountryCode: "JM"
        },
        {
            StateName: "Manchester (12)",
            StateCode: "12",
            CountryCode: "JM"
        },
        {
            StateName: "Portland (4)",
            StateCode: "4",
            CountryCode: "JM"
        },
        {
            StateName: "Saint Andrew (2)",
            StateCode: "2",
            CountryCode: "JM"
        },
        {
            StateName: "Saint Ann (6)",
            StateCode: "6",
            CountryCode: "JM"
        },
        {
            StateName: "Saint Catherine (14)",
            StateCode: "14",
            CountryCode: "JM"
        },
        {
            StateName: "Saint Elizabeth (11)",
            StateCode: "11",
            CountryCode: "JM"
        },
        {
            StateName: "Saint James (8)",
            StateCode: "8",
            CountryCode: "JM"
        },
        {
            StateName: "Saint Mary (5)",
            StateCode: "5",
            CountryCode: "JM"
        },
        {
            StateName: "Saint Thomas (3)",
            StateCode: "3",
            CountryCode: "JM"
        },
        {
            StateName: "Trelawny (7)",
            StateCode: "7",
            CountryCode: "JM"
        },
        {
            StateName: "Westmoreland (10)",
            StateCode: "10",
            CountryCode: "JM"
        },
        {
            StateName: "Aichi (23)",
            StateCode: "23",
            CountryCode: "JP"
        },
        {
            StateName: "Aiti (23)",
            StateCode: "23",
            CountryCode: "JP"
        },
        {
            StateName: "Akita (5)",
            StateCode: "5",
            CountryCode: "JP"
        },
        {
            StateName: "Aomori (2)",
            StateCode: "2",
            CountryCode: "JP"
        },
        {
            StateName: "Chiba (12)",
            StateCode: "12",
            CountryCode: "JP"
        },
        {
            StateName: "Ehime (38)",
            StateCode: "38",
            CountryCode: "JP"
        },
        {
            StateName: "Fukui (18)",
            StateCode: "18",
            CountryCode: "JP"
        },
        {
            StateName: "Fukuoka (40)",
            StateCode: "40",
            CountryCode: "JP"
        },
        {
            StateName: "Fukushima (7)",
            StateCode: "7",
            CountryCode: "JP"
        },
        {
            StateName: "Gifu (21)",
            StateCode: "21",
            CountryCode: "JP"
        },
        {
            StateName: "Gihu (21)",
            StateCode: "21",
            CountryCode: "JP"
        },
        {
            StateName: "Gunma (10)",
            StateCode: "10",
            CountryCode: "JP"
        },
        {
            StateName: "Hiroshima (34)",
            StateCode: "34",
            CountryCode: "JP"
        },
        {
            StateName: "Hirosima (34)",
            StateCode: "34",
            CountryCode: "JP"
        },
        {
            StateName: "Hokkaido (1)",
            StateCode: "1",
            CountryCode: "JP"
        },
        {
            StateName: "Hokkaidô (1)",
            StateCode: "1",
            CountryCode: "JP"
        },
        {
            StateName: "Hukui (18)",
            StateCode: "18",
            CountryCode: "JP"
        },
        {
            StateName: "Hukuoka (40)",
            StateCode: "40",
            CountryCode: "JP"
        },
        {
            StateName: "Hukusima (7)",
            StateCode: "7",
            CountryCode: "JP"
        },
        {
            StateName: "Hyogo (28)",
            StateCode: "28",
            CountryCode: "JP"
        },
        {
            StateName: "Hyôgo (28)",
            StateCode: "28",
            CountryCode: "JP"
        },
        {
            StateName: "Ibaraki (8)",
            StateCode: "8",
            CountryCode: "JP"
        },
        {
            StateName: "Ishikawa (17)",
            StateCode: "17",
            CountryCode: "JP"
        },
        {
            StateName: "Isikawa (17)",
            StateCode: "17",
            CountryCode: "JP"
        },
        {
            StateName: "Iwate (3)",
            StateCode: "3",
            CountryCode: "JP"
        },
        {
            StateName: "Kagawa (37)",
            StateCode: "37",
            CountryCode: "JP"
        },
        {
            StateName: "Kagoshima (46)",
            StateCode: "46",
            CountryCode: "JP"
        },
        {
            StateName: "Kagosima (46)",
            StateCode: "46",
            CountryCode: "JP"
        },
        {
            StateName: "Kanagawa (14)",
            StateCode: "14",
            CountryCode: "JP"
        },
        {
            StateName: "Kochi (39)",
            StateCode: "39",
            CountryCode: "JP"
        },
        {
            StateName: "Kumamoto (43)",
            StateCode: "43",
            CountryCode: "JP"
        },
        {
            StateName: "Kyoto (26)",
            StateCode: "26",
            CountryCode: "JP"
        },
        {
            StateName: "Kyôto (26)",
            StateCode: "26",
            CountryCode: "JP"
        },
        {
            StateName: "Kôti (39)",
            StateCode: "39",
            CountryCode: "JP"
        },
        {
            StateName: "Mie (24)",
            StateCode: "24",
            CountryCode: "JP"
        },
        {
            StateName: "Miyagi (4)",
            StateCode: "4",
            CountryCode: "JP"
        },
        {
            StateName: "Miyazaki (45)",
            StateCode: "45",
            CountryCode: "JP"
        },
        {
            StateName: "Nagano (20)",
            StateCode: "20",
            CountryCode: "JP"
        },
        {
            StateName: "Nagasaki (42)",
            StateCode: "42",
            CountryCode: "JP"
        },
        {
            StateName: "Nara (29)",
            StateCode: "29",
            CountryCode: "JP"
        },
        {
            StateName: "Niigata (15)",
            StateCode: "15",
            CountryCode: "JP"
        },
        {
            StateName: "Oita (44)",
            StateCode: "44",
            CountryCode: "JP"
        },
        {
            StateName: "Okayama (33)",
            StateCode: "33",
            CountryCode: "JP"
        },
        {
            StateName: "Okinawa (47)",
            StateCode: "47",
            CountryCode: "JP"
        },
        {
            StateName: "Osaka (27)",
            StateCode: "27",
            CountryCode: "JP"
        },
        {
            StateName: "Saga (41)",
            StateCode: "41",
            CountryCode: "JP"
        },
        {
            StateName: "Saitama (11)",
            StateCode: "11",
            CountryCode: "JP"
        },
        {
            StateName: "Shiga (25)",
            StateCode: "25",
            CountryCode: "JP"
        },
        {
            StateName: "Shimane (32)",
            StateCode: "32",
            CountryCode: "JP"
        },
        {
            StateName: "Shizuoka (22)",
            StateCode: "22",
            CountryCode: "JP"
        },
        {
            StateName: "Siga (25)",
            StateCode: "25",
            CountryCode: "JP"
        },
        {
            StateName: "Simane (32)",
            StateCode: "32",
            CountryCode: "JP"
        },
        {
            StateName: "Sizuoka (22)",
            StateCode: "22",
            CountryCode: "JP"
        },
        {
            StateName: "Tiba (12)",
            StateCode: "12",
            CountryCode: "JP"
        },
        {
            StateName: "Tochigi (9)",
            StateCode: "9",
            CountryCode: "JP"
        },
        {
            StateName: "Tokushima (36)",
            StateCode: "36",
            CountryCode: "JP"
        },
        {
            StateName: "Tokusima (36)",
            StateCode: "36",
            CountryCode: "JP"
        },
        {
            StateName: "Tokyo (13)",
            StateCode: "13",
            CountryCode: "JP"
        },
        {
            StateName: "Totigi (9)",
            StateCode: "9",
            CountryCode: "JP"
        },
        {
            StateName: "Tottori (31)",
            StateCode: "31",
            CountryCode: "JP"
        },
        {
            StateName: "Toyama (16)",
            StateCode: "16",
            CountryCode: "JP"
        },
        {
            StateName: "Tôkyô (13)",
            StateCode: "13",
            CountryCode: "JP"
        },
        {
            StateName: "Wakayama (30)",
            StateCode: "30",
            CountryCode: "JP"
        },
        {
            StateName: "Yamagata (6)",
            StateCode: "6",
            CountryCode: "JP"
        },
        {
            StateName: "Yamaguchi (35)",
            StateCode: "35",
            CountryCode: "JP"
        },
        {
            StateName: "Yamaguti (35)",
            StateCode: "35",
            CountryCode: "JP"
        },
        {
            StateName: "Yamanashi (19)",
            StateCode: "19",
            CountryCode: "JP"
        },
        {
            StateName: "Yamanasi (19)",
            StateCode: "19",
            CountryCode: "JP"
        },
        {
            StateName: "Ôita (44)",
            StateCode: "44",
            CountryCode: "JP"
        },
        {
            StateName: "Ôsaka (27)",
            StateCode: "27",
            CountryCode: "JP"
        },
        {
            StateName: "Baringo (1)",
            StateCode: "1",
            CountryCode: "KE"
        },
        {
            StateName: "Bomet (2)",
            StateCode: "2",
            CountryCode: "KE"
        },
        {
            StateName: "Bungoma (3)",
            StateCode: "3",
            CountryCode: "KE"
        },
        {
            StateName: "Busia (4)",
            StateCode: "4",
            CountryCode: "KE"
        },
        {
            StateName: "Elgeyo/Marakwet (5)",
            StateCode: "5",
            CountryCode: "KE"
        },
        {
            StateName: "Embu (6)",
            StateCode: "6",
            CountryCode: "KE"
        },
        {
            StateName: "Garissa (7)",
            StateCode: "7",
            CountryCode: "KE"
        },
        {
            StateName: "Homa Bay (8)",
            StateCode: "8",
            CountryCode: "KE"
        },
        {
            StateName: "Isiolo (9)",
            StateCode: "9",
            CountryCode: "KE"
        },
        {
            StateName: "Kajiado (10)",
            StateCode: "10",
            CountryCode: "KE"
        },
        {
            StateName: "Kakamega (11)",
            StateCode: "11",
            CountryCode: "KE"
        },
        {
            StateName: "Kericho (12)",
            StateCode: "12",
            CountryCode: "KE"
        },
        {
            StateName: "Kiambu (13)",
            StateCode: "13",
            CountryCode: "KE"
        },
        {
            StateName: "Kilifi (14)",
            StateCode: "14",
            CountryCode: "KE"
        },
        {
            StateName: "Kirinyaga (15)",
            StateCode: "15",
            CountryCode: "KE"
        },
        {
            StateName: "Kisii (16)",
            StateCode: "16",
            CountryCode: "KE"
        },
        {
            StateName: "Kisumu (17)",
            StateCode: "17",
            CountryCode: "KE"
        },
        {
            StateName: "Kitui (18)",
            StateCode: "18",
            CountryCode: "KE"
        },
        {
            StateName: "Kwale (19)",
            StateCode: "19",
            CountryCode: "KE"
        },
        {
            StateName: "Laikipia (20)",
            StateCode: "20",
            CountryCode: "KE"
        },
        {
            StateName: "Lamu (21)",
            StateCode: "21",
            CountryCode: "KE"
        },
        {
            StateName: "Machakos (22)",
            StateCode: "22",
            CountryCode: "KE"
        },
        {
            StateName: "Makueni (23)",
            StateCode: "23",
            CountryCode: "KE"
        },
        {
            StateName: "Mandera (24)",
            StateCode: "24",
            CountryCode: "KE"
        },
        {
            StateName: "Marsabit (25)",
            StateCode: "25",
            CountryCode: "KE"
        },
        {
            StateName: "Meru (26)",
            StateCode: "26",
            CountryCode: "KE"
        },
        {
            StateName: "Migori (27)",
            StateCode: "27",
            CountryCode: "KE"
        },
        {
            StateName: "Mombasa (28)",
            StateCode: "28",
            CountryCode: "KE"
        },
        {
            StateName: "Murang'a (29)",
            StateCode: "29",
            CountryCode: "KE"
        },
        {
            StateName: "Nairobi City (30)",
            StateCode: "30",
            CountryCode: "KE"
        },
        {
            StateName: "Nakuru (31)",
            StateCode: "31",
            CountryCode: "KE"
        },
        {
            StateName: "Nandi (32)",
            StateCode: "32",
            CountryCode: "KE"
        },
        {
            StateName: "Narok (33)",
            StateCode: "33",
            CountryCode: "KE"
        },
        {
            StateName: "Nyamira (34)",
            StateCode: "34",
            CountryCode: "KE"
        },
        {
            StateName: "Nyandarua (35)",
            StateCode: "35",
            CountryCode: "KE"
        },
        {
            StateName: "Nyeri (36)",
            StateCode: "36",
            CountryCode: "KE"
        },
        {
            StateName: "Samburu (37)",
            StateCode: "37",
            CountryCode: "KE"
        },
        {
            StateName: "Siaya (38)",
            StateCode: "38",
            CountryCode: "KE"
        },
        {
            StateName: "Taita/Taveta (39)",
            StateCode: "39",
            CountryCode: "KE"
        },
        {
            StateName: "Tana River (40)",
            StateCode: "40",
            CountryCode: "KE"
        },
        {
            StateName: "Tharaka-Nithi (41)",
            StateCode: "41",
            CountryCode: "KE"
        },
        {
            StateName: "Trans Nzoia (42)",
            StateCode: "42",
            CountryCode: "KE"
        },
        {
            StateName: "Turkana (43)",
            StateCode: "43",
            CountryCode: "KE"
        },
        {
            StateName: "Uasin Gishu (44)",
            StateCode: "44",
            CountryCode: "KE"
        },
        {
            StateName: "Vihiga (45)",
            StateCode: "45",
            CountryCode: "KE"
        },
        {
            StateName: "Wajir (46)",
            StateCode: "46",
            CountryCode: "KE"
        },
        {
            StateName: "West Pokot (47)",
            StateCode: "47",
            CountryCode: "KE"
        },
        {
            StateName: "Chagang-do (4)",
            StateCode: "4",
            CountryCode: "KP"
        },
        {
            StateName: "Hamgyǒng-bukto (9)",
            StateCode: "9",
            CountryCode: "KP"
        },
        {
            StateName: "Hamgyǒng-namdo (8)",
            StateCode: "8",
            CountryCode: "KP"
        },
        {
            StateName: "Hamkyeongnamto (8)",
            StateCode: "8",
            CountryCode: "KP"
        },
        {
            StateName: "Hamkyeongpukto (9)",
            StateCode: "9",
            CountryCode: "KP"
        },
        {
            StateName: "Hwanghae-bukto (6)",
            StateCode: "6",
            CountryCode: "KP"
        },
        {
            StateName: "Hwanghae-namdo (5)",
            StateCode: "5",
            CountryCode: "KP"
        },
        {
            StateName: "Hwanghainamto (5)",
            StateCode: "5",
            CountryCode: "KP"
        },
        {
            StateName: "Hwanghaipukto (6)",
            StateCode: "6",
            CountryCode: "KP"
        },
        {
            StateName: "Jakangto (4)",
            StateCode: "4",
            CountryCode: "KP"
        },
        {
            StateName: "Kangweonto (7)",
            StateCode: "7",
            CountryCode: "KP"
        },
        {
            StateName: "Kangwǒn-do (7)",
            StateCode: "7",
            CountryCode: "KP"
        },
        {
            StateName: "Nampho (14)",
            StateCode: "14",
            CountryCode: "KP"
        },
        {
            StateName: "Namp’o (14)",
            StateCode: "14",
            CountryCode: "KP"
        },
        {
            StateName: "P'yǒngan-bukto (3)",
            StateCode: "3",
            CountryCode: "KP"
        },
        {
            StateName: "P'yǒngan-namdo (2)",
            StateCode: "2",
            CountryCode: "KP"
        },
        {
            StateName: "P'yǒngyang (1)",
            StateCode: "1",
            CountryCode: "KP"
        },
        {
            StateName: "Phyeongannamto (2)",
            StateCode: "2",
            CountryCode: "KP"
        },
        {
            StateName: "Phyeonganpukto (3)",
            StateCode: "3",
            CountryCode: "KP"
        },
        {
            StateName: "Phyeongyang (1)",
            StateCode: "1",
            CountryCode: "KP"
        },
        {
            StateName: "Raseon (13)",
            StateCode: "13",
            CountryCode: "KP"
        },
        {
            StateName: "Rasǒn (13)",
            StateCode: "13",
            CountryCode: "KP"
        },
        {
            StateName: "Ryanggang-do (10)",
            StateCode: "10",
            CountryCode: "KP"
        },
        {
            StateName: "Ryangkangto (10)",
            StateCode: "10",
            CountryCode: "KP"
        },
        {
            StateName: "Bomi (BM)",
            StateCode: "BM",
            CountryCode: "LR"
        },
        {
            StateName: "Bong (BG)",
            StateCode: "BG",
            CountryCode: "LR"
        },
        {
            StateName: "Gbarpolu (GP)",
            StateCode: "GP",
            CountryCode: "LR"
        },
        {
            StateName: "Grand Bassa (GB)",
            StateCode: "GB",
            CountryCode: "LR"
        },
        {
            StateName: "Grand Cape Mount (CM)",
            StateCode: "CM",
            CountryCode: "LR"
        },
        {
            StateName: "Grand Gedeh (GG)",
            StateCode: "GG",
            CountryCode: "LR"
        },
        {
            StateName: "Grand Kru (GK)",
            StateCode: "GK",
            CountryCode: "LR"
        },
        {
            StateName: "Lofa (LO)",
            StateCode: "LO",
            CountryCode: "LR"
        },
        {
            StateName: "Margibi (MG)",
            StateCode: "MG",
            CountryCode: "LR"
        },
        {
            StateName: "Maryland (MY)",
            StateCode: "MY",
            CountryCode: "LR"
        },
        {
            StateName: "Montserrado (MO)",
            StateCode: "MO",
            CountryCode: "LR"
        },
        {
            StateName: "Nimba (NI)",
            StateCode: "NI",
            CountryCode: "LR"
        },
        {
            StateName: "River Cess (RI)",
            StateCode: "RI",
            CountryCode: "LR"
        },
        {
            StateName: "River Gee (RG)",
            StateCode: "RG",
            CountryCode: "LR"
        },
        {
            StateName: "Sinoe (SI)",
            StateCode: "SI",
            CountryCode: "LR"
        },
        {
            StateName: "Akmenė (1)",
            StateCode: "1",
            CountryCode: "LT"
        },
        {
            StateName: "Alytaus apskritis (AL)",
            StateCode: "AL",
            CountryCode: "LT"
        },
        {
            StateName: "Alytaus miestas (2)",
            StateCode: "2",
            CountryCode: "LT"
        },
        {
            StateName: "Alytus (3)",
            StateCode: "3",
            CountryCode: "LT"
        },
        {
            StateName: "Anykščiai (4)",
            StateCode: "4",
            CountryCode: "LT"
        },
        {
            StateName: "Birštono (5)",
            StateCode: "5",
            CountryCode: "LT"
        },
        {
            StateName: "Biržai (6)",
            StateCode: "6",
            CountryCode: "LT"
        },
        {
            StateName: "Druskininkai (7)",
            StateCode: "7",
            CountryCode: "LT"
        },
        {
            StateName: "Elektrėnai (8)",
            StateCode: "8",
            CountryCode: "LT"
        },
        {
            StateName: "Ignalina (9)",
            StateCode: "9",
            CountryCode: "LT"
        },
        {
            StateName: "Jonava (10)",
            StateCode: "10",
            CountryCode: "LT"
        },
        {
            StateName: "Joniškis (11)",
            StateCode: "11",
            CountryCode: "LT"
        },
        {
            StateName: "Jurbarkas (12)",
            StateCode: "12",
            CountryCode: "LT"
        },
        {
            StateName: "Kaišiadorys (13)",
            StateCode: "13",
            CountryCode: "LT"
        },
        {
            StateName: "Kalvarijos (14)",
            StateCode: "14",
            CountryCode: "LT"
        },
        {
            StateName: "Kaunas (16)",
            StateCode: "16",
            CountryCode: "LT"
        },
        {
            StateName: "Kauno apskritis (KU)",
            StateCode: "KU",
            CountryCode: "LT"
        },
        {
            StateName: "Kauno miestas (15)",
            StateCode: "15",
            CountryCode: "LT"
        },
        {
            StateName: "Kazlų Rūdos (17)",
            StateCode: "17",
            CountryCode: "LT"
        },
        {
            StateName: "Kelmė (19)",
            StateCode: "19",
            CountryCode: "LT"
        },
        {
            StateName: "Klaipėda (21)",
            StateCode: "21",
            CountryCode: "LT"
        },
        {
            StateName: "Klaipėdos apskritis (KL)",
            StateCode: "KL",
            CountryCode: "LT"
        },
        {
            StateName: "Klaipėdos miestas (20)",
            StateCode: "20",
            CountryCode: "LT"
        },
        {
            StateName: "Kretinga (22)",
            StateCode: "22",
            CountryCode: "LT"
        },
        {
            StateName: "Kupiškis (23)",
            StateCode: "23",
            CountryCode: "LT"
        },
        {
            StateName: "Kėdainiai (18)",
            StateCode: "18",
            CountryCode: "LT"
        },
        {
            StateName: "Lazdijai (24)",
            StateCode: "24",
            CountryCode: "LT"
        },
        {
            StateName: "Marijampolė (25)",
            StateCode: "25",
            CountryCode: "LT"
        },
        {
            StateName: "Marijampolės apskritis (MR)",
            StateCode: "MR",
            CountryCode: "LT"
        },
        {
            StateName: "Mažeikiai (26)",
            StateCode: "26",
            CountryCode: "LT"
        },
        {
            StateName: "Molėtai (27)",
            StateCode: "27",
            CountryCode: "LT"
        },
        {
            StateName: "Neringa (28)",
            StateCode: "28",
            CountryCode: "LT"
        },
        {
            StateName: "Pagėgiai (29)",
            StateCode: "29",
            CountryCode: "LT"
        },
        {
            StateName: "Pakruojis (30)",
            StateCode: "30",
            CountryCode: "LT"
        },
        {
            StateName: "Palangos miestas (31)",
            StateCode: "31",
            CountryCode: "LT"
        },
        {
            StateName: "Panevėžio apskritis (PN)",
            StateCode: "PN",
            CountryCode: "LT"
        },
        {
            StateName: "Panevėžio miestas (32)",
            StateCode: "32",
            CountryCode: "LT"
        },
        {
            StateName: "Panevėžys (33)",
            StateCode: "33",
            CountryCode: "LT"
        },
        {
            StateName: "Pasvalys (34)",
            StateCode: "34",
            CountryCode: "LT"
        },
        {
            StateName: "Plungė (35)",
            StateCode: "35",
            CountryCode: "LT"
        },
        {
            StateName: "Prienai (36)",
            StateCode: "36",
            CountryCode: "LT"
        },
        {
            StateName: "Radviliškis (37)",
            StateCode: "37",
            CountryCode: "LT"
        },
        {
            StateName: "Raseiniai (38)",
            StateCode: "38",
            CountryCode: "LT"
        },
        {
            StateName: "Rietavo (39)",
            StateCode: "39",
            CountryCode: "LT"
        },
        {
            StateName: "Rokiškis (40)",
            StateCode: "40",
            CountryCode: "LT"
        },
        {
            StateName: "Skuodas (48)",
            StateCode: "48",
            CountryCode: "LT"
        },
        {
            StateName: "Tauragė (50)",
            StateCode: "50",
            CountryCode: "LT"
        },
        {
            StateName: "Tauragės apskritis (TA)",
            StateCode: "TA",
            CountryCode: "LT"
        },
        {
            StateName: "Telšiai (51)",
            StateCode: "51",
            CountryCode: "LT"
        },
        {
            StateName: "Telšių apskritis (TE)",
            StateCode: "TE",
            CountryCode: "LT"
        },
        {
            StateName: "Trakai (52)",
            StateCode: "52",
            CountryCode: "LT"
        },
        {
            StateName: "Ukmergė (53)",
            StateCode: "53",
            CountryCode: "LT"
        },
        {
            StateName: "Utena (54)",
            StateCode: "54",
            CountryCode: "LT"
        },
        {
            StateName: "Utenos apskritis (UT)",
            StateCode: "UT",
            CountryCode: "LT"
        },
        {
            StateName: "Varėna (55)",
            StateCode: "55",
            CountryCode: "LT"
        },
        {
            StateName: "Vilkaviškis (56)",
            StateCode: "56",
            CountryCode: "LT"
        },
        {
            StateName: "Vilniaus apskritis (VL)",
            StateCode: "VL",
            CountryCode: "LT"
        },
        {
            StateName: "Vilniaus miestas (57)",
            StateCode: "57",
            CountryCode: "LT"
        },
        {
            StateName: "Vilnius (58)",
            StateCode: "58",
            CountryCode: "LT"
        },
        {
            StateName: "Visaginas (59)",
            StateCode: "59",
            CountryCode: "LT"
        },
        {
            StateName: "Zarasai (60)",
            StateCode: "60",
            CountryCode: "LT"
        },
        {
            StateName: "Šakiai (41)",
            StateCode: "41",
            CountryCode: "LT"
        },
        {
            StateName: "Šalčininkai (42)",
            StateCode: "42",
            CountryCode: "LT"
        },
        {
            StateName: "Šiauliai (44)",
            StateCode: "44",
            CountryCode: "LT"
        },
        {
            StateName: "Šiaulių apskritis (SA)",
            StateCode: "SA",
            CountryCode: "LT"
        },
        {
            StateName: "Šiaulių miestas (43)",
            StateCode: "43",
            CountryCode: "LT"
        },
        {
            StateName: "Šilalė (45)",
            StateCode: "45",
            CountryCode: "LT"
        },
        {
            StateName: "Šilutė (46)",
            StateCode: "46",
            CountryCode: "LT"
        },
        {
            StateName: "Širvintos (47)",
            StateCode: "47",
            CountryCode: "LT"
        },
        {
            StateName: "Švenčionys (49)",
            StateCode: "49",
            CountryCode: "LT"
        },
        {
            StateName: "Johor (1)",
            StateCode: "1",
            CountryCode: "MY"
        },
        {
            StateName: "Kedah (2)",
            StateCode: "2",
            CountryCode: "MY"
        },
        {
            StateName: "Kelantan (3)",
            StateCode: "3",
            CountryCode: "MY"
        },
        {
            StateName: "Melaka (4)",
            StateCode: "4",
            CountryCode: "MY"
        },
        {
            StateName: "Negeri Sembilan (5)",
            StateCode: "5",
            CountryCode: "MY"
        },
        {
            StateName: "Pahang (6)",
            StateCode: "6",
            CountryCode: "MY"
        },
        {
            StateName: "Perak (8)",
            StateCode: "8",
            CountryCode: "MY"
        },
        {
            StateName: "Perlis (9)",
            StateCode: "9",
            CountryCode: "MY"
        },
        {
            StateName: "Pulau Pinang (7)",
            StateCode: "7",
            CountryCode: "MY"
        },
        {
            StateName: "Sabah (12)",
            StateCode: "12",
            CountryCode: "MY"
        },
        {
            StateName: "Sarawak (13)",
            StateCode: "13",
            CountryCode: "MY"
        },
        {
            StateName: "Selangor (10)",
            StateCode: "10",
            CountryCode: "MY"
        },
        {
            StateName: "Terengganu (11)",
            StateCode: "11",
            CountryCode: "MY"
        },
        {
            StateName: "Wilayah Persekutuan Kuala Lumpur (14)",
            StateCode: "14",
            CountryCode: "MY"
        },
        {
            StateName: "Wilayah Persekutuan Labuan (15)",
            StateCode: "15",
            CountryCode: "MY"
        },
        {
            StateName: "Wilayah Persekutuan Putrajaya (16)",
            StateCode: "16",
            CountryCode: "MY"
        },
        {
            StateName: "Addu (1)",
            StateCode: "1",
            CountryCode: "MV"
        },
        {
            StateName: "Addu City (1)",
            StateCode: "1",
            CountryCode: "MV"
        },
        {
            StateName: "Ariatholhu Dhekunuburi (0)",
            StateCode: "0",
            CountryCode: "MV"
        },
        {
            StateName: "Ariatholhu Uthuruburi (2)",
            StateCode: "2",
            CountryCode: "MV"
        },
        {
            StateName: "Faadhippolhu (3)",
            StateCode: "3",
            CountryCode: "MV"
        },
        {
            StateName: "Felidheatholhu (4)",
            StateCode: "4",
            CountryCode: "MV"
        },
        {
            StateName: "Felidhu Atoll (4)",
            StateCode: "4",
            CountryCode: "MV"
        },
        {
            StateName: "Fuvammulah (29)",
            StateCode: "29",
            CountryCode: "MV"
        },
        {
            StateName: "Hahdhunmathi (5)",
            StateCode: "5",
            CountryCode: "MV"
        },
        {
            StateName: "Huvadhuatholhu Dhekunuburi (28)",
            StateCode: "28",
            CountryCode: "MV"
        },
        {
            StateName: "Huvadhuatholhu Uthuruburi (27)",
            StateCode: "27",
            CountryCode: "MV"
        },
        {
            StateName: "Kolhumadulu (8)",
            StateCode: "8",
            CountryCode: "MV"
        },
        {
            StateName: "Maale (MLE)",
            StateCode: "MLE",
            CountryCode: "MV"
        },
        {
            StateName: "Maaleatholhu (26)",
            StateCode: "26",
            CountryCode: "MV"
        },
        {
            StateName: "Maalhosmadulu Dhekunuburi (20)",
            StateCode: "20",
            CountryCode: "MV"
        },
        {
            StateName: "Maalhosmadulu Uthuruburi (13)",
            StateCode: "13",
            CountryCode: "MV"
        },
        {
            StateName: "Male (MLE)",
            StateCode: "MLE",
            CountryCode: "MV"
        },
        {
            StateName: "Male Atoll (26)",
            StateCode: "26",
            CountryCode: "MV"
        },
        {
            StateName: "Miladhunmadulu Dhekunuburi (25)",
            StateCode: "25",
            CountryCode: "MV"
        },
        {
            StateName: "Miladhunmadulu Uthuruburi (24)",
            StateCode: "24",
            CountryCode: "MV"
        },
        {
            StateName: "Mulakatholhu (12)",
            StateCode: "12",
            CountryCode: "MV"
        },
        {
            StateName: "Mulaku Atoll (12)",
            StateCode: "12",
            CountryCode: "MV"
        },
        {
            StateName: "Nilandheatholhu Dhekunuburi (17)",
            StateCode: "17",
            CountryCode: "MV"
        },
        {
            StateName: "Nilandheatholhu Uthuruburi (14)",
            StateCode: "14",
            CountryCode: "MV"
        },
        {
            StateName: "North Ari Atoll (2)",
            StateCode: "2",
            CountryCode: "MV"
        },
        {
            StateName: "North Huvadhu Atoll (27)",
            StateCode: "27",
            CountryCode: "MV"
        },
        {
            StateName: "North Maalhosmadulu (13)",
            StateCode: "13",
            CountryCode: "MV"
        },
        {
            StateName: "North Miladhunmadulu (24)",
            StateCode: "24",
            CountryCode: "MV"
        },
        {
            StateName: "North Nilandhe Atoll (14)",
            StateCode: "14",
            CountryCode: "MV"
        },
        {
            StateName: "North Thiladhunmathi (7)",
            StateCode: "7",
            CountryCode: "MV"
        },
        {
            StateName: "South Ari Atoll (0)",
            StateCode: "0",
            CountryCode: "MV"
        },
        {
            StateName: "South Huvadhu Atoll (28)",
            StateCode: "28",
            CountryCode: "MV"
        },
        {
            StateName: "South Maalhosmadulu (20)",
            StateCode: "20",
            CountryCode: "MV"
        },
        {
            StateName: "South Miladhunmadulu (25)",
            StateCode: "25",
            CountryCode: "MV"
        },
        {
            StateName: "South Nilandhe Atoll (17)",
            StateCode: "17",
            CountryCode: "MV"
        },
        {
            StateName: "South Thiladhunmathi (23)",
            StateCode: "23",
            CountryCode: "MV"
        },
        {
            StateName: "Thiladhunmathee Dhekunuburi (23)",
            StateCode: "23",
            CountryCode: "MV"
        },
        {
            StateName: "Thiladhunmathee Uthuruburi (7)",
            StateCode: "7",
            CountryCode: "MV"
        },
        {
            StateName: "Adrar (7)",
            StateCode: "7",
            CountryCode: "MR"
        },
        {
            StateName: "Assaba (3)",
            StateCode: "3",
            CountryCode: "MR"
        },
        {
            StateName: "Brakna (5)",
            StateCode: "5",
            CountryCode: "MR"
        },
        {
            StateName: "Dakhlet Nouâdhibou (8)",
            StateCode: "8",
            CountryCode: "MR"
        },
        {
            StateName: "Gorgol (4)",
            StateCode: "4",
            CountryCode: "MR"
        },
        {
            StateName: "Guidimaka (10)",
            StateCode: "10",
            CountryCode: "MR"
        },
        {
            StateName: "Hodh ech Chargui (1)",
            StateCode: "1",
            CountryCode: "MR"
        },
        {
            StateName: "Hodh el Gharbi (2)",
            StateCode: "2",
            CountryCode: "MR"
        },
        {
            StateName: "Inchiri (12)",
            StateCode: "12",
            CountryCode: "MR"
        },
        {
            StateName: "Nouakchott Nord (14)",
            StateCode: "14",
            CountryCode: "MR"
        },
        {
            StateName: "Nouakchott Ouest (13)",
            StateCode: "13",
            CountryCode: "MR"
        },
        {
            StateName: "Nouakchott Sud (15)",
            StateCode: "15",
            CountryCode: "MR"
        },
        {
            StateName: "Nuwākshūţ al Gharbīyah (13)",
            StateCode: "13",
            CountryCode: "MR"
        },
        {
            StateName: "Nuwākshūţ al Janūbīyah (15)",
            StateCode: "15",
            CountryCode: "MR"
        },
        {
            StateName: "Nuwākshūţ ash Shamālīyah (14)",
            StateCode: "14",
            CountryCode: "MR"
        },
        {
            StateName: "Tagant (9)",
            StateCode: "9",
            CountryCode: "MR"
        },
        {
            StateName: "Tiris Zemmour (11)",
            StateCode: "11",
            CountryCode: "MR"
        },
        {
            StateName: "Trarza (6)",
            StateCode: "6",
            CountryCode: "MR"
        },
        {
            StateName: "Aguascalientes (AGU)",
            StateCode: "AGU",
            CountryCode: "MX"
        },
        {
            StateName: "Baja California (BCN)",
            StateCode: "BCN",
            CountryCode: "MX"
        },
        {
            StateName: "Baja California Sur (BCS)",
            StateCode: "BCS",
            CountryCode: "MX"
        },
        {
            StateName: "Campeche (CAM)",
            StateCode: "CAM",
            CountryCode: "MX"
        },
        {
            StateName: "Chiapas (CHP)",
            StateCode: "CHP",
            CountryCode: "MX"
        },
        {
            StateName: "Chihuahua (CHH)",
            StateCode: "CHH",
            CountryCode: "MX"
        },
        {
            StateName: "Ciudad de México (CMX)",
            StateCode: "CMX",
            CountryCode: "MX"
        },
        {
            StateName: "Coahuila de Zaragoza (COA)",
            StateCode: "COA",
            CountryCode: "MX"
        },
        {
            StateName: "Colima (COL)",
            StateCode: "COL",
            CountryCode: "MX"
        },
        {
            StateName: "Durango (DUR)",
            StateCode: "DUR",
            CountryCode: "MX"
        },
        {
            StateName: "Guanajuato (GUA)",
            StateCode: "GUA",
            CountryCode: "MX"
        },
        {
            StateName: "Guerrero (GRO)",
            StateCode: "GRO",
            CountryCode: "MX"
        },
        {
            StateName: "Hidalgo (HID)",
            StateCode: "HID",
            CountryCode: "MX"
        },
        {
            StateName: "Jalisco (JAL)",
            StateCode: "JAL",
            CountryCode: "MX"
        },
        {
            StateName: "Michoacán de Ocampo (MIC)",
            StateCode: "MIC",
            CountryCode: "MX"
        },
        {
            StateName: "Morelos (MOR)",
            StateCode: "MOR",
            CountryCode: "MX"
        },
        {
            StateName: "México (MEX)",
            StateCode: "MEX",
            CountryCode: "MX"
        },
        {
            StateName: "Nayarit (NAY)",
            StateCode: "NAY",
            CountryCode: "MX"
        },
        {
            StateName: "Nuevo León (NLE)",
            StateCode: "NLE",
            CountryCode: "MX"
        },
        {
            StateName: "Oaxaca (OAX)",
            StateCode: "OAX",
            CountryCode: "MX"
        },
        {
            StateName: "Puebla (PUE)",
            StateCode: "PUE",
            CountryCode: "MX"
        },
        {
            StateName: "Querétaro (QUE)",
            StateCode: "QUE",
            CountryCode: "MX"
        },
        {
            StateName: "Quintana Roo (ROO)",
            StateCode: "ROO",
            CountryCode: "MX"
        },
        {
            StateName: "San Luis Potosí (SLP)",
            StateCode: "SLP",
            CountryCode: "MX"
        },
        {
            StateName: "Sinaloa (SIN)",
            StateCode: "SIN",
            CountryCode: "MX"
        },
        {
            StateName: "Sonora (SON)",
            StateCode: "SON",
            CountryCode: "MX"
        },
        {
            StateName: "Tabasco (TAB)",
            StateCode: "TAB",
            CountryCode: "MX"
        },
        {
            StateName: "Tamaulipas (TAM)",
            StateCode: "TAM",
            CountryCode: "MX"
        },
        {
            StateName: "Tlaxcala (TLA)",
            StateCode: "TLA",
            CountryCode: "MX"
        },
        {
            StateName: "Veracruz de Ignacio de la Llave (VER)",
            StateCode: "VER",
            CountryCode: "MX"
        },
        {
            StateName: "Yucatán (YUC)",
            StateCode: "YUC",
            CountryCode: "MX"
        },
        {
            StateName: "Zacatecas (ZAC)",
            StateCode: "ZAC",
            CountryCode: "MX"
        },
        {
            StateName: "Arhangay (73)",
            StateCode: "73",
            CountryCode: "MN"
        },
        {
            StateName: "Bayan-Ölgiy (71)",
            StateCode: "71",
            CountryCode: "MN"
        },
        {
            StateName: "Bayanhongor (69)",
            StateCode: "69",
            CountryCode: "MN"
        },
        {
            StateName: "Bulgan (67)",
            StateCode: "67",
            CountryCode: "MN"
        },
        {
            StateName: "Darhan uul (37)",
            StateCode: "37",
            CountryCode: "MN"
        },
        {
            StateName: "Dornod (61)",
            StateCode: "61",
            CountryCode: "MN"
        },
        {
            StateName: "Dornogovĭ (63)",
            StateCode: "63",
            CountryCode: "MN"
        },
        {
            StateName: "Dundgovĭ (59)",
            StateCode: "59",
            CountryCode: "MN"
        },
        {
            StateName: "Dzavhan (57)",
            StateCode: "57",
            CountryCode: "MN"
        },
        {
            StateName: "Govĭ-Altay (65)",
            StateCode: "65",
            CountryCode: "MN"
        },
        {
            StateName: "Govĭ-Sümber (64)",
            StateCode: "64",
            CountryCode: "MN"
        },
        {
            StateName: "Hentiy (39)",
            StateCode: "39",
            CountryCode: "MN"
        },
        {
            StateName: "Hovd (43)",
            StateCode: "43",
            CountryCode: "MN"
        },
        {
            StateName: "Hövsgöl (41)",
            StateCode: "41",
            CountryCode: "MN"
        },
        {
            StateName: "Orhon (35)",
            StateCode: "35",
            CountryCode: "MN"
        },
        {
            StateName: "Selenge (49)",
            StateCode: "49",
            CountryCode: "MN"
        },
        {
            StateName: "Sühbaatar (51)",
            StateCode: "51",
            CountryCode: "MN"
        },
        {
            StateName: "Töv (47)",
            StateCode: "47",
            CountryCode: "MN"
        },
        {
            StateName: "Ulaanbaatar (1)",
            StateCode: "1",
            CountryCode: "MN"
        },
        {
            StateName: "Uvs (46)",
            StateCode: "46",
            CountryCode: "MN"
        },
        {
            StateName: "Ömnögovĭ (53)",
            StateCode: "53",
            CountryCode: "MN"
        },
        {
            StateName: "Övörhangay (55)",
            StateCode: "55",
            CountryCode: "MN"
        },
        {
            StateName: "Agadir-Ida-Ou-Tanane (AGD)",
            StateCode: "AGD",
            CountryCode: "MA"
        },
        {
            StateName: "Al Haouz (HAO)",
            StateCode: "HAO",
            CountryCode: "MA"
        },
        {
            StateName: "Al Hoceïma (HOC)",
            StateCode: "HOC",
            CountryCode: "MA"
        },
        {
            StateName: "Aousserd (EH) (AOU)",
            StateCode: "AOU",
            CountryCode: "MA"
        },
        {
            StateName: "Assa-Zag (EH-partial) (ASZ)",
            StateCode: "ASZ",
            CountryCode: "MA"
        },
        {
            StateName: "Azilal (AZI)",
            StateCode: "AZI",
            CountryCode: "MA"
        },
        {
            StateName: "Benslimane (BES)",
            StateCode: "BES",
            CountryCode: "MA"
        },
        {
            StateName: "Berkane (BER)",
            StateCode: "BER",
            CountryCode: "MA"
        },
        {
            StateName: "Berrechid (BRR)",
            StateCode: "BRR",
            CountryCode: "MA"
        },
        {
            StateName: "Boujdour (EH) (BOD)",
            StateCode: "BOD",
            CountryCode: "MA"
        },
        {
            StateName: "Boulemane (BOM)",
            StateCode: "BOM",
            CountryCode: "MA"
        },
        {
            StateName: "Béni Mellal (BEM)",
            StateCode: "BEM",
            CountryCode: "MA"
        },
        {
            StateName: "Béni Mellal-Khénifra (5)",
            StateCode: "5",
            CountryCode: "MA"
        },
        {
            StateName: "Casablanca (CAS)",
            StateCode: "CAS",
            CountryCode: "MA"
        },
        {
            StateName: "Casablanca-Settat (6)",
            StateCode: "6",
            CountryCode: "MA"
        },
        {
            StateName: "Chefchaouen (CHE)",
            StateCode: "CHE",
            CountryCode: "MA"
        },
        {
            StateName: "Chichaoua (CHI)",
            StateCode: "CHI",
            CountryCode: "MA"
        },
        {
            StateName: "Chtouka-Ait Baha (CHT)",
            StateCode: "CHT",
            CountryCode: "MA"
        },
        {
            StateName: "Dakhla-Oued Ed-Dahab (EH) (12)",
            StateCode: "12",
            CountryCode: "MA"
        },
        {
            StateName: "Driouch (DRI)",
            StateCode: "DRI",
            CountryCode: "MA"
        },
        {
            StateName: "Drâa-Tafilalet (8)",
            StateCode: "8",
            CountryCode: "MA"
        },
        {
            StateName: "El Hajeb (HAJ)",
            StateCode: "HAJ",
            CountryCode: "MA"
        },
        {
            StateName: "El Jadida (JDI)",
            StateCode: "JDI",
            CountryCode: "MA"
        },
        {
            StateName: "El Kelâa des Sraghna (KES)",
            StateCode: "KES",
            CountryCode: "MA"
        },
        {
            StateName: "Errachidia (ERR)",
            StateCode: "ERR",
            CountryCode: "MA"
        },
        {
            StateName: "Es-Semara (EH-partial) (ESM)",
            StateCode: "ESM",
            CountryCode: "MA"
        },
        {
            StateName: "Essaouira (ESI)",
            StateCode: "ESI",
            CountryCode: "MA"
        },
        {
            StateName: "Fahs-Anjra (FAH)",
            StateCode: "FAH",
            CountryCode: "MA"
        },
        {
            StateName: "Figuig (FIG)",
            StateCode: "FIG",
            CountryCode: "MA"
        },
        {
            StateName: "Fquih Ben Salah (FQH)",
            StateCode: "FQH",
            CountryCode: "MA"
        },
        {
            StateName: "Fès (FES)",
            StateCode: "FES",
            CountryCode: "MA"
        },
        {
            StateName: "Fès-Meknès (3)",
            StateCode: "3",
            CountryCode: "MA"
        },
        {
            StateName: "Guelmim (GUE)",
            StateCode: "GUE",
            CountryCode: "MA"
        },
        {
            StateName: "Guelmim-Oued Noun (EH-partial) (10)",
            StateCode: "10",
            CountryCode: "MA"
        },
        {
            StateName: "Guercif (GUF)",
            StateCode: "GUF",
            CountryCode: "MA"
        },
        {
            StateName: "Ifrane (IFR)",
            StateCode: "IFR",
            CountryCode: "MA"
        },
        {
            StateName: "Inezgane-Ait Melloul (INE)",
            StateCode: "INE",
            CountryCode: "MA"
        },
        {
            StateName: "Jerada (JRA)",
            StateCode: "JRA",
            CountryCode: "MA"
        },
        {
            StateName: "Khemisset (KHE)",
            StateCode: "KHE",
            CountryCode: "MA"
        },
        {
            StateName: "Khenifra (KHN)",
            StateCode: "KHN",
            CountryCode: "MA"
        },
        {
            StateName: "Khouribga (KHO)",
            StateCode: "KHO",
            CountryCode: "MA"
        },
        {
            StateName: "Kénitra (KEN)",
            StateCode: "KEN",
            CountryCode: "MA"
        },
        {
            StateName: "L'Oriental (2)",
            StateCode: "2",
            CountryCode: "MA"
        },
        {
            StateName: "Larache (LAR)",
            StateCode: "LAR",
            CountryCode: "MA"
        },
        {
            StateName: "Laâyoune (EH) (LAA)",
            StateCode: "LAA",
            CountryCode: "MA"
        },
        {
            StateName: "Laâyoune-Sakia El Hamra (EH-partial) (11)",
            StateCode: "11",
            CountryCode: "MA"
        },
        {
            StateName: "Marrakech (MAR)",
            StateCode: "MAR",
            CountryCode: "MA"
        },
        {
            StateName: "Marrakech-Safi (7)",
            StateCode: "7",
            CountryCode: "MA"
        },
        {
            StateName: "Meknès (MEK)",
            StateCode: "MEK",
            CountryCode: "MA"
        },
        {
            StateName: "Midelt (MID)",
            StateCode: "MID",
            CountryCode: "MA"
        },
        {
            StateName: "Mohammadia (MOH)",
            StateCode: "MOH",
            CountryCode: "MA"
        },
        {
            StateName: "Moulay Yacoub (MOU)",
            StateCode: "MOU",
            CountryCode: "MA"
        },
        {
            StateName: "Médiouna (MED)",
            StateCode: "MED",
            CountryCode: "MA"
        },
        {
            StateName: "M’diq-Fnideq (MDF)",
            StateCode: "MDF",
            CountryCode: "MA"
        },
        {
            StateName: "Nador (NAD)",
            StateCode: "NAD",
            CountryCode: "MA"
        },
        {
            StateName: "Nouaceur (NOU)",
            StateCode: "NOU",
            CountryCode: "MA"
        },
        {
            StateName: "Ouarzazate (OUA)",
            StateCode: "OUA",
            CountryCode: "MA"
        },
        {
            StateName: "Oued Ed-Dahab (EH) (OUD)",
            StateCode: "OUD",
            CountryCode: "MA"
        },
        {
            StateName: "Ouezzane (OUZ)",
            StateCode: "OUZ",
            CountryCode: "MA"
        },
        {
            StateName: "Oujda-Angad (OUJ)",
            StateCode: "OUJ",
            CountryCode: "MA"
        },
        {
            StateName: "Rabat (RAB)",
            StateCode: "RAB",
            CountryCode: "MA"
        },
        {
            StateName: "Rabat-Salé-Kénitra (4)",
            StateCode: "4",
            CountryCode: "MA"
        },
        {
            StateName: "Rehamna (REH)",
            StateCode: "REH",
            CountryCode: "MA"
        },
        {
            StateName: "Safi (SAF)",
            StateCode: "SAF",
            CountryCode: "MA"
        },
        {
            StateName: "Salé (SAL)",
            StateCode: "SAL",
            CountryCode: "MA"
        },
        {
            StateName: "Sefrou (SEF)",
            StateCode: "SEF",
            CountryCode: "MA"
        },
        {
            StateName: "Settat (SET)",
            StateCode: "SET",
            CountryCode: "MA"
        },
        {
            StateName: "Sidi Bennour (SIB)",
            StateCode: "SIB",
            CountryCode: "MA"
        },
        {
            StateName: "Sidi Ifni (SIF)",
            StateCode: "SIF",
            CountryCode: "MA"
        },
        {
            StateName: "Sidi Kacem (SIK)",
            StateCode: "SIK",
            CountryCode: "MA"
        },
        {
            StateName: "Sidi Slimane (SIL)",
            StateCode: "SIL",
            CountryCode: "MA"
        },
        {
            StateName: "Skhirate-Témara (SKH)",
            StateCode: "SKH",
            CountryCode: "MA"
        },
        {
            StateName: "Souss-Massa (9)",
            StateCode: "9",
            CountryCode: "MA"
        },
        {
            StateName: "Tan-Tan (EH-partial) (TNT)",
            StateCode: "TNT",
            CountryCode: "MA"
        },
        {
            StateName: "Tanger-Assilah (TNG)",
            StateCode: "TNG",
            CountryCode: "MA"
        },
        {
            StateName: "Tanger-Tétouan-Al Hoceïma (1)",
            StateCode: "1",
            CountryCode: "MA"
        },
        {
            StateName: "Taounate (TAO)",
            StateCode: "TAO",
            CountryCode: "MA"
        },
        {
            StateName: "Taourirt (TAI)",
            StateCode: "TAI",
            CountryCode: "MA"
        },
        {
            StateName: "Tarfaya (EH-partial) (TAF)",
            StateCode: "TAF",
            CountryCode: "MA"
        },
        {
            StateName: "Taroudant (TAR)",
            StateCode: "TAR",
            CountryCode: "MA"
        },
        {
            StateName: "Tata (TAT)",
            StateCode: "TAT",
            CountryCode: "MA"
        },
        {
            StateName: "Taza (TAZ)",
            StateCode: "TAZ",
            CountryCode: "MA"
        },
        {
            StateName: "Tinghir (TIN)",
            StateCode: "TIN",
            CountryCode: "MA"
        },
        {
            StateName: "Tiznit (TIZ)",
            StateCode: "TIZ",
            CountryCode: "MA"
        },
        {
            StateName: "Tétouan (TET)",
            StateCode: "TET",
            CountryCode: "MA"
        },
        {
            StateName: "Youssoufia (YUS)",
            StateCode: "YUS",
            CountryCode: "MA"
        },
        {
            StateName: "Zagora (ZAG)",
            StateCode: "ZAG",
            CountryCode: "MA"
        },
        {
            StateName: "Ayeyarwady (7)",
            StateCode: "7",
            CountryCode: "MM"
        },
        {
            StateName: "Bago (2)",
            StateCode: "2",
            CountryCode: "MM"
        },
        {
            StateName: "Chin (14)",
            StateCode: "14",
            CountryCode: "MM"
        },
        {
            StateName: "Kachin (11)",
            StateCode: "11",
            CountryCode: "MM"
        },
        {
            StateName: "Kayah (12)",
            StateCode: "12",
            CountryCode: "MM"
        },
        {
            StateName: "Kayin (13)",
            StateCode: "13",
            CountryCode: "MM"
        },
        {
            StateName: "Magway (3)",
            StateCode: "3",
            CountryCode: "MM"
        },
        {
            StateName: "Mandalay (4)",
            StateCode: "4",
            CountryCode: "MM"
        },
        {
            StateName: "Mon (15)",
            StateCode: "15",
            CountryCode: "MM"
        },
        {
            StateName: "Nay Pyi Taw (18)",
            StateCode: "18",
            CountryCode: "MM"
        },
        {
            StateName: "Rakhine (16)",
            StateCode: "16",
            CountryCode: "MM"
        },
        {
            StateName: "Sagaing (1)",
            StateCode: "1",
            CountryCode: "MM"
        },
        {
            StateName: "Shan (17)",
            StateCode: "17",
            CountryCode: "MM"
        },
        {
            StateName: "Tanintharyi (5)",
            StateCode: "5",
            CountryCode: "MM"
        },
        {
            StateName: "Yangon (6)",
            StateCode: "6",
            CountryCode: "MM"
        },
        {
            StateName: "Bagmati (BA)",
            StateCode: "BA",
            CountryCode: "NP"
        },
        {
            StateName: "Bheri (BH)",
            StateCode: "BH",
            CountryCode: "NP"
        },
        {
            StateName: "Central (1)",
            StateCode: "1",
            CountryCode: "NP"
        },
        {
            StateName: "Dhawalagiri (DH)",
            StateCode: "DH",
            CountryCode: "NP"
        },
        {
            StateName: "Eastern (4)",
            StateCode: "4",
            CountryCode: "NP"
        },
        {
            StateName: "Far Western (5)",
            StateCode: "5",
            CountryCode: "NP"
        },
        {
            StateName: "Gandaki (GA)",
            StateCode: "GA",
            CountryCode: "NP"
        },
        {
            StateName: "Gandaki (P4)",
            StateCode: "P4",
            CountryCode: "NP"
        },
        {
            StateName: "Janakpur (JA)",
            StateCode: "JA",
            CountryCode: "NP"
        },
        {
            StateName: "Karnali (KA)",
            StateCode: "KA",
            CountryCode: "NP"
        },
        {
            StateName: "Karnali (P6)",
            StateCode: "P6",
            CountryCode: "NP"
        },
        {
            StateName: "Kosi (KO)",
            StateCode: "KO",
            CountryCode: "NP"
        },
        {
            StateName: "Lumbini (LU)",
            StateCode: "LU",
            CountryCode: "NP"
        },
        {
            StateName: "Madhya Pashchimanchal (2)",
            StateCode: "2",
            CountryCode: "NP"
        },
        {
            StateName: "Madhyamanchal (1)",
            StateCode: "1",
            CountryCode: "NP"
        },
        {
            StateName: "Mahakali (MA)",
            StateCode: "MA",
            CountryCode: "NP"
        },
        {
            StateName: "Mechi (ME)",
            StateCode: "ME",
            CountryCode: "NP"
        },
        {
            StateName: "Mid Western (2)",
            StateCode: "2",
            CountryCode: "NP"
        },
        {
            StateName: "Narayani (NA)",
            StateCode: "NA",
            CountryCode: "NP"
        },
        {
            StateName: "Pashchimanchal (3)",
            StateCode: "3",
            CountryCode: "NP"
        },
        {
            StateName: "Pradesh 1 (P1)",
            StateCode: "P1",
            CountryCode: "NP"
        },
        {
            StateName: "Pradesh 2 (P2)",
            StateCode: "P2",
            CountryCode: "NP"
        },
        {
            StateName: "Pradesh 3 (P3)",
            StateCode: "P3",
            CountryCode: "NP"
        },
        {
            StateName: "Pradesh 5 (P5)",
            StateCode: "P5",
            CountryCode: "NP"
        },
        {
            StateName: "Pradesh 7 (P7)",
            StateCode: "P7",
            CountryCode: "NP"
        },
        {
            StateName: "Province 1 (P1)",
            StateCode: "P1",
            CountryCode: "NP"
        },
        {
            StateName: "Province 2 (P2)",
            StateCode: "P2",
            CountryCode: "NP"
        },
        {
            StateName: "Province 3 (P3)",
            StateCode: "P3",
            CountryCode: "NP"
        },
        {
            StateName: "Province 5 (P5)",
            StateCode: "P5",
            CountryCode: "NP"
        },
        {
            StateName: "Province 7 (P7)",
            StateCode: "P7",
            CountryCode: "NP"
        },
        {
            StateName: "Purwanchal (4)",
            StateCode: "4",
            CountryCode: "NP"
        },
        {
            StateName: "Rapti (RA)",
            StateCode: "RA",
            CountryCode: "NP"
        },
        {
            StateName: "Sagarmatha (SA)",
            StateCode: "SA",
            CountryCode: "NP"
        },
        {
            StateName: "Seti (SE)",
            StateCode: "SE",
            CountryCode: "NP"
        },
        {
            StateName: "Sudur Pashchimanchal (5)",
            StateCode: "5",
            CountryCode: "NP"
        },
        {
            StateName: "Western (3)",
            StateCode: "3",
            CountryCode: "NP"
        },
        {
            StateName: "Aruba (AW*)",
            StateCode: "AW*",
            CountryCode: "NL"
        },
        {
            StateName: "Bonaire (BQ1*)",
            StateCode: "BQ1*",
            CountryCode: "NL"
        },
        {
            StateName: "Curaçao (CW*)",
            StateCode: "CW*",
            CountryCode: "NL"
        },
        {
            StateName: "Drenthe (DR)",
            StateCode: "DR",
            CountryCode: "NL"
        },
        {
            StateName: "Flevoland (FL*)",
            StateCode: "FL*",
            CountryCode: "NL"
        },
        {
            StateName: "Fryslân (FR)",
            StateCode: "FR",
            CountryCode: "NL"
        },
        {
            StateName: "Gelderland (GE)",
            StateCode: "GE",
            CountryCode: "NL"
        },
        {
            StateName: "Groningen (GR)",
            StateCode: "GR",
            CountryCode: "NL"
        },
        {
            StateName: "Limburg (LI)",
            StateCode: "LI",
            CountryCode: "NL"
        },
        {
            StateName: "Noord-Brabant (NB)",
            StateCode: "NB",
            CountryCode: "NL"
        },
        {
            StateName: "Noord-Holland (NH)",
            StateCode: "NH",
            CountryCode: "NL"
        },
        {
            StateName: "Overijssel (OV)",
            StateCode: "OV",
            CountryCode: "NL"
        },
        {
            StateName: "Saba (BQ2)",
            StateCode: "BQ2",
            CountryCode: "NL"
        },
        {
            StateName: "Sint Eustatius (BQ3)",
            StateCode: "BQ3",
            CountryCode: "NL"
        },
        {
            StateName: "Sint Maarten (SX)",
            StateCode: "SX",
            CountryCode: "NL"
        },
        {
            StateName: "Utrecht (UT)",
            StateCode: "UT",
            CountryCode: "NL"
        },
        {
            StateName: "Zeeland (ZE)",
            StateCode: "ZE",
            CountryCode: "NL"
        },
        {
            StateName: "Zuid-Holland (ZH)",
            StateCode: "ZH",
            CountryCode: "NL"
        },
        {
            StateName: "Auckland (AUK)",
            StateCode: "AUK",
            CountryCode: "NZ"
        },
        {
            StateName: "Bay of Plenty (BOP)",
            StateCode: "BOP",
            CountryCode: "NZ"
        },
        {
            StateName: "Canterbury (CAN)",
            StateCode: "CAN",
            CountryCode: "NZ"
        },
        {
            StateName: "Chatham Islands Territory (CIT*)",
            StateCode: "CIT*",
            CountryCode: "NZ"
        },
        {
            StateName: "Gisborne (GIS)",
            StateCode: "GIS",
            CountryCode: "NZ"
        },
        {
            StateName: "Hawke's Bay (HKB)",
            StateCode: "HKB",
            CountryCode: "NZ"
        },
        {
            StateName: "Manawatu Whanganui (MWT)",
            StateCode: "MWT",
            CountryCode: "NZ"
        },
        {
            StateName: "Manawatu-Wanganui (MWT)",
            StateCode: "MWT",
            CountryCode: "NZ"
        },
        {
            StateName: "Marlborough (MBH)",
            StateCode: "MBH",
            CountryCode: "NZ"
        },
        {
            StateName: "Murihiku (STL)",
            StateCode: "STL",
            CountryCode: "NZ"
        },
        {
            StateName: "Nelson (NSN)",
            StateCode: "NSN",
            CountryCode: "NZ"
        },
        {
            StateName: "Northland (NTL)",
            StateCode: "NTL",
            CountryCode: "NZ"
        },
        {
            StateName: "Otago (OTA)",
            StateCode: "OTA",
            CountryCode: "NZ"
        },
        {
            StateName: "Southland (STL)",
            StateCode: "STL",
            CountryCode: "NZ"
        },
        {
            StateName: "Taranaki (TKI)",
            StateCode: "TKI",
            CountryCode: "NZ"
        },
        {
            StateName: "Tasman (TAS)",
            StateCode: "TAS",
            CountryCode: "NZ"
        },
        {
            StateName: "Te Matau a Māui (HKB)",
            StateCode: "HKB",
            CountryCode: "NZ"
        },
        {
            StateName: "Te Moana a Toi Te Huatahi (BOP)",
            StateCode: "BOP",
            CountryCode: "NZ"
        },
        {
            StateName: "Te Tai tokerau (NTL)",
            StateCode: "NTL",
            CountryCode: "NZ"
        },
        {
            StateName: "Te Taihau ā uru (WTC)",
            StateCode: "WTC",
            CountryCode: "NZ"
        },
        {
            StateName: "Te Whanga-nui-a-Tara (WGN)",
            StateCode: "WGN",
            CountryCode: "NZ"
        },
        {
            StateName: "Tāmaki-makau-rau (AUK)",
            StateCode: "AUK",
            CountryCode: "NZ"
        },
        {
            StateName: "Tūranga nui a Kiwa (GIS)",
            StateCode: "GIS",
            CountryCode: "NZ"
        },
        {
            StateName: "Waikato (WKO)",
            StateCode: "WKO",
            CountryCode: "NZ"
        },
        {
            StateName: "Waitaha (CAN)",
            StateCode: "CAN",
            CountryCode: "NZ"
        },
        {
            StateName: "Wellington (WGN)",
            StateCode: "WGN",
            CountryCode: "NZ"
        },
        {
            StateName: "West Coast (WTC)",
            StateCode: "WTC",
            CountryCode: "NZ"
        },
        {
            StateName: "Whakatū (NSN)",
            StateCode: "NSN",
            CountryCode: "NZ"
        },
        {
            StateName: "Wharekauri (CIT*)",
            StateCode: "CIT*",
            CountryCode: "NZ"
        },
        {
            StateName: "Ō Tākou (OTA)",
            StateCode: "OTA",
            CountryCode: "NZ"
        },
        {
            StateName: "Antwerpen (VAN)",
            StateCode: "VAN",
            CountryCode: "BE"
        },
        {
            StateName: "Brabant wallon (WBR)",
            StateCode: "WBR",
            CountryCode: "BE"
        },
        {
            StateName: "Brussels Hoofdstedelijk Gewest (BRU)",
            StateCode: "BRU",
            CountryCode: "BE"
        },
        {
            StateName: "Bruxelles-Capitale, Région de (BRU)",
            StateCode: "BRU",
            CountryCode: "BE"
        },
        {
            StateName: "Hainaut (WHT)",
            StateCode: "WHT",
            CountryCode: "BE"
        },
        {
            StateName: "Limburg (VLI)",
            StateCode: "VLI",
            CountryCode: "BE"
        },
        {
            StateName: "Liège (WLG)",
            StateCode: "WLG",
            CountryCode: "BE"
        },
        {
            StateName: "Luxembourg (WLX)",
            StateCode: "WLX",
            CountryCode: "BE"
        },
        {
            StateName: "Namur (WNA)",
            StateCode: "WNA",
            CountryCode: "BE"
        },
        {
            StateName: "Oost-Vlaanderen (VOV)",
            StateCode: "VOV",
            CountryCode: "BE"
        },
        {
            StateName: "Vlaams Gewest (VLG)",
            StateCode: "VLG",
            CountryCode: "BE"
        },
        {
            StateName: "Vlaams-Brabant (VBR)",
            StateCode: "VBR",
            CountryCode: "BE"
        },
        {
            StateName: "West-Vlaanderen (VWV)",
            StateCode: "VWV",
            CountryCode: "BE"
        },
        {
            StateName: "wallonne, Région (WAL)",
            StateCode: "WAL",
            CountryCode: "BE"
        },
        {
            StateName: "Christ Church (1)",
            StateCode: "1",
            CountryCode: "BB"
        },
        {
            StateName: "Saint Andrew (2)",
            StateCode: "2",
            CountryCode: "BB"
        },
        {
            StateName: "Saint George (3)",
            StateCode: "3",
            CountryCode: "BB"
        },
        {
            StateName: "Saint James (4)",
            StateCode: "4",
            CountryCode: "BB"
        },
        {
            StateName: "Saint John (5)",
            StateCode: "5",
            CountryCode: "BB"
        },
        {
            StateName: "Saint Joseph (6)",
            StateCode: "6",
            CountryCode: "BB"
        },
        {
            StateName: "Saint Lucy (7)",
            StateCode: "7",
            CountryCode: "BB"
        },
        {
            StateName: "Saint Michael (8)",
            StateCode: "8",
            CountryCode: "BB"
        },
        {
            StateName: "Saint Peter (9)",
            StateCode: "9",
            CountryCode: "BB"
        },
        {
            StateName: "Saint Philip (10)",
            StateCode: "10",
            CountryCode: "BB"
        },
        {
            StateName: "Saint Thomas (11)",
            StateCode: "11",
            CountryCode: "BB"
        },
        {
            StateName: "Bagerhat (5)",
            StateCode: "5",
            CountryCode: "BD"
        },
        {
            StateName: "Bandarban (1)",
            StateCode: "1",
            CountryCode: "BD"
        },
        {
            StateName: "Barguna (2)",
            StateCode: "2",
            CountryCode: "BD"
        },
        {
            StateName: "Barisal (A)",
            StateCode: "A",
            CountryCode: "BD"
        },
        {
            StateName: "Barisal (6)",
            StateCode: "6",
            CountryCode: "BD"
        },
        {
            StateName: "Bhola (7)",
            StateCode: "7",
            CountryCode: "BD"
        },
        {
            StateName: "Bogra (3)",
            StateCode: "3",
            CountryCode: "BD"
        },
        {
            StateName: "Brahmanbaria (4)",
            StateCode: "4",
            CountryCode: "BD"
        },
        {
            StateName: "Chandpur (9)",
            StateCode: "9",
            CountryCode: "BD"
        },
        {
            StateName: "Chapai Nawabganj (45)",
            StateCode: "45",
            CountryCode: "BD"
        },
        {
            StateName: "Chittagong (B)",
            StateCode: "B",
            CountryCode: "BD"
        },
        {
            StateName: "Chittagong (10)",
            StateCode: "10",
            CountryCode: "BD"
        },
        {
            StateName: "Chuadanga (12)",
            StateCode: "12",
            CountryCode: "BD"
        },
        {
            StateName: "Comilla (8)",
            StateCode: "8",
            CountryCode: "BD"
        },
        {
            StateName: "Cox's Bazar (11)",
            StateCode: "11",
            CountryCode: "BD"
        },
        {
            StateName: "Dhaka (C)",
            StateCode: "C",
            CountryCode: "BD"
        },
        {
            StateName: "Dhaka (13)",
            StateCode: "13",
            CountryCode: "BD"
        },
        {
            StateName: "Dinajpur (14)",
            StateCode: "14",
            CountryCode: "BD"
        },
        {
            StateName: "Faridpur (15)",
            StateCode: "15",
            CountryCode: "BD"
        },
        {
            StateName: "Feni (16)",
            StateCode: "16",
            CountryCode: "BD"
        },
        {
            StateName: "Gaibandha (19)",
            StateCode: "19",
            CountryCode: "BD"
        },
        {
            StateName: "Gazipur (18)",
            StateCode: "18",
            CountryCode: "BD"
        },
        {
            StateName: "Gopalganj (17)",
            StateCode: "17",
            CountryCode: "BD"
        },
        {
            StateName: "Habiganj (20)",
            StateCode: "20",
            CountryCode: "BD"
        },
        {
            StateName: "Jamalpur (21)",
            StateCode: "21",
            CountryCode: "BD"
        },
        {
            StateName: "Jessore (22)",
            StateCode: "22",
            CountryCode: "BD"
        },
        {
            StateName: "Jhalakathi (25)",
            StateCode: "25",
            CountryCode: "BD"
        },
        {
            StateName: "Jhenaidah (23)",
            StateCode: "23",
            CountryCode: "BD"
        },
        {
            StateName: "Joypurhat (24)",
            StateCode: "24",
            CountryCode: "BD"
        },
        {
            StateName: "Khagrachhari (29)",
            StateCode: "29",
            CountryCode: "BD"
        },
        {
            StateName: "Khulna (D*)",
            StateCode: "D*",
            CountryCode: "BD"
        },
        {
            StateName: "Khulna (27)",
            StateCode: "27",
            CountryCode: "BD"
        },
        {
            StateName: "Kishoreganj (26)",
            StateCode: "26",
            CountryCode: "BD"
        },
        {
            StateName: "Kurigram (28)",
            StateCode: "28",
            CountryCode: "BD"
        },
        {
            StateName: "Kushtia (30)",
            StateCode: "30",
            CountryCode: "BD"
        },
        {
            StateName: "Lakshmipur (31)",
            StateCode: "31",
            CountryCode: "BD"
        },
        {
            StateName: "Lalmonirhat (32)",
            StateCode: "32",
            CountryCode: "BD"
        },
        {
            StateName: "Madaripur (36)",
            StateCode: "36",
            CountryCode: "BD"
        },
        {
            StateName: "Magura (37)",
            StateCode: "37",
            CountryCode: "BD"
        },
        {
            StateName: "Manikganj (33)",
            StateCode: "33",
            CountryCode: "BD"
        },
        {
            StateName: "Meherpur (39)",
            StateCode: "39",
            CountryCode: "BD"
        },
        {
            StateName: "Moulvibazar (38)",
            StateCode: "38",
            CountryCode: "BD"
        },
        {
            StateName: "Munshiganj (35)",
            StateCode: "35",
            CountryCode: "BD"
        },
        {
            StateName: "Mymensingh (H)",
            StateCode: "H",
            CountryCode: "BD"
        },
        {
            StateName: "Mymensingh (34)",
            StateCode: "34",
            CountryCode: "BD"
        },
        {
            StateName: "Naogaon (48)",
            StateCode: "48",
            CountryCode: "BD"
        },
        {
            StateName: "Narail (43)",
            StateCode: "43",
            CountryCode: "BD"
        },
        {
            StateName: "Narayanganj (40)",
            StateCode: "40",
            CountryCode: "BD"
        },
        {
            StateName: "Narsingdi (42)",
            StateCode: "42",
            CountryCode: "BD"
        },
        {
            StateName: "Natore (44)",
            StateCode: "44",
            CountryCode: "BD"
        },
        {
            StateName: "Netrakona (41)",
            StateCode: "41",
            CountryCode: "BD"
        },
        {
            StateName: "Nilphamari (46)",
            StateCode: "46",
            CountryCode: "BD"
        },
        {
            StateName: "Noakhali (47)",
            StateCode: "47",
            CountryCode: "BD"
        },
        {
            StateName: "Pabna (49)",
            StateCode: "49",
            CountryCode: "BD"
        },
        {
            StateName: "Panchagarh (52)",
            StateCode: "52",
            CountryCode: "BD"
        },
        {
            StateName: "Patuakhali (51)",
            StateCode: "51",
            CountryCode: "BD"
        },
        {
            StateName: "Pirojpur (50)",
            StateCode: "50",
            CountryCode: "BD"
        },
        {
            StateName: "Rajbari (53)",
            StateCode: "53",
            CountryCode: "BD"
        },
        {
            StateName: "Rajshahi (E)",
            StateCode: "E",
            CountryCode: "BD"
        },
        {
            StateName: "Rajshahi (54)",
            StateCode: "54",
            CountryCode: "BD"
        },
        {
            StateName: "Rangamati (56)",
            StateCode: "56",
            CountryCode: "BD"
        },
        {
            StateName: "Rangpur (F)",
            StateCode: "F",
            CountryCode: "BD"
        },
        {
            StateName: "Rangpur (55)",
            StateCode: "55",
            CountryCode: "BD"
        },
        {
            StateName: "Satkhira (58)",
            StateCode: "58",
            CountryCode: "BD"
        },
        {
            StateName: "Shariatpur (62)",
            StateCode: "62",
            CountryCode: "BD"
        },
        {
            StateName: "Sherpur (57)",
            StateCode: "57",
            CountryCode: "BD"
        },
        {
            StateName: "Sirajganj (59)",
            StateCode: "59",
            CountryCode: "BD"
        },
        {
            StateName: "Sunamganj (61)",
            StateCode: "61",
            CountryCode: "BD"
        },
        {
            StateName: "Sylhet (G*)",
            StateCode: "G*",
            CountryCode: "BD"
        },
        {
            StateName: "Sylhet (60)",
            StateCode: "60",
            CountryCode: "BD"
        },
        {
            StateName: "Tangail (63)",
            StateCode: "63",
            CountryCode: "BD"
        },
        {
            StateName: "Thakurgaon (64)",
            StateCode: "64",
            CountryCode: "BD"
        },
        {
            StateName: "Chuquisaca (H)",
            StateCode: "H",
            CountryCode: "BO"
        },
        {
            StateName: "Cochabamba (C)",
            StateCode: "C",
            CountryCode: "BO"
        },
        {
            StateName: "El Beni (B)",
            StateCode: "B",
            CountryCode: "BO"
        },
        {
            StateName: "La Paz (L)",
            StateCode: "L",
            CountryCode: "BO"
        },
        {
            StateName: "Oruro (O)",
            StateCode: "O",
            CountryCode: "BO"
        },
        {
            StateName: "Pando (N)",
            StateCode: "N",
            CountryCode: "BO"
        },
        {
            StateName: "Potosí (P)",
            StateCode: "P",
            CountryCode: "BO"
        },
        {
            StateName: "Santa Cruz (S)",
            StateCode: "S",
            CountryCode: "BO"
        },
        {
            StateName: "Tarija (T)",
            StateCode: "T",
            CountryCode: "BO"
        },
        {
            StateName: "Blagoevgrad (1)",
            StateCode: "1",
            CountryCode: "BG"
        },
        {
            StateName: "Burgas (2)",
            StateCode: "2",
            CountryCode: "BG"
        },
        {
            StateName: "Dobrich (8)",
            StateCode: "8",
            CountryCode: "BG"
        },
        {
            StateName: "Gabrovo (7)",
            StateCode: "7",
            CountryCode: "BG"
        },
        {
            StateName: "Haskovo (26)",
            StateCode: "26",
            CountryCode: "BG"
        },
        {
            StateName: "Kardzhali (9)",
            StateCode: "9",
            CountryCode: "BG"
        },
        {
            StateName: "Kyustendil (10)",
            StateCode: "10",
            CountryCode: "BG"
        },
        {
            StateName: "Lovech (11)",
            StateCode: "11",
            CountryCode: "BG"
        },
        {
            StateName: "Montana (12)",
            StateCode: "12",
            CountryCode: "BG"
        },
        {
            StateName: "Pazardzhik (13)",
            StateCode: "13",
            CountryCode: "BG"
        },
        {
            StateName: "Pernik (14)",
            StateCode: "14",
            CountryCode: "BG"
        },
        {
            StateName: "Pleven (15)",
            StateCode: "15",
            CountryCode: "BG"
        },
        {
            StateName: "Plovdiv (16)",
            StateCode: "16",
            CountryCode: "BG"
        },
        {
            StateName: "Razgrad (17)",
            StateCode: "17",
            CountryCode: "BG"
        },
        {
            StateName: "Ruse (18)",
            StateCode: "18",
            CountryCode: "BG"
        },
        {
            StateName: "Shumen (27)",
            StateCode: "27",
            CountryCode: "BG"
        },
        {
            StateName: "Silistra (19)",
            StateCode: "19",
            CountryCode: "BG"
        },
        {
            StateName: "Sliven (20)",
            StateCode: "20",
            CountryCode: "BG"
        },
        {
            StateName: "Smolyan (21)",
            StateCode: "21",
            CountryCode: "BG"
        },
        {
            StateName: "Sofia (23)",
            StateCode: "23",
            CountryCode: "BG"
        },
        {
            StateName: "Sofia (stolitsa) (22)",
            StateCode: "22",
            CountryCode: "BG"
        },
        {
            StateName: "Stara Zagora (24)",
            StateCode: "24",
            CountryCode: "BG"
        },
        {
            StateName: "Targovishte (25)",
            StateCode: "25",
            CountryCode: "BG"
        },
        {
            StateName: "Varna (3)",
            StateCode: "3",
            CountryCode: "BG"
        },
        {
            StateName: "Veliko Tarnovo (4)",
            StateCode: "4",
            CountryCode: "BG"
        },
        {
            StateName: "Vidin (5)",
            StateCode: "5",
            CountryCode: "BG"
        },
        {
            StateName: "Vratsa (6)",
            StateCode: "6",
            CountryCode: "BG"
        },
        {
            StateName: "Yambol (28)",
            StateCode: "28",
            CountryCode: "BG"
        },
        {
            StateName: "Baat Dambang (2)",
            StateCode: "2",
            CountryCode: "KH"
        },
        {
            StateName: "Banteay Mean Chey (1)",
            StateCode: "1",
            CountryCode: "KH"
        },
        {
            StateName: "Bântéay Méanchey (1)",
            StateCode: "1",
            CountryCode: "KH"
        },
        {
            StateName: "Bătdâmbâng (2)",
            StateCode: "2",
            CountryCode: "KH"
        },
        {
            StateName: "Kaeb (23)",
            StateCode: "23",
            CountryCode: "KH"
        },
        {
            StateName: "Kampong Chaam (3)",
            StateCode: "3",
            CountryCode: "KH"
        },
        {
            StateName: "Kampong Chhnang (4)",
            StateCode: "4",
            CountryCode: "KH"
        },
        {
            StateName: "Kampong Spueu (5)",
            StateCode: "5",
            CountryCode: "KH"
        },
        {
            StateName: "Kampong Thum (6)",
            StateCode: "6",
            CountryCode: "KH"
        },
        {
            StateName: "Kampot (7)",
            StateCode: "7",
            CountryCode: "KH"
        },
        {
            StateName: "Kandaal (8)",
            StateCode: "8",
            CountryCode: "KH"
        },
        {
            StateName: "Kaoh Kong (9)",
            StateCode: "9",
            CountryCode: "KH"
        },
        {
            StateName: "Kaôh Kŏng (9)",
            StateCode: "9",
            CountryCode: "KH"
        },
        {
            StateName: "Kracheh (10)",
            StateCode: "10",
            CountryCode: "KH"
        },
        {
            StateName: "Krâchéh (10)",
            StateCode: "10",
            CountryCode: "KH"
        },
        {
            StateName: "Kâmpóng Cham (3)",
            StateCode: "3",
            CountryCode: "KH"
        },
        {
            StateName: "Kâmpóng Chhnăng (4)",
            StateCode: "4",
            CountryCode: "KH"
        },
        {
            StateName: "Kâmpóng Spœ (5)",
            StateCode: "5",
            CountryCode: "KH"
        },
        {
            StateName: "Kâmpóng Thum (6)",
            StateCode: "6",
            CountryCode: "KH"
        },
        {
            StateName: "Kâmpôt (7)",
            StateCode: "7",
            CountryCode: "KH"
        },
        {
            StateName: "Kândal (8)",
            StateCode: "8",
            CountryCode: "KH"
        },
        {
            StateName: "Kêb (23)",
            StateCode: "23",
            CountryCode: "KH"
        },
        {
            StateName: "Mondol Kiri (11)",
            StateCode: "11",
            CountryCode: "KH"
        },
        {
            StateName: "Môndól Kiri (11)",
            StateCode: "11",
            CountryCode: "KH"
        },
        {
            StateName: "Otdar Mean Chey (22)",
            StateCode: "22",
            CountryCode: "KH"
        },
        {
            StateName: "Pailin (24)",
            StateCode: "24",
            CountryCode: "KH"
        },
        {
            StateName: "Pailĭn (24)",
            StateCode: "24",
            CountryCode: "KH"
        },
        {
            StateName: "Phnom Penh (12)",
            StateCode: "12",
            CountryCode: "KH"
        },
        {
            StateName: "Phnum Pénh (12)",
            StateCode: "12",
            CountryCode: "KH"
        },
        {
            StateName: "Pousaat (15)",
            StateCode: "15",
            CountryCode: "KH"
        },
        {
            StateName: "Poŭthĭsăt (15)",
            StateCode: "15",
            CountryCode: "KH"
        },
        {
            StateName: "Preah Sihanouk (18)",
            StateCode: "18",
            CountryCode: "KH"
        },
        {
            StateName: "Preah Vihear (13)",
            StateCode: "13",
            CountryCode: "KH"
        },
        {
            StateName: "Prey Veaeng (14)",
            StateCode: "14",
            CountryCode: "KH"
        },
        {
            StateName: "Prey Vêng (14)",
            StateCode: "14",
            CountryCode: "KH"
        },
        {
            StateName: "Preăh Sihanouk (18)",
            StateCode: "18",
            CountryCode: "KH"
        },
        {
            StateName: "Preăh Vihéar (13)",
            StateCode: "13",
            CountryCode: "KH"
        },
        {
            StateName: "Rotanak Kiri (16)",
            StateCode: "16",
            CountryCode: "KH"
        },
        {
            StateName: "Rôtânôkiri (16)",
            StateCode: "16",
            CountryCode: "KH"
        },
        {
            StateName: "Siem Reab (17)",
            StateCode: "17",
            CountryCode: "KH"
        },
        {
            StateName: "Siĕmréab (17)",
            StateCode: "17",
            CountryCode: "KH"
        },
        {
            StateName: "Stoĕng Trêng (19)",
            StateCode: "19",
            CountryCode: "KH"
        },
        {
            StateName: "Stueng Traeng (19)",
            StateCode: "19",
            CountryCode: "KH"
        },
        {
            StateName: "Svaay Rieng (20)",
            StateCode: "20",
            CountryCode: "KH"
        },
        {
            StateName: "Svay Riĕng (20)",
            StateCode: "20",
            CountryCode: "KH"
        },
        {
            StateName: "Taakaev (21)",
            StateCode: "21",
            CountryCode: "KH"
        },
        {
            StateName: "Takêv (21)",
            StateCode: "21",
            CountryCode: "KH"
        },
        {
            StateName: "Tbong Khmum (25)",
            StateCode: "25",
            CountryCode: "KH"
        },
        {
            StateName: "Tbong Khmŭm (25)",
            StateCode: "25",
            CountryCode: "KH"
        },
        {
            StateName: "Ŏtdâr Méanchey (22)",
            StateCode: "22",
            CountryCode: "KH"
        },
        {
            StateName: "Aisén del General Carlos Ibañez del Campo (AI)",
            StateCode: "AI",
            CountryCode: "CL"
        },
        {
            StateName: "Antofagasta (AN)",
            StateCode: "AN",
            CountryCode: "CL"
        },
        {
            StateName: "Arica y Parinacota (AP)",
            StateCode: "AP",
            CountryCode: "CL"
        },
        {
            StateName: "Atacama (AT)",
            StateCode: "AT",
            CountryCode: "CL"
        },
        {
            StateName: "Biobío (BI)",
            StateCode: "BI",
            CountryCode: "CL"
        },
        {
            StateName: "Coquimbo (CO)",
            StateCode: "CO",
            CountryCode: "CL"
        },
        {
            StateName: "La Araucanía (AR)",
            StateCode: "AR",
            CountryCode: "CL"
        },
        {
            StateName: "Libertador General Bernardo O'Higgins (LI)",
            StateCode: "LI",
            CountryCode: "CL"
        },
        {
            StateName: "Los Lagos (LL)",
            StateCode: "LL",
            CountryCode: "CL"
        },
        {
            StateName: "Los Ríos (LR)",
            StateCode: "LR",
            CountryCode: "CL"
        },
        {
            StateName: "Magallanes (MA)",
            StateCode: "MA",
            CountryCode: "CL"
        },
        {
            StateName: "Maule (ML)",
            StateCode: "ML",
            CountryCode: "CL"
        },
        {
            StateName: "Región Metropolitana de Santiago (RM)",
            StateCode: "RM",
            CountryCode: "CL"
        },
        {
            StateName: "Tarapacá (TA)",
            StateCode: "TA",
            CountryCode: "CL"
        },
        {
            StateName: "Valparaíso (VS)",
            StateCode: "VS",
            CountryCode: "CL"
        },
        {
            StateName: "Ñuble (NB)",
            StateCode: "NB",
            CountryCode: "CL"
        },
        {
            StateName: "Al Baţḩah (BA)",
            StateCode: "BA",
            CountryCode: "TD"
        },
        {
            StateName: "Al Buḩayrah (LC)",
            StateCode: "LC",
            CountryCode: "TD"
        },
        {
            StateName: "Bahr el Ghazal (BG)",
            StateCode: "BG",
            CountryCode: "TD"
        },
        {
            StateName: "Batha (BA)",
            StateCode: "BA",
            CountryCode: "TD"
        },
        {
            StateName: "Baḩr al Ghazāl (BG)",
            StateCode: "BG",
            CountryCode: "TD"
        },
        {
            StateName: "Borkou (BO)",
            StateCode: "BO",
            CountryCode: "TD"
        },
        {
            StateName: "Būrkū (BO)",
            StateCode: "BO",
            CountryCode: "TD"
        },
        {
            StateName: "Chari-Baguirmi (CB)",
            StateCode: "CB",
            CountryCode: "TD"
        },
        {
            StateName: "Ennedi-Est (EE)",
            StateCode: "EE",
            CountryCode: "TD"
        },
        {
            StateName: "Ennedi-Ouest (EO)",
            StateCode: "EO",
            CountryCode: "TD"
        },
        {
            StateName: "Guéra (GR)",
            StateCode: "GR",
            CountryCode: "TD"
        },
        {
            StateName: "Hadjer Lamis (HL)",
            StateCode: "HL",
            CountryCode: "TD"
        },
        {
            StateName: "Kanem (KA)",
            StateCode: "KA",
            CountryCode: "TD"
        },
        {
            StateName: "Kānim (KA)",
            StateCode: "KA",
            CountryCode: "TD"
        },
        {
            StateName: "Lac (LC)",
            StateCode: "LC",
            CountryCode: "TD"
        },
        {
            StateName: "Logone-Occidental (LO)",
            StateCode: "LO",
            CountryCode: "TD"
        },
        {
            StateName: "Logone-Oriental (LR)",
            StateCode: "LR",
            CountryCode: "TD"
        },
        {
            StateName: "Lūqūn al Gharbī (LO)",
            StateCode: "LO",
            CountryCode: "TD"
        },
        {
            StateName: "Lūqūn ash Sharqī (LR)",
            StateCode: "LR",
            CountryCode: "TD"
        },
        {
            StateName: "Madīnat Injamīnā (ND)",
            StateCode: "ND",
            CountryCode: "TD"
        },
        {
            StateName: "Mandoul (MA)",
            StateCode: "MA",
            CountryCode: "TD"
        },
        {
            StateName: "Mayo-Kebbi-Est (ME)",
            StateCode: "ME",
            CountryCode: "TD"
        },
        {
            StateName: "Mayo-Kebbi-Ouest (MO)",
            StateCode: "MO",
            CountryCode: "TD"
        },
        {
            StateName: "Moyen-Chari (MC)",
            StateCode: "MC",
            CountryCode: "TD"
        },
        {
            StateName: "Māndūl (MA)",
            StateCode: "MA",
            CountryCode: "TD"
        },
        {
            StateName: "Māyū Kībbī al Gharbī (MO)",
            StateCode: "MO",
            CountryCode: "TD"
        },
        {
            StateName: "Māyū Kībbī ash Sharqī (ME)",
            StateCode: "ME",
            CountryCode: "TD"
        },
        {
            StateName: "Ouaddaï (OD)",
            StateCode: "OD",
            CountryCode: "TD"
        },
        {
            StateName: "Qīrā (GR)",
            StateCode: "GR",
            CountryCode: "TD"
        },
        {
            StateName: "Salamat (SA)",
            StateCode: "SA",
            CountryCode: "TD"
        },
        {
            StateName: "Salāmāt (SA)",
            StateCode: "SA",
            CountryCode: "TD"
        },
        {
            StateName: "Shārī Bāqirmī (CB)",
            StateCode: "CB",
            CountryCode: "TD"
        },
        {
            StateName: "Shārī al Awsaţ (MC)",
            StateCode: "MC",
            CountryCode: "TD"
        },
        {
            StateName: "Sila (SI)",
            StateCode: "SI",
            CountryCode: "TD"
        },
        {
            StateName: "Sīlā (SI)",
            StateCode: "SI",
            CountryCode: "TD"
        },
        {
            StateName: "Tandjilé (TA)",
            StateCode: "TA",
            CountryCode: "TD"
        },
        {
            StateName: "Tibastī (TI)",
            StateCode: "TI",
            CountryCode: "TD"
        },
        {
            StateName: "Tibesti (TI)",
            StateCode: "TI",
            CountryCode: "TD"
        },
        {
            StateName: "Tānjilī (TA)",
            StateCode: "TA",
            CountryCode: "TD"
        },
        {
            StateName: "Ville de Ndjamena (ND)",
            StateCode: "ND",
            CountryCode: "TD"
        },
        {
            StateName: "Waddāy (OD)",
            StateCode: "OD",
            CountryCode: "TD"
        },
        {
            StateName: "Wadi Fira (WF)",
            StateCode: "WF",
            CountryCode: "TD"
        },
        {
            StateName: "Wādī Fīrā (WF)",
            StateCode: "WF",
            CountryCode: "TD"
        },
        {
            StateName: "Ḩajjar Lamīs (HL)",
            StateCode: "HL",
            CountryCode: "TD"
        },
        {
            StateName: "Alberta (AB)",
            StateCode: "AB",
            CountryCode: "CA"
        },
        {
            StateName: "British Columbia (BC)",
            StateCode: "BC",
            CountryCode: "CA"
        },
        {
            StateName: "Colombie-Britannique (BC)",
            StateCode: "BC",
            CountryCode: "CA"
        },
        {
            StateName: "Manitoba (MB)",
            StateCode: "MB",
            CountryCode: "CA"
        },
        {
            StateName: "New Brunswick (NB)",
            StateCode: "NB",
            CountryCode: "CA"
        },
        {
            StateName: "Newfoundland and Labrador (NL)",
            StateCode: "NL",
            CountryCode: "CA"
        },
        {
            StateName: "Northwest Territories (NT)",
            StateCode: "NT",
            CountryCode: "CA"
        },
        {
            StateName: "Nouveau-Brunswick (NB)",
            StateCode: "NB",
            CountryCode: "CA"
        },
        {
            StateName: "Nouvelle-Écosse (NS)",
            StateCode: "NS",
            CountryCode: "CA"
        },
        {
            StateName: "Nova Scotia (NS)",
            StateCode: "NS",
            CountryCode: "CA"
        },
        {
            StateName: "Nunavut (NU)",
            StateCode: "NU",
            CountryCode: "CA"
        },
        {
            StateName: "Ontario (ON)",
            StateCode: "ON",
            CountryCode: "CA"
        },
        {
            StateName: "Prince Edward Island (PE)",
            StateCode: "PE",
            CountryCode: "CA"
        },
        {
            StateName: "Quebec (QC)",
            StateCode: "QC",
            CountryCode: "CA"
        },
        {
            StateName: "Québec (QC)",
            StateCode: "QC",
            CountryCode: "CA"
        },
        {
            StateName: "Saskatchewan (SK)",
            StateCode: "SK",
            CountryCode: "CA"
        },
        {
            StateName: "Terre-Neuve-et-Labrador (NL)",
            StateCode: "NL",
            CountryCode: "CA"
        },
        {
            StateName: "Territoires du Nord-Ouest (NT)",
            StateCode: "NT",
            CountryCode: "CA"
        },
        {
            StateName: "Yukon (YT)",
            StateCode: "YT",
            CountryCode: "CA"
        },
        {
            StateName: "Île-du-Prince-Édouard (PE)",
            StateCode: "PE",
            CountryCode: "CA"
        },
        {
            StateName: "Saint Andrew (2)",
            StateCode: "2",
            CountryCode: "DM"
        },
        {
            StateName: "Saint David (3)",
            StateCode: "3",
            CountryCode: "DM"
        },
        {
            StateName: "Saint George (4)",
            StateCode: "4",
            CountryCode: "DM"
        },
        {
            StateName: "Saint John (5)",
            StateCode: "5",
            CountryCode: "DM"
        },
        {
            StateName: "Saint Joseph (6)",
            StateCode: "6",
            CountryCode: "DM"
        },
        {
            StateName: "Saint Luke (7)",
            StateCode: "7",
            CountryCode: "DM"
        },
        {
            StateName: "Saint Mark (8)",
            StateCode: "8",
            CountryCode: "DM"
        },
        {
            StateName: "Saint Patrick (9)",
            StateCode: "9",
            CountryCode: "DM"
        },
        {
            StateName: "Saint Paul (10)",
            StateCode: "10",
            CountryCode: "DM"
        },
        {
            StateName: "Saint Peter (11)",
            StateCode: "11",
            CountryCode: "DM"
        },
        {
            StateName: "Ad Daqahlīyah (DK)",
            StateCode: "DK",
            CountryCode: "EG"
        },
        {
            StateName: "Al Baḩr al Aḩmar (BA)",
            StateCode: "BA",
            CountryCode: "EG"
        },
        {
            StateName: "Al Buḩayrah (BH)",
            StateCode: "BH",
            CountryCode: "EG"
        },
        {
            StateName: "Al Fayyūm (FYM)",
            StateCode: "FYM",
            CountryCode: "EG"
        },
        {
            StateName: "Al Gharbīyah (GH)",
            StateCode: "GH",
            CountryCode: "EG"
        },
        {
            StateName: "Al Iskandarīyah (ALX)",
            StateCode: "ALX",
            CountryCode: "EG"
        },
        {
            StateName: "Al Ismā'īlīyah (IS)",
            StateCode: "IS",
            CountryCode: "EG"
        },
        {
            StateName: "Al Jīzah (GZ)",
            StateCode: "GZ",
            CountryCode: "EG"
        },
        {
            StateName: "Al Minyā (MN)",
            StateCode: "MN",
            CountryCode: "EG"
        },
        {
            StateName: "Al Minūfīyah (MNF)",
            StateCode: "MNF",
            CountryCode: "EG"
        },
        {
            StateName: "Al Qalyūbīyah (KB)",
            StateCode: "KB",
            CountryCode: "EG"
        },
        {
            StateName: "Al Qāhirah (C)",
            StateCode: "C",
            CountryCode: "EG"
        },
        {
            StateName: "Al Uqşur (LX)",
            StateCode: "LX",
            CountryCode: "EG"
        },
        {
            StateName: "Al Wādī al Jadīd (WAD)",
            StateCode: "WAD",
            CountryCode: "EG"
        },
        {
            StateName: "As Suways (SUZ)",
            StateCode: "SUZ",
            CountryCode: "EG"
        },
        {
            StateName: "Ash Sharqīyah (SHR)",
            StateCode: "SHR",
            CountryCode: "EG"
        },
        {
            StateName: "Aswān (ASN)",
            StateCode: "ASN",
            CountryCode: "EG"
        },
        {
            StateName: "Asyūţ (AST)",
            StateCode: "AST",
            CountryCode: "EG"
        },
        {
            StateName: "Banī Suwayf (BNS)",
            StateCode: "BNS",
            CountryCode: "EG"
        },
        {
            StateName: "Būr Sa‘īd (PTS)",
            StateCode: "PTS",
            CountryCode: "EG"
        },
        {
            StateName: "Dumyāţ (DT)",
            StateCode: "DT",
            CountryCode: "EG"
        },
        {
            StateName: "Janūb Sīnā' (JS)",
            StateCode: "JS",
            CountryCode: "EG"
        },
        {
            StateName: "Kafr ash Shaykh (KFS)",
            StateCode: "KFS",
            CountryCode: "EG"
        },
        {
            StateName: "Maţrūḩ (MT)",
            StateCode: "MT",
            CountryCode: "EG"
        },
        {
            StateName: "Qinā (KN)",
            StateCode: "KN",
            CountryCode: "EG"
        },
        {
            StateName: "Shamāl Sīnā' (SIN)",
            StateCode: "SIN",
            CountryCode: "EG"
        },
        {
            StateName: "Sūhāj (SHG)",
            StateCode: "SHG",
            CountryCode: "EG"
        },
        {
            StateName: "Ahuachapán (AH)",
            StateCode: "AH",
            CountryCode: "SV"
        },
        {
            StateName: "Cabañas (CA)",
            StateCode: "CA",
            CountryCode: "SV"
        },
        {
            StateName: "Chalatenango (CH)",
            StateCode: "CH",
            CountryCode: "SV"
        },
        {
            StateName: "Cuscatlán (CU)",
            StateCode: "CU",
            CountryCode: "SV"
        },
        {
            StateName: "La Libertad (LI)",
            StateCode: "LI",
            CountryCode: "SV"
        },
        {
            StateName: "La Paz (PA)",
            StateCode: "PA",
            CountryCode: "SV"
        },
        {
            StateName: "La Unión (UN)",
            StateCode: "UN",
            CountryCode: "SV"
        },
        {
            StateName: "Morazán (MO)",
            StateCode: "MO",
            CountryCode: "SV"
        },
        {
            StateName: "San Miguel (SM)",
            StateCode: "SM",
            CountryCode: "SV"
        },
        {
            StateName: "San Salvador (SS)",
            StateCode: "SS",
            CountryCode: "SV"
        },
        {
            StateName: "San Vicente (SV)",
            StateCode: "SV",
            CountryCode: "SV"
        },
        {
            StateName: "Santa Ana (SA)",
            StateCode: "SA",
            CountryCode: "SV"
        },
        {
            StateName: "Sonsonate (SO)",
            StateCode: "SO",
            CountryCode: "SV"
        },
        {
            StateName: "Usulután (US)",
            StateCode: "US",
            CountryCode: "SV"
        },
        {
            StateName: "Harjumaa (37)",
            StateCode: "37",
            CountryCode: "EE"
        },
        {
            StateName: "Hiiumaa (39)",
            StateCode: "39",
            CountryCode: "EE"
        },
        {
            StateName: "Ida-Virumaa (44)",
            StateCode: "44",
            CountryCode: "EE"
        },
        {
            StateName: "Järvamaa (51)",
            StateCode: "51",
            CountryCode: "EE"
        },
        {
            StateName: "Jõgevamaa (49)",
            StateCode: "49",
            CountryCode: "EE"
        },
        {
            StateName: "Lääne-Virumaa (59)",
            StateCode: "59",
            CountryCode: "EE"
        },
        {
            StateName: "Läänemaa (57)",
            StateCode: "57",
            CountryCode: "EE"
        },
        {
            StateName: "Pärnumaa (67)",
            StateCode: "67",
            CountryCode: "EE"
        },
        {
            StateName: "Põlvamaa (65)",
            StateCode: "65",
            CountryCode: "EE"
        },
        {
            StateName: "Raplamaa (70)",
            StateCode: "70",
            CountryCode: "EE"
        },
        {
            StateName: "Saaremaa (74)",
            StateCode: "74",
            CountryCode: "EE"
        },
        {
            StateName: "Tartumaa (78)",
            StateCode: "78",
            CountryCode: "EE"
        },
        {
            StateName: "Valgamaa (82)",
            StateCode: "82",
            CountryCode: "EE"
        },
        {
            StateName: "Viljandimaa (84)",
            StateCode: "84",
            CountryCode: "EE"
        },
        {
            StateName: "Võrumaa (86)",
            StateCode: "86",
            CountryCode: "EE"
        },
        {
            StateName: "Addis Ababa (AA)",
            StateCode: "AA",
            CountryCode: "ET"
        },
        {
            StateName: "Afar (AF)",
            StateCode: "AF",
            CountryCode: "ET"
        },
        {
            StateName: "Amara (AM)",
            StateCode: "AM",
            CountryCode: "ET"
        },
        {
            StateName: "Benshangul-Gumaz (BE)",
            StateCode: "BE",
            CountryCode: "ET"
        },
        {
            StateName: "Bīnshangul Gumuz (BE)",
            StateCode: "BE",
            CountryCode: "ET"
        },
        {
            StateName: "Dire Dawa (DD)",
            StateCode: "DD",
            CountryCode: "ET"
        },
        {
            StateName: "Dirē Dawa (DD)",
            StateCode: "DD",
            CountryCode: "ET"
        },
        {
            StateName: "Gambela Peoples (GA)",
            StateCode: "GA",
            CountryCode: "ET"
        },
        {
            StateName: "Gambēla Hizboch (GA)",
            StateCode: "GA",
            CountryCode: "ET"
        },
        {
            StateName: "Harari People (HA)",
            StateCode: "HA",
            CountryCode: "ET"
        },
        {
            StateName: "Hārerī Hizb (HA)",
            StateCode: "HA",
            CountryCode: "ET"
        },
        {
            StateName: "Oromia (OR)",
            StateCode: "OR",
            CountryCode: "ET"
        },
        {
            StateName: "Oromīya (OR)",
            StateCode: "OR",
            CountryCode: "ET"
        },
        {
            StateName: "Somali (SO)",
            StateCode: "SO",
            CountryCode: "ET"
        },
        {
            StateName: "Southern Nations, Nationalities and Peoples (SN)",
            StateCode: "SN",
            CountryCode: "ET"
        },
        {
            StateName: "Sumalē (SO)",
            StateCode: "SO",
            CountryCode: "ET"
        },
        {
            StateName: "Tigrai (TI)",
            StateCode: "TI",
            CountryCode: "ET"
        },
        {
            StateName: "Tigray (TI)",
            StateCode: "TI",
            CountryCode: "ET"
        },
        {
            StateName: "YeDebub Bihēroch Bihēreseboch na Hizboch (SN)",
            StateCode: "SN",
            CountryCode: "ET"
        },
        {
            StateName: "Ādīs Ābeba (AA)",
            StateCode: "AA",
            CountryCode: "ET"
        },
        {
            StateName: "Āfar (AF)",
            StateCode: "AF",
            CountryCode: "ET"
        },
        {
            StateName: "Āmara (AM)",
            StateCode: "AM",
            CountryCode: "ET"
        },
        {
            StateName: "Ahvenanmaan maakunta (1)",
            StateCode: "1",
            CountryCode: "FI"
        },
        {
            StateName: "Birkaland (11)",
            StateCode: "11",
            CountryCode: "FI"
        },
        {
            StateName: "Egentliga Finland (19)",
            StateCode: "19",
            CountryCode: "FI"
        },
        {
            StateName: "Egentliga Tavastland (6)",
            StateCode: "6",
            CountryCode: "FI"
        },
        {
            StateName: "Etelä-Karjala (2)",
            StateCode: "2",
            CountryCode: "FI"
        },
        {
            StateName: "Etelä-Pohjanmaa (3)",
            StateCode: "3",
            CountryCode: "FI"
        },
        {
            StateName: "Etelä-Savo (4)",
            StateCode: "4",
            CountryCode: "FI"
        },
        {
            StateName: "Kainuu (5)",
            StateCode: "5",
            CountryCode: "FI"
        },
        {
            StateName: "Kajanaland (5)",
            StateCode: "5",
            CountryCode: "FI"
        },
        {
            StateName: "Kanta-Häme (6)",
            StateCode: "6",
            CountryCode: "FI"
        },
        {
            StateName: "Keski-Pohjanmaa (7)",
            StateCode: "7",
            CountryCode: "FI"
        },
        {
            StateName: "Keski-Suomi (8)",
            StateCode: "8",
            CountryCode: "FI"
        },
        {
            StateName: "Kymenlaakso (9)",
            StateCode: "9",
            CountryCode: "FI"
        },
        {
            StateName: "Kymmenedalen (9)",
            StateCode: "9",
            CountryCode: "FI"
        },
        {
            StateName: "Landskapet Åland (1)",
            StateCode: "1",
            CountryCode: "FI"
        },
        {
            StateName: "Lappi (10)",
            StateCode: "10",
            CountryCode: "FI"
        },
        {
            StateName: "Lappland (10)",
            StateCode: "10",
            CountryCode: "FI"
        },
        {
            StateName: "Mellersta Finland (8)",
            StateCode: "8",
            CountryCode: "FI"
        },
        {
            StateName: "Mellersta Österbotten (7)",
            StateCode: "7",
            CountryCode: "FI"
        },
        {
            StateName: "Norra Karelen (13)",
            StateCode: "13",
            CountryCode: "FI"
        },
        {
            StateName: "Norra Savolax (15)",
            StateCode: "15",
            CountryCode: "FI"
        },
        {
            StateName: "Norra Österbotten (14)",
            StateCode: "14",
            CountryCode: "FI"
        },
        {
            StateName: "Nyland (18)",
            StateCode: "18",
            CountryCode: "FI"
        },
        {
            StateName: "Pirkanmaa (11)",
            StateCode: "11",
            CountryCode: "FI"
        },
        {
            StateName: "Pohjanmaa (12)",
            StateCode: "12",
            CountryCode: "FI"
        },
        {
            StateName: "Pohjois-Karjala (13)",
            StateCode: "13",
            CountryCode: "FI"
        },
        {
            StateName: "Pohjois-Pohjanmaa (14)",
            StateCode: "14",
            CountryCode: "FI"
        },
        {
            StateName: "Pohjois-Savo (15)",
            StateCode: "15",
            CountryCode: "FI"
        },
        {
            StateName: "Päijänne-Tavastland (16)",
            StateCode: "16",
            CountryCode: "FI"
        },
        {
            StateName: "Päijät-Häme (16)",
            StateCode: "16",
            CountryCode: "FI"
        },
        {
            StateName: "Satakunda (17)",
            StateCode: "17",
            CountryCode: "FI"
        },
        {
            StateName: "Satakunta (17)",
            StateCode: "17",
            CountryCode: "FI"
        },
        {
            StateName: "Södra Karelen (2)",
            StateCode: "2",
            CountryCode: "FI"
        },
        {
            StateName: "Södra Savolax (4)",
            StateCode: "4",
            CountryCode: "FI"
        },
        {
            StateName: "Södra Österbotten (3)",
            StateCode: "3",
            CountryCode: "FI"
        },
        {
            StateName: "Uusimaa (18)",
            StateCode: "18",
            CountryCode: "FI"
        },
        {
            StateName: "Varsinais-Suomi (19)",
            StateCode: "19",
            CountryCode: "FI"
        },
        {
            StateName: "Österbotten (12)",
            StateCode: "12",
            CountryCode: "FI"
        },
        {
            StateName: "Ashanti (AH)",
            StateCode: "AH",
            CountryCode: "GH"
        },
        {
            StateName: "Brong-Ahafo (BA)",
            StateCode: "BA",
            CountryCode: "GH"
        },
        {
            StateName: "Central (CP)",
            StateCode: "CP",
            CountryCode: "GH"
        },
        {
            StateName: "Eastern (EP)",
            StateCode: "EP",
            CountryCode: "GH"
        },
        {
            StateName: "Greater Accra (AA)",
            StateCode: "AA",
            CountryCode: "GH"
        },
        {
            StateName: "Northern (NP)",
            StateCode: "NP",
            CountryCode: "GH"
        },
        {
            StateName: "Upper East (UE)",
            StateCode: "UE",
            CountryCode: "GH"
        },
        {
            StateName: "Upper West (UW)",
            StateCode: "UW",
            CountryCode: "GH"
        },
        {
            StateName: "Volta (TV)",
            StateCode: "TV",
            CountryCode: "GH"
        },
        {
            StateName: "Western (WP)",
            StateCode: "WP",
            CountryCode: "GH"
        },
        {
            StateName: "Anatolikí Makedonía kai Thráki (A)",
            StateCode: "A",
            CountryCode: "GR"
        },
        {
            StateName: "Attikí (I)",
            StateCode: "I",
            CountryCode: "GR"
        },
        {
            StateName: "Dytikí Elláda (G)",
            StateCode: "G",
            CountryCode: "GR"
        },
        {
            StateName: "Dytikí Makedonía (C)",
            StateCode: "C",
            CountryCode: "GR"
        },
        {
            StateName: "Ionía Nísia (F)",
            StateCode: "F",
            CountryCode: "GR"
        },
        {
            StateName: "Kentrikí Makedonía (B)",
            StateCode: "B",
            CountryCode: "GR"
        },
        {
            StateName: "Kríti (M)",
            StateCode: "M",
            CountryCode: "GR"
        },
        {
            StateName: "Notío Aigaío (L)",
            StateCode: "L",
            CountryCode: "GR"
        },
        {
            StateName: "Peloponnísos (J)",
            StateCode: "J",
            CountryCode: "GR"
        },
        {
            StateName: "Stereá Elláda (H)",
            StateCode: "H",
            CountryCode: "GR"
        },
        {
            StateName: "Thessalía (E)",
            StateCode: "E",
            CountryCode: "GR"
        },
        {
            StateName: "Voreío Aigaío (K)",
            StateCode: "K",
            CountryCode: "GR"
        },
        {
            StateName: "Ágion Óros (69)",
            StateCode: "69",
            CountryCode: "GR"
        },
        {
            StateName: "Ípeiros (D)",
            StateCode: "D",
            CountryCode: "GR"
        },
        {
            StateName: "Avannaata Kommunia (AV)",
            StateCode: "AV",
            CountryCode: "GL"
        },
        {
            StateName: "Kommune Kujalleq (KU)",
            StateCode: "KU",
            CountryCode: "GL"
        },
        {
            StateName: "Kommune Qeqertalik (QT)",
            StateCode: "QT",
            CountryCode: "GL"
        },
        {
            StateName: "Kommuneqarfik Sermersooq (SM)",
            StateCode: "SM",
            CountryCode: "GL"
        },
        {
            StateName: "Qeqqata Kommunia (QE)",
            StateCode: "QE",
            CountryCode: "GL"
        },
        {
            StateName: "Alta Verapaz (AV)",
            StateCode: "AV",
            CountryCode: "GT"
        },
        {
            StateName: "Baja Verapaz (BV)",
            StateCode: "BV",
            CountryCode: "GT"
        },
        {
            StateName: "Chimaltenango (CM)",
            StateCode: "CM",
            CountryCode: "GT"
        },
        {
            StateName: "Chiquimula (CQ)",
            StateCode: "CQ",
            CountryCode: "GT"
        },
        {
            StateName: "El Progreso (PR)",
            StateCode: "PR",
            CountryCode: "GT"
        },
        {
            StateName: "Escuintla (ES)",
            StateCode: "ES",
            CountryCode: "GT"
        },
        {
            StateName: "Guatemala (GU)",
            StateCode: "GU",
            CountryCode: "GT"
        },
        {
            StateName: "Huehuetenango (HU)",
            StateCode: "HU",
            CountryCode: "GT"
        },
        {
            StateName: "Izabal (IZ)",
            StateCode: "IZ",
            CountryCode: "GT"
        },
        {
            StateName: "Jalapa (JA)",
            StateCode: "JA",
            CountryCode: "GT"
        },
        {
            StateName: "Jutiapa (JU)",
            StateCode: "JU",
            CountryCode: "GT"
        },
        {
            StateName: "Petén (PE)",
            StateCode: "PE",
            CountryCode: "GT"
        },
        {
            StateName: "Quetzaltenango (QZ)",
            StateCode: "QZ",
            CountryCode: "GT"
        },
        {
            StateName: "Quiché (QC)",
            StateCode: "QC",
            CountryCode: "GT"
        },
        {
            StateName: "Retalhuleu (RE)",
            StateCode: "RE",
            CountryCode: "GT"
        },
        {
            StateName: "Sacatepéquez (SA)",
            StateCode: "SA",
            CountryCode: "GT"
        },
        {
            StateName: "San Marcos (SM)",
            StateCode: "SM",
            CountryCode: "GT"
        },
        {
            StateName: "Santa Rosa (SR)",
            StateCode: "SR",
            CountryCode: "GT"
        },
        {
            StateName: "Sololá (SO)",
            StateCode: "SO",
            CountryCode: "GT"
        },
        {
            StateName: "Suchitepéquez (SU)",
            StateCode: "SU",
            CountryCode: "GT"
        },
        {
            StateName: "Totonicapán (TO)",
            StateCode: "TO",
            CountryCode: "GT"
        },
        {
            StateName: "Zacapa (ZA)",
            StateCode: "ZA",
            CountryCode: "GT"
        },
        {
            StateName: "Beyla (BE)",
            StateCode: "BE",
            CountryCode: "GN"
        },
        {
            StateName: "Boffa (BF)",
            StateCode: "BF",
            CountryCode: "GN"
        },
        {
            StateName: "Boké (B)",
            StateCode: "B",
            CountryCode: "GN"
        },
        {
            StateName: "Boké (BK)",
            StateCode: "BK",
            CountryCode: "GN"
        },
        {
            StateName: "Conakry (C)",
            StateCode: "C",
            CountryCode: "GN"
        },
        {
            StateName: "Coyah (CO)",
            StateCode: "CO",
            CountryCode: "GN"
        },
        {
            StateName: "Dabola (DB)",
            StateCode: "DB",
            CountryCode: "GN"
        },
        {
            StateName: "Dalaba (DL)",
            StateCode: "DL",
            CountryCode: "GN"
        },
        {
            StateName: "Dinguiraye (DI)",
            StateCode: "DI",
            CountryCode: "GN"
        },
        {
            StateName: "Dubréka (DU)",
            StateCode: "DU",
            CountryCode: "GN"
        },
        {
            StateName: "Faranah (F)",
            StateCode: "F",
            CountryCode: "GN"
        },
        {
            StateName: "Faranah (FA)",
            StateCode: "FA",
            CountryCode: "GN"
        },
        {
            StateName: "Forécariah (FO)",
            StateCode: "FO",
            CountryCode: "GN"
        },
        {
            StateName: "Fria (FR)",
            StateCode: "FR",
            CountryCode: "GN"
        },
        {
            StateName: "Gaoual (GA)",
            StateCode: "GA",
            CountryCode: "GN"
        },
        {
            StateName: "Guékédou (GU)",
            StateCode: "GU",
            CountryCode: "GN"
        },
        {
            StateName: "Kankan (K)",
            StateCode: "K",
            CountryCode: "GN"
        },
        {
            StateName: "Kankan (KA)",
            StateCode: "KA",
            CountryCode: "GN"
        },
        {
            StateName: "Kindia (D)",
            StateCode: "D",
            CountryCode: "GN"
        },
        {
            StateName: "Kindia (KD)",
            StateCode: "KD",
            CountryCode: "GN"
        },
        {
            StateName: "Kissidougou (KS)",
            StateCode: "KS",
            CountryCode: "GN"
        },
        {
            StateName: "Koubia (KB)",
            StateCode: "KB",
            CountryCode: "GN"
        },
        {
            StateName: "Koundara (KN)",
            StateCode: "KN",
            CountryCode: "GN"
        },
        {
            StateName: "Kouroussa (KO)",
            StateCode: "KO",
            CountryCode: "GN"
        },
        {
            StateName: "Kérouané (KE)",
            StateCode: "KE",
            CountryCode: "GN"
        },
        {
            StateName: "Labé (L)",
            StateCode: "L",
            CountryCode: "GN"
        },
        {
            StateName: "Labé (LA)",
            StateCode: "LA",
            CountryCode: "GN"
        },
        {
            StateName: "Lola (LO)",
            StateCode: "LO",
            CountryCode: "GN"
        },
        {
            StateName: "Lélouma (LE)",
            StateCode: "LE",
            CountryCode: "GN"
        },
        {
            StateName: "Macenta (MC)",
            StateCode: "MC",
            CountryCode: "GN"
        },
        {
            StateName: "Mali (ML)",
            StateCode: "ML",
            CountryCode: "GN"
        },
        {
            StateName: "Mamou (M)",
            StateCode: "M",
            CountryCode: "GN"
        },
        {
            StateName: "Mamou (MM)",
            StateCode: "MM",
            CountryCode: "GN"
        },
        {
            StateName: "Mandiana (MD)",
            StateCode: "MD",
            CountryCode: "GN"
        },
        {
            StateName: "Nzérékoré (N)",
            StateCode: "N",
            CountryCode: "GN"
        },
        {
            StateName: "Nzérékoré (NZ)",
            StateCode: "NZ",
            CountryCode: "GN"
        },
        {
            StateName: "Pita (PI)",
            StateCode: "PI",
            CountryCode: "GN"
        },
        {
            StateName: "Siguiri (SI)",
            StateCode: "SI",
            CountryCode: "GN"
        },
        {
            StateName: "Tougué (TO)",
            StateCode: "TO",
            CountryCode: "GN"
        },
        {
            StateName: "Télimélé (TE)",
            StateCode: "TE",
            CountryCode: "GN"
        },
        {
            StateName: "Yomou (YO)",
            StateCode: "YO",
            CountryCode: "GN"
        },
        {
            StateName: "Artibonite (AR)",
            StateCode: "AR",
            CountryCode: "HT"
        },
        {
            StateName: "Centre (CE)",
            StateCode: "CE",
            CountryCode: "HT"
        },
        {
            StateName: "Grandans (GA)",
            StateCode: "GA",
            CountryCode: "HT"
        },
        {
            StateName: "Grande’Anse (GA)",
            StateCode: "GA",
            CountryCode: "HT"
        },
        {
            StateName: "Latibonit (AR)",
            StateCode: "AR",
            CountryCode: "HT"
        },
        {
            StateName: "Lwès (OU)",
            StateCode: "OU",
            CountryCode: "HT"
        },
        {
            StateName: "Nip (NI)",
            StateCode: "NI",
            CountryCode: "HT"
        },
        {
            StateName: "Nippes (NI)",
            StateCode: "NI",
            CountryCode: "HT"
        },
        {
            StateName: "Nord (ND)",
            StateCode: "ND",
            CountryCode: "HT"
        },
        {
            StateName: "Nord-Est (NE)",
            StateCode: "NE",
            CountryCode: "HT"
        },
        {
            StateName: "Nord-Ouest (NO)",
            StateCode: "NO",
            CountryCode: "HT"
        },
        {
            StateName: "Nò (ND)",
            StateCode: "ND",
            CountryCode: "HT"
        },
        {
            StateName: "Nòdwès (NO)",
            StateCode: "NO",
            CountryCode: "HT"
        },
        {
            StateName: "Nòdès (NE)",
            StateCode: "NE",
            CountryCode: "HT"
        },
        {
            StateName: "Ouest (OU)",
            StateCode: "OU",
            CountryCode: "HT"
        },
        {
            StateName: "Sant (CE)",
            StateCode: "CE",
            CountryCode: "HT"
        },
        {
            StateName: "Sid (SD)",
            StateCode: "SD",
            CountryCode: "HT"
        },
        {
            StateName: "Sidès (SE)",
            StateCode: "SE",
            CountryCode: "HT"
        },
        {
            StateName: "Sud (SD)",
            StateCode: "SD",
            CountryCode: "HT"
        },
        {
            StateName: "Sud-Est (SE)",
            StateCode: "SE",
            CountryCode: "HT"
        },
        {
            StateName: "Abia (AB)",
            StateCode: "AB",
            CountryCode: "NG"
        },
        {
            StateName: "Abuja Federal Capital Territory (FC)",
            StateCode: "FC",
            CountryCode: "NG"
        },
        {
            StateName: "Adamawa (AD)",
            StateCode: "AD",
            CountryCode: "NG"
        },
        {
            StateName: "Akwa Ibom (AK)",
            StateCode: "AK",
            CountryCode: "NG"
        },
        {
            StateName: "Anambra (AN)",
            StateCode: "AN",
            CountryCode: "NG"
        },
        {
            StateName: "Bauchi (BA)",
            StateCode: "BA",
            CountryCode: "NG"
        },
        {
            StateName: "Bayelsa (BY)",
            StateCode: "BY",
            CountryCode: "NG"
        },
        {
            StateName: "Benue (BE)",
            StateCode: "BE",
            CountryCode: "NG"
        },
        {
            StateName: "Borno (BO)",
            StateCode: "BO",
            CountryCode: "NG"
        },
        {
            StateName: "Cross River (CR)",
            StateCode: "CR",
            CountryCode: "NG"
        },
        {
            StateName: "Delta (DE)",
            StateCode: "DE",
            CountryCode: "NG"
        },
        {
            StateName: "Ebonyi (EB)",
            StateCode: "EB",
            CountryCode: "NG"
        },
        {
            StateName: "Edo (ED)",
            StateCode: "ED",
            CountryCode: "NG"
        },
        {
            StateName: "Ekiti (EK)",
            StateCode: "EK",
            CountryCode: "NG"
        },
        {
            StateName: "Enugu (EN)",
            StateCode: "EN",
            CountryCode: "NG"
        },
        {
            StateName: "Gombe (GO)",
            StateCode: "GO",
            CountryCode: "NG"
        },
        {
            StateName: "Imo (IM)",
            StateCode: "IM",
            CountryCode: "NG"
        },
        {
            StateName: "Jigawa (JI)",
            StateCode: "JI",
            CountryCode: "NG"
        },
        {
            StateName: "Kaduna (KD)",
            StateCode: "KD",
            CountryCode: "NG"
        },
        {
            StateName: "Kano (KN)",
            StateCode: "KN",
            CountryCode: "NG"
        },
        {
            StateName: "Katsina (KT)",
            StateCode: "KT",
            CountryCode: "NG"
        },
        {
            StateName: "Kebbi (KE)",
            StateCode: "KE",
            CountryCode: "NG"
        },
        {
            StateName: "Kogi (KO)",
            StateCode: "KO",
            CountryCode: "NG"
        },
        {
            StateName: "Kwara (KW)",
            StateCode: "KW",
            CountryCode: "NG"
        },
        {
            StateName: "Lagos (LA)",
            StateCode: "LA",
            CountryCode: "NG"
        },
        {
            StateName: "Nasarawa (NA)",
            StateCode: "NA",
            CountryCode: "NG"
        },
        {
            StateName: "Niger (NI)",
            StateCode: "NI",
            CountryCode: "NG"
        },
        {
            StateName: "Ogun (OG)",
            StateCode: "OG",
            CountryCode: "NG"
        },
        {
            StateName: "Ondo (ON)",
            StateCode: "ON",
            CountryCode: "NG"
        },
        {
            StateName: "Osun (OS)",
            StateCode: "OS",
            CountryCode: "NG"
        },
        {
            StateName: "Oyo (OY)",
            StateCode: "OY",
            CountryCode: "NG"
        },
        {
            StateName: "Plateau (PL)",
            StateCode: "PL",
            CountryCode: "NG"
        },
        {
            StateName: "Rivers (RI)",
            StateCode: "RI",
            CountryCode: "NG"
        },
        {
            StateName: "Sokoto (SO)",
            StateCode: "SO",
            CountryCode: "NG"
        },
        {
            StateName: "Taraba (TA)",
            StateCode: "TA",
            CountryCode: "NG"
        },
        {
            StateName: "Yobe (YO)",
            StateCode: "YO",
            CountryCode: "NG"
        },
        {
            StateName: "Zamfara (ZA)",
            StateCode: "ZA",
            CountryCode: "NG"
        },
        {
            StateName: "Alto Paraguay (16)",
            StateCode: "16",
            CountryCode: "PY"
        },
        {
            StateName: "Alto Paraná (10)",
            StateCode: "10",
            CountryCode: "PY"
        },
        {
            StateName: "Amambay (13)",
            StateCode: "13",
            CountryCode: "PY"
        },
        {
            StateName: "Asunción (ASU)",
            StateCode: "ASU",
            CountryCode: "PY"
        },
        {
            StateName: "Boquerón (19)",
            StateCode: "19",
            CountryCode: "PY"
        },
        {
            StateName: "Caaguazú (5)",
            StateCode: "5",
            CountryCode: "PY"
        },
        {
            StateName: "Caazapá (6)",
            StateCode: "6",
            CountryCode: "PY"
        },
        {
            StateName: "Canindeyú (14)",
            StateCode: "14",
            CountryCode: "PY"
        },
        {
            StateName: "Central (11)",
            StateCode: "11",
            CountryCode: "PY"
        },
        {
            StateName: "Concepción (1)",
            StateCode: "1",
            CountryCode: "PY"
        },
        {
            StateName: "Cordillera (3)",
            StateCode: "3",
            CountryCode: "PY"
        },
        {
            StateName: "Guairá (4)",
            StateCode: "4",
            CountryCode: "PY"
        },
        {
            StateName: "Itapúa (7)",
            StateCode: "7",
            CountryCode: "PY"
        },
        {
            StateName: "Misiones (8)",
            StateCode: "8",
            CountryCode: "PY"
        },
        {
            StateName: "Paraguarí (9)",
            StateCode: "9",
            CountryCode: "PY"
        },
        {
            StateName: "Presidente Hayes (15)",
            StateCode: "15",
            CountryCode: "PY"
        },
        {
            StateName: "San Pedro (2)",
            StateCode: "2",
            CountryCode: "PY"
        },
        {
            StateName: "Ñeembucú (12)",
            StateCode: "12",
            CountryCode: "PY"
        },
        {
            StateName: "Akershus (2)",
            StateCode: "2",
            CountryCode: "NO"
        },
        {
            StateName: "Aust-Agder (9)",
            StateCode: "9",
            CountryCode: "NO"
        },
        {
            StateName: "Buskerud (6)",
            StateCode: "6",
            CountryCode: "NO"
        },
        {
            StateName: "Finnmark (20)",
            StateCode: "20",
            CountryCode: "NO"
        },
        {
            StateName: "Hedmark (4)",
            StateCode: "4",
            CountryCode: "NO"
        },
        {
            StateName: "Hordaland (12)",
            StateCode: "12",
            CountryCode: "NO"
        },
        {
            StateName: "Jan Mayen (Arctic Region)  (22)",
            StateCode: "22",
            CountryCode: "NO"
        },
        {
            StateName: "Møre og Romsdal (15)",
            StateCode: "15",
            CountryCode: "NO"
        },
        {
            StateName: "Nordland (18)",
            StateCode: "18",
            CountryCode: "NO"
        },
        {
            StateName: "Oppland (5)",
            StateCode: "5",
            CountryCode: "NO"
        },
        {
            StateName: "Oslo (3)",
            StateCode: "3",
            CountryCode: "NO"
        },
        {
            StateName: "Rogaland (11)",
            StateCode: "11",
            CountryCode: "NO"
        },
        {
            StateName: "Romsa (19)",
            StateCode: "19",
            CountryCode: "NO"
        },
        {
            StateName: "Sogn og Fjordane (14)",
            StateCode: "14",
            CountryCode: "NO"
        },
        {
            StateName: "Svalbard (Arctic Region) (21)",
            StateCode: "21",
            CountryCode: "NO"
        },
        {
            StateName: "Telemark (8)",
            StateCode: "8",
            CountryCode: "NO"
        },
        {
            StateName: "Troms (19)",
            StateCode: "19",
            CountryCode: "NO"
        },
        {
            StateName: "Trøndelag (50)",
            StateCode: "50",
            CountryCode: "NO"
        },
        {
            StateName: "Vest-Agder (10)",
            StateCode: "10",
            CountryCode: "NO"
        },
        {
            StateName: "Vestfold (7)",
            StateCode: "7",
            CountryCode: "NO"
        },
        {
            StateName: "Østfold (1)",
            StateCode: "1",
            CountryCode: "NO"
        },
        {
            StateName: "Azad Jammu and Kashmir (JK)",
            StateCode: "JK",
            CountryCode: "PK"
        },
        {
            StateName: "Balochistan (BA)",
            StateCode: "BA",
            CountryCode: "PK"
        },
        {
            StateName: "Balōchistān (BA)",
            StateCode: "BA",
            CountryCode: "PK"
        },
        {
            StateName: "Federally Administered Tribal Areas (TA)",
            StateCode: "TA",
            CountryCode: "PK"
        },
        {
            StateName: "Gilgit-Baltistan (GB)",
            StateCode: "GB",
            CountryCode: "PK"
        },
        {
            StateName: "Gilgit-Baltistān (GB)",
            StateCode: "GB",
            CountryCode: "PK"
        },
        {
            StateName: "Islamabad (IS)",
            StateCode: "IS",
            CountryCode: "PK"
        },
        {
            StateName: "Islāmābād (IS)",
            StateCode: "IS",
            CountryCode: "PK"
        },
        {
            StateName: "Khaībar Pakhtūnkhwā (KP)",
            StateCode: "KP",
            CountryCode: "PK"
        },
        {
            StateName: "Khyber Pakhtunkhwa (KP)",
            StateCode: "KP",
            CountryCode: "PK"
        },
        {
            StateName: "Panjāb (PB)",
            StateCode: "PB",
            CountryCode: "PK"
        },
        {
            StateName: "Punjab (PB)",
            StateCode: "PB",
            CountryCode: "PK"
        },
        {
            StateName: "Sindh (SD)",
            StateCode: "SD",
            CountryCode: "PK"
        },
        {
            StateName: "Āzād Jammūñ o Kashmīr (JK)",
            StateCode: "JK",
            CountryCode: "PK"
        },
        {
            StateName: "Amarumayu (AMA)",
            StateCode: "AMA",
            CountryCode: "PE"
        },
        {
            StateName: "Amasunu (AMA)",
            StateCode: "AMA",
            CountryCode: "PE"
        },
        {
            StateName: "Amazonas (AMA)",
            StateCode: "AMA",
            CountryCode: "PE"
        },
        {
            StateName: "Ancash (ANC)",
            StateCode: "ANC",
            CountryCode: "PE"
        },
        {
            StateName: "Ankashu (ANC)",
            StateCode: "ANC",
            CountryCode: "PE"
        },
        {
            StateName: "Anqash (ANC)",
            StateCode: "ANC",
            CountryCode: "PE"
        },
        {
            StateName: "Apurimaq (APU)",
            StateCode: "APU",
            CountryCode: "PE"
        },
        {
            StateName: "Apurímac (APU)",
            StateCode: "APU",
            CountryCode: "PE"
        },
        {
            StateName: "Arequipa (ARE)",
            StateCode: "ARE",
            CountryCode: "PE"
        },
        {
            StateName: "Arikipa (ARE)",
            StateCode: "ARE",
            CountryCode: "PE"
        },
        {
            StateName: "Ariqipa (ARE)",
            StateCode: "ARE",
            CountryCode: "PE"
        },
        {
            StateName: "Ayacucho (AYA)",
            StateCode: "AYA",
            CountryCode: "PE"
        },
        {
            StateName: "Ayakuchu (AYA)",
            StateCode: "AYA",
            CountryCode: "PE"
        },
        {
            StateName: "Ayaquchu (AYA)",
            StateCode: "AYA",
            CountryCode: "PE"
        },
        {
            StateName: "Cajamarca (CAJ)",
            StateCode: "CAJ",
            CountryCode: "PE"
        },
        {
            StateName: "Cusco (CUS)",
            StateCode: "CUS",
            CountryCode: "PE"
        },
        {
            StateName: "El Callao (CAL)",
            StateCode: "CAL",
            CountryCode: "PE"
        },
        {
            StateName: "Huancavelica (HUV)",
            StateCode: "HUV",
            CountryCode: "PE"
        },
        {
            StateName: "Hunin (JUN)",
            StateCode: "JUN",
            CountryCode: "PE"
        },
        {
            StateName: "Huánuco (HUC)",
            StateCode: "HUC",
            CountryCode: "PE"
        },
        {
            StateName: "Ica (ICA)",
            StateCode: "ICA",
            CountryCode: "PE"
        },
        {
            StateName: "Ika (ICA)",
            StateCode: "ICA",
            CountryCode: "PE"
        },
        {
            StateName: "Junin (JUN)",
            StateCode: "JUN",
            CountryCode: "PE"
        },
        {
            StateName: "Junín (JUN)",
            StateCode: "JUN",
            CountryCode: "PE"
        },
        {
            StateName: "Kallao (CAL)",
            StateCode: "CAL",
            CountryCode: "PE"
        },
        {
            StateName: "Kashamarka (CAJ)",
            StateCode: "CAJ",
            CountryCode: "PE"
        },
        {
            StateName: "Kusku (CUS)",
            StateCode: "CUS",
            CountryCode: "PE"
        },
        {
            StateName: "La Libertad (LAL)",
            StateCode: "LAL",
            CountryCode: "PE"
        },
        {
            StateName: "Lambayeque (LAM)",
            StateCode: "LAM",
            CountryCode: "PE"
        },
        {
            StateName: "Lampalliqi (LAM)",
            StateCode: "LAM",
            CountryCode: "PE"
        },
        {
            StateName: "Lima (LIM)",
            StateCode: "LIM",
            CountryCode: "PE"
        },
        {
            StateName: "Lima hatun llaqta (LMA)",
            StateCode: "LMA",
            CountryCode: "PE"
        },
        {
            StateName: "Lima llaqta suyu (LMA)",
            StateCode: "LMA",
            CountryCode: "PE"
        },
        {
            StateName: "Loreto (LOR)",
            StateCode: "LOR",
            CountryCode: "PE"
        },
        {
            StateName: "Luritu (LOR)",
            StateCode: "LOR",
            CountryCode: "PE"
        },
        {
            StateName: "Madre de Dios (MDD)",
            StateCode: "MDD",
            CountryCode: "PE"
        },
        {
            StateName: "Mayutata (MDD)",
            StateCode: "MDD",
            CountryCode: "PE"
        },
        {
            StateName: "Moquegua (MOQ)",
            StateCode: "MOQ",
            CountryCode: "PE"
        },
        {
            StateName: "Moqwegwa (MOQ)",
            StateCode: "MOQ",
            CountryCode: "PE"
        },
        {
            StateName: "Municipalidad Metropolitana de Lima (LMA)",
            StateCode: "LMA",
            CountryCode: "PE"
        },
        {
            StateName: "Muqiwa (MOQ)",
            StateCode: "MOQ",
            CountryCode: "PE"
        },
        {
            StateName: "Pasco (PAS)",
            StateCode: "PAS",
            CountryCode: "PE"
        },
        {
            StateName: "Pasqu (PAS)",
            StateCode: "PAS",
            CountryCode: "PE"
        },
        {
            StateName: "Piura (PIU)",
            StateCode: "PIU",
            CountryCode: "PE"
        },
        {
            StateName: "Piwra (PIU)",
            StateCode: "PIU",
            CountryCode: "PE"
        },
        {
            StateName: "Puno (PUN)",
            StateCode: "PUN",
            CountryCode: "PE"
        },
        {
            StateName: "Punu (PUN)",
            StateCode: "PUN",
            CountryCode: "PE"
        },
        {
            StateName: "Qajamarka (CAJ)",
            StateCode: "CAJ",
            CountryCode: "PE"
        },
        {
            StateName: "Qallaw (CAL)",
            StateCode: "CAL",
            CountryCode: "PE"
        },
        {
            StateName: "Qispi kay (LAL)",
            StateCode: "LAL",
            CountryCode: "PE"
        },
        {
            StateName: "Qusqu (CUS)",
            StateCode: "CUS",
            CountryCode: "PE"
        },
        {
            StateName: "San Martin (SAM)",
            StateCode: "SAM",
            CountryCode: "PE"
        },
        {
            StateName: "San Martín (SAM)",
            StateCode: "SAM",
            CountryCode: "PE"
        },
        {
            StateName: "Tacna (TAC)",
            StateCode: "TAC",
            CountryCode: "PE"
        },
        {
            StateName: "Takna (TAC)",
            StateCode: "TAC",
            CountryCode: "PE"
        },
        {
            StateName: "Taqna (TAC)",
            StateCode: "TAC",
            CountryCode: "PE"
        },
        {
            StateName: "Tumbes (TUM)",
            StateCode: "TUM",
            CountryCode: "PE"
        },
        {
            StateName: "Tumpis (TUM)",
            StateCode: "TUM",
            CountryCode: "PE"
        },
        {
            StateName: "Ucayali (UCA)",
            StateCode: "UCA",
            CountryCode: "PE"
        },
        {
            StateName: "Ukayali (UCA)",
            StateCode: "UCA",
            CountryCode: "PE"
        },
        {
            StateName: "Wankawelika (HUV)",
            StateCode: "HUV",
            CountryCode: "PE"
        },
        {
            StateName: "Wankawillka (HUV)",
            StateCode: "HUV",
            CountryCode: "PE"
        },
        {
            StateName: "Wanuku (HUC)",
            StateCode: "HUC",
            CountryCode: "PE"
        },
        {
            StateName: "'Asīr (14)",
            StateCode: "14",
            CountryCode: "SA"
        },
        {
            StateName: "Al Bāḩah (11)",
            StateCode: "11",
            CountryCode: "SA"
        },
        {
            StateName: "Al Jawf (12)",
            StateCode: "12",
            CountryCode: "SA"
        },
        {
            StateName: "Al Madīnah al Munawwarah (3)",
            StateCode: "3",
            CountryCode: "SA"
        },
        {
            StateName: "Al Qaşīm (5)",
            StateCode: "5",
            CountryCode: "SA"
        },
        {
            StateName: "Al Ḩudūd ash Shamālīyah (8)",
            StateCode: "8",
            CountryCode: "SA"
        },
        {
            StateName: "Ar Riyāḑ (1)",
            StateCode: "1",
            CountryCode: "SA"
        },
        {
            StateName: "Ash Sharqīyah (4)",
            StateCode: "4",
            CountryCode: "SA"
        },
        {
            StateName: "Jāzān (9)",
            StateCode: "9",
            CountryCode: "SA"
        },
        {
            StateName: "Makkah al Mukarramah (2)",
            StateCode: "2",
            CountryCode: "SA"
        },
        {
            StateName: "Najrān (10)",
            StateCode: "10",
            CountryCode: "SA"
        },
        {
            StateName: "Tabūk (7)",
            StateCode: "7",
            CountryCode: "SA"
        },
        {
            StateName: "Ḩā'il (6)",
            StateCode: "6",
            CountryCode: "SA"
        },
        {
            StateName: "Dolnośląskie (2)",
            StateCode: "2",
            CountryCode: "PL"
        },
        {
            StateName: "Kujawsko-pomorskie (4)",
            StateCode: "4",
            CountryCode: "PL"
        },
        {
            StateName: "Lubelskie (6)",
            StateCode: "6",
            CountryCode: "PL"
        },
        {
            StateName: "Lubuskie (8)",
            StateCode: "8",
            CountryCode: "PL"
        },
        {
            StateName: "Mazowieckie (14)",
            StateCode: "14",
            CountryCode: "PL"
        },
        {
            StateName: "Małopolskie (12)",
            StateCode: "12",
            CountryCode: "PL"
        },
        {
            StateName: "Opolskie (16)",
            StateCode: "16",
            CountryCode: "PL"
        },
        {
            StateName: "Podkarpackie (18)",
            StateCode: "18",
            CountryCode: "PL"
        },
        {
            StateName: "Podlaskie (20)",
            StateCode: "20",
            CountryCode: "PL"
        },
        {
            StateName: "Pomorskie (22)",
            StateCode: "22",
            CountryCode: "PL"
        },
        {
            StateName: "Warmińsko-mazurskie (28)",
            StateCode: "28",
            CountryCode: "PL"
        },
        {
            StateName: "Wielkopolskie (30)",
            StateCode: "30",
            CountryCode: "PL"
        },
        {
            StateName: "Zachodniopomorskie (32)",
            StateCode: "32",
            CountryCode: "PL"
        },
        {
            StateName: "Łódzkie (10)",
            StateCode: "10",
            CountryCode: "PL"
        },
        {
            StateName: "Śląskie (24)",
            StateCode: "24",
            CountryCode: "PL"
        },
        {
            StateName: "Świętokrzyskie (26)",
            StateCode: "26",
            CountryCode: "PL"
        },
        {
            StateName: "Aveiro (1)",
            StateCode: "1",
            CountryCode: "PT"
        },
        {
            StateName: "Beja (2)",
            StateCode: "2",
            CountryCode: "PT"
        },
        {
            StateName: "Braga (3)",
            StateCode: "3",
            CountryCode: "PT"
        },
        {
            StateName: "Bragança (4)",
            StateCode: "4",
            CountryCode: "PT"
        },
        {
            StateName: "Castelo Branco (5)",
            StateCode: "5",
            CountryCode: "PT"
        },
        {
            StateName: "Coimbra (6)",
            StateCode: "6",
            CountryCode: "PT"
        },
        {
            StateName: "Faro (8)",
            StateCode: "8",
            CountryCode: "PT"
        },
        {
            StateName: "Guarda (9)",
            StateCode: "9",
            CountryCode: "PT"
        },
        {
            StateName: "Leiria (10)",
            StateCode: "10",
            CountryCode: "PT"
        },
        {
            StateName: "Lisboa (11)",
            StateCode: "11",
            CountryCode: "PT"
        },
        {
            StateName: "Portalegre (12)",
            StateCode: "12",
            CountryCode: "PT"
        },
        {
            StateName: "Porto (13)",
            StateCode: "13",
            CountryCode: "PT"
        },
        {
            StateName: "Região Autónoma da Madeira (30)",
            StateCode: "30",
            CountryCode: "PT"
        },
        {
            StateName: "Região Autónoma dos Açores (20)",
            StateCode: "20",
            CountryCode: "PT"
        },
        {
            StateName: "Santarém (14)",
            StateCode: "14",
            CountryCode: "PT"
        },
        {
            StateName: "Setúbal (15)",
            StateCode: "15",
            CountryCode: "PT"
        },
        {
            StateName: "Viana do Castelo (16)",
            StateCode: "16",
            CountryCode: "PT"
        },
        {
            StateName: "Vila Real (17)",
            StateCode: "17",
            CountryCode: "PT"
        },
        {
            StateName: "Viseu (18)",
            StateCode: "18",
            CountryCode: "PT"
        },
        {
            StateName: "Évora (7)",
            StateCode: "7",
            CountryCode: "PT"
        },
        {
            StateName: "Central Singapore (1)",
            StateCode: "1",
            CountryCode: "SG"
        },
        {
            StateName: "North East (2)",
            StateCode: "2",
            CountryCode: "SG"
        },
        {
            StateName: "North West (3)",
            StateCode: "3",
            CountryCode: "SG"
        },
        {
            StateName: "South East (4)",
            StateCode: "4",
            CountryCode: "SG"
        },
        {
            StateName: "South West (5)",
            StateCode: "5",
            CountryCode: "SG"
        },
        {
            StateName: "Aberdeen City (ABE)",
            StateCode: "ABE",
            CountryCode: "GB"
        },
        {
            StateName: "Aberdeenshire (ABD)",
            StateCode: "ABD",
            CountryCode: "GB"
        },
        {
            StateName: "Angus (ANS)",
            StateCode: "ANS",
            CountryCode: "GB"
        },
        {
            StateName: "Antrim and Newtownabbey (ANN)",
            StateCode: "ANN",
            CountryCode: "GB"
        },
        {
            StateName: "Ards and North Down (AND)",
            StateCode: "AND",
            CountryCode: "GB"
        },
        {
            StateName: "Argyll and Bute (AGB)",
            StateCode: "AGB",
            CountryCode: "GB"
        },
        {
            StateName: "Armagh, Banbridge and Craigavon (ABC)",
            StateCode: "ABC",
            CountryCode: "GB"
        },
        {
            StateName: "Barking and Dagenham (BDG)",
            StateCode: "BDG",
            CountryCode: "GB"
        },
        {
            StateName: "Barnet (BNE)",
            StateCode: "BNE",
            CountryCode: "GB"
        },
        {
            StateName: "Barnsley (BNS)",
            StateCode: "BNS",
            CountryCode: "GB"
        },
        {
            StateName: "Bath and North East Somerset (BAS)",
            StateCode: "BAS",
            CountryCode: "GB"
        },
        {
            StateName: "Bedford (BDF)",
            StateCode: "BDF",
            CountryCode: "GB"
        },
        {
            StateName: "Belfast (BFS)",
            StateCode: "BFS",
            CountryCode: "GB"
        },
        {
            StateName: "Bexley (BEX)",
            StateCode: "BEX",
            CountryCode: "GB"
        },
        {
            StateName: "Birmingham (BIR)",
            StateCode: "BIR",
            CountryCode: "GB"
        },
        {
            StateName: "Blackburn with Darwen (BBD)",
            StateCode: "BBD",
            CountryCode: "GB"
        },
        {
            StateName: "Blackpool (BPL)",
            StateCode: "BPL",
            CountryCode: "GB"
        },
        {
            StateName: "Blaenau Gwent (BGW)",
            StateCode: "BGW",
            CountryCode: "GB"
        },
        {
            StateName: "Bolton (BOL)",
            StateCode: "BOL",
            CountryCode: "GB"
        },
        {
            StateName: "Bournemouth (BMH)",
            StateCode: "BMH",
            CountryCode: "GB"
        },
        {
            StateName: "Bracknell Forest (BRC)",
            StateCode: "BRC",
            CountryCode: "GB"
        },
        {
            StateName: "Bradford (BRD)",
            StateCode: "BRD",
            CountryCode: "GB"
        },
        {
            StateName: "Brent (BEN)",
            StateCode: "BEN",
            CountryCode: "GB"
        },
        {
            StateName: "Bridgend [Pen-y-bont ar Ogwr GB-POG] (BGE)",
            StateCode: "BGE",
            CountryCode: "GB"
        },
        {
            StateName: "Brighton and Hove (BNH)",
            StateCode: "BNH",
            CountryCode: "GB"
        },
        {
            StateName: "Bristol, City of (BST)",
            StateCode: "BST",
            CountryCode: "GB"
        },
        {
            StateName: "Bromley (BRY)",
            StateCode: "BRY",
            CountryCode: "GB"
        },
        {
            StateName: "Buckinghamshire (BKM)",
            StateCode: "BKM",
            CountryCode: "GB"
        },
        {
            StateName: "Bury (BUR)",
            StateCode: "BUR",
            CountryCode: "GB"
        },
        {
            StateName: "Caerphilly [Caerffili GB-CAF] (CAY)",
            StateCode: "CAY",
            CountryCode: "GB"
        },
        {
            StateName: "Calderdale (CLD)",
            StateCode: "CLD",
            CountryCode: "GB"
        },
        {
            StateName: "Cambridgeshire (CAM)",
            StateCode: "CAM",
            CountryCode: "GB"
        },
        {
            StateName: "Camden (CMD)",
            StateCode: "CMD",
            CountryCode: "GB"
        },
        {
            StateName: "Cardiff [Caerdydd GB-CRD] (CRF)",
            StateCode: "CRF",
            CountryCode: "GB"
        },
        {
            StateName: "Carmarthenshire [Sir Gaerfyrddin GB-GFY] (CMN)",
            StateCode: "CMN",
            CountryCode: "GB"
        },
        {
            StateName: "Causeway Coast and Glens (CCG)",
            StateCode: "CCG",
            CountryCode: "GB"
        },
        {
            StateName: "Central Bedfordshire (CBF)",
            StateCode: "CBF",
            CountryCode: "GB"
        },
        {
            StateName: "Ceredigion [Sir Ceredigion] (CGN)",
            StateCode: "CGN",
            CountryCode: "GB"
        },
        {
            StateName: "Cheshire East (CHE)",
            StateCode: "CHE",
            CountryCode: "GB"
        },
        {
            StateName: "Cheshire West and Chester (CHW)",
            StateCode: "CHW",
            CountryCode: "GB"
        },
        {
            StateName: "Clackmannanshire (CLK)",
            StateCode: "CLK",
            CountryCode: "GB"
        },
        {
            StateName: "Conwy (CWY)",
            StateCode: "CWY",
            CountryCode: "GB"
        },
        {
            StateName: "Cornwall (CON)",
            StateCode: "CON",
            CountryCode: "GB"
        },
        {
            StateName: "Coventry (COV)",
            StateCode: "COV",
            CountryCode: "GB"
        },
        {
            StateName: "Croydon (CRY)",
            StateCode: "CRY",
            CountryCode: "GB"
        },
        {
            StateName: "Cumbria (CMA)",
            StateCode: "CMA",
            CountryCode: "GB"
        },
        {
            StateName: "Darlington (DAL)",
            StateCode: "DAL",
            CountryCode: "GB"
        },
        {
            StateName: "Denbighshire [Sir Ddinbych GB-DDB] (DEN)",
            StateCode: "DEN",
            CountryCode: "GB"
        },
        {
            StateName: "Derby (DER)",
            StateCode: "DER",
            CountryCode: "GB"
        },
        {
            StateName: "Derbyshire (DBY)",
            StateCode: "DBY",
            CountryCode: "GB"
        },
        {
            StateName: "Derry and Strabane (DRS)",
            StateCode: "DRS",
            CountryCode: "GB"
        },
        {
            StateName: "Devon (DEV)",
            StateCode: "DEV",
            CountryCode: "GB"
        },
        {
            StateName: "Doncaster (DNC)",
            StateCode: "DNC",
            CountryCode: "GB"
        },
        {
            StateName: "Dorset (DOR)",
            StateCode: "DOR",
            CountryCode: "GB"
        },
        {
            StateName: "Dudley (DUD)",
            StateCode: "DUD",
            CountryCode: "GB"
        },
        {
            StateName: "Dumfries and Galloway (DGY)",
            StateCode: "DGY",
            CountryCode: "GB"
        },
        {
            StateName: "Dundee City (DND)",
            StateCode: "DND",
            CountryCode: "GB"
        },
        {
            StateName: "Durham County (DUR)",
            StateCode: "DUR",
            CountryCode: "GB"
        },
        {
            StateName: "Ealing (EAL)",
            StateCode: "EAL",
            CountryCode: "GB"
        },
        {
            StateName: "East Ayrshire (EAY)",
            StateCode: "EAY",
            CountryCode: "GB"
        },
        {
            StateName: "East Dunbartonshire (EDU)",
            StateCode: "EDU",
            CountryCode: "GB"
        },
        {
            StateName: "East Lothian (ELN)",
            StateCode: "ELN",
            CountryCode: "GB"
        },
        {
            StateName: "East Renfrewshire (ERW)",
            StateCode: "ERW",
            CountryCode: "GB"
        },
        {
            StateName: "East Riding of Yorkshire (ERY)",
            StateCode: "ERY",
            CountryCode: "GB"
        },
        {
            StateName: "East Sussex (ESX)",
            StateCode: "ESX",
            CountryCode: "GB"
        },
        {
            StateName: "Edinburgh, City of (EDH)",
            StateCode: "EDH",
            CountryCode: "GB"
        },
        {
            StateName: "Eilean Siar (ELS)",
            StateCode: "ELS",
            CountryCode: "GB"
        },
        {
            StateName: "Enfield (ENF)",
            StateCode: "ENF",
            CountryCode: "GB"
        },
        {
            StateName: "England (ENG)",
            StateCode: "ENG",
            CountryCode: "GB"
        },
        {
            StateName: "England and Wales (EAW)",
            StateCode: "EAW",
            CountryCode: "GB"
        },
        {
            StateName: "Essex (ESS)",
            StateCode: "ESS",
            CountryCode: "GB"
        },
        {
            StateName: "Falkirk (FAL)",
            StateCode: "FAL",
            CountryCode: "GB"
        },
        {
            StateName: "Fermanagh and Omagh (FMO)",
            StateCode: "FMO",
            CountryCode: "GB"
        },
        {
            StateName: "Fife (FIF)",
            StateCode: "FIF",
            CountryCode: "GB"
        },
        {
            StateName: "Flintshire [Sir y Fflint GB-FFL] (FLN)",
            StateCode: "FLN",
            CountryCode: "GB"
        },
        {
            StateName: "Gateshead (GAT)",
            StateCode: "GAT",
            CountryCode: "GB"
        },
        {
            StateName: "Glasgow City (GLG)",
            StateCode: "GLG",
            CountryCode: "GB"
        },
        {
            StateName: "Gloucestershire (GLS)",
            StateCode: "GLS",
            CountryCode: "GB"
        },
        {
            StateName: "Great Britain (GBN)",
            StateCode: "GBN",
            CountryCode: "GB"
        },
        {
            StateName: "Greenwich (GRE)",
            StateCode: "GRE",
            CountryCode: "GB"
        },
        {
            StateName: "Gwynedd (GWN)",
            StateCode: "GWN",
            CountryCode: "GB"
        },
        {
            StateName: "Hackney (HCK)",
            StateCode: "HCK",
            CountryCode: "GB"
        },
        {
            StateName: "Halton (HAL)",
            StateCode: "HAL",
            CountryCode: "GB"
        },
        {
            StateName: "Hammersmith and Fulham (HMF)",
            StateCode: "HMF",
            CountryCode: "GB"
        },
        {
            StateName: "Hampshire (HAM)",
            StateCode: "HAM",
            CountryCode: "GB"
        },
        {
            StateName: "Haringey (HRY)",
            StateCode: "HRY",
            CountryCode: "GB"
        },
        {
            StateName: "Harrow (HRW)",
            StateCode: "HRW",
            CountryCode: "GB"
        },
        {
            StateName: "Hartlepool (HPL)",
            StateCode: "HPL",
            CountryCode: "GB"
        },
        {
            StateName: "Havering (HAV)",
            StateCode: "HAV",
            CountryCode: "GB"
        },
        {
            StateName: "Herefordshire (HEF)",
            StateCode: "HEF",
            CountryCode: "GB"
        },
        {
            StateName: "Hertfordshire (HRT)",
            StateCode: "HRT",
            CountryCode: "GB"
        },
        {
            StateName: "Highland (HLD)",
            StateCode: "HLD",
            CountryCode: "GB"
        },
        {
            StateName: "Hillingdon (HIL)",
            StateCode: "HIL",
            CountryCode: "GB"
        },
        {
            StateName: "Hounslow (HNS)",
            StateCode: "HNS",
            CountryCode: "GB"
        },
        {
            StateName: "Inverclyde (IVC)",
            StateCode: "IVC",
            CountryCode: "GB"
        },
        {
            StateName: "Isle of Anglesey [Sir Ynys Môn GB-YNM] (AGY)",
            StateCode: "AGY",
            CountryCode: "GB"
        },
        {
            StateName: "Isle of Wight (IOW)",
            StateCode: "IOW",
            CountryCode: "GB"
        },
        {
            StateName: "Isles of Scilly (IOS)",
            StateCode: "IOS",
            CountryCode: "GB"
        },
        {
            StateName: "Islington (ISL)",
            StateCode: "ISL",
            CountryCode: "GB"
        },
        {
            StateName: "Kensington and Chelsea (KEC)",
            StateCode: "KEC",
            CountryCode: "GB"
        },
        {
            StateName: "Kent (KEN)",
            StateCode: "KEN",
            CountryCode: "GB"
        },
        {
            StateName: "Kingston upon Hull (KHL)",
            StateCode: "KHL",
            CountryCode: "GB"
        },
        {
            StateName: "Kingston upon Thames (KTT)",
            StateCode: "KTT",
            CountryCode: "GB"
        },
        {
            StateName: "Kirklees (KIR)",
            StateCode: "KIR",
            CountryCode: "GB"
        },
        {
            StateName: "Knowsley (KWL)",
            StateCode: "KWL",
            CountryCode: "GB"
        },
        {
            StateName: "Lambeth (LBH)",
            StateCode: "LBH",
            CountryCode: "GB"
        },
        {
            StateName: "Lancashire (LAN)",
            StateCode: "LAN",
            CountryCode: "GB"
        },
        {
            StateName: "Leeds (LDS)",
            StateCode: "LDS",
            CountryCode: "GB"
        },
        {
            StateName: "Leicester (LCE)",
            StateCode: "LCE",
            CountryCode: "GB"
        },
        {
            StateName: "Leicestershire (LEC)",
            StateCode: "LEC",
            CountryCode: "GB"
        },
        {
            StateName: "Lewisham (LEW)",
            StateCode: "LEW",
            CountryCode: "GB"
        },
        {
            StateName: "Lincolnshire (LIN)",
            StateCode: "LIN",
            CountryCode: "GB"
        },
        {
            StateName: "Lisburn and Castlereagh (LBC)",
            StateCode: "LBC",
            CountryCode: "GB"
        },
        {
            StateName: "Liverpool (LIV)",
            StateCode: "LIV",
            CountryCode: "GB"
        },
        {
            StateName: "London, City of (LND)",
            StateCode: "LND",
            CountryCode: "GB"
        },
        {
            StateName: "Luton (LUT)",
            StateCode: "LUT",
            CountryCode: "GB"
        },
        {
            StateName: "Manchester (MAN)",
            StateCode: "MAN",
            CountryCode: "GB"
        },
        {
            StateName: "Medway (MDW)",
            StateCode: "MDW",
            CountryCode: "GB"
        },
        {
            StateName: "Merthyr Tydfil [Merthyr Tudful GB-MTU] (MTY)",
            StateCode: "MTY",
            CountryCode: "GB"
        },
        {
            StateName: "Merton (MRT)",
            StateCode: "MRT",
            CountryCode: "GB"
        },
        {
            StateName: "Mid Ulster (MUL)",
            StateCode: "MUL",
            CountryCode: "GB"
        },
        {
            StateName: "Mid and East Antrim (MEA)",
            StateCode: "MEA",
            CountryCode: "GB"
        },
        {
            StateName: "Middlesbrough (MDB)",
            StateCode: "MDB",
            CountryCode: "GB"
        },
        {
            StateName: "Midlothian (MLN)",
            StateCode: "MLN",
            CountryCode: "GB"
        },
        {
            StateName: "Milton Keynes (MIK)",
            StateCode: "MIK",
            CountryCode: "GB"
        },
        {
            StateName: "Monmouthshire [Sir Fynwy GB-FYN] (MON)",
            StateCode: "MON",
            CountryCode: "GB"
        },
        {
            StateName: "Moray (MRY)",
            StateCode: "MRY",
            CountryCode: "GB"
        },
        {
            StateName: "Neath Port Talbot [Castell-nedd Port Talbot GB-CTL] (NTL)",
            StateCode: "NTL",
            CountryCode: "GB"
        },
        {
            StateName: "Newcastle upon Tyne (NET)",
            StateCode: "NET",
            CountryCode: "GB"
        },
        {
            StateName: "Newham (NWM)",
            StateCode: "NWM",
            CountryCode: "GB"
        },
        {
            StateName: "Newport [Casnewydd GB-CNW] (NWP)",
            StateCode: "NWP",
            CountryCode: "GB"
        },
        {
            StateName: "Newry, Mourne and Down (NMD)",
            StateCode: "NMD",
            CountryCode: "GB"
        },
        {
            StateName: "Norfolk (NFK)",
            StateCode: "NFK",
            CountryCode: "GB"
        },
        {
            StateName: "North Ayrshire (NAY)",
            StateCode: "NAY",
            CountryCode: "GB"
        },
        {
            StateName: "North East Lincolnshire (NEL)",
            StateCode: "NEL",
            CountryCode: "GB"
        },
        {
            StateName: "North Lanarkshire (NLK)",
            StateCode: "NLK",
            CountryCode: "GB"
        },
        {
            StateName: "North Lincolnshire (NLN)",
            StateCode: "NLN",
            CountryCode: "GB"
        },
        {
            StateName: "North Somerset (NSM)",
            StateCode: "NSM",
            CountryCode: "GB"
        },
        {
            StateName: "North Tyneside (NTY)",
            StateCode: "NTY",
            CountryCode: "GB"
        },
        {
            StateName: "North Yorkshire (NYK)",
            StateCode: "NYK",
            CountryCode: "GB"
        },
        {
            StateName: "Northamptonshire (NTH)",
            StateCode: "NTH",
            CountryCode: "GB"
        },
        {
            StateName: "Northern Ireland (NIR)",
            StateCode: "NIR",
            CountryCode: "GB"
        },
        {
            StateName: "Northumberland (NBL)",
            StateCode: "NBL",
            CountryCode: "GB"
        },
        {
            StateName: "Nottingham (NGM)",
            StateCode: "NGM",
            CountryCode: "GB"
        },
        {
            StateName: "Nottinghamshire (NTT)",
            StateCode: "NTT",
            CountryCode: "GB"
        },
        {
            StateName: "Oldham (OLD)",
            StateCode: "OLD",
            CountryCode: "GB"
        },
        {
            StateName: "Orkney Islands (ORK)",
            StateCode: "ORK",
            CountryCode: "GB"
        },
        {
            StateName: "Oxfordshire (OXF)",
            StateCode: "OXF",
            CountryCode: "GB"
        },
        {
            StateName: "Pembrokeshire [Sir Benfro GB-BNF] (PEM)",
            StateCode: "PEM",
            CountryCode: "GB"
        },
        {
            StateName: "Perth and Kinross (PKN)",
            StateCode: "PKN",
            CountryCode: "GB"
        },
        {
            StateName: "Peterborough (PTE)",
            StateCode: "PTE",
            CountryCode: "GB"
        },
        {
            StateName: "Plymouth (PLY)",
            StateCode: "PLY",
            CountryCode: "GB"
        },
        {
            StateName: "Poole (POL)",
            StateCode: "POL",
            CountryCode: "GB"
        },
        {
            StateName: "Portsmouth (POR)",
            StateCode: "POR",
            CountryCode: "GB"
        },
        {
            StateName: "Powys (POW)",
            StateCode: "POW",
            CountryCode: "GB"
        },
        {
            StateName: "Reading (RDG)",
            StateCode: "RDG",
            CountryCode: "GB"
        },
        {
            StateName: "Redbridge (RDB)",
            StateCode: "RDB",
            CountryCode: "GB"
        },
        {
            StateName: "Redcar and Cleveland (RCC)",
            StateCode: "RCC",
            CountryCode: "GB"
        },
        {
            StateName: "Renfrewshire (RFW)",
            StateCode: "RFW",
            CountryCode: "GB"
        },
        {
            StateName: "Rhondda, Cynon, Taff [Rhondda, Cynon,Taf] (RCT)",
            StateCode: "RCT",
            CountryCode: "GB"
        },
        {
            StateName: "Richmond upon Thames (RIC)",
            StateCode: "RIC",
            CountryCode: "GB"
        },
        {
            StateName: "Rochdale (RCH)",
            StateCode: "RCH",
            CountryCode: "GB"
        },
        {
            StateName: "Rotherham (ROT)",
            StateCode: "ROT",
            CountryCode: "GB"
        },
        {
            StateName: "Rutland (RUT)",
            StateCode: "RUT",
            CountryCode: "GB"
        },
        {
            StateName: "Salford (SLF)",
            StateCode: "SLF",
            CountryCode: "GB"
        },
        {
            StateName: "Sandwell (SAW)",
            StateCode: "SAW",
            CountryCode: "GB"
        },
        {
            StateName: "Scotland (SCT)",
            StateCode: "SCT",
            CountryCode: "GB"
        },
        {
            StateName: "Scottish Borders, The (SCB)",
            StateCode: "SCB",
            CountryCode: "GB"
        },
        {
            StateName: "Sefton (SFT)",
            StateCode: "SFT",
            CountryCode: "GB"
        },
        {
            StateName: "Sheffield (SHF)",
            StateCode: "SHF",
            CountryCode: "GB"
        },
        {
            StateName: "Shetland Islands (ZET)",
            StateCode: "ZET",
            CountryCode: "GB"
        },
        {
            StateName: "Shropshire (SHR)",
            StateCode: "SHR",
            CountryCode: "GB"
        },
        {
            StateName: "Slough (SLG)",
            StateCode: "SLG",
            CountryCode: "GB"
        },
        {
            StateName: "Solihull (SOL)",
            StateCode: "SOL",
            CountryCode: "GB"
        },
        {
            StateName: "Somerset (SOM)",
            StateCode: "SOM",
            CountryCode: "GB"
        },
        {
            StateName: "South Ayrshire (SAY)",
            StateCode: "SAY",
            CountryCode: "GB"
        },
        {
            StateName: "South Gloucestershire (SGC)",
            StateCode: "SGC",
            CountryCode: "GB"
        },
        {
            StateName: "South Lanarkshire (SLK)",
            StateCode: "SLK",
            CountryCode: "GB"
        },
        {
            StateName: "South Tyneside (STY)",
            StateCode: "STY",
            CountryCode: "GB"
        },
        {
            StateName: "Southampton (STH)",
            StateCode: "STH",
            CountryCode: "GB"
        },
        {
            StateName: "Southend-on-Sea (SOS)",
            StateCode: "SOS",
            CountryCode: "GB"
        },
        {
            StateName: "Southwark (SWK)",
            StateCode: "SWK",
            CountryCode: "GB"
        },
        {
            StateName: "St. Helens (SHN)",
            StateCode: "SHN",
            CountryCode: "GB"
        },
        {
            StateName: "Staffordshire (STS)",
            StateCode: "STS",
            CountryCode: "GB"
        },
        {
            StateName: "Stirling (STG)",
            StateCode: "STG",
            CountryCode: "GB"
        },
        {
            StateName: "Stockport (SKP)",
            StateCode: "SKP",
            CountryCode: "GB"
        },
        {
            StateName: "Stockton-on-Tees (STT)",
            StateCode: "STT",
            CountryCode: "GB"
        },
        {
            StateName: "Stoke-on-Trent (STE)",
            StateCode: "STE",
            CountryCode: "GB"
        },
        {
            StateName: "Suffolk (SFK)",
            StateCode: "SFK",
            CountryCode: "GB"
        },
        {
            StateName: "Sunderland (SND)",
            StateCode: "SND",
            CountryCode: "GB"
        },
        {
            StateName: "Surrey (SRY)",
            StateCode: "SRY",
            CountryCode: "GB"
        },
        {
            StateName: "Sutton (STN)",
            StateCode: "STN",
            CountryCode: "GB"
        },
        {
            StateName: "Swansea [Abertawe GB-ATA] (SWA)",
            StateCode: "SWA",
            CountryCode: "GB"
        },
        {
            StateName: "Swindon (SWD)",
            StateCode: "SWD",
            CountryCode: "GB"
        },
        {
            StateName: "Tameside (TAM)",
            StateCode: "TAM",
            CountryCode: "GB"
        },
        {
            StateName: "Telford and Wrekin (TFW)",
            StateCode: "TFW",
            CountryCode: "GB"
        },
        {
            StateName: "Thurrock (THR)",
            StateCode: "THR",
            CountryCode: "GB"
        },
        {
            StateName: "Torbay (TOB)",
            StateCode: "TOB",
            CountryCode: "GB"
        },
        {
            StateName: "Torfaen [Tor-faen] (TOF)",
            StateCode: "TOF",
            CountryCode: "GB"
        },
        {
            StateName: "Tower Hamlets (TWH)",
            StateCode: "TWH",
            CountryCode: "GB"
        },
        {
            StateName: "Trafford (TRF)",
            StateCode: "TRF",
            CountryCode: "GB"
        },
        {
            StateName: "United Kingdom (UKM)",
            StateCode: "UKM",
            CountryCode: "GB"
        },
        {
            StateName: "Vale of Glamorgan, The [Bro Morgannwg GB-BMG] (VGL)",
            StateCode: "VGL",
            CountryCode: "GB"
        },
        {
            StateName: "Wakefield (WKF)",
            StateCode: "WKF",
            CountryCode: "GB"
        },
        {
            StateName: "Wales [Cymru GB-CYM] (WLS)",
            StateCode: "WLS",
            CountryCode: "GB"
        },
        {
            StateName: "Walsall (WLL)",
            StateCode: "WLL",
            CountryCode: "GB"
        },
        {
            StateName: "Waltham Forest (WFT)",
            StateCode: "WFT",
            CountryCode: "GB"
        },
        {
            StateName: "Wandsworth (WND)",
            StateCode: "WND",
            CountryCode: "GB"
        },
        {
            StateName: "Warrington (WRT)",
            StateCode: "WRT",
            CountryCode: "GB"
        },
        {
            StateName: "Warwickshire (WAR)",
            StateCode: "WAR",
            CountryCode: "GB"
        },
        {
            StateName: "West Berkshire (WBK)",
            StateCode: "WBK",
            CountryCode: "GB"
        },
        {
            StateName: "West Dunbartonshire (WDU)",
            StateCode: "WDU",
            CountryCode: "GB"
        },
        {
            StateName: "West Lothian (WLN)",
            StateCode: "WLN",
            CountryCode: "GB"
        },
        {
            StateName: "West Sussex (WSX)",
            StateCode: "WSX",
            CountryCode: "GB"
        },
        {
            StateName: "Westminster (WSM)",
            StateCode: "WSM",
            CountryCode: "GB"
        },
        {
            StateName: "Wigan (WGN)",
            StateCode: "WGN",
            CountryCode: "GB"
        },
        {
            StateName: "Wiltshire (WIL)",
            StateCode: "WIL",
            CountryCode: "GB"
        },
        {
            StateName: "Windsor and Maidenhead (WNM)",
            StateCode: "WNM",
            CountryCode: "GB"
        },
        {
            StateName: "Wirral (WRL)",
            StateCode: "WRL",
            CountryCode: "GB"
        },
        {
            StateName: "Wokingham (WOK)",
            StateCode: "WOK",
            CountryCode: "GB"
        },
        {
            StateName: "Wolverhampton (WLV)",
            StateCode: "WLV",
            CountryCode: "GB"
        },
        {
            StateName: "Worcestershire (WOR)",
            StateCode: "WOR",
            CountryCode: "GB"
        },
        {
            StateName: "Wrexham [Wrecsam GB-WRC] (WRX)",
            StateCode: "WRX",
            CountryCode: "GB"
        },
        {
            StateName: "York (YOR)",
            StateCode: "YOR",
            CountryCode: "GB"
        },
        {
            StateName: "Bulawayo (BU)",
            StateCode: "BU",
            CountryCode: "ZW"
        },
        {
            StateName: "Harare (HA)",
            StateCode: "HA",
            CountryCode: "ZW"
        },
        {
            StateName: "Manicaland (MA)",
            StateCode: "MA",
            CountryCode: "ZW"
        },
        {
            StateName: "Mashonaland Central (MC)",
            StateCode: "MC",
            CountryCode: "ZW"
        },
        {
            StateName: "Mashonaland East (ME)",
            StateCode: "ME",
            CountryCode: "ZW"
        },
        {
            StateName: "Mashonaland West (MW)",
            StateCode: "MW",
            CountryCode: "ZW"
        },
        {
            StateName: "Masvingo (MV)",
            StateCode: "MV",
            CountryCode: "ZW"
        },
        {
            StateName: "Matabeleland North (MN)",
            StateCode: "MN",
            CountryCode: "ZW"
        },
        {
            StateName: "Matabeleland South (MS)",
            StateCode: "MS",
            CountryCode: "ZW"
        },
        {
            StateName: "Midlands (MI)",
            StateCode: "MI",
            CountryCode: "ZW"
        },
        {
            StateName: "Central (2)",
            StateCode: "2",
            CountryCode: "ZM"
        },
        {
            StateName: "Copperbelt (8)",
            StateCode: "8",
            CountryCode: "ZM"
        },
        {
            StateName: "Eastern (3)",
            StateCode: "3",
            CountryCode: "ZM"
        },
        {
            StateName: "Luapula (4)",
            StateCode: "4",
            CountryCode: "ZM"
        },
        {
            StateName: "Lusaka (9)",
            StateCode: "9",
            CountryCode: "ZM"
        },
        {
            StateName: "Muchinga (10*)",
            StateCode: "10*",
            CountryCode: "ZM"
        },
        {
            StateName: "North-Western (6)",
            StateCode: "6",
            CountryCode: "ZM"
        },
        {
            StateName: "Northern (5)",
            StateCode: "5",
            CountryCode: "ZM"
        },
        {
            StateName: "Southern (7)",
            StateCode: "7",
            CountryCode: "ZM"
        },
        {
            StateName: "Western (1)",
            StateCode: "1",
            CountryCode: "ZM"
        },
        {
            StateName: "Abyan (AB)",
            StateCode: "AB",
            CountryCode: "YE"
        },
        {
            StateName: "Al Bayḑā’ (BA)",
            StateCode: "BA",
            CountryCode: "YE"
        },
        {
            StateName: "Al Jawf (JA)",
            StateCode: "JA",
            CountryCode: "YE"
        },
        {
            StateName: "Al Mahrah (MR)",
            StateCode: "MR",
            CountryCode: "YE"
        },
        {
            StateName: "Al Maḩwīt (MW)",
            StateCode: "MW",
            CountryCode: "YE"
        },
        {
            StateName: "Al Ḩudaydah (HU)",
            StateCode: "HU",
            CountryCode: "YE"
        },
        {
            StateName: "Amānat al ‘Āşimah [city] (SA)",
            StateCode: "SA",
            CountryCode: "YE"
        },
        {
            StateName: "Arkhabīl Suquţrá (SU)",
            StateCode: "SU",
            CountryCode: "YE"
        },
        {
            StateName: "Aḑ Ḑāli‘ (DA)",
            StateCode: "DA",
            CountryCode: "YE"
        },
        {
            StateName: "Dhamār (DH)",
            StateCode: "DH",
            CountryCode: "YE"
        },
        {
            StateName: "Ibb (IB)",
            StateCode: "IB",
            CountryCode: "YE"
        },
        {
            StateName: "Laḩij (LA)",
            StateCode: "LA",
            CountryCode: "YE"
        },
        {
            StateName: "Ma’rib (MA)",
            StateCode: "MA",
            CountryCode: "YE"
        },
        {
            StateName: "Raymah (RA)",
            StateCode: "RA",
            CountryCode: "YE"
        },
        {
            StateName: "Shabwah (SH)",
            StateCode: "SH",
            CountryCode: "YE"
        },
        {
            StateName: "Tāʻizz (TA)",
            StateCode: "TA",
            CountryCode: "YE"
        },
        {
            StateName: "Şanʻā’ (SN)",
            StateCode: "SN",
            CountryCode: "YE"
        },
        {
            StateName: "Şāʻdah (SD)",
            StateCode: "SD",
            CountryCode: "YE"
        },
        {
            StateName: "Ḩajjah (HJ)",
            StateCode: "HJ",
            CountryCode: "YE"
        },
        {
            StateName: "Ḩaḑramawt (HD)",
            StateCode: "HD",
            CountryCode: "YE"
        },
        {
            StateName: "‘Adan (AD)",
            StateCode: "AD",
            CountryCode: "YE"
        },
        {
            StateName: "‘Amrān (AM)",
            StateCode: "AM",
            CountryCode: "YE"
        },
        {
            StateName: "Amazonas (Z)",
            StateCode: "Z",
            CountryCode: "VE"
        },
        {
            StateName: "Anzoátegui (B)",
            StateCode: "B",
            CountryCode: "VE"
        },
        {
            StateName: "Apure (C)",
            StateCode: "C",
            CountryCode: "VE"
        },
        {
            StateName: "Aragua (D)",
            StateCode: "D",
            CountryCode: "VE"
        },
        {
            StateName: "Barinas (E)",
            StateCode: "E",
            CountryCode: "VE"
        },
        {
            StateName: "Bolívar (F)",
            StateCode: "F",
            CountryCode: "VE"
        },
        {
            StateName: "Carabobo (G)",
            StateCode: "G",
            CountryCode: "VE"
        },
        {
            StateName: "Cojedes (H)",
            StateCode: "H",
            CountryCode: "VE"
        },
        {
            StateName: "Delta Amacuro (Y)",
            StateCode: "Y",
            CountryCode: "VE"
        },
        {
            StateName: "Dependencias Federales (W)",
            StateCode: "W",
            CountryCode: "VE"
        },
        {
            StateName: "Distrito Capital (A)",
            StateCode: "A",
            CountryCode: "VE"
        },
        {
            StateName: "Falcón (I)",
            StateCode: "I",
            CountryCode: "VE"
        },
        {
            StateName: "Guárico (J)",
            StateCode: "J",
            CountryCode: "VE"
        },
        {
            StateName: "Lara (K)",
            StateCode: "K",
            CountryCode: "VE"
        },
        {
            StateName: "Miranda (M)",
            StateCode: "M",
            CountryCode: "VE"
        },
        {
            StateName: "Monagas (N)",
            StateCode: "N",
            CountryCode: "VE"
        },
        {
            StateName: "Mérida (L)",
            StateCode: "L",
            CountryCode: "VE"
        },
        {
            StateName: "Nueva Esparta (O)",
            StateCode: "O",
            CountryCode: "VE"
        },
        {
            StateName: "Portuguesa (P)",
            StateCode: "P",
            CountryCode: "VE"
        },
        {
            StateName: "Sucre (R)",
            StateCode: "R",
            CountryCode: "VE"
        },
        {
            StateName: "Trujillo (T)",
            StateCode: "T",
            CountryCode: "VE"
        },
        {
            StateName: "Táchira (S)",
            StateCode: "S",
            CountryCode: "VE"
        },
        {
            StateName: "Vargas (X)",
            StateCode: "X",
            CountryCode: "VE"
        },
        {
            StateName: "Yaracuy (U)",
            StateCode: "U",
            CountryCode: "VE"
        },
        {
            StateName: "Zulia (V)",
            StateCode: "V",
            CountryCode: "VE"
        },
        {
            StateName: "Artigas (AR)",
            StateCode: "AR",
            CountryCode: "UY"
        },
        {
            StateName: "Canelones (CA)",
            StateCode: "CA",
            CountryCode: "UY"
        },
        {
            StateName: "Cerro Largo (CL)",
            StateCode: "CL",
            CountryCode: "UY"
        },
        {
            StateName: "Colonia (CO)",
            StateCode: "CO",
            CountryCode: "UY"
        },
        {
            StateName: "Durazno (DU)",
            StateCode: "DU",
            CountryCode: "UY"
        },
        {
            StateName: "Flores (FS)",
            StateCode: "FS",
            CountryCode: "UY"
        },
        {
            StateName: "Florida (FD)",
            StateCode: "FD",
            CountryCode: "UY"
        },
        {
            StateName: "Lavalleja (LA)",
            StateCode: "LA",
            CountryCode: "UY"
        },
        {
            StateName: "Maldonado (MA)",
            StateCode: "MA",
            CountryCode: "UY"
        },
        {
            StateName: "Montevideo (MO)",
            StateCode: "MO",
            CountryCode: "UY"
        },
        {
            StateName: "Paysandú (PA)",
            StateCode: "PA",
            CountryCode: "UY"
        },
        {
            StateName: "Rivera (RV)",
            StateCode: "RV",
            CountryCode: "UY"
        },
        {
            StateName: "Rocha (RO)",
            StateCode: "RO",
            CountryCode: "UY"
        },
        {
            StateName: "Río Negro (RN)",
            StateCode: "RN",
            CountryCode: "UY"
        },
        {
            StateName: "Salto (SA)",
            StateCode: "SA",
            CountryCode: "UY"
        },
        {
            StateName: "San José (SJ)",
            StateCode: "SJ",
            CountryCode: "UY"
        },
        {
            StateName: "Soriano (SO)",
            StateCode: "SO",
            CountryCode: "UY"
        },
        {
            StateName: "Tacuarembó (TA)",
            StateCode: "TA",
            CountryCode: "UY"
        },
        {
            StateName: "Treinta y Tres (TT)",
            StateCode: "TT",
            CountryCode: "UY"
        },
        {
            StateName: "Andijon (AN)",
            StateCode: "AN",
            CountryCode: "UZ"
        },
        {
            StateName: "Buxoro (BU)",
            StateCode: "BU",
            CountryCode: "UZ"
        },
        {
            StateName: "Farg‘ona (FA)",
            StateCode: "FA",
            CountryCode: "UZ"
        },
        {
            StateName: "Jizzax (JI)",
            StateCode: "JI",
            CountryCode: "UZ"
        },
        {
            StateName: "Namangan (NG)",
            StateCode: "NG",
            CountryCode: "UZ"
        },
        {
            StateName: "Navoiy (NW)",
            StateCode: "NW",
            CountryCode: "UZ"
        },
        {
            StateName: "Qashqadaryo (QA)",
            StateCode: "QA",
            CountryCode: "UZ"
        },
        {
            StateName: "Qoraqalpog‘iston Respublikasi (QR)",
            StateCode: "QR",
            CountryCode: "UZ"
        },
        {
            StateName: "Samarqand (SA)",
            StateCode: "SA",
            CountryCode: "UZ"
        },
        {
            StateName: "Sirdaryo (SI)",
            StateCode: "SI",
            CountryCode: "UZ"
        },
        {
            StateName: "Surxondaryo (SU)",
            StateCode: "SU",
            CountryCode: "UZ"
        },
        {
            StateName: "Toshkent (TO)",
            StateCode: "TO",
            CountryCode: "UZ"
        },
        {
            StateName: "Toshkent (TK)",
            StateCode: "TK",
            CountryCode: "UZ"
        },
        {
            StateName: "Xorazm (XO)",
            StateCode: "XO",
            CountryCode: "UZ"
        },
        {
            StateName: "Abū Z̧aby (AZ)",
            StateCode: "AZ",
            CountryCode: "AE"
        },
        {
            StateName: "Al Fujayrah (FU)",
            StateCode: "FU",
            CountryCode: "AE"
        },
        {
            StateName: "Ash Shāriqah (SH)",
            StateCode: "SH",
            CountryCode: "AE"
        },
        {
            StateName: "Dubayy (DU)",
            StateCode: "DU",
            CountryCode: "AE"
        },
        {
            StateName: "Ra’s al Khaymah (RK)",
            StateCode: "RK",
            CountryCode: "AE"
        },
        {
            StateName: "Umm al Qaywayn (UQ)",
            StateCode: "UQ",
            CountryCode: "AE"
        },
        {
            StateName: "‘Ajmān (AJ)",
            StateCode: "AJ",
            CountryCode: "AE"
        },
        {
            StateName: "Avtonomna Respublika Krym (43)",
            StateCode: "43",
            CountryCode: "UA"
        },
        {
            StateName: "Cherkaska oblast (71)",
            StateCode: "71",
            CountryCode: "UA"
        },
        {
            StateName: "Chernihivska oblast (74)",
            StateCode: "74",
            CountryCode: "UA"
        },
        {
            StateName: "Chernivetska oblast (77)",
            StateCode: "77",
            CountryCode: "UA"
        },
        {
            StateName: "Dnipropetrovska oblast (12)",
            StateCode: "12",
            CountryCode: "UA"
        },
        {
            StateName: "Donetska oblast (14)",
            StateCode: "14",
            CountryCode: "UA"
        },
        {
            StateName: "Ivano-Frankivska oblast (26)",
            StateCode: "26",
            CountryCode: "UA"
        },
        {
            StateName: "Kharkivska oblast (63)",
            StateCode: "63",
            CountryCode: "UA"
        },
        {
            StateName: "Khersonska oblast (65)",
            StateCode: "65",
            CountryCode: "UA"
        },
        {
            StateName: "Khmelnytska oblast (68)",
            StateCode: "68",
            CountryCode: "UA"
        },
        {
            StateName: "Kirovohradska oblast (35)",
            StateCode: "35",
            CountryCode: "UA"
        },
        {
            StateName: "Kyiv (30)",
            StateCode: "30",
            CountryCode: "UA"
        },
        {
            StateName: "Kyivska oblast (32)",
            StateCode: "32",
            CountryCode: "UA"
        },
        {
            StateName: "Luhanska oblast (9)",
            StateCode: "9",
            CountryCode: "UA"
        },
        {
            StateName: "Lvivska oblast (46)",
            StateCode: "46",
            CountryCode: "UA"
        },
        {
            StateName: "Mykolaivska oblast (48)",
            StateCode: "48",
            CountryCode: "UA"
        },
        {
            StateName: "Odeska oblast (51)",
            StateCode: "51",
            CountryCode: "UA"
        },
        {
            StateName: "Poltavska oblast (53)",
            StateCode: "53",
            CountryCode: "UA"
        },
        {
            StateName: "Rivnenska oblast (56)",
            StateCode: "56",
            CountryCode: "UA"
        },
        {
            StateName: "Sevastopol (40)",
            StateCode: "40",
            CountryCode: "UA"
        },
        {
            StateName: "Sumska oblast (59)",
            StateCode: "59",
            CountryCode: "UA"
        },
        {
            StateName: "Ternopilska oblast (61)",
            StateCode: "61",
            CountryCode: "UA"
        },
        {
            StateName: "Vinnytska oblast (5)",
            StateCode: "5",
            CountryCode: "UA"
        },
        {
            StateName: "Volynska oblast (7)",
            StateCode: "7",
            CountryCode: "UA"
        },
        {
            StateName: "Zakarpatska oblast (21)",
            StateCode: "21",
            CountryCode: "UA"
        },
        {
            StateName: "Zaporizka oblast (23)",
            StateCode: "23",
            CountryCode: "UA"
        },
        {
            StateName: "Zhytomyrska oblast (18)",
            StateCode: "18",
            CountryCode: "UA"
        },
        {
            StateName: "Abim (314)",
            StateCode: "314",
            CountryCode: "UG"
        },
        {
            StateName: "Adjumani (301)",
            StateCode: "301",
            CountryCode: "UG"
        },
        {
            StateName: "Agago (322)",
            StateCode: "322",
            CountryCode: "UG"
        },
        {
            StateName: "Alebtong (323)",
            StateCode: "323",
            CountryCode: "UG"
        },
        {
            StateName: "Amolatar (315)",
            StateCode: "315",
            CountryCode: "UG"
        },
        {
            StateName: "Amudat (324)",
            StateCode: "324",
            CountryCode: "UG"
        },
        {
            StateName: "Amuria (216)",
            StateCode: "216",
            CountryCode: "UG"
        },
        {
            StateName: "Amuru (316)",
            StateCode: "316",
            CountryCode: "UG"
        },
        {
            StateName: "Apac (302)",
            StateCode: "302",
            CountryCode: "UG"
        },
        {
            StateName: "Arua (303)",
            StateCode: "303",
            CountryCode: "UG"
        },
        {
            StateName: "Budaka (217)",
            StateCode: "217",
            CountryCode: "UG"
        },
        {
            StateName: "Bududa (218)",
            StateCode: "218",
            CountryCode: "UG"
        },
        {
            StateName: "Bugiri (201)",
            StateCode: "201",
            CountryCode: "UG"
        },
        {
            StateName: "Bugweri (235)",
            StateCode: "235",
            CountryCode: "UG"
        },
        {
            StateName: "Buhweju (420)",
            StateCode: "420",
            CountryCode: "UG"
        },
        {
            StateName: "Buikwe (117)",
            StateCode: "117",
            CountryCode: "UG"
        },
        {
            StateName: "Bukedea (219)",
            StateCode: "219",
            CountryCode: "UG"
        },
        {
            StateName: "Bukomansibi (118)",
            StateCode: "118",
            CountryCode: "UG"
        },
        {
            StateName: "Bukwa (220)",
            StateCode: "220",
            CountryCode: "UG"
        },
        {
            StateName: "Bulambuli (225)",
            StateCode: "225",
            CountryCode: "UG"
        },
        {
            StateName: "Buliisa (416)",
            StateCode: "416",
            CountryCode: "UG"
        },
        {
            StateName: "Bundibugyo (401)",
            StateCode: "401",
            CountryCode: "UG"
        },
        {
            StateName: "Bunyangabu (430)",
            StateCode: "430",
            CountryCode: "UG"
        },
        {
            StateName: "Bushenyi (402)",
            StateCode: "402",
            CountryCode: "UG"
        },
        {
            StateName: "Busia (202)",
            StateCode: "202",
            CountryCode: "UG"
        },
        {
            StateName: "Butaleja (221)",
            StateCode: "221",
            CountryCode: "UG"
        },
        {
            StateName: "Butambala (119)",
            StateCode: "119",
            CountryCode: "UG"
        },
        {
            StateName: "Butebo (233)",
            StateCode: "233",
            CountryCode: "UG"
        },
        {
            StateName: "Buvuma (120)",
            StateCode: "120",
            CountryCode: "UG"
        },
        {
            StateName: "Buyende (226)",
            StateCode: "226",
            CountryCode: "UG"
        },
        {
            StateName: "Central (C)",
            StateCode: "C",
            CountryCode: "UG"
        },
        {
            StateName: "Dokolo (317)",
            StateCode: "317",
            CountryCode: "UG"
        },
        {
            StateName: "Eastern (E)",
            StateCode: "E",
            CountryCode: "UG"
        },
        {
            StateName: "Gomba (121)",
            StateCode: "121",
            CountryCode: "UG"
        },
        {
            StateName: "Gulu (304)",
            StateCode: "304",
            CountryCode: "UG"
        },
        {
            StateName: "Hoima (403)",
            StateCode: "403",
            CountryCode: "UG"
        },
        {
            StateName: "Ibanda (417)",
            StateCode: "417",
            CountryCode: "UG"
        },
        {
            StateName: "Iganga (203)",
            StateCode: "203",
            CountryCode: "UG"
        },
        {
            StateName: "Isingiro (418)",
            StateCode: "418",
            CountryCode: "UG"
        },
        {
            StateName: "Jinja (204)",
            StateCode: "204",
            CountryCode: "UG"
        },
        {
            StateName: "Kaabong (318)",
            StateCode: "318",
            CountryCode: "UG"
        },
        {
            StateName: "Kabale (404)",
            StateCode: "404",
            CountryCode: "UG"
        },
        {
            StateName: "Kabarole (405)",
            StateCode: "405",
            CountryCode: "UG"
        },
        {
            StateName: "Kaberamaido (213)",
            StateCode: "213",
            CountryCode: "UG"
        },
        {
            StateName: "Kagadi (427)",
            StateCode: "427",
            CountryCode: "UG"
        },
        {
            StateName: "Kakumiro (428)",
            StateCode: "428",
            CountryCode: "UG"
        },
        {
            StateName: "Kalangala (101)",
            StateCode: "101",
            CountryCode: "UG"
        },
        {
            StateName: "Kaliro (222)",
            StateCode: "222",
            CountryCode: "UG"
        },
        {
            StateName: "Kalungu (122)",
            StateCode: "122",
            CountryCode: "UG"
        },
        {
            StateName: "Kampala (102)",
            StateCode: "102",
            CountryCode: "UG"
        },
        {
            StateName: "Kamuli (205)",
            StateCode: "205",
            CountryCode: "UG"
        },
        {
            StateName: "Kamwenge (413)",
            StateCode: "413",
            CountryCode: "UG"
        },
        {
            StateName: "Kanungu (414)",
            StateCode: "414",
            CountryCode: "UG"
        },
        {
            StateName: "Kapchorwa (206)",
            StateCode: "206",
            CountryCode: "UG"
        },
        {
            StateName: "Kapelebyong (236)",
            StateCode: "236",
            CountryCode: "UG"
        },
        {
            StateName: "Kasanda (126)",
            StateCode: "126",
            CountryCode: "UG"
        },
        {
            StateName: "Kasese (406)",
            StateCode: "406",
            CountryCode: "UG"
        },
        {
            StateName: "Katakwi (207)",
            StateCode: "207",
            CountryCode: "UG"
        },
        {
            StateName: "Kayunga (112)",
            StateCode: "112",
            CountryCode: "UG"
        },
        {
            StateName: "Kibaale (407)",
            StateCode: "407",
            CountryCode: "UG"
        },
        {
            StateName: "Kiboga (103)",
            StateCode: "103",
            CountryCode: "UG"
        },
        {
            StateName: "Kibuku (227)",
            StateCode: "227",
            CountryCode: "UG"
        },
        {
            StateName: "Kikuube (432)",
            StateCode: "432",
            CountryCode: "UG"
        },
        {
            StateName: "Kiruhura (419)",
            StateCode: "419",
            CountryCode: "UG"
        },
        {
            StateName: "Kiryandongo (421)",
            StateCode: "421",
            CountryCode: "UG"
        },
        {
            StateName: "Kisoro (408)",
            StateCode: "408",
            CountryCode: "UG"
        },
        {
            StateName: "Kitgum (305)",
            StateCode: "305",
            CountryCode: "UG"
        },
        {
            StateName: "Koboko (319)",
            StateCode: "319",
            CountryCode: "UG"
        },
        {
            StateName: "Kole (325)",
            StateCode: "325",
            CountryCode: "UG"
        },
        {
            StateName: "Kotido (306)",
            StateCode: "306",
            CountryCode: "UG"
        },
        {
            StateName: "Kumi (208)",
            StateCode: "208",
            CountryCode: "UG"
        },
        {
            StateName: "Kwania (333)",
            StateCode: "333",
            CountryCode: "UG"
        },
        {
            StateName: "Kween (228)",
            StateCode: "228",
            CountryCode: "UG"
        },
        {
            StateName: "Kyankwanzi (123)",
            StateCode: "123",
            CountryCode: "UG"
        },
        {
            StateName: "Kyegegwa (422)",
            StateCode: "422",
            CountryCode: "UG"
        },
        {
            StateName: "Kyenjojo (415)",
            StateCode: "415",
            CountryCode: "UG"
        },
        {
            StateName: "Kyotera (125)",
            StateCode: "125",
            CountryCode: "UG"
        },
        {
            StateName: "Lamwo (326)",
            StateCode: "326",
            CountryCode: "UG"
        },
        {
            StateName: "Lira (307)",
            StateCode: "307",
            CountryCode: "UG"
        },
        {
            StateName: "Luuka (229)",
            StateCode: "229",
            CountryCode: "UG"
        },
        {
            StateName: "Luwero (104)",
            StateCode: "104",
            CountryCode: "UG"
        },
        {
            StateName: "Lwengo (124)",
            StateCode: "124",
            CountryCode: "UG"
        },
        {
            StateName: "Lyantonde (114)",
            StateCode: "114",
            CountryCode: "UG"
        },
        {
            StateName: "Manafwa (223)",
            StateCode: "223",
            CountryCode: "UG"
        },
        {
            StateName: "Maracha (320)",
            StateCode: "320",
            CountryCode: "UG"
        },
        {
            StateName: "Masaka (105)",
            StateCode: "105",
            CountryCode: "UG"
        },
        {
            StateName: "Masindi (409)",
            StateCode: "409",
            CountryCode: "UG"
        },
        {
            StateName: "Mayuge (214)",
            StateCode: "214",
            CountryCode: "UG"
        },
        {
            StateName: "Mbale (209)",
            StateCode: "209",
            CountryCode: "UG"
        },
        {
            StateName: "Mbarara (410)",
            StateCode: "410",
            CountryCode: "UG"
        },
        {
            StateName: "Mitooma (423)",
            StateCode: "423",
            CountryCode: "UG"
        },
        {
            StateName: "Mityana (115)",
            StateCode: "115",
            CountryCode: "UG"
        },
        {
            StateName: "Moroto (308)",
            StateCode: "308",
            CountryCode: "UG"
        },
        {
            StateName: "Moyo (309)",
            StateCode: "309",
            CountryCode: "UG"
        },
        {
            StateName: "Mpigi (106)",
            StateCode: "106",
            CountryCode: "UG"
        },
        {
            StateName: "Mubende (107)",
            StateCode: "107",
            CountryCode: "UG"
        },
        {
            StateName: "Mukono (108)",
            StateCode: "108",
            CountryCode: "UG"
        },
        {
            StateName: "Nabilatuk (334)",
            StateCode: "334",
            CountryCode: "UG"
        },
        {
            StateName: "Nakapiripirit (311)",
            StateCode: "311",
            CountryCode: "UG"
        },
        {
            StateName: "Nakaseke (116)",
            StateCode: "116",
            CountryCode: "UG"
        },
        {
            StateName: "Nakasongola (109)",
            StateCode: "109",
            CountryCode: "UG"
        },
        {
            StateName: "Namayingo (230)",
            StateCode: "230",
            CountryCode: "UG"
        },
        {
            StateName: "Namisindwa (234)",
            StateCode: "234",
            CountryCode: "UG"
        },
        {
            StateName: "Namutumba (224)",
            StateCode: "224",
            CountryCode: "UG"
        },
        {
            StateName: "Napak (327)",
            StateCode: "327",
            CountryCode: "UG"
        },
        {
            StateName: "Nebbi (310)",
            StateCode: "310",
            CountryCode: "UG"
        },
        {
            StateName: "Ngora (231)",
            StateCode: "231",
            CountryCode: "UG"
        },
        {
            StateName: "Northern (N)",
            StateCode: "N",
            CountryCode: "UG"
        },
        {
            StateName: "Ntoroko (424)",
            StateCode: "424",
            CountryCode: "UG"
        },
        {
            StateName: "Ntungamo (411)",
            StateCode: "411",
            CountryCode: "UG"
        },
        {
            StateName: "Nwoya (328)",
            StateCode: "328",
            CountryCode: "UG"
        },
        {
            StateName: "Omoro (331)",
            StateCode: "331",
            CountryCode: "UG"
        },
        {
            StateName: "Otuke (329)",
            StateCode: "329",
            CountryCode: "UG"
        },
        {
            StateName: "Oyam (321)",
            StateCode: "321",
            CountryCode: "UG"
        },
        {
            StateName: "Pader (312)",
            StateCode: "312",
            CountryCode: "UG"
        },
        {
            StateName: "Pakwach (332)",
            StateCode: "332",
            CountryCode: "UG"
        },
        {
            StateName: "Pallisa (210)",
            StateCode: "210",
            CountryCode: "UG"
        },
        {
            StateName: "Rakai (110)",
            StateCode: "110",
            CountryCode: "UG"
        },
        {
            StateName: "Rubanda (429)",
            StateCode: "429",
            CountryCode: "UG"
        },
        {
            StateName: "Rubirizi (425)",
            StateCode: "425",
            CountryCode: "UG"
        },
        {
            StateName: "Rukiga (431)",
            StateCode: "431",
            CountryCode: "UG"
        },
        {
            StateName: "Rukungiri (412)",
            StateCode: "412",
            CountryCode: "UG"
        },
        {
            StateName: "Sembabule (111)",
            StateCode: "111",
            CountryCode: "UG"
        },
        {
            StateName: "Serere (232)",
            StateCode: "232",
            CountryCode: "UG"
        },
        {
            StateName: "Sheema (426)",
            StateCode: "426",
            CountryCode: "UG"
        },
        {
            StateName: "Sironko (215)",
            StateCode: "215",
            CountryCode: "UG"
        },
        {
            StateName: "Soroti (211)",
            StateCode: "211",
            CountryCode: "UG"
        },
        {
            StateName: "Tororo (212)",
            StateCode: "212",
            CountryCode: "UG"
        },
        {
            StateName: "Wakiso (113)",
            StateCode: "113",
            CountryCode: "UG"
        },
        {
            StateName: "Western (W)",
            StateCode: "W",
            CountryCode: "UG"
        },
        {
            StateName: "Yumbe (313)",
            StateCode: "313",
            CountryCode: "UG"
        },
        {
            StateName: "Zombo (330)",
            StateCode: "330",
            CountryCode: "UG"
        },
        {
            StateName: "Adana (1)",
            StateCode: "1",
            CountryCode: "TR"
        },
        {
            StateName: "Adıyaman (2)",
            StateCode: "2",
            CountryCode: "TR"
        },
        {
            StateName: "Afyonkarahisar (3)",
            StateCode: "3",
            CountryCode: "TR"
        },
        {
            StateName: "Aksaray (68)",
            StateCode: "68",
            CountryCode: "TR"
        },
        {
            StateName: "Amasya (5)",
            StateCode: "5",
            CountryCode: "TR"
        },
        {
            StateName: "Ankara (6)",
            StateCode: "6",
            CountryCode: "TR"
        },
        {
            StateName: "Antalya (7)",
            StateCode: "7",
            CountryCode: "TR"
        },
        {
            StateName: "Ardahan (75)",
            StateCode: "75",
            CountryCode: "TR"
        },
        {
            StateName: "Artvin (8)",
            StateCode: "8",
            CountryCode: "TR"
        },
        {
            StateName: "Aydın (9)",
            StateCode: "9",
            CountryCode: "TR"
        },
        {
            StateName: "Ağrı (4)",
            StateCode: "4",
            CountryCode: "TR"
        },
        {
            StateName: "Balıkesir (10)",
            StateCode: "10",
            CountryCode: "TR"
        },
        {
            StateName: "Bartın (74)",
            StateCode: "74",
            CountryCode: "TR"
        },
        {
            StateName: "Batman (72)",
            StateCode: "72",
            CountryCode: "TR"
        },
        {
            StateName: "Bayburt (69)",
            StateCode: "69",
            CountryCode: "TR"
        },
        {
            StateName: "Bilecik (11)",
            StateCode: "11",
            CountryCode: "TR"
        },
        {
            StateName: "Bingöl (12)",
            StateCode: "12",
            CountryCode: "TR"
        },
        {
            StateName: "Bitlis (13)",
            StateCode: "13",
            CountryCode: "TR"
        },
        {
            StateName: "Bolu (14)",
            StateCode: "14",
            CountryCode: "TR"
        },
        {
            StateName: "Burdur (15)",
            StateCode: "15",
            CountryCode: "TR"
        },
        {
            StateName: "Bursa (16)",
            StateCode: "16",
            CountryCode: "TR"
        },
        {
            StateName: "Denizli (20)",
            StateCode: "20",
            CountryCode: "TR"
        },
        {
            StateName: "Diyarbakır (21)",
            StateCode: "21",
            CountryCode: "TR"
        },
        {
            StateName: "Düzce (81*)",
            StateCode: "81*",
            CountryCode: "TR"
        },
        {
            StateName: "Edirne (22)",
            StateCode: "22",
            CountryCode: "TR"
        },
        {
            StateName: "Elazığ (23)",
            StateCode: "23",
            CountryCode: "TR"
        },
        {
            StateName: "Erzincan (24)",
            StateCode: "24",
            CountryCode: "TR"
        },
        {
            StateName: "Erzurum (25)",
            StateCode: "25",
            CountryCode: "TR"
        },
        {
            StateName: "Eskişehir (26)",
            StateCode: "26",
            CountryCode: "TR"
        },
        {
            StateName: "Gaziantep (27)",
            StateCode: "27",
            CountryCode: "TR"
        },
        {
            StateName: "Giresun (28)",
            StateCode: "28",
            CountryCode: "TR"
        },
        {
            StateName: "Gümüşhane (29)",
            StateCode: "29",
            CountryCode: "TR"
        },
        {
            StateName: "Hakkâri (30)",
            StateCode: "30",
            CountryCode: "TR"
        },
        {
            StateName: "Hatay (31)",
            StateCode: "31",
            CountryCode: "TR"
        },
        {
            StateName: "Isparta (32)",
            StateCode: "32",
            CountryCode: "TR"
        },
        {
            StateName: "Iğdır (76)",
            StateCode: "76",
            CountryCode: "TR"
        },
        {
            StateName: "Kahramanmaraş (46)",
            StateCode: "46",
            CountryCode: "TR"
        },
        {
            StateName: "Karabük (78)",
            StateCode: "78",
            CountryCode: "TR"
        },
        {
            StateName: "Karaman (70)",
            StateCode: "70",
            CountryCode: "TR"
        },
        {
            StateName: "Kars (36)",
            StateCode: "36",
            CountryCode: "TR"
        },
        {
            StateName: "Kastamonu (37)",
            StateCode: "37",
            CountryCode: "TR"
        },
        {
            StateName: "Kayseri (38)",
            StateCode: "38",
            CountryCode: "TR"
        },
        {
            StateName: "Kilis (79)",
            StateCode: "79",
            CountryCode: "TR"
        },
        {
            StateName: "Kocaeli (41)",
            StateCode: "41",
            CountryCode: "TR"
        },
        {
            StateName: "Konya (42)",
            StateCode: "42",
            CountryCode: "TR"
        },
        {
            StateName: "Kütahya (43)",
            StateCode: "43",
            CountryCode: "TR"
        },
        {
            StateName: "Kırklareli (39)",
            StateCode: "39",
            CountryCode: "TR"
        },
        {
            StateName: "Kırıkkale (71)",
            StateCode: "71",
            CountryCode: "TR"
        },
        {
            StateName: "Kırşehir (40)",
            StateCode: "40",
            CountryCode: "TR"
        },
        {
            StateName: "Malatya (44)",
            StateCode: "44",
            CountryCode: "TR"
        },
        {
            StateName: "Manisa (45)",
            StateCode: "45",
            CountryCode: "TR"
        },
        {
            StateName: "Mardin (47)",
            StateCode: "47",
            CountryCode: "TR"
        },
        {
            StateName: "Mersin (33)",
            StateCode: "33",
            CountryCode: "TR"
        },
        {
            StateName: "Muğla (48)",
            StateCode: "48",
            CountryCode: "TR"
        },
        {
            StateName: "Muş (49)",
            StateCode: "49",
            CountryCode: "TR"
        },
        {
            StateName: "Nevşehir (50)",
            StateCode: "50",
            CountryCode: "TR"
        },
        {
            StateName: "Niğde (51)",
            StateCode: "51",
            CountryCode: "TR"
        },
        {
            StateName: "Ordu (52)",
            StateCode: "52",
            CountryCode: "TR"
        },
        {
            StateName: "Osmaniye (80)",
            StateCode: "80",
            CountryCode: "TR"
        },
        {
            StateName: "Rize (53)",
            StateCode: "53",
            CountryCode: "TR"
        },
        {
            StateName: "Sakarya (54)",
            StateCode: "54",
            CountryCode: "TR"
        },
        {
            StateName: "Samsun (55)",
            StateCode: "55",
            CountryCode: "TR"
        },
        {
            StateName: "Siirt (56)",
            StateCode: "56",
            CountryCode: "TR"
        },
        {
            StateName: "Sinop (57)",
            StateCode: "57",
            CountryCode: "TR"
        },
        {
            StateName: "Sivas (58)",
            StateCode: "58",
            CountryCode: "TR"
        },
        {
            StateName: "Tekirdağ (59)",
            StateCode: "59",
            CountryCode: "TR"
        },
        {
            StateName: "Tokat (60)",
            StateCode: "60",
            CountryCode: "TR"
        },
        {
            StateName: "Trabzon (61)",
            StateCode: "61",
            CountryCode: "TR"
        },
        {
            StateName: "Tunceli (62)",
            StateCode: "62",
            CountryCode: "TR"
        },
        {
            StateName: "Uşak (64)",
            StateCode: "64",
            CountryCode: "TR"
        },
        {
            StateName: "Van (65)",
            StateCode: "65",
            CountryCode: "TR"
        },
        {
            StateName: "Yalova (77)",
            StateCode: "77",
            CountryCode: "TR"
        },
        {
            StateName: "Yozgat (66)",
            StateCode: "66",
            CountryCode: "TR"
        },
        {
            StateName: "Zonguldak (67)",
            StateCode: "67",
            CountryCode: "TR"
        },
        {
            StateName: "Çanakkale (17)",
            StateCode: "17",
            CountryCode: "TR"
        },
        {
            StateName: "Çankırı (18)",
            StateCode: "18",
            CountryCode: "TR"
        },
        {
            StateName: "Çorum (19)",
            StateCode: "19",
            CountryCode: "TR"
        },
        {
            StateName: "İstanbul (34)",
            StateCode: "34",
            CountryCode: "TR"
        },
        {
            StateName: "İzmir (35)",
            StateCode: "35",
            CountryCode: "TR"
        },
        {
            StateName: "Şanlıurfa (63)",
            StateCode: "63",
            CountryCode: "TR"
        },
        {
            StateName: "Şırnak (73)",
            StateCode: "73",
            CountryCode: "TR"
        },
        {
            StateName: "Ben Arous (13)",
            StateCode: "13",
            CountryCode: "TN"
        },
        {
            StateName: "Bizerte (23)",
            StateCode: "23",
            CountryCode: "TN"
        },
        {
            StateName: "Béja (31)",
            StateCode: "31",
            CountryCode: "TN"
        },
        {
            StateName: "Gabès (81)",
            StateCode: "81",
            CountryCode: "TN"
        },
        {
            StateName: "Gafsa (71)",
            StateCode: "71",
            CountryCode: "TN"
        },
        {
            StateName: "Jendouba (32)",
            StateCode: "32",
            CountryCode: "TN"
        },
        {
            StateName: "Kairouan (41)",
            StateCode: "41",
            CountryCode: "TN"
        },
        {
            StateName: "Kasserine (42)",
            StateCode: "42",
            CountryCode: "TN"
        },
        {
            StateName: "Kébili (73)",
            StateCode: "73",
            CountryCode: "TN"
        },
        {
            StateName: "L'Ariana (12)",
            StateCode: "12",
            CountryCode: "TN"
        },
        {
            StateName: "La Manouba (14)",
            StateCode: "14",
            CountryCode: "TN"
        },
        {
            StateName: "Le Kef (33)",
            StateCode: "33",
            CountryCode: "TN"
        },
        {
            StateName: "Mahdia (53)",
            StateCode: "53",
            CountryCode: "TN"
        },
        {
            StateName: "Monastir (52)",
            StateCode: "52",
            CountryCode: "TN"
        },
        {
            StateName: "Médenine (82)",
            StateCode: "82",
            CountryCode: "TN"
        },
        {
            StateName: "Nabeul (21)",
            StateCode: "21",
            CountryCode: "TN"
        },
        {
            StateName: "Sfax (61)",
            StateCode: "61",
            CountryCode: "TN"
        },
        {
            StateName: "Sidi Bouzid (43)",
            StateCode: "43",
            CountryCode: "TN"
        },
        {
            StateName: "Siliana (34)",
            StateCode: "34",
            CountryCode: "TN"
        },
        {
            StateName: "Sousse (51)",
            StateCode: "51",
            CountryCode: "TN"
        },
        {
            StateName: "Tataouine (83)",
            StateCode: "83",
            CountryCode: "TN"
        },
        {
            StateName: "Tozeur (72)",
            StateCode: "72",
            CountryCode: "TN"
        },
        {
            StateName: "Tunis (11)",
            StateCode: "11",
            CountryCode: "TN"
        },
        {
            StateName: "Zaghouan (22)",
            StateCode: "22",
            CountryCode: "TN"
        },
        {
            StateName: "Arima (ARI)",
            StateCode: "ARI",
            CountryCode: "TT"
        },
        {
            StateName: "Chaguanas (CHA)",
            StateCode: "CHA",
            CountryCode: "TT"
        },
        {
            StateName: "Couva-Tabaquite-Talparo (CTT)",
            StateCode: "CTT",
            CountryCode: "TT"
        },
        {
            StateName: "Diego Martin (DMN)",
            StateCode: "DMN",
            CountryCode: "TT"
        },
        {
            StateName: "Mayaro-Rio Claro (MRC)",
            StateCode: "MRC",
            CountryCode: "TT"
        },
        {
            StateName: "Penal-Debe (PED)",
            StateCode: "PED",
            CountryCode: "TT"
        },
        {
            StateName: "Point Fortin (PTF)",
            StateCode: "PTF",
            CountryCode: "TT"
        },
        {
            StateName: "Port of Spain (POS)",
            StateCode: "POS",
            CountryCode: "TT"
        },
        {
            StateName: "Princes Town (PRT)",
            StateCode: "PRT",
            CountryCode: "TT"
        },
        {
            StateName: "San Fernando (SFO)",
            StateCode: "SFO",
            CountryCode: "TT"
        },
        {
            StateName: "San Juan-Laventille (SJL)",
            StateCode: "SJL",
            CountryCode: "TT"
        },
        {
            StateName: "Sangre Grande (SGE)",
            StateCode: "SGE",
            CountryCode: "TT"
        },
        {
            StateName: "Siparia (SIP)",
            StateCode: "SIP",
            CountryCode: "TT"
        },
        {
            StateName: "Tobago (TOB)",
            StateCode: "TOB",
            CountryCode: "TT"
        },
        {
            StateName: "Tunapuna-Piarco (TUP)",
            StateCode: "TUP",
            CountryCode: "TT"
        },
        {
            StateName: "Amnat Charoen (37)",
            StateCode: "37",
            CountryCode: "TH"
        },
        {
            StateName: "Ang Thong (15)",
            StateCode: "15",
            CountryCode: "TH"
        },
        {
            StateName: "Bueng Kan (38)",
            StateCode: "38",
            CountryCode: "TH"
        },
        {
            StateName: "Buri Ram (31)",
            StateCode: "31",
            CountryCode: "TH"
        },
        {
            StateName: "Chachoengsao (24)",
            StateCode: "24",
            CountryCode: "TH"
        },
        {
            StateName: "Chai Nat (18)",
            StateCode: "18",
            CountryCode: "TH"
        },
        {
            StateName: "Chaiyaphum (36)",
            StateCode: "36",
            CountryCode: "TH"
        },
        {
            StateName: "Chanthaburi (22)",
            StateCode: "22",
            CountryCode: "TH"
        },
        {
            StateName: "Chiang Mai (50)",
            StateCode: "50",
            CountryCode: "TH"
        },
        {
            StateName: "Chiang Rai (57)",
            StateCode: "57",
            CountryCode: "TH"
        },
        {
            StateName: "Chon Buri (20)",
            StateCode: "20",
            CountryCode: "TH"
        },
        {
            StateName: "Chumphon (86)",
            StateCode: "86",
            CountryCode: "TH"
        },
        {
            StateName: "Kalasin (46)",
            StateCode: "46",
            CountryCode: "TH"
        },
        {
            StateName: "Kamphaeng Phet (62)",
            StateCode: "62",
            CountryCode: "TH"
        },
        {
            StateName: "Kanchanaburi (71)",
            StateCode: "71",
            CountryCode: "TH"
        },
        {
            StateName: "Khon Kaen (40)",
            StateCode: "40",
            CountryCode: "TH"
        },
        {
            StateName: "Krabi (81)",
            StateCode: "81",
            CountryCode: "TH"
        },
        {
            StateName: "Krung Thep Maha Nakhon (10)",
            StateCode: "10",
            CountryCode: "TH"
        },
        {
            StateName: "Lampang (52)",
            StateCode: "52",
            CountryCode: "TH"
        },
        {
            StateName: "Lamphun (51)",
            StateCode: "51",
            CountryCode: "TH"
        },
        {
            StateName: "Loei (42)",
            StateCode: "42",
            CountryCode: "TH"
        },
        {
            StateName: "Lop Buri (16)",
            StateCode: "16",
            CountryCode: "TH"
        },
        {
            StateName: "Mae Hong Son (58)",
            StateCode: "58",
            CountryCode: "TH"
        },
        {
            StateName: "Maha Sarakham (44)",
            StateCode: "44",
            CountryCode: "TH"
        },
        {
            StateName: "Mukdahan (49)",
            StateCode: "49",
            CountryCode: "TH"
        },
        {
            StateName: "Nakhon Nayok (26)",
            StateCode: "26",
            CountryCode: "TH"
        },
        {
            StateName: "Nakhon Pathom (73)",
            StateCode: "73",
            CountryCode: "TH"
        },
        {
            StateName: "Nakhon Phanom (48)",
            StateCode: "48",
            CountryCode: "TH"
        },
        {
            StateName: "Nakhon Ratchasima (30)",
            StateCode: "30",
            CountryCode: "TH"
        },
        {
            StateName: "Nakhon Sawan (60)",
            StateCode: "60",
            CountryCode: "TH"
        },
        {
            StateName: "Nakhon Si Thammarat (80)",
            StateCode: "80",
            CountryCode: "TH"
        },
        {
            StateName: "Nan (55)",
            StateCode: "55",
            CountryCode: "TH"
        },
        {
            StateName: "Narathiwat (96)",
            StateCode: "96",
            CountryCode: "TH"
        },
        {
            StateName: "Nong Bua Lam Phu (39)",
            StateCode: "39",
            CountryCode: "TH"
        },
        {
            StateName: "Nong Khai (43)",
            StateCode: "43",
            CountryCode: "TH"
        },
        {
            StateName: "Nonthaburi (12)",
            StateCode: "12",
            CountryCode: "TH"
        },
        {
            StateName: "Pathum Thani (13)",
            StateCode: "13",
            CountryCode: "TH"
        },
        {
            StateName: "Pattani (94)",
            StateCode: "94",
            CountryCode: "TH"
        },
        {
            StateName: "Phangnga (82)",
            StateCode: "82",
            CountryCode: "TH"
        },
        {
            StateName: "Phatthalung (93)",
            StateCode: "93",
            CountryCode: "TH"
        },
        {
            StateName: "Phatthaya (S)",
            StateCode: "S",
            CountryCode: "TH"
        },
        {
            StateName: "Phayao (56)",
            StateCode: "56",
            CountryCode: "TH"
        },
        {
            StateName: "Phetchabun (67)",
            StateCode: "67",
            CountryCode: "TH"
        },
        {
            StateName: "Phetchaburi (76)",
            StateCode: "76",
            CountryCode: "TH"
        },
        {
            StateName: "Phichit (66)",
            StateCode: "66",
            CountryCode: "TH"
        },
        {
            StateName: "Phitsanulok (65)",
            StateCode: "65",
            CountryCode: "TH"
        },
        {
            StateName: "Phra Nakhon Si Ayutthaya (14)",
            StateCode: "14",
            CountryCode: "TH"
        },
        {
            StateName: "Phrae (54)",
            StateCode: "54",
            CountryCode: "TH"
        },
        {
            StateName: "Phuket (83)",
            StateCode: "83",
            CountryCode: "TH"
        },
        {
            StateName: "Prachin Buri (25)",
            StateCode: "25",
            CountryCode: "TH"
        },
        {
            StateName: "Prachuap Khiri Khan (77)",
            StateCode: "77",
            CountryCode: "TH"
        },
        {
            StateName: "Ranong (85)",
            StateCode: "85",
            CountryCode: "TH"
        },
        {
            StateName: "Ratchaburi (70)",
            StateCode: "70",
            CountryCode: "TH"
        },
        {
            StateName: "Rayong (21)",
            StateCode: "21",
            CountryCode: "TH"
        },
        {
            StateName: "Roi Et (45)",
            StateCode: "45",
            CountryCode: "TH"
        },
        {
            StateName: "Sa Kaeo (27)",
            StateCode: "27",
            CountryCode: "TH"
        },
        {
            StateName: "Sakon Nakhon (47)",
            StateCode: "47",
            CountryCode: "TH"
        },
        {
            StateName: "Samut Prakan (11)",
            StateCode: "11",
            CountryCode: "TH"
        },
        {
            StateName: "Samut Sakhon (74)",
            StateCode: "74",
            CountryCode: "TH"
        },
        {
            StateName: "Samut Songkhram (75)",
            StateCode: "75",
            CountryCode: "TH"
        },
        {
            StateName: "Saraburi (19)",
            StateCode: "19",
            CountryCode: "TH"
        },
        {
            StateName: "Satun (91)",
            StateCode: "91",
            CountryCode: "TH"
        },
        {
            StateName: "Si Sa Ket (33)",
            StateCode: "33",
            CountryCode: "TH"
        },
        {
            StateName: "Sing Buri (17)",
            StateCode: "17",
            CountryCode: "TH"
        },
        {
            StateName: "Songkhla (90)",
            StateCode: "90",
            CountryCode: "TH"
        },
        {
            StateName: "Sukhothai (64)",
            StateCode: "64",
            CountryCode: "TH"
        },
        {
            StateName: "Suphan Buri (72)",
            StateCode: "72",
            CountryCode: "TH"
        },
        {
            StateName: "Surat Thani (84)",
            StateCode: "84",
            CountryCode: "TH"
        },
        {
            StateName: "Surin (32)",
            StateCode: "32",
            CountryCode: "TH"
        },
        {
            StateName: "Tak (63)",
            StateCode: "63",
            CountryCode: "TH"
        },
        {
            StateName: "Trang (92)",
            StateCode: "92",
            CountryCode: "TH"
        },
        {
            StateName: "Trat (23)",
            StateCode: "23",
            CountryCode: "TH"
        },
        {
            StateName: "Ubon Ratchathani (34)",
            StateCode: "34",
            CountryCode: "TH"
        },
        {
            StateName: "Udon Thani (41)",
            StateCode: "41",
            CountryCode: "TH"
        },
        {
            StateName: "Uthai Thani (61)",
            StateCode: "61",
            CountryCode: "TH"
        },
        {
            StateName: "Uttaradit (53)",
            StateCode: "53",
            CountryCode: "TH"
        },
        {
            StateName: "Yala (95)",
            StateCode: "95",
            CountryCode: "TH"
        },
        {
            StateName: "Yasothon (35)",
            StateCode: "35",
            CountryCode: "TH"
        },
        {
            StateName: "Arusha (1)",
            StateCode: "1",
            CountryCode: "TZ"
        },
        {
            StateName: "Coast (19)",
            StateCode: "19",
            CountryCode: "TZ"
        },
        {
            StateName: "Dar es Salaam (2)",
            StateCode: "2",
            CountryCode: "TZ"
        },
        {
            StateName: "Dodoma (3)",
            StateCode: "3",
            CountryCode: "TZ"
        },
        {
            StateName: "Geita (27)",
            StateCode: "27",
            CountryCode: "TZ"
        },
        {
            StateName: "Iringa (4)",
            StateCode: "4",
            CountryCode: "TZ"
        },
        {
            StateName: "Kagera (5)",
            StateCode: "5",
            CountryCode: "TZ"
        },
        {
            StateName: "Kaskazini Pemba (6)",
            StateCode: "6",
            CountryCode: "TZ"
        },
        {
            StateName: "Kaskazini Unguja (7)",
            StateCode: "7",
            CountryCode: "TZ"
        },
        {
            StateName: "Katavi (28)",
            StateCode: "28",
            CountryCode: "TZ"
        },
        {
            StateName: "Kigoma (8)",
            StateCode: "8",
            CountryCode: "TZ"
        },
        {
            StateName: "Kilimanjaro (9)",
            StateCode: "9",
            CountryCode: "TZ"
        },
        {
            StateName: "Kusini Pemba (10)",
            StateCode: "10",
            CountryCode: "TZ"
        },
        {
            StateName: "Kusini Unguja (11)",
            StateCode: "11",
            CountryCode: "TZ"
        },
        {
            StateName: "Lindi (12)",
            StateCode: "12",
            CountryCode: "TZ"
        },
        {
            StateName: "Manyara (26)",
            StateCode: "26",
            CountryCode: "TZ"
        },
        {
            StateName: "Mara (13)",
            StateCode: "13",
            CountryCode: "TZ"
        },
        {
            StateName: "Mbeya (14)",
            StateCode: "14",
            CountryCode: "TZ"
        },
        {
            StateName: "Mjini Magharibi (15)",
            StateCode: "15",
            CountryCode: "TZ"
        },
        {
            StateName: "Morogoro (16)",
            StateCode: "16",
            CountryCode: "TZ"
        },
        {
            StateName: "Mtwara (17)",
            StateCode: "17",
            CountryCode: "TZ"
        },
        {
            StateName: "Mwanza (18)",
            StateCode: "18",
            CountryCode: "TZ"
        },
        {
            StateName: "Njombe (29)",
            StateCode: "29",
            CountryCode: "TZ"
        },
        {
            StateName: "Pemba North (6)",
            StateCode: "6",
            CountryCode: "TZ"
        },
        {
            StateName: "Pemba South (10)",
            StateCode: "10",
            CountryCode: "TZ"
        },
        {
            StateName: "Pwani (19)",
            StateCode: "19",
            CountryCode: "TZ"
        },
        {
            StateName: "Rukwa (20)",
            StateCode: "20",
            CountryCode: "TZ"
        },
        {
            StateName: "Ruvuma (21)",
            StateCode: "21",
            CountryCode: "TZ"
        },
        {
            StateName: "Shinyanga (22)",
            StateCode: "22",
            CountryCode: "TZ"
        },
        {
            StateName: "Simiyu (30)",
            StateCode: "30",
            CountryCode: "TZ"
        },
        {
            StateName: "Singida (23)",
            StateCode: "23",
            CountryCode: "TZ"
        },
        {
            StateName: "Songwe (31)",
            StateCode: "31",
            CountryCode: "TZ"
        },
        {
            StateName: "Tabora (24)",
            StateCode: "24",
            CountryCode: "TZ"
        },
        {
            StateName: "Tanga (25)",
            StateCode: "25",
            CountryCode: "TZ"
        },
        {
            StateName: "Zanzibar North (7)",
            StateCode: "7",
            CountryCode: "TZ"
        },
        {
            StateName: "Zanzibar South (11)",
            StateCode: "11",
            CountryCode: "TZ"
        },
        {
            StateName: "Zanzibar West (15)",
            StateCode: "15",
            CountryCode: "TZ"
        },
        {
            StateName: "Aargau (AG)",
            StateCode: "AG",
            CountryCode: "CH"
        },
        {
            StateName: "Appenzell Ausserrhoden (AR)",
            StateCode: "AR",
            CountryCode: "CH"
        },
        {
            StateName: "Appenzell Innerrhoden (AI)",
            StateCode: "AI",
            CountryCode: "CH"
        },
        {
            StateName: "Basel-Landschaft (BL)",
            StateCode: "BL",
            CountryCode: "CH"
        },
        {
            StateName: "Basel-Stadt (BS)",
            StateCode: "BS",
            CountryCode: "CH"
        },
        {
            StateName: "Bern (BE)",
            StateCode: "BE",
            CountryCode: "CH"
        },
        {
            StateName: "Berne (BE)",
            StateCode: "BE",
            CountryCode: "CH"
        },
        {
            StateName: "Freiburg (FR)",
            StateCode: "FR",
            CountryCode: "CH"
        },
        {
            StateName: "Fribourg (FR)",
            StateCode: "FR",
            CountryCode: "CH"
        },
        {
            StateName: "Genève (GE)",
            StateCode: "GE",
            CountryCode: "CH"
        },
        {
            StateName: "Glarus (GL)",
            StateCode: "GL",
            CountryCode: "CH"
        },
        {
            StateName: "Graubünden (GR)",
            StateCode: "GR",
            CountryCode: "CH"
        },
        {
            StateName: "Grigioni (GR)",
            StateCode: "GR",
            CountryCode: "CH"
        },
        {
            StateName: "Grischun (GR)",
            StateCode: "GR",
            CountryCode: "CH"
        },
        {
            StateName: "Grisons (GR)",
            StateCode: "GR",
            CountryCode: "CH"
        },
        {
            StateName: "Jura (JU)",
            StateCode: "JU",
            CountryCode: "CH"
        },
        {
            StateName: "Luzern (LU)",
            StateCode: "LU",
            CountryCode: "CH"
        },
        {
            StateName: "Neuchâtel (NE)",
            StateCode: "NE",
            CountryCode: "CH"
        },
        {
            StateName: "Nidwalden (NW)",
            StateCode: "NW",
            CountryCode: "CH"
        },
        {
            StateName: "Obwalden (OW)",
            StateCode: "OW",
            CountryCode: "CH"
        },
        {
            StateName: "Sankt Gallen (SG)",
            StateCode: "SG",
            CountryCode: "CH"
        },
        {
            StateName: "Schaffhausen (SH)",
            StateCode: "SH",
            CountryCode: "CH"
        },
        {
            StateName: "Schwyz (SZ)",
            StateCode: "SZ",
            CountryCode: "CH"
        },
        {
            StateName: "Solothurn (SO)",
            StateCode: "SO",
            CountryCode: "CH"
        },
        {
            StateName: "Thurgau (TG)",
            StateCode: "TG",
            CountryCode: "CH"
        },
        {
            StateName: "Ticino (TI)",
            StateCode: "TI",
            CountryCode: "CH"
        },
        {
            StateName: "Uri (UR)",
            StateCode: "UR",
            CountryCode: "CH"
        },
        {
            StateName: "Valais (VS)",
            StateCode: "VS",
            CountryCode: "CH"
        },
        {
            StateName: "Vaud (VD)",
            StateCode: "VD",
            CountryCode: "CH"
        },
        {
            StateName: "Wallis (VS)",
            StateCode: "VS",
            CountryCode: "CH"
        },
        {
            StateName: "Zug (ZG)",
            StateCode: "ZG",
            CountryCode: "CH"
        },
        {
            StateName: "Zürich (ZH)",
            StateCode: "ZH",
            CountryCode: "CH"
        },
        {
            StateName: "Blekinge län [SE-10] (K)",
            StateCode: "K",
            CountryCode: "SE"
        },
        {
            StateName: "Dalarnas län [SE-20] (W)",
            StateCode: "W",
            CountryCode: "SE"
        },
        {
            StateName: "Gotlands län [SE-09] (I)",
            StateCode: "I",
            CountryCode: "SE"
        },
        {
            StateName: "Gävleborgs län [SE-21] (X)",
            StateCode: "X",
            CountryCode: "SE"
        },
        {
            StateName: "Hallands län [SE-13] (N)",
            StateCode: "N",
            CountryCode: "SE"
        },
        {
            StateName: "Jämtlands län [SE-23] (Z)",
            StateCode: "Z",
            CountryCode: "SE"
        },
        {
            StateName: "Jönköpings län [SE-06] (F)",
            StateCode: "F",
            CountryCode: "SE"
        },
        {
            StateName: "Kalmar län [SE-08] (H)",
            StateCode: "H",
            CountryCode: "SE"
        },
        {
            StateName: "Kronobergs län [SE-07] (G)",
            StateCode: "G",
            CountryCode: "SE"
        },
        {
            StateName: "Norrbottens län [SE-25] (BD)",
            StateCode: "BD",
            CountryCode: "SE"
        },
        {
            StateName: "Skåne län [SE-12] (M)",
            StateCode: "M",
            CountryCode: "SE"
        },
        {
            StateName: "Stockholms län [SE-01] (AB)",
            StateCode: "AB",
            CountryCode: "SE"
        },
        {
            StateName: "Södermanlands län [SE-04] (D)",
            StateCode: "D",
            CountryCode: "SE"
        },
        {
            StateName: "Uppsala län [SE-03] (C)",
            StateCode: "C",
            CountryCode: "SE"
        },
        {
            StateName: "Värmlands län [SE-17] (S)",
            StateCode: "S",
            CountryCode: "SE"
        },
        {
            StateName: "Västerbottens län [SE-24] (AC)",
            StateCode: "AC",
            CountryCode: "SE"
        },
        {
            StateName: "Västernorrlands län [SE-22] (Y)",
            StateCode: "Y",
            CountryCode: "SE"
        },
        {
            StateName: "Västmanlands län [SE-19] (U)",
            StateCode: "U",
            CountryCode: "SE"
        },
        {
            StateName: "Västra Götalands län [SE-14] (O)",
            StateCode: "O",
            CountryCode: "SE"
        },
        {
            StateName: "Örebro län [SE-18] (T)",
            StateCode: "T",
            CountryCode: "SE"
        },
        {
            StateName: "Östergötlands län [SE-05] (E)",
            StateCode: "E",
            CountryCode: "SE"
        },
        {
            StateName: "Ampara (52)",
            StateCode: "52",
            CountryCode: "LK"
        },
        {
            StateName: "Ampāntōṭṭai (33)",
            StateCode: "33",
            CountryCode: "LK"
        },
        {
            StateName: "Ampāra (52)",
            StateCode: "52",
            CountryCode: "LK"
        },
        {
            StateName: "Ampāṟai (52)",
            StateCode: "52",
            CountryCode: "LK"
        },
        {
            StateName: "Anuradhapura (71)",
            StateCode: "71",
            CountryCode: "LK"
        },
        {
            StateName: "Anurādhapura (71)",
            StateCode: "71",
            CountryCode: "LK"
        },
        {
            StateName: "Anurātapuram (71)",
            StateCode: "71",
            CountryCode: "LK"
        },
        {
            StateName: "Badulla (81)",
            StateCode: "81",
            CountryCode: "LK"
        },
        {
            StateName: "Basnāhira paḷāta (1)",
            StateCode: "1",
            CountryCode: "LK"
        },
        {
            StateName: "Batticaloa (51)",
            StateCode: "51",
            CountryCode: "LK"
        },
        {
            StateName: "Central Province (2)",
            StateCode: "2",
            CountryCode: "LK"
        },
        {
            StateName: "Chappirakamuva mākāṇam (9)",
            StateCode: "9",
            CountryCode: "LK"
        },
        {
            StateName: "Colombo (11)",
            StateCode: "11",
            CountryCode: "LK"
        },
        {
            StateName: "Dakuṇu paḷāta (3)",
            StateCode: "3",
            CountryCode: "LK"
        },
        {
            StateName: "Eastern Province (5)",
            StateCode: "5",
            CountryCode: "LK"
        },
        {
            StateName: "Galle (31)",
            StateCode: "31",
            CountryCode: "LK"
        },
        {
            StateName: "Gampaha (12)",
            StateCode: "12",
            CountryCode: "LK"
        },
        {
            StateName: "Gālla (31)",
            StateCode: "31",
            CountryCode: "LK"
        },
        {
            StateName: "Hambantota (33)",
            StateCode: "33",
            CountryCode: "LK"
        },
        {
            StateName: "Hambantŏṭa (33)",
            StateCode: "33",
            CountryCode: "LK"
        },
        {
            StateName: "Irattiṉapuri (91)",
            StateCode: "91",
            CountryCode: "LK"
        },
        {
            StateName: "Jaffna (41)",
            StateCode: "41",
            CountryCode: "LK"
        },
        {
            StateName: "Kalutara (13)",
            StateCode: "13",
            CountryCode: "LK"
        },
        {
            StateName: "Kampahā (12)",
            StateCode: "12",
            CountryCode: "LK"
        },
        {
            StateName: "Kandy (21)",
            StateCode: "21",
            CountryCode: "LK"
        },
        {
            StateName: "Kaḷutara (13)",
            StateCode: "13",
            CountryCode: "LK"
        },
        {
            StateName: "Kaḷuttuṟai (13)",
            StateCode: "13",
            CountryCode: "LK"
        },
        {
            StateName: "Kaṇṭi (21)",
            StateCode: "21",
            CountryCode: "LK"
        },
        {
            StateName: "Kegalla (92)",
            StateCode: "92",
            CountryCode: "LK"
        },
        {
            StateName: "Kekālai (92)",
            StateCode: "92",
            CountryCode: "LK"
        },
        {
            StateName: "Kilinochchi (42)",
            StateCode: "42",
            CountryCode: "LK"
        },
        {
            StateName: "Kilinŏchchi (42)",
            StateCode: "42",
            CountryCode: "LK"
        },
        {
            StateName: "Kil̮akku mākāṇam (5)",
            StateCode: "5",
            CountryCode: "LK"
        },
        {
            StateName: "Kiḷinochchi (42)",
            StateCode: "42",
            CountryCode: "LK"
        },
        {
            StateName: "Kurunegala (61)",
            StateCode: "61",
            CountryCode: "LK"
        },
        {
            StateName: "Kurunākal (61)",
            StateCode: "61",
            CountryCode: "LK"
        },
        {
            StateName: "Kuruṇægala (61)",
            StateCode: "61",
            CountryCode: "LK"
        },
        {
            StateName: "Kægalla (92)",
            StateCode: "92",
            CountryCode: "LK"
        },
        {
            StateName: "Kāli (31)",
            StateCode: "31",
            CountryCode: "LK"
        },
        {
            StateName: "Kŏl̮umpu (11)",
            StateCode: "11",
            CountryCode: "LK"
        },
        {
            StateName: "Kŏḷamba (11)",
            StateCode: "11",
            CountryCode: "LK"
        },
        {
            StateName: "Madhyama paḷāta (2)",
            StateCode: "2",
            CountryCode: "LK"
        },
        {
            StateName: "Mahanuvara (21)",
            StateCode: "21",
            CountryCode: "LK"
        },
        {
            StateName: "Mannar (43)",
            StateCode: "43",
            CountryCode: "LK"
        },
        {
            StateName: "Mannārama (43)",
            StateCode: "43",
            CountryCode: "LK"
        },
        {
            StateName: "Matale (22)",
            StateCode: "22",
            CountryCode: "LK"
        },
        {
            StateName: "Matara (32)",
            StateCode: "32",
            CountryCode: "LK"
        },
        {
            StateName: "Mattiya mākāṇam (2)",
            StateCode: "2",
            CountryCode: "LK"
        },
        {
            StateName: "Maḍakalapuva (51)",
            StateCode: "51",
            CountryCode: "LK"
        },
        {
            StateName: "Maṉṉār (43)",
            StateCode: "43",
            CountryCode: "LK"
        },
        {
            StateName: "Maṭṭakkaḷappu (51)",
            StateCode: "51",
            CountryCode: "LK"
        },
        {
            StateName: "Mel mākāṇam (1)",
            StateCode: "1",
            CountryCode: "LK"
        },
        {
            StateName: "Monaragala (82)",
            StateCode: "82",
            CountryCode: "LK"
        },
        {
            StateName: "Mulativ (45)",
            StateCode: "45",
            CountryCode: "LK"
        },
        {
            StateName: "Mullaittivu (45)",
            StateCode: "45",
            CountryCode: "LK"
        },
        {
            StateName: "Mullaittīvu (45)",
            StateCode: "45",
            CountryCode: "LK"
        },
        {
            StateName: "Mātale (22)",
            StateCode: "22",
            CountryCode: "LK"
        },
        {
            StateName: "Mātara (32)",
            StateCode: "32",
            CountryCode: "LK"
        },
        {
            StateName: "Māttaḷai (22)",
            StateCode: "22",
            CountryCode: "LK"
        },
        {
            StateName: "Māttaṛai (32)",
            StateCode: "32",
            CountryCode: "LK"
        },
        {
            StateName: "Mŏṇarāgala (82)",
            StateCode: "82",
            CountryCode: "LK"
        },
        {
            StateName: "Mŏṉarākalai (82)",
            StateCode: "82",
            CountryCode: "LK"
        },
        {
            StateName: "North Central Province (7)",
            StateCode: "7",
            CountryCode: "LK"
        },
        {
            StateName: "North Western Province (6)",
            StateCode: "6",
            CountryCode: "LK"
        },
        {
            StateName: "Northern Province (4)",
            StateCode: "4",
            CountryCode: "LK"
        },
        {
            StateName: "Nuvara Ĕliya (23)",
            StateCode: "23",
            CountryCode: "LK"
        },
        {
            StateName: "Nuvarĕliyā (23)",
            StateCode: "23",
            CountryCode: "LK"
        },
        {
            StateName: "Nuwara Eliya (23)",
            StateCode: "23",
            CountryCode: "LK"
        },
        {
            StateName: "Næ̆gĕnahira paḷāta (5)",
            StateCode: "5",
            CountryCode: "LK"
        },
        {
            StateName: "Patuḷai (81)",
            StateCode: "81",
            CountryCode: "LK"
        },
        {
            StateName: "Polonnaruwa (72)",
            StateCode: "72",
            CountryCode: "LK"
        },
        {
            StateName: "Puttalam (62)",
            StateCode: "62",
            CountryCode: "LK"
        },
        {
            StateName: "Puttalama (62)",
            StateCode: "62",
            CountryCode: "LK"
        },
        {
            StateName: "Puttaḷam (62)",
            StateCode: "62",
            CountryCode: "LK"
        },
        {
            StateName: "Pŏlaṉṉaṛuvai (72)",
            StateCode: "72",
            CountryCode: "LK"
        },
        {
            StateName: "Pŏḷŏnnaruva (72)",
            StateCode: "72",
            CountryCode: "LK"
        },
        {
            StateName: "Ratnapura (91)",
            StateCode: "91",
            CountryCode: "LK"
        },
        {
            StateName: "Sabaragamuva paḷāta (9)",
            StateCode: "9",
            CountryCode: "LK"
        },
        {
            StateName: "Sabaragamuwa Province (9)",
            StateCode: "9",
            CountryCode: "LK"
        },
        {
            StateName: "Southern Province (3)",
            StateCode: "3",
            CountryCode: "LK"
        },
        {
            StateName: "Tirukŏṇamalai (53)",
            StateCode: "53",
            CountryCode: "LK"
        },
        {
            StateName: "Trikuṇāmalaya (53)",
            StateCode: "53",
            CountryCode: "LK"
        },
        {
            StateName: "Trincomalee (53)",
            StateCode: "53",
            CountryCode: "LK"
        },
        {
            StateName: "Tĕṉ mākāṇam (3)",
            StateCode: "3",
            CountryCode: "LK"
        },
        {
            StateName: "Uturu paḷāta (4)",
            StateCode: "4",
            CountryCode: "LK"
        },
        {
            StateName: "Uturumæ̆da paḷāta (7)",
            StateCode: "7",
            CountryCode: "LK"
        },
        {
            StateName: "Uva Province (8)",
            StateCode: "8",
            CountryCode: "LK"
        },
        {
            StateName: "Vavuniya (44)",
            StateCode: "44",
            CountryCode: "LK"
        },
        {
            StateName: "Vavuniyāva (44)",
            StateCode: "44",
            CountryCode: "LK"
        },
        {
            StateName: "Vavuṉiyā (44)",
            StateCode: "44",
            CountryCode: "LK"
        },
        {
            StateName: "Vayamba paḷāta (6)",
            StateCode: "6",
            CountryCode: "LK"
        },
        {
            StateName: "Vaṭakku mākāṇam (4)",
            StateCode: "4",
            CountryCode: "LK"
        },
        {
            StateName: "Vaṭamattiya mākāṇam (7)",
            StateCode: "7",
            CountryCode: "LK"
        },
        {
            StateName: "Vaṭamel mākāṇam (6)",
            StateCode: "6",
            CountryCode: "LK"
        },
        {
            StateName: "Western Province (1)",
            StateCode: "1",
            CountryCode: "LK"
        },
        {
            StateName: "Yāl̮ppāṇam (41)",
            StateCode: "41",
            CountryCode: "LK"
        },
        {
            StateName: "Yāpanaya (41)",
            StateCode: "41",
            CountryCode: "LK"
        },
        {
            StateName: "Ūva paḷāta (8)",
            StateCode: "8",
            CountryCode: "LK"
        },
        {
            StateName: "Ūvā mākāṇam (8)",
            StateCode: "8",
            CountryCode: "LK"
        },
        {
            StateName: "A Coruña [La Coruña] (C)",
            StateCode: "C",
            CountryCode: "ES"
        },
        {
            StateName: "Alacant (A)",
            StateCode: "A",
            CountryCode: "ES"
        },
        {
            StateName: "Albacete (AB)",
            StateCode: "AB",
            CountryCode: "ES"
        },
        {
            StateName: "Alicante (A)",
            StateCode: "A",
            CountryCode: "ES"
        },
        {
            StateName: "Almería (AL)",
            StateCode: "AL",
            CountryCode: "ES"
        },
        {
            StateName: "Andalucía (AN)",
            StateCode: "AN",
            CountryCode: "ES"
        },
        {
            StateName: "Araba (VI)",
            StateCode: "VI",
            CountryCode: "ES"
        },
        {
            StateName: "Aragón (AR)",
            StateCode: "AR",
            CountryCode: "ES"
        },
        {
            StateName: "Asturias (O)",
            StateCode: "O",
            CountryCode: "ES"
        },
        {
            StateName: "Asturias, Principado de (AS)",
            StateCode: "AS",
            CountryCode: "ES"
        },
        {
            StateName: "Badajoz (BA)",
            StateCode: "BA",
            CountryCode: "ES"
        },
        {
            StateName: "Balears [Baleares] (PM)",
            StateCode: "PM",
            CountryCode: "ES"
        },
        {
            StateName: "Barcelona [Barcelona] (B)",
            StateCode: "B",
            CountryCode: "ES"
        },
        {
            StateName: "Bizkaia (BI)",
            StateCode: "BI",
            CountryCode: "ES"
        },
        {
            StateName: "Burgos (BU)",
            StateCode: "BU",
            CountryCode: "ES"
        },
        {
            StateName: "Canarias (CN)",
            StateCode: "CN",
            CountryCode: "ES"
        },
        {
            StateName: "Cantabria (CB)",
            StateCode: "CB",
            CountryCode: "ES"
        },
        {
            StateName: "Cantabria (S)",
            StateCode: "S",
            CountryCode: "ES"
        },
        {
            StateName: "Castelló (CS)",
            StateCode: "CS",
            CountryCode: "ES"
        },
        {
            StateName: "Castellón (CS)",
            StateCode: "CS",
            CountryCode: "ES"
        },
        {
            StateName: "Castilla y León (CL)",
            StateCode: "CL",
            CountryCode: "ES"
        },
        {
            StateName: "Castilla-La Mancha (CM)",
            StateCode: "CM",
            CountryCode: "ES"
        },
        {
            StateName: "Catalunya [Cataluña] (CT)",
            StateCode: "CT",
            CountryCode: "ES"
        },
        {
            StateName: "Ceuta (CE)",
            StateCode: "CE",
            CountryCode: "ES"
        },
        {
            StateName: "Ciudad Real (CR)",
            StateCode: "CR",
            CountryCode: "ES"
        },
        {
            StateName: "Cuenca (CU)",
            StateCode: "CU",
            CountryCode: "ES"
        },
        {
            StateName: "Cáceres (CC)",
            StateCode: "CC",
            CountryCode: "ES"
        },
        {
            StateName: "Cádiz (CA)",
            StateCode: "CA",
            CountryCode: "ES"
        },
        {
            StateName: "Córdoba (CO)",
            StateCode: "CO",
            CountryCode: "ES"
        },
        {
            StateName: "Euskal Herria (PV)",
            StateCode: "PV",
            CountryCode: "ES"
        },
        {
            StateName: "Extremadura (EX)",
            StateCode: "EX",
            CountryCode: "ES"
        },
        {
            StateName: "Galicia [Galicia] (GA)",
            StateCode: "GA",
            CountryCode: "ES"
        },
        {
            StateName: "Gipuzkoa (SS)",
            StateCode: "SS",
            CountryCode: "ES"
        },
        {
            StateName: "Girona [Gerona] (GI)",
            StateCode: "GI",
            CountryCode: "ES"
        },
        {
            StateName: "Granada (GR)",
            StateCode: "GR",
            CountryCode: "ES"
        },
        {
            StateName: "Guadalajara (GU)",
            StateCode: "GU",
            CountryCode: "ES"
        },
        {
            StateName: "Huelva (H)",
            StateCode: "H",
            CountryCode: "ES"
        },
        {
            StateName: "Huesca (HU)",
            StateCode: "HU",
            CountryCode: "ES"
        },
        {
            StateName: "Illes Balears [Islas Baleares] (IB)",
            StateCode: "IB",
            CountryCode: "ES"
        },
        {
            StateName: "Jaén (J)",
            StateCode: "J",
            CountryCode: "ES"
        },
        {
            StateName: "La Rioja (RI)",
            StateCode: "RI",
            CountryCode: "ES"
        },
        {
            StateName: "La Rioja (LO)",
            StateCode: "LO",
            CountryCode: "ES"
        },
        {
            StateName: "Las Palmas (GC)",
            StateCode: "GC",
            CountryCode: "ES"
        },
        {
            StateName: "León (LE)",
            StateCode: "LE",
            CountryCode: "ES"
        },
        {
            StateName: "Lleida [Lérida] (L)",
            StateCode: "L",
            CountryCode: "ES"
        },
        {
            StateName: "Lugo [Lugo] (LU)",
            StateCode: "LU",
            CountryCode: "ES"
        },
        {
            StateName: "Madrid (M)",
            StateCode: "M",
            CountryCode: "ES"
        },
        {
            StateName: "Madrid, Comunidad de (MD)",
            StateCode: "MD",
            CountryCode: "ES"
        },
        {
            StateName: "Melilla (ML)",
            StateCode: "ML",
            CountryCode: "ES"
        },
        {
            StateName: "Murcia (MU)",
            StateCode: "MU",
            CountryCode: "ES"
        },
        {
            StateName: "Murcia, Región de (MC)",
            StateCode: "MC",
            CountryCode: "ES"
        },
        {
            StateName: "Málaga (MA)",
            StateCode: "MA",
            CountryCode: "ES"
        },
        {
            StateName: "Nafarroa (NA)",
            StateCode: "NA",
            CountryCode: "ES"
        },
        {
            StateName: "Nafarroako Foru Komunitatea (NC)",
            StateCode: "NC",
            CountryCode: "ES"
        },
        {
            StateName: "Navarra (NA)",
            StateCode: "NA",
            CountryCode: "ES"
        },
        {
            StateName: "Navarra, Comunidad Foral de (NC)",
            StateCode: "NC",
            CountryCode: "ES"
        },
        {
            StateName: "Ourense [Orense] (OR)",
            StateCode: "OR",
            CountryCode: "ES"
        },
        {
            StateName: "Palencia (P)",
            StateCode: "P",
            CountryCode: "ES"
        },
        {
            StateName: "País Vasco (PV)",
            StateCode: "PV",
            CountryCode: "ES"
        },
        {
            StateName: "Pontevedra [Pontevedra] (PO)",
            StateCode: "PO",
            CountryCode: "ES"
        },
        {
            StateName: "Salamanca (SA)",
            StateCode: "SA",
            CountryCode: "ES"
        },
        {
            StateName: "Santa Cruz de Tenerife (TF)",
            StateCode: "TF",
            CountryCode: "ES"
        },
        {
            StateName: "Segovia (SG)",
            StateCode: "SG",
            CountryCode: "ES"
        },
        {
            StateName: "Sevilla (SE)",
            StateCode: "SE",
            CountryCode: "ES"
        },
        {
            StateName: "Soria (SO)",
            StateCode: "SO",
            CountryCode: "ES"
        },
        {
            StateName: "Tarragona [Tarragona] (T)",
            StateCode: "T",
            CountryCode: "ES"
        },
        {
            StateName: "Teruel (TE)",
            StateCode: "TE",
            CountryCode: "ES"
        },
        {
            StateName: "Toledo (TO)",
            StateCode: "TO",
            CountryCode: "ES"
        },
        {
            StateName: "Valencia (V)",
            StateCode: "V",
            CountryCode: "ES"
        },
        {
            StateName: "Valenciana, Comunidad (VC)",
            StateCode: "VC",
            CountryCode: "ES"
        },
        {
            StateName: "Valenciana, Comunitat (VC)",
            StateCode: "VC",
            CountryCode: "ES"
        },
        {
            StateName: "Valladolid (VA)",
            StateCode: "VA",
            CountryCode: "ES"
        },
        {
            StateName: "València (V)",
            StateCode: "V",
            CountryCode: "ES"
        },
        {
            StateName: "Zamora (ZA)",
            StateCode: "ZA",
            CountryCode: "ES"
        },
        {
            StateName: "Zaragoza (Z)",
            StateCode: "Z",
            CountryCode: "ES"
        },
        {
            StateName: "Álava (VI)",
            StateCode: "VI",
            CountryCode: "ES"
        },
        {
            StateName: "Ávila (AV)",
            StateCode: "AV",
            CountryCode: "ES"
        },
        {
            StateName: "Ad Dawḩah (DA)",
            StateCode: "DA",
            CountryCode: "QA"
        },
        {
            StateName: "Al Khawr wa adh Dhakhīrah (KH)",
            StateCode: "KH",
            CountryCode: "QA"
        },
        {
            StateName: "Al Wakrah (WA)",
            StateCode: "WA",
            CountryCode: "QA"
        },
        {
            StateName: "Ar Rayyān (RA)",
            StateCode: "RA",
            CountryCode: "QA"
        },
        {
            StateName: "Ash Shamāl (MS)",
            StateCode: "MS",
            CountryCode: "QA"
        },
        {
            StateName: "Ash Shīḩānīyah (SH)",
            StateCode: "SH",
            CountryCode: "QA"
        },
        {
            StateName: "Az̧ Z̧a‘āyin (ZA)",
            StateCode: "ZA",
            CountryCode: "QA"
        },
        {
            StateName: "Umm Şalāl (US)",
            StateCode: "US",
            CountryCode: "QA"
        },
        {
            StateName: "Acquaviva (1)",
            StateCode: "1",
            CountryCode: "SM"
        },
        {
            StateName: "Borgo Maggiore (6)",
            StateCode: "6",
            CountryCode: "SM"
        },
        {
            StateName: "Chiesanuova (2)",
            StateCode: "2",
            CountryCode: "SM"
        },
        {
            StateName: "Domagnano (3)",
            StateCode: "3",
            CountryCode: "SM"
        },
        {
            StateName: "Faetano (4)",
            StateCode: "4",
            CountryCode: "SM"
        },
        {
            StateName: "Fiorentino (5)",
            StateCode: "5",
            CountryCode: "SM"
        },
        {
            StateName: "Montegiardino (8)",
            StateCode: "8",
            CountryCode: "SM"
        },
        {
            StateName: "San Marino (7)",
            StateCode: "7",
            CountryCode: "SM"
        },
        {
            StateName: "Serravalle (9)",
            StateCode: "9",
            CountryCode: "SM"
        },
        {
            StateName: "Al Khalīl (HBN)",
            StateCode: "HBN",
            CountryCode: "PS"
        },
        {
            StateName: "Al Quds (JEM)",
            StateCode: "JEM",
            CountryCode: "PS"
        },
        {
            StateName: "Arīḩā wal Aghwār (JRH)",
            StateCode: "JRH",
            CountryCode: "PS"
        },
        {
            StateName: "Bayt Laḩm (BTH)",
            StateCode: "BTH",
            CountryCode: "PS"
        },
        {
            StateName: "Bethlehem (BTH)",
            StateCode: "BTH",
            CountryCode: "PS"
        },
        {
            StateName: "Dayr al Balaḩ (DEB)",
            StateCode: "DEB",
            CountryCode: "PS"
        },
        {
            StateName: "Deir El Balah (DEB)",
            StateCode: "DEB",
            CountryCode: "PS"
        },
        {
            StateName: "Gaza (GZA)",
            StateCode: "GZA",
            CountryCode: "PS"
        },
        {
            StateName: "Ghazzah (GZA)",
            StateCode: "GZA",
            CountryCode: "PS"
        },
        {
            StateName: "Hebron (HBN)",
            StateCode: "HBN",
            CountryCode: "PS"
        },
        {
            StateName: "Janīn (JEN)",
            StateCode: "JEN",
            CountryCode: "PS"
        },
        {
            StateName: "Jenin (JEN)",
            StateCode: "JEN",
            CountryCode: "PS"
        },
        {
            StateName: "Jericho and Al Aghwar (JRH)",
            StateCode: "JRH",
            CountryCode: "PS"
        },
        {
            StateName: "Jerusalem (JEM)",
            StateCode: "JEM",
            CountryCode: "PS"
        },
        {
            StateName: "Khan Yunis (KYS)",
            StateCode: "KYS",
            CountryCode: "PS"
        },
        {
            StateName: "Khān Yūnis (KYS)",
            StateCode: "KYS",
            CountryCode: "PS"
        },
        {
            StateName: "Nablus (NBS)",
            StateCode: "NBS",
            CountryCode: "PS"
        },
        {
            StateName: "North Gaza (NGZ)",
            StateCode: "NGZ",
            CountryCode: "PS"
        },
        {
            StateName: "Nāblus (NBS)",
            StateCode: "NBS",
            CountryCode: "PS"
        },
        {
            StateName: "Qalqilya (QQA)",
            StateCode: "QQA",
            CountryCode: "PS"
        },
        {
            StateName: "Qalqīlyah (QQA)",
            StateCode: "QQA",
            CountryCode: "PS"
        },
        {
            StateName: "Rafah (RFH)",
            StateCode: "RFH",
            CountryCode: "PS"
        },
        {
            StateName: "Rafaḩ (RFH)",
            StateCode: "RFH",
            CountryCode: "PS"
        },
        {
            StateName: "Ramallah (RBH)",
            StateCode: "RBH",
            CountryCode: "PS"
        },
        {
            StateName: "Rām Allāh wal Bīrah (RBH)",
            StateCode: "RBH",
            CountryCode: "PS"
        },
        {
            StateName: "Salfit (SLT)",
            StateCode: "SLT",
            CountryCode: "PS"
        },
        {
            StateName: "Salfīt (SLT)",
            StateCode: "SLT",
            CountryCode: "PS"
        },
        {
            StateName: "Shamāl Ghazzah (NGZ)",
            StateCode: "NGZ",
            CountryCode: "PS"
        },
        {
            StateName: "Tubas (TBS)",
            StateCode: "TBS",
            CountryCode: "PS"
        },
        {
            StateName: "Tulkarm (TKM)",
            StateCode: "TKM",
            CountryCode: "PS"
        },
        {
            StateName: "Ţūbās (TBS)",
            StateCode: "TBS",
            CountryCode: "PS"
        },
        {
            StateName: "Ţūlkarm (TKM)",
            StateCode: "TKM",
            CountryCode: "PS"
        },
        {
            StateName: "Bocas del Toro (1)",
            StateCode: "1",
            CountryCode: "PA"
        },
        {
            StateName: "Chiriquí (4)",
            StateCode: "4",
            CountryCode: "PA"
        },
        {
            StateName: "Coclé (2)",
            StateCode: "2",
            CountryCode: "PA"
        },
        {
            StateName: "Colón (3)",
            StateCode: "3",
            CountryCode: "PA"
        },
        {
            StateName: "Darién (5)",
            StateCode: "5",
            CountryCode: "PA"
        },
        {
            StateName: "Emberá (EM)",
            StateCode: "EM",
            CountryCode: "PA"
        },
        {
            StateName: "Guna Yala (KY)",
            StateCode: "KY",
            CountryCode: "PA"
        },
        {
            StateName: "Herrera (6)",
            StateCode: "6",
            CountryCode: "PA"
        },
        {
            StateName: "Los Santos (7)",
            StateCode: "7",
            CountryCode: "PA"
        },
        {
            StateName: "Ngöbe-Buglé (NB)",
            StateCode: "NB",
            CountryCode: "PA"
        },
        {
            StateName: "Panamá (8)",
            StateCode: "8",
            CountryCode: "PA"
        },
        {
            StateName: "Panamá Oeste (10)",
            StateCode: "10",
            CountryCode: "PA"
        },
        {
            StateName: "Veraguas (9)",
            StateCode: "9",
            CountryCode: "PA"
        },
        {
            StateName: "Berat (1)",
            StateCode: "1",
            CountryCode: "AL"
        },
        {
            StateName: "Dibër (9)",
            StateCode: "9",
            CountryCode: "AL"
        },
        {
            StateName: "Durrës (2)",
            StateCode: "2",
            CountryCode: "AL"
        },
        {
            StateName: "Elbasan (3)",
            StateCode: "3",
            CountryCode: "AL"
        },
        {
            StateName: "Fier (4)",
            StateCode: "4",
            CountryCode: "AL"
        },
        {
            StateName: "Gjirokastër (5)",
            StateCode: "5",
            CountryCode: "AL"
        },
        {
            StateName: "Korçë (6)",
            StateCode: "6",
            CountryCode: "AL"
        },
        {
            StateName: "Kukës (7)",
            StateCode: "7",
            CountryCode: "AL"
        },
        {
            StateName: "Lezhë (8)",
            StateCode: "8",
            CountryCode: "AL"
        },
        {
            StateName: "Shkodër (10)",
            StateCode: "10",
            CountryCode: "AL"
        },
        {
            StateName: "Tiranë (11)",
            StateCode: "11",
            CountryCode: "AL"
        },
        {
            StateName: "Vlorë (12)",
            StateCode: "12",
            CountryCode: "AL"
        },
        {
            StateName: "Abşeron (ABS)",
            StateCode: "ABS",
            CountryCode: "AZ"
        },
        {
            StateName: "Astara (AST)",
            StateCode: "AST",
            CountryCode: "AZ"
        },
        {
            StateName: "Ağcabədi (AGC)",
            StateCode: "AGC",
            CountryCode: "AZ"
        },
        {
            StateName: "Ağdam (AGM)",
            StateCode: "AGM",
            CountryCode: "AZ"
        },
        {
            StateName: "Ağdaş (AGS)",
            StateCode: "AGS",
            CountryCode: "AZ"
        },
        {
            StateName: "Ağstafa (AGA)",
            StateCode: "AGA",
            CountryCode: "AZ"
        },
        {
            StateName: "Ağsu (AGU)",
            StateCode: "AGU",
            CountryCode: "AZ"
        },
        {
            StateName: "Babək (BAB)",
            StateCode: "BAB",
            CountryCode: "AZ"
        },
        {
            StateName: "Bakı (BA)",
            StateCode: "BA",
            CountryCode: "AZ"
        },
        {
            StateName: "Balakən (BAL)",
            StateCode: "BAL",
            CountryCode: "AZ"
        },
        {
            StateName: "Beyləqan (BEY)",
            StateCode: "BEY",
            CountryCode: "AZ"
        },
        {
            StateName: "Biləsuvar (BIL)",
            StateCode: "BIL",
            CountryCode: "AZ"
        },
        {
            StateName: "Bərdə (BAR)",
            StateCode: "BAR",
            CountryCode: "AZ"
        },
        {
            StateName: "Culfa (CUL)",
            StateCode: "CUL",
            CountryCode: "AZ"
        },
        {
            StateName: "Cəbrayıl (CAB)",
            StateCode: "CAB",
            CountryCode: "AZ"
        },
        {
            StateName: "Cəlilabad (CAL)",
            StateCode: "CAL",
            CountryCode: "AZ"
        },
        {
            StateName: "Daşkəsən (DAS)",
            StateCode: "DAS",
            CountryCode: "AZ"
        },
        {
            StateName: "Füzuli (FUZ)",
            StateCode: "FUZ",
            CountryCode: "AZ"
        },
        {
            StateName: "Goranboy (GOR)",
            StateCode: "GOR",
            CountryCode: "AZ"
        },
        {
            StateName: "Göygöl (GYG)",
            StateCode: "GYG",
            CountryCode: "AZ"
        },
        {
            StateName: "Göyçay (GOY)",
            StateCode: "GOY",
            CountryCode: "AZ"
        },
        {
            StateName: "Gədəbəy (GAD)",
            StateCode: "GAD",
            CountryCode: "AZ"
        },
        {
            StateName: "Gəncə (GA)",
            StateCode: "GA",
            CountryCode: "AZ"
        },
        {
            StateName: "Hacıqabul (HAC)",
            StateCode: "HAC",
            CountryCode: "AZ"
        },
        {
            StateName: "Kürdəmir (KUR)",
            StateCode: "KUR",
            CountryCode: "AZ"
        },
        {
            StateName: "Kǝngǝrli (KAN)",
            StateCode: "KAN",
            CountryCode: "AZ"
        },
        {
            StateName: "Kəlbəcər (KAL)",
            StateCode: "KAL",
            CountryCode: "AZ"
        },
        {
            StateName: "Laçın (LAC)",
            StateCode: "LAC",
            CountryCode: "AZ"
        },
        {
            StateName: "Lerik (LER)",
            StateCode: "LER",
            CountryCode: "AZ"
        },
        {
            StateName: "Lənkəran (LA)",
            StateCode: "LA",
            CountryCode: "AZ"
        },
        {
            StateName: "Lənkəran (LAN)",
            StateCode: "LAN",
            CountryCode: "AZ"
        },
        {
            StateName: "Masallı (MAS)",
            StateCode: "MAS",
            CountryCode: "AZ"
        },
        {
            StateName: "Mingəçevir (MI)",
            StateCode: "MI",
            CountryCode: "AZ"
        },
        {
            StateName: "Naftalan (NA)",
            StateCode: "NA",
            CountryCode: "AZ"
        },
        {
            StateName: "Naxçıvan (NX)",
            StateCode: "NX",
            CountryCode: "AZ"
        },
        {
            StateName: "Naxçıvan (NV)",
            StateCode: "NV",
            CountryCode: "AZ"
        },
        {
            StateName: "Neftçala (NEF)",
            StateCode: "NEF",
            CountryCode: "AZ"
        },
        {
            StateName: "Ordubad (ORD)",
            StateCode: "ORD",
            CountryCode: "AZ"
        },
        {
            StateName: "Oğuz (OGU)",
            StateCode: "OGU",
            CountryCode: "AZ"
        },
        {
            StateName: "Qax (QAX)",
            StateCode: "QAX",
            CountryCode: "AZ"
        },
        {
            StateName: "Qazax (QAZ)",
            StateCode: "QAZ",
            CountryCode: "AZ"
        },
        {
            StateName: "Qobustan (QOB)",
            StateCode: "QOB",
            CountryCode: "AZ"
        },
        {
            StateName: "Quba (QBA)",
            StateCode: "QBA",
            CountryCode: "AZ"
        },
        {
            StateName: "Qubadlı (QBI)",
            StateCode: "QBI",
            CountryCode: "AZ"
        },
        {
            StateName: "Qusar (QUS)",
            StateCode: "QUS",
            CountryCode: "AZ"
        },
        {
            StateName: "Qəbələ (QAB)",
            StateCode: "QAB",
            CountryCode: "AZ"
        },
        {
            StateName: "Saatlı (SAT)",
            StateCode: "SAT",
            CountryCode: "AZ"
        },
        {
            StateName: "Sabirabad (SAB)",
            StateCode: "SAB",
            CountryCode: "AZ"
        },
        {
            StateName: "Salyan (SAL)",
            StateCode: "SAL",
            CountryCode: "AZ"
        },
        {
            StateName: "Samux (SMX)",
            StateCode: "SMX",
            CountryCode: "AZ"
        },
        {
            StateName: "Siyəzən (SIY)",
            StateCode: "SIY",
            CountryCode: "AZ"
        },
        {
            StateName: "Sumqayıt (SM)",
            StateCode: "SM",
            CountryCode: "AZ"
        },
        {
            StateName: "Sədərək (SAD)",
            StateCode: "SAD",
            CountryCode: "AZ"
        },
        {
            StateName: "Tovuz (TOV)",
            StateCode: "TOV",
            CountryCode: "AZ"
        },
        {
            StateName: "Tərtər (TAR)",
            StateCode: "TAR",
            CountryCode: "AZ"
        },
        {
            StateName: "Ucar (UCA)",
            StateCode: "UCA",
            CountryCode: "AZ"
        },
        {
            StateName: "Xankəndi (XA)",
            StateCode: "XA",
            CountryCode: "AZ"
        },
        {
            StateName: "Xaçmaz (XAC)",
            StateCode: "XAC",
            CountryCode: "AZ"
        },
        {
            StateName: "Xocalı (XCI)",
            StateCode: "XCI",
            CountryCode: "AZ"
        },
        {
            StateName: "Xocavənd (XVD)",
            StateCode: "XVD",
            CountryCode: "AZ"
        },
        {
            StateName: "Xızı (XIZ)",
            StateCode: "XIZ",
            CountryCode: "AZ"
        },
        {
            StateName: "Yardımlı (YAR)",
            StateCode: "YAR",
            CountryCode: "AZ"
        },
        {
            StateName: "Yevlax (YE)",
            StateCode: "YE",
            CountryCode: "AZ"
        },
        {
            StateName: "Yevlax (YEV)",
            StateCode: "YEV",
            CountryCode: "AZ"
        },
        {
            StateName: "Zaqatala (ZAQ)",
            StateCode: "ZAQ",
            CountryCode: "AZ"
        },
        {
            StateName: "Zəngilan (ZAN)",
            StateCode: "ZAN",
            CountryCode: "AZ"
        },
        {
            StateName: "Zərdab (ZAR)",
            StateCode: "ZAR",
            CountryCode: "AZ"
        },
        {
            StateName: "İmişli (IMI)",
            StateCode: "IMI",
            CountryCode: "AZ"
        },
        {
            StateName: "İsmayıllı (ISM)",
            StateCode: "ISM",
            CountryCode: "AZ"
        },
        {
            StateName: "Şabran (SBN)",
            StateCode: "SBN",
            CountryCode: "AZ"
        },
        {
            StateName: "Şahbuz (SAH)",
            StateCode: "SAH",
            CountryCode: "AZ"
        },
        {
            StateName: "Şamaxı (SMI)",
            StateCode: "SMI",
            CountryCode: "AZ"
        },
        {
            StateName: "Şirvan (SR)",
            StateCode: "SR",
            CountryCode: "AZ"
        },
        {
            StateName: "Şuşa (SUS)",
            StateCode: "SUS",
            CountryCode: "AZ"
        },
        {
            StateName: "Şəki (SA)",
            StateCode: "SA",
            CountryCode: "AZ"
        },
        {
            StateName: "Şəki (SAK)",
            StateCode: "SAK",
            CountryCode: "AZ"
        },
        {
            StateName: "Şəmkir (SKR)",
            StateCode: "SKR",
            CountryCode: "AZ"
        },
        {
            StateName: "Şərur (SAR)",
            StateCode: "SAR",
            CountryCode: "AZ"
        },
        {
            StateName: "Adamaoua (AD)",
            StateCode: "AD",
            CountryCode: "CM"
        },
        {
            StateName: "Centre (CE)",
            StateCode: "CE",
            CountryCode: "CM"
        },
        {
            StateName: "East (ES)",
            StateCode: "ES",
            CountryCode: "CM"
        },
        {
            StateName: "Est (ES)",
            StateCode: "ES",
            CountryCode: "CM"
        },
        {
            StateName: "Extrême-Nord (EN)",
            StateCode: "EN",
            CountryCode: "CM"
        },
        {
            StateName: "Far North (EN)",
            StateCode: "EN",
            CountryCode: "CM"
        },
        {
            StateName: "Littoral (LT)",
            StateCode: "LT",
            CountryCode: "CM"
        },
        {
            StateName: "Nord (NO)",
            StateCode: "NO",
            CountryCode: "CM"
        },
        {
            StateName: "Nord-Ouest (NW)",
            StateCode: "NW",
            CountryCode: "CM"
        },
        {
            StateName: "North (NO)",
            StateCode: "NO",
            CountryCode: "CM"
        },
        {
            StateName: "North-West (NW)",
            StateCode: "NW",
            CountryCode: "CM"
        },
        {
            StateName: "Ouest (OU)",
            StateCode: "OU",
            CountryCode: "CM"
        },
        {
            StateName: "South (SU)",
            StateCode: "SU",
            CountryCode: "CM"
        },
        {
            StateName: "South-West (SW)",
            StateCode: "SW",
            CountryCode: "CM"
        },
        {
            StateName: "Sud (SU)",
            StateCode: "SU",
            CountryCode: "CM"
        },
        {
            StateName: "Sud-Ouest (SW)",
            StateCode: "SW",
            CountryCode: "CM"
        },
        {
            StateName: "West (OU)",
            StateCode: "OU",
            CountryCode: "CM"
        },
        {
            StateName: "Al Aḩmadī (AH)",
            StateCode: "AH",
            CountryCode: "KW"
        },
        {
            StateName: "Al Farwānīyah (FA)",
            StateCode: "FA",
            CountryCode: "KW"
        },
        {
            StateName: "Al Jahrā’ (JA)",
            StateCode: "JA",
            CountryCode: "KW"
        },
        {
            StateName: "Al ‘Āşimah (KU)",
            StateCode: "KU",
            CountryCode: "KW"
        },
        {
            StateName: "Mubārak al Kabīr (MU)",
            StateCode: "MU",
            CountryCode: "KW"
        },
        {
            StateName: "Ḩawallī (HA)",
            StateCode: "HA",
            CountryCode: "KW"
        },
        {
            StateName: "Aakkâr (AK)",
            StateCode: "AK",
            CountryCode: "LB"
        },
        {
            StateName: "Al Biqā‘ (BI)",
            StateCode: "BI",
            CountryCode: "LB"
        },
        {
            StateName: "Al Janūb (JA)",
            StateCode: "JA",
            CountryCode: "LB"
        },
        {
            StateName: "An Nabaţīyah (NA)",
            StateCode: "NA",
            CountryCode: "LB"
        },
        {
            StateName: "Ash Shimāl (AS)",
            StateCode: "AS",
            CountryCode: "LB"
        },
        {
            StateName: "Baalbek-Hermel (BH)",
            StateCode: "BH",
            CountryCode: "LB"
        },
        {
            StateName: "Bayrūt (BA)",
            StateCode: "BA",
            CountryCode: "LB"
        },
        {
            StateName: "Beyrouth (BA)",
            StateCode: "BA",
            CountryCode: "LB"
        },
        {
            StateName: "Béqaa (BI)",
            StateCode: "BI",
            CountryCode: "LB"
        },
        {
            StateName: "B‘alabak-Al Hirmil (BH)",
            StateCode: "BH",
            CountryCode: "LB"
        },
        {
            StateName: "Jabal Lubnān (JL)",
            StateCode: "JL",
            CountryCode: "LB"
        },
        {
            StateName: "Liban-Nord (AS)",
            StateCode: "AS",
            CountryCode: "LB"
        },
        {
            StateName: "Liban-Sud (JA)",
            StateCode: "JA",
            CountryCode: "LB"
        },
        {
            StateName: "Mont-Liban (JL)",
            StateCode: "JL",
            CountryCode: "LB"
        },
        {
            StateName: "Nabatîyé (NA)",
            StateCode: "NA",
            CountryCode: "LB"
        },
        {
            StateName: "‘Akkār (AK)",
            StateCode: "AK",
            CountryCode: "LB"
        },
        {
            StateName: "Capellen (CA)",
            StateCode: "CA",
            CountryCode: "LU"
        },
        {
            StateName: "Clerf (CL)",
            StateCode: "CL",
            CountryCode: "LU"
        },
        {
            StateName: "Clervaux (CL)",
            StateCode: "CL",
            CountryCode: "LU"
        },
        {
            StateName: "Diekirch (DI)",
            StateCode: "DI",
            CountryCode: "LU"
        },
        {
            StateName: "Diekrech (DI)",
            StateCode: "DI",
            CountryCode: "LU"
        },
        {
            StateName: "Echternach (EC)",
            StateCode: "EC",
            CountryCode: "LU"
        },
        {
            StateName: "Esch an der Alzette (ES)",
            StateCode: "ES",
            CountryCode: "LU"
        },
        {
            StateName: "Esch-Uelzecht (ES)",
            StateCode: "ES",
            CountryCode: "LU"
        },
        {
            StateName: "Esch-sur-Alzette (ES)",
            StateCode: "ES",
            CountryCode: "LU"
        },
        {
            StateName: "Grevenmacher (GR)",
            StateCode: "GR",
            CountryCode: "LU"
        },
        {
            StateName: "Gréivemaacher (GR)",
            StateCode: "GR",
            CountryCode: "LU"
        },
        {
            StateName: "Iechternach (EC)",
            StateCode: "EC",
            CountryCode: "LU"
        },
        {
            StateName: "Kapellen (CA)",
            StateCode: "CA",
            CountryCode: "LU"
        },
        {
            StateName: "Klierf (CL)",
            StateCode: "CL",
            CountryCode: "LU"
        },
        {
            StateName: "Luxembourg (LU)",
            StateCode: "LU",
            CountryCode: "LU"
        },
        {
            StateName: "Luxemburg (LU)",
            StateCode: "LU",
            CountryCode: "LU"
        },
        {
            StateName: "Lëtzebuerg (LU)",
            StateCode: "LU",
            CountryCode: "LU"
        },
        {
            StateName: "Mersch (ME)",
            StateCode: "ME",
            CountryCode: "LU"
        },
        {
            StateName: "Miersch (ME)",
            StateCode: "ME",
            CountryCode: "LU"
        },
        {
            StateName: "Redange (RD)",
            StateCode: "RD",
            CountryCode: "LU"
        },
        {
            StateName: "Redingen (RD)",
            StateCode: "RD",
            CountryCode: "LU"
        },
        {
            StateName: "Remich (RM)",
            StateCode: "RM",
            CountryCode: "LU"
        },
        {
            StateName: "Réiden-Atert (RD)",
            StateCode: "RD",
            CountryCode: "LU"
        },
        {
            StateName: "Réimech (RM)",
            StateCode: "RM",
            CountryCode: "LU"
        },
        {
            StateName: "Veianen (VD)",
            StateCode: "VD",
            CountryCode: "LU"
        },
        {
            StateName: "Vianden (VD)",
            StateCode: "VD",
            CountryCode: "LU"
        },
        {
            StateName: "Wiltz (WI)",
            StateCode: "WI",
            CountryCode: "LU"
        },
        {
            StateName: "Wolz (WI)",
            StateCode: "WI",
            CountryCode: "LU"
        }
    ];

    private static GetCountryList = [
        {
            CountryCode: "US",
            CountryName: "United States Of America (US)"
        },
        {
            CountryCode: "AL",
            CountryName: "Albania (AL)"
        },
        {
            CountryCode: "AR",
            CountryName: "Argentina (AR)"
        },
        {
            CountryCode: "AU",
            CountryName: "Australia (AU)"
        },
        {
            CountryCode: "AT",
            CountryName: "Austria (AT)"
        },
        {
            CountryCode: "AZ",
            CountryName: "Azerbaijan (AZ)"
        },
        {
            CountryCode: "BS",
            CountryName: "Bahamas (BS)"
        },
        {
            CountryCode: "BH",
            CountryName: "Bahrain (BH)"
        },
        {
            CountryCode: "BD",
            CountryName: "Bangladesh (BD)"
        },
        {
            CountryCode: "BB",
            CountryName: "Barbados (BB)"
        },
        {
            CountryCode: "BE",
            CountryName: "Belgium (BE)"
        },
        {
            CountryCode: "BO",
            CountryName: "Bolivia (BO)"
        },
        {
            CountryCode: "BR",
            CountryName: "Brazil (BR)"
        },
        {
            CountryCode: "BG",
            CountryName: "Bulgaria (BG)"
        },
        {
            CountryCode: "KH",
            CountryName: "Cambodia (KH)"
        },
        {
            CountryCode: "CM",
            CountryName: "Cameroon (CM)"
        },
        {
            CountryCode: "CA",
            CountryName: "Canada (CA)"
        },
        {
            CountryCode: "TD",
            CountryName: "Chad (TD)"
        },
        {
            CountryCode: "CL",
            CountryName: "Chile (CL)"
        },
        {
            CountryCode: "CN",
            CountryName: "China (CN)"
        },
        {
            CountryCode: "CO",
            CountryName: "Colombia (CO)"
        },
        {
            CountryCode: "CR",
            CountryName: "Costa Rica (CR)"
        },
        {
            CountryCode: "CU",
            CountryName: "Cuba (CU)"
        },
        {
            CountryCode: "DK",
            CountryName: "Denmark (DK)"
        },
        {
            CountryCode: "DM",
            CountryName: "Dominica (DM)"
        },
        {
            CountryCode: "EC",
            CountryName: "Ecuador (EC)"
        },
        {
            CountryCode: "EG",
            CountryName: "Egypt (EG)"
        },
        {
            CountryCode: "ET",
            CountryName: "Eithiopia (ET)"
        },
        {
            CountryCode: "SV",
            CountryName: "El Salvador (SV)"
        },
        {
            CountryCode: "EE",
            CountryName: "Estonia (EE)"
        },
        {
            CountryCode: "FI",
            CountryName: "Finland (FI)"
        },
        {
            CountryCode: "FR",
            CountryName: "France (FR)"
        },
        {
            CountryCode: "DE",
            CountryName: "Germany (DE)"
        },
        {
            CountryCode: "GH",
            CountryName: "Ghana (GH)"
        },
        {
            CountryCode: "GR",
            CountryName: "Greece (GR)"
        },
        {
            CountryCode: "GL",
            CountryName: "Greenland (GL)"
        },
        {
            CountryCode: "GT",
            CountryName: "Guatemala (GT)"
        },
        {
            CountryCode: "GN",
            CountryName: "Guinea (GN)"
        },
        {
            CountryCode: "HT",
            CountryName: "Haiti (HT)"
        },
        {
            CountryCode: "HU",
            CountryName: "Hungary (HU)"
        },
        {
            CountryCode: "IS",
            CountryName: "Iceland (IS)"
        },
        {
            CountryCode: "IN",
            CountryName: "India (IN)"
        },
        {
            CountryCode: "ID",
            CountryName: "Indonesia (ID)"
        },
        {
            CountryCode: "IR",
            CountryName: "Iran (IR)"
        },
        {
            CountryCode: "IQ",
            CountryName: "Iraq (IQ)"
        },
        {
            CountryCode: "IE",
            CountryName: "Ireland (IE)"
        },
        {
            CountryCode: "IL",
            CountryName: "Israel (IL)"
        },
        {
            CountryCode: "IT",
            CountryName: "Italy (IT)"
        },
        {
            CountryCode: "JM",
            CountryName: "Jamaica (JM)"
        },
        {
            CountryCode: "JP",
            CountryName: "Japan (JP)"
        },
        {
            CountryCode: "KE",
            CountryName: "Kenya (KE)"
        },
        {
            CountryCode: "KP",
            CountryName: "Korea (Democratic People'S Republic Of) (KP)"
        },
        {
            CountryCode: "KW",
            CountryName: "Kuwait (KW)"
        },
        {
            CountryCode: "LB",
            CountryName: "Lebanon (LB)"
        },
        {
            CountryCode: "LR",
            CountryName: "Liberia (LR)"
        },
        {
            CountryCode: "LT",
            CountryName: "Lithuania (LT)"
        },
        {
            CountryCode: "LU",
            CountryName: "Luxembourg (LU)"
        },
        {
            CountryCode: "MY",
            CountryName: "Malaysia (MY)"
        },
        {
            CountryCode: "MV",
            CountryName: "Maldives (MV)"
        },
        {
            CountryCode: "MR",
            CountryName: "Mauritian (MR)"
        },
        {
            CountryCode: "MX",
            CountryName: "Mexico (MX)"
        },
        {
            CountryCode: "MN",
            CountryName: "Mongolia (MN)"
        },
        {
            CountryCode: "MA",
            CountryName: "Morocco (MA)"
        },
        {
            CountryCode: "MM",
            CountryName: "Myanmar (MM)"
        },
        {
            CountryCode: "NP",
            CountryName: "Nepal (NP)"
        },
        {
            CountryCode: "NL",
            CountryName: "Netherlands (NL)"
        },
        {
            CountryCode: "NZ",
            CountryName: "New Zealand (NZ)"
        },
        {
            CountryCode: "NG",
            CountryName: "Nigeria (NG)"
        },
        {
            CountryCode: "NO",
            CountryName: "Norway (NO)"
        },
        {
            CountryCode: "PK",
            CountryName: "Pakistan (PK)"
        },
        {
            CountryCode: "PS",
            CountryName: "Palestine (PS)"
        },
        {
            CountryCode: "PA",
            CountryName: "Panama (PA)"
        },
        {
            CountryCode: "PY",
            CountryName: "Paraguay (PY)"
        },
        {
            CountryCode: "PE",
            CountryName: "Peru (PE)"
        },
        {
            CountryCode: "PL",
            CountryName: "Poland (PL)"
        },
        {
            CountryCode: "PT",
            CountryName: "Portugal (PT)"
        },
        {
            CountryCode: "QA",
            CountryName: "Qatar (QA)"
        },
        {
            CountryCode: "SM",
            CountryName: "San Marino (SM)"
        },
        {
            CountryCode: "SA",
            CountryName: "Saudi Arabia (SA)"
        },
        {
            CountryCode: "SG",
            CountryName: "Singapore (SG)"
        },
        {
            CountryCode: "ES",
            CountryName: "Spain (ES)"
        },
        {
            CountryCode: "LK",
            CountryName: "Sri Lanka (LK)"
        },
        {
            CountryCode: "SE",
            CountryName: "Sweden (SE)"
        },
        {
            CountryCode: "CH",
            CountryName: "Switzerland (CH)"
        },
        {
            CountryCode: "TZ",
            CountryName: "Tanzania (TZ)"
        },
        {
            CountryCode: "TH",
            CountryName: "Thailand (TH)"
        },
        {
            CountryCode: "TT",
            CountryName: "Trinidad And Tobago  (TT)"
        },
        {
            CountryCode: "TN",
            CountryName: "Tunisia (TN)"
        },
        {
            CountryCode: "TR",
            CountryName: "Turkey (TR)"
        },
        {
            CountryCode: "UG",
            CountryName: "Uganda (UG)"
        },
        {
            CountryCode: "UA",
            CountryName: "Ukraine (UA)"
        },
        {
            CountryCode: "AE",
            CountryName: "United Arab Emirates (AE)"
        },
        {
            CountryCode: "GB",
            CountryName: "United Kingdom (GB)"
        },
        {
            CountryCode: "UY",
            CountryName: "Uruguay (UY)"
        },
        {
            CountryCode: "UZ",
            CountryName: "Uzbekistan (UZ)"
        },
        {
            CountryCode: "VE",
            CountryName: "Venezuela (VE)"
        },
        {
            CountryCode: "YE",
            CountryName: "Yemen (YE)"
        },
        {
            CountryCode: "ZM",
            CountryName: "Zambia (ZM)"
        },
        {
            CountryCode: "ZW",
            CountryName: "Zimbabwe (ZW)"
        }
    ];

    // Get Supported Country
    public static getSupportedCountry() {
        return this.GetCountryList;
    }

    // Get Supported State
    public static getSupportedState() {
        return this.GetStateList;
    }
}
