import { combineReducers } from 'redux-immutable';

import {
  reducer as form,
} from 'redux-form/immutable';

import authObject from './AuthReducer';

export default combineReducers({
	authObject,
	form,
});