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
      <div class="upper-bar">
        <div class="upper-bar-left"> <!--left section-->
          <div>START/</div>
          <div>SHOP/</div>
          <div>${product.name}</div>
        </div>
        <div class="upper-bar-right"> <!--right section-->
          <p>&#8592</p><div>back</div>
          <div>forward</div><p>&#8594</p>
        </div>
      </div>  
      <div class="product-detail-container">
        <div class="product-image-section">
          <div>
            <img class="product-image-large" 
            src="${product.image}">
          </div>
          <div class="product-carouselle">
            <img src="images/teddy_bear_001.jpg">
            <img src="images/teddy_bear_002.jpg">
            <img src="images/teddy_bear_003.jpg">
            <img src="images/teddy_bear_004.jpg">
            <img src="images/teddy_bear_005.jpg">
            <img src="images/teddy_bear_006.jpg">
            <img src="images/teddy_bear_007.jpg">
            <img src="images/teddy_bear_008.jpg">
          </div>
        </div>
        
        <div class="product-description-grid">
          <div class="product-title">${product.title}</div>
          <div class="product-description">
            ${product.description}</div>
          <div class="product-dimensions">
            <img class="dimensions-icon" 
              src="${product.dimensionsIcon}">
            <span>${product.height} cm</span>
          </div>
          <div class="product-price">${product.price} lari</div>
        </div>
      </div>
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