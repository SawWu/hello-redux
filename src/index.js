import React from 'react';
import {render} from 'react-dom';
import App from './App';
import {createStore} from 'redux';
import reducer from './reducers/counter';

let store = createStore(reducer);
const init = store.getState();
console.log(init);

render(
  <App/>,
  document.querySelector('#root')
);

