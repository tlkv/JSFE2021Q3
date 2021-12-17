import data from './data';
import { renderToys } from './renderToys';
import { initSearch } from './search';

class App {  
  start() {
    renderToys(data);//renderFiltered from lS
    initSearch();
  }
}

export default App;
