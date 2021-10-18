const secondsArrow = document.querySelector('.second-arrow');
const minutesArrow = document.querySelector('.min-arrow');
const hoursArrow = document.querySelector('.hour-arrow');
const clockDigitalNumeric = document.querySelector('.digital-clock-numeric');
const dateAdditional = document.querySelector('.date-additional');
const leftArrow = document.querySelector('.slider-left');
const rightArrow = document.querySelector('.slider-right');
const slides = document.querySelectorAll('.slide');
const greetingMessage = document.querySelector('.greeting');
const body = document.querySelector('body');
let randomNum;
let userName = document.querySelector('.user-name');

function showTime() {
    const date = new Date();
    const secondsCurrent = date.getSeconds();
    const minutesCurrent = date.getMinutes();
    const hoursCurrent = date.getHours();
    const secondsAngle = secondsCurrent / 60 * 360 + 90;
    const minutesAngle = minutesCurrent / 60 * 360 + secondsCurrent / 60 * 6 + 90;
    const hoursAngle = hoursCurrent / 12 * 360 + minutesCurrent / 60 * 30 + 90;
    secondsArrow.style.transform = `rotate(${secondsAngle}deg)`;
    minutesArrow.style.transform = `rotate(${minutesAngle}deg)`;
    hoursArrow.style.transform = `rotate(${hoursAngle}deg)`;

    const currentTime = date.toLocaleTimeString();
    clockDigitalNumeric.textContent = currentTime;

    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    const currentDate = date.toLocaleDateString('eng', options);
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
    let greetingText = `Good ${getTimeOfDay()} `
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
    let backgroundUrl = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
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

console.log('Score: 40/30 ;-)','\n','+10 Разобраться в коде чужого проекта, понять его, воспроизвести исходное приложение.','\n','+10 Дополнить исходный проект обязательным дополнительным функционалом, указанным в описании задания','\n','+10 1 Доп. улучшение: приветствие по времени суток и ввод имени пользователя с сохранением в localStorage(по ТЗ задания Momentum)','\n','+10 2 Доп. улучшение: фоновый слайдер с подборкой изображений в зависимости от времени суток (по ТЗ задания Momentum)');