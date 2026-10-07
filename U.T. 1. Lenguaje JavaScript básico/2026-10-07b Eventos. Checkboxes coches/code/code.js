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
    
    const nInput = e.target;
    const inputKey = nInput.value;
    
    const coche = vehicles.find(coche => coche.key === inputKey);
    
    const nTbody = document.getElementById('eTbody');

    if (nInput.checked) {
        const nTr = document.createElement('tr');
        nTr.setAttribute('id', `tr${coche.key}`);
        nTbody.appendChild(nTr);
    
        const nTdModelo = document.createElement('td');
        const nTdFoto = document.createElement('td');
        nTr.appendChild(nTdModelo);
        nTr.appendChild(nTdFoto);
    
        const nTxtModelo = document.createTextNode(coche.model);
        nTdModelo.appendChild(nTxtModelo);
    
        const nImg = document.createElement('img');
        nImg.setAttribute('style', 'height: 80px;')
        nImg.setAttribute('src', `./photos/${coche.photo}`);
        nTdFoto.appendChild(nImg);

    } else {
        const nTr = document.getElementById(`tr${coche.key}`);
        nTr.remove();
    }
}