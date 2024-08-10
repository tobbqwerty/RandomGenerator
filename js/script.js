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
const url = window.location.href;

addPlayer();

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

  if (url.includes("lol")) {
    maxPlayers = 5;
  } else if (url.includes("apex")) {
    maxPlayers = 3;
  }

  if (playerCount < maxPlayers) {
    playerCount++;

    // Create a new list item element
    const newPlayerLi = document.createElement("li");
    newPlayerLi.className = "player-item";

    // Create the new icon element
    const newIcon = document.createElement("i");
    newIcon.className = "bx bxs-user";

    // Create the new input element
    const newInput = document.createElement("input");
    newInput.type = "text";
    newInput.name = `player${playerCount}`;
    newInput.placeholder = `Player ${playerCount}`;
    newInput.required = true;

    // Append the icon, input element, and lock button to the list item
    newPlayerLi.appendChild(newIcon);
    newPlayerLi.appendChild(newInput);

    // Add the new list item to the player list
    playerList.appendChild(newPlayerLi);
  }
}

function removePlayer() {
  if (playerCount > 1) {
    playerList.removeChild(playerList.lastChild); // Remove the last added player input
    playerCount--;
  }
}

function assignChampionsToPlayers(championList) {
  const playerItems = document.querySelectorAll(".player-item");

  const champions = generateRandomChampions(championList, playerItems.length);

  playerItems.forEach((playerItem, index) => {
    const input = playerItem.querySelector("input");

    // Skip locked inputs
    if (input.disabled) return;

    // Check if the champion display span already exists
    let championDisplay = playerItem.querySelector(".champion-display");
    if (!championDisplay) {
      // Create the champion display span if it doesn't exist
      championDisplay = document.createElement("span");
      championDisplay.className = "champion-display";
      playerItem.appendChild(championDisplay);
    }

    // Update the text content of the champion display
    championDisplay.textContent = ` is playing ${champions[index]}`;
  });
}


document.getElementById("generate-button").addEventListener("click", () => {
  if (url.includes("apex")) {
    assignChampionsToPlayers(apexChampions);
  } else if (url.includes("lol")) {
    assignChampionsToPlayers(lolChampions);
  }
});


let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("bx-x");
};
