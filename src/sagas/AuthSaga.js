import {
  take,
  fork,
} from 'redux-saga/effects';
import actionTypes from '../actions/actionTypes';

function* login() {
  while (true) {
    const request = yield take(actionTypes.LOGIN);
    if (request === 'test') {
      console.log('auth');
    }
  }
}

export default function* () {
  yield fork(login);
}
