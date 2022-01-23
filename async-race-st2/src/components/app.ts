import { initHeader } from './header';
import { initMain } from './main';
import { renderCars } from './cars';

export class App {
  start(root: HTMLElement) {
    window.addEventListener('DOMContentLoaded', async () => {
      initHeader(root);
      initMain(root);
      renderCars();
    });
  }
}
