document.addEventListener('DOMContentLoaded', () => {
  const pokemonNumber = 100

  const loadData = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${pokemonNumber}&offset=0`)
      .then(response => response.json())
      .then(data => {
        renderData(data)
        filterNames()
        sortOption()
        lazy()
        getLinks()
        checkFavorites()
      })
      .catch((err) => console.log(err));
  }

  const renderData = (data) => {
    const main = document.getElementById('main')
    let fragment = new DocumentFragment()
    data.results.forEach((pokemon, index) => {
      let element = document.createElement('div')
      element.classList.add('pokebox')
      element.id = 'pokebox'
      element.tabIndex = 0
      let id = (index + 1).toString().padStart(3, '0')
      let name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
      element.innerHTML = `
      <div class="pokebox__number">#${id}</div>
      <img crossorigin="anonymous" src="assets/img/placeholder.png" data-src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png" alt="pokemon" class="pokebox__img lazy" data-url="${pokemon.url}" >
      <img src="assets/img/pokeball.png" alt="pokeball" class="pokebox__icon">
      <div class="pokebox__name" id="pokename">${name}</div>`
      fragment.appendChild(element)
    })
    main.appendChild(fragment)
  }

  loadData();
})

