import { DummyService } from "../services/dummy-service.js";

const service = new DummyService();
const categories = await service.getCategories();
const nSection = document.querySelector('#tSctCategories');
categories.forEach(category => {
    const nArticle = nSection.appendChild(document.createElement('article'));
    nArticle.classList.add('card-category');
    nArticle.dataset.category = category.id;

    const nHeader = nArticle.appendChild(document.createElement('header'));
    nHeader.textContent = category.name;

    const nImage = nArticle.appendChild(document.createElement('img'));
    nImage.src = 'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp'
});