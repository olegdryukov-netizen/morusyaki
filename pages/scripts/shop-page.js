import {products} from '../data/products.js';

let shopPageHTML = '';

products.forEach((product) => {
  shopPageHTML += `
    <div class="product-container js-product-container">
      <div class="product-image-container">
        <img class="product-image"
        src="${product.image}">
      </div>
      
      <div class="product-name">
        ${product.name}
      </div>
      <div class="product-price">
        ${product.price} lari
      </div>
    </div>
  `;
});

document.querySelector('.js-shop-page-html')
  .innerHTML = shopPageHTML;

document.querySelectorAll('.js-product-container').forEach((element, index) => {
  element.addEventListener('click', () => {
    const selectedProduct = products[index];
    localStorage.setItem('selectedProductId', selectedProduct.id);
    window.location.href = 'product-page.html';
  });
});