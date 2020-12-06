const paintFavorites = (favorites) => {
  console.log(favorites);
  const names = document.querySelectorAll('#pokename')
  names.forEach(name => {
    const index = favorites.indexOf(name.innerHTML.toLowerCase())
    if (index !== -1) {
      name.classList.add('isFavorite')
    } else {
      name.classList.remove('isFavorite')
    }
  })
}

const checkFavorites = () => {
  if (localStorage.getItem('favorites')) {
    let favorites = JSON.parse(localStorage.getItem('favorites'));
    paintFavorites(favorites)
  } else {
    let favorites = []
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }
}