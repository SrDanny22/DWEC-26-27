const encodedToken = window.sessionStorage.getItem('token');
// if (token === null) {
if (!encodedToken) {
    alert('Va a ser rederigido a la página de inicio de sesión.');
    window.location = '/2026-11-10 Pequeño login Dummy/views/login.html';
}

let decodedToken;
try {
    decodedToken = decodeToken(encodedToken)
} catch (error) {
    window.sessionStorage.removeItem('token');
    alert('Va a ser rederigido a la página de inicio de sesión.');
    window.location = '/2026-11-10 Pequeño login Dummy/views/login.html';
}

console.log(decodedToken)

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