const clockDigitalNumeric = document.querySelector('.time');
const dateAdditional = document.querySelector('.date');


const greetingMessage = document.querySelector('.greeting');
const userName = document.querySelector('.name');

const body = document.querySelector('body');
const leftArrow = document.querySelector('.slide-prev');
const rightArrow = document.querySelector('.slide-next');
let randomNum;

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const city = document.querySelector('.city');
const weatherError = document.querySelector('.weather-error');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');

const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuote = document.querySelector('.change-quote');

const settingsButton = document.querySelector('.open-settings');
const settings = document.querySelector('.settings');

const play = document.querySelector('.play');
const playPrev = document.querySelector('.play-prev');
const playNext = document.querySelector('.play-next');
const playListContainer = document.querySelector('.play-list');
let playListCurrent;
let playListCurrentButtons;

const trackName = document.querySelector('.track-name');
const playerVolume = document.querySelector('.player-volume');
const muteButton = document.querySelector('.mute');
const playbackInfo = document.querySelector('.playback-info');
const playerProgress = document.querySelector('.player-progress');
const playbackDuration = document.querySelector('.playback-duration');

let isPlayed = false;

let playNum = 0;

const state = {
    language: 'en',
    photoSource: 'github',
    blocks: ['time', 'date', 'greeting', 'quote', 'weather', 'audio', 'todolist']
}


const playList = [
    {
        title: 'Aqua Caelestis',
        src: './assets/sounds/Aqua Caelestis.mp3',
        duration: '00:39'
    },
    {
        title: 'River Flows In You',
        src: './assets/sounds/River Flows In You.mp3',
        duration: '01:37'
    },
    {
        title: 'Ennio Morricone',
        src: './assets/sounds/Ennio Morricone.mp3',
        duration: '01:37'
    },
    {
        title: 'Summer Wind',
        src: './assets/sounds/Summer Wind.mp3',
        duration: '01:50'
    }
];


playList.forEach(elem => {
    const li = document.createElement('li');
    li.classList.add('play-item');
    const span = document.createElement('span');
    span.textContent = elem.title;

    const button = document.createElement('button');
    button.classList.add("play-alternative","player-icon");
    //li.textContent = elem.title;
    li.append(button);
    //li.innerHTML += span;
    li.append(span);
    playListContainer.append(li);
    playListCurrent = playListContainer.querySelectorAll('.play-item');
    playListCurrentButtons = playListContainer.querySelectorAll('button');
  });

for (let i=0; i<playListCurrent.length; i++) {
    playListCurrent[i].addEventListener("click", ()=>{

        playListCurrentButtons[playNum].classList.remove('play-pause');
        if (playNum !== i) {   
        playNum = i;
        audio.src = playList[playNum].src;
        //updateTrackData();
        audio.currentTime = 0;//
        isPlayed = false;
    }

        
        playAudio();
    });
}
  /* playListCurrent.forEach(item=>{
      item.addEventListener("click", handleTrack);
  }); */
  /* function handleTrack() {
   
    console.log('this ',i);
  } */
  console.log('buttons ',playListCurrentButtons);




function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    clockDigitalNumeric.textContent = currentTime;
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    const currentDate = date.toLocaleDateString('eng', options);//check utc
    dateAdditional.textContent = currentDate;
    setTimeout(showTime, 1000);
    showGreeting();
}

function getTimeOfDay() {
    const hours = new Date().getHours();
    if (hours < 6) {
        return ('night');
    } else if (hours >= 6 && hours < 12) {
        return ('morning');
    } else if (hours >= 12 && hours < 18) {
        return ('afternoon');
    } else if (hours >= 18) {
        return ('evening');
    }
}

function showGreeting() {
    let greetingText = `Good ${getTimeOfDay()} `;
    greetingMessage.textContent = greetingText;
}

function setLocalStorage() {
    localStorage.setItem('user-name', userName.value);
    localStorage.setItem('city', city.value);
}

window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
    if (localStorage.getItem('user-name')) {
        userName.value = localStorage.getItem('user-name');
    }
    if (localStorage.getItem('city')) {
        city.value = localStorage.getItem('city');
        getWeather();
    } else {
        city.value = 'Минск';
        getWeather();
    }
}

window.addEventListener('load', getLocalStorage);

function getRandomNum() {
    randomNum = Math.ceil(Math.random() * 20);
}

function setBg() {
    let timeOfDay = getTimeOfDay();
    let bgNum = randomNum.toString().padStart(2, "0");
    let backgroundUrl = `https://raw.githubusercontent.com/tlkv/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
    const img = new Image();
    img.src = backgroundUrl;
    img.onload = () => {
        body.style.backgroundImage = `url(${backgroundUrl})`;
    };
}


function slidePrev() {
    (randomNum > 1) ? randomNum-- : randomNum = 20;
    setBg();
}

leftArrow.addEventListener("click", slidePrev);


function slideNext() {
    (randomNum < 20) ? randomNum++ : randomNum = 1;
    setBg();
}

rightArrow.addEventListener("click", slideNext);


async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=14b1122e0d41606b798245fa03a0c744&units=metric`;

    const res = await fetch(url);
    if (res.status === 200) {
        const data = await res.json();
        /* if (data) {  */
        weatherError.classList.add('hide');
        [weatherDescription, temperature, weatherIcon, wind, humidity].forEach(item => {
            item.classList.remove('hide');
        });


        weatherIcon.className = 'weather-icon owf';
        weatherIcon.classList.add(`owf-${data.weather[0].id}`);
        temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
        wind.textContent = `Wind: ${data.wind.speed.toFixed(0)} m/s`;
        humidity.textContent = `Humidity: ${data.main.humidity.toFixed(0)}%`;
        weatherDescription.textContent = data.weather[0].description;
        /* }
        else {            
            weatherError.classList.remove('hide');
            [ weatherDescription, temperature, weatherIcon].forEach(item=>{
                item.classList.add('hide');
            });
        } */
    }
    else {
        weatherError.classList.remove('hide');
        [weatherDescription, temperature, weatherIcon, wind, humidity].forEach(item => {
            item.classList.add('hide');
        });
    }
}

function setCity(event) {
    if (event.code === 'Enter') {
        getWeather();
        city.blur();
    }
}

city.addEventListener('keypress', setCity);

async function getQuotes() {


    const url = `https://favqs.com/api/qotd`;

    const res = await fetch(url);
    if (res.status === 200) {
        const data = await res.json();
        quote.innerHTML = data.quote.body;
        author.textContent = data.quote.author;
    }
    else {
        quote.textContent = "Ошибка при загрузке цитат";
        author.textContent = "";
    }
}

changeQuote.addEventListener('click', getQuotes);


const audio = new Audio();
audio.src = playList[playNum].src;
audio.volume = 0.5;
trackName.textContent = playList[playNum].title;
playbackDuration.textContent = '/ '+playList[playNum].duration;
playbackInfo.textContent = '00:00';

function playAudio() {
    console.log('src ', playNum);
    console.log('container', playListContainer);
    updateTrackData();

    if (!isPlayed) {
        /* audio.currentTime = 0; */
        audio.play();
        isPlayed = true;
        play.classList.add("pause");
        playListCurrentButtons[playNum].classList.add('play-pause');
    } else {
        audio.pause();
        isPlayed = false;
        play.classList.remove("pause");
        playListCurrentButtons[playNum].classList.remove('play-pause');
    }


    /* audio.currentTime = 0;
    audio.play(); */
}

/* function pauseAudio() {
  audio.pause();
} */

audio.addEventListener("ended", ()=>{
    //console.log('ended');
    /* audio.currentTime = 0;
    play.classList.remove("pause");
    isPlayed = false; */
    playNextTrack();
});


play.addEventListener("click", playAudio);

function updateTrackData () {
    //const playListCurrent = playListContainer.querySelectorAll('.play-item');
    playListCurrent.forEach(item=>{
        item.classList.remove('item-active');
    });
    playListCurrent[playNum].classList.add('item-active');
    trackName.textContent = playList[playNum].title;
    playbackDuration.textContent = '/ '+playList[playNum].duration;
}



function playPrevTrack() {
    playListCurrentButtons[playNum].classList.remove('play-pause');   
    (playNum > 0) ? playNum-- : playNum = playList.length - 1;
    audio.src = playList[playNum].src;
    //updateTrackData();
    audio.currentTime = 0;//
    isPlayed = false;
    playAudio();
}

playPrev.addEventListener("click", playPrevTrack);

function playNextTrack() {
    playListCurrentButtons[playNum].classList.remove('play-pause');
    (playList.length - 1 > playNum) ? playNum++ : playNum = 0;
    audio.src = playList[playNum].src;
    //updateTrackData();
    audio.currentTime = 0;//
    isPlayed = false;
    playAudio();
}

/* ----------------- */

function moveVolume(e) {
    audio.volume = playerVolume.value / 100;
    if (audio.volume === 0) {
        muteButton.classList.add('mute-button-muted');
    } else if (audio.volume !== 0) {
        muteButton.classList.remove('mute-button-muted');
    }
}

playerVolume.addEventListener('click', moveVolume);
playerVolume.addEventListener('mousemove', (e) => mousedown && moveVolume(e));
playerVolume.addEventListener('mousedown', () => mousedown = true);
playerVolume.addEventListener('mouseup', () => mousedown = false);

function toggleMute() {
    if (audio.volume === 0) {
        playerVolume.value = 50;
        audio.volume = 0.5;
        muteButton.classList.remove('mute-button-muted');
        //progressVolume.style.background = `linear-gradient(to right, #710707 0%, #710707 50%, #C4C4C4 50%, #C4C4C4 100%)`;
    } else {
        playerVolume.value = 0;
        audio.volume = 0;
        muteButton.classList.add('mute-button-muted');
        //progressVolume.style.background = `linear-gradient(to right, #710707 0%, #710707 0%, #C4C4C4 0%, #C4C4C4 100%)`;
    }
}
function togglePlay() {
    const method = audio.paused ? 'play' : 'pause';
    audio[method]();
    playButtonBig.classList.toggle('button-opacity');
    playSmall.classList.toggle('play-button-opacity');
}

function handleProgress() {
    const percent = (audio.currentTime / audio.duration) * 100;
    playerProgress.value = percent;
    playbackInfo.textContent =(Math.floor(audio.currentTime/60)).toString().padStart(2, "0")+":"+(Math.floor(audio.currentTime%60)).toString().padStart(2, "0");
    /* if (audio.currentTime<60) {
        playbackInfo.textContent = "00:"+(audio.currentTime%60).toFixed(0).padStart(2, "0");
    } else {
        playbackInfo.textContent = (Math.floor(audio.currentTime/60)).toFixed(0).padStart(2, "0")+":"+(audio.currentTime%60).toFixed(0).padStart(2, "0");
    } */
    //let bgNum = randomNum.toString().padStart(2, "0");
    //playbackInfo.textContent = audio.currentTime.toFixed(0);
    
    //progress.style.background = `linear-gradient(to right, #710707 0%, #710707 ${percent}%, #C4C4C4 ${percent}%, #C4C4C4 100%)`;
}

function move(e) {
    const moveTime = (e.offsetX / playerProgress.offsetWidth) * audio.duration;
    audio.currentTime = moveTime;

}

playerProgress.addEventListener('mousemove', (e) => mousedown && move(e));
playerProgress.addEventListener('mousedown', () => mousedown = true);
playerProgress.addEventListener('mouseup', () => mousedown = false);

let mousedown = false;
audio.addEventListener('timeupdate', handleProgress);
playerProgress.addEventListener('click', move);
/* playButtonBig.addEventListener("click", togglePlay);
audio.addEventListener("click", togglePlay);
playSmall.addEventListener("click", togglePlay);
audio.addEventListener('timeupdate', handleProgress);
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
audioWrapper.addEventListener('keydown', keyboard); */

muteButton.addEventListener("click", toggleMute);

playNext.addEventListener("click", playNextTrack);




/* if (!isPlayed) {
    playAudio();
    isPlayed = true;
    play.classList.add("pause");
} else {
    pauseAudio();
    isPlayed = false;
    play.classList.remove("pause");
}
*/





settingsButton.addEventListener("click", () => {
    settings.classList.toggle('settings-show');
});

getRandomNum();
showTime();
setBg();

document.addEventListener('DOMContentLoaded', () => {
    getWeather();
    getQuotes();
});


console.log('Score://TODO ');//TODO