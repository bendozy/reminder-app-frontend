import { combineReducers } from 'redux';
import user from './userReducer';
import contacts from './contactReducer';

const rootReducer = combineReducers({
  user,
  contacts
});

export default rootReducer;
