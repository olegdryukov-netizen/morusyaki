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

document.querySelectorAll('.js-contacts-button')
.forEach((contactsButton) => {
  contactsButton.addEventListener('click', () => {
    window.location.href = 'contacts-page.html'
  });
})