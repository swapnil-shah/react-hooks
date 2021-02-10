import React, { useContext } from 'react'
import { UserContext, AgeContext } from '../App'

function ComponentE() {
  const user = useContext(UserContext)
  const age = useContext(AgeContext)
  return (
    <div>
      <div>With useContext hook: User Context value is {user} and age is {age}</div>
    </div>
  )
}

export default ComponentE
