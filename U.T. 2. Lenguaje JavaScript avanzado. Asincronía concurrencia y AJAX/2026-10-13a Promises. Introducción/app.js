// function devolverSiete() {
//     if(true) {
//         return 7;
//     } else {
//         throw new Error('Hay un problema');
//     }
// }

/* Sintaxis antigua */
// function devolverSiete() {
//     const promesa = new Promise((resolve, reject) => {
//         if(true) {
//             resolve(7);
//         } else {
//             reject('Hay un problema');
//         }
//     });

//     return promesa;
// }

/* Sintaxis moderna */
async function devolverSiete() {
    if(true) {
        return 7;
    } else {
        throw new Error('Hay un problema');
    }
}

// const resultado = devolverSiete()
// console.clear();
// console.log(resultado);
// console.log('FIN!!!');

/* Forma antigua */
// console.clear();
// devolverSiete()
//     .then(resultado => console.log(resultado))
//     .catch(error => console.error(error));
// console.log('FIN!!!');

/* Forma moderna */
try {
    console.clear();
    const resultado = await devolverSiete();
    console.log(resultado);
    
} catch(e) {
    console.error(e.message);
}
console.log('FIN!!!');