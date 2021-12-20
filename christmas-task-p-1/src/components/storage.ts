import { AppStateObject } from './interfaces';
import { renderToys, renderFilterPanel } from './renderToys';
import { filterToys } from './filterData';
import App from './app';

export const maxSelected = 20;

//page containers
export const toyContainer = document.querySelector('.toy-container') as HTMLElement;
export const nothingFound = document.querySelector('.nothing-found');

//page elements with walues
export const selectedCounter = document.querySelector('.selected-toys-count') as HTMLElement;
export const filteredCounterNumber = document.querySelector('.filtered-counter-number') as HTMLElement;

//toys collection handlers
export const filterItems = document.querySelectorAll('.filter-item') as NodeListOf<HTMLElement>;
export const countSlider = document.querySelector('.count-slider') as HTMLElement;
export const yearSlider = document.querySelector('.year-slider') as HTMLElement;
export const sortingOrder = document.querySelector('.sort-select') as HTMLInputElement;
export const searchField = document.querySelector('.search') as HTMLInputElement;

//reset buttons
export const resetFilters = document.querySelector('.reset-filters') as HTMLInputElement;
export const resetLocal = document.querySelector('.reset-local') as HTMLInputElement;

export const AppState: AppStateObject = {
  shape: [],
  color: [],
  size: [],
  selectedToys: [],
  onlyFavorite: false,
  sortingOrder: 'sort-default',
  countFilter: [1, 12],
  yearFilter: [1940, 2020],
};

export function setLocalStorage() {
  localStorage.setItem('chr-local-state', JSON.stringify(AppState));
}
export function getLocaleStorage() {
  if (localStorage.getItem('chr-local-state')) {
    //console.log('localStor' ,JSON.parse(localStorage.getItem('chr-local-state') as string));
    //const AppState2: AppStateObject = JSON.parse(localStorage.getItem('chr-local-state') as string);
    console.log('AppState Bef ', AppState);
    //renderToys(filterToys());
    Object.assign(AppState, JSON.parse(localStorage.getItem('chr-local-state') as string));
    console.log('AppStateAft ', AppState);
    //renderToys(filterToys());
    renderFilterPanel();
  } else {
    console.log('noLocal');
  }
  renderFilterPanel();
  renderToys(filterToys());
}

function resetFiltersHandler() {
  AppState.shape = [];
  AppState.color = [];
  AppState.size = [];  
  AppState.onlyFavorite = false;  
  AppState.countFilter = [1, 12];
  AppState.yearFilter = [1940, 2020];
  searchField.textContent = '';
  renderToys(filterToys());
  renderFilterPanel();
}

function resetLocalHandler() {  
  AppState.selectedToys = [];  
  AppState.sortingOrder = 'sort-default';
  resetFiltersHandler();  
}

export function initSearch() {
  searchField.setAttribute('placeholder', 'Поиск');
  searchField.focus();
}

export function handleFilterItems(e: Event) {
  const filterElement = e.target as HTMLElement;
  const inputFilterGroup = filterElement.dataset.group as string;
  const inputFilterValue = filterElement.dataset.value as string;
  console.log('state before', AppState);

  if (!filterElement.classList.contains('active')) {
    filterElement.classList.add('active');
    if (inputFilterGroup === 'shape') {
      AppState.shape.push(inputFilterValue);
    } else if (inputFilterGroup === 'color') {
      AppState.color.push(inputFilterValue);
    } else if (inputFilterGroup === 'size') {
      AppState.size.push(inputFilterValue);
    } else if (inputFilterGroup === 'favorite') {
      AppState.onlyFavorite = true;
    }
  } else {
    filterElement.classList.remove('active');
    if (inputFilterGroup === 'shape') {
      AppState.shape = AppState.shape.filter(elem => elem !== inputFilterValue);
      //Object.assign(AppState, {color: AppState.color.filter(elem => elem !== inputFilterValue)});
    } else if (inputFilterGroup === 'color') {
      AppState.color = AppState.color.filter(elem => elem !== inputFilterValue);
    } else if (inputFilterGroup === 'size') {
      AppState.size = AppState.size.filter(elem => elem !== inputFilterValue);
    } else if (inputFilterGroup === 'favorite') {
      AppState.onlyFavorite = false;
    }
  }
  //selectedToys = selectedToys.filter(elem => elem !== toySelectedNum)
  console.log('filterElement ', filterElement.dataset);
  console.log('state after', AppState);
  renderToys(filterToys());
}

filterItems.forEach(item => {
  item.addEventListener('click', handleFilterItems);
  //console.log('ev list numb', filterItems);
});

sortingOrder.onchange = () => {
  AppState.sortingOrder = sortingOrder.value;
  renderToys(filterToys());
};

searchField.addEventListener('input', () => {
  renderToys(filterToys());
});

resetFilters.addEventListener('click', resetFiltersHandler);

resetLocal.addEventListener('click', resetLocalHandler);
