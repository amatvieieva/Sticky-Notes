export enum Colors {
  Lavender = 'lightLavender',
  Peach = 'lightPeach',
  Blue = 'lightBlue',
  Purple = 'lightPurple',
  Gray = 'lightGray',
  Pink = 'lightPink',
  Salad = 'lightSalad',
  Coral = 'lightCoral',
}

export interface Note {
  color: Colors;
  text: string;
  title: string;
  isFavorite: boolean | null;
  id: string;
}