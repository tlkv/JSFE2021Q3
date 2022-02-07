/* eslint-disable import/no-cycle */
import {
  handleCarsAction,
  createCar,
  updateCar,
  createRandomCars,
  startRace,
  resetRace,
} from './cars';
import appState from './store';
import { sortWinnersTable } from './winners';
// eslint-disable-next-line object-curly-newline
import { handleCarsNext, handleCarsPrev, handleWinnersNext, handleWinnersPrev } from './pagination';

export const main = document.createElement('main');

export const garageContainer = document.createElement('div');
export const garageControls = document.createElement('div');
export const garageCreateInput = document.createElement('input');
export const garageCreateColor = document.createElement('input');
export const garageCreateButton = document.createElement('button');
export const garageUpdateInput = document.createElement('input');
export const garageUpdateColor = document.createElement('input');
export const garageUpdateButton = document.createElement('button');
export const garageRaceButton = document.createElement('button');
export const garageResetButton = document.createElement('button');
export const garageGenerateButton = document.createElement('button');
export const garageHeading = document.createElement('h2');
export const garageCount = document.createElement('span');
export const garageCurrentPage = document.createElement('h4');
export const garageCurrentPageNum = document.createElement('span');
export const garagePagination = document.createElement('div');
export const garagePrev = document.createElement('button');
export const garageNext = document.createElement('button');
export const garageInner = document.createElement('div');

export const winnerPopup = document.createElement('div');
winnerPopup.classList.add('winner-popup', 'hide');

garageCreateButton.textContent = 'Create';
garageUpdateButton.textContent = 'Update';
garageRaceButton.textContent = 'Start race';
garageResetButton.textContent = 'Reset Race/Cars';
garageGenerateButton.textContent = 'Generate Cars';
garageHeading.innerHTML = '<i class="fas fa-car"></i> Garage: ';
garageCurrentPage.innerHTML = 'Garage Page #';
garageCreateInput.type = 'text';
garageCreateColor.type = 'color';
garageUpdateInput.type = 'text';
garageUpdateColor.type = 'color';
garageNext.textContent = 'Next';
garagePrev.textContent = 'Prev';
garageContainer.classList.add('garage-container');
garageCount.classList.add('garage-count');
garageCurrentPageNum.classList.add('garage-current-page');
garageControls.classList.add('garage-controls');
garagePagination.classList.add('garage-pagination');
garageNext.classList.add('garage-next');
garagePrev.classList.add('garage-prev');
garageInner.classList.add('garage-inner');

export function initGarage(root: HTMLElement) {
  garageHeading.append(garageCount);
  garageCurrentPage.append(garageCurrentPageNum);
  garagePagination.append(garagePrev, garageNext);
  garageCount.textContent = appState.carsAmount;
  garageCurrentPageNum.textContent = String(appState.garagePageCurrent);

  garageControls.append(
    garageCreateInput,
    garageCreateColor,
    garageCreateButton,
    garageUpdateInput,
    garageUpdateColor,
    garageUpdateButton,
    garageRaceButton,
    garageResetButton,
    garageGenerateButton,
  );

  garageContainer.append(
    garageControls,
    garageHeading,
    garageCurrentPage,
    garagePagination,
    garageInner,
  );
  main.append(garageContainer, winnerPopup);
  root.append(main);

  garageNext.addEventListener('click', handleCarsNext);
  garagePrev.addEventListener('click', handleCarsPrev);
  garageCreateButton.addEventListener('click', createCar);
  garageUpdateButton.addEventListener('click', updateCar);
  garageGenerateButton.addEventListener('click', createRandomCars);
  garageInner.addEventListener('click', handleCarsAction);
  garageRaceButton.addEventListener('click', startRace);
  garageResetButton.addEventListener('click', resetRace);
}

export const winnersContainer = document.createElement('div');
export const winnersHeading = document.createElement('h2');
export const winnersCount = document.createElement('span');
export const winnersCurrentPage = document.createElement('h4');
export const winnersCurrentPageNum = document.createElement('span');
export const winnersPagination = document.createElement('div');
export const winnersPrev = document.createElement('button');
export const winnersNext = document.createElement('button');
export const winnersTopRow = document.createElement('div');
export const winnersInner = document.createElement('div');

export const sortWinsWrapper = document.createElement('div');
export const sortTimeWrapper = document.createElement('div');

export const sortWinsButton = document.createElement('button');
export const sortTimeButton = document.createElement('button');
sortWinsButton.textContent = 'Wins';
sortWinsButton.setAttribute('data-sorting', 'wins');
sortTimeButton.textContent = 'Time';
sortTimeButton.setAttribute('data-sorting', 'time');

sortWinsWrapper.classList.add('winner-header-item', 'winner-header-wins');
sortTimeWrapper.classList.add('winner-header-item', 'winner-header-time');

winnersHeading.innerHTML = '<i class="fas fa-medal"></i> Winners: ';
winnersCurrentPage.innerHTML = 'Winners Page #';
winnersNext.textContent = 'Next';
winnersPrev.textContent = 'Prev';

winnersContainer.classList.add('winners-container', 'hide');
winnersInner.classList.add('winners-inner');
winnersCount.classList.add('winners-count');
winnersCurrentPageNum.classList.add('winners-current-page');
winnersPagination.classList.add('winners-pagination');
winnersNext.classList.add('winners-next');
winnersPrev.classList.add('winners-prev');
winnersTopRow.classList.add('winners-top-row');

winnersTopRow.innerHTML = `
<div class="winner-header-item winner-header-num">Number</div>
<div class="winner-header-item winner-header-car">Car</div>
<div class="winner-header-item winner-header-name">Name</div>`;

export function initWinners() {
  winnersHeading.append(winnersCount);
  winnersCurrentPage.append(winnersCurrentPageNum);
  winnersPagination.append(winnersPrev, winnersNext);
  winnersCount.textContent = appState.winnersAmount;
  sortWinsWrapper.append(sortWinsButton);
  sortTimeWrapper.append(sortTimeButton);
  winnersTopRow.append(sortWinsWrapper, sortTimeWrapper);

  winnersCurrentPageNum.textContent = String(appState.winnersPageCurrent);
  winnersContainer.append(
    winnersHeading,
    winnersCurrentPage,
    winnersPagination,
    winnersTopRow,
    winnersInner,
  );

  main.append(winnersContainer);

  [sortWinsButton, sortTimeButton].forEach((item) => {
    item.addEventListener('click', sortWinnersTable);
  });
  winnersNext.addEventListener('click', handleWinnersNext);
  winnersPrev.addEventListener('click', handleWinnersPrev);
}
