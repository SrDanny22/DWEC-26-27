const categorias = await retrieveCategorias();
mostrarCategorias(categorias);


async function retrieveCategorias() {
    const endpoint = 'https://dummyjson.com/product/categories';
    const response = await fetch(endpoint);
    const data = await response.json();
    return data;
}

function mostrarCategorias(categorias) {

    const nSelect = document.getElementById('eSelect');

    nSelect.addEventListener('change', mostrarProductoDeLaCategoria)
    categorias.forEach(categoria => {
        const nOption = document.createElement('option');
        nSelect.appendChild(nOption);
        nOption.setAttribute('value', categoria.slug);
        nOption.textContent = categoria.name;
    });
}

async function recuperarProductosDeLaCategoria(categoria) {
    const endpoint = `https://dummyjson.com/products/category/${categoria}`
    const response = await fetch(endpoint);
    const data = await response.json();
    return data;
}

async function mostrarProductoDeLaCategoria(e) {
    const nSelect = e.target;
    const categoriaId = nSelect.value;

    const productos = await recuperarProductosDeLaCategoria(categoriaId);

    const productoP = productos.products;


    const nSection = document.getElementById('eSection');

    nSection.innerHTML = '';
    
    // Otra manera
    // while (nSection.hasChildNodes()) {
    //     nSection.removeChild(nSection.lastChild())
    // }

        productoP.forEach(producto => {

                const nArticle = document.createElement('article');
                nSection.appendChild(nArticle);
                
                nArticle.setAttribute('id', producto.id);
                
                const nHeader = document.createElement('header')
                nArticle.appendChild(nHeader);
        
                nHeader.textContent = producto.title;
        
                const nDiv = document.createElement('div');
                nArticle.appendChild(nDiv);
        
                nDiv.textContent = `${producto.price}$`;
        
                const nImg = document.createElement('img');
                nArticle.appendChild(nImg);
        
                // nImg.setAttribute('style', 'height: 80px;')
                nImg.setAttribute('src', producto.images[0]);

        });
}

