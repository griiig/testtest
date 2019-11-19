
function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('sange/Fest_i_Danmark/BDK.mp3');
}

function setup() {
  mySound.setVolume(0.8);
  mySound.play();
}