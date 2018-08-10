import {
  fork
} from 'redux-saga/effects';

import Auth from './AuthSaga';

export default function* root() {
	yield fork(Auth);
};