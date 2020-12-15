const buttonModal = document.getElementById('slider-button')
const modal = document.getElementById('modal')
const imageModal = document.getElementById('slider-img')
const labels = modal.querySelectorAll('label')

const displayModal = () => {
  modal.classList.toggle('isActive')
  buttonModal.classList.toggle('isActive')
  imageModal.classList.toggle('isActive')
}

buttonModal.addEventListener('click', displayModal)
labels.forEach(label => label.addEventListener('keypress', (e) => {
  if (e.key == 'Enter') {
    document.activeElement.click()
  }
}))
