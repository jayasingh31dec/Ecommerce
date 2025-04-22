import { combineReducers } from "@reduxjs/toolkit";

// Importing reducers
import userReducer from "./userReducer"; // Default import
import wishlistReducer from "./wishlistReducer"; // Default import
import cartReducer from './cartReducer';
import currentProductReducer from "./currentProductReducer";

// Combining all reducers into a rootReducer
const rootReducer = combineReducers({
  user: userReducer, // user state
  wishlist: wishlistReducer, // wishlist state
  cart: cartReducer, // cart state
  currentProduct: currentProductReducer, // currentProduct state
});

export default rootReducer;
