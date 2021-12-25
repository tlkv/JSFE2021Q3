import {
  AppState,
  sortingFunctions,
  selectedCounter,
  maxSelected,
  searchField,
  countDefaultValues,
  yearDefaultValues,
} from './storage';
import data from './data';
import { FilterKeys, FilterValues } from './interfaces';
import { renderFilterPanel, renderToys } from './renderToys';
import { renderTree } from './treeDecoration';
import { handleAudio } from './audio';
import { renderFavorites } from './renderFavorites';
import noUiSlider from 'nouislider';
import { target } from 'nouislider';

export function initSearch() {
  searchField.setAttribute('placeholder', 'Поиск');
  searchField.focus();
}

export function initSlider(
  elem: HTMLElement,
  currentValues: FilterValues,
  defaultValues: FilterValues,
  step: number,
  stateKey: 'countFilter' | 'yearFilter'
) {
  noUiSlider.create(elem, {
    start: currentValues,
    step: step,
    connect: true,
    tooltips: true,
    format: {
      to(value) {
        return Math.floor(Number(value));
      },
      from(value) {
        return Math.floor(Number(value));
      },
    },
    range: {
      min: defaultValues[0],
      max: defaultValues[1],
    },
  });
  (elem as target).noUiSlider?.on('set', () => {
    const positions = JSON.parse(JSON.stringify((elem as target).noUiSlider?.get()));
    AppState[stateKey] = [Number(positions[0]), Number(positions[1])];
    renderToys(filterToys());
  });
}

export function setSlider(elem: HTMLElement, input: [number, number]) {
  (elem as target).noUiSlider?.set(input);
}

export function filterToys() {
  const query = searchField.value.toLowerCase();
  const tData = data.slice(0);
  const res = tData
    .filter(elem => AppState.shape.length === 0 || AppState.shape.includes(elem.shape))
    .filter(elem => AppState.color.length === 0 || AppState.color.includes(elem.color))
    .filter(elem => AppState.size.length === 0 || AppState.size.includes(elem.size))
    .filter(elem => !AppState.onlyFavorite || elem.favorite)
    .filter(elem => AppState.countFilter[0] <= Number(elem.count) && Number(elem.count) <= AppState.countFilter[1])
    .filter(elem => AppState.yearFilter[0] <= Number(elem.year) && Number(elem.year) <= AppState.yearFilter[1])
    .filter(item => query.length === 0 || item.name.toLowerCase().includes(query))
    .sort(sortingFunctions[AppState.sortingOrder]);
  return res;
}

export function selectToys(e: Event) {
  const toySelected = e.target as HTMLTemplateElement;
  if (toySelected.classList.contains('toy')) {
    if (AppState.selectedToys.length === maxSelected && !toySelected.classList.contains('active')) {
      toySelected.classList.add('maximum');
      setTimeout(() => {
        toySelected.classList.remove('maximum');
      }, 1000);
    } else {
      toySelected.classList.toggle('active');
      const toySelectedNum = toySelected.getAttribute('data-num') as string;
      AppState.selectedToys.includes(toySelectedNum)
        ? (AppState.selectedToys = AppState.selectedToys.filter(elem => elem !== toySelectedNum))
        : AppState.selectedToys.push(toySelectedNum);
      selectedCounter.textContent = String(AppState.selectedToys.length);
      renderFavorites();
    }
  }
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

export function resetFiltersHandler() {
  AppState.shape = [];
  AppState.color = [];
  AppState.size = [];
  AppState.onlyFavorite = false;
  AppState.countFilter = countDefaultValues; //
  AppState.yearFilter = yearDefaultValues;
  searchField.value = '';
  renderToys(filterToys());
  renderFilterPanel();
}

export function resetLocalHandler() {
  AppState.selectedToys = [];
  AppState.sortingOrder = 'sort-default';
  AppState.tree = '1';
  AppState.background = '1';
  AppState.audio = false;
  AppState.snow = false;
  renderTree();
  handleAudio();
  renderFavorites();
  resetFiltersHandler();
}
