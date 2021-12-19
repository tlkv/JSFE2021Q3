import { searchField } from './storage';
import { toyContainer, nothingFound } from './storage';
import data from './data';
import { renderToys } from './renderToys';

export function initSearch() {
  searchField.setAttribute('placeholder', 'Поиск');
  searchField.focus();
}

/* export function userSearch() {//rewrite to pass it to render
  const query = searchField.value.toLowerCase();
  const filtered = data.filter(item=>query.length === 0 || item.name.toLowerCase().includes(query));
  console.log('dataF', filtered);
  
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
  renderToys(filtered);
} */

//searchField.addEventListener('input', userSearch);
