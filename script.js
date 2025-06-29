// DVD bouncing effect
const dvd = document.getElementById('dvd-logo');
let x = 100, y = 100;
let dx = 2, dy = 2;

const updatePosition = () => {
  const box = dvd.parentElement.getBoundingClientRect();
  const w = dvd.offsetWidth;
  const h = dvd.offsetHeight;

  x += dx;
  y += dy;

  if (x + w >= box.width || x <= 0) dx = -dx;
  if (y + h >= box.height || y <= 0) dy = -dy;

  dvd.style.left = x + 'px';
  dvd.style.top = y + 'px';

  requestAnimationFrame(updatePosition);
};

updatePosition();

// Clock
function updateClock() {
  const now = new Date();
  const options = {
    timeZone: 'Europe/Amsterdam',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };
  document.getElementById('clock').innerText =
    now.toLocaleTimeString('nl-NL', options);
}

setInterval(updateClock, 1000);
updateClock();
