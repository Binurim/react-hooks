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
      {/* <CounterHook/>
      <hr/>
      <DigitalClock/>
      <hr/>
      <MemoContainer/> */}

      {/* Components related redux */}
      <Purchase/>
      <hr/>  
      <PurchaseClass/>
      <hr/>    
      <Cart/>
      <hr/>      
      <Total/>
    </div>
  );
}

export default App;
