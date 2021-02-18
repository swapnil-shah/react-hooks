import React, { useState, useMemo } from 'react'

function Counter() {
  const [counterOne, setCounterOne] = useState(0)
  const [counterTwo, setCounterTwo] = useState(0)

  const incrementOne = () => {
    setCounterOne(counterOne + 1)
  }

  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1)
  }
  // every time the state updates, the component re-renders and when the component renders this even function is called again. The function is slow and hence even when we update counter to the UI update is slow 
  // we need to tell react not to calculate whether counter one is odd or even when we are changing counter two values
  // This is where the useMemo hook comes into picture
  // useMemo is a hook that will only recompute the cached value when one of the dependencies has changed. This optimisation heads to avoid expensive calculations on every render
  const isEven = useMemo(() => {
    let i = 0
    while (i < 2000000000) i++//inducing slowness in UI
    return counterOne % 2 === 0
  }, [counterOne])

  return (
    <div>
      <div>
        <button onClick={incrementOne}>Counter {counterOne}</button>
        <span>{isEven ? "Even" : "Odd"}</span>
      </div>
      <div>
        <button onClick={incrementTwo}>Counter {counterTwo}</button>
      </div>
    </div>
  )
}

export default Counter
