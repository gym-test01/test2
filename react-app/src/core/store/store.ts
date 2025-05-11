import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
// import { rootReducer } from "./rootReducer";
import { formInfoReducer } from "./form-info/slice";

// storeまとめ
const rootReducer = combineReducers({
  formInfoSlice: formInfoReducer,
});

// export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});

// export type AppDispatch = typeof store.dispatch;
