import { cart } from "../data/cart.js";
import { products } from "../data/products.js";

let cartSummaryHTML = '';

cart.forEach((cartItem) => {
  const productId = cartItem.productId;

  let matchingProduct;

  products.forEach((product) => {
    if(product.id === productId) {
      matchingProduct = product;
    }
  })

  cartSummaryHTML += `
    <div class="selected-product-container">
      <div class="selected-product-image-position">
        <img class="selected-product-image" 
        src="${matchingProduct.image}">
      </div>

      <div class="selected-product-name-position">
        <p class="selected-product-name">
          ${matchingProduct.name}
        </p>
      </div>

      <div class="selected-product-price-position">
        <p class="selected-product-price">
          ${matchingProduct.price} lari
        </p>
      </div>
    </div>
  `;
})

document.querySelector('.js-selected-products-section')
  .innerHTML = cartSummaryHTML;

document.querySelectorAll('.js-home-icon')
  .forEach((icon) => {
    icon.addEventListener('click', () => {
    window.location.href = 'main-page.html';
  });
})

document.querySelectorAll('.js-shop-button')
  .forEach((shopButton) => {
    shopButton.addEventListener('click', () => {
      window.location.href = 'shop-page.html'
    });
  })

document.querySelectorAll('.js-workshop-button')
.forEach((workshopButton) => {
  workshopButton.addEventListener('click', () => {
    window.location.href = 'workshop-page.html'
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