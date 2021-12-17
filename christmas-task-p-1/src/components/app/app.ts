/* import AppController */
import data from '../../data';
//import FilterToys from './filterToys';
import filterToys from './filterToys';
import renderToys from './renderToys';

class App {
  start(){
    const filteredToys = filterToys(data);
    renderToys(filteredToys);
  }
}

export default App;