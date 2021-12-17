
import { selectedCounter, maxSelected } from './storage';

let selectedToys: Array<string | null> = [];

function selectToys(e: Event) {
  if (selectedToys.length === maxSelected) {
    alert('got you');//run modal
  } else {
    const toySelected = e.target as HTMLTemplateElement;
    toySelected.classList.toggle('active');
    const toySelectedNum = toySelected.getAttribute('data-num');
    selectedToys.includes(toySelectedNum) ? selectedToys = selectedToys.filter(elem => elem !== toySelectedNum) : selectedToys.push(toySelectedNum);
    if (selectedCounter) selectedCounter.textContent = String(selectedToys.length);
    console.log(selectedToys);//
  }
}

export default selectToys;
