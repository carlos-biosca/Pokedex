const inputValue = document.getElementById('search')
const modalFavorites = document.getElementById('favorites')
const mainContent = document.getElementById('main-content')


const filterFavorites = (e) => {
  e.target.classList.toggle('isActive')
  const boxes = document.querySelectorAll("#pokebox")
  if (e.target.classList.contains('isActive')) {
    boxes.forEach(box => {
      box.lastElementChild.classList.contains("isFavorite") ? box.style.display = 'block' : box.style.display = 'none';
    })
    e.target.innerHTML = 'ON'
  } else {
    boxes.forEach(box => box.style.display = 'block')
    e.target.innerHTML = 'Favorites'
  }
  isCardVisible()
  mainIsEmpty(boxes)
}

const filterNames = () => {
  const value = inputValue.value.toUpperCase()
  const boxes = document.querySelectorAll("#pokebox")
  boxes.forEach(box => {
    const name = box.lastElementChild.innerHTML
    const number = box.firstElementChild.innerHTML
    if (name.toUpperCase().indexOf(value) > -1 || number.indexOf(value) > -1) {
      box.style.display = 'block'
    } else {
      box.style.display = 'none'
    }
  })
  isCardVisible()
  mainIsEmpty(boxes)
}

const mainIsEmpty = (boxes) => {
  let display = 0
  boxes.forEach((box) => {
    box.classList[1] == 'isNotVisible' ? '' : display++
  })
  if (display === 0) {
    mainContent.classList.add('empty')
  }
  if (display > 0) {
    mainContent.classList.remove('empty')
  }
}

inputValue.addEventListener('keyup', filterNames)
modalFavorites.addEventListener('click', (e) => filterFavorites(e))