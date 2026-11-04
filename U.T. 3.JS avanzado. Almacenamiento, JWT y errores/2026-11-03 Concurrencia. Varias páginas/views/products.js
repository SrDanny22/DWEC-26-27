// const params = new URLSearchParams(window.location.search);
// const categoryId = params.get('category');

const categoryId = window.localStorage.getItem('category');

/*
    Sinónimos de false en JS
    false
    null
    underfined
    0 o -0
    NaN
    '' Cadena vacía
*/
if (categoryId) {
    document.querySelector('#tH1Title').textContent = 'Productos de la categoría ' + categoryId;
} else {
    document.querySelector('#tH1Title').textContent = 'Productos';
}