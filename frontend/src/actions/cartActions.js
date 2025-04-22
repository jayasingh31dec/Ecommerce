import { 
  ADD_TO_CART, 
  REMOVE_FROM_CART, 
  INCREMENT_CART_COUNTER, 
  DECREMENT_CART_COUNTER 
} from './actionTypes';

// Action to add an item to the cart
export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});

// Action to remove an item from the cart
export const removeFromCart = (item) => ({
  type: REMOVE_FROM_CART,
  payload: item,
});

// Action to increment the cart counter
export const incrementCartCounter = () => ({
  type: INCREMENT_CART_COUNTER,
});

// Action to decrement the cart counter
export const decrementCartCounter = () => ({
  type: DECREMENT_CART_COUNTER,
});
