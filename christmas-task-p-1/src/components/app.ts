import { initSearch, getLocaleStorage,setLocalStorage } from './storage';
import { initCountSlider, initYearSlider } from './filterSliders';

class App {
  /* countSlider: void;
  constructor() {
    this.countSlider = initCountSlider();
  }   */
  start() {
    //renderToys(data);
    initSearch();
    initCountSlider();//
    initYearSlider();//
    window.addEventListener('beforeunload', setLocalStorage);
    window.addEventListener('load', getLocaleStorage); 
    
    
  }
}

export default App;
