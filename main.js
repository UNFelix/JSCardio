const paragraphs = document.getElementsByTagName('p')
colorChange(paragraphs)
assignHoverHandlers(paragraphs, decideAndSetNewColor)

function assignHoverHandlers(elements, handler){
  for (const el of elements) {
     el.addEventListener('mouseover', handler)
  }
}

function chooseOneOf(many){
  if (typeof many == 'number'){
    return Math.floor(Math.random() * many)
  } else {
    return many[Math.floor(Math.random() * many.length)]
  }
}

function decideAndSetNewColor(e){
  const el = e.target
  const colors = []
  colors.push(getRandomRgb())
  if (el.nextElementSibling){
    colors.push(el.nextElementSibling.style.color)
  }
  if (el.previousElementSibling){
    colors.push(el.previousElementSibling.style.color)
  }
  el.style.color = chooseOneOf(colors)
}

function colorChange(elements){
  for (const el of elements) {
    el.style.color = getRandomRgb()
  }
}

function getRandomRgb() {
  var num = Math.round(0xffffff * Math.random());
  var r = num >> 16;
  var g = num >> 8 & 255;
  var b = num & 255;
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}


// function sum(a, b) {
//   return a + b;
// }

// sum2 = function (a, b) {
//   return a + b;
// };

// sum3 = (a, b) => a + b;

// function sub(a, b) {
//   return a - b;
// }

// function mult(a, b) {
//   return a * b;
// }

// function div(a, b) {
//   return a / b;
// }

// function pow(a, b) {
//   return a ** b;
// }

// sqrt = function sqrt(a) {
//   return a ** 0.5;
// };

// inc2 = (a) => sum(a, 2);

// double = (a) => mult(a, 2);

// triple = (a) => mult(a, 3);

// bracket = (a) => "[" + a + "]";

// invert = (a) => -a;

// pipe = (a, ...fns) => {
//   for (let i = 0; i < fns.length; i++) {
//     a = fns[i](a);
//   }
//   return a;
// };

// timesX = (x) => {
//   return (a) => mult(a, x);
// };

// sumCurry = (a) => {
//   return (b) => (c) => (d) => sumX(a, b, c, d);
// };

// quadruple = timesX(4);

// sumX = (...nums) => {
//   let total = 0;
//   for (let i = 0; i < nums.length; i++) {
//     total = total + nums[i];
//   }
//   return total;
// };

// calc = (fn, ...args) => fn(...args);
// console.log(calc(sumX, 2, 3, 6, 9));

// let cardBalance = 500;
// const phonePrice = 99;
// const fee = 8;
// const accessories = 10;

// calcTotal = function calcTotal() {
//   let totalPrice = 0;
//   const setPrice = phonePrice + fee + accessories;
//   if (setPrice <= cardBalance) {
//     while (totalPrice + setPrice <= cardBalance) {
//       totalPrice += setPrice;
//     }
//     return "thanks, your purchase cost " + "$" + totalPrice + " bye";
//   } else {
//     return "You have no money, go away!";
//   }
// };



// console.log(calcTotal());

// debugger;

// (4 + 6 / 2 - 7 * V4) ** 3;
// pow(sub(sum(4, div(6, 2)), mult(7, sqrt(4))), 3);

// console.log((4 + 6 / 2 - 7 * 2) ** 3);
// console.log(pow(sub(sum(4, div(6, 2)), mult(7, sqrt(4))), 3));
