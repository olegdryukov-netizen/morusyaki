export let cart = [{
  productId: '0000-0004',
  quantity: '1'
}, {
  productId: '0000-0007',
  quantity: '1'
}, {
  productId: '0000-0001',
  quantity: '1'
}];

export function addToCart(productId) {
  let matchingItem;
    
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    } else { 
      cart.push({
        productId: productId,
        quantity: 1
      });
    }
  })
}

export function removeFromCart(productId) {
  const newCart = [];

  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });

  cart = newCart;
}