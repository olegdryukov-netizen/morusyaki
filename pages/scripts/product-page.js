import { products } from '../data/products.js';
import { cart, addToCart } from '../data/cart.js';

const productId = localStorage.getItem('selectedProductId');
const product = products.find(p => p.id === productId);

if (!product) {
  document.querySelector('.js-product-page').innerHTML = '<p>Product not found</p>';
} else {
  const imagesHTML = product.carouselImages.map(img =>
    `<img src="${img}">`
  ).join('');

  document.querySelector('.js-product-page').innerHTML = `
    <div class="product-image-section">
      <div class="upper-bar-left">
        <div class="js-home-icon">HOME/</div>
        <div class="js-shop-button">GALLERY/</div>
        <div>${product.name}</div>
      </div>

      <div class="product-image-position">
        <img class="product-image-large" src="${product.image}">
      </div>

      <div class="product-carouselle">${imagesHTML}</div>
    </div>

    <div class="product-description-grid">
      <div class="upper-bar-right">
        <p>&#8592</p><div class="js-product-previous">
          previous</div>
        <div class="js-product-next">
          next</div><p>&#8594</p>
      </div>

      <div class="product-title">${product.name}</div>

      <div class="product-description">${product.description}</div>

      <div class="product-dimensions">
        <div class="dimensions-icon-position">
          <img class="dimensions-icon" src="images/icons/bear_dimensions_icon.png">
        </div>
        <div class="dimensions-text-position">
          <p class="dimensions-text">
            Height: ${product.height} cm
          </p>
        </div>
      </div>

      <div class="buttons-position">
        <div class="back-to-shop-button-position">
          <button class="back-to-shop-button 
          js-shop-button">
            Back to GALLERY
          </button>
        </div>

        <div class="add-to-cart-button-position">
          <button class="add-to-cart-button 
          js-add-to-cart-button">
            I want YOU!
          </button>
        </div>
      </div>
    </div>
  `;
}

document.querySelectorAll('.js-home-icon')
  .forEach((icon) => {
    icon.addEventListener('click', () => {
    window.location.href = 'index.html';
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

document.querySelectorAll('.js-add-to-cart-button')
.forEach((addToCartButton) => {
  addToCartButton.addEventListener('click', () => {
    addToCart();
    console.log(cart);
  });
})

document.querySelector('.js-product-previous').addEventListener('click', () => {
  console.log('previous product')
})

document.querySelector('.js-product-next').addEventListener('click', () => {
  console.log('next product')
})


/* add Price in Product Description Grid section
<div class="product-price-position">
  <p class="product-price">${product.price} lari</p>
</div>
*/