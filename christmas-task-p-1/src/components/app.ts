import { initSearch, getLocaleStorage, setLocalStorage } from './storage';
import { initCountSlider, initYearSlider } from './filterSliders';
import { filterToys } from './filterData';
import { renderFilterPanel, renderToys } from './renderToys';

class App {
  initSearch: void;
  constructor() {
    this.initSearch = initSearch();
  }
  start() {
    this.initSearch;
    initCountSlider();
    initYearSlider();
    window.addEventListener('beforeunload', setLocalStorage);
    window.addEventListener('load', () => {
      getLocaleStorage();
      renderFilterPanel();
      renderToys(filterToys());
    });
  }
}

export default App;
