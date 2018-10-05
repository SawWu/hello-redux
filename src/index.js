import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger'
import {Provider} from 'react-redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(rootReducer, {}, applyMiddleware(logger,thunk));

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);


serviceWorker.unregister();
