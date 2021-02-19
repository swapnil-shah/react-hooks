// Tasks
// 1. Keep track of account value
// 2. After every render update the document title to the current count value

import React, { useState } from 'react'
import useDocumentTitle from './useDocumentTitle'
function DocTitleOne() {

  const [count, setCount] = useState(0)

  useDocumentTitle(count)

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Counter {count}</button>
    </div>
  )
}

export default DocTitleOne
