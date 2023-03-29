import './App.css';
import CounterHook from './components/CounterHook';
import DigitalClock from './components/DigitalClock';
import MemoContainer from './components/memoHook/MemoContainer';

function App() {
  return (
    <div className="App">
      <CounterHook/>
      <hr/>
      <DigitalClock/>
      <hr/>
      <MemoContainer/>
    </div>
  );
}

export default App;
