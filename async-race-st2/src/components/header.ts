import { garageContainer, winnersContainer } from './main';

const header = document.createElement('header');
const garageButton = document.createElement('button');
const winnersButton = document.createElement('button');
garageButton.innerHTML = `<i class="fas fa-car"></i> Garage`;
winnersButton.innerHTML = `<i class="fas fa-medal"></i> Winners`;

function toggleView(hideElem: HTMLElement | null, showElem: HTMLElement | null) {
  if (hideElem) {
    hideElem.classList.add('hide');
  }
  if (showElem) {
    showElem.classList.remove('hide');
  }
}

export function initHeader(root: HTMLElement) {
  header.append(garageButton);
  header.append(winnersButton);
  garageButton.addEventListener('click', () => {
    toggleView(winnersContainer, garageContainer);
  });
  winnersButton.addEventListener('click', () => {
    toggleView(garageContainer, winnersContainer);
  });
  root.append(header);
}
