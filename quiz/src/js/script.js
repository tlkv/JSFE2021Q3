import quizData from './quizData';

const QUESTIONS_ROUND = 10;
const ROUND_QUESTIONS_AMOUNT = 10;
const ANSWERS_AMOUNT = 4;
const ROLLOUT_DELAY = 900; // ms
const QUESTIONS_AMOUNT = QUESTIONS_ROUND * ROUND_QUESTIONS_AMOUNT;

const volumeScaleStored = document.querySelector('.volume-scale');
const isMuteStored = document.querySelector('#muteCheck');
const roundTimeStored = document.querySelector('.minutes-number');
const isTimeGameStored = document.querySelector('#timeCheck');

const mainWrapper = document.querySelector('.main-wrapper');

// top level components
const menuComponent = document.querySelector('.menu-component');
const settingComponent = document.querySelector('.settings-component');
const categoriesClubsComponent = document.querySelector('.categories-clubs-component');
const categoriesPlayersComponent = document.querySelector('.categories-players-component');
const questionClubsComponent = document.querySelector('.question-clubs-component');
const questionPlayersComponent = document.querySelector('.question-players-component');
const answerComponent = document.querySelector('.answer-component');
const roundScoreComponent = document.querySelector('.round-score-component');
const quizResultsComponent = document.querySelector('.quiz-results-component');
const modalBackground = document.querySelector('.modal-background');

const appTopComponents = [
  menuComponent,
  settingComponent,
  categoriesClubsComponent,
  categoriesPlayersComponent,
  questionClubsComponent,
  questionPlayersComponent,
  answerComponent,
  roundScoreComponent,
  modalBackground,
  quizResultsComponent,
];

const menuButtonSettings = document.querySelectorAll('.settings-button');
const answerModalIndicator = document.querySelector('.answer-modal-indicator');
const answerModalImg = document.querySelector('.answer-modal-img');
const answerModalText = document.querySelector('.answer-modal-text');
const roundPicAnimated = document.querySelector('.round-pic-animated');
const clubsButtonModal = document.querySelector('.clubs-button-modal');
const playersButtonModal = document.querySelector('.players-button-modal');
const roundResultCurrent = document.querySelector('.round-results-current');
const clubsButtonResults = document.querySelector('.clubs-button-results');
const playersButtonResults = document.querySelector('.players-button-results');
const categoriesClubs = categoriesClubsComponent.querySelectorAll('.quiz-category');
const categoriesClubsResultsNum = categoriesClubsComponent.querySelectorAll('.category-info-results-num');
const categoriesClubsResultsAll = categoriesClubsComponent.querySelectorAll('.category-results-all');
const categoriesPlayers = categoriesPlayersComponent.querySelectorAll('.quiz-category');
const categoriesPlayersResultsNum = categoriesPlayersComponent.querySelectorAll('.category-info-results-num');
const categoriesPlayersResultsAll = categoriesPlayersComponent.querySelectorAll('.category-results-all');
const questionsClubsIndicator = document.querySelectorAll('.question-clubs-indicator .questions-indicator');
const questionsPlayersIndicator = document.querySelectorAll('.question-players-indicator .questions-indicator');
const resultsCardsImg = document.querySelectorAll('.results-container .results-img');
const resultsExtendedInfo = document.querySelectorAll('.results-extended-info');
const questionClubsImg = questionClubsComponent.querySelector('.question-img');
const questionClubsAnswers = questionClubsComponent.querySelectorAll('.answer');
const questionPlayersText = questionPlayersComponent.querySelector('.question-text');
const questionPlayersAnswersImg = questionPlayersComponent.querySelectorAll('.answer-img');
const nextButtonClubs = document.querySelector('.next-button-clubs');
const nextButtonPlayers = document.querySelector('.next-button-players');
const clubsTimer = document.querySelector('.clubs-timer');
const playersTimer = document.querySelector('.players-timer');

let quizStateClubs = [null, null, null, null, null, null, null, null, null, null];
let quizStatePlayers = [null, null, null, null, null, null, null, null, null, null];

let currentQuestion = 0;
let currentRoundQuestion = 0;
let currentRoundAllAnswers = [];

let timeLeft;
let timeID;
let timeRoundID;

function hideModalBackground() {
  modalBackground.classList.remove('modal-back-show');
}

function hideAllComponents() {
  appTopComponents.forEach((item) => item.classList.remove('component-show'));
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
  questionClubsComponent.classList.add('component-show');
}

function showPlayersQuestion() {
  questionPlayersComponent.classList.add('component-show');
}

function showModalBackground() {
  modalBackground.classList.add('modal-back-show');
}

function showQuizResults() {
  hideAllComponents();
  quizResultsComponent.classList.add('component-show');
}

// sounds
function soundEffect(path) {
  const audio = new Audio();
  audio.src = `./assets/audio/${path}.mp3`;
  audio.volume = volumeScaleStored.value / 100;
  audio.play();
}

function timer(elem) {
  timeRoundID = setTimeout(() => {
    timeLeft -= 1;
    const el = elem;
    el.textContent = `Time left: ${timeLeft} s`;
    if (timeLeft > 0) {
      timer(elem);
    } else {
      clearTimeout(timeRoundID);
    }
  }, 1000);
}

function clearTime() {
  clearTimeout(timeID);
  clearTimeout(timeRoundID);
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

// delegated button handlers

function resetCurrentRound() {
  currentRoundQuestion = 0;
  currentRoundAllAnswers = [];
}

function handleMute() {
  if (isMuteStored.checked) {
    volumeScaleStored.disabled = true;
    volumeScaleStored.value = 0;
  } else {
    volumeScaleStored.disabled = false;
  }
}

function countRound(arr) {
  return arr ? arr.reduce((a, b) => a + b, 0) : false;
}
function renderAnswer(result) {
  if (result) {
    soundEffect('correct');
    currentRoundAllAnswers.push(1);
    answerModalIndicator.classList.remove('answer-indicator-wrong');
  } else {
    soundEffect('wrong');
    currentRoundAllAnswers.push(0);
    answerModalIndicator.classList.add('answer-indicator-wrong');
  }

  answerComponent.classList.add('component-show');
  showModalBackground();
}

function checkPlayersAnswerImg(e) {
  clearTime();
  if (!e) {
    renderAnswer(false);
    questionsPlayersIndicator[currentRoundQuestion - 1].classList.add('questions-indicator-wrong');
  } else if (e.target.getAttribute('data-img-num') === quizData.players[currentQuestion - 1].imageNum) {
    renderAnswer(true);
    questionsPlayersIndicator[currentRoundQuestion - 1].classList.add('questions-indicator-right');
  } else {
    renderAnswer(false);
    questionsPlayersIndicator[currentRoundQuestion - 1].classList.add('questions-indicator-wrong');
  }
}

function renderState() {
  for (let i = 0; i < ROUND_QUESTIONS_AMOUNT; i += 1) {
    if (quizStateClubs[i]) {
      categoriesClubs[i].classList.remove('category-not-played');
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

function renderRoundScore(type) {
  soundEffect('finished');
  hideAllComponents();
  roundScoreComponent.classList.add('component-show');
  roundResultCurrent.textContent = countRound(currentRoundAllAnswers);
  if (type === 'clubs') {
    quizStateClubs[(currentQuestion - currentRoundQuestion) / 10] = currentRoundAllAnswers;
  } else {
    quizStatePlayers[(currentQuestion - currentRoundQuestion) / 10] = currentRoundAllAnswers;
  }

  renderState();
  const img = new Image();

  img.src = `./assets/img/results/${countRound(currentRoundAllAnswers)}.gif`;
  img.addEventListener('load', () => {
    roundPicAnimated.style.background = `url('${img.src}') center /cover no-repeat`;
  });
}

function renderQuestionPlayers() {
  if (isTimeGameStored.checked) {
    playersTimer.classList.remove('timer-hidden');
    timeLeft = roundTimeStored.value;
    playersTimer.textContent = `Time left: ${roundTimeStored.value} s`;
    setTimeout(() => {
      timer(playersTimer);
    }, ROLLOUT_DELAY);
    timeID = setTimeout(() => {
      checkPlayersAnswerImg();
    }, ROLLOUT_DELAY + roundTimeStored.value * 1000);
  } else {
    playersTimer.classList.add('timer-hidden');
  }

  hideAllComponents();
  questionPlayersText.textContent = `On which picture you see ${quizData.players[currentQuestion].name}?`;

  const pictRandom = [quizData.players[currentQuestion].imageNum];
  while (pictRandom.length < ANSWERS_AMOUNT) {
    const randPic = quizData.players[Math.round(Math.random() * QUESTIONS_AMOUNT)].imageNum;
    if (!pictRandom.includes(randPic)) {
      if (Math.random() > 0.5) {
        pictRandom.push(randPic);
      } else {
        pictRandom.unshift(randPic);
      }
    }
  }
  setTimeout(() => {
    answerModalText.textContent = quizData.players[currentQuestion].name;
    showPlayersQuestion();
    for (let i = 0; i < ANSWERS_AMOUNT; i += 1) {
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
    currentRoundQuestion += 1;
    currentQuestion += 1;
  }, 600);
}

function checkClubsAnswer(e) {
  clearTime();
  if (!e) {
    renderAnswer(false);
    questionsClubsIndicator[currentRoundQuestion - 1].classList.add('questions-indicator-wrong');
  } else if (e.target.textContent === quizData.clubs[currentQuestion - 1].name) {
    renderAnswer(true);
    questionsClubsIndicator[currentRoundQuestion - 1].classList.add('questions-indicator-right');
  } else {
    renderAnswer(false);
    questionsClubsIndicator[currentRoundQuestion - 1].classList.add('questions-indicator-wrong');
  }
}

function renderQuestionClubs() {
  if (isTimeGameStored.checked) {
    clubsTimer.classList.remove('timer-hidden');
    timeLeft = roundTimeStored.value;
    clubsTimer.textContent = `Time left: ${roundTimeStored.value} s`;
    setTimeout(() => {
      timer(clubsTimer);
    }, ROLLOUT_DELAY);
    timeID = setTimeout(() => {
      checkClubsAnswer();
    }, ROLLOUT_DELAY + roundTimeStored.value * 1000);
  } else {
    clubsTimer.classList.add('timer-hidden');
  }

  hideAllComponents();

  const answersRandom = [quizData.clubs[currentQuestion].name];
  while (answersRandom.length < ANSWERS_AMOUNT) {
    const randAnswer = quizData.clubs[Math.round(Math.random() * QUESTIONS_AMOUNT)].name;
    if (!answersRandom.includes(randAnswer)) {
      if (Math.random() > 0.5) {
        answersRandom.push(randAnswer);
      } else {
        answersRandom.unshift(randAnswer);
      }
    }
  }
  for (let i = 0; i < ANSWERS_AMOUNT; i += 1) {
    questionClubsAnswers[i].textContent = answersRandom[i];
  }

  setTimeout(() => {
    answerModalText.textContent = quizData.clubs[currentQuestion].name;
    showClubsQuestion();
    const img = new Image();
    img.src = `./assets/img/clubs/${currentQuestion}.jpg`;
    img.addEventListener('load', () => {
      questionClubsImg.style.background = `url('${img.src}') center /cover no-repeat`;
      answerModalImg.style.background = `url('${img.src}') center /cover no-repeat`;
    });
    currentRoundQuestion += 1;
    currentQuestion += 1;
  }, 600);
}

function startQuiz(e) {
  currentQuestion = Number(e.target.getAttribute('data-round') - 1) * ROUND_QUESTIONS_AMOUNT;
  const category = e.target.getAttribute('data-category');
  showCategoryButtons(category);
  resetCurrentRound();

  [...questionsClubsIndicator, ...questionsPlayersIndicator].forEach((item) => {
    item.classList.remove('questions-indicator-wrong');
    item.classList.remove('questions-indicator-right');
  });
  if (category === 'clubs') {
    renderQuestionClubs();
  } else {
    renderQuestionPlayers();
  }
}

function setLocalStorage() {
  localStorage.setItem('ftb-quiz-state-volume', volumeScaleStored.value);
  localStorage.setItem('ftb-quiz-state-mute', isMuteStored.checked);
  localStorage.setItem('ftb-quiz-state-sec-num', roundTimeStored.value);
  localStorage.setItem('ftb-quiz-state-time-game', isTimeGameStored.checked);
  localStorage.setItem('ftb-quiz-state-clubs', JSON.stringify(quizStateClubs));
  localStorage.setItem('ftb-quiz-state-players', JSON.stringify(quizStatePlayers));
}
function getLocaleStorage() {
  if (localStorage.getItem('ftb-quiz-state-volume')) {
    volumeScaleStored.value = Number(localStorage.getItem('ftb-quiz-state-volume'));
  }

  if (localStorage.getItem('ftb-quiz-state-mute')) {
    if (localStorage.getItem('ftb-quiz-state-mute') === 'true') {
      isMuteStored.checked = true;
    } else {
      isMuteStored.checked = false;
    }
    handleMute();
  }

  if (localStorage.getItem('ftb-quiz-state-sec-num')) {
    roundTimeStored.value = Number(localStorage.getItem('ftb-quiz-state-sec-num'));
  }

  if (localStorage.getItem('ftb-quiz-state-time-game')) {
    if (localStorage.getItem('ftb-quiz-state-time-game') === 'true') {
      isTimeGameStored.checked = true;
    } else {
      isTimeGameStored.checked = false;
    }
  }

  if (localStorage.getItem('ftb-quiz-state-clubs')) {
    quizStateClubs = JSON.parse(localStorage.getItem('ftb-quiz-state-clubs'));
  }

  if (localStorage.getItem('ftb-quiz-state-players')) {
    quizStatePlayers = JSON.parse(localStorage.getItem('ftb-quiz-state-players'));
  }
  renderState();
}

function renderCards() {
  for (let i = 0; i < ROUND_QUESTIONS_AMOUNT; i += 1) {
    const imgCl = new Image();
    const imgPl = new Image();
    imgCl.src = `./assets/img/clubs/${i * ROUND_QUESTIONS_AMOUNT + 1}.jpg`;
    imgPl.src = `./assets/img/players/${i * ROUND_QUESTIONS_AMOUNT + 1}.jpg`;
    imgCl.onload = () => {
      categoriesClubs[i].style.background = `url('${imgCl.src}') center /cover no-repeat`;
    };
    imgPl.onload = () => {
      categoriesPlayers[i].style.background = `url('${imgPl.src}') center /cover no-repeat`;
    };
  }
}

function renderQuizResults(e) {
  showQuizResults();
  resultsCardsImg.forEach((item) => {
    item.classList.remove('not-guessed');
    item.parentNode.querySelector('.results-extended-info').classList.add('extended-hide');
  });
  let eRound = Number(e.target.getAttribute('data-round') - 1);
  if (eRound < 0) {
    eRound = 0;
  }
  const eType = e.target.getAttribute('data-category');

  if (eType === 'clubs') {
    clubsButtonResults.classList.remove('hide-button');
    playersButtonResults.classList.add('hide-button');
  } else {
    clubsButtonResults.classList.add('hide-button');
    playersButtonResults.classList.remove('hide-button');
  }
  for (let i = 0; i < resultsCardsImg.length; i += 1) {
    const img = new Image();
    img.src = `./assets/img/${eType}/${quizData[eType][eRound * 10 + i].imageNum}.jpg`;
    // eslint-disable-next-line no-loop-func
    img.onload = () => {
      resultsExtendedInfo[i].textContent = quizData[eType][eRound * 10 + i].name;
      resultsCardsImg[i].style.background = `url('${img.src}') center /cover no-repeat`;
      if (eType === 'clubs') {
        if (quizStateClubs[eRound][i] !== 1) {
          resultsCardsImg[i].classList.add('not-guessed');
        }
      } else if (eType === 'players') {
        if (quizStatePlayers[eRound][i] !== 1) {
          resultsCardsImg[i].classList.add('not-guessed');
        }
      }
    };
  }
}

function nextHandler(type) {
  if (currentRoundQuestion === QUESTIONS_ROUND) {
    if (type === 'clubs') {
      renderRoundScore('clubs');
    } else {
      renderRoundScore('players');
    }
  } else if (type === 'clubs') {
    renderQuestionClubs();
  } else {
    renderQuestionPlayers();
  }
}

questionClubsAnswers.forEach((item) => {
  item.addEventListener('click', checkClubsAnswer);
});

questionPlayersAnswersImg.forEach((item) => {
  item.addEventListener('click', checkPlayersAnswerImg);
});

nextButtonClubs.addEventListener('click', () => {
  nextHandler('clubs');
});

nextButtonPlayers.addEventListener('click', () => {
  nextHandler('players');
});

mainWrapper.addEventListener('click', (e) => {
  if (e.target.classList.contains('open-clubs-category')) {
    showClubs();
    clearTime();
  } else if (e.target.classList.contains('open-players-category')) {
    showPlayers();
    clearTime();
  } else if (e.target.classList.contains('open-menu')) {
    showMenu();
    clearTime();
  }
});

isMuteStored.addEventListener('change', handleMute);

menuButtonSettings.forEach((item) => {
  item.addEventListener('click', showSettings);
});

[...categoriesClubs, ...categoriesPlayers].forEach((item) => {
  item.addEventListener('click', startQuiz);
});

[...categoriesClubsResultsAll, ...categoriesPlayersResultsAll].forEach((item) => {
  item.addEventListener('click', renderQuizResults);
});

resultsCardsImg.forEach((item) => {
  item.addEventListener('click', () => {
    item.parentNode.querySelector('.results-extended-info').classList.toggle('extended-hide');
  });
});

window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', getLocaleStorage);

renderCards();
showMenu();
