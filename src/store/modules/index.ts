import { HYDRATE } from "next-redux-wrapper";
import { AnyAction, CombinedState, combineReducers } from "redux";

import { apartmentDataApi } from "@/API";
import { counter } from "./counter";

const combinedReducers = combineReducers({
  counter,
  [apartmentDataApi.reducerPath]: apartmentDataApi.reducer,
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
