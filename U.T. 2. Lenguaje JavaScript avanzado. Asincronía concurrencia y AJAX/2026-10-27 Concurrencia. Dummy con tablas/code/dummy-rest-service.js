export default class DummyRestService {
    static URL_BASE = 'https://dummyjson.com/';
    async getCategories() {
        try {
            const url = DummyRestService.URL_BASE + 'products/categories?delay=1000';
            const response = await fetch(url);
            const data = await response.json();
            // return data.map(category => ({id: category.slug, name: category.name})); // Si hacemos una funcion flecha que duvuelve un objeto, el objeto {} se pone entre parentesís.
            // return data.map(({slug, name: n}) => ({id: slug, name: n})); // Deconstruccion, cogemos solo las propiedades que queremos
            return data.map(({slug:id, name}) => ({id, name}));
            // function mapear(category) {
            //     return {
            //         id: category.slug,
            //         name: category.name
            //     }
            // }
        } catch (e) {
            console.error(e.message);
        }
    }

    getCategoryById(categoryId) {}

    async getProductsByCategory(categoryId) {
        try {
            const url = DummyRestService.URL_BASE + `products/category/${categoryId}?delay=1000`;
            const response = await fetch(url);
            const data = await response.json();
            return data.products.map(({id, title:name, price, images}) => ({id, name, price, image: images[0]}));
        } catch (e) {
            console.error(e.message);
        }
    }
}

// console.log(await (new DummyRestService()).getCategories());