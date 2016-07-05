import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function contactReducer(state = initialState.contacts, action) {
  switch (action.type) {
    case types.CREATE_CONTACT_SUCCESS: {
      return [
        ...state,
        Object.assign({}, action.contact)
      ];
    }
    case types.UPDATE_CONTACT_SUCCESS: {
      return [
        ...state.filter(contact => contact.id !== action.contact.id),
        Object.assign({}, action.course)
      ];
    }
    case types.LOAD_CONTACTS: {
      return action.contacts;
    }
    default:
      return state;
  }
}
