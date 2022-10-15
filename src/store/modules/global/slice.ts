import { PAGE_KEYS } from "@/constpack";
import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_FIELDS } from "@/constpack";

export const name: string = "global";

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
    initLocalStorage: (state) => {
      const data = localStorage.getItem(APP);

      if (data) {
        state.data = JSON.parse(data);
      } else {
        const initData = {
          [TODAYS_TRANSACTION]: {
            tabs: [1, 2, 3].map((v) => ({
              id: `${TODAYS_TRANSACTION}_tab_${v}`,
              alias: "",
              fields: DEFAULT_FIELDS,
            })),
          },
        };

        state.data = initData;
      }
    },
    updateLocalStorage: (state) => {
      const localData = localStorage.getItem(APP);
      const parsedData = localData ? JSON.parse(localData) : { data: {} };
      state.data = parsedData;
    },
  },
});

export const { initLocalStorage, updateLocalStorage } = globalSlice.actions;

export default globalSlice.reducer;
