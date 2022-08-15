import './style.css';
import '../navbar/nav'
import '../footer/footer'

const URL_RANKS = "https://valorant-api.com/v1/competitivetiers";
const principalContainer = document.querySelector('#app');
const gridTemplate = document.createElement('div');
gridTemplate.classList.add('grid-template')
principalContainer.appendChild(gridTemplate)

let mappedRanks;

const ranksList = [];

//1 init
const init = async () => {
  await getRanks();
  mapRanks(ranksList);
};

//2 get
const getRanks = async () => {
  const result = await fetch(URL_RANKS);
  const data = await result.json();
  //importante
  const ranks = data.data[4].tiers;
  console.log(ranks);
  mapRanks(ranks);
};

//3 map
const mapRanks = (ranks) => {
  mappedRanks = ranks.map((rank) => ({
    name: rank.tierName,
    image: rank.largeIcon
  }));

  console.log(mappedRanks);
  printRanks(mappedRanks);
};

//4 print
const printRanks = (list) => {
  /* container.innerHTML = ''; */
  for (const rank of list) {
    const rankElement = `
    <figure class="rank-container" id="${rank.name}">
            <h1>${rank.name}</h1>
            <img class="image-container" src="${rank.image}" alt="${rank.name}" />
    </figure>
        `;
        gridTemplate.innerHTML += rankElement
  }
};

init();
