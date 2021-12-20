import { selectedCounter, maxSelected, State, searchField } from './storage';
import data from './data';

export function filterToys() {
  const query = searchField.value.toLowerCase();
  console.log('query', query, 'query.length', query.length);  
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
}

export function selectToys(e: Event) {
  const toySelected = e.target as HTMLTemplateElement;
  if (State.selectedToys.length === maxSelected && !toySelected.classList.contains('active')) {
    toySelected.classList.add('maximum');
    setTimeout(() => {
      toySelected.classList.remove('maximum');
    }, 1000);
  } else {
    toySelected.classList.toggle('active');
    const toySelectedNum = toySelected.getAttribute('data-num') as string;
    State.selectedToys.includes(toySelectedNum)
      ? (State.selectedToys = State.selectedToys.filter(elem => elem !== toySelectedNum))
      : State.selectedToys.push(toySelectedNum);
     selectedCounter.textContent = String(State.selectedToys.length);//
    console.log(State.selectedToys);
  }
}
