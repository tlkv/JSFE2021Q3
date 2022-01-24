import { appState } from './store';
import { renderCars } from './cars';
import { renderWinners } from './winners';

export function handleCarsNext() {
  if (Number(appState.carsAmount) / appState.garagePageLimit > appState.garagePageCurrent) {
    appState.garagePageCurrent += 1;
    renderCars();
  }
}

export function handleCarsPrev() {
  if (appState.garagePageCurrent > 1) {
    appState.garagePageCurrent -= 1;
    renderCars();
  }
}

export function handleWinnersNext() {
  if (Number(appState.winnersAmount) / appState.winnersPageLimit > appState.winnersPageCurrent) {
    appState.winnersPageCurrent += 1;
    renderWinners();
  }
}

export function handleWinnersPrev() {
  if (appState.winnersPageCurrent > 1) {
    appState.winnersPageCurrent -= 1;
    renderWinners();
  }
}
