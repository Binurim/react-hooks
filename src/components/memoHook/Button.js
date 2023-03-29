import React from "react";

function Button(props) {
  return (
    <div>
      <button onClick={props.click}>{props.caption}</button>
    </div>
  );
}

export default React.memo(Button);
