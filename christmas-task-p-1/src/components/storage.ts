import { AppStateObject, FilterKeys, SortingTypes, ToyData, FilterValues } from './interfaces';
import { renderToys, renderFilterPanel } from './renderToys';
import { filterToys, selectToys } from './filterData';

export const maxSelected = 20;

export const countDefaultValues: FilterValues = [1, 12];
export const countDefaultStep = 1;
export const yearDefaultValues: FilterValues = [1940, 2020];
export const yearDefaultStep = 10;


//page containers
export const toyContainer = document.querySelector('.toy-container') as HTMLElement;
export const emptySearchResults = document.querySelector('.nothing-found');

//page elements with walues
export const selectedCounter = document.querySelector('.selected-toys-count') as HTMLElement;
export const filteredCounterNumber = document.querySelector('.filtered-counter-number') as HTMLElement;

//toys collection handlers
export const filterItems = document.querySelectorAll('.filter-item') as NodeListOf<HTMLElement>;
export const filterItemsContainer = document.querySelector('.filters') as HTMLElement;
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


export const sortingFunctions = {
  'sort-default': function (a: ToyData, b: ToyData) {
    return Number(a.num) < Number(b.num) ? -1 : 1;
  },
  'sort-name-asc': function (a: ToyData, b: ToyData) {
    return a.name < b.name ? -1 : 1;
  },
  'sort-name-desc': function (a: ToyData, b: ToyData) {
    return a.name > b.name ? -1 : 1;
  },
  'sort-year-asc': function (a: ToyData, b: ToyData) {
    return Number(a.year) < Number(b.year) ? -1 : 1;
  },
  'sort-year-desc': function (a: ToyData, b: ToyData) {
    return Number(a.year) > Number(b.year) ? -1 : 1;
  },
}


export function setLocalStorage() {
  localStorage.setItem('chr-local-state', JSON.stringify(AppState));
}
export function getLocaleStorage() {
  if (localStorage.getItem('chr-local-state')) {
    Object.assign(AppState, JSON.parse(localStorage.getItem('chr-local-state') as string));
  }
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
  if (!filterElement.classList.contains('filter-item')) {    
    return false;
  }  
  const inputFilterGroup = filterElement.dataset.group as string;
  const inputFilterKey = inputFilterGroup as FilterKeys;
  const inputFilterValue = filterElement.dataset.value as string;
  if (inputFilterGroup === 'favorite') {
    AppState.onlyFavorite = !filterElement.classList.contains('active');
  } else {
    !filterElement.classList.contains('active')
      ? AppState[inputFilterKey].push(inputFilterValue)
      : (AppState[inputFilterKey] = AppState[inputFilterKey].filter(elem => elem !== inputFilterValue));
  }
  filterElement.classList.toggle('active');
  renderToys(filterToys());
}

sortingOrder.onchange = () => {
  AppState.sortingOrder = sortingOrder.value as SortingTypes;
  renderToys(filterToys());
};

resetFilters.addEventListener('click', resetFiltersHandler);

searchField.addEventListener('input', () => {
  renderToys(filterToys());
});

resetLocal.addEventListener('click', resetLocalHandler);

document.addEventListener('scroll', () => {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    upButton.classList.add('show-button');
  } else {
    upButton.classList.remove('show-button');
  }
});

toyContainer.addEventListener('click', selectToys);
filterItemsContainer.addEventListener('click', handleFilterItems);