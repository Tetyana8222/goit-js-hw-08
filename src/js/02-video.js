import Player from '@vimeo/player';
import _throttle from 'lodash.throttle';

const iframeRef = document.querySelector('iframe');
const player = new Player(iframeRef);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';
function onPlay(seconds) {
  localStorage.setItem('videoplayer-current-time', 'seconds');
}

player.on('timeupdate', _throttle(onPlay, 1000));
player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
