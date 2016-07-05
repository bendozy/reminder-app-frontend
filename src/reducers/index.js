import { combineReducers } from 'redux';
import user from './userReducer';
import contacts from './contactsReducer';
import contact from './contactReducer';

const rootReducer = combineReducers({
  user,
  contacts,
  contact,
});

export default rootReducer;
