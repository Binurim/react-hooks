import React from "react";

function DisplayFlag(props) {
  return (
    <div>
      <h5>Flag: {props.flag.toString()}</h5>
    </div>
  );
}

export default React.memo(DisplayFlag);
