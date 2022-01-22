import { ICar } from './interfaces';

const baseUrl = 'http://localhost:3000';

const engine = `${baseUrl}/engine`;
const winners = `${baseUrl}/winners`;
const garage = `${baseUrl}/garage`;

export async function getCars(page = 1, limit = 7): Promise<{ cars: Array<ICar>; amount: string } | null> {
  try {
    const response = await fetch(`${garage}?_page=${page}&_limit=${limit}`);
    const data: ICar[] = await response.json();
    console.log(data); // add try catch
    if (response.status === 200) {
      return {
        cars: data,
        amount: response.headers.get('X-Total-Count') || '0',
      };
    }
    return null;
  } catch (err) {
    throw new Error(err as string);
  }
}

/* const url = `https://api.unsplash.com/photos/random?orientation=landscape&query=${tag}&client_id=FKMf0BwZVmjUFUokYEOdzhCzYYWtfUDpLa-5TFSVPtA`;
    const res = await fetch(url);
    const data = await res.json(); */
