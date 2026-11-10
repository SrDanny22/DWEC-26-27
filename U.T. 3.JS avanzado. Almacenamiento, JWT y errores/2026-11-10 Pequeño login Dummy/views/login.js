import AuthenticationService from "/2026-11-10 Pequeño login Dummy/services/authentication.service.js";

document.querySelector('#tButInitSession').addEventListener('click', async _ => {
    const username = document.querySelector('#tTxtUsername').value;
    const password = document.querySelector('#tTxtPassword').value;
    const service = new AuthenticationService();

    try {
        const token =  await service.validateUser(username, password);
        window.sessionStorage.setItem('token', token);
        window.location = '/2026-11-10 Pequeño login Dummy/views/index.html'
    } catch (error) {
        alert(error.message)
    }
});