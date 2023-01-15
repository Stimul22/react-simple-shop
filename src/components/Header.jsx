import React from "react";

const Header = (props) => {
  return (
    <nav className="cyan lighten-3">
      <div className="nav-wrapper">
        <span className="brand-logo">React Shop</span>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="https://github.com/Stimul22">Repo</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export { Header };