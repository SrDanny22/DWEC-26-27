// AJAX - Asynchronous JavaScript And XML

// const response = fetch('https://pokeapi.co/api/v2/pokemon');

// FORMA ANTIGUA

// fetch devuelve una promkesa.
// Accedemos al resultadp de la promesa empleando el método then pasando un callback.
// Necesitamos un segundo then para procesar correctamente el json.

fetch('https://pokeapi.co/api/v2/pokemon?offset=20&limit=20')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));

fetch('https://pokeapi.co/api/v2/pokemon')
    .then(response => response.json())
    .then(data => console.log(data));

console.log('FIN');

// FORMA MODERNA - async/await

// Una función asincrona devuelve una promesa
async function retrievePokemons() {
   
    const response = await fetch('https://pokeapi.co/api/v2/pokemon');
    const data = await response.json();
    return data
}

const data = await retrievePokemons();

console.log(data);

console.log('FIN');