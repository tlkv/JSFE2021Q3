import App from './components/app';

import './sass/nouislider.scss';
import './sass/style.scss';
const app = new App();
app.start();
console.log(
  'Привет! Самооценка - 200 из 200 (вместе с доп.функционалом ~205 из 220). Все пункты выполнены по ТЗ, из доп. фунционала только дополнительное поле со счетчиком количества игрушек, соответствующих ТЕКУЩЕМУ набору фильтров + кнопка прокрутки вверх. Если в какой-то момент покажется, что фильтры не работают - проверьте поле поиска, его значение по ТЗ тоже часть комбинации фильтров. Спасибо!'
);
console.log('Функционал приложения: ');
console.log(`Страница с игрушками содержит карточки всех игрушек а также фильтры, строку поиска, поле для сортировки. Выполняются требования к вёрстке +10
Карточка игрушки содержит её изображение, название, текстом или условным значком обозначено количество экземпляров, год покупки, форма, цвет, размер, является ли игрушка любимой +10
Добавление игрушек в избранное +20
Сортировка +20
Фильтры в указанном диапазоне от и до +30
Фильтры по значению +30
Можно отфильтровать игрушки по нескольким фильтрам разного типа +20
Сброс фильтров +20
Сохранение настроек в local storage +10
Поиск +30
Дополнительный функционал на выбор +~5`);
