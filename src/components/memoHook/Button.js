import React from "react";

function Button(props) {
  return (
    <div>
      <button className="btn btn-info" onClick={props.click}>{props.caption}</button>
    </div>
  );
}

export default React.memo(Button);
