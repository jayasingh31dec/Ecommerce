// Action to add item to wishlist
export const addToWishlist = (item) => ({
    type: 'ADD_TO_WISHLIST',
    payload: item,
  });
  
  // Action to remove item from wishlist
  export const removeFromWishlist = (item) => ({
    type: 'REMOVE_FROM_WISHLIST',
    payload: item,
  });
  
  // Action to clear wishlist
  export const clearWishlist = () => ({
    type: 'CLEAR_WISHLIST',
  });
  