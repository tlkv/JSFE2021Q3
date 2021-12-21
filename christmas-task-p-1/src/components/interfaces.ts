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
  sortingOrder: SortingTypes;
  countFilter: FilterValues;
  yearFilter: FilterValues;
}

export type FilterKeys = 'shape' | 'color' | 'size';

export type SortingTypes = 'sort-default' | 'sort-name-asc' | 'sort-name-desc' | 'sort-year-asc' | 'sort-year-desc';

export type FilterValues = [number, number];
