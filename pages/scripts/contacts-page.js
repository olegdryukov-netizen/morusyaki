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