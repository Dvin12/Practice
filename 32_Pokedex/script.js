const container = document.getElementById("container");
const count = 150;
const colours = {
  fire: "#fd7e14",
  grass: "#37b24d",
  electric: "#339af0",
  water: "#a5d8ff",
  ground: "#087f5b",
  rock: "#495057",
  fairy: "#e64980",
  poison: "#fcc419",
  bug: "#343a40",
  dragon: "#e67700",
  psychic: "#e5dbff",
  flying: "#f3f0ff",
  fighting: "#d9480f",
  normal: "#ced4da",
};

const mainTypes = Object.keys(colours);

const fetchPokemons = async () => {
  for (let i = 1; i <= count; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  createPokemonCard(data);
};

const createPokemonCard = (pokemon) => {
  const pokemonEl = document.createElement("div");
  pokemonEl.classList.add("pokemon");

  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  const id = pokemon.id.toString().padStart(3, "0");

  const pokeTypes = pokemon.types.map((type) => type.type.name);

  const type = mainTypes.find((type) => pokeTypes.indexOf(type) > -1);

  const colour = colours[type];

  pokemonEl.style.backgroundColor = colour;

  const pokemonHTML = `<div class="img__container">
  <img
    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"
    alt=""
  />
</div>
<div class="info">
  <span class="number">#${id}</span>
  <h3 class="name">${name}</h3>
  <small class="type">Type: <span>${type}</span></small>
</div>`;

  pokemonEl.innerHTML = pokemonHTML;
  container.appendChild(pokemonEl);
};

fetchPokemons();
