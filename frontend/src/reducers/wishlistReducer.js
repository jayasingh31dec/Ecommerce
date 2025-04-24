
const initialState = {
  wishlistItems: [], 
};


const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_WISHLIST':
      return {
        ...state,
        wishlistItems: [...state.wishlistItems, action.payload], // Add item to wishlist
      };

    case 'REMOVE_FROM_WISHLIST':
      return {
        ...state,
        wishlistItems: state.wishlistItems.filter(item => item.id !== action.payload.id), 
      };

    case 'CLEAR_WISHLIST':
      return {
        ...state,
        wishlistItems: [], 
      };

    default:
      return state;
  }
};

export default wishlistReducer;
