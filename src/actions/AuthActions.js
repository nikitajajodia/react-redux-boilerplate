import actionTypes from './actionTypes';

export function login(credentials) {
  return {
    type: actionTypes.LOGIN,
    credentials
  };
}