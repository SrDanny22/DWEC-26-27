import { decodeTokenJWT } from "/2026-11-13 JWT/lib/jwt.lib.js";

setUp();

function setUp() {
    setupLoginButton();
    manageToken();
}


function manageToken() {
    const token = window.localStorage.getItem('token-13');

    if (token) {
        // const decodedToken = decodeTokenJWT(token);
        const { firstName: firstname, lastName: lastname } = decodeTokenJWT(token);

        document.querySelector('#tDivUser').textContent = `${firstname} ${lastname}`
        document.querySelector('#tButLogin').textContent = 'Cerrar sesión'
    } else {
        document.querySelector('#tButLogin').textContent = ''
        document.querySelector('#tButLogin').textContent = 'Iniciar sesión'
    }
}

function setupLoginButton() {
    document.querySelector('#tButLogin').addEventListener('click', e => {
        if (e.target.textContent === 'Iniciar sesión') {
            // Reenvío
            window.location = '/2026-11-13 JWT/views/login.html'
        } else {
            window.localStorage.removeItem('token-13');
            window.location.reload();
        }
    })
}