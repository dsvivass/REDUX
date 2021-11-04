import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux'

// STORE --> GLOBALIZED STATE
// var store = createStore()

// ACTION
const increment = () => {
  return {
    type: 'INCREMENT'
  }
}

const decrement = () => {
  return {
    type: 'INCREMENT'
  }
}

// REDUCER

const counter = (state = 0, action) => {
  switch (action.type){
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
  }
}

var store = createStore(counter, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  
  )

// Display it in console

store.subscribe(() => console.log(store.getState()))

// DISPATCH
store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'DECREMENT'})
store.dispatch({type: 'DECREMENT'})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
