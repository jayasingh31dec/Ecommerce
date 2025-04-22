const initialState = {
  cartItems: [],
  cartCounter: 0,
  totalPrice: 0,
  deliveryCharges: 50,
  taxes: 0,
  grandTotal: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'ADD_TO_CART': {
      const existingItemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);

      let updatedCartItems;

      if (existingItemIndex !== -1) {
        updatedCartItems = state.cartItems.map((item, index) =>
          index === existingItemIndex
            ? {
              ...item,
              quantity: item.quantity + 1,
              total_item_price: (item.quantity + 1) * item.price,
            }
            : item
        );
      } else {
        updatedCartItems = [
          ...state.cartItems,
          {
            ...action.payload,
            quantity: 1,
            total_item_price: action.payload.price,
          },
        ];
      }

      const newTotalPrice = state.totalPrice + action.payload.price;
      const newTaxes = newTotalPrice * 0.18;
      const newGrandTotal = newTotalPrice + newTaxes + state.deliveryCharges;

      return {
        ...state,
        cartItems: updatedCartItems,
        cartCounter: state.cartCounter + 1,
        totalPrice: newTotalPrice,
        taxes: newTaxes,
        grandTotal: newGrandTotal,
      };
    }

    case 'REMOVE_FROM_CART': {
      const removedItem = state.cartItems.find(item => item.id === action.payload.id);
      if (!removedItem) return state;

      const updatedCartItems = state.cartItems.filter(item => item.id !== action.payload.id);
      const newTotal = state.totalPrice - (removedItem.price * removedItem.quantity);
      const newTaxes = newTotal * 0.18;
      const newGrandTotal = newTotal + newTaxes + state.deliveryCharges;

      return {
        ...state,
        cartItems: updatedCartItems,
        cartCounter: state.cartCounter - removedItem.quantity,
        totalPrice: newTotal,
        taxes: newTaxes,
        grandTotal: newGrandTotal,
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
