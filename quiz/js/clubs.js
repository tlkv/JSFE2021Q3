const clubs = [
  {
    name: "Bayern Munchen",
    imageNum: "00",
  },
  {
    name: "Manchester City",
    imageNum: "01",
  },
  {
    name: "Liverpool",
    imageNum: "02",
  },

  {
    name: "Chelsea",
    imageNum: "03",
  },
  {
    name: "Barcelona",
    imageNum: "04",
  },
  {
    name: "Real Madrid",
    imageNum: "05",
  },
  {
    name: "Paris Saint-Germain",
    imageNum: "06",
  },
  {
    name: "Juventus",
    imageNum: "07",
  },
  {
    name: "Manchester United",
    imageNum: "08",
  },
  {
    name: "Atletico",
    imageNum: "09",
  },
  {
    name: "Sevilla",
    imageNum: "10",
  },
  {
    name: "Tottenham Hotspur",
    imageNum: "11",
  },
  {
    name: "AS Roma",
    imageNum: "12",
  },

  {
    name: "Arsenal",
    imageNum: "13",
  },
  {
    name: "FC Porto",
    imageNum: "14",
  },
  {
    name: "Borussia Dortmund",
    imageNum: "15",
  },
  {
    name: "AFC Ajax",
    imageNum: "16",
  },
  {
    name: "RB Leipzig",
    imageNum: "17",
  },
  {
    name: "FC Shakhtar Donetsk",
    imageNum: "18",
  },
  {
    name: "Villarreal CF",
    imageNum: "19",
  },
  {
    name: "FC Salzburg",
    imageNum: "20",
  },
  {
    name: "Olympique Lyonnais",
    imageNum: "21",
  },
  {
    name: "SSC Napoli",
    imageNum: "22",
  },

  {
    name: "Atalanta BC",
    imageNum: "23",
  },
  {
    name: "Inter",
    imageNum: "24",
  },
  {
    name: "FC Basel 1893",
    imageNum: "25",
  },
  {
    name: "SL Benfica",
    imageNum: "26",
  },
  {
    name: "Lazio",
    imageNum: "27",
  },
  {
    name: "Sporting",
    imageNum: "28",
  },
  {
    name: "Bayer 04 Leverkusen",
    imageNum: "29",
  },
  {
    name: "SK Slavia Praha",
    imageNum: "30",
  },
  {
    name: "GNK Dinamo Zagreb",
    imageNum: "31",
  },
  {
    name: "Zenit",
    imageNum: "32",
  },

  {
    name: "Eintracht Frankfurt",
    imageNum: "33",
  },
  {
    name: "Valencia CF",
    imageNum: "34",
  },
  {
    name: "Club Brugge",
    imageNum: "35",
  },
  {
    name: "Olympiacos FC",
    imageNum: "36",
  },
  {
    name: "SC Braga",
    imageNum: "37",
  },
  {
    name: "AC Milan",
    imageNum: "38",
  },
  {
    name: "AC Milan",
    imageNum: "39",
  },
  {
    name: "Crvena zvezda",
    imageNum: "40",
  },
  {
    name: "BSC Young Boys",
    imageNum: "41",
  },
  {
    name: "Rangers FC",
    imageNum: "42",
  },

  {
    name: "F.C. Copenhagen",
    imageNum: "43",
  },
  {
    name: "Beşiktaş JK",
    imageNum: "44",
  },
  {
    name: "FC Lokomotiv Moskva",
    imageNum: "45",
  },
  {
    name: "PFC CSKA Moskva",
    imageNum: "46",
  },
  {
    name: "Olympique de Marseille",
    imageNum: "47",
  },
  {
    name: "Celtic FC",
    imageNum: "48",
  },
  {
    name: "FC Viktoria Plzeň",
    imageNum: "49",
  },
  {
    name: "LASK",
    imageNum: "50",
  },
  {
    name: "PSV Eindhoven",
    imageNum: "51",
  },
  {
    name: "FC Krasnodar",
    imageNum: "52",
  },

  {
    name: "Stade Rennais FC",
    imageNum: "53",
  },
  {
    name: "İstanbul Başakşehir",
    imageNum: "54",
  },
  {
    name: "KAA Gent",
    imageNum: "55",
  },
  {
    name: "Feyenoord",
    imageNum: "56",
  },
  {
    name: "Qarabağ FK",
    imageNum: "57",
  },
  {
    name: "Galatasaray AŞ",
    imageNum: "58",
  },
  {
    name: "TSG 1899 Hoffenheim",
    imageNum: "59",
  },
  {
    name: "VfL Wolfsburg",
    imageNum: "60",
  },
  {
    name: "Maccabi Tel-Aviv FC",
    imageNum: "61",
  },
  {
    name: "AZ Alkmaar",
    imageNum: "62",
  },

  {
    name: "FK Partizan",
    imageNum: "63",
  },
  {
    name: "Malmö FF",
    imageNum: "64",
  },
  {
    name: "Real Sociedad",
    imageNum: "65",
  },
  {
    name: "FC Sheriff Tiraspol",
    imageNum: "66",
  },
  {
    name: "LOSC Lille",
    imageNum: "67",
  },
  {
    name: "PFC Ludogorets",
    imageNum: "68",
  },
  {
    name: "Borussia Mönchengladbach",
    imageNum: "69",
  },
  {
    name: "FC Spartak Moskva",
    imageNum: "70",
  },
  {
    name: "FC Astana",
    imageNum: "71",
  },
  {
    name: "AEK Athens FC",
    imageNum: "72",
  },

  {
    name: "Molde FK",
    imageNum: "73",
  },
  {
    name: "West Ham United FC",
    imageNum: "74",
  },
  {
    name: "Leicester City FC",
    imageNum: "75",
  },
  {
    name: "Wolverhampton Wanderers FC",
    imageNum: "76",
  },
  {
    name: "Burnley FC",
    imageNum: "77",
  },
  {
    name: "Everton FC",
    imageNum: "78",
  },
  {
    name: "APOEL FC",
    imageNum: "79",
  },
  {
    name: "FCSB",
    imageNum: "80",
  },
  {
    name: "FC BATE Borisov",
    imageNum: "81",
  },
  {
    name: "CFR 1907 Cluj",
    imageNum: "82",
  },

  {
    name: "AS Monaco FC",
    imageNum: "83",
  },
  {
    name: "PAOK FC",
    imageNum: "84",
  },
  {
    name: "Zorya Luhansk",
    imageNum: "85",
  },
  {
    name: "KRC Genk",
    imageNum: "86",
  },
  {
    name: "FC Schalke 04",
    imageNum: "87",
  },
  {
    name: "Real Betis Balompié",
    imageNum: "88",
  },
  {
    name: "Granada CF",
    imageNum: "89",
  },
  {
    name: "Getafe CF",
    imageNum: "90",
  },
  {
    name: "RCD Espanyol",
    imageNum: "91",
  },
  {
    name: "Athletic Club",
    imageNum: "92",
  },

  {
    name: "FC Midtjylland",
    imageNum: "93",
  },
  {
    name: "R. Standard de Liège",
    imageNum: "94",
  },
  {
    name: "HNK Rijeka",
    imageNum: "95",
  },
  {
    name: "Rosenborg BK",
    imageNum: "96",
  },
  {
    name: "Hapoel Beer-Sheva FC",
    imageNum: "97",
  },
  {
    name: "SK Rapid Wien",
    imageNum: "98",
  },
  {
    name: "Apollon Limassol FC",
    imageNum: "99",
  },
  {
    name: "Torino",
    imageNum: "100",
  },
];

export default clubs;
