const apexChampions = [
    "Bloodhound",
    "Gibraltar",
    "Lifeline",
    "Pathfinder",
    "Wraith",
    "Bangalore",
    "Caustic",
    "Mirage",
    "Octane",
    "Wattson",
    "Crypto",
    "Revenant",
    "Loba",
    "Rampart",
    "Horizon",
    "Fuse",
    "Valkyrie",
    "Seer",
    "Ash",
    "Mad Maggie",
    "Newcastle",
    "Vantage",
    "Catalyst",
    "Ballistic",
    "Conduit"
  ];

  const lolChampions = [
    "Aatrox",
    "Ahri",
    "Akali",
    "Akshan",
    "Alistar",
    "Amumu",
    "Anivia",
    "Annie",
    "Aphelios",
    "Ashe",
    "Aurelion Sol",
    "Azir",
    "Bard",
    "Bel'Veth",
    "Blitzcrank",
    "Brand",
    "Braum",
    "Caitlyn",
    "Camille",
    "Cassiopeia",
    "Cho'Gath",
    "Corki",
    "Darius",
    "Diana",
    "Dr. Mundo",
    "Draven",
    "Ekko",
    "Elise",
    "Evelynn",
    "Ezreal",
    "Fiddlesticks",
    "Fiora",
    "Fizz",
    "Galio",
    "Gangplank",
    "Garen",
    "Gnar",
    "Gragas",
    "Graves",
    "Gwen",
    "Hecarim",
    "Heimerdinger",
    "Illaoi",
    "Irelia",
    "Ivern",
    "Janna",
    "Jarvan IV",
    "Jax",
    "Jayce",
    "Jhin",
    "Jinx",
    "Kai'Sa",
    "Kalista",
    "Karma",
    "Karthus",
    "Kassadin",
    "Katarina",
    "Kayle",
    "Kayn",
    "Kennen",
    "Kha'Zix",
    "Kindred",
    "Kled",
    "Kog'Maw",
    "LeBlanc",
    "Lee Sin",
    "Leona",
    "Lillia",
    "Lissandra",
    "Lucian",
    "Lulu",
    "Lux",
    "Malphite",
    "Malzahar",
    "Maokai",
    "Master Yi",
    "Milio",
    "Miss Fortune",
    "Mordekaiser",
    "Morgana",
    "Nami",
    "Nasus",
    "Nautilus",
    "Neeko",
    "Nidalee",
    "Nilah",
    "Nocturne",
    "Nunu & Willump",
    "Olaf",
    "Orianna",
    "Ornn",
    "Pantheon",
    "Poppy",
    "Pyke",
    "Qiyana",
    "Quinn",
    "Rakan",
    "Rammus",
    "Rek'Sai",
    "Rell",
    "Renata Glasc",
    "Renekton",
    "Rengar",
    "Riven",
    "Rumble",
    "Ryze",
    "Samira",
    "Sejuani",
    "Senna",
    "Seraphine",
    "Sett",
    "Shaco",
    "Shen",
    "Shyvana",
    "Singed",
    "Sion",
    "Sivir",
    "Skarner",
    "Sona",
    "Soraka",
    "Swain",
    "Sylas",
    "Syndra",
    "Tahm Kench",
    "Taliyah",
    "Talon",
    "Taric",
    "Teemo",
    "Thresh",
    "Tristana",
    "Trundle",
    "Tryndamere",
    "Twisted Fate",
    "Twitch",
    "Udyr",
    "Urgot",
    "Varus",
    "Vayne",
    "Veigar",
    "Vel'Koz",
    "Vex",
    "Vi",
    "Viego",
    "Viktor",
    "Vladimir",
    "Volibear",
    "Warwick",
    "Wukong",
    "Xayah",
    "Xerath",
    "Xin Zhao",
    "Yasuo",
    "Yone",
    "Yorick",
    "Yuumi",
    "Zac",
    "Zed",
    "Zeri",
    "Ziggs",
    "Zilean",
    "Zoe",
    "Zyra"
  ];
  

  const numWords = 3;
  const generateButton = document.getElementById("generateButton");

  function generateRandomChampions(wordList, numWords) {
    if (numWords > wordList) {
        throw new Error("Requested number of words exceeds the number of available words in the list.")
    }

    const selectedWords = new Set();
    while (selectedWords.size < numWords) {
        const randomIndex = Math.floor(Math.random() * wordList.length);
        selectedWords.add(wordList[randomIndex]);
    }
    return Array.from(selectedWords);
  }

  // APEX
  function displayChampions() {
    const randomWords = generateRandomChampions(apexChampions, numWords);
    const championList = document.getElementById("generate__word");
    
    championList.innerHTML = '';

    randomWords.forEach(word => {
        const li = document.createElement('li');
        li.textContent = word;
        championList.appendChild(li);
    });
  }

  // LOL
  function displayLolChar() {
    const randomWords = generateRandomChampions(lolChampions, numWords);
    const championList = document.getElementById("generate__word");
    
    championList.innerHTML = '';

    randomWords.forEach(word => {
        const li = document.createElement('li');
        li.textContent = word;
        championList.appendChild(li);
    });
  }

  document.getElementById('generateButton').addEventListener("click", () => {
    const url = window.location.pathname;
    if (url.includes("apex.html")) {
      displayChampions(apexChampions);
    } else if (url.includes("lol.html")) {
      displayChampions(lolChampions);
    }
  });
  
  