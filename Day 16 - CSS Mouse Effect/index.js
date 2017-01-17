const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 100; //100 px;

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = this;
  let { offsetX: x, offsetY: y } = e;

  if (this !== e.target) {
    x += e.target.offsetLeft;
    y += e.target.offsetTop;
  }

  console.log(x, y);
}

hero.addEventListener('mousemove', shadow);
