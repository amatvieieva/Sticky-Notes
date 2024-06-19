import { createSlice } from "@reduxjs/toolkit";

const backgroundSlice = createSlice({
  name: "background",
  initialState: '',
  reducers: {
    changeBg(_, action) {       
      return action.payload;
    },
  },
});

export const { changeBg } = backgroundSlice.actions;
export const backgroundReducer = backgroundSlice.reducer;