import { AuthorizationService } from "../services/auth.service.js";

const token = window.sessionStorage.getItem('token-2026-11-17');

if (!token) {
    alert('Usted no ha iniciado sesión. Sera dirigido a la página de inicio.');
    window.location = '/2026-11-17 Ejercicio repaso JWT/views/index.html';
}

const service = new AuthorizationService();
const categories = await service.retrieveCategories(token);

const nDivCategories = document.querySelector('#tDivCategories');
for (const category of categories) {
    const nCheckbox = nDivCategories.appendChild(document.createElement('input'));
    nCheckbox.type = 'checkbox';
    nCheckbox.value = category.slug;
    nCheckbox.id = `tChk${category.slug}`;

    const nLabel = nDivCategories.appendChild(document.createElement('label'));
    nLabel.for = `tChk${category.slug}`;
    nLabel.textContent = category.name;

    nDivCategories.appendChild(document.createElement('br'));
}