import { empleados } from "./empleados.js";

setup();

function setup() {
    agregarListaEmpleados(empleados);
    configurarEmpleadoCambiado();
}

// JSDoc
/**
 * Reccorre el array y añade el empleado a la lista.
 * @param { [{ dni: number, nombre: string, apellido: string }] } empleados El array de empleados.
 * @returns { undefined }
 */
function agregarListaEmpleados(empleados) {
    const nDatalist = document.getElementById('eDatalistEmpleados');

    // for (const empleado of empleados) {
    //     const nOption = document.createElement('option');
    //     nDatalist.appendChild(nOption);

    //     nOption.setAttribute('value', `${empleado.nombre} ${empleado.apellido}`);
    // }

    empleados.forEach(empleado => {
        const nOption = document.createElement('option');
        nDatalist.appendChild(nOption);

        nOption.setAttribute('value', empleado.dni);
        nOption.setAttribute('label', `${empleado.nombre} ${empleado.apellido}`);
    });
}

function configurarEmpleadoCambiado() {
    const nText = document.getElementById('eTxtEmpleado');
    nText.addEventListener('change', llenarDetalleEmpleado);
}

function llenarDetalleEmpleado(e) {
    const nInput = e.target;
    const dniEmpleado = parseInt(nInput.value);

    
    // const empleado = empleados.find(empleado => empleado.dni === dni);

    // document.getElementById('eTxtNombre').setAttribute('value', empleado.nombre);
    // document.getElementById('eTxtApellido').setAttribute('value', empleado.apellido);
    // document.getElementById('eTxtEdad').setAttribute('value', empleado.edad);
    // document.getElementById('eTxtCategoria').setAttribute('value', empleado.categoria);
    // document.getElementById('eTxtSalario').value = empleado.salarioBruto;

    // const {nombre, apellido, edad, categoria, salarioBruto: salario} = empleados.find(empleado => empleado.dni === dni);
    const {nombre, apellido, edad, categoria, salarioBruto: salario} = empleados.find(({dni}) => dni === dniEmpleado);

    document.getElementById('eTxtNombre').value = nombre;
    document.getElementById('eTxtApellido').value = apellido;
    document.getElementById('eTxtEdad').value = edad;
    document.getElementById('eTxtCategoria').value = categoria;
    document.getElementById('eTxtSalario').value = salario;

    nInput.setAttribute = ('value',`${nombre} ${apellido}`);
    nInput.value = `${nombre} ${apellido}`;

}