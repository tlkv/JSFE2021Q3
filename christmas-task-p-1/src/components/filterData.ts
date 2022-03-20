import {
  AppState,
  sortingFunctions,
  selectedCounter,
  MAX_SELECTED,
  searchField,
  COUNT_DEFAULT_VALUES,
  YEAR_DEFAULT_VALUES,
} from './storage';
import data from './data';
import { FilterKeys } from './interfaces';
import { renderFilterPanel, renderToys } from './renderToys';
import { renderTree } from './treeDecoration';
import { handleAudio } from './audio';
import { renderFavorites } from './renderFavorites';

export function filterToys() {
  const query = searchField.value.toLowerCase();
  return data
    .slice(0)
    .filter(elem => AppState.shape.length === 0 || AppState.shape.includes(elem.shape))
    .filter(elem => AppState.color.length === 0 || AppState.color.includes(elem.color))
    .filter(elem => AppState.size.length === 0 || AppState.size.includes(elem.size))
    .filter(elem => !AppState.onlyFavorite || elem.favorite)
    .filter(elem => AppState.countFilter[0] <= Number(elem.count) && Number(elem.count) <= AppState.countFilter[1])
    .filter(elem => AppState.yearFilter[0] <= Number(elem.year) && Number(elem.year) <= AppState.yearFilter[1])
    .filter(item => query.length === 0 || item.name.toLowerCase().includes(query))
    .sort(sortingFunctions[AppState.sortingOrder]);
}

export function selectToys(e: Event) {
  const toySelected = e.target as HTMLTemplateElement;
  if (toySelected.classList.contains('toy')) {
    if (AppState.selectedToys.length === MAX_SELECTED && !toySelected.classList.contains('active')) {
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
      selectedCounter.textContent = AppState.selectedToys.length.toString();
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
  AppState.countFilter = COUNT_DEFAULT_VALUES; //
  AppState.yearFilter = YEAR_DEFAULT_VALUES;
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
  AppState.lightsOn = false;
  AppState.lights = 'multicolor';
  renderTree();
  handleAudio();
  renderFavorites();
  resetFiltersHandler();
}

export function resetTreeHandler() {
  AppState.tree = '1';
  AppState.background = '1';
  AppState.audio = false;
  AppState.snow = false;
  AppState.lightsOn = false;
  AppState.lights = 'multicolor';
  renderTree();
  handleAudio();
  renderFavorites();
}

export function initSearch() {
  searchField.setAttribute('placeholder', 'Поиск');
  searchField.focus();
}
