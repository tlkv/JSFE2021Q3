import {
  garageInner,
  garageCount,
  garageCurrentPage,
  createButton,
  createColor,
  createInput,
  updateInput,
  updateColor,
  updateButton,
} from './main';
import { appState } from './store';
import { ICar, ICreatedCar } from './interfaces';
import { getCars, removeCar, generateCar, updateCarApi } from './api';

export async function renderCars() {
  await getCars();
  garageCount.textContent = appState.carsAmount;
  garageCurrentPage.textContent = String(appState.carsPage);
  garageInner.innerHTML = '';
  for (let i = 0; i < appState.cars.length; i++) {
    garageInner.append(renderCarCard(appState.cars[i]));
  }
}

export function renderCarCard({ id, name, color }: ICar) {
  const carCard = document.createElement('div');
  carCard.classList.add('car-card');
  carCard.setAttribute('data-car-id', String(id));
  carCard.innerHTML = `
  <div class="car-card-wrapper">
    <div class="car-card-name">${name}</div>
    <div class="car-card-pic" data-img-id="${id}">
      <i class="fas fa-car-side" style="color: ${color};"></i>
    </div>
    <div class="car-card-flag" data-flag-id="${id}">
      <i class="fas fa-flag-checkered"></i>
    </div>
  </div>
  <div class="car-card-buttons">
    <button class="car-card-button" data-select-id="${id}" data-select-name="${name}" data-select-color="${color}">Select</button>
    <button class="car-card-button" data-remove-id="${id}">Remove</button>
    <button class="car-card-button" data-start-id="${id}">Start</button>
    <button class="car-card-button" data-stop-id="${id}">Stop</button>
  </div>`;
  return carCard;
}

export async function handleCarsAction(e: Event) {
  const selectedItem = e.target as HTMLTemplateElement;
  if (selectedItem.hasAttribute('data-remove-id')) {
    await removeCar(selectedItem.getAttribute('data-remove-id') as string);
    renderCars();
  }
  if (selectedItem.hasAttribute('data-select-id')) {
    updateInput.value = selectedItem.getAttribute('data-select-name') as string;
    updateColor.value = selectedItem.getAttribute('data-select-color') as string;
    updateButton.setAttribute('data-update-id', selectedItem.getAttribute('data-select-id') as string);
  }
}

export async function updateCar() {
  if (!updateButton.hasAttribute('data-update-id')) {
    updateInput.classList.add('border-error');
    updateInput.value = 'No car selected';
    setTimeout(() => {
      updateInput.classList.remove('border-error');
      updateInput.value = '';
    }, 1200);
  } else {
    if (updateInput.value.length === 0) {
      updateInput.classList.add('border-error');
      updateInput.placeholder = 'No input';
      setTimeout(() => {
        updateInput.classList.remove('border-error');
        updateInput.placeholder = '';
      }, 1200);
    } else {
      const id = updateButton.getAttribute('data-update-id') as string;
      updateButton.removeAttribute('data-update-id');
      await updateCarApi(id);
      renderCars();
    }
  }
}

export async function createCar() {
  if (createInput.value.length === 0) {
    createInput.classList.add('border-error');
    createInput.placeholder = 'No input';
    setTimeout(() => {
      createInput.classList.remove('border-error');
      createInput.placeholder = '';
    }, 1200);
  } else {
    await generateCar();
    renderCars();
  }
}
