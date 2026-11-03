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
            return categories;
        } catch (e) {
            throw new DummyServiceError('No puedo recuperar las categorías', e.message,  'getCategories');
        }
    }
}

export class DummyServiceError extends Error {
    constructor(message, cause, method) {
        super(`[DummyServiceError ${method}]: ${message}. ${cause}`);
    }
}