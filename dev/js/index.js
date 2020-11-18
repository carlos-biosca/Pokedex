document.addEventListener('DOMContentLoaded', () => {

  const loadData = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=30&offset=0')
      .then(response => response.json())
      .then(data => renderData(data))
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
        <div class="pokebox__number" id="pokenumber">#${id}</div>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png" alt="pokemon" class="pokebox__img"></div>`
      fragment.appendChild(element)
    })
    main.appendChild(fragment)
  }

  loadData();
})
