import players from "./players.js";
import clubs from "./clubs.js";

const gameOn = false; //
let cards = []; //
let gameState = {}; //

//delegate

//top level components
const menuComponent = document.querySelector(".menu-component");
const settingComponent = document.querySelector(".settings-component");
const categoriesClubsComponent = document.querySelector(".categories-clubs-component");
const categoriesPlayersComponent = document.querySelector(".categories-players-component");
const questionClubsComponent = document.querySelector(".question-clubs-component");
const questionPlayersComponent = document.querySelector(".question-players-component");
const answerComponent = document.querySelector(".answer-component");
const roundScoreComponent = document.querySelector(".round-score-component");

const modalBackground = document.querySelector(".modal-background");

const appTopComponents = [menuComponent, settingComponent, categoriesClubsComponent, categoriesPlayersComponent, questionClubsComponent, questionPlayersComponent, answerComponent, roundScoreComponent, modalBackground];

const menuButtonClubs = document.querySelectorAll(".clubs-button");
const menuButtonPlayers = document.querySelectorAll(".players-button");
const menuButtonSettings = document.querySelectorAll(".settings-button");
const backToMenu = document.querySelectorAll(".menu-back");
const answerModalIndicator = document.querySelector(".answer-modal-indicator");
const answerModalImg = document.querySelector(".answer-modal-img");
const answerModalText = document.querySelector(".answer-modal-text");
const roundPicAnimated = document.querySelector(".round-pic-animated");
const clubsButtonModal = document.querySelector(".clubs-button-modal");
const playersButtonModal = document.querySelector(".players-button-modal");
const roundResultCurrent = document.querySelector(".round-results-current");

const volumeScale = document.querySelector(".volume-scale");

let audioVolume = 0.4;
let currentQuestion = 0;
let currentRoundQuestion = 0;
let currentRoundRightAnswers = 0;

volumeScale.addEventListener("change", e => {
  audioVolume = e.target.value / 100;
});

function hideAllComponents() {
  appTopComponents.forEach(item => item.classList.remove("component-show"));
  hideModalBackground();
}

function showMenu() {
  hideAllComponents();
  menuComponent.classList.add("component-show");
}

function showSettings() {
  hideAllComponents();
  settingComponent.classList.add("component-show");
}

function showClubs() {
  hideAllComponents();
  categoriesClubsComponent.classList.add("component-show");
}

function showPlayers() {
  hideAllComponents();
  categoriesPlayersComponent.classList.add("component-show");
}

function showClubsQuestion() {
  //hideAllComponents();
  questionClubsComponent.classList.add("component-show");
}

function showPlayersQuestion() {
  //hideAllComponents();
  questionPlayersComponent.classList.add("component-show");
}

function showModalBackground() {
  modalBackground.classList.add("modal-back-show");
}

function hideModalBackground() {
  modalBackground.classList.remove("modal-back-show");
}

menuButtonClubs.forEach(item => {
  item.addEventListener("click", showClubs);
});
menuButtonPlayers.forEach(item => {
  item.addEventListener("click", showPlayers);
});
menuButtonSettings.forEach(item => {
  item.addEventListener("click", showSettings);
});

backToMenu.forEach(item => {
  item.addEventListener("click", showMenu);
});

function setLocalStorage() {
  localStorage.setItem("ftb-audio-volume", audioVolume);
}
function getLocaleStorage() {
  if (localStorage.getItem("ftb-audio-volume")) {
    audioVolume = Number(localStorage.getItem("ftb-audio-volume"));
    volumeScale.value = audioVolume * 100;
  }
}

window.addEventListener("beforeunload", setLocalStorage);
window.addEventListener("load", getLocaleStorage);

const categoriesClubs = document.querySelectorAll(".categories-clubs-component .quiz-category");

categoriesClubs.forEach(item => {
  item.addEventListener("click", startQuizClubs);
});

const categoriesPlayers = document.querySelectorAll(".categories-players-component .quiz-category");
categoriesPlayers.forEach(item => {
  item.addEventListener("click", renderQuestionPlayers);
});

for (let i = 0; i < categoriesClubs.length; i++) {
  const imgCl = new Image();
  const imgPl = new Image();
  imgCl.src = `./assets/img/clubs/${i * 10}.jpg`;
  imgPl.src = `./assets/img/players/${i * 10}.jpg`;
  imgCl.onload = () => {
    categoriesClubs[i].style.background = `url('${imgCl.src}') center /cover no-repeat`;
  };
  imgPl.onload = () => {
    categoriesPlayers[i].style.background = `url('${imgPl.src}') center /cover no-repeat`;
  };
}

const questionClubsText = questionClubsComponent.querySelector(".question-text");
const questionClubsImg = questionClubsComponent.querySelector(".question-img");
const questionClubsAnswers = questionClubsComponent.querySelectorAll(".answer");
questionClubsAnswers.forEach(item => {
  item.addEventListener("click", checkClubsAnswer);
});

const questionPlayersText = questionPlayersComponent.querySelector(".question-text");
const questionPlayersImg = questionPlayersComponent.querySelector(".question-img");

const nextButtonClubs = document.querySelectorAll(".next-button-clubs");
nextButtonClubs.forEach(item => {
  item.addEventListener("click", clubsNextHandler);
});

const nextButtonPlayers = document.querySelectorAll(".next-button-players");
nextButtonPlayers.forEach(item => {
  item.addEventListener("click", renderQuestionPlayers); //playersNextHandler
});

function startQuizClubs(e) {
  currentRoundQuestion = 0;
  currentRoundRightAnswers = 0;
  currentQuestion = Number(e.target.getAttribute("data-round") - 1) * 10;

  console.log("This Round ", Number(e.target.getAttribute("data-round")));
  quizStartSound();
  renderQuestionClubs();
}

function renderQuestionClubs() {
  hideAllComponents();
  setTimeout(() => {
    console.log("currentRoundQuestion ", currentRoundQuestion);
    console.log("currentQuestion ", currentQuestion);
    const img = new Image();
    img.src = `./assets/img/clubs/${currentQuestion}.jpg`;
    showClubsQuestion();

    let answersRandom = [clubs[currentQuestion].name];

    while (answersRandom.length < 4) {
      const randAnswer = clubs[Math.round(Math.random() * (clubs.length - 1))].name;
      if (!answersRandom.includes(randAnswer)) {
        Math.random() > 0.5 ? answersRandom.push(randAnswer) : answersRandom.unshift(randAnswer);
      }
    }
    for (let i = 0; i <= 3; i++) {
      questionClubsAnswers[i].textContent = answersRandom[i];
    }
    answerModalText.textContent = clubs[currentQuestion].name;
    clubsButtonModal.classList.remove("hide-button");

    nextButtonClubs.forEach(item => {
      item.classList.remove("hide-button");
    });
    playersButtonModal.classList.add("hide-button");
    nextButtonPlayers.forEach(item => {
      item.classList.add("hide-button");
    });

    img.addEventListener("load", () => {
      console.log("LOADED"); //rem
      questionClubsImg.style.background = `url('${img.src}') center /cover no-repeat`;
      answerModalImg.style.background = `url('${img.src}') center /cover no-repeat`;

      currentRoundQuestion++;
      currentQuestion++;
    });
  }, 600);
}

function clubsNextHandler() {
  currentRoundQuestion === 2 ? renderRoundScore() : renderQuestionClubs();
}

function quizStartSound() {
  const audio = new Audio();
  audio.src = "./assets/audio/lets-play.mp3";
  audio.volume = audioVolume;
  audio.play();
}

function quizCorrectAnswerSound() {
  const audio = new Audio();
  audio.src = "./assets/audio/correct.mp3";
  audio.volume = audioVolume;
  audio.play();
}

function quizWrongAnswerSound() {
  const audio = new Audio();
  audio.src = "./assets/audio/wrong.mp3";
  audio.volume = audioVolume;
  audio.play();
}

function quizFinishSound() {
  const audio = new Audio();
  audio.src = "./assets/audio/finished.mp3";
  audio.volume = audioVolume;
  audio.play();
}

function checkClubsAnswer(e) {
  if (e.target.textContent === clubs[currentQuestion - 1].name) {
    quizCorrectAnswerSound();
    renderAnswer(true);
    //console.log("RIGHT");
  } else {
    quizWrongAnswerSound();
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
    answerModalIndicator.classList.remove("answer-indicator-wrong");
  } else {
    answerModalIndicator.classList.add("answer-indicator-wrong");
  }

  //hideAllComponents();
  console.log("rightAnswers ", currentRoundRightAnswers);
  answerComponent.classList.add("component-show");
  showModalBackground();
}

function renderRoundScore() {
  quizFinishSound();
  hideAllComponents();
  roundScoreComponent.classList.add("component-show");
  roundResultCurrent.textContent = currentRoundRightAnswers;
  const img = new Image();
  if (currentRoundRightAnswers < 3) {
    img.src = `./assets/img/bad.gif`;
  } else if (currentRoundRightAnswers >= 3 && currentRoundRightAnswers < 6) {
    img.src = `./assets/img/average.gif`;
  } else if (currentRoundRightAnswers >= 6 && currentRoundRightAnswers < 8) {
    img.src = `./assets/img/good.gif`;
  } else if (currentRoundRightAnswers >= 8) {
    img.src = `./assets/img/excellent.gif`;
  }
  img.addEventListener("load", () => {
    console.log("LOADED"); //rem
    roundPicAnimated.style.background = `url('${img.src}') center /cover no-repeat`;
  });
}

function renderQuestionPlayers() {
  hideAllComponents();
  setTimeout(() => {
    const img = new Image();
    img.src = `./assets/img/players/${currentQuestion}.jpg`;

    showPlayersQuestion();
    img.addEventListener("load", () => {
      console.log("LOADED"); //rem
      questionPlayersImg.style.background = `url('${img.src}') center /cover no-repeat`;
    });
  }, 600);
}

showMenu();
