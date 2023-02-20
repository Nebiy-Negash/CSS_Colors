import { namedColors } from './colors.js';

const btn = document.querySelector('.btn');
const colorName = document.querySelector('.color-name');

function namedColor() {
  const randomColor = Math.floor(Math.random() * namedColors.length);
  document.body.style.backgroundColor = namedColors[randomColor];
  colorName.textContent = namedColors[randomColor];
}

btn.addEventListener('click', namedColor);
