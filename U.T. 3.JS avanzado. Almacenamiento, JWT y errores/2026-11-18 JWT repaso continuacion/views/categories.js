import { closeSpinner, openSpinner } from "../lib/spinner.lib.js";
import { DummyService } from "../services/dummy-service.js";


await setUp();

async function setUp() {
    const token = retrieveToken();
    if (!token) {
        alert('Usted no ha iniciado sesión. Será dirigido a la página de inicio.');
        window.location = './index.html';
    } // En el mundo real hay que ver si el token a caducado

    setUpProductsButton();

    try {
        openSpinner();
        const service = new DummyService();
        const categories = await service.retrieveCategories(token);
        renderCategories(categories);
        closeSpinner();
    } catch (error) {
        alert('Hay un problema al recuperar las categorías.');
    } finally {
        closeSpinner();
    }

}

function retrieveToken() {
    return window.localStorage.getItem('token-2026-11-18');
}

function renderCategories(categories) {
    const nDiv = document.querySelector('#tDivCategories');

    for (const category of categories) {
        const nCheckbox = nDiv.appendChild(document.createElement('input'));
        nCheckbox.type = 'checkbox';
        nCheckbox.value = category.slug;
        nCheckbox.id = `tChk${category.slug}`;

        const nLabel = nDiv.appendChild(document.createElement('label'));
        nLabel.setAttribute('for', `tChk${category.slug}`);
        nLabel.textContent = category.name;

        nDiv.appendChild(document.createElement('br'));
    }

}

function setUpProductsButton() {
    document.querySelector('#tButProducts').addEventListener('click', e => {
        const checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
        let values = '';
        for (const checkbox of checkboxes) {
            values += checkbox.value + ',';
        }
        window.location = `./products.html?categories=${values.substring(0, values.length-1)}`;
        window.localStorage.setItem('categories', values.substring(0, values.length-1));
    });
}