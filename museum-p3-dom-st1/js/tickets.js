const cDate = document.querySelector('.modal-date');
const cTime = document.querySelector('.modal-time');
const buyClick = document.querySelector('.buy-tickets-button');
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
const formSelectModal = document.querySelector('.select-modal');

const formOptionsDate = document.querySelector('.form-over-options-date');

const formTime = document.getElementById('time');
const formOptionsTime = document.querySelector('.form-over-options-time');
const formOptionsType = document.querySelector('.form-over-options-type');
const ticketButtons = document.querySelectorAll('.tickets-count-wrapper button');
const totalForm = document.querySelector('.total-form');
const seniorModal = document.querySelector('.senior-form');
const basicModal = document.querySelector('.basic-form');
const modalTotSenior = document.querySelector('.tot-senior');
const modalTotBasic = document.querySelector('.tot-basic');
const modPriceSenior = document.querySelectorAll('.mod-price-senior');
const modPriceBasic = document.querySelectorAll('.mod-price-basic');

let typePrice = 20;

formSelectModal.addEventListener('input', () => {
    formOptionsType.textContent = formSelectModal.value;
});

formTime.addEventListener('input', () => {
    formOptionsTime.textContent = formTime.value;
});

formDate.addEventListener('input', () => {
    formOptionsDate.textContent = formDate.value;
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

ticketButtons.forEach((item) => {
    item.addEventListener("click", calculatePrice);
});

function calculatePrice() {
    ticketsCountedPrice.textContent = typePrice * ticketsAmountBasic.value + typePrice * ticketsAmountSenior.value / 2;
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



buyClick.addEventListener('click', () => {
    formModal.style.transform = 'translateX(0)';
    backgroundModal.style.display = 'block';
    totalForm.textContent = ticketsCountedPrice.textContent;
    basicModal.value = ticketsAmountBasic.value;
    seniorModal.value = ticketsAmountSenior.value;
    modalTotSenior.textContent = typePrice * ticketsAmountSenior.value / 2;
    modalTotBasic.textContent = typePrice * ticketsAmountBasic.value;

    modPriceSenior.forEach(item => {
        item.textContent = typePrice / 2;
    });
    modPriceBasic.forEach(item => {
        item.textContent = typePrice;
    });
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

const preventReload = document.querySelectorAll('.tickets-modal button, .form-credit-card-button');

preventReload.forEach(item => {
    item.addEventListener("click", (e) => {
        e.preventDefault();
    })
});
let emailReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
let nameReg = /^[a-zA-Zа-яА-Я \s]{3,15}$/ig;
let phoneReg = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/gm;

const email = document.getElementById('email');
const nam = document.getElementById('name');
const phone = document.getElementById('phone');
const errorMessageName = document.querySelector('.error-text-name');
const errorMessagePhone = document.querySelector('.error-text-phone');
const errorMessageEmail = document.querySelector('.error-text-email');

email.addEventListener("blur", () => {
    console.log('compared', emailReg.test(email.value));
    if (!emailReg.test(email.value)) {
        email.classList.remove('validated');
        email.classList.add('warning');
        errorMessageEmail.textContent = 'Wrong email!';
    }
    if (emailReg.test(email.value)) {
        email.classList.remove('warning');
        email.classList.add('validated');
        errorMessageEmail.textContent = '';
    }
});

nam.addEventListener("blur", () => {
    console.log('compared', nameReg.test(nam.value));
    if (!nameReg.test(nam.value)) {
        nam.classList.remove('validated');
        nam.classList.add('warning');
        errorMessageName.textContent = 'Wrong name format';
    }
    if (nameReg.test(nam.value)) {
        nam.classList.remove('warning');
        nam.classList.add('validated');
        errorMessageName.textContent = '';
    }
});

phone.addEventListener("blur", () => {
    console.log('compared', phoneReg.test(phone.value));
    if (!phoneReg.test(phone.value)) {
        phone.classList.remove('validated');
        phone.classList.add('warning');
        errorMessagePhone.textContent = 'Wrong phone number';
    }
    if (phoneReg.test(phone.value)) {
        phone.classList.remove('warning');
        phone.classList.add('validated');
        errorMessagePhone.textContent = '';
    }
});