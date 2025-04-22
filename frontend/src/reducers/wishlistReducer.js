// Initial state for wishlist
const initialState = {
  wishlistItems: [], // Array to store items in the wishlist
};

// wishlistReducer function
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
        wishlistItems: state.wishlistItems.filter(item => item.id !== action.payload.id), // Remove item from wishlist
      };

    case 'CLEAR_WISHLIST':
      return {
        ...state,
        wishlistItems: [], // Clear wishlist
      };

    default:
      return state;
  }
};

export default wishlistReducer;
