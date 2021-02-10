import React, { useState } from 'react'

function HookCounterTwo() {
  // A state var can be a string, number, boolean, object or array
  //useState does not autuomatically merge the state like class. Have to do it manually. that's why spread
  // { ...name, firstName: e.target.value }: Copy every property in the name object  and then jusut overwrite field with different value
  //If spread operator is not used ({ firstName: e.target.value }), then only that object field will be updated while clearing the other one
  const [name, setName] = useState({ firstName: '', lastName: '' })
  return (
    <form>
      <input
        type="text"
        value={name.firstName}
        onChange={e => setName({ ...name, firstName: e.target.value })}
      />
      <input
        type="text"
        value={name.lastName}
        onChange={e => setName({ ...name, lastName: e.target.value })}
      />
      <h2>Your first name is -{name.firstName}</h2>
      <h2>Your last name is -{name.lastName}</h2>
      <h2>{JSON.stringify(name)}</h2>
    </form>
  )
}

export default HookCounterTwo
