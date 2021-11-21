import players from './players.js';
import clubs from './clubs.js';

let quizStateVolumeDefault = 0.4;
let quizStateMuteDefault = false;
let quizStateClubsDefault = [null, null, null, null, null, null, null, null, null, null];
let quizStatePlayersDefault = [null, null, null, null, null, null, null, null, null, null];

let quizStateVolume = 0.4;
let quizStateMute = false;
let quizStateClubs = [null, null, null, null, null, null, null, null, null, null];
let quizStatePlayers = [null, null, null, null, null, null, null, null, null, null];
/* import quizData from './quizData.js';
console.log('qD ',quizData['clubs'] ); */
let quizData;
/* 
import textObj from './settings.js'; */
//console.log('testF Bef', textObj['testF'][0]);
/* textObj['testF'][0] = 123;
console.log('testF aft', textObj['testF'][0]); */
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

const questionsInRound = 2; //change 9 or 10
const roundsQuestionsAmount = 10;
const answersAmount = 4;
/* let effectsVolume = 0.4; */
let currentQuestion = 0;
let currentRoundQuestion = 0;

let currentRoundAllAnswers = [];

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

volumeScale.addEventListener('change', e => {
  quizStateVolume = e.target.value / 100;
});

function countRound (arr) {
  return arr.reduce((a, b) => a + b, 0);
}

const categoriesClubs = categoriesClubsComponent.querySelectorAll('.quiz-category');
const categoriesClubsResultsNum = categoriesClubsComponent.querySelectorAll('.category-info-results-num');
const categoriesClubsResultsAll = categoriesClubsComponent.querySelectorAll('.category-results-all');


const categoriesPlayers = categoriesPlayersComponent.querySelectorAll('.quiz-category');
const categoriesPlayersResultsNum = categoriesPlayersComponent.querySelectorAll('.category-info-results-num');
const categoriesPlayersResultsAll = categoriesPlayersComponent.querySelectorAll('.category-results-all');

[...categoriesClubs, ...categoriesPlayers].forEach(item => {
  item.addEventListener('click', startQuiz);
});

function setLocalStorage() {
  localStorage.setItem('ftb-quiz-state-volume', quizStateVolume);
  localStorage.setItem('ftb-quiz-state-mute', quizStateMute);
  localStorage.setItem('ftb-quiz-state-clubs', JSON.stringify(quizStateClubs));
  localStorage.setItem('ftb-quiz-state-players', JSON.stringify(quizStatePlayers));
}
function getLocaleStorage() {
  if (localStorage.getItem('ftb-quiz-state-volume')) {
    quizStateVolume = Number(localStorage.getItem('ftb-quiz-state-volume'));
    volumeScale.value = quizStateVolume * 100;
  }

  if (localStorage.getItem('ftb-quiz-state-mute')) {
    quizStateMute = Boolean(localStorage.getItem('ftb-quiz-state-mute'));
    /* volumeScale.value = quizStateVolume * 100; */
  }
  if (localStorage.getItem('ftb-quiz-state-clubs')) {
    //quizStateMute = Boolean (localStorage.getItem('ftb-quiz-state-mute'));
    /* volumeScale.value = quizStateVolume * 100; */
    //console.log('load ', JSON.parse(localStorage.getItem('ftb-quiz-state-clubs')));
    quizStateClubs = JSON.parse(localStorage.getItem('ftb-quiz-state-clubs'));
  }
  if (localStorage.getItem('ftb-quiz-state-players')) {
    quizStatePlayers = JSON.parse(localStorage.getItem('ftb-quiz-state-players'));
  }
  renderState();
}

function renderState() {
  for (let i = 0; i < roundsQuestionsAmount; i++) {
    if (quizStateClubs[i]) {
      categoriesClubs[i].classList.remove('category-not-played');
      //console.log('categoriesClubsResultsNum', categoriesClubsResultsNum);
      categoriesClubsResultsNum[i].textContent = `${countRound(quizStateClubs[i])}/10`;

      categoriesClubsResultsAll[i].classList.remove('category-results-hidden');
    }
    if (quizStatePlayers[i]) {
      categoriesPlayers[i].classList.remove('category-not-played');
      categoriesPlayersResultsNum[i].textContent = `${countRound(quizStatePlayers[i])}/10`;

      categoriesPlayersResultsAll[i].classList.remove('category-results-hidden');
    }
    
  }
}

window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', getLocaleStorage);



function renderCards() {
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
nextButtonClubs.addEventListener('click', () => {
  nextHandler('clubs');
});

const nextButtonPlayers = document.querySelector('.next-button-players');
nextButtonPlayers.addEventListener('click', () => {
  nextHandler('players');
});

function resetCurrentRound() {
  currentRoundQuestion = 0;
  currentRoundAllAnswers = [];
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
    type === 'clubs' ? renderRoundScore('clubs') : renderRoundScore('players');
  } else {
    type === 'clubs' ? renderQuestionClubs() : renderQuestionPlayers();
  }
  /*  if (type === 'clubs') {
    console.log('test cl Handler');
    renderQuestionClubs();
    
  } else if (type === 'players') {
    console.log('test Pl  Handler');
    renderQuestionPlayers();
    
  } */
}

//sounds
function soundEffect(path) {
  const audio = new Audio();
  audio.src = `./assets/audio/${path}.mp3`;
  audio.volume = quizStateVolume;
  audio.play();
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

/* function checkClubsAnswer(e) {
  if (e.target.textContent === quizData['clubs'][currentQuestion - 1].name) {
    soundEffect('correct');
    renderAnswer(true);

    //console.log("RIGHT");
  } else {
    soundEffect('wrong');
    renderAnswer(false);
  }
} */

function checkClubsAnswer(e) {
  e.target.textContent === quizData['clubs'][currentQuestion - 1].name ? renderAnswer(true) : renderAnswer(false);
}

function checkPlayersAnswerImg(e) {
  e.target.getAttribute('data-img-num') === quizData['players'][currentQuestion - 1].imageNum ? renderAnswer(true) : renderAnswer(false);
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
    soundEffect('correct');

    currentRoundAllAnswers.push(1);
    console.log('arr c ', currentRoundAllAnswers);
    answerModalIndicator.classList.remove('answer-indicator-wrong');
  } else {
    soundEffect('wrong');
    currentRoundAllAnswers.push(0);
    console.log('arr c ', currentRoundAllAnswers);
    answerModalIndicator.classList.add('answer-indicator-wrong');
  }

  //hideAllComponents();

  answerComponent.classList.add('component-show');
  showModalBackground();
}

function renderRoundScore(type) {
  //currentRoundAllAnswers
  console.log('currentRoundQuestion ', currentRoundQuestion);
  console.log('currentQuestion ', currentQuestion);
  soundEffect('finished');
  hideAllComponents();
  roundScoreComponent.classList.add('component-show');

  roundResultCurrent.textContent = countRound(currentRoundAllAnswers);

  type === 'clubs' ? (quizStateClubs[(currentQuestion - currentRoundQuestion) / 10] = currentRoundAllAnswers) : (quizStatePlayers[(currentQuestion - currentRoundQuestion) / 10] = currentRoundAllAnswers);
  console.log('quizStateClubs ', quizStateClubs);
  console.log('quizStatePlayers ', quizStatePlayers);
  renderState();
  const img = new Image();

  img.src = `./assets/img/results/${countRound(currentRoundAllAnswers)}.gif`;
  img.addEventListener('load', () => {
    //console.log('LOADED'); //rem
    roundPicAnimated.style.background = `url('${img.src}') center /cover no-repeat`;
  });
}

function renderQuestionPlayers() {
  hideAllComponents();
  questionPlayersText.textContent = `On which picture you see ${quizData['players'][currentQuestion].name}?`;

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
      questionPlayersAnswersImg[i].setAttribute('data-img-num', pictRandom[i]);
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
renderCards();
showMenu();
