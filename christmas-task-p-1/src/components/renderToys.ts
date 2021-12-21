import { AppState } from './storage';
import {
  toyContainer,
  selectedCounter,
  emptySearchResults,
  filteredCounterNumber,
  filterItems,
  sortingOrder,
} from './storage';
import { ToyData, filterKeys } from './interfaces';
import { setCountSlider, setYearSlider } from './filterSliders';

export function renderToys(filteredData: Array<ToyData>): void {
  toyContainer.innerHTML = '';
  filteredCounterNumber.textContent = String(filteredData.length);
  filteredData.length !== 0
    ? emptySearchResults?.classList.add('hide-opacity')
    : emptySearchResults?.classList.remove('hide-opacity');
  selectedCounter.textContent = String(AppState.selectedToys.length);
  filteredData.forEach(({ num, name, count, year, shape, color, size, favorite }) => {
    const toyCard = document.createElement('div');
    toyCard.classList.add('toy');
    if (AppState.selectedToys.includes(num)) toyCard.classList.add('active');
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
      <div class="chosen"></div>
      `;
    toyCard.dataset.num = String(num);
    toyContainer?.append(toyCard);
  });
}

export function renderFilterPanel() {
  filterItems.forEach(item => {
    const inputFilterGroup = item.dataset.group as string;
    const inputFilterKey = inputFilterGroup as filterKeys;
    const inputFilterValue = item.dataset.value as string;
    if (inputFilterGroup === 'favorite') {
      AppState.onlyFavorite ? item.classList.add('active') : item.classList.remove('active');
    } else {
      AppState[inputFilterKey].includes(inputFilterValue)
        ? item.classList.add('active')
        : item.classList.remove('active');
    }
  });
  sortingOrder.value = AppState.sortingOrder;
  setCountSlider([AppState.countFilter[0], AppState.countFilter[1]]);
  setYearSlider([AppState.yearFilter[0], AppState.yearFilter[1]]);
}
