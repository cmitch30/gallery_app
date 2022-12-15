import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  <nav className="main-nav">
    <ul>
      <li>
        <NavLink to="anime">Anime</NavLink>
      </li>
      <li>
        <NavLink to="tokyo">Tokyo</NavLink>
      </li>
      <li>
        <NavLink to="computers">Computers</NavLink>
      </li>
    </ul>
  </nav>;
};

export default Nav;
