/*import {cart, addToCart} from '../data/cart.js';*/
import {products} from '../data/products.js';

const productId = localStorage.getItem('selectedProductId');

const product = products.find(p => p.id === productId);

if (!product) {
  document.querySelector('.js-product-container').innerHTML = `
    <p>Sorry, we couldn’t find the product you’re looking for.</p>`;
} else {
  const productHTML = `
    <div class="product-page-grid">
      
    </div>
  `;
  document.querySelector('.js-product-container').innerHTML = productHTML;
}


/*function updateCartQuantity() {
  let cartQuantity = 0;
      
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  })
}

document.querySelectorAll('.js-add-to-cart-button')
  .forEach((button) => {
    button.addEventListener('click', () => {
      const productId = button.dataset.productId;
      addToCart(productId);
      updateCartQuantity();
    })
  });*/