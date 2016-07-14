import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function contactReducer(state = initialState.contact, action) {
  switch (action.type) {
    case types.LOAD_CONTACT_BY_ID: {
      return action.contact;
    }
    case types.UPDATE_CONTACT_SUCCESS: {
      return action.contact;
    }
    default:
      return state;
  }
}
