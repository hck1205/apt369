import { createSlice } from "@reduxjs/toolkit";

export const name: string = "apartment";

const initialState = {};

const apartmentSlice = createSlice({
  name,
  initialState,
  reducers: {},
});

export const {} = apartmentSlice.actions;

export default apartmentSlice.reducer;
