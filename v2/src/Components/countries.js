const countries = [
  {
    value: "AFG",
    label: "Afghanistan"
  },
  {
    value: "ALB",
    label: "Albania"
  },
  {
    value: "DZA",
    label: "Algeria"
  },
  {
    value: "ASM",
    label: "America Samoa"
  },
  {
    value: "AND",
    label: "Andorra"
  },
  {
    value: "AGO",
    label: "Angola"
  },
  {
    value: "AIA",
    label: "Anguilla"
  },
  {
    value: "ATA",
    label: "Antarctica"
  },
  {
    value: "ATG",
    label: "Antigua and Barbuda"
  },
  {
    value: "ARG",
    label: "Argentina"
  },
  {
    value: "ARM",
    label: "Armenia"
  },
  {
    value: "ABW",
    label: "Aruba"
  },
  {
    value: "AUS",
    label: "Australia"
  },
  {
    value: "AUT",
    label: "Austria"
  },
  {
    value: "AZE",
    label: "Azerbaijan"
  },
  {
    value: "BHS",
    label: "Bahamas"
  },
  {
    value: "BHR",
    label: "Bahrain"
  },
  {
    value: "BGD",
    label: "Bangladesh"
  },
  {
    value: "BRB",
    label: "Barbados"
  },
  {
    value: "BLR",
    label: "Belarus"
  },
  {
    value: "BEL",
    label: "Belgium"
  },
  {
    value: "BEN",
    label: "Benin"
  },
  {
    value: "BMU",
    label: "Bermuda"
  },
  {
    value: "BTN",
    label: "Bhutan"
  },
  {
    value: "BOL",
    label: "Bolivia"
  },
  {
    value: "BES",
    label: "Bonaire"
  },
  {
    value: "BIH",
    label: "Bosnia and Herzegovina"
  },
  {
    value: "BWA",
    label: "Botswana"
  },
  {
    value: "BVT",
    label: "Bouvet Island"
  },
  {
    value: "BRA",
    label: "Brazil"
  },
  {
    value: "IOT",
    label: "British Indian Ocean Territory"
  },
  {
    value: "BRN",
    label: "Brunei"
  },
  {
    value: "BGR",
    label: "Afghanistan"
  },
  {
    value: "BFA",
    label: "Burkina Faso"
  },
  {
    value: "BDI",
    label: "Burundi"
  },
  {
    value: "CPV",
    label: "Cabo Verde"
  },
  {
    value: "KHM",
    label: "Cambodia"
  },
  {
    value: "CAN",
    label: "Canada"
  },
  {
    value: "CYM",
    label: "Cayman Islands"
  },
  {
    value: "CAF",
    label: "Central African Republic"
  },
  {
    value: "TCD",
    label: "Chad"
  },
  {
    value: "CHL",
    label: "Chile"
  },
  {
    value: "CHN",
    label: "China"
  },
  {
    value: "CXR",
    label: "Christmas Island"
  },
  {
    value: "CCK",
    label: "Cocos (Keeling) Islands"
  },
  {
    value: "COL",
    label: "Colombia"
  },
  {
    value: "COM",
    label: "Comoros"
  },
  {
    value: "COD",
    label: "Congo"
  },
  {
    value: "COK",
    label: "Cook Islands"
  },
  {
    value: "COM",
    label: "Comoros"
  },
  {
    value: "CRI",
    label: "Costa Rica"
  },
  {
    value: "HRV",
    label: "Croatia"
  },
  {
    value: "CUB",
    label: "Cuba"
  },
  {
    value: "CUW",
    label: "Curaçao"
  },
  {
    value: "CYP",
    label: "Cyprus"
  },
  {
    value: "CZE",
    label: "Czechia"
  },
  {
    value: "CIV",
    label: "Côte d'Ivoire"
  },
  {
    value: "COD",
    label: "Democratic Republic of the Congo"
  },
  {
    value: "DNK",
    label: "Denmark"
  },
  {
    value: "DJI",
    label: "Djibouti"
  },
  {
    value: "DMA",
    label: "Dominica"
  },
  {
    value: "DOM",
    label: "Dominican Republic"
  },
  {
    value: "ECU",
    label: "Ecuador"
  },
  {
    value: "EGY",
    label: "Egypt"
  },
  {
    value: "SLV",
    label: "El Salvador"
  },
  {
    value: "GNQ",
    label: "Equatorial Guinea"
  },
  {
    value: "ERI",
    label: "Eritrea"
  },
  {
    value: "EST",
    label: "Estonia"
  },
  {
    value: "SWZ",
    label: "Eswatini"
  },
  {
    value: "ETH",
    label: "Ethiopia"
  },
  {
    value: "FLK",
    label: "Falkland Islands"
  },
  {
    value: "FRO",
    label: "Faroe Islands"
  },
  {
    value: "FJI",
    label: "Fiji"
  },
  {
    value: "FIN",
    label: "Finland"
  },
  {
    value: "FRA",
    label: "France"
  },
  {
    value: "GUI",
    label: "French Guiana"
  },
  {
    value: "PYF",
    label: "French Polynesia"
  },
  {
    value: "ATF",
    label: "French Southern Territories"
  },
  {
    value: "GAB",
    label: "Gabon"
  },
  {
    value: "GMB",
    label: "Gambia"
  },
  {
    value: "GEO",
    label: "Georgia"
  },
  {
    value: "DEU",
    label: "Germany"
  },
  {
    value: "GHA",
    label: "Ghana"
  },
  {
    value: "GIB",
    label: "Gibraltar"
  },
  {
    value: "GRC",
    label: "Greece"
  },
  {
    value: "GRL",
    label: "Greenland"
  },
  {
    value: "GRD",
    label: "Grenada"
  },
  {
    value: "GLP",
    label: "Guadeloupe"
  },
  {
    value: "GUM",
    label: "Guam"
  },
  {
    value: "GTM",
    label: "Guatemala"
  },
  {
    value: "GGY",
    label: "Guernsey"
  },
  {
    value: "GIN",
    label: "Guinea"
  },
  {
    value: "GIB",
    label: "Guinea-Bissau"
  },
  {
    value: "GUY",
    label: "Guyana"
  },
  {
    value: "HTI",
    label: "Haiti"
  },
  {
    value: "HMD",
    label: "Heard Island and McDonald Islands"
  },
  {
    value: "VAT",
    label: "Holy See"
  },
  {
    value: "HND",
    label: "Honduras"
  },
  {
    value: "HKG",
    label: "Hong Kong"
  },
  {
    value: "HUN",
    label: "Hungary"
  },
  {
    value: "ISL",
    label: "Iceland"
  },
  {
    value: "IND",
    label: "India"
  },
  {
    value: "IDN",
    label: "Indonesia"
  },
  {
    value: "IRN",
    label: "Iran"
  },
  {
    value: "IRQ",
    label: "Iraq"
  },
  {
    value: "IRL",
    label: "Ireland"
  },
  {
    value: "IMN",
    label: "Isle of Man"
  },
  {
    value: "ISR",
    label: "Israel"
  },
  {
    value: "ITA",
    label: "Italy"
  },
  {
    value: "JAM",
    label: "Jamaica"
  },
  {
    value: "JPN",
    label: "Japan"
  },
  {
    value: "JEY",
    label: "Jersey"
  },
  {
    value: "JOR",
    label: "Jordan"
  },
  {
    value: "KAZ",
    label: "Kazakhstan"
  },
  {
    value: "KEN",
    label: "Kenya"
  },
  {
    value: "KIR",
    label: "Kiribati"
  },
  {
    value: "KUW",
    label: "Kuwait"
  },
  {
    value: "KGZ",
    label: "Kyrgyzstan"
  },
  {
    value: "LAO",
    label: "Laos"
  },
  {
    value: "LVA",
    label: "Latvia"
  },
  {
    value: "LBN",
    label: "Lebanon"
  },
  {
    value: "LSO",
    label: "Lesotho"
  },
  {
    value: "LBR",
    label: "Liberia"
  },
  {
    value: "LBY",
    label: "Libya"
  },
  {
    value: "LIE",
    label: "Liechtenstein"
  },
  {
    value: "LTU",
    label: "Lithuania"
  },
  {
    value: "LUX",
    label: "Luxembourg"
  },
  {
    value: "MAC",
    label: "Macao"
  },
  {
    value: "MDG",
    label: "Madagascar"
  },
  {
    value: "MWI",
    label: "Malawi"
  },
  {
    value: "MYS",
    label: "Malaysia"
  },
  {
    value: "MDV",
    label: "Maldives"
  },
  {
    value: "MLI",
    label: "Mali"
  },
  {
    value: "MLT",
    label: "Malta"
  },
  {
    value: "MHL",
    label: "Marshall Islands"
  },
  {
    value: "MTQ",
    label: "Martinique"
  },
  {
    value: "MRT",
    label: "Mauritania"
  },
  {
    value: "MUS",
    label: "Mauritius"
  },
  {
    value: "MYT",
    label: "Mayotte"
  },
  {
    value: "MEX",
    label: "Mexico"
  },
  {
    value: "FSM",
    label: "Micronesia"
  },
  {
    value: "MDA",
    label: "Moldova"
  },
  {
    value: "MCO",
    label: "Monaco"
  },
  {
    value: "MNG",
    label: "Mongolia"
  },
  {
    value: "MNE",
    label: "Montenegro"
  },
  {
    value: "MSR",
    label: "Montserrat"
  },
  {
    value: "MAR",
    label: "Morocco"
  },
  {
    value: "MOZ",
    label: "Mozambique"
  },
  {
    value: "MMR",
    label: "Myanmar"
  },
  {
    value: "NAM",
    label: "Namibia"
  },
  {
    value: "NRU",
    label: "Nauru"
  },
  {
    value: "NPL",
    label: "Nepal"
  },
  {
    value: "NLD",
    label: "Netherlands"
  },
  {
    value: "NCL",
    label: "New Caledonia"
  },
  {
    value: "NIC",
    label: "Nicaragua"
  },
  {
    value: "NER",
    label: "Niger"
  },
  {
    value: "NGA",
    label: "Nigeria"
  },
  {
    value: "NIU",
    label: "Niue"
  },
  {
    value: "NFK",
    label: "Norfolk Islands"
  },
  {
    value: "MNP",
    label: "Northern Mariana Islands"
  },
  {
    value: "PRK",
    label: "North Korea"
  },
  {
    value: "NOR",
    label: "Norway"
  },
  {
    value: "OMN",
    label: "Oman"
  },
  {
    value: "PAK",
    label: "Pakistan"
  },
  {
    value: "PLW",
    label: "Palau"
  },
  {
    value: "PSE",
    label: "Palestine"
  },
  {
    value: "PAN",
    label: "Panama"
  },
  {
    value: "PNG",
    label: "Papua New Guinea"
  },
  {
    value: "PRY",
    label: "Paraguay"
  },
  {
    value: "PER",
    label: "Peru"
  },
  {
    value: "PHL",
    label: "Philippines"
  },
  {
    value: "PCN",
    label: "Pitcairn"
  },
  {
    value: "POL",
    label: "Poland"
  },
  {
    value: "PRT",
    label: "Portugal"
  },
  {
    value: "PRI",
    label: "Puerto Rico"
  },
  {
    value: "QAT",
    label: "Qatar"
  },
  {
    value: "MKD",
    label: "Republic of North Macedonia"
  },
  {
    value: "ROU",
    label: "Romania"
  },
  {
    value: "RUS",
    label: "Russia"
  },
  {
    value: "RWA",
    label: "Rwanda"
  },
  {
    value: "REU",
    label: "Réunion"
  },
  {
    value: "BLM",
    label: "Saint Barthélemy"
  },
  {
    value: "SHN",
    label: "Saint Helena, Ascension and Tristan da Cunha"
  },
  {
    value: "KNA",
    label: "Saint Kitts and Nevis"
  },
  {
    value: "LCA",
    label: "Saint Lucia"
  },
  {
    value: "MAF",
    label: "Saint Martin"
  },
  {
    value: "SPM",
    label: "Saint Pierre and Miquelon"
  },
  {
    value: "VCT",
    label: "Saint Vincent and the Grenadines"
  },
  {
    value: "WSM",
    label: "Samoa"
  },
  {
    value: "SMR",
    label: "San Marino"
  },
  {
    value: "STP",
    label: "Sao Tome and Principe"
  },
  {
    value: "SAU",
    label: "Saudi Arabia"
  },
  {
    value: "SEN",
    label: "Senegal"
  },
  {
    value: "SRB",
    label: "Serbia"
  },
  {
    value: "SYC",
    label: "Seychelles"
  },
  {
    value: "SLE",
    label: "Sierra Leone"
  },
  {
    value: "SGP",
    label: "Singapore"
  },
  {
    value: "SXM",
    label: "Sint Maarten"
  },
  {
    value: "SVK",
    label: "Slovakia"
  },
  {
    value: "SVN",
    label: "Slovenia"
  },
  {
    value: "SLB",
    label: "Solomon Islands"
  },
  {
    value: "SOM",
    label: "Somalia"
  },
  {
    value: "ZAF",
    label: "South Africa"
  },
  {
    value: "SGS",
    label: "South Georgia and the Sandwich Islands"
  },
  {
    value: "KOR",
    label: "South Korea"
  },
  {
    value: "SSD",
    label: "South Sudan"
  },
  {
    value: "ESP",
    label: "Spain"
  },
  {
    value: "LKA",
    label: "Sri Lanka"
  },
  {
    value: "SDN",
    label: "Sudan"
  },
  {
    value: "SUR",
    label: "Suriname"
  },
  {
    value: "SJM",
    label: "Svalbard and Jan Mayen"
  },
  {
    value: "SWE",
    label: "Sweden"
  },
  {
    value: "CHE",
    label: "Switzerland"
  },
  {
    value: "SYR",
    label: "Syria"
  },
  {
    value: "TWN",
    label: "Taiwan"
  },
  {
    value: "TJK",
    label: "Tajikistan"
  },
  {
    value: "TZA",
    label: "Tanzania"
  },
  {
    value: "THA",
    label: "Thailand"
  },
  {
    value: "TLS",
    label: "Timor-Leste"
  },
  {
    value: "TGO",
    label: "Togo"
  },
  {
    value: "TKL",
    label: "Tokelau"
  },
  {
    value: "TON",
    label: "Tonga"
  },
  {
    value: "TTO",
    label: "Trinidad and Tobago"
  },
  {
    value: "TUN",
    label: "Tunisia"
  },
  {
    value: "TUR",
    label: "Turkey"
  },
  {
    value: "TKM",
    label: "Turkmenistan"
  },
  {
    value: "TCA",
    label: "Turks and Caicos Islands"
  },
  {
    value: "TUV",
    label: "Tuvalu"
  },
  {
    value: "UGA",
    label: "Uganda"
  },
  {
    value: "UKR",
    label: "Ukraine"
  },
  {
    value: "ARE",
    label: "United Arab Emirates"
  },
  {
    value: "GBR",
    label: "United Kingdom"
  },
  {
    value: "SOM",
    label: "Somalia"
  },
  {
    value: "UMI",
    label: "United State Minor Outlying Islands"
  },
  {
    value: "USA",
    label: "United States of America"
  },
  {
    value: "URY",
    label: "Uruguay"
  },
  {
    value: "UZB",
    label: "Uzbekistan"
  },
  {
    value: "VUT",
    label: "Vanuatu"
  },
  {
    value: "VEN",
    label: "Venezuela"
  },
  {
    value: "VNM",
    label: "Vietnam"
  },
  {
    value: "VGB",
    label: "Virgin Islands (UK)"
  },
  {
    value: "VIR",
    label: "Virgin Islands (USA)"
  },
  {
    value: "WLF",
    label: "Wallis and Futuna"
  },
  {
    value: "ESH",
    label: "Western Sahara"
  },
  {
    value: "YEM",
    label: "Yemen"
  },
  {
    value: "ZMB",
    label: "Zambia"
  },
  {
    value: "ZWE",
    label: "Zimbabwe"
  },
  {
    value: "ALA",
    label: "Åland Islands"
  }
];

export default countries;
