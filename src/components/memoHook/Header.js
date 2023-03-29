import React from "react";

function Header() {
    return(
        <div>This is header</div>
    )
}

/**
 * All the components are rendering unnecessarily is avoid by React.memo()
 */
export default React.memo(Header);