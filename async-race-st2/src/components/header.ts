import { garageContainer, winnersContainer } from './main';

const header = document.createElement('header');
const garageButton = document.createElement('button');
const winnersButton = document.createElement('button');
garageButton.innerHTML = '<i class="fas fa-car"></i> Garage';
winnersButton.innerHTML = '<i class="fas fa-medal"></i> Winners';

export default function initHeader(root: HTMLElement) {
  header.append(garageButton);
  header.append(winnersButton);
  garageButton.addEventListener('click', () => {
    garageContainer.classList.remove('hide');
    winnersContainer.classList.add('hide');
  });
  winnersButton.addEventListener('click', () => {
    garageContainer.classList.add('hide');
    winnersContainer.classList.remove('hide');
  });
  root.append(header);
}
