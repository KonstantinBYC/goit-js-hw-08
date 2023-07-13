import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const vimeo = document.getElementById('vimeo-player');
const player = new Vimeo(vimeo);
// const player = new Vimeo.Player(iframe);

const throtTimeUpdate = throttle(seconds => {
  localStorage.setItem('videoplayer-current-time', seconds);
}, 1000);

player.on('timeupdate', function (data) {
  throtTimeUpdate(data.seconds);
});

const passedTime = localStorage.getItem('videoplayer-current-time');

if (passedTime) {
  player.setCurrentTime(passedTime);
}

// player.on('play', function () {
//   consolele.log('play', onPlay);
// });

// player.getVideoTitle().then(function (title) {
//   console.log('title: ', title);
// });

// const onPlay = function (data) {};
// player.on('play', onPlay);
