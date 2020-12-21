document.addEventListener('DOMContentLoaded', () => {
  const pokemonNumber = 151

  const checkValues = () => {
    if (JSON.parse(sessionStorage.getItem("input"))) {
      inputValue.value = JSON.parse(sessionStorage.getItem("input"))
    } else {
      inputValue.value == ''
    }
    if (JSON.parse(sessionStorage.getItem("option"))) {
      const option = JSON.parse(sessionStorage.getItem("option"))
      document.querySelector(`#${option}`).checked = true
    } else {
      return
    }
    if (JSON.parse(sessionStorage.getItem("favoritesOn"))) {
      favoritesOn = !favoritesOn
      modalFavorites.classList.toggle('isActive')
      modalFavorites.innerHTML = 'ON'
    }
  }

  const loadData = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${pokemonNumber}&offset=0`)
      .then(response => response.json())
      .then(data => {
        renderData(data)
        checkValues()
        checkFavorites()
        filterNames()
        sortOption()
        lazy()
        getLinks()
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
      element.dataset.url = pokemon.url
      let id = (index + 1).toString().padStart(3, '0')
      let name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
      element.innerHTML = `
      <div class="pokebox__number">#${id}</div>
      <img crossorigin="anonymous" data-src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png" alt="" class="pokebox__img lazy">
      <img src="assets/img/pokeball.png" alt="" class="pokebox__icon">
      <div class="pokebox__name" id="pokename">${name}</div>`
      fragment.appendChild(element)
    })
    main.appendChild(fragment)
  }

  loadData();
})

