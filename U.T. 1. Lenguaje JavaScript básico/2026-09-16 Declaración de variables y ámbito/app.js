'use strict'; // Nos obliga a declarar las variables

// 4 Formas de declarar variables

// edad1 = 10; // Variable global                                              0%

var edad2 = 12; // Froma antigua de declarar una variable                   1%


const edad4 = 14; // Otra forma moderna de declarar una variable (ES6)      95% Programación Funcional

{
    let edad3 = 13; // Forma moderna de declarar una variable (ES6)             4%
    console.log(edad3);

    {
        let edad5 = 15;
        console.log(edad5);
        console.log(edad3);
    }
    // console.log(edad5); // Daría error por estar fuera del bloque
}

// console.log(edad3); // Si usamos unas llaves, y dentro esta creada una variable, solo se podra usar dentro de esas llaves

// Declarar una funcion de ámbito

// test_ambito // snakecase

// testAmbito(); // En JS si llamamos a la funcion cuando todavia no esta echa, hace lo del hoisting

function testAmbito() { // camelcase
    for (let i = 1; i<=3; i++) {
        console.log(i, edad)
    }
    // let edad = 10; // Si usamos let, daria error
    var edad = 10; // Pero si usamos var, no daría error, porque al usar var, la variable la asigna como si estuviera al inicio de la función (hoisting)

}
testAmbito();
