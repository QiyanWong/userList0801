import axios from 'axios';
// Create User
const createUserStart = () => {
  return {
    type: 'CREATE_USER_START'
  };  
};
const createUserFail = (error) => {
  return {
    type:'CREATE_USER_FAIL',
    error
  };
};

const createUserSuccess = (user) => {
  return {
    type:'CREATE_USER_SUCCESS',
    user
  }
};

 
export const createUser = (user) => {
  return (dispatch) => {
    dispatch(createUserStart());
    axios({
      method: 'POST',
      url: 'http://localhost:8080/api/users',
      data: user
    })
      .then(response => {
        console.log(response.data);
        dispatch(createUserSuccess(response.data.newUser));
      })
      .catch(error => {
        dispatch(createUserFail(error));
      });
  };
};

// Edit User
const editUserStart = () => {
  return {
    type: 'EDIT_USER_START'
  };
};

const editUserFail = (error) => {
  return {
    type: 'EDIT_USER_ERROR',
    error
  };
};

const editUserSuccess = (id, user) => {
  return {
    type: 'EDIT_USER_SUCCESS',
    id,
    user
  };
};

export const editUser = (id, user) => {
  return (dispatch) => {
    dispatch(editUserStart());
    axios
      .put(`http://localhost:8080/api/users/${id}`, user)
      .then(response => {
        dispatch(editUserSuccess(id, user));
        // console.log('this is in the edit user');
        // console.log('test: edit user success!!!');
        // console.log('test edit user id is', id);
        // console.log('test edit user is', user);
        //dispatch(getUsers());
        //console.log(getUsers());
      })
      .catch(error => {
        dispatch(editUserFail(error));
      });
   };
};

// Delete User
const deleteUserStart = () => {
  return {
    type: 'DELETE_USER_START'
  };
};

const deleteUserFail = (error) => {
  return {
    type: 'DELETE_USER_ERROR',
    error
  };
};

const deleteUserSuccess = (id) => {
  return {
    type: 'DELETE_USER_SUCCESS',
    id
  };
};

export const deleteUser = (id, deleteUser) => {
  return (dispatch) => {
    dispatch(deleteUserStart());
    axios
      .delete(`http://localhost:8080/api/users/${id}`, deleteUser)
      .then(response => {
        dispatch(deleteUserSuccess(id));
        dispatch(getUsers());
        console.log('delete user success');
      })
      .catch(error => {
        dispatch(deleteUserFail(error));
      });
  };
};

// // Get User
// const getUserStart = () => {
//   return {
//     type: 'GET_USER_START'
//   };
// };

// const getUserFail = (error) => {
//   return {
//     type: 'GET_USER_ERROR',
//     error
//   };
// };

// const getUserSuccess = (id) => {
//   return {
//     type: 'GET_USER_SUCCESS',
//     id
//   };
// }

// export const getUser = (id, getUser) => {
//   return (dispatch) => {
//     dispatch(getUserStart());
//     axios
//       .get(`http://localhost:8080/api/users/${id}`, getUser)
//       .then(response => {
//         dispatch(getUserSuccess(id));
//         console.log('get user success');
//       })
//       .catch(error => {
//         dispatch(getUserFail(error));
//       });
//   };
// };

// Get Userlist
const getUsersStart = () => {
  return {
    type: 'GET_USERS_START'
  };
};

const getUsersFail = (error) => {
  return {
    type: 'GET_USERS_ERROR',
    error
  };
};

const getUsersSuccess = (response) => {
  return {
    type: 'GET_USERS_SUCCESS',
    data: response
  };
};

export const getUsers = () => {
  return (dispatch) => {
    dispatch(getUsersStart());
    axios
      .get('http://localhost:8080/api/users', getUsers)
      .then(response => {
        dispatch(getUsersSuccess(response.data));
      })
      .catch(error => {
        dispatch(getUsersFail(error));
      });
  };
};

// Redirect
export const redirect = () => {
  return {
    type: 'REDIRECT'
  };
};

export const resetRedirect = () => {
  return {
    type: 'RESET_REDIRECT'
  };
};


