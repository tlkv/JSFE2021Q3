import { garageContainer, winnersContainer } from './main';

const header = document.createElement('header');
const garageButton = document.createElement('button');
const winnersButton = document.createElement('button');

export function initHeader(root: HTMLElement) {
  garageButton.textContent = 'Garage';
  winnersButton.textContent = 'Winners';
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

function toggleView(hideElem: HTMLElement | null, showElem: HTMLElement | null) {
  if (hideElem) {
    hideElem.classList.add('hide');
  }
  if (showElem) {
    showElem.classList.remove('hide');
  }
}
