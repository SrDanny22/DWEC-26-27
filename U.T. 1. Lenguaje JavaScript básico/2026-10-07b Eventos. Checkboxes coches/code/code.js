import { vehicles } from "./data.js";

crearCheckbox(vehicles);

function crearCheckbox(vehicles) {
    const nChk = document.getElementById('eChk');

    for (const vehicle of vehicles) {
        const nInput = document.createElement('input');
        nChk.appendChild(nInput);
        nInput.addEventListener('change', agregarCuerpoTabla)

        nInput.setAttribute('type', 'checkbox');
        nInput.setAttribute('id', `tChk${vehicle.key}`);
        nInput.setAttribute('value', vehicle.key);

        const nLabel = document.createElement('label');
        nChk.appendChild(nLabel);

        nLabel.setAttribute('for', `tChk${vehicle.key}`);

        const nTxt = document.createTextNode(vehicle.model);
        nLabel.appendChild(nTxt);
    }

}

function agregarCuerpoTabla(e) {
    const nTbody = getElementById('eTbody');

    const nInput = e.target;
    const inputKey = nInput.value;

    const coche = vehicles.find(coche => coche.key === inputKey);

    const nTr = document.createElement('tr');
    nTbody.appendChild(nTr);

    const nTdModelo = document.createElement('td');
    const nTdFoto = document.createElement('td');
    nTr.appendChild(nTdModelo);
    nTr.appendChild(nTdFoto);

    const nTxtModelo = document.createTextNode(coche.model);
    nTdModelo.appendChild(nTxtModelo);

    const nImg = document.createElement('img');
    nTdFoto.appendChild(nImg);

    nImg.setAttribute('src', `/photos/${coche.photo}`);


}