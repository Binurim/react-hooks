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
    <div className="card">
      <div className="card-header">
        <h4>Counter</h4>
      </div>
      <h5>Counter Value: {cObj.count}</h5>
      <div className="row">
        <div className="col-sm-6">
          <button
            className="btn btn-info counterBtn"
            onClick={() => countHandler("+")}
          >
            +
          </button>
        </div>

        <div className="col-sm-6">
          <button
            className="btn btn-info counterBtn"
            onClick={() => countHandler("-")}
          >
            -
          </button>
        </div>
      </div>
      <h5>Flag: {cObj.flag.toString()}</h5>
      <button
        className="btn btn-info toggleBtn"
        onClick={() => setCounter({ ...cObj, flag: !cObj.flag })}
      >
        Toggle
      </button>
    </div>
  );
}

export default CounterHook;
