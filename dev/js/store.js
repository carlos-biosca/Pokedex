const getBase64Image = (img) => {
  const canvas = document.createElement("canvas");
  canvas.width = 470;
  canvas.height = 470;

  const ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);

  const dataURL = canvas.toDataURL("image/png");

  return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}

const loadImage = (img) => {
  const imgData = getBase64Image(img);
  sessionStorage.setItem("imgView", imgData);
}

const loadPokemon = (url) => {
  fetch(`${url}`)
    .then(response => response.json())
    .then(data => {
      sessionStorage.setItem("pokemonView", JSON.stringify(data))
    })
    .then(() => {
      window.location = "view.html"
    })
    .catch((err) => console.log(err));
}

const loadFilters = () => {
  sessionStorage.setItem("input", JSON.stringify(inputValue.value))
  const option = optionChange();
  sessionStorage.setItem("option", JSON.stringify(option))
  sessionStorage.setItem("favoritesOn", JSON.stringify(favoritesOn))
}

const loadInfo = (e) => {
  loadImage(e.target.children[1]);
  loadPokemon(e.target.dataset.url)
  loadFilters()
}

const getLinks = () => {
  const links = document.querySelectorAll('.pokebox')
  links.forEach(link => link.addEventListener('click', (e) => {
    loadInfo(e)
  }))
  links.forEach(link => link.addEventListener('keypress', (e) => {
    if (e.key == 'Enter') {
      loadInfo(e)
    }
  }))
}
