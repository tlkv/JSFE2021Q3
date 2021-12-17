import data from '../../data';
import filterToys from './filterToys';
import renderToys from './renderToys';
import { FilterObj } from './filterToys';

class App {
  start() {
    const filterObj: FilterObj = {
      favorite: false,
    };
    const filterFavourite = document.querySelector('.favorite-input');
    filterFavourite?.addEventListener('click', ()=>{
      console.log('press ', filterObj.favorite);
      filterObj.favorite = (filterObj.favorite) ? false: true;
      const filteredToys = filterToys(data, filterObj);
      renderToys(filteredToys);
    }
    );
    const filteredToys = filterToys(data, filterObj);
    renderToys(filteredToys);
  }
}

export default App;
