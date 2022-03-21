const popupContainer = document.querySelector('.popup__container')
const contentContainer = document.querySelector('.content__container')
const openButton = contentContainer.querySelector('button')
const closeButton = popupContainer.querySelector('span')
const main = document.querySelector('main')

main.addEventListener('click', (e) => {
  if(e.target == openButton) {
    popupContainer.style.opacity = '1'
    popupContainer.style.zIndex = '3'
  } else if (e.target == closeButton || e.target == popupContainer) {
    popupContainer.style.opacity = '0'
    setTimeout(() => {
      popupContainer.style.zIndex = '1'
    }, 400) //the opacity has a transition that takes 400ms, so if the z index changes instantly the page content will get on top of the popup making it look bad.
  }
})
