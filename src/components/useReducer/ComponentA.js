import React, { useContext } from 'react'
import { CountContext } from '../../App'

function ComponentA() {
  const countContext = useContext(CountContext)
  return (
    <div style={{ border: "1px solid black", margin: '30px', padding: "30px" }}>
      <h3>Component A</h3>
      <h4>{countContext.countState}</h4>
      <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
      <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
      <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
    </div>
  )
}

export default ComponentA
