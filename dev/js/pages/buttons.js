const arrow = document.getElementById('icon-arrow')
const heart = document.getElementById('icon-heart')

const removeElement = (array, elem) => {
  const index = array.indexOf(elem);
  if (index > -1) {
    array.splice(index, 1);
  }
}

arrow.addEventListener('click', () => {
  window.location = "index.html"
})

heart.addEventListener('click', (e) => {
  const name = e.target.parentElement.nextElementSibling.firstElementChild.firstElementChild.firstElementChild.innerHTML
  let favorites = JSON.parse(localStorage.getItem('favorites'))
  if (e.target.classList.contains('isActive')) {
    removeElement(favorites, name)
  } else {
    favorites.push(name)
  }
  localStorage.setItem('favorites', JSON.stringify(favorites))
  e.target.classList.toggle('isActive')
})