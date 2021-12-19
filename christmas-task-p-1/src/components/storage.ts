import { FilterObj } from './interfaces';

export const maxSelected = 20;
export const selectedCounter = document.querySelector('.selected-toys-count');
export const searchField = document.querySelector('.search') as HTMLElement;
export const toyContainer = document.querySelector('.toy-container') as HTMLElement;
export const nothingFound = document.querySelector('.nothing-found');
export const countSlider = document.querySelector('.count-slider') as HTMLElement;
export const yearSlider = document.querySelector('.year-slider') as HTMLElement;
export const filterItems = document.querySelectorAll('.filter-item') as NodeListOf<HTMLElement>;
export const sortingOrder = document.querySelector('.sort-select') as HTMLElement;
export const filteredCounterNumber = document.querySelector('.filtered-counter-number') as HTMLElement;


/* export const filterObj {
  size: {}
} */



export const State: FilterObj = {
  shape: [],
  color: [],
  size: [],  
  selectedToys: [],
  onlyFavorite: false,
};
