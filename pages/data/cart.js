export let cart;

loadFromStorage();

export function loadFromStorage() {
  cart = JSON.parse(localStorage.getItem('cart'));

if(!cart) {
  cart = [{
    productId: '0000-0004',
    quantity: '1'
  }, {
    productId: '0000-0007',
    quantity: '1'
  }, {
    productId: '0000-0001',
    quantity: '1'
  }];
}
}

function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId) {
  let matchingItem;
    
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += 1;
  } else { 
    cart.push({
      productId: productId,
      quantity: 1
    });
  }  

  saveToStorage();
}

/*export function updateCartQuantity() {
  let cartQuantity = 0;

  cart.forEach((matchingItem) => {
    cart.quantity += matchingItem.quantity;
  })
}*/

export function removeFromCart(productId) {
  const newCart = [];

  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });

  cart = newCart;

  saveToStorage();
}