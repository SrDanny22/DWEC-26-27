import { CategoryModel } from "../models/category.model.js";

export class CategoryDTO {
    #slug;
    #name;

    constructor(slug, name) {
        this.#slug = slug;
        this.#name = name;
    }

    get slug() {
        return this.#slug;
    }

    get name() {
        return this.#name;
    }
}

export class DummyService {
    static BASE_URL = 'https://dummyjson.com/product/';

    async getCategories() {
        try {
            const endpoint = DummyService.BASE_URL + 'categories';
            const response = await fetch(endpoint);
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            const data = await response.json();
            const categories = data.map(({slug: id, name}) => new CategoryModel(id, name));

            const promises = categories.map(category => this.getCategoryById(category.id));
            const resultadoIntermedio = await Promise.all(promises);
            const categoriesWhitImage = (resultadoIntermedio).map( (resultado, i) => {
                const category = new CategoryModel(categories[i].id, categories[i].name);
                category.image = resultado.products[0].thumbnail;
                return category;
            })

            return categoriesWhitImage;
        } catch (e) {
            throw new DummyServiceError('No puedo recuperar las categorías', e.message,  'getCategories');
        }
    }

    async getCategoryById(categiryId) {
        try {
            const endpoint = DummyService.BASE_URL + 'category/' + categiryId;
            const response = await fetch(endpoint);
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            const data = await response.json();
            return data
        } catch (e) {
            throw new DummyServiceError('No puedo recuperar el producto', e.message,  'getproducts');
        }
    }

    async getProductById(productId) {
        try {
            const endpoint = DummyService.BASE_URL + productId;
            const response = await fetch(endpoint);
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            const data = await response.json();
            return data
        } catch (e) {
            throw new DummyServiceError('No puedo recuperar la categroia', e.message,  'getcategoryById');
        }
    }
}

export class DummyServiceError extends Error {
    constructor(message, cause, method) {
        super(`[DummyServiceError ${method}]: ${message}. ${cause}`);
    }
}