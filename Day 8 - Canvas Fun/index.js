const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeSyle = '#bada55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

let isDrawing = false,
    lastX = 0,
    lastY = 0;

// console.log(isDrawing, lastX, lastY)

function draw(e) {
  console.log(e);
}

canvas.addEventListener('mousemove', draw);
