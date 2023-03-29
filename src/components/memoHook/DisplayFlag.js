import React from "react";

function DisplayFlag(props) {
  return (
    <div>
      <h1>Flag: {props.flag.toString()}</h1>
    </div>
  );
}

export default React.memo(DisplayFlag);
