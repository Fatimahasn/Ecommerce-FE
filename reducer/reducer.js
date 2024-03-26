import { combineReducers } from "@reduxjs/toolkit";

const initialState = {
  cart: 0,
  categories: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "addData":
      console.log(action.payload);
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
