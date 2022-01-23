import { renderCars, handleCarsAction, createCar, updateCar } from './cars';
import { appState } from './store';
import { handleCarsNext, handleCarsPrev } from './pagination';

export const main = document.createElement('main');
export const garageContainer = document.createElement('div');
export const winnersContainer = document.createElement('div');
export const garageInner = document.createElement('div');
export const garageControls = document.createElement('div');
export const winnersInner = document.createElement('div');

export const createInput = document.createElement('input');
export const createColor = document.createElement('input');
export const createButton = document.createElement('button');

export const updateInput = document.createElement('input');
export const updateColor = document.createElement('input');
export const updateButton = document.createElement('button');

export const raceButton = document.createElement('button');
export const resetButton = document.createElement('button');
export const generateButton = document.createElement('button');

export const garageCount = document.createElement('span');
export const garageCurrentPage = document.createElement('span');
export const garagePrev = document.createElement('button');
export const garageNext = document.createElement('button');

export async function initMain(root: HTMLElement) {
  const headingGarage = document.createElement('h2');
  const pageGarage = document.createElement('h4');
  const carsPagination = document.createElement('div');

  headingGarage.innerHTML = `Garage: `;
  pageGarage.innerHTML = `Page #`;
  garageCount.textContent = appState.carsAmount;
  garageCurrentPage.textContent = String(appState.carsPage);
  garageCount.classList.add('garage-count');
  garageCurrentPage.classList.add('garage-current-page');
  headingGarage.append(garageCount);
  pageGarage.append(garageCurrentPage);
  garageContainer.classList.add('garage-container');
  garageControls.classList.add('garage-controls');

  carsPagination.classList.add('cars-pagination');
  garageNext.classList.add('cars-prev"');
  garagePrev.classList.add('cars-prev"');
  garageNext.textContent = 'Next';
  garagePrev.textContent = 'Prev';
  carsPagination.append(garagePrev, garageNext);

  garageNext.addEventListener('click', handleCarsNext);
  garagePrev.addEventListener('click', handleCarsPrev);

  createInput.type = 'text';
  createColor.type = 'color';
  createButton.textContent = 'Create';

  updateInput.type = 'text';
  updateColor.type = 'color';
  updateButton.textContent = 'Update';

  raceButton.textContent = 'Race';
  resetButton.textContent = 'Reset Race';
  generateButton.textContent = 'Generate Cars';

  createButton.addEventListener('click', createCar);
  updateButton.addEventListener('click', updateCar);

  garageControls.append(
    createInput,
    createColor,
    createButton,
    updateInput,
    updateColor,
    updateButton,
    raceButton,
    resetButton,
    generateButton
  );

  garageInner.classList.add('garage-inner');
  garageInner.addEventListener('click', handleCarsAction);
  garageContainer.append(garageControls, headingGarage, pageGarage, carsPagination, garageInner);

  const headingWinners = document.createElement('h2'); // remake
  winnersContainer.classList.add('winners-container', 'hide');
  winnersInner.classList.add('winners-inner');
  winnersContainer.append(headingWinners, winnersInner);

  main.append(garageContainer, winnersContainer);
  root.append(main);
}
