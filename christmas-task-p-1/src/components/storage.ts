import { AppStateObject, SortingTypes, ToyData, FilterValues } from './interfaces';
import { renderToys } from './renderToys';
import { filterToys, selectToys, resetFiltersHandler, resetLocalHandler, handleFilterItems } from './filterData';

//app default values
export const maxSelected = 20;
export const countDefaultValues: FilterValues = [1, 12];
export const countDefaultStep = 1;
export const yearDefaultValues: FilterValues = [1940, 2020];
export const yearDefaultStep = 10;

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
};

export const qSelector = (selector: string) => document.querySelector(selector) as HTMLElement;

//page containers
export const toyContainer = qSelector('.toy-container');
export const emptySearchResults = qSelector('.nothing-found');

//page elements with walues
export const selectedCounter = qSelector('.selected-toys-count');
export const filteredCounterNumber = qSelector('.filtered-counter-number');

//toys collection handlers
export const filterItems = document.querySelectorAll('.filter-item') as NodeListOf<HTMLElement>;
export const filterItemsContainer = qSelector('.filters');
export const countSlider = qSelector('.count-slider');
export const yearSlider = qSelector('.year-slider');

export const sortingOrder = document.querySelector('.sort-select') as HTMLInputElement;
export const searchField = document.querySelector('.search') as HTMLInputElement;

export const resetFilters = document.querySelector('.reset-filters') as HTMLInputElement;
export const resetLocal = document.querySelector('.reset-local') as HTMLInputElement;

const routingButtons = document.querySelectorAll('.routing') as NodeListOf<HTMLElement>;
const pages = document.querySelectorAll('.page') as NodeListOf<HTMLElement>;

const upButton = qSelector('.up-button');

export function setLocalStorage() {
  localStorage.setItem('chr-local-state', JSON.stringify(AppState));
}

export function getLocaleStorage() {
  if (localStorage.getItem('chr-local-state')) {
    Object.assign(AppState, JSON.parse(localStorage.getItem('chr-local-state') as string));
  }
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

/* routing */

function router(e: Event) {
  pages.forEach(page => {
    page.dataset.routing === (e.target as HTMLElement).dataset.routing ? page.classList.remove('hide') : page.classList.add('hide');
  });
}

routingButtons.forEach(item => {
  item.addEventListener('click', router);
});
