// Conjutos

const frutas = new Set();
frutas.add('manzana');
frutas.add('pera');
frutas.add('manzana');
frutas.add('pera');
frutas.add('melón');
frutas.add('fresa');
frutas.add('melón');

console.clear(),
console.log(frutas)
console.table(frutas);

const frutasComoArreglos = Array.from(frutas); // Cogemos las cosas del SET que estan en la variable frutas y la pasamos a Array
console.table(frutasComoArreglos);