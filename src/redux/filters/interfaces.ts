import { Note } from '../notes/interfaces';

export enum FilterType {
  Containing = 'Containing',
  Picking = 'Picking',
}

export interface Filter<T = unknown> {
  type: FilterType;
  fieldName: keyof Note;
  value: T;
}

export type Favorite = boolean | null;

export enum FilterNames {
  colors = 'colors',
  favorite = 'favorite',
}

export type FilterName = keyof typeof FilterNames;