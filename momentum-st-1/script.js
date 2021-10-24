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

let isPlay = false;

const state = {
    language: 'en',
    photoSource: 'github',
    blocks: ['time', 'date','greeting', 'quote', 'weather', 'audio', 'todolist']
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
]


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

leftArrow.onclick = function () {
    (randomNum > 1) ? randomNum-- : randomNum = 20;
    setBg();
}

rightArrow.onclick = function () {
    (randomNum < 20) ? randomNum++ : randomNum = 1;
    setBg();
}


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

function playAudio() {
    audio.src = './assets/sounds/Aqua Caelestis.mp3';
    audio.currentTime = 0;
    audio.play();
  }

  play.addEventListener("click", () =>{
    playAudio();
  });




settingsButton.addEventListener("click",()=>{
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