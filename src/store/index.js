import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

export default function configureStore(initialState) {
  const middlewares = [];

  if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
  }

  const sagaMiddleware = createSagaMiddleware();
  middlewares.push(sagaMiddleware);

  // Creates the Redux store using our reducer and the logger and saga middlewares
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(...middlewares),
    ),
  );
  // We run the root saga automatically
  sagaMiddleware.run(rootSaga);
  return store;
}
