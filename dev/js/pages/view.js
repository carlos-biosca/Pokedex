document.addEventListener('DOMContentLoaded', () => {
  const data = JSON.parse(localStorage.getItem('pokemonView'))
  renderInfo(data)
  renderColor(data.types[0].type.name)
  renderSections(data)
})


