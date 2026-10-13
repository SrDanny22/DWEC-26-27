const endpoint = 'https://pokeapi.co/api/v2/pokemon';
const response = await fetch(endpoint);
const data = await response.json();

const pokemons = data.results;

const NOl = document.getElementById('EOlPokemons');

pokemons.forEach(pokemon => {
    const nLi = document.createElement('li');
    NOl.appendChild(nLi);
    // textcontent me ahorra emplear createTextNode

    const nA = document.createElement('a');
    nLi.appendChild(nA);

    nA.setAttribute('href', pokemon.url);

    nA.textContent = pokemon.name
});