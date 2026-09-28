import { empleados } from "./empleados.js";

// function mostrarNombreCompleto(empleado) {
//     return {
//         nombre: `${empleado.nombre} ${empleado.apellido}`,
//         salario: salarioBruto,
//     }
// }

// empleado => ({
//     nombre: `${empleado.nombre} ${empleado.apellido}`,
//     salario: salarioBruto,
// })


// const salarios = empleados.filter(empleado => empleado.categoria === 'informatico');

// Con destructuracion
const informaticos = empleados
    .filter(({categoria}) => categoria === 'informatico')
    .map(empleado => ({
        nombre: `${empleado.nombre} ${empleado.apellido}`,
        salario: empleado.salarioBruto,
    }))
    .reduce(
        (acc, cur) => {return acc + cur.salarioBruto}
        , 0);

// function esInformatico(empleado) {
    //     if (empleado.categoria === 'informatico') {
        //         return true;
        //     } else {
            //         return false;
            //     }
            // }
            
// empleado => empleado.categoria === 'informatico';

console.table(informaticos);