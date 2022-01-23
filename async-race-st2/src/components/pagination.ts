import { appState } from './store';
import { renderCars } from './cars';

export function handleCarsNext() {
  if (Number(appState.carsAmount) / appState.carsPageLimit > appState.carsPage) {
    appState.carsPage += 1;
    renderCars();
  }
}

export function handleCarsPrev() {
  if (appState.carsPage > 1) {
    appState.carsPage -= 1;
    renderCars();
  }
}
