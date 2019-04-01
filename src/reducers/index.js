import { combineReducers } from 'redux';

import {
  reducer as form,
} from 'redux-form';

import authObject from './AuthReducer';

export default combineReducers({
  authObject,
  form,
});
