import { empleados } from "./empleados.js";

console.clear();
console.log('Número de empleados: ', empleados.length);

function mostrarNombreCompleto(empleado, i,) {
    console.log(i, `${empleado.nombre} ${empleado.apellido}`);
}

empleados.forEach(mostrarNombreCompleto);

// Devuelve todos los informaticos
function esInformatico(empleado, i, array) {
    return empleado.categoria === 'informatico' ?  true : false;
    // otra opcion podria ser 
    // return empleado.categoria === 'informatico';
}

const informaticos = empleados.filter(esInformatico); // filter devuelve un nuevo array con los empleados que cumplan el filtro de la funcion que le pasamos
console.clear();
console.log('Número de informáticos: ', informaticos.length);

// Devuelve
function esAdministrativo(empleado, i, array) {
    return empleado.categoria === 'administrativo';
}

function tieneOjosAzules(empleado) {
    return empleado.colorOjos === 'azul';
}

const administrativosDeOjosAzules = empleados.filter(esAdministrativo).filter(tieneOjosAzules);

console.log('Numero de administrativos de ojos azules: ', administrativosDeOjosAzules.length);