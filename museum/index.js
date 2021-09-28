const progress = document.querySelectorAll('.player-range');
const buy = document.querySelector('.buy-tickets-button');
const backgroundModal = document.querySelector('.tickets-modal-background');
const formModal = document.querySelector('.tickets-modal');
const closeModal = document.querySelector('.close-modal');
const pics = document.querySelector('.picture-inner-container');
const cDate = document.querySelector('.modal-date');
const cTime = document.querySelector('.modal-time');

cDate.setAttribute('placeholder', 'Date');
cTime.setAttribute('placeholder', 'Time');

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (let item of progress) {
    item.addEventListener('input', function () {
        const value = this.value;
        this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`
    });
}

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

shuffle(numbers);
numbers.map(rand => pics.innerHTML += `<img src="assets/img/galery${rand}.jpg" alt="gallery${rand}">`);

buy.addEventListener('click', () => {
    formModal.style.transform = 'translateX(0)';
    backgroundModal.style.display = 'block';
});

backgroundModal.addEventListener('click', () => {
    backgroundModal.style.display = 'none';
    formModal.style.transform = 'translateX(-500%)';
});

closeModal.addEventListener('click', () => {
    backgroundModal.style.display = 'none';
    formModal.style.transform = 'translateX(-500%)';
});

console.log('Score: 158/150');
console.log('Не выполненные/не засчитанные пункты:');
console.log('-2 кнопке "Book" в форме покупки билетов добавлен ripple-эффект.');
console.log('Остальные пункты выполнены.');