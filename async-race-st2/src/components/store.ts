import { IStore } from './interfaces';

const appState: IStore = {
  cars: [],
  carsAmount: '0',
  garagePageCurrent: 1,
  garagePageLimit: 7,
  winners: [],
  winnersAmount: '0',
  winnersPageCurrent: 1,
  winnersPageLimit: 10,
  sortOrder: 'ASC',
  sortBy: 'time',
};

export default appState;
