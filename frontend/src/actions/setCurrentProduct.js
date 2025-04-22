// Define the action type as a constant (optional but recommended)
export const SET_CURRENT_PRODUCT = 'SET_CURRENT_PRODUCT';

// Action creator function
export const setCurrentProduct = (product) => {
  return {
    type: SET_CURRENT_PRODUCT,
    payload: product
  };
};





