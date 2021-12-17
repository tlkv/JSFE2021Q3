import { selectedCounter, maxSelected } from './storage';

let selectedToys: Array<string | null> = [];

export function selectToys(e: Event) {
  const toySelected = e.target as HTMLTemplateElement;
  if (selectedToys.length === maxSelected && !toySelected.classList.contains('active')) {
    toySelected.classList.add('maximum');
    setTimeout(() => {
      toySelected.classList.remove('maximum');
    }, 1000);
  } else {
    toySelected.classList.toggle('active');
    const toySelectedNum = toySelected.getAttribute('data-num');
    selectedToys.includes(toySelectedNum) ? (selectedToys = selectedToys.filter(elem => elem !== toySelectedNum)) : selectedToys.push(toySelectedNum);
    if (selectedCounter) selectedCounter.textContent = String(selectedToys.length);
    console.log(selectedToys); //
  }
}
