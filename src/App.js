import React from 'react'
import HookCounter from './components/HookCounter'
import HookCounterTwo from './components/HookCounterTwo'
import HookCounterThree from './components/HookCounterThree'
import HookMouse from './components/HookMouse'
import MouseContainer from './components/MouseContainer'
import IntervalHookCounter from './components/IntervalHookCounter'
import DataFetching from './components/DataFetching'
import ComponentC from './components/ComponentC'

export const UserContext = React.createContext()
export const AgeContext = React.createContext()

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={'Swapnil'}>
        <AgeContext.Provider value={32}>
          <ComponentC />
        </AgeContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
