export interface ToyData {
  num: string;
  name: string;
  count: string;
  year: string;
  shape: string;
  color: string;
  size: string;
  favorite: boolean;
}

export interface AppStateObject {
  shape: string[];
  color: string[];
  size: string[];
  selectedToys: string[];
  onlyFavorite: boolean;
  sortingOrder: string;
  countFilter: [number, number];
  yearFilter: [number, number];
}

/* export interface FilterObjTypes {
  item: 'color' | 'size' | 'shape';
} */
