const inputValue = document.getElementById('search')
const mainContent = document.getElementById('main-content')

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