import { AppState, audio } from './storage';

export function audioOnload() {  
  handleAudio();
  document.removeEventListener('click', audioOnload);
}

export function handleAudio() {
  if (AppState.audio) {
    audio.play();
  } else {
    audio.pause();
    audio.currentTime = 0;
  }
}
