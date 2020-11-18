const boxes = document.querySelectorAll("#pokebox");

function isElementInViewport (el) {
  const rect = el.getBoundingClientRect();
  console.log(rect);
  return (
    rect.top >= 120 &&
    rect.bottom <=
    (window.innerHeight || document.documentElement.clientHeight)
  );
}

function isCardVisible () {
  for (let box of boxes) {
    isElementInViewport(box)
      ? box.classList.add("isVisible")
      : box.classList.remove("isVisible");
  }
}

document.addEventListener("DOMContentLoaded", isCardVisible);
window.addEventListener("scroll", isCardVisible);
window.addEventListener("resize", isCardVisible);
