const players = [
  {
    name: "L. Messi",
    imageNum: "00",
  },
  {
    name: "C. Ronaldo",
    imageNum: "01",
  },
  {
    name: "R. Lewandowski",
    imageNum: "02",
  },

  {
    name: "K. Mbappe",
    imageNum: "03",
  },
  {
    name: "Neymar Jr",
    imageNum: "04",
  },
  {
    name: "K. De Bruyne",
    imageNum: "05",
  },
  {
    name: "J. Oblak",
    imageNum: "06",
  },
  {
    name: "R. Lukaku",
    imageNum: "07",
  },
  {
    name: "V. van Dijk",
    imageNum: "08",
  },
  {
    name: "M. Neuer",
    imageNum: "09",
  },
  {
    name: "M. Salah",
    imageNum: "10",
  },
  {
    name: "N. Kanté",
    imageNum: "11",
  },
  {
    name: "Sergio Ramos",
    imageNum: "12",
  },

  {
    name: "T. Courtois",
    imageNum: "13",
  },
  {
    name: "Alisson",
    imageNum: "14",
  },
  {
    name: "E. Haaland",
    imageNum: "15",
  },
  {
    name: "L. Suárez",
    imageNum: "16",
  },
  {
    name: "S. Mané",
    imageNum: "17",
  },
  {
    name: "Bruno Fernandes",
    imageNum: "18",
  },
  {
    name: "K. Benzema",
    imageNum: "19",
  },
  {
    name: "Marquinhos",
    imageNum: "20",
  },
  {
    name: "Ederson",
    imageNum: "21",
  },
  {
    name: "M. Ter Stegen",
    imageNum: "22",
  },

  {
    name: "S. Agüero",
    imageNum: "23",
  },
  {
    name: "T. Müller",
    imageNum: "24",
  },
  {
    name: "J. Giménez",
    imageNum: "25",
  },
  {
    name: "D. Alaba",
    imageNum: "26",
  },
  {
    name: "M. Škriniar",
    imageNum: "27",
  },
  {
    name: "N. Süle",
    imageNum: "28",
  },
  {
    name: "J. Kimmich",
    imageNum: "29",
  },
  {
    name: "G. Donnarumma",
    imageNum: "30",
  },
  {
    name: "P. Aubameyang",
    imageNum: "31",
  },
  {
    name: "W. Ben Yedder",
    imageNum: "32",
  },

  {
    name: "Z. Ibrahimović",
    imageNum: "33",
  },
  {
    name: "L. Muriel",
    imageNum: "34",
  },
  {
    name: "Gerard Moreno",
    imageNum: "35",
  },
  {
    name: "E. Cavani",
    imageNum: "36",
  },
  {
    name: "Lautaro Martínez",
    imageNum: "37",
  },
  {
    name: "M. Depay",
    imageNum: "38",
  },
  {
    name: "J. Iličić",
    imageNum: "39",
  },
  {
    name: "L. Sané",
    imageNum: "40",
  },
  {
    name: "Á. Di María",
    imageNum: "41",
  },
  {
    name: "S. Gnabry",
    imageNum: "42",
  },

  {
    name: "J. Sancho",
    imageNum: "43",
  },
  {
    name: "P. Foden",
    imageNum: "44",
  },
  {
    name: "M. Rashford",
    imageNum: "45",
  },
  {
    name: "E. Hazard",
    imageNum: "46",
  },
  {
    name: "R. Sterling",
    imageNum: "47",
  },
  {
    name: "J. Grealish",
    imageNum: "48",
  },
  {
    name: "David Silva",
    imageNum: "49",
  },
  {
    name: "K. Havertz",
    imageNum: "50",
  },
  {
    name: "A. Gómez",
    imageNum: "51",
  },
  {
    name: "M. Mount",
    imageNum: "52",
  },

  {
    name: "F. Chiesa",
    imageNum: "53",
  },
  {
    name: "Mikel Oyarzabal",
    imageNum: "54",
  },
  {
    name: "F. Valverde",
    imageNum: "55",
  },
  {
    name: "N. Barella",
    imageNum: "56",
  },
  {
    name: "R. De Paul",
    imageNum: "57",
  },
  {
    name: "M. Sabitzer",
    imageNum: "58",
  },
  {
    name: "Saúl",
    imageNum: "59",
  },
  {
    name: "W. Ndidi",
    imageNum: "60",
  },
  {
    name: "M. Brozović",
    imageNum: "61",
  },
  {
    name: "J. Henderson",
    imageNum: "62",
  },

  {
    name: "Jorginho",
    imageNum: "63",
  },
  {
    name: "Carvajal",
    imageNum: "64",
  },
  {
    name: "A. Robertson",
    imageNum: "65",
  },
  {
    name: "L. Hernandez",
    imageNum: "66",
  },
  {
    name: "Jordi Alba",
    imageNum: "67",
  },
  {
    name: "A. Davies",
    imageNum: "68",
  },
  {
    name: "Piqué",
    imageNum: "69",
  },
  {
    name: "A. Laporte",
    imageNum: "70",
  },
  {
    name: "Thiago Silva",
    imageNum: "71",
  },
  {
    name: "S. Savić",
    imageNum: "72",
  },

  {
    name: "H. Maguire",
    imageNum: "73",
  },
  {
    name: "P. Gulácsi",
    imageNum: "74",
  },
  {
    name: "H. Lloris",
    imageNum: "75",
  },
  {
    name: "David De Gea",
    imageNum: "76",
  },
  {
    name: "Y. Sommer",
    imageNum: "77",
  },
  {
    name: "D. Zapata",
    imageNum: "78",
  },
  {
    name: "R. Jiménez",
    imageNum: "79",
  },
  {
    name: "A. Lacazette",
    imageNum: "80",
  },
  {
    name: "J. Vardy",
    imageNum: "81",
  },
  {
    name: "Gabriel Jesus",
    imageNum: "82",
  },

  {
    name: "A. Belotti",
    imageNum: "83",
  },
  {
    name: "Iago Aspas",
    imageNum: "84",
  },
  {
    name: "J. Vardy",
    imageNum: "85",
  },
  {
    name: "Richarlison",
    imageNum: "86",
  },
  {
    name: "O. Dembélé",
    imageNum: "87",
  },
  {
    name: "D. Tadić",
    imageNum: "88",
  },
  {
    name: "Diogo Jota",
    imageNum: "89",
  },
  {
    name: "L. Ocampos",
    imageNum: "90",
  },
  {
    name: "P. Zieliński",
    imageNum: "91",
  },
  {
    name: "P. Coutinho",
    imageNum: "92",
  },

  {
    name: "C. Eriksen",
    imageNum: "93",
  },
  {
    name: "M. Ødegaard",
    imageNum: "94",
  },
  {
    name: "Isco",
    imageNum: "95",
  },
  {
    name: "N. Fekir",
    imageNum: "96",
  },
  {
    name: "F. Kostić",
    imageNum: "97",
  },
  {
    name: " Y. Carrasco",
    imageNum: "98",
  },
  {
    name: "I. Rakitić",
    imageNum: "99",
  },
  {
    name: "T. Kroos",
    imageNum: "100",
  },
];

export default players;
