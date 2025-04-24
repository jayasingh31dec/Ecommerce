
const storedProduct = localStorage.getItem('currentProduct');
const parsedProduct = storedProduct ? JSON.parse(storedProduct) : null;


const initialState = {
  product: parsedProduct,
};


const currentProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_PRODUCT':
      localStorage.setItem('currentProduct', JSON.stringify(action.payload));
      return {
        ...state,
        product: action.payload,
      };

    default:
      return state;
  }
};

export default currentProductReducer;
