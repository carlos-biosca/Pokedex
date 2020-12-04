// const colors = {
//   fire: '#FDDFDF',
//   grass: '#DEFDE0',
//   electric: '#FCF7DE',
//   water: '#DEF3FD',
//   ground: '#f4e7da',
//   rock: '#d5d5d4',
//   fairy: '#fceaff',
//   poison: '#98d7a5',
//   bug: '#f8d5a3',
//   dragon: '#97b3e6',
//   psychic: '#eaeda1',
//   flying: '#F5F5F5',
//   fighting: '#E6E0D4',
//   normal: '#F5F5F5',
//   ice: '#b8a038',
//   ghost: '#705898',
//   dark: '#715848',
//   steel: '#b8b8d0'
// };

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

