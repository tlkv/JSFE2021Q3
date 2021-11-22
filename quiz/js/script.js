let quizStateClubs = [null, null, null, null, null, null, null, null, null, null];
let quizStatePlayers = [null, null, null, null, null, null, null, null, null, null];
const volumeScaleStored = document.querySelector('.volume-scale');
const isMuteStored = document.querySelector('#muteCheck');
const roundTimeStored = document.querySelector('.minutes-number');
const isTimeGameStored = document.querySelector('#timeCheck');
let quizData;

async function getQuizData() {
  const quizJson = 'quizData.json';
  const res = await fetch(quizJson);
  quizData = await res.json();
}

getQuizData();

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
const quizResultsComponent = document.querySelector('.quiz-results-component');
const modalBackground = document.querySelector('.modal-background');

const appTopComponents = [menuComponent, settingComponent, categoriesClubsComponent, categoriesPlayersComponent, questionClubsComponent, questionPlayersComponent, answerComponent, roundScoreComponent, modalBackground, quizResultsComponent];

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
const resultsRound = document.querySelector('.results-round');
const resultsScore = document.querySelector('.results-score');
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

const questionsInRound = 10; //10
const roundsQuestionsAmount = 10;
const answersAmount = 4;
let currentQuestion = 0;
let currentRoundQuestion = 0;

let currentRoundAllAnswers = [];

//delegated button handlers
mainWrapper.addEventListener('click', e => {
  if (e.target.classList.contains('open-clubs-category')) {
    showClubs();
    clearTimeout(timeID);
  } else if (e.target.classList.contains('open-players-category')) {
    showPlayers();
    clearTimeout(timeID);
  } else if (e.target.classList.contains('open-menu')) {
    showMenu();
    clearTimeout(timeID);
  }
});

isMuteStored.addEventListener('change', handleMute);
function handleMute() {
  if (isMuteStored.checked) {
    volumeScaleStored.disabled = true;
    volumeScaleStored.value = 0;
  } else {
    volumeScaleStored.disabled = false;
  }
}

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

function hideModalBackground() {
  modalBackground.classList.remove('modal-back-show');
}

menuButtonSettings.forEach(item => {
  item.addEventListener('click', showSettings);
});

function countRound(arr) {
  if (arr) {
    return arr.reduce((a, b) => a + b, 0);
  }
}

[...categoriesClubs, ...categoriesPlayers].forEach(item => {
  item.addEventListener('click', startQuiz);
});

[...categoriesClubsResultsAll, ...categoriesPlayersResultsAll].forEach(item => {
  item.addEventListener('click', renderQuizResults);
});

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
    localStorage.getItem('ftb-quiz-state-mute') === 'true' ? (isMuteStored.checked = true) : (isMuteStored.checked = false);
    handleMute();
  }

  if (localStorage.getItem('ftb-quiz-state-sec-num')) {
    roundTimeStored.value = Number(localStorage.getItem('ftb-quiz-state-sec-num'));
  }

  if (localStorage.getItem('ftb-quiz-state-time-game')) {
    localStorage.getItem('ftb-quiz-state-time-game') === 'true' ? (isTimeGameStored.checked = true) : (isTimeGameStored.checked = false);
  }

  if (localStorage.getItem('ftb-quiz-state-clubs')) {
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

resultsCardsImg.forEach(item => {
  item.addEventListener('click', () => {
    item.parentNode.querySelector('.results-extended-info').classList.toggle('extended-hide');
  });
});

function renderQuizResults(e) {
  showQuizResults();
  resultsCardsImg.forEach(item => {
    item.classList.remove('not-guessed');
    item.parentNode.querySelector('.results-extended-info').classList.add('extended-hide');
  });
  const eRound = Number(e.target.getAttribute('data-round') - 1);
  const eType = e.target.getAttribute('data-category');
  resultsRound.textContent = eRound + 1;

  if (eType === 'clubs') {
    clubsButtonResults.classList.remove('hide-button');
    playersButtonResults.classList.add('hide-button');
    resultsScore.textContent = countRound(quizStateClubs[eRound]);
  } else {
    clubsButtonResults.classList.add('hide-button');
    playersButtonResults.classList.remove('hide-button');
    resultsScore.textContent = countRound(quizStatePlayers[eRound]);
  }
  for (let i = 0; i < resultsCardsImg.length; i++) {
    resultsExtendedInfo[i].textContent = quizData[eType][eRound * 10 + i].name;
    const img = new Image();
    img.src = `./assets/img/${eType}/${quizData[eType][eRound * 10 + i].imageNum}.jpg`;

    img.onload = () => {
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

questionClubsAnswers.forEach(item => {
  item.addEventListener('click', checkClubsAnswer);
});

questionPlayersAnswersImg.forEach(item => {
  item.addEventListener('click', checkPlayersAnswerImg);
});

nextButtonClubs.addEventListener('click', () => {
  nextHandler('clubs');
});

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

  [...questionsClubsIndicator, ...questionsPlayersIndicator].forEach(item => {
    item.classList.remove('questions-indicator-wrong');
    item.classList.remove('questions-indicator-right');
  });
  category === 'clubs' ? renderQuestionClubs() : renderQuestionPlayers();
}

let timeLeft;
let timeID;
const rolloutDelay = 900; //ms

function timer(elem) {
  setTimeout(() => {
    timeLeft -= 1;
    elem.textContent = `Time left: ${timeLeft} s`;
    if (timeLeft > 0) {
      timer(elem);
    }
  }, 1000);
}

function renderQuestionClubs() {
  if (isTimeGameStored.checked) {
    clubsTimer.classList.remove('timer-hidden');
    timeLeft = roundTimeStored.value;
    clubsTimer.textContent = `Time left: ${roundTimeStored.value} s`;
    setTimeout(() => {
      timer(clubsTimer);
    }, rolloutDelay);
    timeID = setTimeout(() => {
      checkClubsAnswer();
    }, rolloutDelay + roundTimeStored.value * 1000);
  }

  hideAllComponents();

  let answersRandom = [quizData['clubs'][currentQuestion].name];
  while (answersRandom.length < answersAmount) {
    const randAnswer = quizData['clubs'][Math.round(Math.random() * 100)].name;
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
}

//sounds
function soundEffect(path) {
  const audio = new Audio();
  audio.src = `./assets/audio/${path}.mp3`;
  audio.volume = volumeScaleStored.value / 100;
  audio.play();
}

function checkClubsAnswer(e) {
  clearTimeout(timeID);
  if (!e) {
    renderAnswer(false);
    questionsClubsIndicator[currentRoundQuestion - 1].classList.add('questions-indicator-wrong');
  } else if (e.target.textContent === quizData['clubs'][currentQuestion - 1].name) {
    renderAnswer(true);
    questionsClubsIndicator[currentRoundQuestion - 1].classList.add('questions-indicator-right');
  } else {
    renderAnswer(false);
    questionsClubsIndicator[currentRoundQuestion - 1].classList.add('questions-indicator-wrong');
  }
}

function checkPlayersAnswerImg(e) {
  clearTimeout(timeID);
  if (!e) {
    renderAnswer(false);
    questionsPlayersIndicator[currentRoundQuestion - 1].classList.add('questions-indicator-wrong');
  } else if (e.target.getAttribute('data-img-num') === quizData['players'][currentQuestion - 1].imageNum) {
    renderAnswer(true);
    questionsPlayersIndicator[currentRoundQuestion - 1].classList.add('questions-indicator-right');
  } else {
    renderAnswer(false);
    questionsPlayersIndicator[currentRoundQuestion - 1].classList.add('questions-indicator-wrong');
  }
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

function renderRoundScore(type) {
  soundEffect('finished');
  hideAllComponents();
  roundScoreComponent.classList.add('component-show');
  roundResultCurrent.textContent = countRound(currentRoundAllAnswers);
  type === 'clubs' ? (quizStateClubs[(currentQuestion - currentRoundQuestion) / 10] = currentRoundAllAnswers) : (quizStatePlayers[(currentQuestion - currentRoundQuestion) / 10] = currentRoundAllAnswers);
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
    }, rolloutDelay);
    timeID = setTimeout(() => {
      checkPlayersAnswerImg();
    }, rolloutDelay + roundTimeStored.value * 1000);
  }
  hideAllComponents();
  questionPlayersText.textContent = `On which picture you see ${quizData['players'][currentQuestion].name}?`;

  let pictRandom = [quizData['players'][currentQuestion].imageNum];
  while (pictRandom.length < answersAmount) {
    const randPic = quizData['players'][Math.round(Math.random() * 100)].imageNum;
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
}
renderCards();
showMenu();