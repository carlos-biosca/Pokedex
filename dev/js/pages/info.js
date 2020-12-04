const renderInfo = (data, dataImage) => {
  const name = document.getElementById('pokename')
  name.innerHTML = data.name
  const number = document.getElementById('pokenumber')
  number.innerHTML = "#" + data.id.toString().padStart(3, '0')
  const types = document.getElementById('basicinfo')
  for (let type of data.types) {
    let span = document.createElement('span')
    span.innerHTML = type.type.name
    types.appendChild(span)
  }
  const loadImg = document.getElementById('pokedataimg');
  loadImg.src = "data:image/png;base64," + dataImage;
}