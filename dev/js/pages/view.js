document.addEventListener('DOMContentLoaded', () => {
  const data = JSON.parse(localStorage.getItem('pokemon'))
  var dataImage = localStorage.getItem('imgData');
  renderData(data, dataImage)
})

const renderData = (data, dataImage) => {
  console.log(data)
  renderInfo(data, dataImage)
  renderColor(data.types[0].type.name)
}

