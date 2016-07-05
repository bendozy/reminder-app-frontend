import * as types from './../constants/actionTypes';
import axios from 'axios';

const API_PREFIX = process.env.API_URL;



export function checkUserStatus() {
  const userData = JSON.parse(localStorage.getItem('app-user'));
  let isAuthenticated = false;
  if (userData && userData.id) {
    isAuthenticated = true;
  }
  return { type: types.USER_IS_AUTHENTICATED, isAuthenticated};
}


export function logoutUserSuccess() {
  localStorage.removeItem('app-user');
  return { type: types.LOGOUT_SUCCESS, isAuthenticated: false };
}

export function registerUserSuccess(data) {
  localStorage.setItem('app-user',  JSON.stringify(data));
  return { type: types.REGISTER_SUCCESS, isAuthenticated: true };
}

export function loginUserSuccess(data) {
  localStorage.setItem('app-user',  JSON.stringify(data));
  return { type: types.LOGIN_SUCCESS, isAuthenticated: true };
}

export function loginUser(data) {
  return function(dispatch) {
    return axios.post(API_PREFIX + 'users/login', data)
      .then(response => {
        dispatch(loginUserSuccess(response.data));
      }).catch(error => {
        throw error;
      });
  };
}

export function logoutUser() {
  const userData = JSON.parse(localStorage.getItem('app-user'));

  return function(dispatch) {
    return axios({
      method: 'post',
      url: API_PREFIX + '/users/logout',
      params: {
        access_token: userData.id,
      },
    }).then(() => {
      dispatch(logoutUserSuccess());
    }).catch(error => {
      throw error;
    });
  };
}

export function registerUser(data) {
  return function(dispatch) {
    return axios.post(API_PREFIX + 'users', data)
      .then(response => {
        dispatch(registerUserSuccess(response.data));
      }).catch(error => {
        throw error;
      });
  };
}
