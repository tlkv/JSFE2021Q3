import { AppStateObject, SortingTypes, ToyData, FilterValues } from './interfaces';
import { renderToys } from './renderToys';
import { filterToys, selectToys, resetFiltersHandler, resetLocalHandler, handleFilterItems } from './filterData';
import { router } from './routing';
import { chooseTree, chooseBackground, handleAudio, handleSnow, handleTreeFilters } from './treeDecoration';

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
  tree: '1',
  background: '1',
  audio: false,
  snow: false,
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

//export const qSelector = (selector: string) => document.querySelector(selector) as HTMLElement;

//page containers
export const toyContainer = document.querySelector('.toy-container') as HTMLElement;
export const emptySearchResults = document.querySelector('.nothing-found') as HTMLElement;

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

export const resetFilters = document.querySelector('.reset-filters') as HTMLInputElement;
export const resetLocal = document.querySelectorAll('.reset-local') as NodeListOf<HTMLElement>;

export const treeMain = document.querySelector('.main-tree') as HTMLImageElement;
export const treeMainContainer = document.querySelector('.main-tree-container') as HTMLElement;

/* remove 5 */
export const selectTreeContainer = document.querySelector('.tree-container') as HTMLElement;
export const selectBackgroundContainer = document.querySelector('.background-container') as HTMLElement;

export const audioButton = document.querySelector('.audio-controls') as HTMLElement;
export const snowButton = document.querySelector('.snow-controls') as HTMLElement;
export const snowWrapper = document.querySelector('.snow-wrapper') as HTMLElement;

/* leave only this + lights selector */
export const userTreeFilters = document.querySelector('.user-tree-filters') as HTMLElement;

export const routingButtons = document.querySelectorAll('.routing') as NodeListOf<HTMLElement>;
export const pages = document.querySelectorAll('.page') as NodeListOf<HTMLElement>;

const upButton = document.querySelector('.up-button') as HTMLElement;

export const audio = new Audio();
audio.src = '../assets/audio/audio.mp3';
audio.volume = 0.5;
audio.loop = true;

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

resetLocal.forEach(item => {
  item.addEventListener('click', resetLocalHandler);
});

document.addEventListener('scroll', () => {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    upButton.classList.add('show-button');
  } else {
    upButton.classList.remove('show-button');
  }
});

toyContainer.addEventListener('click', selectToys);
filterItemsContainer.addEventListener('click', handleFilterItems);

routingButtons.forEach(item => {
  item.addEventListener('click', router);
});

/* selectTreeContainer.addEventListener('click', chooseTree);
selectBackgroundContainer.addEventListener('click', chooseBackground);
audioButton.addEventListener('click', handleAudio);
snowButton.addEventListener('click', handleSnow); */

userTreeFilters.addEventListener('click', handleTreeFilters);

/* routing */

/* const areas = document.getElementsByTagName('area');
for (let index = 0; index < areas.length; index++) {
  console.log(areas);
  
  areas[index].addEventListener(
    'mouseover',
    function () {
      this.focus();
    },
    false
  );
  areas[index].addEventListener(
    'mouseout',
    function () {
      this.blur();
    },
    false
  );
} */

//snowflake test
/* const body = document.body;

setInterval(createSnowFlake, 50);

function createSnowFlake() {
	const snow_flake = document.createElement('i');
	snow_flake.classList.add('fas');
	snow_flake.classList.add('fa-snowflake');
	snow_flake.style.left = Math.random() * window.innerWidth + 'px';
	snow_flake.style.animationDuration = Math.random() * 3 + 2 + 's'; // between 2 - 5 seconds
	snow_flake.style.opacity = String(Math.random());
	snow_flake.style.fontSize = Math.random() * 10 + 10 + 'px';
	
	document.body.appendChild(snow_flake);
	
	setTimeout(() => {
		snow_flake.remove();
	}, 5000)
} */
