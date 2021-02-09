import HookCounter from './components/HookCounter'
import HookCounterTwo from './components/HookCounterTwo'
import HookCounterThree from './components/HookCounterThree'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Learn React Hooks</h1>
        <HookCounter />
        {/* <HookCounterThree /> */}
      </header>
    </div>
  );
}

export default App;
