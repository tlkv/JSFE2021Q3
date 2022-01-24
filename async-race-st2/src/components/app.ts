import { initHeader } from './header';
import { initGarage, initWinners } from './main';
import { renderCars } from './cars';
import { renderWinners } from './winners';

export class App {
  start(root: HTMLElement) {
    window.addEventListener('DOMContentLoaded', async () => {
      initHeader(root);
      initGarage(root);
      initWinners();
      await renderCars();
      await renderWinners();
    });
  }
}
