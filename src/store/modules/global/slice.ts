import { PAGE_KEYS } from '@/constpack';
import { createSlice } from '@reduxjs/toolkit';

export const name: string = 'global';

const { APP, TODAYS_TRANSACTION } = PAGE_KEYS;

type LocalAppData = {
  data: {
    [key: string]: any;
  };
};

const initialState: LocalAppData = {
  data: {
    [TODAYS_TRANSACTION]: {},
  },
};

const globalSlice = createSlice({
  name,
  initialState,
  reducers: {
    updateLocalStorage: (state) => {
      const localData = localStorage.getItem(APP);
      const parsedData = localData ? JSON.parse(localData) : { data: {} };
      state.data = parsedData;
    },
  },
});

export default globalSlice.reducer;
