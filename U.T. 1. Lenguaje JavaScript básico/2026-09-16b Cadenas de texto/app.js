'use strict';

console.clear();

var nombre = "Daniel";
var apellidos = 'Campos García';
var poblacion = `Lorca`;
var pais = 'España 🇪🇸'
var edad = 23

// Concatenar cadenas

var mensaje1 = 'Hola, soy ' + nombre + ' ' + apellidos + '. Vivo en ' + poblacion + '. Nací en ' + pais + ' . Tengo ' + edad + ' años'

console.log(mensaje1 + '\n');

// Interpolación de cadenas

var mensaje2 = `Hola, soy ${nombre} ${apellidos}. Vivo en ${poblacion}. Nací en ${pais} . Tengo ${edad-1} años.`

console.log(mensaje2 + "\n")

// Otra manera de interpolación

var mensaje3 = `Hola, soy ${nombre} ${apellidos}. 
Vivo en ${poblacion}. 
Nací en ${pais} . 
Tengo ${edad-1} años.
Soy ${edad < 18 ? 'menor' : 'mayor'} de edad`

console.log(mensaje3)