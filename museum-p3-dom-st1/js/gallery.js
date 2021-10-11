const pics = document.querySelector('.picture-inner-container');
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

shuffle(numbers);
numbers.map(rand => pics.innerHTML += `<img src="assets/img/galery${rand}.jpg" alt="gallery${rand}">`);


function delay(func, wait = 25, immediate = true) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

const sliderImages = document.querySelectorAll('.picture-inner-container img');

function runAnimation() {
    sliderImages.forEach(sliderImage => {
        const slideInAt = (window.scrollY + window.innerHeight) + 400;
        const finalTop = sliderImage.getBoundingClientRect().top + window.pageYOffset;
        const imageBottom = finalTop + sliderImage.height;
        const isVisible = slideInAt > finalTop;
        const notScrolled = window.scrollY < imageBottom;
        if (isVisible && notScrolled) {
            sliderImage.classList.add('gallery-item-animated');
        } else {
            sliderImage.classList.remove('gallery-item-animated');
        }
    });
}

window.addEventListener('scroll', delay(runAnimation));