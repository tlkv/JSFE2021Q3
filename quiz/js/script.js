import players from './players.js';
import clubs from './clubs.js';
import quizState from './quizState.js';
console.log('quizState ', quizState);
let currentState = quizState;
/* import quizData from './quizData.js';
console.log('qD ',quizData['clubs'] ); */
let quizData;

import textObj from './settings.js';
console.log('testF Bef', textObj['testF'][0]);
textObj['testF'][0] = 123;
console.log('testF aft', textObj['testF'][0]);
async function getQuizData() {
  const quizJson = 'quizData.json';
  const res = await fetch(quizJson);
  quizData = await res.json();
  //quizData = data;
  console.log('json ', quizData);
}

getQuizData();
const gameOn = false; //
let cards = []; //
let gameState = {}; //

//delegate
const footerTest = document.querySelector('.footer');
footerTest.addEventListener('click', e => {
  if (e.target.classList.contains('fbut1')) {
    //console.log('YES');
  } else {
    //console.log('NO');
  }
});

const mainWrapper = document.querySelector('.main-wrapper');

//top level components
const menuComponent = document.querySelector('.menu-component');
const settingComponent = document.querySelector('.settings-component');
const categoriesClubsComponent = document.querySelector('.categories-clubs-component');
const categoriesPlayersComponent = document.querySelector('.categories-players-component');
const questionClubsComponent = document.querySelector('.question-clubs-component');
const questionPlayersComponent = document.querySelector('.question-players-component');
const answerComponent = document.querySelector('.answer-component');
const roundScoreComponent = document.querySelector('.round-score-component');

const modalBackground = document.querySelector('.modal-background');

const appTopComponents = [menuComponent, settingComponent, categoriesClubsComponent, categoriesPlayersComponent, questionClubsComponent, questionPlayersComponent, answerComponent, roundScoreComponent, modalBackground];

const menuButtonClubs = document.querySelectorAll('.clubs-button');
const menuButtonPlayers = document.querySelectorAll('.players-button');
const menuButtonSettings = document.querySelectorAll('.settings-button'); //not needed
const backToMenu = document.querySelectorAll('.menu-back');
const answerModalIndicator = document.querySelector('.answer-modal-indicator');
const answerModalImg = document.querySelector('.answer-modal-img');
const answerModalText = document.querySelector('.answer-modal-text');
const roundPicAnimated = document.querySelector('.round-pic-animated');
const clubsButtonModal = document.querySelector('.clubs-button-modal');
const playersButtonModal = document.querySelector('.players-button-modal');
const roundResultCurrent = document.querySelector('.round-results-current');

const volumeScale = document.querySelector('.volume-scale');

const questionsInRound = 2; //change
const roundsQuestionsAmount = 10;
const answersAmount = 4;
/* let effectsVolume = 0.4; */
let currentQuestion = 0;
let currentRoundQuestion = 0;
let currentRoundRightAnswers = 0;

//delegated button handlers
mainWrapper.addEventListener('click', e => {
  //console.log('NO', e.target.classList);
  if (e.target.classList.contains('open-clubs-category')) {
    showClubs();
    //console.log('YES');
  } else if (e.target.classList.contains('open-players-category')) {
    showPlayers();
    //console.log('YES');
  } else if (e.target.classList.contains('open-menu')) {
    showMenu();
    //console.log('YES');
  }
});

volumeScale.addEventListener('change', e => {
  currentState.effectsVolume = e.target.value / 100;
});

function hideAllComponents() {
  appTopComponents.forEach(item => item.classList.remove('component-show'));
  hideModalBackground();
}

function showMenu() {
  hideAllComponents();
  menuComponent.classList.add('component-show');
}

function showSettings() {
  hideAllComponents();
  settingComponent.classList.add('component-show');
}

function showClubs() {
  hideAllComponents();
  categoriesClubsComponent.classList.add('component-show');
}

function showPlayers() {
  hideAllComponents();
  categoriesPlayersComponent.classList.add('component-show');
}

function showClubsQuestion() {
  //hideAllComponents();
  questionClubsComponent.classList.add('component-show');
}

function showPlayersQuestion() {
  //hideAllComponents();
  questionPlayersComponent.classList.add('component-show');
}

function showModalBackground() {
  modalBackground.classList.add('modal-back-show');
}

function hideModalBackground() {
  modalBackground.classList.remove('modal-back-show');
}

menuButtonSettings.forEach(item => {
  item.addEventListener('click', showSettings);
});

function setLocalStorage() {
  localStorage.setItem('ftb-quiz-state', JSON.stringify(currentState));
}
function getLocaleStorage() {
  if (localStorage.getItem('ftb-quiz-state')) {
    currentState = JSON.parse(localStorage.getItem('ftb-quiz-state'));
    //effectsVolume = Number(localStorage.getItem('ftb-audio-volume'));
    volumeScale.value = currentState.effectsVolume * 100;
  }
}

window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', getLocaleStorage);

const categoriesClubs = categoriesClubsComponent.querySelectorAll('.quiz-category');
const categoriesPlayers = categoriesPlayersComponent.querySelectorAll('.quiz-category');

[...categoriesClubs, ...categoriesPlayers].forEach(item => {
  item.addEventListener('click', startQuiz);
});

function drawCards() {
  for (let i = 0; i < roundsQuestionsAmount; i++) {
    const imgCl = new Image();
    const imgPl = new Image();
    //path consts
    imgCl.src = `./assets/img/clubs/${i * roundsQuestionsAmount + 1}.jpg`;
    imgPl.src = `./assets/img/players/${i * roundsQuestionsAmount + 1}.jpg`;
    imgCl.onload = () => {
      categoriesClubs[i].style.background = `url('${imgCl.src}') center /cover no-repeat`;
    };
    imgPl.onload = () => {
      categoriesPlayers[i].style.background = `url('${imgPl.src}') center /cover no-repeat`;
    };
  }
}

//const questionClubsText = questionClubsComponent.querySelector('.question-text');
const questionClubsImg = questionClubsComponent.querySelector('.question-img');
const questionClubsAnswers = questionClubsComponent.querySelectorAll('.answer');
questionClubsAnswers.forEach(item => {
  item.addEventListener('click', checkClubsAnswer);
});

const questionPlayersText = questionPlayersComponent.querySelector('.question-text');
/* const questionPlayersImg = questionPlayersComponent.querySelector('.question-img'); */

/* const questionPlayersAnswers = questionPlayersComponent.querySelectorAll('.answer');
questionPlayersAnswers.forEach(item => {
  item.addEventListener('click', checkPlayersAnswer);
});*/

const questionPlayersAnswersImg = questionPlayersComponent.querySelectorAll('.answer-img'); 

questionPlayersAnswersImg.forEach(item => {
  item.addEventListener('click', checkPlayersAnswerImg);
});

console.log(questionPlayersAnswersImg);

/* const nextButtonClubs = document.querySelectorAll('.next-button-clubs');
nextButtonClubs.forEach(item => {
  item.addEventListener('click', clubsNextHandler);
}); */

const nextButtonClubs = document.querySelector('.next-button-clubs');
nextButtonClubs.addEventListener('click', ()=>{
  nextHandler('clubs')
});

const nextButtonPlayers = document.querySelector('.next-button-players');
nextButtonPlayers.addEventListener('click', ()=>{
  nextHandler('players');
});

function resetCurrentRound() {
  currentRoundQuestion = 0;
  currentRoundRightAnswers = 8;
}

function showCategoryButtons(type) {
  if (type === 'clubs') {
    clubsButtonModal.classList.remove('hide-button');
    nextButtonClubs.classList.remove('hide-button');
    playersButtonModal.classList.add('hide-button');
    nextButtonPlayers.classList.add('hide-button');
  } else {
    clubsButtonModal.classList.add('hide-button');
    nextButtonClubs.classList.add('hide-button');
    playersButtonModal.classList.remove('hide-button');
    nextButtonPlayers.classList.remove('hide-button');
  }
}

function startQuiz(e) {
  currentQuestion = Number(e.target.getAttribute('data-round') - 1) * roundsQuestionsAmount;
  const category = e.target.getAttribute('data-category');
  showCategoryButtons(category);
  resetCurrentRound();
  soundEffect('lets-play');
  category === 'clubs' ? renderQuestionClubs() : renderQuestionPlayers();
}

function renderQuestionClubs() {
  hideAllComponents();
  
  let answersRandom = [quizData['clubs'][currentQuestion].name];
  while (answersRandom.length < answersAmount) {
    const randAnswer = quizData['clubs'][Math.round(Math.random() * 99)].name;
    if (!answersRandom.includes(randAnswer)) {
      Math.random() > 0.5 ? answersRandom.push(randAnswer) : answersRandom.unshift(randAnswer);
    }
  }
  for (let i = 0; i < answersAmount; i++) {
    questionClubsAnswers[i].textContent = answersRandom[i];
  }
  
  setTimeout(() => {
    
    answerModalText.textContent = quizData['clubs'][currentQuestion].name;
    
    showClubsQuestion(); 

    
    const img = new Image();
    img.src = `./assets/img/clubs/${currentQuestion}.jpg`;

    img.addEventListener('load', () => {
      console.log('LOADED'); //rem
      questionClubsImg.style.background = `url('${img.src}') center /cover no-repeat`;
      answerModalImg.style.background = `url('${img.src}') center /cover no-repeat`;
      
    });
    currentRoundQuestion++;
      currentQuestion++;
  }, 600);
}

function nextHandler(type) {
  if (currentRoundQuestion === questionsInRound) {
    console.log('test score Handler');
    renderRoundScore();
  } else if (type === 'clubs') {
    console.log('test cl Handler');
    renderQuestionClubs();
    
  } else if (type === 'players') {
    console.log('test Pl  Handler');
    renderQuestionPlayers();
    
  }
}

//sounds
function soundEffect(path) {
  const audio = new Audio();
  audio.src = `./assets/audio/${path}.mp3`;
  audio.volume = currentState.effectsVolume;
  audio.play();
}

function checkClubsAnswer(e) {
  if (e.target.textContent === quizData['clubs'][currentQuestion - 1].name) {
    soundEffect('correct');
    renderAnswer(true);
    //console.log("RIGHT");
  } else {
    soundEffect('wrong');
    renderAnswer(false);
  }
}

/* function checkPlayersAnswer(e) {
  if (e.target.textContent === quizData['players'][currentQuestion - 1].name) {
    soundEffect('correct');
    renderAnswer(true);
    //console.log("RIGHT");
  } else {
    soundEffect('wrong');
    renderAnswer(false);
  }
} */

function checkPlayersAnswerImg(e) {
  if (e.target.getAttribute('data-img-num') === quizData['players'][currentQuestion - 1].imageNum) {
    soundEffect('correct');
    renderAnswer(true);
    //console.log("RIGHT");
  } else {
    soundEffect('wrong');
    renderAnswer(false);
  }
}

function renderAnswer(result) {
  /* if (type === 'clubs') {
    nextButtonClubs.classList.remove('hide-button');
    nextButtonPlayers.classList.add('hide-button');    
  } else {
    nextButtonClubs.classList.add('hide-button');
    nextButtonPlayers.classList.remove('hide-button');
  } */
  if (result) {
    currentRoundRightAnswers++;
    answerModalIndicator.classList.remove('answer-indicator-wrong');
  } else {
    answerModalIndicator.classList.add('answer-indicator-wrong');
  }

  //hideAllComponents();
  console.log('rightAnswers ', currentRoundRightAnswers);
  answerComponent.classList.add('component-show');
  showModalBackground();
}

function renderRoundScore() {
  soundEffect('finished');
  hideAllComponents();
  roundScoreComponent.classList.add('component-show');
  roundResultCurrent.textContent = currentRoundRightAnswers;
  const img = new Image();  
  img.src = `./assets/img/results/${currentRoundRightAnswers}.gif`;   
  img.addEventListener('load', () => {
    //console.log('LOADED'); //rem
    roundPicAnimated.style.background = `url('${img.src}') center /cover no-repeat`;
  });
}

function renderQuestionPlayers() {
  hideAllComponents(); 
  questionPlayersText.textContent = `On which picture you see ${quizData['players'][currentQuestion].name}?`
  
  
  let pictRandom = [quizData['players'][currentQuestion].imageNum];
  while (pictRandom.length < answersAmount) {
    const randPic = quizData['players'][Math.round(Math.random() * 99)].imageNum;
    if (!pictRandom.includes(randPic)) {
      Math.random() > 0.5 ? pictRandom.push(randPic) : pictRandom.unshift(randPic);
    }
  }  
  setTimeout(() => {
    
    answerModalText.textContent = quizData['players'][currentQuestion].name;
    
    showPlayersQuestion();
    
    for (let i = 0; i < answersAmount; i++) {
      const pic = new Image();
      pic.src = `./assets/img/players/${pictRandom[i]}.jpg`;
      questionPlayersAnswersImg[i].setAttribute('data-img-num',pictRandom[i]);
      pic.addEventListener('load', () => {
        
        questionPlayersAnswersImg[i].style.background = `url('${pic.src}') center /cover no-repeat`;
        
      });


    }
    const img = new Image();
    img.src = `./assets/img/players/${currentQuestion}.jpg`;
    img.addEventListener('load', () => {
      answerModalImg.style.background = `url('${img.src}') center /cover no-repeat`;
      
    });
    currentRoundQuestion++;
      currentQuestion++;
  }, 600);

  /* hideAllComponents();
  setTimeout(() => {
    const img = new Image();
    img.src = `./assets/img/players/${currentQuestion}.jpg`;

    showPlayersQuestion();
    img.addEventListener('load', () => {
      console.log('LOADED'); //rem
      questionPlayersImg.style.background = `url('${img.src}') center /cover no-repeat`;
    });
  }, 600); */
}

showMenu();
drawCards();
