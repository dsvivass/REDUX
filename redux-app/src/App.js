
import React from 'react'
import {useSelector, useDispatch} from 'react-redux'


function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      
      <button onClick={() => dispatch({type: 'INCREMENT', payload: 5})}>+</button>
      <button onClick={() => dispatch({type: 'DECREMENT', payload: 3})}>-</button>

      {isLogged ? 
      <h3>Valuable info I shouldn't see</h3> : <h3>Login</h3>}
      
    </div>
  );
}

export default App;
