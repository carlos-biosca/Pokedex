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
  const color = getComputedStyle(document.documentElement)
    .getPropertyValue(`--${type}-color`).trim();
  const spans = document.getElementById('basicinfo').querySelectorAll('span')
  document.getElementById('top-block').style.backgroundColor = color
  document.getElementById('tap-bar').style.backgroundColor = color
  spans.forEach(span => {
    span.style.backgroundColor = LightenDarkenColor(color, 80)
  })
}

