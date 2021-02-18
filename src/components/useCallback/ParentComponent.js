import React, { useState, useCallback } from 'react'
import Title from './Title'
import Count from './Count'
import Button from './Button'


function ParentComponent() {
  const [age, setAge] = useState(29)
  const [salary, setSalary] = useState(50000)

  const increamentAge = useCallback(() => {
    setAge(age + 1)
  }, [age])

  const increamentSalary = useCallback(() => {
    setSalary(salary + 10000)
  }, [salary])
  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={increamentAge}>Increment Age</Button>
      <Count text="Age" count={salary} />
      <Button handleClick={increamentSalary}>Increment Salary</Button>
    </div>
  )
}

export default ParentComponent
