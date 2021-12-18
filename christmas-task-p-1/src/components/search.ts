import { searchField } from './storage';
import { toyContainer, nothingFound } from './storage';

export function initSearch() {
  searchField.setAttribute('placeholder', 'Поиск');
  searchField.focus();
}

export function userSearch(e: Event) {
  const query = (e.target as HTMLInputElement).value.toLowerCase();
  const rendredToys = toyContainer?.querySelectorAll('.toy');
  let noResults = true;
  rendredToys?.forEach(elem => {
    if (elem.querySelector('.toy-title')?.textContent?.toLowerCase().includes(query)) {
      elem.classList.remove('hide');
      noResults = false;
    } else {
      elem.classList.add('hide');
    }
    console.log('noRes', noResults);
    noResults ? nothingFound?.classList.remove('hide') : nothingFound?.classList.add('hide');
  });
}

searchField.addEventListener('input', userSearch);
