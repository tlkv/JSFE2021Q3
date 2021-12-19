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

export interface FilterObj {  
  shape: string [];
  color: string [];
  size: string [];
  selectedToys: string [];
  onlyFavorite: boolean;  
}

/* export interface FilterObjTypes {
  item: 'color' | 'size' | 'shape';
} */
