import React from 'react'
import useCounter from './useCounter'

function CounterOne() {
  const [count, increment, decrement, reset] = useCounter()
  return (
    <div>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
      <button onClick={increment}>+</button>
      <div>Count {count}</div>
    </div>
  )
}

export default CounterOne
