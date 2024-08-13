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
  "Conduit",
  "Alter",
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
  "Zyra",
];
let playerCount = 0;
let maxPlayers;
const playerList = document.getElementById("playerList");
const currentUrl = window.location.href;


if (currentUrl.includes("apex")) {
  for (let i = 0; i < 3; i++) {
    addPlayer();
  }
} else if (currentUrl.includes("lol")) {
  for (let i = 0; i < 5; i++) {
    addPlayer();
  } 
}


document.getElementById("addPlayer").addEventListener("click", () => {
  addPlayer();
});

document.querySelector(".remove-player").addEventListener("click", () => {
  removePlayer();
});

function generateRandomChampions(championList, count) {
  const selectedChampions = new Set();

  while (selectedChampions.size < count) {
    const randomIndex = Math.floor(Math.random() * championList.length);
    selectedChampions.add(championList[randomIndex]);
  }
  return Array.from(selectedChampions);
}

function addPlayer() {
  if (currentUrl.includes("lol")) {
    maxPlayers = 5;
  } else if (currentUrl.includes("apex")) {
    maxPlayers = 3;
  }

  if (playerCount < maxPlayers) {
    playerCount++;

    const newPlayerLi = document.createElement("li");
    newPlayerLi.className = "player-item";

   // const newIcon = document.createElement("i");
    //newIcon.className = "bx bxs-user";

    const newInput = document.createElement("input");
    newInput.type = "text";
    newInput.name = `player${playerCount}`;
    newInput.placeholder = `Player ${playerCount}`;

   // newPlayerLi.appendChild(newIcon);
    newPlayerLi.appendChild(newInput);
    playerList.appendChild(newPlayerLi);
  }
}

function removePlayer() {
  if (playerCount > 1) {
    playerList.removeChild(playerList.lastChild);
    playerCount--;
  }
}

function displayImage(champion, playerItem) {
  const imagesPath = '/images';
  const subFolderApex = '/apex';
  const subFolderLol = '/lol';

  const imageFileName = `${champion.toLowerCase()}.png`;
  
  const imageApexPath = `${imagesPath}/${subFolderApex}/${imageFileName}`;
  const imageLolPath = `${imagesPath}/${subFolderLol}/${imageFileName}`;

  let championImage = playerItem.querySelector(".champion-image");
  if (!championImage) {

    championImage = document.createElement("img");
    championImage.className = "champion-image";
    playerItem.appendChild(championImage);
  }
  if (currentUrl.includes("apex")) {
    championImage.src = imageApexPath;
  } else if (currentUrl.includes("lol")) {
    championImage.src = imageLolPath;
  }
  championImage.alt = `${champion} image`;

}

function assignChampionsToPlayers(championList) {
  const playerItems = document.querySelectorAll(".player-item");

  const champions = generateRandomChampions(championList, playerItems.length);

  playerItems.forEach((playerItem, index) => {
    let container = playerItem.querySelector(".display-container");
    
    if (!container) {
      container = document.createElement("div");
      container.className = "display-container";
      playerItem.appendChild(container);

      let championDisplay = document.createElement("div");
      championDisplay.className = "champion-display";
      container.appendChild(championDisplay);

      let imageElement = document.createElement("img");
      imageElement.className = "champion-image";
      container.appendChild(imageElement);
    }

    let championDisplay = container.querySelector(".champion-display");
    championDisplay.textContent = `${champions[index]}`;
    displayImage(champions[index], container);
  });
}

document.getElementById("generate-button").addEventListener("click", () => {
  if (currentUrl.includes("apex")) {
    assignChampionsToPlayers(apexChampions);
  } else if (currentUrl.includes("lol")) {
    assignChampionsToPlayers(lolChampions);
  }
});


let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("bx-x");
};
