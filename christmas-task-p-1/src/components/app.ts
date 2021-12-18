import data from './data';
import { renderToys } from './renderToys';
import { initSearch } from './search';
import { initSliders } from './filterToys';

class App {  
  start() {
    renderToys(data);//renderFiltered from lS
    initSearch();
    initSliders();
  }
}

export default App;
