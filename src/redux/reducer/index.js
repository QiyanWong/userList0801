import { combineReducers } from 'redux';
import getUsers from './getUsers';
import redirect from './redirect';

const reducers = combineReducers({
  getUsers,
  redirect
});

export default reducers;