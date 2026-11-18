import { closeSpinner, openSpinner } from "../lib/spinner.lib.js";
import { DummyService } from "../services/dummy-service.js";


await setUp();

async function setUp() {
    const token = retrieveToken();
    if (!token) {
        alert('Usted no ha iniciado sesión. Será dirigido a la página de inicio.');
        window.location = './index.html';
    } // En el mundo real hay que ver si el token a caducado

    // setUpProductsButton();

    const categoryIds = extractCategoriesFromUrl();

    // Si no recibo categorías muestro todos los productos, en otro caso muestro solo los productos de las categorías indicadas

    if (categoryIds) {
        try {
            openSpinner();
            for (const categoryId of categoryIds.split(',')) {
                const service = new DummyService();
                const products = await service.retrieveProductsByCategory(token, categoryId);
                renderProducts(products);
            }
            closeSpinner();
        } catch (error) {
            alert('Hay un problema al recuperar las productos.');
        } finally {
            closeSpinner();
        }
    } else {
        
    }



}

function extractCategoriesFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const categories = params.get('categories');
    return categories;
}

function retrieveToken() {
    return window.localStorage.getItem('token-2026-11-18');
}

function renderProducts(products) {
    const nDiv = document.querySelector('#tDivProducts');

    for (const product of products) {
        const nCheckbox = nDiv.appendChild(document.createElement('input'));
        nCheckbox.type = 'checkbox';
        nCheckbox.value = product.id;
        nCheckbox.id = `tChk${product.id}`;

        const nLabel = nDiv.appendChild(document.createElement('label'));
        nLabel.setAttribute('for', `tChk${product.id}`);
        nLabel.textContent = product.title;

        nDiv.appendChild(document.createElement('br'));
    }

}

// function setUpProductsButton() {
//     document.querySelector('#tButProducts').addEventListener('click', e => {
//         const checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
//         let values = '';
//         for (const checkbox of checkboxes) {
//             values += checkbox.value + ',';
//         }
//         window.location = `./products.html?categories=${values.substring(0, values.length-1)}`;
//         window.localStorage.setItem('categories', values.substring(0, values.length-1));
//     });
// }