const pics = document.querySelector('.picture-inner-container');
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

shuffle(numbers);
numbers.map(rand => pics.innerHTML += `<img src="assets/img/galery${rand}.jpg" alt="gallery${rand}">`);