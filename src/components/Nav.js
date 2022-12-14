import React from "react";
import {NavLink, Link } from "react-router-dom";

const Nav = () => {
  <nav className="main-nav">
    <ul>
      <li>
        <NavLink to="cat">Cats</NavLink>
      </li>
      <li>
        <NavLink to="dogs">Dogs</NavLink>
      </li>
      <li>
        <NavLink to="computers">Computers</NavLink>
      </li>
    </ul>
  </nav>;
};

export default Nav;
