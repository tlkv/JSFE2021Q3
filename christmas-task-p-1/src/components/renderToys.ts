import { ToyData } from './interfaces';
import { selectToys } from './selectToys';
import { toyContainer } from './storage';
import { nothingFound, filteredCounterNumber, State } from './storage';

export function renderToys(filteredData: ToyData[]): void {
  toyContainer.innerHTML = '';
  console.log('fData length Rerender', filteredData.length);
  filteredCounterNumber.textContent = String(filteredData.length);
  filteredData.length !== 0 ? nothingFound?.classList.add('hide') : nothingFound?.classList.remove('hide');
  //if toys is Empty nothingFound?.classList.remove('hide') : nothingFound?.classList.add('hide');
  //favorites from Array + ovrNumber of favorites
  filteredData.forEach(({ num, name, count, year, shape, color, size, favorite }) => {
    const toyCard = document.createElement('div');
    toyCard.classList.add('toy');
    if (State.selectedToys.includes(num)) toyCard.classList.add('active');
    toyCard.innerHTML = `
      <h2 class="toy-title">${name}</h2>
      <img class="toy-img" src="assets/toys/${num}.png" alt="toy">
      <div class="toy-description">
        <p class="count">Количество:<span>${count}</span></p>
        <p class="year">Год покупки:<span>${year}</span></p>
        <p class="shape">Форма:<span>${shape}</span></p>
        <p class="color">Цвет:<span>${color}</span></p>
        <p class="size">Размер:<span>${size}</span></p>
        <p class="favorite">Любимая:<span>${favorite ? 'да' : 'нет'}</span></p>
      </div>
      <div class="ribbon"></div>
      `;

    toyCard.addEventListener('click', selectToys);
    toyCard.dataset.num = String(num); //  setAttribute('data-num', String(num));
    toyContainer?.append(toyCard);
  });
}
