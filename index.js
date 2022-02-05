const popupContainer = document.querySelector('.popup__container')
const contentContainer = document.querySelector('.content__container')
const openButton = contentContainer.querySelector('button')
const closeButton = popupContainer.querySelector('span')

openButton.addEventListener('click', () => {
  popupContainer.style.display = 'grid'
})
closeButton.addEventListener('click', () => {
  popupContainer.style.display = 'none'
})