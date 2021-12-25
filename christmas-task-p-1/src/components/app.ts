import {
  AppState,
  countSlider,
  yearSlider,
  countDefaultValues,
  countDefaultStep,
  yearDefaultValues,
  yearDefaultStep,
} from './storage';
import { getLocaleStorage, setLocalStorage } from './storage';
import { filterToys, initSlider, initSearch } from './filterData';
import { renderFilterPanel, renderToys } from './renderToys';
import { renderTree } from './treeDecoration';

class App {
  initSearch: void;
  constructor() {
    this.initSearch = initSearch();
  }
  start() {
    initSlider(countSlider, AppState.countFilter, countDefaultValues, countDefaultStep, 'countFilter');
    initSlider(yearSlider, AppState.yearFilter, yearDefaultValues, yearDefaultStep, 'yearFilter');
    this.initSearch;
    window.addEventListener('beforeunload', setLocalStorage);
    window.addEventListener('load', () => {
      getLocaleStorage();
      renderFilterPanel();
      renderToys(filterToys());
      renderTree();
    });
  }
}

export default App;
