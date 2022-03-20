import {
  AppState,
  countSlider,
  yearSlider,
  COUNT_DEFAULT_VALUES,
  COUNT_DEFAULT_STEP,
  YEAR_DEFAULT_VALUES,
  YEAR_DEFAULT_STEP,
} from './storage';
import { getLocaleStorage, setLocalStorage } from './storage';
import { filterToys, initSearch } from './filterData';
import { renderFilterPanel, renderToys } from './renderToys';
import { renderTree } from './treeDecoration';
import { renderFavorites } from './renderFavorites';
import { initSlider } from './sliders';

class App {
  initSearch: void;
  constructor() {
    this.initSearch = initSearch();
  }
  start() {
    initSlider(countSlider, AppState.countFilter, COUNT_DEFAULT_VALUES, COUNT_DEFAULT_STEP, 'countFilter');
    initSlider(yearSlider, AppState.yearFilter, YEAR_DEFAULT_VALUES, YEAR_DEFAULT_STEP, 'yearFilter');
    this.initSearch;
    window.addEventListener('beforeunload', setLocalStorage);
    window.addEventListener('load', () => {
      getLocaleStorage();
      renderFilterPanel();
      renderToys(filterToys());
      renderTree();
      renderFavorites();
    });
  }
}

export default App;
