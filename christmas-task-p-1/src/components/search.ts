import { searchField } from './storage';
import { toyContainer } from './storage';

export function initSearch() {
  searchField.setAttribute('placeholder', 'Поиск');
  searchField.focus();
}

export function userSearch(e: Event) {
  const query = (e.target as HTMLInputElement).value.toLowerCase();
  const rendredToys = toyContainer?.querySelectorAll('.toy');
  rendredToys?.forEach(elem => {
    elem.querySelector('.toy-title')?.textContent?.toLowerCase().includes(query) ? elem.classList.remove('hide') : elem.classList.add('hide');
  });
}

searchField.addEventListener('input', userSearch);
