import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter,
  Route,
  browserHistory,
  Switch,
} from 'react-router-dom';

import {
  Provider,
} from 'react-redux';
import { HomePage } from './screens';


import configureStore from './store';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('app'));
