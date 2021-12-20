import { toyContainer, selectedCounter, nothingFound, filteredCounterNumber, State, filterItems  } from './storage';
import { ToyData } from './interfaces';
import { selectToys } from './filterData';


export function renderToys(filteredData: ToyData[]): void {
  toyContainer.innerHTML = '';
  console.log('fData length Rerender', filteredData.length);
  filteredCounterNumber.textContent = String(filteredData.length);
  filteredData.length !== 0 ? nothingFound?.classList.add('hide') : nothingFound?.classList.remove('hide');
  selectedCounter.textContent = String(State.selectedToys.length);
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
    toyCard.dataset.num = String(num);
    toyContainer?.append(toyCard);
  });
}

export function renderFilterPanel () {
  filterItems.forEach(item=>{
    const inputFilterGroup = item.dataset.group as string;
    const inputFilterValue = item.dataset.value as string;
    if (inputFilterGroup === 'shape') {
      State.shape.includes(inputFilterValue) ? item.classList.add('active') : item.classList.remove('active');
    } else if (inputFilterGroup === 'color') {
      State.color.includes(inputFilterValue) ? item.classList.add('active') : item.classList.remove('active');
    } else if (inputFilterGroup === 'size') {
      State.size.includes(inputFilterValue) ? item.classList.add('active') : item.classList.remove('active');
    } else if (inputFilterGroup === 'favorite') {
      State.onlyFavorite ? item.classList.add('active') : item.classList.remove('active');
    }    
  }); 
  
}