import { products } from '../data/products.js';

let shopPageHTML = '';

products.forEach((product) => {
  shopPageHTML += `
    <div class="product-container js-product-container" data-product-id="${product.id}">
      <div class="product-image-container">
        <img class="product-image" src="${product.image}">
      </div>
      <div class="product-name">${product.name}</div>
      <div class="product-price">${product.price} lari</div>
    </div>
  `;
});

document.querySelector('.js-shop-page-html').innerHTML = shopPageHTML;

// Навешиваем обработчик на карточки
document.querySelectorAll('.js-product-container')
  .forEach(container => {
    container.addEventListener('click', () => {
      const productId = container.dataset.productId;
      localStorage.setItem('selectedProductId', productId);
      window.location.href = 'product-page.html';
    });
  });


document.querySelector('.js-home-icon')
  .addEventListener('click', () => {
    window.location.href = 'main-page.html';
});