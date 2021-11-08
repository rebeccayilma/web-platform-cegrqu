var container = document.querySelector('.play-ground');
var box = document.querySelector('.play-box');
var play = document.querySelector('.play-btn');
var ball = document.querySelector('.ball');

let playing = false;

let startPositionX = box.pageX;
let startPositionY = box.pageY;

function updateDisplay(event) {
  console.log(event.target.className);
  console.log(event.pageX, event.pageY);
}

function startPlay(event) {
  var rect = box.getBoundingClientRect();
  console.log(rect.top, rect.right, rect.bottom, rect.left);
}

function startMoving(event) {
  playing = true;
}

function stopMoving(event) {
  playing = false;
  console.log('faliled, if the current mouse position is out of range');
}

function ballMoving(event) {
  if (playing) {
    ball.style.top = event.pageY + 'px';
    ball.style.left = event.pageX + 'px';
  }
}

box.addEventListener('mousemove', updateDisplay, false);
ball.addEventListener('mouseenter', startMoving, false);
ball.addEventListener('mouseleave', stopMoving, false);

play.addEventListener('click', startPlay, false);

document.addEventListener('mousemove', ballMoving, false);
