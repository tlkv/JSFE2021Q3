export const main = document.createElement('main');
export const garageContainer = document.createElement('div');
export const winnersContainer = document.createElement('div');
export const garageInner = document.createElement('div');
export const winnersInner = document.createElement('div');

export function initMain(root: HTMLElement) {
  const headingGarage = document.createElement('h2');
  headingGarage.textContent = 'Garage';
  garageContainer.classList.add('garage-container');
  garageContainer.append(headingGarage);
  garageInner.textContent = `inside Garage`;
  garageInner.classList.add('garage-inner');
  garageContainer.append(garageInner);

  const headingWinners = document.createElement('h2');
  headingWinners.textContent = 'Winners';
  winnersContainer.classList.add('winners-container', 'hide');
  winnersContainer.append(headingWinners);
  winnersInner.textContent = `inside Winners`;
  winnersInner.classList.add('winners-inner');
  winnersContainer.append(winnersInner);

  main.append(garageContainer);
  main.append(winnersContainer);
  root.append(main);
}
