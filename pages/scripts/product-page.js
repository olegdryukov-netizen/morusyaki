import { products } from '../data/products.js';

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
        <div class="js-shop-button">SHOP/</div>
        <div>${product.name}</div>
      </div>

      <div class="product-image-position">
        <img class="product-image-large" src="${product.image}">
      </div>

      <div class="product-carouselle">${imagesHTML}</div>
    </div>

    <div class="product-description-grid">
      <div class="upper-bar-right">
        <p>&#8592</p><div>back</div>
        <div>forward</div><p>&#8594</p>
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

      <div class="product-price-position">
        <p class="product-price">${product.price} lari</p>
      </div>

      <div class="buttons-position">
        <div class="back-to-shop-button-position">
          <button class="add-to-cart-button 
          js-shop-button">
            Back to SHOP
          </button>
        </div>

        <div class="add-to-cart-button-position">
          <button class="add-to-cart-button">
            Add to CART
          </button>
        </div>
      </div>
    </div>
  `;
}

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