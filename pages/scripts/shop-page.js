let productsHTML = '';

products.forEach((product) => {
  productsHTML += `
    <div class="product-container">
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

document.querySelector('.js-products-grid')
  .innerHTML = productsHTML;

