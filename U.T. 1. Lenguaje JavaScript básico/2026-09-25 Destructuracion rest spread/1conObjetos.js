// Desectructurar nos permite extraer a mas de una variable de un objeto complejo en una única línea

const person = {
    firstname: 'Daniel',
    lastname: 'Campos García',
    age: 23,
    eyes: 'brown',
    height: 170,
    weight: 60,
}

// const height = persona.height;
// const weight = persona.weight;

// Desestructuracion de objetos

// const { height, weight } = person;
// console.log(height, weight);

// // Para poner alias
// const { height: altura, weight: masa } = person;
// console.log(altura, masa);

// Operador rest ..., Permite guardar en una variable todas las propiedades que no hemos usado

// // const { firstname, eyes, ... rest } = person;

// // console.log(firstname, eyes, rest);

// Operador spread ... Permite descomponer un elemento en todas sus partes
// // const teacher = {... person, subject: ['dwec', 'diw'], departament: 'tic'};
// // console.log(teacher);

// function getFullname(person) {
//     return `${person.firstname} ${person.lastname}`;
// }

function getFullname({firstname, lastname}) {
    return `${firstname} ${lastname}`;
}

console.clear()

console.log(getFullname(person));

function conseguirMasaCorporal({height:altura, weight:masa, ...resto}) {
    return masa / Math.pow(altura/100, 2);
}