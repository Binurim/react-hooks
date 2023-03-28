import { useState } from "react";

/**
 * useState hook usage with object literal
 */
function CounterHook() {
  const [cObj, setCounter] = useState({
    count: 0,
    flag: true,
  });

  const countHandler = (operator) => {
    if (operator === "+") {
      setCounter({ ...cObj, count: cObj.count + 1 });
    } else {
      setCounter({ ...cObj, count: cObj.count - 1 });
    }
  };
  return (
    <div>
      <h1>Counter : {cObj.count}</h1>
      <button onClick={() => countHandler("+")}>+</button>
      <button onClick={() => countHandler("-")}>-</button>
      <h2>{cObj.flag.toString()}</h2>
      <button onClick={() => setCounter({ ...cObj, flag: !cObj.flag })}>
        toggle
      </button>
    </div>
  );
}

export default CounterHook;
