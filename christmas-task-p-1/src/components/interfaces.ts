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
  sortingOrder: sortingTypes;
  countFilter: [number, number];
  yearFilter: [number, number];
}


export type filterKeys = 'shape' | 'color' | 'size';

export type sortingTypes = 'sort-default' | 'sort-name-asc' | 'sort-name-desc' | 'sort-year-asc' | 'sort-year-desc';

/* export type shapeTypes = 'sort-default' | 'sort-name-asc' | 'sort-name-desc' | 'sort-year-asc' | 'sort-year-desc';

export type sortingTypes = 'sort-default' | 'sort-name-asc' | 'sort-name-desc' | 'sort-year-asc' | 'sort-year-desc';

export type sortingTypes = 'sort-default' | 'sort-name-asc' | 'sort-name-desc' | 'sort-year-asc' | 'sort-year-desc'; */
