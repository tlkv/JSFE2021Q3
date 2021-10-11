const cDate = document.querySelector('.modal-date');
const cTime = document.querySelector('.modal-time');
const buy = document.querySelector('.buy-tickets-button');
const backgroundModal = document.querySelector('.tickets-modal-background');
const formModal = document.querySelector('.tickets-modal');
const closeModal = document.querySelector('.close-modal');

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
    const formDate = document.getElementById('date');

    const offset = new Date().getTimezoneOffset();
    const today = new Date(new Date().getTime() - (offset * 60 * 1000))
    const finalDate = today.toISOString().split('T')[0];
    formDate.setAttribute('min', finalDate)

    /*  if (formDate.value.length) {
       document.querySelector('.hide-date-time').style.display = 'none';
     } else {
       document.querySelector('.hide-date-time').style.display = 'inline';
     } */
}

lockTheDate();