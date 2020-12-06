const form = document.getElementById('radio-group')

const sortByNumber = (boxes) => {
  boxes.sort((a, b) => {
    if (a.firstElementChild.innerHTML > b.firstElementChild.innerHTML) {
      return 1
    }
    if (a.firstElementChild.innerHTML < b.firstElementChild.innerHTML) {
      return -1
    }
    return 0
  })
}

const sortByName = (boxes) => {
  boxes.sort((a, b) => {
    if (a.lastElementChild.innerHTML > b.lastElementChild.innerHTML) {
      return 1
    }
    if (a.lastElementChild.innerHTML < b.lastElementChild.innerHTML) {
      return -1
    }
    return 0
  })
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
    default:
      console.log(`Esta opción no existe: ${option}`);
      break
  }
  const main = document.getElementById('main')
  const newList = toNodeList(boxes)
  main.appendChild(newList)
  isCardVisible()
}

form.addEventListener('change', sortOption)
