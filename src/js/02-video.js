import Vimeo from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('play', function () {
  consolele.log('play the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title: ', title);
});

const onPlay = function (data) {};
player.on('play', onPlay);

const playTime = document.addEventListener('timeupdate', onPlay);

function storageFormData() {
  localStorage.setItem(onPlay, throttle(playTime, 1000));
}
