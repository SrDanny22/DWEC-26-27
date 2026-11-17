import { decodeTokenJWT } from "/2026-11-17 Ejercicio repaso JWT/libs/jwt.lib.js"; 

const token = window.localStorage.getItem('token-2026-11-17');

if (!token) {
    document.querySelector('#tDivUser').textContent = '';
    document.querySelector('#tButLogin').textContent = 'Iniciar sesión';
    document.querySelector('#tButLogin').addEventListener('click', _ => window.location = '/2026-11-17 Ejercicio repaso JWT/views/login.html');
} else {
    try {
        const decodedToken = decodeTokenJWT(token);
        document.querySelector('#tDivUser').textContent = `${decodedToken.firstName} ${decodedToken.lastName}`;
        document.querySelector('#tButLogin').textContent = 'Cerrar sesión';
        document.querySelector('#tButLogin').addEventListener('click', _ => {
            window.localStorage.removeItem('token-2026-11-17');
            document.querySelector('#tButLogin').textContent = 'Iniciar sesión';
            document.querySelector('#tButLogin').addEventListener('click', _ => window.location = '/2026-11-17 Ejercicio repaso JWT/views/login.html');
            
    });
    } catch (error) {
        alert('Problema al identificar al usuario. Refresque la página  o intente iniciar sesión.')
    }
}