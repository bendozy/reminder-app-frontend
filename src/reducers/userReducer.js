import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.user, action) {
  switch (action.type) {
    case types.USER_IS_AUTHENTICATED: {
      const isAuthenticated = action.isAuthenticated;
      return Object.assign({}, state, { isAuthenticated });
    }
    default:
      return state;
  }
}
