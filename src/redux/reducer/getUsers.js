const initState = {
  isLoading: false,
  users:[],
  err: null
};

const getUsers = (state = initState, action) => {
  switch(action.type) {
    // Get UserList 
    case 'GET_USERS_START':
      return {
        ...state,
        isLoading: true,
        err: null
      };
    case 'GET_USERS_FAIL':
      return {
        ...state,
        isLoading: false,
        err: action.error
      };
    case 'GET_USERS_SUCCESS':
      return {
        ...state,
        isLoading: false,
        err: null,
        users: action.data
      };
    
    // Delete User
    case 'DELETE_USER_START':
      return {
        ...state,
        isLoading: true
      };
    case 'DELETE_USER_ERROR':
      return {
        ...state,
        isLoading: false,
        err: action.error
      };
    case 'DELETE_USER_SUCCESS':
      return {
        ...state,
        users: state.users.filter(user => user._id !== action.id),
        isLoading:false,
        err: null,
      };
    
    // Create New User 
    case 'CREATE_USER_START':
      return {
        ...state,
        isLoading: true,
        err: null
      };
    case 'CREATE_USER_FAIL':
      return {
        ...state,
        isLoading: false,
        err: action.error
      };
    case 'CREATE_USER_SUCCESS':
      const newUsers = state.users;
      newUsers.push(action.user);
      return {
        ...state,
        isLoading: false,
        err: null,
        users: newUsers
      };
    
    // Edit User 
    case 'EDIT_USER_START':
      return {
        ...state,
        isLoading: true
      };
    case 'EDIT_USER_ERROR':
      return {
        ...state,
        isLoading: false,
        err: action.error
      };
    case 'EDIT_USER_SUCCESS':
      let newUser = state.users.map(user => {
        if (user._id === action.id) {
          return action.user;
        } else {
          return user;
        }
      });
      return {
        ...state,
        isLoading: false,
        // err: null,
        users: newUser
      };

    default:
      return state;
  }
}

export default getUsers;


  // case 'GET_USER_START':
    //   return {
    //     ...state,
    //     isLoading: true
    //   };
    // case 'GET_USER_ERROR':
    //   return {
    //     ...state,
    //     isLoading: false,
    //     err: action.error
    //   };
    // case 'GET_USER_SUCCESS':
    //   return {
    //     ...state,
    //     users: state.users.filter(user => user._id === action.id),
    //     isLoading:false,
    //     err: null,
    //   };