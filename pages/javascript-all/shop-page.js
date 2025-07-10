const products = [{
  image: 'images/teddy_bear_001.jpg',
  name: 'First cute Teddy Bear',
  price: '25'
}, {
  image: 'images/teddy_bear_002.jpg',
  name: 'Second cute Teddy Bear',
  price: '25'
}, {
  image: 'images/teddy_bear_003.jpg',
  name: 'Third cute Teddy Bear',
  price: '25'
}, {
  image: 'images/teddy_bear_004.jpg',
  name: 'Forth cute Teddy Bear',
  price: '25'
}, {
  image: 'images/teddy_bear_005.jpg',
  name: 'Fifth cute Teddy Bear',
  price: '25'
}, {
  image: 'images/teddy_bear_006.jpg',
  name: 'Sixth cute Teddy Bear',
  price: '25'
}, {
  image: 'images/teddy_bear_007.jpg',
  name: 'Seventh cute Teddy Bear',
  price: '25'
}, {
  image: 'images/teddy_bear_008.jpg',
  name: 'Eighth cute Teddy Bear',
  price: '25'
}];

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