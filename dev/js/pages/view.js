document.addEventListener('DOMContentLoaded', () => {
  const data = JSON.parse(localStorage.getItem('pokemon'))
  var dataImage = localStorage.getItem('imgData');
  renderData(data, dataImage)
})

const renderData = (data, dataImage) => {
  const name = document.getElementById('pokename')
  name.innerHTML = data.name
  const loadImg = document.getElementById('pokeimg');
  loadImg.src = "data:image/png;base64," + dataImage;
}

