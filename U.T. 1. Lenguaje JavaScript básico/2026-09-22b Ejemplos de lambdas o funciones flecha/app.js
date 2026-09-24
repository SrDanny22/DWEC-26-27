'use strict'

// 1. Le quitamos el nombre
// 2. Le ponemos la flecha entre los paréntesis y la llave
// 3. Quitamos la palabra reservada function
// 4. Si la función tiene un único parámetro, podemos quitar los paréntesis
// 5. Si la función tiene una única linea de código, podemos quitar las llaves y el ;
// 6. Si la función tiene una única linea de código, subimos la linea
// 7. Si no hay llaves y hay un return, quitamos el return

function calcularFactorial(numero) {
    if (numero === 1) {
        return 1;
    } else {
        return numero * calcularFactorial(numero - 1);
    }
}
console.clear();
console.log(calcularFactorial(1));
console.log(calcularFactorial(5));
console.log(calcularFactorial(3));
console.log(calcularFactorial(100));

// Solución 1
const calcularFactorial1 = numero => {
    if (numero === 1) {
        1;
    } else {
        numero * calcularFactorial1(numero - 1);
    }
}

// Solución 2
console.clear()
const calcularFactorial2 = numero => numero === 1 ? 1 : numero * calcularFactorial2(numero - 1);

console.log(calcularFactorial2(5))

