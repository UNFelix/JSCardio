const toggler = document.getElementsByClassName('toggler')[0]
toggler.onclick = () => toggler.classList.toggle('on')


const paragraphs = document.getElementsByTagName('p')
paintP(paragraphs)
hoverHandler(paragraphs, rewriteColor)

function paintP(elements) {
  for (const el of elements) {
    el.style.color = getRandomRgb()
  }
}

function hoverHandler(elements, handler){
  for (const el of elements) {
    el.addEventListener('mouseover', handler)
  }
}

function oneOf(many) {
  return many[Math.floor(Math.random() * many.length)]
}

function rewriteColor(e) {
  const el = e.target
  colors = []
  colors.push(getRandomRgb())
  if (el.previousElementSibling) {
    colors.push(el.previousElementSibling.style.color)
  }
  if (el.nextElementSibling) {
    colors.push(el.nextElementSibling.style.color)
  }
  el.style.color = oneOf(colors)
}

function getRandomRgb() {
  var num = Math.round(0xffffff * Math.random());
  var r = num >> 16;
  var g = num >> 8 & 255;
  var b = num & 255;
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}