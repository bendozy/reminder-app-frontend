import * as types from './actionTypes';

export function checkUserStatus() {
  const userData = localStorage.getItem('app-user');
  let isAuthenticated = false;
  if (userData.id) {
    isAuthenticated = true;
  }
  return { type: types.USER_IS_AUTHENTICATED, isAuthenticated};
}
