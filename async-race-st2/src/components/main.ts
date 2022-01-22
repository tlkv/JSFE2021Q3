import { getCars } from "./api";

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

export function initMain(root: HTMLElement) {
  const headingGarage = document.createElement('h2');
  headingGarage.textContent = 'Garage';
  garageContainer.classList.add('garage-container');
  garageContainer.append(headingGarage);

  garageControls.classList.add('garage-controls');

  createInput.type = 'text';
  createColor.type = 'color';
  createButton.textContent = 'Create';

  updateInput.type = 'text';
  updateColor.type = 'color'; // forEach
  updateButton.textContent = 'Update';

  raceButton.textContent = 'Race';
  resetButton.textContent = 'Reset';
  generateButton.textContent = 'Generate Cars';

  generateButton.addEventListener('click', () => {
    getCars();
  })

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

  garageInner.textContent = `inside Garage`;
  garageInner.classList.add('garage-inner');
  garageContainer.append(garageControls, garageInner);

  const headingWinners = document.createElement('h2');
  headingWinners.textContent = 'Winners';
  winnersContainer.classList.add('winners-container', 'hide');
  winnersInner.textContent = `inside Winners`;
  winnersInner.classList.add('winners-inner');
  winnersContainer.append(headingWinners, winnersInner);

  main.append(garageContainer, winnersContainer);
  root.append(main);
}
