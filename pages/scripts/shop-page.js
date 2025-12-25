import { products } from '../data/products.js';

let shopPageHTML = '';

products.forEach((product) => {
  shopPageHTML += `
    <div class="product-container js-product-container" data-product-id="${product.id}">
      <div class="product-image-container">
        <img class="product-image" src="${product.image}">
      </div>
      <div class="product-name">${product.name}</div>
      <div class="product-price">
        <button class="I-choose-you-button">
          I choose you!
        </button>
      </div>
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


document.querySelectorAll('.js-home-icon')
  .forEach((icon) => {
    icon.addEventListener('click', () => {
    window.location.href = 'main-page.html';
  });
})

document.querySelectorAll('.js-basket-button')
.forEach((basketButton) => {
  basketButton.addEventListener('click', () => {
    window.location.href = 'checkout-page.html'
  });
})

document.querySelectorAll('.js-contacts-button')
.forEach((contactsButton) => {
  contactsButton.addEventListener('click', () => {
    window.location.href = 'contacts-page.html'
  });
})