import React, { useState } from 'react'

function CounterTwo() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(prevCount => prevCount + 1)
  }
  const decrement = () => {
    setCount(prevCount => prevCount - 1)
  }
  const reset = () => {
    setCount(0)
  }
  return (
    <div>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
      <button onClick={increment}>+</button>
      <div>Count {count}</div>
    </div>
  )
}

export default CounterTwo
