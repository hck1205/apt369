import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import logger from "redux-logger";
import { apiSlice } from "@/API";

import RootReducer from "./modules";

const store = configureStore({
  reducer: RootReducer as any,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([logger, apiSlice.middleware]),
  devTools: process.env.NODE_ENV !== "production",
});

//@ts-ignore
const makeStore = (context) => store;

export const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV !== "production",
});

export type AppDispatch = typeof store.dispatch;
export type { RootState } from "./modules";
