import { App } from './app';
import { ICar, ICreatedCar } from './interfaces';
import { appState } from './store';
import { createColor, createInput, updateInput, updateColor } from './main';

const baseUrl = 'http://localhost:3000';

const engine = `${baseUrl}/engine`;
const winners = `${baseUrl}/winners`;
const garage = `${baseUrl}/garage`;

export async function getCars(): Promise<void> {
  try {
    const response = await fetch(`${garage}?_page=${appState.carsPage}&_limit=${appState.carsPageLimit}`);
    const data: ICar[] = await response.json();
    if (response.status === 200) {
      appState.cars = data;
      appState.carsAmount = response.headers.get('X-Total-Count') || '0';
    }
  } catch (err) {
    throw new Error(err as string);
  }
}

export async function removeCar(id: string): Promise<void> {
  try {
    await fetch(`${garage}/${id}`, {
      method: 'DELETE',
    });
  } catch (err) {
    throw new Error(err as string);
  }
}

export async function generateCar(): Promise<void> {
  const name = createInput.value;
  const color = createColor.value;
  try {
    await fetch(garage, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, color }),
    });
  } catch (err) {
    throw new Error(err as string);
  }
}

export async function updateCarApi(id: string): Promise<void> {
  const name = updateInput.value;
  const color = updateColor.value;
  try {
    await fetch(`${garage}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, color }),
    });
  } catch (err) {
    throw new Error(err as string);
  }
}
