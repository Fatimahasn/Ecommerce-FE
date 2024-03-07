import { combineReducers } from "@reduxjs/toolkit";

const initialState = {
  cart: 0,
  categories: [],
};
const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "addData":
      return {
        ...state,
        categories: action.payload.featuredCategories,
      };
    default:
      return state;
  }
};
export default categoryReducer;
