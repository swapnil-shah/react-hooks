// As soon as the component mounts make an API call to fetch data. 
// While the data is being fetched, show a loading indicator  
// When the data is fetched successfully, hide the loading indicator and display the data 
// If there was an error fetching the data we hide the loading indicator and display an error message

import React, { useReducer } from 'react'
import ParentComponent from './components/useCallback/ParentComponent'

function App() {
  return (
    <div className="App">
      <ParentComponent />
    </div >
  );
}

export default App;
