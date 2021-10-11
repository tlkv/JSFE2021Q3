const cDate = document.querySelector('.modal-date');
const cTime = document.querySelector('.modal-time');
const buy = document.querySelector('.buy-tickets-button');
const backgroundModal = document.querySelector('.tickets-modal-background');
const formModal = document.querySelector('.tickets-modal');
const closeModal = document.querySelector('.close-modal');

const ticketsAmountBasic = document.querySelector('.tickets-amount-basic');
const ticketsAmountSenior = document.querySelector('.tickets-amount-senior');
const ticketsCountedPrice = document.querySelector('.counted-price');
const optionPermanent = document.querySelector('#option-permanent');
const optionTemporary = document.querySelector('#option-temporary');
const optionCombined = document.querySelector('#option-combined');

const formDate = document.getElementById('date');
const formOptionsDate = document.querySelector('.form-over-options-date');

const formTime = document.getElementById('time');
const formOptionsTime = document.querySelector('.form-over-options-time');
const ticketButtons = document.querySelectorAll('.tickets-count-wrapper button');

let typePrice = 20;

formDate.addEventListener('input', () => {
    formOptionsDate.textContent = formDate.value;
});

formTime.addEventListener('input', () => {
    formOptionsTime.textContent = formTime.value;
});


optionPermanent.addEventListener('click', () => {
    typePrice = 20;
    calculatePrice();
});

optionTemporary.addEventListener('click', () => {
    typePrice = 25;
    calculatePrice();
});

optionCombined.addEventListener('click', () => {
    typePrice = 40;
    calculatePrice();
});

ticketButtons.forEach ((item)=>{
  item.addEventListener("click", calculatePrice);
});

function calculatePrice () {
    ticketsCountedPrice.textContent = typePrice*ticketsAmountBasic.value+typePrice*ticketsAmountSenior.value/2;
}

window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', getLocaleStorage);


function setLocalStorage() {    
    localStorage.setItem('ticketsAmountBasicLocal', ticketsAmountBasic.value);
    localStorage.setItem('ticketsAmountSeniorLocal', ticketsAmountSenior.value);
    localStorage.setItem('ticketsCountedPriceLocal', ticketsCountedPrice.textContent);
    localStorage.setItem('typePriceLocal', typePrice);
}


function getLocaleStorage() {
    if (localStorage.getItem('ticketsAmountBasicLocal')) {
        ticketsAmountBasic.value = Number(localStorage.getItem('ticketsAmountBasicLocal'));
    }
    if (localStorage.getItem('ticketsAmountSeniorLocal')) {
        ticketsAmountSenior.value = Number(localStorage.getItem('ticketsAmountSeniorLocal'));
    }
    if (localStorage.getItem('ticketsCountedPriceLocal')) {
        ticketsCountedPrice.textContent = localStorage.getItem('ticketsCountedPriceLocal');
    }
    if (localStorage.getItem('typePriceLocal')) {
        typePrice = Number(localStorage.getItem('typePriceLocal'));
        if (typePrice === 20) {
            optionPermanent.checked = true;
        } else if (typePrice === 25) {            
            optionTemporary.checked = true;
        } else if (typePrice === 40) {            
            optionCombined.checked = true;
        }
    }
}

cDate.setAttribute('placeholder', 'Date');
cTime.setAttribute('placeholder', 'Time');

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

function lockTheDate() {  
    const offset = new Date().getTimezoneOffset();
    const today = new Date(new Date().getTime() - (offset * 60 * 1000))
    const finalDate = today.toISOString().split('T')[0];
    formDate.setAttribute('min', finalDate);
}

lockTheDate();