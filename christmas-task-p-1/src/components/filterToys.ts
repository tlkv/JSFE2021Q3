import { countSlider, yearSlider, filterItems, sortingOrder } from './storage';
import noUiSlider from 'nouislider';
import { target } from 'nouislider';

filterItems.forEach(item => {
  item.addEventListener('click', handleFilterItems);
});

sortingOrder.onchange = (e: Event) => {
  //console.log(this?.value);
  console.log((e.target as HTMLInputElement).value);   
};

export function handleFilterItems(e: Event) {
  const filterElement = e.target as HTMLElement;
  if (filterElement.classList.contains('active')) {
    filterElement.classList.remove('active');
  } else {
    filterElement.classList.add('active');
  }
  console.log('filterElement ', filterElement.dataset);
}

export function initCountSlider(countStart: number, countEnd: number) {
  noUiSlider.create(countSlider, {
    start: [countStart, countEnd],
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
      min: 1,
      max: 12,
    },
  });
  (countSlider as target).noUiSlider?.on('set', () => {
    console.log('slider2');
    console.log((countSlider as target).noUiSlider?.get());
  });
}

export function initYearSlider(yearStart: number, yearEnd: number) {
  noUiSlider.create(yearSlider, {
    start: [yearStart, yearEnd],
    step: 10,
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
      min: 1940,
      max: 2020,
    },
  });
  (yearSlider as target).noUiSlider?.on('set', () => {
    console.log('slider');
    console.log((yearSlider as target).noUiSlider?.get());
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
