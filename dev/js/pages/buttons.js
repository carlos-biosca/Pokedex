const arrow = document.getElementById('icon-arrow')
const heart = document.getElementById('icon-heart')

arrow.addEventListener('click', () => {
  window.history.back()
})

heart.addEventListener('click', (e) => {
  console.log(e.target);
})