const popupContainer = document.querySelector('.popup__container')
const contentContainer = document.querySelector('.content__container')
const openButton = contentContainer.querySelector('button')
const closeButton = popupContainer.querySelector('span')
const main = document.querySelector('main')

main.addEventListener('click', (e) => {
  if(e.target == openButton) {
    popupContainer.style.display = 'flex'
  } else if (e.target == closeButton || e.target == popupContainer) {
    popupContainer.style.display = 'none'
  }
})
