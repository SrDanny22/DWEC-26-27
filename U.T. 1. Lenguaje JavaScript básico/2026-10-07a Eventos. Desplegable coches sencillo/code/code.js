import { vehicles } from "./data.js";

agregarCochesAlDesplegable(vehicles);
// cambiarFoto(vehicles);

function agregarCochesAlDesplegable(vehicles) {
    const nSlct = document.getElementById('eSlct');

    nSlct.addEventListener('change', cambiarFoto)

    for (const vehicle of vehicles) {
        const nOption = document.createElement('option');
        nSlct.appendChild(nOption);
    
        nOption.setAttribute('value', vehicle.key);
    
        const nTxtCar = document.createTextNode(vehicle.model);
        nOption.appendChild(nTxtCar);
    }
}

// Toda función asociada a un evento recibe automaticamente como primer argumento el evento
function cambiarFoto(e) {
    // console.log(e);
    const nImg = document.getElementById('eImgCoches');

    const nSlct = e.target; // La propiedad target devuelve la etiqueta que lanzo el evento
    const vehicleKey = nSlct.value; // La propiedad value me devuelve el value del option seleccionado
    // console.log(vehicleKey);

    const vehicle = vehicles.find(vehicle => vehicle.key === vehicleKey);

    nImg.setAttribute('src', `./photos/${vehicle.photo}`);

}
