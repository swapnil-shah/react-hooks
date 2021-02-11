// Our goal is to maintain account state in App.js and modify that state from components A D and F

import React, { useReducer } from 'react'
import ComponentA from './components/useReducer/ComponentA'
import ComponentB from './components/useReducer/ComponentB'
import ComponentC from './components/useReducer/ComponentC'

export const CountContext = React.createContext()

const initialState = 0
const reducer = (currentState, action) => {
  switch (action) {
    case 'increment':
      return currentState + 1
    case 'decrement':
      return currentState - 1
    case 'reset':
      return initialState
    default:
      return currentState
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
      <div className="App">
        <h1>Count: {count}</h1>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div >
    </CountContext.Provider>
  );
}

export default App;
