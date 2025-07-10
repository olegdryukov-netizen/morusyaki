let productPageHTML = '';

products.forEach((product) => {
  productPageHTML += `
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

    <div class="product-total">
      <div class="product-place">
        <img class="product-image" 
        src="${product.image}">
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
        <div class="product-title">
          ${product.title}</div>
        <div class="description-text">
          ${product.description}</div>
        <div class="dimensions-section">
          <div class="dimensions-icon">
            <img style="width: 100%;" 
            src="${product.dimensionsIcon}">
          </div>
          
          <div class="dimensions-text">
            <p style="margin: 0;
              font-size: 18px;
              padding: 20px 0 0 30px;">
              Dimensions:
            </p>
            <p style="margin: 0;
              font-size: 20px;
              padding-left: 30px;">
              Height - ${product.height} cm
            </p>
          </div>
        </div>

        <div class="add-to-cart-section">
          <button class="add-to-cart-button js-add-to-cart-button"
          data-product-name="${product.name}">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  `
})

document.querySelector('.js-product-page-container')
  .innerHTML = productPageHTML;

const button = document.querySelector('.js-add-to-cart-button');

button.addEventListener('click', () => {
  const productName = button.dataset.productName;
  cart.push({
    productName: productName,
    quantity: 1
  })
  console.log(cart);
});