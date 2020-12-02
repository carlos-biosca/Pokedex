const isElementInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  // console.log(rect);
  return (
    rect.top >= 120 &&
    rect.bottom <=
    (window.innerHeight || document.documentElement.clientHeight)
  );
}

const isCardVisible = () => {
  const boxes = document.querySelectorAll("#pokebox");
  for (let box of boxes) {
    isElementInViewport(box)
      ? box.classList.remove("isNotVisible")
      : box.classList.add("isNotVisible");
  }
}

const scrollOn = () => {
  const gotop = document.getElementById('gotop');
  if (window.pageYOffset > 300) {
    gotop.classList.add('scrollOn')
  } else {
    gotop.classList.remove('scrollOn')
  }
  isCardVisible()
}

window.addEventListener("scroll", scrollOn);
window.addEventListener("resize", isCardVisible);
