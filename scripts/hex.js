import { hexColors } from './colors.js';

const btn = document.querySelector('.btn');
const hex = document.querySelector('.color-hex');

function hexColor() {
  const randomColor = Math.floor(Math.random() * hexColors.length);
  document.body.style.backgroundColor = hexColors[randomColor];
  hex.textContent = hexColors[randomColor];
}
btn.addEventListener('click', hexColor);
