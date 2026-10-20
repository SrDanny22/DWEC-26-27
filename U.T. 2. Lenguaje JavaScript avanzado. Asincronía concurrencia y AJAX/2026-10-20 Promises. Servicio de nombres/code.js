
pedirNombres();
configurarRango();

function numeroF(e) {
    const nRange = document.getElementById('eRange');
    
    const numero = nRange.value;
    document.getElementById('nNumber').setAttribute('value', numero)
}

function configurarRango() {
    document.getElementById('nNumber').addEventListener('change', numeroF)
}
async function obtenerNombres(e) {
    const nRange = document.getElementById('eRange');
    
    const numero = parseInt(nRange.value);
    
    const nRadioMale = document.getElementById('masculino');
    const nRadioFemale= document.getElementById('femenino');

    let genero;
    if (nRadioMale.checked) {
        genero = 'male';
    } else if(nRadioFemale.checked) {
        genero = 'female'
    } else {
        genero = 'both';
    }
    try {
        const endpoint = `https://namey.muffinlabs.com/name.json?count=${numero}&type=${genero}`;
        const response = await fetch(endpoint);
        const data = await response.json();
    
        return data;
    } catch(e) {
        alert(e.message);
    }
}

function pedirNombres() {
    const nButton = document.getElementById('eButton');
    nButton.addEventListener('click', mostrarNombres);
}

async function mostrarNombres() {
    const nOl = document.getElementById('eOl');

    const nombres = await obtenerNombres();

    nOl.innerHTML = '';
    nombres.forEach(nombre => {
        const nLi = document.createElement('li');
        nOl.appendChild(nLi);
        nLi.textContent = nombre;
    });
}

