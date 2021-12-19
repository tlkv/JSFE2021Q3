import data from './data';
import { renderToys } from './renderToys';
import { initSearch } from './search';
import { initCountSlider, initYearSlider } from './filterToys';

class App {
  /* countSlider: void;
  constructor() {
    this.countSlider = initCountSlider();
  }   */
  start() {
    renderToys(data);//renderFiltered from lS
    initSearch();
    initCountSlider();
    initYearSlider();
  }
}

export default App;
