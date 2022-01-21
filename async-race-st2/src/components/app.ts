import { initHeader } from './header';
import { initMain } from './main';

export class App {
  start(root: HTMLElement) {
    window.addEventListener('DOMContentLoaded', () => {
      initHeader(root);
      initMain(root);
    });
  }
}
