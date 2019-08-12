import { combineReducers } from 'redux';
import account from './account';
import posts from './posts';

export default combineReducers({
  account,
  posts,
});
