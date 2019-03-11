import React from 'react';
import {render} from 'react-dom';
import 'babel-polyfill'
import App from './App';
import { createStore } from 'redux';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(rootReducer);

render(
    <Provider store={ store }>
      <App />
    </Provider>,
  document.querySelector('#root'),
);

