document.addEventListener('DOMContentLoaded', () => {
  const pokemonNumber = 50

  const loadData = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${pokemonNumber}&offset=0`)
      .then(response => response.json())
      .then(data => {
        renderData(data)
        isCardVisible()
        lazy()
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
      let id = (index + 1).toString().padStart(3, '0')
      let name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
      element.innerHTML = `
        <div class="pokebox__name">${name}</div>
        <div class="pokebox__info">
          <div class="pokebox__number">#${id}</div>
          <img src="assets/img/placeholder.png" data-src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png" alt="pokemon" class="pokebox__img lazy">
          <img src="assets/img/pokeball.png" alt="pokeball" class="pokebox__icon">
        </div>`
      fragment.appendChild(element)
    })
    main.appendChild(fragment)
  }

  loadData();
})
