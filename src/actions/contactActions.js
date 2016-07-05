import * as types from './../constants/actionTypes';
import axios from 'axios';

const API_PREFIX = process.env.API_URL;

export function createContactSuccess(contact) {
  return { type: types.CREATE_CONTACT_SUCCESS, contact };
}

export function updateContactSuccess(contact) {
  return { type: types.UPDATE_CONTACT_SUCCESS, contact };
}

export function loadContactSuccess(contacts) {
  return { type: types.LOAD_CONTACTS, contacts };
}

export function getContactBySuccess(contact) {
  return { type: types.LOAD_CONTACT_BY_ID, contact};
}

export function createContact(data) {
  const userData = JSON.parse(localStorage.getItem('app-user'));
  data.userId = userData.userId;
  return function(dispatch) {
    return axios({
      method: 'post',
      url: API_PREFIX + '/Contacts',
      data: data,
      params: {
        access_token: userData.id,
      },
      }).then(response => {
        dispatch(createContactSuccess(response.data));
      }).catch(error => {
        throw error;
      });
  };
}

export function updateContact(data) {
  const userData = JSON.parse(localStorage.getItem('app-user'));
  return function(dispatch) {
    return axios({
      method: 'put',
      url: API_PREFIX + '/Contacts/' + userData.userId,
      data: data,
      params: {
        access_token: userData.id,
      },
    }).then(response => {
      dispatch(updateContactSuccess(response.data));
    }).catch(error => {
      throw error;
    });
  };
}

export function loadContacts() {
  const userData = JSON.parse(localStorage.getItem('app-user'));

  return function(dispatch) {
    return axios({
      method: 'GET',
      url: API_PREFIX + '/Contacts',
      params: {
        "access_token": userData.id,
        "filter[where][userId]": userData.userId,
      },
      }).then(response => {
        dispatch(loadContactSuccess(response.data));
      }).catch(error => {
        throw error;
      });
  };
}


export function getContactById(id) {
  const userData = JSON.parse(localStorage.getItem('app-user'));

  return function(dispatch) {
    return axios({
      method: 'GET',
      url: API_PREFIX + '/Contacts/' + id,
      params: {
        "access_token": userData.id,
      },
    }).then(response => {
      dispatch(getContactBySuccess(response.data));
    }).catch(error => {
      throw error;
    });
  };
}
