import React, { useState } from 'react'

// Hooks are just function, so we simply call them
// useState()
// This hook accepts an argument which initial value of state property and retuens current value of state property and a method which is capable to update the current value of state property
//When you have to update state based on the previous state state, pass in the prev state value to state setter

export default function Counter() {
  const initialCount = 0
  const [count, setCount] = useState(initialCount)


  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount(count + 1)
    }
  }
  const incrementFiveWithPrev = () => {
    for (let i = 0; i < 5; i++) {
      setCount(prevCount => prevCount + 1)
    }
  }
  return (
    <>
      <div>
        Count: {count}
      </div>
      <div>
        <button onClick={() => setCount(initialCount)}>Reset</button>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
        <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
        <button onClick={incrementFive}>Increment 5 without prevState</button>
        {/* Count will only increased by 1. setCount will read stale value of coutn variable */}
        <button onClick={incrementFiveWithPrev}>Increment 5 with prevState</button>
        {/* To overcome this we will pass a function which has access to old state value. So we will change Increment and Decrement accordingly */}
      </div>
    </>
  )
}
