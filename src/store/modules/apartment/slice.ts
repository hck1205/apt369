import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store";
import { TStoreApartment } from "./types";

export const name: string = "apartment";

const initialState: TStoreApartment = {
  data: {},
};

const apartmentSlice = createSlice({
  name,
  initialState,
  reducers: {
    setApartmentData: (
      state,
      action: PayloadAction<{ id: string; value: object[] }>
    ) => {
      const { id, value } = action.payload;

      state.data = {
        ...state.data,
        [id]: value,
      };
    },
  },
});

export const { setApartmentData } = apartmentSlice.actions;

export default apartmentSlice.reducer;
