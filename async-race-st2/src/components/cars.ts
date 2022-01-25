import {
  garageInner,
  garageCount,
  garageCurrentPageNum,
  garageCreateButton,
  garageCreateColor,
  garageCreateInput,
  garageUpdateInput,
  garageUpdateColor,
  garageUpdateButton,
  garagePrev,
  garageNext,
} from './main';
import { appState } from './store';
import { ICar, ICarEngine, ICreatedCar } from './interfaces';
import { getCars, removeCar, generateCar, updateCarApi, removeWinner, startCarEngineApi, switchToDrive } from './api';
import { getRandomColor, getRandomName } from './utils';
import { renderWinners } from './winners';

let carStartButtons: NodeListOf<HTMLInputElement>;
let carStopButtons: NodeListOf<HTMLInputElement>;
let carImages: NodeListOf<HTMLElement>;
let carAnimations: Array<Animation> = [];

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
    <button class="car-card-button car-card-button-select" data-select-id="${id}" data-select-name="${name}" data-select-color="${color}">Select</button>
    <button class="car-card-button car-card-button-remove" data-remove-id="${id}">Remove</button>
    <button class="car-card-button car-card-button-start" data-start-id="${id}">Start (A)</button>
    <button class="car-card-button car-card-button-stop" data-stop-id="${id}" disabled>Stop (B)</button>
  </div>`;
  return carCard;
}

export async function renderCars() {
  await getCars();
  garageCount.textContent = appState.carsAmount;
  garageCurrentPageNum.textContent = String(appState.garagePageCurrent);
  appState.garagePageCurrent === 1 ? (garagePrev.disabled = true) : (garagePrev.disabled = false);
  Number(appState.carsAmount) / appState.garagePageLimit <= appState.garagePageCurrent
    ? (garageNext.disabled = true)
    : (garageNext.disabled = false);
  garageInner.innerHTML = '';
  for (let i = 0; i < appState.cars.length; i++) {
    garageInner.append(renderCarCard(appState.cars[i]));
  }
  carStartButtons = garageInner.querySelectorAll('.car-card-button-start');
  carStopButtons = garageInner.querySelectorAll('.car-card-button-stop');
  carImages = garageInner.querySelectorAll('.car-card-pic');

  for (let i = 0; i < carStartButtons.length; i++) {
    carStartButtons[i].onclick = () => {
      carStartButtons[i].disabled = true;
      startCarEngine(Number(carStartButtons[i].getAttribute('data-start-id')), i);
    };
  }
}

export async function handleCarsAction(e: Event) {
  const selectedItem = e.target as HTMLTemplateElement;
  if (selectedItem.hasAttribute('data-remove-id')) {
    await removeCar(selectedItem.getAttribute('data-remove-id') as string);
    await removeWinner(selectedItem.getAttribute('data-remove-id') as string);
    renderCars();
    renderWinners();
  }
  if (selectedItem.hasAttribute('data-select-id')) {
    garageUpdateInput.value = selectedItem.getAttribute('data-select-name') as string;
    garageUpdateColor.value = selectedItem.getAttribute('data-select-color') as string;
    garageUpdateButton.setAttribute('data-update-id', selectedItem.getAttribute('data-select-id') as string);
  }
  /* if (selectedItem.hasAttribute('data-start-id')) {
    startCarEngine(Number(selectedItem.getAttribute('data-start-id')), selectedItem);
  } */
}

export async function updateCar() {
  if (!garageUpdateButton.hasAttribute('data-update-id')) {
    garageUpdateInput.classList.add('border-error');
    garageUpdateInput.value = 'No car selected';
    setTimeout(() => {
      garageUpdateInput.classList.remove('border-error');
      garageUpdateInput.value = '';
    }, 1200);
  } else {
    if (garageUpdateInput.value.length === 0) {
      garageUpdateInput.classList.add('border-error');
      garageUpdateInput.placeholder = 'No input';
      setTimeout(() => {
        garageUpdateInput.classList.remove('border-error');
        garageUpdateInput.placeholder = '';
      }, 1200);
    } else {
      const id = garageUpdateButton.getAttribute('data-update-id') as string;
      garageUpdateButton.removeAttribute('data-update-id');
      await updateCarApi(id);
      renderCars();
    }
  }
}

export async function createCar() {
  if (garageCreateInput.value.length === 0) {
    garageCreateInput.classList.add('border-error');
    garageCreateInput.placeholder = 'No input';
    setTimeout(() => {
      garageCreateInput.classList.remove('border-error');
      garageCreateInput.placeholder = '';
    }, 1200);
  } else {
    await generateCar(garageCreateInput.value, garageCreateColor.value);
    renderCars();
  }
}

export async function createRandomCars() {
  let arr = [];
  for (let i = 0; i < 100; i += 1) {
    arr.push(generateCar(getRandomName(), getRandomColor()));
  }
  Promise.all(arr).then(() => {
    renderCars();
  });
}

export async function animateCar(time: number, iter: number): Promise<void> {
  carStopButtons[iter].disabled = false;
  carAnimations[iter] = carImages[iter].animate([{ left: 0 }, { left: 'calc(100% - 60px)' }], {
    fill: 'forwards',
    duration: time,
  });
  carStopButtons[iter].onclick = () => {
    carAnimations[iter].cancel();
    carStopButtons[iter].disabled = true;
    carStartButtons[iter].disabled = false;
  };
}

export async function startCarEngine(id: number, iter: number): Promise<void> {
  const data = await startCarEngineApi(id);
  if (data.status === 200) {
    //handleButtons
    const time = data.result.distance / data.result.velocity;
    animateCar(time, iter);
    await switchToDriveMode(data.result, id, iter);
  }
}

export async function switchToDriveMode(car: ICarEngine, id: number, iter: number): Promise<void> {
  const engMode = await switchToDrive(id);
  return new Promise(resolve => {
    if (engMode === 500) {
      carAnimations[iter].pause();
    }

    if (engMode === 200) {
      // pass speed to modal
      // speed = Math.floor(car.distance / car.velocity);
      resolve();
    }
  });
}

export async function startRace() {
  let arrPromises = [];
  for (let i = 0; i < carStartButtons.length; i++) {
    carStartButtons[i].disabled = true;
    arrPromises.push(startCarEngine(Number(carStartButtons[i].getAttribute('data-start-id')), i));
  }
  await Promise.race(arrPromises);
  console.log('we have a winner!');
}
