import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../reducer/reducer";
export const store = configureStore({
  reducer: { categoryReducer },
});
