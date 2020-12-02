const buttonModal = document.getElementById('slider-button')
const modal = document.getElementById('modal')
const imageModal = document.getElementById('slider-img')

const displayModal = () => {
  modal.classList.toggle('isActive')
  buttonModal.classList.toggle('isActive')
  imageModal.classList.toggle('isActive')
}

buttonModal.addEventListener('click', displayModal)
