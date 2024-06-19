import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Favorite, Filter, FilterName, FilterType } from './interfaces';
import { Colors } from '../notes/interfaces';

interface BaseState {
  [key: string]: Filter<Colors[] | Favorite>;
}

export interface State extends BaseState {
  colors: Filter<Colors[]>;
  favorite: Filter<Favorite>;
}

const initialState: State = {
  colors: {
    type: FilterType.Containing,
    fieldName: 'color',
    value: [],
  },
  favorite: {
    type: FilterType.Picking,
    fieldName: 'isFavorite',
    value: null,
  },
};

const filtersSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    addFilterColor(state, { payload }: PayloadAction<Colors>) {
      state.colors.value.push(payload);
      return state;
    },
    removeFilterColor(state, { payload }: PayloadAction<Colors>) {
      const index = state.colors.value.findIndex(color => color === payload);
      if (index !== -1) {
        state.colors.value.splice(index, 1);
      }
      return state;
    },
    setFavorite(state, { payload }: PayloadAction<Favorite>) {
      state.favorite.value = payload;
      return state;
    },
    resetFilter(state, { payload }: PayloadAction<FilterName>) {
      state[payload].value = initialState[payload].value;
      return state;
    },
  },
});

export const { addFilterColor, removeFilterColor, setFavorite, resetFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;