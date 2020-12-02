const getBase64Image = (img) => {
  const canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;

  const ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);

  const dataURL = canvas.toDataURL("image/png");

  return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}

const loadImage = (img) => {
  const imgData = getBase64Image(img);
  localStorage.setItem("imgData", imgData);
}

const loadPokemon = (url) => {
  fetch(`${url}`)
    .then(response => response.json())
    .then(data => {
      localStorage.setItem("pokemon", JSON.stringify(data))
    })
    .then(() => {
      window.location = "view.html"
    })
    .catch((err) => console.log(err));
}

const getLinks = () => {
  const links = document.querySelectorAll('.pokebox__img')
  links.forEach(link => link.addEventListener('click', (e) => {
    loadPokemon(e.target.dataset.url)
    loadImage(e.target);
  }))
}
