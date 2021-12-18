import { countSlider, yearSlider } from "./storage";
import noUiSlider from 'nouislider';

export function initSliders() {
  noUiSlider.create(countSlider, {
    start: [1, 12],
    step: 1,
    connect: true,
    tooltips: true,
    format: {
      to(value) {
        return Math.floor(Number(value));
      },
      from(value) {
        return Math.floor(Number(value));
      },
    },
    range: {
        'min': 1,
        'max': 12
    }
  });
  noUiSlider.create(yearSlider, {
    start: [1940, 2020],
    step: 1,
    connect: true,
    tooltips: true,
    format: {
      to(value) {
        return Math.floor(Number(value));
      },
      from(value) {
        return Math.floor(Number(value));
      },
    },
    range: {
        'min': 1940,
        'max': 2020
    }
  });
}


/* import { ToyData } from "../../data";
import data from "../../data";
import renderToys from "./renderToys";
export interface  FilterObj {
  favorite: boolean,
}

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

let selectedToys: Array <string | null> = [];
const maxSelected = 5; //20

export function selectToys(e: Event) {
  //add toy num to array
  const toySelected = e.target as HTMLTemplateElement;
  toySelected.classList.toggle('active');
  const toySelectedNum = toySelected.getAttribute('data-num');//dataset
  selectedToys.includes(toySelectedNum) ? selectedToys = selectedToys.filter(elem => elem !== toySelectedNum) : selectedToys.push(toySelectedNum);
  console.log(selectedToys);
}

function filterToys(toys: Array<ToyData>, filter: FilterObj) {
  return toys.filter(elem=>elem);//.favorite === filter.favorite
}



export default filterToys; */

/* class FilterToys {
  unfiltered: Array<ToyData>;
  constructor(input: Array<ToyData>) {
    this.unfiltered = input;
  }
  filterData() {
    return this.unfiltered.filter(elem=>elem.favorite);
  }
}

export default FilterToys; */

/* class Toy {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
  print() {
    return this.name;
  }
}

export default Toy; */