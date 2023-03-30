import React from "react";

function Header() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <a class="navbar-brand" href="#">
            <h6>Header</h6>
          </a>
        </nav>
      </div>
    );
}

/**
 * All the components are rendering unnecessarily is avoid by React.memo()
 */
export default React.memo(Header);