import { AppState, favContainer } from './storage';
import data from './data';

export function renderFavorites() {
  favContainer.innerHTML = '';
  const defaultSet = data.filter(item => 1 <= Number(item.num) && Number(item.num) <= 20).map(i => i.num);
  const filtered = AppState.selectedToys.length !== 0 ? AppState.selectedToys.slice() : defaultSet;
  data.forEach(({ num, count }) => {
    if (filtered.includes(num)) {
      const favCard = document.createElement('div');
      favCard.classList.add('favorites-card');
      favCard.innerHTML = `
      <p class="favorites-count">${count}</p>
      `;
      for (let i = 1; i <= Number(count); i++) {
        favCard.innerHTML += `<img class="favorites-card-img" src="assets/toys/${num}.png" alt="toy" id="${num}-${
          Number(count) - i + 1
        }" draggable="true" data-imgnum="${num}" data-count="${count}">`;
      }
      favCard.dataset.num = String(num);
      favContainer?.append(favCard);
    }
  });
}
