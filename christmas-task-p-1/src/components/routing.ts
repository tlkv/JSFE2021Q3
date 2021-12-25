import { pages } from './storage';

export function router(e: Event) {
  pages.forEach(page => {
    page.dataset.routing === (e.target as HTMLElement).dataset.routing
      ? page.classList.remove('hide')
      : page.classList.add('hide');
  });
}
