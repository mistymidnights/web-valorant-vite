import '../navbar/nav'
import '../footer/footer'

const body = document.querySelector('body');
const URL_MAPS = "https://valorant-api.com/v1/maps";
const principalContainer = document.querySelector('#app');
const gridTemplate = document.createElement('div');
gridTemplate.classList.add('grid-template')
principalContainer.appendChild(gridTemplate)
import './style.css';

let mappedMaps;

const mapsList = [];

//1 init
const init = async () => {
  await getMaps();
  mapMaps(mapsList);
};

//2 get
const getMaps= async () => {
  const result = await fetch(URL_MAPS);
  const data = await result.json();
  //importante
  const maps = data.data;
  console.log(maps);
  mapMaps(maps);
};

//3 map
const mapMaps = (maps) => {
  mappedMaps = maps.map((map) => ({
    name: map.displayName,
    coordinates: map.coordinates,
    image: map.splash,
    background: map.displayIcon
  }));

  console.log(mappedMaps);
  printMaps(mappedMaps);
};

//4 print
const printMaps = (list) => {
  /* container.innerHTML = ''; */
  for (const map of list) {
    const mapElement = `
    <figure class="map-container" id="${map.name}">
        <div class="text-container">
            <h1>${map.name}</h1>
            <h3>${map.coordinates}</h3>
        </div>
            <img class="image-container" src="${map.image}" alt="${map.name}" />
    </figure>
        `;
        gridTemplate.innerHTML += mapElement
  }
};

init();
