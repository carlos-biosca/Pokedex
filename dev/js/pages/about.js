const loadAbout = (data) => {
  const { species, weight, height, abilities } = data

  let concatAbilities = (array) => {
    const list = document.createElement('ul')
    array.forEach(item => {
      let ability = document.createElement('li')
      ability.innerHTML = item.ability.name
      list.appendChild(ability)
    })
    document.getElementById('abilities').appendChild(list)
  }

  document.getElementById('species').innerHTML = species.name
  document.getElementById('height').innerHTML = height * 10 + "cm"
  document.getElementById('weight').innerHTML = weight / 10 + "kg"
  concatAbilities(abilities)

  const loadSpecies = (url) => {
    fetch(`${url}`)
      .then(response => response.json())
      .then(data => {
        document.getElementById('color').innerHTML = data.color.name
        const flavorText = document.createElement('p')
        const entry = Math.floor(Math.random() * 10)
        flavorText.innerHTML = data.flavor_text_entries[entry].flavor_text
        document.getElementById('flavor text').appendChild(flavorText)
      })
      .catch((err) => console.log(err));
  }
  loadSpecies(species.url)
}