import { App } from './app';
import { ICar, ICreatedCar, IWinner, ICarEngine } from './interfaces';
import { garageCreateColor, garageCreateInput, garageUpdateInput, garageUpdateColor } from './main';
import { appState } from './store';

const baseUrl = 'http://localhost:3000';

const engine = `${baseUrl}/engine`;
const winners = `${baseUrl}/winners`;
const garage = `${baseUrl}/garage`;

export async function getCars(): Promise<void> {
  try {
    const response = await fetch(`${garage}?_page=${appState.garagePageCurrent}&_limit=${appState.garagePageLimit}`);
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
    if (
      (Number(appState.carsAmount) - 1) / appState.garagePageLimit <= appState.garagePageCurrent - 1 &&
      appState.garagePageCurrent > 1
    ) {
      appState.garagePageCurrent -= 1;
    }
  } catch (err) {
    throw new Error(err as string);
  }
}

export async function generateCar(name: String, color: String): Promise<void> {
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
  const name = garageUpdateInput.value;
  const color = garageUpdateColor.value;
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
  garageUpdateInput.value = '';
  garageUpdateColor.value = '#000000';
}

export async function getWinners(): Promise<void> {
  try {
    const response = await fetch(
      `${winners}?_page=${appState.winnersPageCurrent}&_limit=${appState.winnersPageLimit}&_sort=${appState.sortBy}&_order=${appState.sortOrder}`
    );
    const data: IWinner[] = await response.json();
    if (response.status === 200) {
      appState.winners = data;
      appState.winnersAmount = response.headers.get('X-Total-Count') || '0';
    }
  } catch (err) {
    throw new Error(err as string);
  }
}

export async function removeWinner(id: string): Promise<void> {
  try {
    await fetch(`${winners}/${id}`, {
      method: 'DELETE',
    });
  } catch (err) {
    throw new Error(err as string);
  }
}

export async function getCarData(carId: number): Promise<ICar | null> {
  try {
    const data = await fetch(`${garage}/${carId}`);
    const res: ICar = await data.json();
    if (data.status === 200) {
      return res;
    }
    return null;
  } catch (err) {
    throw new Error(err as string);
  }
}

export async function startCarEngineApi(carId: number): Promise<{ status: number; result: ICarEngine }> {
  try {
    const data = await fetch(`${engine}?id=${carId}&status=started`, {
      method: 'PATCH',
    });
    const res: ICarEngine = await data.json();

    return {
      status: data.status,
      result: res,
    };
  } catch (err) {
    throw new Error(err as string);
  }
}

export async function switchToDrive(car: number) {
  try {
    const data = await fetch(`${engine}?id=${car}&status=drive`, {
      method: 'PATCH',
    });
    return data.status;
  } catch (err) {
    throw new Error(err as string);
  }
}

export async function createWinnerApi(car: IWinner): Promise<number> {
  try {
    const data = await fetch(winners, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(car),
    });

    return data.status;
  } catch (err) {
    throw new Error(err as string);
  }
}

export async function updateWinnerApi(car: IWinner): Promise<number> {
  try {
    const data = await fetch(`${winners}/${car.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(car),
    });

    return data.status;
  } catch (err) {
    throw new Error(err as string);
  }
}

export async function getWinner(wId: number): Promise<{ status: number; result: IWinner }> {
  try {
    const resp = await fetch(`${winners}/${wId}`);
    const res: IWinner = await resp.json();

    return {
      status: resp.status,
      result: res,
    };
  } catch (err) {
    throw new Error(err as string);
  }
}

export async function stopEngineApi(car: number): Promise<{ status: number; result: ICarEngine }> {
  try {
    const data = await fetch(`${engine}/?id=${car}&status=stopped`, {
      method: 'PATCH',
    });
    const res: ICarEngine = await data.json();

    return {
      status: data.status,
      result: res,
    };
  } catch (err) {
    throw new Error(err as string);
  }
}
