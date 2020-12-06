document.addEventListener('DOMContentLoaded', () => {
  const data = JSON.parse(localStorage.getItem('pokemonView'))
  const dataImage = localStorage.getItem('imgView');
  let favorites = JSON.parse(localStorage.getItem('favorites'));
  renderInfo(data, dataImage, favorites)
  renderColor(data.types[0].type.name)
})


