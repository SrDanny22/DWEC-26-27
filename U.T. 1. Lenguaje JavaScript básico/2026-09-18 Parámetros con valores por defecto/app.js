'use strict';

console.clear();

function mostrarMensaje(
    nombre = 'Daniel', 
    apellidos = 'Campos García', 
    poblacion = 'Lorca', 
    pais = 'España') {
        console.log(`Hola, soy ${nombre} ${apellidos}. Vivo en ${poblacion} y nací en ${pais}.`)
}

mostrarMensaje();
mostrarMensaje("Ruben", "Garcia Perez");
mostrarMensaje(undefined, "Chunchunmaru", undefined, "Canada"); // undefined por si queremos poner un parámetro en especfico

// Esto funciona en Python pero no en JavaScript
// mostrarMensaje(nombre = 'Gunter', pais= 'Alemania');