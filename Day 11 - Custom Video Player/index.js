const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const volume = player.querySelector('.player__slider');
const playback = player.querySelector('.playback')

function togglePlay() {
  video[video.paused ? 'play' : 'pause']();
}

function updateButton() {
  toggle.textContent = this.paused ? '►' : '❚ ❚';
}

function skip(amt) {
  if (amt) {
    video.currentTime += amt;
  } else {
    video.currentTime += parseFloat(this.dataset.skip);
  }
}

function handleVolume() {
  video.volume = this.value;
}

function handlePlaybackRate() {
  video.playbackRate = this.value;
}

function handleKeyboard(e) {
  switch(e.keyCode) {
    case 32:
      togglePlay();
      break;
    case 39:
      skip(10);
      break;
    case 37:
      skip(-10);
      break;
  }
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

window.addEventListener('keydown', handleKeyboard);

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress)

volume.addEventListener('change', handleVolume);
toggle.addEventListener('click', togglePlay);
playback.addEventListener('change', handlePlaybackRate);
skipButtons.forEach(button => button.addEventListener('click', skip))

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
