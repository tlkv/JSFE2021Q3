import { FilterObj } from './interfaces';

export const maxSelected = 20;

//page containers
export const toyContainer = document.querySelector('.toy-container') as HTMLElement;
export const nothingFound = document.querySelector('.nothing-found');

//page elements with walues
export const selectedCounter = document.querySelector('.selected-toys-count');
export const filteredCounterNumber = document.querySelector('.filtered-counter-number') as HTMLElement;

//toys collection handlers
export const filterItems = document.querySelectorAll('.filter-item') as NodeListOf<HTMLElement>;
export const countSlider = document.querySelector('.count-slider') as HTMLElement;
export const yearSlider = document.querySelector('.year-slider') as HTMLElement;
export const sortingOrder = document.querySelector('.sort-select') as HTMLInputElement;
export const searchField = document.querySelector('.search') as HTMLInputElement;

/* export const filterObj {
  size: {}
} */

export const State: FilterObj = {
  shape: [],
  color: [],
  size: [],
  selectedToys: [],
  onlyFavorite: false,
  sortingOrder: 'sort-default',
  countFilter: [ 1, 12],
  yearFilter: [ 1940, 2020],
};
