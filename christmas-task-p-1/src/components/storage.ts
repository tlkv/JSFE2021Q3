import { AppStateObject } from './interfaces';
import { renderToys, renderFilterPanel } from './renderToys';
import { filterToys } from './filterData';

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

const upButton = document.querySelector('.up-button') as HTMLElement;

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
    Object.assign(AppState, JSON.parse(localStorage.getItem('chr-local-state') as string));
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
  searchField.value = '';
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
  renderToys(filterToys());
}

filterItems.forEach(item => {
  item.addEventListener('click', handleFilterItems);
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

document.addEventListener('scroll', () => {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    upButton.classList.add('show-button');
  } else {
    upButton.classList.remove('show-button');
  }
});
