import { HYDRATE } from "next-redux-wrapper";
import { Reducer } from "react";
import { AnyAction, CombinedState, combineReducers } from "redux";

import { counter, TStoreCounter } from "./counter";

const combinedReducers = combineReducers({
  counter,
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
