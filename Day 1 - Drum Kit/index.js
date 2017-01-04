const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition))
window.addEventListener('keydown', playSound);

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  // If key press does not correspond to audio, break out of function
  if(!audio) return;

  // Play audio
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
}

function removeTransition(e) {
  // Look at transform property
  if(e.propertyName !== 'transform') return;

  //Remove playing class
  this.classList.remove('playing');
}
