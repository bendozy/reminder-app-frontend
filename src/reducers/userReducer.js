import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function userReducer(state = initialState.user, action) {
  switch (action.type) {
    case types.USER_IS_AUTHENTICATED: {
      const isAuthenticated = action.isAuthenticated;
      return Object.assign({}, state, { isAuthenticated });
    }
    case types.REGISTER_SUCCESS: {
      const isAuthenticated = true;
      return Object.assign({}, state, { isAuthenticated });
    }
    case types.LOGOUT_SUCCESS: {
      const isAuthenticated = false;
      return Object.assign({}, state, { isAuthenticated });
    }
    default:
      return state;
  }
}
