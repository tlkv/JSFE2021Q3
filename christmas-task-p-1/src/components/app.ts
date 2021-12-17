import data from './data';
import renderToys from './renderToys';

class App {  
  start() {
    renderToys(data);
  }
}

export default App;
