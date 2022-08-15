const URL_AGENTS = "https://valorant-api.com/v1/agents";
const principalContainer = document.querySelector('#app');
const gridTemplate = document.createElement('div');
gridTemplate.classList.add('grid-template')
principalContainer.appendChild(gridTemplate)
import './style.css';

let mappedAgents;

const agentsList = [];

//1 init
const init = async () => {
  await getAgents();
  mapAgents(agentsList);
};

//2 get
const getAgents = async () => {
  const result = await fetch(URL_AGENTS);
  const data = await result.json();
  //importante
  const agents = data.data;
  console.log(agents);
  mapAgents(agents);
};

//3 map
const mapAgents = (agents) => {
  mappedAgents = agents.map((agent) => ({
    id: agent.uuid,
    name: agent.displayName,
    description: agent.description,
    image: agent.displayIcon,
    abilities: agent.abilities.map((value)=>{
      return value.displayName
    })
  }));

  console.log(mappedAgents);
  printAgents(mappedAgents);
};

//4 print
const printAgents = (list) => {
  /* container.innerHTML = ''; */
  for (const agent of list) {
    const agentElement = `
    <div class="text-slider">
      <h2>Slide</h2>
    </div>
    <figure class="agent-container card" id="${agent.name}">
            <h1>${agent.name}</h1>
            <img class="image-container" src="${agent.image}" alt="${agent.name}" />
            <h3>${agent.description}</h3>
            <h4>${agent.abilities}</h4>
    </figure>
        `;
        gridTemplate.innerHTML += agentElement
  }
};

init();


//carrousel
let isDown = false;
let startX;
let scrollLeft;

gridTemplate.addEventListener('mousedown', e => {
  isDown = true;
  gridTemplate.classList.add('active');
  startX = e.pageX - gridTemplate.offsetLeft;
  scrollLeft = gridTemplate.scrollLeft;
});
gridTemplate.addEventListener('mouseleave', _ => {
  isDown = false;
  gridTemplate.classList.remove('active');
});
gridTemplate.addEventListener('mouseup', _ => {
  isDown = false;
  gridTemplate.classList.remove('active');
});
gridTemplate.addEventListener('mousemove', e => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - gridTemplate.offsetLeft;
  const SCROLL_SPEED = 2;
  const walk = (x - startX) * SCROLL_SPEED;
  gridTemplate.scrollLeft = scrollLeft - walk;
});

