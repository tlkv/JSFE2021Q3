import data from './data';
import { renderToys } from './renderToys';
import { initSearch } from './search';
import { initCountSlider, initYearSlider } from './filterToys';

class App {  
  start() {
    renderToys(data);//renderFiltered from lS
    initSearch();
    initCountSlider(2,12);
    initYearSlider(1960,2020);
  }
}

export default App;
