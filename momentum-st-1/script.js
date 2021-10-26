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

const play = document.querySelector('.play');
const playPrev = document.querySelector('.play-prev');
const playNext = document.querySelector('.play-next');
const playListContainer = document.querySelector('.play-list');
let playListCurrent;
let playListCurrentButtons;

const trackName = document.querySelector('.track-name');
const playerVolume = document.querySelector('.player-volume');
const topPlayer = document.querySelector('.player');
const muteButton = document.querySelector('.mute');
const playbackInfo = document.querySelector('.playback-info');
const playerProgress = document.querySelector('.player-progress');
const playbackDuration = document.querySelector('.playback-duration');
let isPlayed = false;
let playNum = 0;
let quoteRandom = 0;
let quoteFlag = false;

let lang = 'en';
let windText1 = "Wind";
let windText2 = "m/s";
let humidityText = "Humidity";

const selectLanguage = document.querySelector('.select-language');

const settingTitle = document.querySelector('.setting-title');
const descrPhoto = document.querySelector('.descr-photo');
const descrLang = document.querySelector('.descr-lang');
const descrShow = document.querySelector('.descr-show');
const labelPlayer = document.querySelector('.label-player');
const labelWeather = document.querySelector('.label-weather');
const labelTime = document.querySelector('.label-time');
const labelDate = document.querySelector('.label-date');
const labelGreeting = document.querySelector('.label-greeting');
const labelQuotes = document.querySelector('.label-quotes');
//const labelTodo = document.querySelector('.label-todo');
const customTheme = document.querySelector('.custom-theme');

const settingsButton = document.querySelector('.open-settings');
const settings = document.querySelector('.settings');
const closeBtn = document.querySelector('.close-button');

const topPlayerSetting = document.getElementById('topplayer');
const weatherSetting = document.getElementById('weather');
const timeSetting = document.getElementById('time');
const dateSetting = document.getElementById('date');
const greetingSetting = document.getElementById('greeting');
const quotesSetting = document.getElementById('quotes');
//const toDoSetting = document.getElementById('todo');

const weather = document.querySelector('.weather');
const greetingCont = document.querySelector('.greeting-container');
const quoteCont = document.querySelector('.quote-containter');

const selectBackgroundSource = document.querySelector('.select-background-source');

selectBackgroundSource.addEventListener("change", setBg);

[topPlayerSetting, weatherSetting, timeSetting, dateSetting, greetingSetting, quotesSetting].forEach(elem => {
    elem.addEventListener("change", showOrHide);
});

const backTag = document.querySelector('.select-background-tag');

backTag.addEventListener("change", () => {
    tag = backTag.value;
    setBg();
});

let tag = getTimeOfDay();

function showOrHide() {
    if (topPlayerSetting.checked) {
        topPlayer.classList.remove('hide');
    } else {
        topPlayer.classList.add('hide');
    }

    if (weatherSetting.checked) {
        weather.classList.remove('hide');
    } else {
        weather.classList.add('hide');
    }

    if (timeSetting.checked) {
        clockDigitalNumeric.classList.remove('hide');
    } else {
        clockDigitalNumeric.classList.add('hide');
    }

    if (dateSetting.checked) {
        dateAdditional.classList.remove('hide');
    } else {
        dateAdditional.classList.add('hide');
    }

    if (greetingSetting.checked) {
        greetingCont.classList.remove('hide');
    } else {
        greetingCont.classList.add('hide');
    }

    if (quotesSetting.checked) {
        quoteCont.classList.remove('hide');
    } else {
        quoteCont.classList.add('hide');
    }
}

const translations = {
    en: {
        cityPlacelolder: "[Enter city]",
        userPlacelolder: "[Enter name]",
        windText1: "Wind",
        windText2: "m/s",
        humidityText: "Humidity",
        weatherError: "Error getting weather",
        customTheme: "Photo Tags (Flickr or Unsplash)",
        settingTitle: "Settings",
        descrPhoto: "Photo Source",
        descrLang: "Language",
        descrShow: "Show/Hide blocks",
        labelPlayer: "Player",
        labelWeather: "Weather",
        labelTime: "Time",
        labelDate: "Date",
        labelGreeting: "Greeting",
        labelQuotes: "Quotes",
        labelTodo: "TO DO list",
    },
    ru: {
        cityPlacelolder: "[Введите город]",
        userPlacelolder: "[Введите имя]",
        windText1: "Ветер",
        windText2: "м/с",
        humidityText: "Влажность",
        weatherError: "Ошибка при получении погоды",
        customTheme: "Теги фото (Flickr,  Unsplash)",
        settingTitle: "Настройки",
        descrPhoto: "Источник Фото",
        descrLang: "Язык",
        descrShow: "Показать/скрыть блоки",
        labelPlayer: "Плеер",
        labelWeather: "Погода",
        labelTime: "Время",
        labelDate: "Дата",
        labelGreeting: "Приветствие",
        labelQuotes: "Цитаты",
        labelTodo: "Список дел",
    }
};

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
    button.classList.add("play-alternative", "player-icon");

    li.append(button);

    li.append(span);
    playListContainer.append(li);
    playListCurrent = playListContainer.querySelectorAll('.play-item');
    playListCurrentButtons = playListContainer.querySelectorAll('button');
});

for (let i = 0; i < playListCurrent.length; i++) {
    playListCurrent[i].addEventListener("click", () => {

        playListCurrentButtons[playNum].classList.remove('play-pause');
        if (playNum !== i) {
            playNum = i;
            audio.src = playList[playNum].src;

            audio.currentTime = 0;
            isPlayed = false;
        }

        playAudio();
    });
}


function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    clockDigitalNumeric.textContent = currentTime;
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    const currentDate = date.toLocaleDateString(lang, options);//check utc
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
    let greetingText;
    const hours = new Date().getHours();
    if (lang === 'en') {
        greetingText = `Good ${getTimeOfDay()} `;
    } else if (lang === 'ru') {
        if (hours < 6) {
            greetingText = "Доброй ночи ";
        } else if (hours >= 6 && hours < 12) {
            greetingText = "Доброе утро ";
        } else if (hours >= 12 && hours < 18) {
            greetingText = "Добрый день ";
        } else if (hours >= 18) {
            greetingText = "Добрый вечер ";
        }
    };

    greetingMessage.textContent = greetingText;
}

function setLocalStorage() {
    localStorage.setItem('user-name', userName.value);
    localStorage.setItem('city', city.value);
    localStorage.setItem('lang', lang);

    localStorage.setItem('topplayer-setting', topPlayerSetting.checked);
    localStorage.setItem('weather-setting', weatherSetting.checked);
    localStorage.setItem('time-setting', timeSetting.checked);
    localStorage.setItem('date-setting', dateSetting.checked);
    localStorage.setItem('greeting-setting', greetingSetting.checked);
    localStorage.setItem('quotes-setting', quotesSetting.checked);

    localStorage.setItem('select-background-source', selectBackgroundSource.value);
    localStorage.setItem('back-tag', backTag.value);

}

window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {


    if (localStorage.getItem('select-background-source')) {
        selectBackgroundSource.value = localStorage.getItem('select-background-source');
    }

    if (localStorage.getItem('back-tag')) {
        backTag.value = localStorage.getItem('back-tag');
        tag = localStorage.getItem('back-tag');
    }
    setBg();
    if (localStorage.getItem('topplayer-setting')) {
        (localStorage.getItem('topplayer-setting') === "true") ? topPlayerSetting.checked = true : topPlayerSetting.checked = false;

    }

    if (localStorage.getItem('weather-setting')) {
        (localStorage.getItem('weather-setting') === "true") ? weatherSetting.checked = true : weatherSetting.checked = false;
    }

    if (localStorage.getItem('time-setting')) {
        (localStorage.getItem('time-setting') === "true") ? timeSetting.checked = true : timeSetting.checked = false;
    }

    if (localStorage.getItem('date-setting')) {
        (localStorage.getItem('date-setting') === "true") ? dateSetting.checked = true : dateSetting.checked = false;
    }

    if (localStorage.getItem('greeting-setting')) {
        (localStorage.getItem('greeting-setting') === "true") ? greetingSetting.checked = true : greetingSetting.checked = false;
    }

    if (localStorage.getItem('quotes-setting')) {
        (localStorage.getItem('quotes-setting') === "true") ? quotesSetting.checked = true : quotesSetting.checked = false;
    }

    showOrHide();

    if (localStorage.getItem('user-name')) {
        userName.value = localStorage.getItem('user-name');
    }
    if (localStorage.getItem('lang')) {
        lang = localStorage.getItem('lang');
        selectLanguage.value = localStorage.getItem('lang');
        showTime();

    } else {
        showTime();
    }
    if (localStorage.getItem('city')) {
        city.value = localStorage.getItem('city');
    } else {
        if (lang === 'en') {
            city.value = 'Minsk';
        } else if (lang === 'ru') {
            city.value = 'Минск';
        }
    }
    translateApp();

}

window.addEventListener('load', getLocalStorage);

function getRandomNum() {
    randomNum = Math.ceil(Math.random() * 20);
}

async function setBg() {
    const img = new Image();
    let timeOfDay = getTimeOfDay();
    let bgNum = randomNum.toString().padStart(2, "0");
    let backgroundUrl = `https://raw.githubusercontent.com/tlkv/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
    if (selectBackgroundSource.value === 'git') {
        img.src = backgroundUrl;
    } else if (selectBackgroundSource.value === 'unsplash') {
        img.src = await fetchUnsplash();
    } else if (selectBackgroundSource.value === 'flickr') {
        img.src = await fetchFlickr();
    }

    img.onload = () => {
        body.style.backgroundImage = `url(${img.src})`;
    };
}

async function fetchUnsplash() {

    const url = `https://api.unsplash.com/photos/random?orientation=landscape&query=${tag}&client_id=FKMf0BwZVmjUFUokYEOdzhCzYYWtfUDpLa-5TFSVPtA`;
    const res = await fetch(url);
    const data = await res.json();
    return (data.urls.regular);
}

async function fetchFlickr() {
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=aef1fa45481a7c7f4ad98865b314829c&tags=${tag}&extras=url_l&format=json&nojsoncallback=1`;
    const res = await fetch(url);
    const data = await res.json();
    let randomPhoto = Math.ceil(Math.random() * 20);
    return (data.photos.photo[randomPhoto].url_l);
}



function getRandomNum1(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
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
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${lang}&appid=14b1122e0d41606b798245fa03a0c744&units=metric`;

    const res = await fetch(url);
    if (res.status === 200) {
        const data = await res.json();

        weatherError.classList.add('hide');
        [weatherDescription, temperature, weatherIcon, wind, humidity].forEach(item => {
            item.classList.remove('hide');
        });

        weatherIcon.className = 'weather-icon owf';
        weatherIcon.classList.add(`owf-${data.weather[0].id}`);
        temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
        wind.textContent = `${windText1}: ${data.wind.speed.toFixed(0)} ${windText2}`;
        humidity.textContent = `${humidityText}: ${data.main.humidity.toFixed(0)}%`;
        weatherDescription.textContent = data.weather[0].description;

    }
    else {
        weatherError.classList.remove('hide');
        [weatherDescription, temperature, weatherIcon, wind, humidity].forEach(item => {
            item.classList.add('hide');
        });
    }
}

city.addEventListener('change', getWeather);

async function getQuotes() {

    const quotes = 'data.json';
    const res = await fetch(quotes);
    const data = await res.json();

    if (!quoteFlag) {
        quoteRandom = Math.floor(Math.random() * 9);
    }
    quoteFlag = false;
    quote.textContent = data[lang][quoteRandom].quote;
    author.textContent = data[lang][quoteRandom].author;

}

changeQuote.addEventListener('click', getQuotes);


const audio = new Audio();
audio.src = playList[playNum].src;
audio.volume = 0.5;
trackName.textContent = playList[playNum].title;
playbackDuration.textContent = '/ ' + playList[playNum].duration;
playbackInfo.textContent = '00:00';

function playAudio() {

    updateTrackData();
    if (!isPlayed) {
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
}



audio.addEventListener("ended", () => {
    playNextTrack();
});


play.addEventListener("click", playAudio);

function updateTrackData() {
    playListCurrent.forEach(item => {
        item.classList.remove('item-active');
    });
    playListCurrent[playNum].classList.add('item-active');
    trackName.textContent = playList[playNum].title;
    playbackDuration.textContent = '/ ' + playList[playNum].duration;
}



function playPrevTrack() {
    playListCurrentButtons[playNum].classList.remove('play-pause');
    (playNum > 0) ? playNum-- : playNum = playList.length - 1;
    audio.src = playList[playNum].src;
    audio.currentTime = 0;//
    isPlayed = false;
    playAudio();
}

playPrev.addEventListener("click", playPrevTrack);

function playNextTrack() {
    playListCurrentButtons[playNum].classList.remove('play-pause');
    (playList.length - 1 > playNum) ? playNum++ : playNum = 0;
    audio.src = playList[playNum].src;
    audio.currentTime = 0;//
    isPlayed = false;
    playAudio();
}



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

    } else {
        playerVolume.value = 0;
        audio.volume = 0;
        muteButton.classList.add('mute-button-muted');

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
    playbackInfo.textContent = (Math.floor(audio.currentTime / 60)).toString().padStart(2, "0") + ":" + (Math.floor(audio.currentTime % 60)).toString().padStart(2, "0");

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

muteButton.addEventListener("click", toggleMute);

playNext.addEventListener("click", playNextTrack);


settingsButton.addEventListener("click", () => {
    settings.classList.toggle('settings-show');
});

closeBtn.addEventListener("click", () => {
    settings.classList.remove('settings-show');
});


function translateApp() {
    if (selectLanguage.value === 'en') {
        lang = "en";
        if (city.value === 'Минск') {
            city.value = 'Minsk'
        }
    } else if (selectLanguage.value === 'ru') {
        lang = "ru";
        if (city.value === 'Minsk') {
            city.value = 'Минск';
        }
    }

    city.placeholder = translations[lang].cityPlacelolder;
    userName.placeholder = translations[lang].userPlacelolder;
    windText1 = translations[lang].windText1;
    windText2 = translations[lang].windText2;
    humidityText = translations[lang].humidityText;
    weatherError.textContent = translations[lang].weatherError;
    customTheme.textContent = translations[lang].customTheme;
    settingTitle.textContent = translations[lang].settingTitle;
    descrPhoto.textContent = translations[lang].descrPhoto;
    descrLang.textContent = translations[lang].descrLang;
    descrShow.textContent = translations[lang].descrShow;
    labelPlayer.textContent = translations[lang].labelPlayer;
    labelWeather.textContent = translations[lang].labelWeather;
    labelTime.textContent = translations[lang].labelTime;
    labelDate.textContent = translations[lang].labelDate;
    labelGreeting.textContent = translations[lang].labelGreeting;
    labelQuotes.textContent = translations[lang].labelQuotes;
    //labelTodo.textContent = translations[lang].labelTodo;

    getWeather();
    /* getTimeOfDay(now, language);*/
    quoteFlag = true;
    getQuotes();
}

selectLanguage.addEventListener("change", translateApp);

getRandomNum();
//setBg();

document.addEventListener('DOMContentLoaded', () => {
    //getWeather();
    getQuotes();

});

console.log('Hello! Self-Check: 150 из 150 (160-10 за отсутствующий Дополнительный функционал на выбор в виде toDo списка или аналогов). Остальные пункты выполнены.');