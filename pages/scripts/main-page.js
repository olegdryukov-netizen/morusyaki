export const shopButton = document
  .querySelector('.js-shop-button');

shopButton.addEventListener('click', () => {
  window.location.href = 'shop-page.html'
});

export const workshopButton = document
  .querySelector('.js-workshop-button');

workshopButton.addEventListener('click', () => {
  window.location.href = 'workshop-page.html'
});