const player = document.querySelector('.video-player');
const video = player.querySelector('.video-item');
const videoWrapper = document.querySelector('.video-player-wrapper');
const playerControls = document.querySelector('.player-controls');
const playButtonBig = videoWrapper.querySelector('.play-button');
const playSmall = videoWrapper.querySelector('.player-start');
const playMute = videoWrapper.querySelector('.player-mute');
const progress = videoWrapper.querySelector('.player-position');
const plFullscreen = videoWrapper.querySelector('.player-fullscreen');
const progressVolume = videoWrapper.querySelector('.player-volume');
const progressColors = document.querySelectorAll('.player-range');

for (let item of progressColors) {
    item.addEventListener('input', function () {
        const value = this.value;
        this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`
    });
}


function toggleMute() {
    if (video.volume === 0) {
        progressVolume.value = 50;
        video.volume = 0.5;
        playMute.classList.remove('mute-button-opacity');
        progressVolume.style.background = `linear-gradient(to right, #710707 0%, #710707 50%, #C4C4C4 50%, #C4C4C4 100%)`;
    } else {
        progressVolume.value = 0;
        video.volume = 0;
        playMute.classList.add('mute-button-opacity');
        progressVolume.style.background = `linear-gradient(to right, #710707 0%, #710707 0%, #C4C4C4 0%, #C4C4C4 100%)`;
    }
}

function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
    playButtonBig.classList.toggle('button-opacity');
    playSmall.classList.toggle('play-button-opacity');
}

function playerFull() {
    if (document.fullscreenElement) {
        document.exitFullscreen();
        playerControls.classList.remove('show-full');
    } else {
        videoWrapper.requestFullscreen();
        playerControls.classList.add('show-full');
    }
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progress.value = percent;
    progress.style.background = `linear-gradient(to right, #710707 0%, #710707 ${percent}%, #C4C4C4 ${percent}%, #C4C4C4 100%)`;
}

function move(e) {
    const moveTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = moveTime;

}
function moveVolume(e) {
    video.volume = progressVolume.value / 100;
    if (video.volume === 0) {
        playMute.classList.add('mute-button-opacity');
    } else if (video.volume !== 0) {
        playMute.classList.remove('mute-button-opacity');
    }
}

function keyboard(e) {
    e.preventDefault();
    e.code === 'Space' ? togglePlay() : false;
    e.key === 'f' || e.key === 'а' ? playerFull() : false;
    e.key === 'm' || e.key === 'ь' ? toggleMute() : false;
}


let mousedown = false;
playButtonBig.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);
playSmall.addEventListener("click", togglePlay);
video.addEventListener('timeupdate', handleProgress);
progress.addEventListener('click', move);

progress.addEventListener('mousemove', (e) => mousedown && move(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

progressVolume.addEventListener('click', moveVolume);

progressVolume.addEventListener('mousemove', (e) => mousedown && moveVolume(e));
progressVolume.addEventListener('mousedown', () => mousedown = true);
progressVolume.addEventListener('mouseup', () => mousedown = false);
playMute.addEventListener("click", toggleMute);
plFullscreen.addEventListener("click", playerFull);
videoWrapper.addEventListener('keydown', keyboard);