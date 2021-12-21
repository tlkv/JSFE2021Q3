import {
  AppState,
  countSlider,
  yearSlider,
  countDefaultValues,
  countDefaultStep,
  yearDefaultValues,
  yearDefaultStep,
} from './storage';
import { initSearch, getLocaleStorage, setLocalStorage } from './storage';
import { initSlider } from './filterSliders';
import { filterToys } from './filterData';
import { renderFilterPanel, renderToys } from './renderToys';

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
    });
  }
}

export default App;
