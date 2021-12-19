import { countSlider, yearSlider, filterItems, State, sortingOrder, searchField } from './storage';
import data from './data';
import { FilterObj, ToyData } from './interfaces';
import noUiSlider from 'nouislider';
import { renderToys } from './renderToys';
import { target } from 'nouislider';

filterItems.forEach(item => {
  item.addEventListener('click', handleFilterItems);
  //console.log('ev list numb', filterItems);
});

sortingOrder.onchange = () => {
  //console.log(this?.value);
  //console.log('sort val', sortingOrder.value);
  //sortingOrder.value
  State.sortingOrder = sortingOrder.value;
  renderToys(filterToys());
};

searchField.addEventListener('input', () => {
  renderToys(filterToys());
});

function handleFilterItems(e: Event) {
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
  renderToys(filterToys());
}

function filterToys() {
  const query = searchField.value.toLowerCase();
  console.log('query', query, 'query.length', query.length);
  //const filtered = data.filter(item=>query.length === 0 || item.name.toLowerCase().includes(query));
  const tData = data.slice(0);
  console.log('sorting in Filter ', State.sortingOrder);

  let res = tData
    .filter(elem => State.shape.length === 0 || State.shape.includes(elem.shape))
    .filter(elem => State.color.length === 0 || State.color.includes(elem.color))
    .filter(elem => State.size.length === 0 || State.size.includes(elem.size))
    .filter(elem => !State.onlyFavorite || elem.favorite)
    .filter(elem => State.countFilter[0] <= Number(elem.count) && Number(elem.count) <= State.countFilter[1])
    .filter(elem => State.yearFilter[0] <= Number(elem.year) && Number(elem.year) <= State.yearFilter[1])
    .filter(item => query.length === 0 || item.name.toLowerCase().includes(query));
  /* .filter(elem => query.length === 0 || elem.name.toLowerCase().includes(query)) */
  //let res = res.filter(item=>query.length === 0 || item.name.toLowerCase().includes(query));
  console.log('res', res);

  if (State.sortingOrder === 'sort-default') {
    res = res.sort(function (a, b) {
      return Number(a.num) < Number(b.num) ? -1 : 1;
    });
  } else if (State.sortingOrder === 'sort-name-asc') {
    res = res.sort(function (a, b) {
      return a.name < b.name ? -1 : 1;
    });
  } else if (State.sortingOrder === 'sort-name-desc') {
    res = res.sort(function (a, b) {
      return a.name > b.name ? -1 : 1;
    });
  } else if (State.sortingOrder === 'sort-year-asc') {
    res = res.sort(function (a, b) {
      return Number(a.year) < Number(b.year) ? -1 : 1;
    });
  } else if (State.sortingOrder === 'sort-year-desc') {
    res = res.sort(function (a, b) {
      return Number(a.year) > Number(b.year) ? -1 : 1;
    });
  }
  /* console.log('res', res);*/
  console.log('State CFilte', State.countFilter);
  return res;

  //.favorite === filter.favorite
  //renderToys()
}

export function initCountSlider() {
  noUiSlider.create(countSlider, {
    start: [State.countFilter[0], State.countFilter[1]],
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
    console.log('slider1');
    console.log('slVal', typeof Array.from(JSON.stringify((countSlider as target).noUiSlider?.get())));
    const positions = JSON.parse(JSON.stringify((countSlider as target).noUiSlider?.get()));
    State.countFilter = [Number(positions[0]), Number(positions[1])];
    console.log('State CFilteRRR', positions);
    renderToys(filterToys());
  });
}

export function initYearSlider() {
  noUiSlider.create(yearSlider, {
    start: [State.yearFilter[0], State.yearFilter[1]],
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
    console.log('slider2');
    console.log('slVal2', typeof Array.from(JSON.stringify((yearSlider as target).noUiSlider?.get())));
    const positions = JSON.parse(JSON.stringify((yearSlider as target).noUiSlider?.get()));
    State.yearFilter = [Number(positions[0]), Number(positions[1])];
    console.log('State CFilteRRR', positions);
    renderToys(filterToys());
  });
  /* (yearSlider as target).noUiSlider?.on('set', () => {
    console.log('slider');
    console.log((yearSlider as target).noUiSlider?.get());
  }); */
}
