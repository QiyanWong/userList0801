import React, { Component } from 'react';
import { connect } from "react-redux";
import { getUsers, deleteUser, createUser, cancelRedirect, redirect, editUser } from '../../redux/action-creators';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UserList from '../../components/UserList';
import CreateUser from '../../components/CreateUser';
import EditUser from '../../components/EditUser';

class App extends Component { 
  getUser = (_id) => {
    console.log('get edit user is called');
    console.log('id ', _id)
    const users = this.props.users;
    
    for (let user of users) {
      console.log('user is : ', user);
      console.log('type of user_id is', user._id);
      console.log('type of _id is',  _id);
      console.log(user._id === _id);
      if (user._id === _id) {
        console.log(user._id);
        return user;
      }
    }
  };
  render() {
    //console.log(this.props.users);
    //console.log(this.props.getUsers);
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact = {true} 
            path = '/' 
            render = {() => 
              <UserList 
                users = {this.props.users}
                getUsers = {this.props.getUsers}
                deleteUser = {this.props.deleteUser}
                isLoading = {this.props.isLoading}
                cancelRedirect = {this.props.cancelRedirect}
              /> 
            } 
          />
          <Route 
            exact = {true}
            path = '/users' 
            render = {() => 
              <CreateUser 
                createUser = {this.props.createUser} 
                redirect = {this.props.redirect}
                redirectToUserlist = {this.props.redirectToUserlist}
                isLoading = {this.props.isLoading}
              />
            }
          />
           <Route 
            path = '/users/:user_id' 
            render = {({ match }) => {
              return (
                <EditUser
                  users = {this.props.users}
                  id = {match.params.user_id}
                  editUser = {this.props.editUser}
                  getUsers = {this.props.getUsers}
                  getUser = {this.getUser}
                  redirect = {this.props.redirect}
                  redirectToUserlist = {this.props.redirectToUserlist}
                  isLoading = {this.props.isLoading}
                /> 
              );
            }}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.getUsers.users,
    redirect: state.redirect,
    isLoading: state.getUsers.isLoading,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => {
      dispatch(getUsers());
    },
    deleteUser: (_id) => {
      dispatch(deleteUser(_id));
    },
    createUser: (user) => {
      dispatch(createUser(user));
    },
    redirectToUserlist: () => {
      dispatch(redirect());
    },
    cancelRedirect: () => {
      dispatch(cancelRedirect());
    },
    editUser: (id, user) => {
      dispatch(editUser(id, user));
    }
    // getUser: (_id) => {
    //   dispatch(getUser(_id));
    // },
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(App);

