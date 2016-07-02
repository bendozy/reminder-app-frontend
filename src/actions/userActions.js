import * as types from './../constants/actionTypes';
import axios from 'axios';

const API_PREFIX = 'http://0.0.0.0:3600/api/';

export function checkUserStatus() {
  const userData = JSON.parse(localStorage.getItem('app-user'));
  console.log(userData);
  let isAuthenticated = false;
  if (userData && userData.id) {
    isAuthenticated = true;
  }
  return { type: types.USER_IS_AUTHENTICATED, isAuthenticated};
}

export function registerUserSuccess(data) {
  localStorage.setItem('app-user',  JSON.stringify(data));
  return { type: types.REGISTER_SUCCESS, isAuthenticated: true };
}

export function registerUserFailure(error) {
  console.log(error());
  return { type: types.REGISTER_FAILURE, isAuthenticated: false };
}

export function registerUser(data) {
  console.log(data);
  return function(dispatch) {
    // dispatch(beginAjaxCall());
    return axios.post(API_PREFIX + 'users', data)
      .then(response => {
        dispatch(registerUserSuccess(response.data));
      }).catch(error => {
        console.log(error);
        throw error;
      });
  };
}
