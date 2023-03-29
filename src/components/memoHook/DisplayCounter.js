import React from "react";

function DisplayCounter(props) {
  return (
    <div>
      <h1>Counter: {props.counter}</h1>
    </div>
  );
}

export default React.memo(DisplayCounter);
