const timeNodes = Array.from(document.querySelectorAll('[data-time]'));
const seconds = timeNodes
  .map(node => node.dataset.time)
  .map(timeStr => {
    const [mins, secs] = timeStr.split(':').map(parseFloat);
    return mins * 60 + secs;
  })
  .reduce((total, seconds) => total + seconds);

let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = seconds % 3600;
const minutes = Math.floor(secondsLeft / 60);
secondsLeft = seconds % 60;

console.log(`${hours}hrs ${minutes}mins ${secondsLeft}secondsLeft`);
