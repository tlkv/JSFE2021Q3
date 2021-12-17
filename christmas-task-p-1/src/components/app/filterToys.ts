import { ToyData } from "../../data";

export interface  FilterObj {
  favorite: boolean,
}

export function selectToys(e: Event) {
  //add toy num to array
  (e.target as HTMLTemplateElement)?.classList.toggle('active');
}

function filterToys(toys: Array<ToyData>, filter: FilterObj) {
  return toys.filter(elem=>elem.favorite === filter.favorite);
}

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

export default filterToys;