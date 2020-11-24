const inputValue = document.getElementById('search')

const filterNames = () => {
  const value = inputValue.value.toUpperCase()
  const boxes = document.querySelectorAll("#pokebox")
  boxes.forEach(box => {
    const name = box.firstElementChild.innerHTML;
    if (name.toUpperCase().indexOf(value) > -1) {
      box.style.display = ''
    } else {
      box.style.display = 'none'
    }
  })
}

inputValue.addEventListener('keyup', filterNames)
inputValue.addEventListener('keyup', isCardVisible)