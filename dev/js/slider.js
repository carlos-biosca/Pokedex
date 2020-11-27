const buttonModal = document.getElementById('slider-button')
const modal = document.getElementById('modal')
const imageModal = document.getElementById('slider-img')
const form = document.getElementById('radio-group')

const displayModal = () => {
  modal.classList.toggle('isActive')
  buttonModal.classList.toggle('isActive')
  imageModal.classList.toggle('isActive')
}

const optionChange = () => {
  let data = new FormData(form)
  for (let entry of data) {
    return entry[1]
  }
}

const toNodeList = (arrayBoxes) => {
  let fragment = new DocumentFragment()
  arrayBoxes.forEach(box => fragment.appendChild(box))
  return fragment
}

const sortOption = () => {
  const option = optionChange();
  const boxes = Array.from(document.querySelectorAll("#pokebox"))
  switch (option) {
    case 'number':
      sortByNumber(boxes)
      break
    case 'name':
      sortByName(boxes)
      break
    case 'favorites':
      console.log(favorites);
      break
    default:
      console.log(`Esta opción no existe: ${option}`);
      break
  }
  const main = document.getElementById('main')
  const newList = toNodeList(boxes)
  main.appendChild(newList)
  isCardVisible()
}

buttonModal.addEventListener('click', displayModal)
form.addEventListener('change', sortOption)