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
import { ICar, ICreatedCar } from './interfaces';
import { getCars, removeCar, generateCar, updateCarApi, removeWinner, startCarEngineApi } from './api';
import { getRandomColor, getRandomName } from './utils';
import { renderWinners } from './winners';

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
    <button class="car-card-button car-card-button-start" data-start-id="${id}">Start</button>
    <button class="car-card-button car-card-button-stop" data-stop-id="${id}" disabled>Stop</button>
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
  if (selectedItem.hasAttribute('data-start-id')) {
    startCarEngine(Number(selectedItem.getAttribute('data-start-id')), selectedItem);
  }
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

export async function animateCar(time: number, item: HTMLElement): Promise<void> {
  const car = item.closest('.car-card')?.getElementsByClassName('fa-car-side')[0] as HTMLElement;
  const stopButton = item.parentElement?.getElementsByClassName('car-card-button-stop')[0] as HTMLInputElement;
  stopButton.disabled = false;
  const carAnimation = car.animate(
    [
      { transform: 'translateX(0)' },
      { transform: `translateX(${(car.closest('.car-card-wrapper') as HTMLElement).offsetWidth - 60}px)` },
    ],
    {
      fill: 'forwards',
      duration: time,
    }
  );
  stopButton.onclick = () => {
    carAnimation.finish();
    carAnimation.cancel();
  };
  carAnimation.finished.then(() => {
    stopButton.disabled = true;
    (item as HTMLInputElement).disabled = false;
  });
}

export async function startCarEngine(id: number, item: HTMLElement): Promise<void> {
  (item as HTMLInputElement).disabled = true;
  const data = await startCarEngineApi(id);
  if (data.status === 200) {
    //handleButtons
    const time = data.result.distance / data.result.velocity;
    animateCar(time, item);
  }
}

export async function startRace() {
  const allCars = garageInner.querySelectorAll('.car-card-button-start');
  allCars.forEach(item => {
    startCarEngine(Number(item.getAttribute('data-start-id')), item as HTMLElement);
  });
}
