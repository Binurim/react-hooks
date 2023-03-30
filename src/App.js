import './App.css';
import CounterHook from './components/CounterHook';
import DigitalClock from './components/DigitalClock';
import MemoContainer from './components/memoHook/MemoContainer';
import Purchase from './redux-components/Purchase';
import Cart from './redux-components/Cart';
import Total from './redux-components/Total';
import PurchaseClass from './redux-components/PurchaseClass';

function App() {
  return (
    <div className="App">
      <br />
      <h3>React Hooks - Sample Tryouts</h3>
      <br/>
      <div className="row">
        <div className="col-lg-4">
          <CounterHook />
        </div>
        <div className="col-lg-4">
          <DigitalClock />
        </div>
        <div className="col-lg-4">
        <MemoContainer />
        </div>
      </div>

      <hr />
      <h3>React/Redux/Hooks - Sample Tryouts</h3>
      <br/>
      {/* Components related redux */}
      <div className="row">
        <div className="col-lg-3">
          <Purchase />
        </div>
        <div className="col-lg-3">
          {/* Class component with redux */}
          <PurchaseClass />
        </div>
        <div className="col-lg-3">
          <Cart />
        </div>
        <div className="col-lg-3">
          <Total />
        </div>
      </div>
      <br/>
    </div>
  );
}

export default App;
