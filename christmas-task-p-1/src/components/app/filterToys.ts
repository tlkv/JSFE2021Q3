import { ToyData } from "../../data";


function filterToys(toys: Array<ToyData>) {
  return toys.filter(elem=>elem/* .favorite */);
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