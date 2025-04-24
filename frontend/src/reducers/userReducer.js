
const initialState = {
    userInfo: null, 
    isLoggedIn: false, 
  };
  
 
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'USER_LOGIN':
        return {
          ...state,
          userInfo: action.payload, // Save user data in the state
          isLoggedIn: true,
        };
  
      case 'USER_LOGOUT':
        return {
          ...state,
          userInfo: null, // Clear user data
          isLoggedIn: false,
        };
  
      default:
        return state;
    }
  };
  
  export default userReducer;
  