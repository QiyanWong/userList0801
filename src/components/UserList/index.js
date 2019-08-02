import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers, deleteUser } from '../../redux/action-creators';
//import { BrowserRouter, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

class UserList extends Component {
  componentDidMount() {
    this.props.dispatch(getUsers());
    this.props.resetRedirect();
  }
  
  deleteUser = id => {
    this.props.dispatch(deleteUser(id));
  }

  render() {
    //return (
    if (this.props.isLoading) {
      return <div>Loading...</div>
    } else {
      return (
        <div className = 'container'>
          <h2>Users</h2>
          <div className = 'searchBox'>
            <form>
              Search:
              <input type = 'text' name = 'search' />
            </form>
          </div>
          <table>
            <thead> 
              <tr>
                <th>Edit</th>
                <th>Delete</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Sex</th>
                <th>Age</th>
              </tr>    
            </thead>
            
            <tbody>
              {this.props.users.map(user => {
                return (
                  <tr key = {user._id}>
                    <td><Link to={`/users/${user._id}`} className="btn btn-primary">Edit</Link></td>
                    <td><button type = 'button' onClick={() => this.props.deleteUser(user._id)}>Delete</button></td>
                    <td>{user.firstname}</td>
                    <td>{user.lastname}</td>
                    <td>{user.sex}</td>
                    <td>{user.age}</td>
                  </tr>
                );
              })} 
            </tbody> 
          </table>
          <Link to="/users" className="btn btn-primary" > 
            Create New User
          </Link>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.getUsers.users
  };
}


export default connect(mapStateToProps)(UserList);

