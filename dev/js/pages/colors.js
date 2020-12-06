const colors = {
  normal: '#a8a878',
  fire: '#f08030',
  fighting: '#c03028',
  grass: '#78c850',
  electric: '#f8d030',
  water: '#6890f0',
  ground: '#e0c069',
  rock: '#b8a038',
  fairy: '#fceaff',
  poison: '#a040a0',
  bug: '#a8b820',
  dragon: '#6f38f8',
  psychic: '#f85888',
  flying: '#a890f0',
  ice: '#b8a038',
  ghost: '#705898',
  dark: '#715848',
  steel: '#b8b8d0'
}

const renderColor = (type) => {
  const color = colors[type]
  const top = document.getElementById('top-icons')
  const main = document.getElementById('main')
  top.style.backgroundColor = color
  main.style.backgroundColor = color
}

