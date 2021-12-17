import { ToyData } from "../../data";

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

function renderToys(toys: Array<ToyData>):void {
  console.log('renderToys');
  console.log(toys);
}

export default renderToys;