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
  tree: string;
  background: string;
  audio: boolean;
  snow: boolean;
  lightsOn: boolean;
  lights: string;
}

export type FilterKeys = 'shape' | 'color' | 'size';

export type TreeKeys = 'tree' | 'background' | 'audio' | 'snow' | 'lights' | 'lightsOn';

export type SortingTypes = 'sort-default' | 'sort-name-asc' | 'sort-name-desc' | 'sort-year-asc' | 'sort-year-desc';

export type LightsTypes = 'multicolor' | 'red' | 'blue' | 'green' | 'yellow';

export type FilterValues = [number, number];

export interface ISortingFunc {
  [key: string]: (a: ToyData, b: ToyData) => number;
}
