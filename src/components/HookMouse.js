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
  useEffect(() => {
    console.log('useeffect called')
    window.addEventListener('mousemove', logMousePosition)
  }, [])
  return (
    <div>
      Hooks X - {x} Y - {y}
    </div>
  )
}

export default HookMouse
