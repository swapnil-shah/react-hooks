import React, { useState, useEffect } from 'react'

function IntervalHookCounter() {
  const [count, setCount] = useState(0)

  const tick = () => {
    setCount(prevCount => prevCount + 1)
  }
  // sometimes you might want to call a function with a useEffect so function do something. Whenever you need to call a function within useEffect just go ahead and define the function within the useEffect
  // function doSomething() {
  //   console.log("Do something")
  // }

  // If you think dependency array is a way to specify when you want to rerun the effect they're going to run into problems, instead dependency array should be thought of as a way to let react know about everything that the effect must watch

  useEffect(() => {
    function doSomething() {
      console.log("Do something")
    }
    doSomething()
    const interval = setInterval(tick, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [count])
  return (
    <div>
      {count}
    </div>
  )
}


export default IntervalHookCounter
// Above example can also be used like below if we have prop
// useEffect(() => {
//   function doSomething() {
//     console.log(someProp)
//   }
//   doSomething()
//   const interval = setInterval(tick, 1000)
//   return () => {
//     clearInterval(interval)
//   }
// }, [someProp])
