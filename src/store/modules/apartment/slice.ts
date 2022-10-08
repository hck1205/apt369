import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TStoreApartMent } from "./types";

export const name: string = "apartment";

const initialState: TStoreApartMent = {
  data: [],
};

const apartmentSlice = createSlice({
  name,
  initialState,
  reducers: {
    setApartmentData: (state, action: PayloadAction<Object[]>) => {
      state.data = action.payload;
    },
  },
});

export const { setApartmentData } = apartmentSlice.actions;

export default apartmentSlice.reducer;
