import { HYDRATE } from "next-redux-wrapper";
import { AnyAction, CombinedState, combineReducers } from "redux";

import { apiSlice } from "@/API";
import { counter } from "./counter";
import { global } from "./global";
import { apartment } from "./apartment";

const combinedReducers = combineReducers({
  counter,
  global,
  apartment,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

type RootStates = ReturnType<typeof combinedReducers>;

const rootReducer = (
  state: RootStates,
  action: AnyAction
): CombinedState<RootStates> => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    default:
      return combinedReducers(state, action);
  }
};

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
