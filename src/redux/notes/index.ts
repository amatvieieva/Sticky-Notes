import { createSlice } from '@reduxjs/toolkit';
import { Note } from './interfaces';

export const initialState = (): Note[] => [];

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote(state, { payload }) {      
      return [...state, payload];
    },
    deleteNote(state, { payload }) {
      const updatedNotes = state.filter(note => note.id !== payload);
      return updatedNotes;
    },
    toggleFavorite(state, { payload }) {
      const note = state.find(note => note.id === payload);
      if (note) {
        note.isFavorite = !note.isFavorite;
      }
    },
    changeNote(state, { payload }) {
      const { id, title, text, color } = payload;
      const note = state.find(note => note.id === id);
      if (note) {
        note.title = title;
        note.text = text;
        note.color = color;
      }
    },
    movedNotes(state, { payload }) {

      const noteIndexFrom = state.findIndex(note => note.id === payload.from);
      const noteIndexTo = state.findIndex(note => note.id === payload.to);
      const [movedNote] = state.splice(noteIndexFrom, 1);
      state.splice(noteIndexTo, 0, movedNote);
    },
    changeNoteChangeOrder(_, { payload }) {
      return payload;
    },
  },
});

export const { addNote, deleteNote, toggleFavorite, changeNote, changeNoteChangeOrder, movedNotes } =
  notesSlice.actions;
export const notesReducer = notesSlice.reducer;
