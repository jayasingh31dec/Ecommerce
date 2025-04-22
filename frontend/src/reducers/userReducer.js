// Initial state for user
const initialState = {
    userInfo: null, // User data will be stored here after login
    isLoggedIn: false, // To track login status
  };
  
  // userReducer function
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'USER_LOGIN':
        return {
          ...state,
          userInfo: action.payload, // Save user data in the state
          isLoggedIn: true, // Set login status to true
        };
  
      case 'USER_LOGOUT':
        return {
          ...state,
          userInfo: null, // Clear user data
          isLoggedIn: false, // Set login status to false
        };
  
      default:
        return state;
    }
  };
  
  export default userReducer;
  