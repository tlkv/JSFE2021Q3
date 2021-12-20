import { selectedCounter, maxSelected, AppState, searchField } from './storage';
import data from './data';

export function filterToys() {
  const query = searchField.value.toLowerCase();
  const tData = data.slice(0);
  let res = tData
    .filter(elem => AppState.shape.length === 0 || AppState.shape.includes(elem.shape))
    .filter(elem => AppState.color.length === 0 || AppState.color.includes(elem.color))
    .filter(elem => AppState.size.length === 0 || AppState.size.includes(elem.size))
    .filter(elem => !AppState.onlyFavorite || elem.favorite)
    .filter(elem => AppState.countFilter[0] <= Number(elem.count) && Number(elem.count) <= AppState.countFilter[1])
    .filter(elem => AppState.yearFilter[0] <= Number(elem.year) && Number(elem.year) <= AppState.yearFilter[1])
    .filter(item => query.length === 0 || item.name.toLowerCase().includes(query));
  if (AppState.sortingOrder === 'sort-default') {
    res = res.sort(function (a, b) {
      return Number(a.num) < Number(b.num) ? -1 : 1;
    });
  } else if (AppState.sortingOrder === 'sort-name-asc') {
    res = res.sort(function (a, b) {
      return a.name < b.name ? -1 : 1;
    });
  } else if (AppState.sortingOrder === 'sort-name-desc') {
    res = res.sort(function (a, b) {
      return a.name > b.name ? -1 : 1;
    });
  } else if (AppState.sortingOrder === 'sort-year-asc') {
    res = res.sort(function (a, b) {
      return Number(a.year) < Number(b.year) ? -1 : 1;
    });
  } else if (AppState.sortingOrder === 'sort-year-desc') {
    res = res.sort(function (a, b) {
      return Number(a.year) > Number(b.year) ? -1 : 1;
    });
  }
  return res;
}

export function selectToys(e: Event) {
  const toySelected = e.target as HTMLTemplateElement;
  if (AppState.selectedToys.length === maxSelected && !toySelected.classList.contains('active')) {
    toySelected.classList.add('maximum');
    setTimeout(() => {
      toySelected.classList.remove('maximum');
    }, 1000);
  } else {
    toySelected.classList.toggle('active');
    const toySelectedNum = toySelected.getAttribute('data-num') as string;
    AppState.selectedToys.includes(toySelectedNum)
      ? (AppState.selectedToys = AppState.selectedToys.filter(elem => elem !== toySelectedNum))
      : AppState.selectedToys.push(toySelectedNum);
    selectedCounter.textContent = String(AppState.selectedToys.length);
  }
}
