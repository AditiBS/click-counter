// Elements
const countEl = document.getElementById('count');
const incr = document.getElementById('incr');
const decr = document.getElementById('decr');
const reset = document.getElementById('reset');

// Load from localStorage or start at 0
let count = Number(localStorage.getItem('click-count') || 0);

// Render function
function render() {
  countEl.textContent = count;
  localStorage.setItem('click-count', String(count));
}

// Event listeners
incr.addEventListener('click', () => {
  count += 1;
  render();
});

decr.addEventListener('click', () => {
  count = Math.max(0, count - 1);
  render();
});

reset.addEventListener('click', () => {
  count = 0;
  render();
});

// Keyboard accessibility
document.addEventListener('keydown', (e) => {
  if (e.key === ' ' || e.key === 'Enter') {
    if (
      document.activeElement &&
      ['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)
    )
      return;
    e.preventDefault();
    count += 1;
    render();
  }
});

// Initial render
render();
