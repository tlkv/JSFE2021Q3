import { StateObject } from './interfaces';
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

//export const panelColors = document.querySelectorAll('[data-group="color"]') as NodeListOf<HTMLElement>;



export const State: StateObject = {
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
  localStorage.setItem('chr-local-state', JSON.stringify(State));
}
export function getLocaleStorage() {
  if (localStorage.getItem('chr-local-state')) {
    //console.log('localStor' ,JSON.parse(localStorage.getItem('chr-local-state') as string));
    //const State2: StateObject = JSON.parse(localStorage.getItem('chr-local-state') as string);
    console.log('State Bef ', State);
    //renderToys(filterToys());
    Object.assign(State, JSON.parse(localStorage.getItem('chr-local-state') as string));
    console.log('StateAft ', State);
    //renderToys(filterToys());
    renderFilterPanel();
  } else {
    console.log('noLocal');
  }
  renderToys(filterToys());
}

export function initSearch() {
  searchField.setAttribute('placeholder', 'Поиск');
  searchField.focus();
}

export function handleFilterItems(e: Event) {
  const filterElement = e.target as HTMLElement;
  const inputFilterGroup = filterElement.dataset.group as string;
  const inputFilterValue = filterElement.dataset.value as string;
  console.log('state before', State);

  if (!filterElement.classList.contains('active')) {
    filterElement.classList.add('active');
    if (inputFilterGroup === 'shape') {
      State.shape.push(inputFilterValue);
    } else if (inputFilterGroup === 'color') {
      State.color.push(inputFilterValue);
    } else if (inputFilterGroup === 'size') {
      State.size.push(inputFilterValue);
    } else if (inputFilterGroup === 'favorite') {
      State.onlyFavorite = true;
    }
  } else {
    filterElement.classList.remove('active');
    if (inputFilterGroup === 'shape') {
      State.shape = State.shape.filter(elem => elem !== inputFilterValue);
      //Object.assign(State, {color: State.color.filter(elem => elem !== inputFilterValue)});
    } else if (inputFilterGroup === 'color') {
      State.color = State.color.filter(elem => elem !== inputFilterValue);
    } else if (inputFilterGroup === 'size') {
      State.size = State.size.filter(elem => elem !== inputFilterValue);
    } else if (inputFilterGroup === 'favorite') {
      State.onlyFavorite = false;
    }
  }
  //selectedToys = selectedToys.filter(elem => elem !== toySelectedNum)
  console.log('filterElement ', filterElement.dataset);
  console.log('state after', State);
  renderToys(filterToys());
}

filterItems.forEach(item => {
  item.addEventListener('click', handleFilterItems);
  //console.log('ev list numb', filterItems);
});

sortingOrder.onchange = () => {
  State.sortingOrder = sortingOrder.value;
  renderToys(filterToys());
};

searchField.addEventListener('input', () => {
  renderToys(filterToys());
});
