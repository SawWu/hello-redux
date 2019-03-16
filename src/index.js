import React from 'react';
import {render} from 'react-dom';
import 'babel-polyfill'
import App from './App';
import { createStore,applyMiddleware} from 'redux';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(rootReducer,{}, applyMiddleware(logger,thunk));

render(
    <Provider store={ store }>
      <App />
    </Provider>,
  document.querySelector('#root'),
);

