import { initSearch, getLocaleStorage, setLocalStorage } from './storage';
import { initCountSlider, initYearSlider } from './filterSliders';

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
    window.addEventListener('load', getLocaleStorage);
  }
}

export default App;
