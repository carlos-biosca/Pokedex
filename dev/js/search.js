const inputValue = document.getElementById('search')
const modalFavorites = document.getElementById('favorites')
const mainContent = document.getElementById('main-content')
let favoritesOn = false

const filterNames = () => {
  const value = inputValue.value.toUpperCase()
  const boxes = document.querySelectorAll("#pokebox")
  boxes.forEach(box => {
    const name = box.lastElementChild.innerHTML
    const number = box.firstElementChild.innerHTML
    if (name.toUpperCase().indexOf(value) > -1 || number.indexOf(value) > -1) {
      if (favoritesOn) {
        box.lastElementChild.classList.contains("isFavorite") ? box.style.display = 'block' : box.style.display = 'none';
      } else {
        box.style.display = 'block'
      }
    } else {
      box.style.display = 'none'
    }
  })
  isCardVisible()
  mainIsEmpty(boxes)
  sessionStorage.setItem("input", JSON.stringify(inputValue.value))
}

const filterFavorites = () => {
  const boxes = document.querySelectorAll("#pokebox")
  if (modalFavorites.classList.contains('isActive')) {
    boxes.forEach(box => {
      box.lastElementChild.classList.contains("isFavorite") ? box.style.display = 'block' : box.style.display = 'none';
    })
    modalFavorites.innerHTML = 'ON'
  } else {
    boxes.forEach(box => box.style.display = 'block')
    modalFavorites.innerHTML = 'OFF'
  }
  isCardVisible()
  mainIsEmpty(boxes)
}

const mainIsEmpty = (boxes) => {
  mainContent.classList.add('empty')
  for (let box of boxes) {
    if (box.style.display == 'block') {
      mainContent.classList.remove('empty')
      break
    }
  }
}

inputValue.addEventListener('keyup', filterNames)
modalFavorites.addEventListener('click', () => {
  favoritesOn = !favoritesOn
  modalFavorites.classList.toggle('isActive')
  filterFavorites()
  sessionStorage.setItem("favoritesOn", JSON.stringify(favoritesOn))
})