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
  carsPage: number;
  carsPageLimit: number;
  winners: Array<IWinner>;
  winnersAmount: string;
  winnersPage: number;
  winnersPageLimit: number;
}

export interface ICreatedCar {
  name: string;
  color: string;
}
