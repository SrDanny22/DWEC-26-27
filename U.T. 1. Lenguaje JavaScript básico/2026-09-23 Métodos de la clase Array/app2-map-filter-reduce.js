import { empleados } from "./empleados.js";

// mapear es cambiar cada elemento del array por otro elemento

// function obtenerNombreCompleto(empleado) {
//     return `${empleado.nombre} ${empleado.apellido}`
// }

const obtenerNombreCompleto = empleado => `${empleado.nombre} ${empleado.apellido}`;


const nombres = empleados.map(obtenerNombreCompleto);

console.log(nombres);
console.log(nombres.length);

function obtenerNombreYSalario(empleado) {
    return { // Las llaves se usan para los objetos
        nombre: empleado.nombre,
        salario: empleado.salarioBruto
    }
}

const nombresYSalarios = empleados.map(obtenerNombreYSalario);
console.clear();
console.table(nombresYSalarios);

// Mostrar nombre y correo electrónico de los gerentes

// function nombreYCorreoElectronico(empleado) {
//     return {
//         nombre: empleado.nombre,
//         correoElectronico: empleado.correoElectronico
//     }
// }

// function esGerente(empleado) {
//     return empleado.categoria === 'gerente';
// }

const nombreYCorreo = gerentes => ({ nombre: gerentes.nombre, correoElectronico: gerentes.correoElectronico });

const esGerente = empleado => empleado.categoria === 'gerente';

const gerentes = empleados
    .filter(esGerente)
    .map(nombreYCorreo); // Primero filtranos para tener solo a los que son gerentes, y luego mapeamos solo para sacar los nombres y correos



console.clear();
console.table(gerentes);

console.clear();
const ordenarPorSalario = (empleado1, empleado2) => empleado1.salario - empleado2.salario;
console.table(nombresYSalarios.sort(ordenarPorSalario));