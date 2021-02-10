import React from 'react'
import { UserContext, AgeContext } from '../App'
function ComponentF() {
  return (
    <div>
      <h2>Component F wihout useContext</h2>
      <UserContext.Consumer>
        {
          user => {
            return (
              <AgeContext.Consumer>{
                age => {
                  return <div>User Context value is {user} and age is {age}</div>
                }
              }
              </AgeContext.Consumer>
            )

          }
        }
      </UserContext.Consumer>
    </div>
  )
}

export default ComponentF
