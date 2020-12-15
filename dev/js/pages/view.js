document.addEventListener('DOMContentLoaded', () => {
  const data = JSON.parse(sessionStorage.getItem('pokemonView'))
  renderInfo(data)
  renderColor(data.types[0].type.name)
  renderSections(data)
})


