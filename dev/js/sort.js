const sortByNumber = (boxes) => {
  boxes.sort((a, b) => {
    if (a.lastElementChild.firstElementChild.innerHTML > b.lastElementChild.firstElementChild.innerHTML) {
      return 1
    }
    if (a.lastElementChild.firstElementChild.innerHTML < b.lastElementChild.firstElementChild.innerHTML) {
      return -1
    }
    return 0
  })
}

const sortByName = (boxes) => {
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