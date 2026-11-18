const token = window.localStorage.getItem('token-2026-11-17');



if (!token) {
    document.querySelector('#tDivUser').textContent = '';
    document.querySelector('#tButLogin').textContent = 'Iniciar sesión';
    document.querySelector('#tButLogin').addEventListener('click', _ =>
        window.location = './login.html'
    );
} else {
    try {
        const decodedToken = decodeToken(token);
        document.querySelector('#tDivUser').textContent = `${decodedToken.firstName} ${decodedToken.lastName}`;
        document.querySelector('#tButLogin').textContent = 'Cerrar sesión';
        document.querySelector('#tButLogin').addEventListener('click', _ => {
            window.localStorage.removeItem('token-2026-11-17');
            document.querySelector('#tDivUser').textContent = '';
            document.querySelector('#tButLogin').textContent = 'Iniciar sesión';
            document.querySelector('#tButLogin').addEventListener('click', _ =>
                window.location = './login.html'
            );
        });
    } catch (error) {
        alert('Problema al identificar al usuario. Refresque la página o intente iniciar sesión.');
    }
}


function decodeToken(token) {
    const parseJwt = token => {
        try {
            return JSON.parse(atob(token.split('.')[1]));
        } catch (error) {
            throw new Error(`Problem decoding token "${token}": ${error.message}.`);
        }
    }
    const tokenDecodificado = parseJwt(token);
    return tokenDecodificado;
}
