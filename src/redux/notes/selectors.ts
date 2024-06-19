import { RootState } from '../store';
export const selectNotes = (state: RootState) => state.reducer.notes;