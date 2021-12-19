import { countSlider, yearSlider, filterItems, sortingOrder, State } from './storage';
import data from './data';
import { FilterObj, ToyData } from './interfaces';
import noUiSlider from 'nouislider';
import { renderToys } from './renderToys';
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
  const inputFilterGroup = filterElement.dataset.group as string;
  const inputFilterValue = filterElement.dataset.value as string;
  console.log('state before', State);

  if (!filterElement.classList.contains('active')) {
    filterElement.classList.add('active');
    if (inputFilterGroup === 'shape') {
      State.shape.push(inputFilterValue);
    } else if (inputFilterGroup === 'color') {
      State.color.push(inputFilterValue);
    } else if (inputFilterGroup === 'size') {
      State.size.push(inputFilterValue);
    } else if (inputFilterGroup === 'favorite') {
      State.onlyFavorite = true;
    }
  } else {
    filterElement.classList.remove('active');
    if (inputFilterGroup === 'shape') {
      State.shape = State.shape.filter(elem => elem !== inputFilterValue);
      //Object.assign(State, {color: State.color.filter(elem => elem !== inputFilterValue)});
    } else if (inputFilterGroup === 'color') {
      State.color = State.color.filter(elem => elem !== inputFilterValue);
    } else if (inputFilterGroup === 'size') {
      State.size = State.size.filter(elem => elem !== inputFilterValue);
    } else if (inputFilterGroup === 'favorite') {
      State.onlyFavorite = false;
    }
  }
  //selectedToys = selectedToys.filter(elem => elem !== toySelectedNum)
  console.log('filterElement ', filterElement.dataset);
  console.log('state after', State);
  renderToys(filterToys(State));
}

function filterToys(state: FilterObj) {
  //splice
  const res = data.slice(0);
  return res
    .filter(elem => state.shape.length === 0 || state.shape.includes(elem.shape))
    .filter(elem => state.color.length === 0 || state.color.includes(elem.color))
    .filter(elem => state.size.length === 0 || state.size.includes(elem.size))
    .filter(elem => !state.onlyFavorite || elem.favorite);

  //.favorite === filter.favorite
  //renderToys()
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
