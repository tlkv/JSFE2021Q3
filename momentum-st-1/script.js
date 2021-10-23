const clockDigitalNumeric = document.querySelector('.time');
const dateAdditional = document.querySelector('.date');


const greetingMessage = document.querySelector('.greeting');
const userName = document.querySelector('.name');

const body = document.querySelector('body');
const leftArrow = document.querySelector('.slide-prev');
const rightArrow = document.querySelector('.slide-next');
let randomNum;

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
}

window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
    if (localStorage.getItem('user-name')) {
        userName.value = localStorage.getItem('user-name');
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


getRandomNum();
showTime();
setBg();

console.log('Score: ');//TODO