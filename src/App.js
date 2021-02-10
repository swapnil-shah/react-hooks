import HookCounter from './components/HookCounter'
import HookCounterTwo from './components/HookCounterTwo'
import HookCounterThree from './components/HookCounterThree'
import HookMouse from './components/HookMouse'
import MouseContainer from './components/MouseContainer'
import IntervalHookCounter from './components/IntervalHookCounter'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Learn React Hooks</h1>
        {/* <HookCounter /> */}
        {/* <HookCounterThree /> */}
        <IntervalHookCounter />
      </header>
    </div>
  );
}

export default App;
