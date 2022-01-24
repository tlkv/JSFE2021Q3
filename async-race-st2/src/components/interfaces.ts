export interface ICar {
  id: number;
  name: string;
  color: string;
}

export interface IWinner {
  id: number;
  time: number;
  wins: number;
}

export interface IStore {
  cars: Array<ICar>;
  carsAmount: string;
  garagePageCurrent: number;
  garagePageLimit: number;
  winners: Array<IWinner>;
  winnersAmount: string;
  winnersPageCurrent: number;
  winnersPageLimit: number;
  sortOrder: 'ASC' | 'DESC';
  sortBy: 'id' | 'wins' | 'time';
}
export interface ICreatedCar {
  name: string;
  color: string;
}
