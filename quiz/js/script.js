//delegate
const players = [
  {
    name: "Cristiano Ronaldo",
    imageNum: "1",
  },
  {
    name: "Lionel Messi",
    imageNum: "2",
  },

  {
    name: "Player3",
    imageNum: "3",
  },
  {
    name: "Player4",
    imageNum: "4",
  },
  {
    name: "Player5",
    imageNum: "5",
  },
];

let cards = [];

const game = document.querySelector(".game");
const gameButtons = document.querySelector(".game-buttons");

for (let i = 1; i <= players.length; i++) {
  //const testBlock = document.createElement('div');
  //testBlock.classList.add('test-block');
  const testButton = document.createElement("button");
  const testBlock = document.createElement("img");
  testBlock.classList.add("test-block");
  testBlock.classList.add(`card-${i}`);
  testButton.classList.add(`button-${i}`);
  testButton.textContent = `Button-${i}`;
  game.appendChild(testBlock);
  cards.push(testBlock);
  gameButtons.appendChild(testButton);
  testButton.addEventListener("click", () => {
    cards.forEach((item) => {
      item.classList.remove("hide-show");
    });
    testBlock.classList.add("hide-show");
  });
  const img = new Image();
  img.src = `./quiz-img/players/${i}.jpg`;
  img.onload = () => {
    testBlock.src = `./quiz-img/players/${i}.jpg`;
  };
}

/* function setBg() {  
  const img = new Image();
  img.src = // здесь ваш код 
  img.onload = () => {      
    body.style.backgroundImage = // здесь тоже ваш код
  }; 
} */
