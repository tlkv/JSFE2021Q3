// eslint-disable-next-line import/no-named-as-default
import initHeader from './header';
import { initGarage, initWinners } from './main';
import { renderCars } from './cars';
import { renderWinners } from './winners';

class App {
  root: HTMLElement;

  constructor(root: HTMLElement) {
    this.root = root;
  }

  start() {
    window.addEventListener('DOMContentLoaded', async () => {
      initHeader(this.root);
      initGarage(this.root);
      initWinners();
      await renderCars();
      await renderWinners();
    });
  }
}

export default App;
