import React from "react";
import { NavLink} from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink to="spain">Spain</NavLink>
        </li>
        <li>
          <NavLink to="tokyo">Tokyo</NavLink>
        </li>
        <li>
          <NavLink to="thailand">Thailand</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
