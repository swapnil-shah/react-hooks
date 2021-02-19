// We are repeating the same logic in different components <DocTitleOne /> <DocTitleTwo />
// Imagine if you want to have ten different components that update the document title. You definitely don't want to be repeating the code
// This is where a custom hook makes perfect sense
// In our current example(<DocTitleOne /> <DocTitleTwo />) we can create a custom hook that extracts the logic of updating the document title. We can then reuse the same custom hook in different components.

import React, { useEffect } from 'react'

function useDocumentTitle(count) {
  useEffect(() => {
    document.title = `Count ${count}`
  }, [count])
}

export default useDocumentTitle
