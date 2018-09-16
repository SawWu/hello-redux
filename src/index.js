import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux';
import reducer from './reducers/counter';

let store = createStore(reducer);

store.subscribe(() => console.log("State updated!", store.getState()));

const render=()=>{
  ReactDOM.render(
    <App value={store.getState()}
         onIncrement={() => store.dispatch({type: "INCREMENT"})}
         onDecrement={() => store.dispatch({type: "DECREMENT"})}/>,
    document.querySelector('#root')
  );
}

render();
store.subscribe(render);



