import * as darkToggle from "./js/dark-theme.js";
import * as upButton from "./js/up-button.js";
import * as burgerMenu from "./js/burger-menu.js";
import * as gallery from "./js/gallery.js";
import * as videoPlayer from "./js/video-player.js";
import * as tickets from "./js/tickets.js";
import * as welcomeSlider from "./js/welcome-slider.js";
import * as exploreCompare from "./js/explore-compare.js";
import * as mapbox from "./js/mapbox.js";

export { darkToggle, upButton, burgerMenu, gallery, videoPlayer, tickets, welcomeSlider, exploreCompare, mapbox };

console.log('Hello! Self-check - 150 из 150. (153 из 160)');
console.log('Если слайдеры или сравнение изображений не грузятся - попробуйте F5 :-)');
console.log('Доп функционал:  переключатель темы на темную в шапке и кнопка кнопка прокрутки страницы вверх');
console.log('Выполнены все пункты кроме следующих: ');
console.log('Не выполненные/не засчитанные пункты(-2 каждый): ');
console.log('1) если внутри слайда проигрывается видео с YouTube, клик по стрелке перелистывания слайдов или клик по буллету останавливает проигрывание видео ');
console.log('2) можно изменить количество билетов каждого типа в поле слева при этом меняется количество билетов и общая стоимость билетов справа');

console.log('Частично выполненные пункты (-1 каждый): ');
console.log('1) если видео с YouTube проигрывается, клик по кнопке Pause останавливает его проигрывание. Также проигрывание видео останавливается, если кликнуть по другому слайду или кнопке Play в центре другого слайда. В указанной ситуации другое видео должно запуститься, а текущее остановиться. Невозможно проигрывание нескольких YouTube видео одновременно');
console.log('2) есть возможность перелистывания слайдов кликами по буллетам (кружочки внизу слайдера), при этом также меняется основное видео');
console.log('3) можно изменить тип билета в поле Ticket type слева при этом меняется тип билета, цена билета и общая стоимость билетов справа ');