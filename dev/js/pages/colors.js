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

const LightenDarkenColor = (color, percent) => {
  let usePound = false;
  if (color[0] == "#") {
    color = color.slice(1);
    usePound = true;
  }
  let num = parseInt(color, 16);
  let r = (num >> 16) + percent;
  if (r > 255) r = 255;
  else if (r < 0) r = 0;
  let b = ((num >> 8) & 0x00FF) + percent;
  if (b > 255) b = 255;
  else if (b < 0) b = 0;
  let g = (num & 0x0000FF) + percent;
  if (g > 255) g = 255;
  else if (g < 0) g = 0;
  return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
}

const renderColor = (type) => {
  const color = colors[type]
  const top = document.getElementById('top-icons')
  const main = document.getElementById('main')
  const spans = document.getElementById('basicinfo').querySelectorAll('span')
  top.style.backgroundColor = color
  main.style.backgroundColor = color
  spans.forEach(span => {
    span.style.backgroundColor = LightenDarkenColor(color, 80)
  })
}

