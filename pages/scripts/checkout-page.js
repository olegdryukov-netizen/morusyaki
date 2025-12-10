import { cart, removeFromCart } from "../data/cart.js";
import { products } from "../data/products.js";

let cartSummaryHTML = '';

cart.forEach((cartItem) => {
  const productId = cartItem.productId;

  let matchingProduct;

  products.forEach((product) => {
    if(product.id === productId) {
      matchingProduct = product;
    }
  });

  cartSummaryHTML += `
    <div class="selected-product-container
    js-selected-product-container-${matchingProduct.id}">
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

      <div class="selected-product-delete-button-position">
        <button class="selected-product-delete-button js-selected-product-delete-button" 
        data-product-id="${matchingProduct.id}">
          Delete
        </button>
      </div>
    </div>
  `;
});

document.querySelector('.js-selected-products-section')
 .innerHTML = cartSummaryHTML;

document.querySelectorAll('.js-selected-product-delete-button')
  .forEach((button) => {
    button.addEventListener('click', () => {
      const productId = button.dataset.productId;
      removeFromCart(productId);

      const container = document.querySelector(`.js-selected-product-container-${productId}`
      );
      container.remove();
    })
  })

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
