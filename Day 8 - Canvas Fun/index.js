const header = document.querySelector('.top-header');
const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = document.body.clientWidth - 30;
canvas.height = document.body.scrollHeight - header.clientHeight - 20;
ctx.strokeStyle="#bada55";
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;
ctx.globalCompositeOperation = 'xor'

let isDrawing = false,
    direction = true,
    lastX     = 0,
    lastY     = 0
    hue       = 0;

function draw(e) {
  if(!isDrawing) return;

  ctx.strokeStyle = `hsl(${hue}, 40%, 60%)`;

  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();

  [lastX, lastY] = [e.offsetX, e.offsetY];

  hue += 2;
  if(hue >=360) hue = 0;

  if(ctx.lineWidth >= 100 || ctx.lineWidth <= 1) direction = !direction;
  if(direction)  ctx.lineWidth++;
  if(!direction) ctx.lineWidth--;
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mouseup',   () => isDrawing = false);
canvas.addEventListener('mouseout',  () => isDrawing = false);
