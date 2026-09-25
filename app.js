// Lógica interactiva del contador
let count = 0;

const counterElement = document.getElementById('counter');
const btnIncrement = document.getElementById('btn-increment');
const btnDecrement = document.getElementById('btn-decrement');
const btnReset = document.getElementById('btn-reset');

function updateDisplay() {
  counterElement.textContent = count;
}

btnIncrement.addEventListener('click', () => {
  count++;
  updateDisplay();
});

btnDecrement.addEventListener('click', () => {
  count--;
  updateDisplay();
});

btnReset.addEventListener('click', () => {
  count = 0;
  updateDisplay();
});
