import actionTypes from './actionTypes';

export function login(credentials) {
  return {
    type: actionTypes.LOGIN,
    credentials,
  };
}

// dummy test function for ignoring lint import/prefer-default-export
export function test(credentials) {
  return {
    type: actionTypes.LOGIN,
    credentials,
  };
}
