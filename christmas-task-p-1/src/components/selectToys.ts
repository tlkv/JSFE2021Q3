import { selectedCounter, maxSelected, State } from './storage';

//let selectedToys: Array<string | null> = [];

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
    if (selectedCounter) selectedCounter.textContent = String(State.selectedToys.length);//
    console.log(State.selectedToys);
  }
}
