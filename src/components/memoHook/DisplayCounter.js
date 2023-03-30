import React from "react";

function DisplayCounter(props) {
  return (
    <div>
      <h5>Counter: {props.counter}</h5>
    </div>
  );
}

export default React.memo(DisplayCounter);
