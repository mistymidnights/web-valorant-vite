import '../navbar/nav'
import '../footer/footer'
import './style.css';

const body = document.querySelector('body');
const URL_WEAPONS = "https://valorant-api.com/v1/weapons";
const principalContainer = document.querySelector('#app');
const gridTemplate = document.createElement('div');
gridTemplate.classList.add('grid-template')
principalContainer.appendChild(gridTemplate)


let mappedWeapons;

const weaponsList = [];

//1 init
const init = async () => {
  await getWeapons();
  mapWeapons(weaponsList);
};

//2 get
const getWeapons= async () => {
  const result = await fetch(URL_WEAPONS);
  const data = await result.json();
  //importante
  const weapons = data.data;
  console.log(weapons);
  mapWeapons(weapons);
};

//3 map
const mapWeapons = (weapons) => {
  mappedWeapons = weapons.map((weapon) => ({
    name: weapon.displayName,
    coordinates: weapon.coordinates,
    image: weapon.displayIcon,
  }));

  console.log(mappedWeapons);
  printMaps(mappedWeapons);
};

//4 print
const printMaps = (list) => {
  /* container.innerHTML = ''; */
  for (const weapon of list) {
    const mapElement = `
      <section id="${weapon.name}" class="demo">
        <h1>${weapon.name}</h1>
        <img class="image-container" src="${weapon.image}" alt="${weapon.name}" />
      </section>
        `;
        gridTemplate.innerHTML += mapElement
  }
};

init();
