import React, { useState, useEffect } from 'react'

function HookMouse() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const logMousePosition = e => {
    console.log("Mouse Event")
    setX(e.clientX)
    setY(e.clientY)
  }
  //Effect is called at every render unless you specify a dependency array. To call once in intial render, pass an empty array as 2nd parameter.
  // Try below example without 2nd parameter and check log while moving mouse
  // when you want to execute some component cleanup code you include it in a function and return that function from the function passed to useEffec. The cleanup code can be canceling subscriptions timers or even removing event handlers
  useEffect(() => {
    console.log('useeffect called')
    window.addEventListener('mousemove', logMousePosition)
    // Try below code commenting out and check console
    // On button click the component is hidden but when you move the mouse it will still log the coordinates. The event associated with that component is not waitForElementToBeRemoved. So for that we use return to cleanup just like in componentWillUnmount( phase)
    return () => {
      console.log("component unmounting code")
      window.removeEventListener('mousemove', logMousePosition)
    }
  }, [])
  return (
    <div>
      Hooks X - {x} Y - {y}
    </div>
  )
}

export default HookMouse
