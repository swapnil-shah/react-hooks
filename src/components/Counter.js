import React, { useState } from 'react'

// Hooks are just function, so we simply call them
// useState()
// This hook accepts an argument which initial value of state property and retuens current value of state property and a method which is capable to update the current value of state property

export default function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  )
}
