import React from "react";
import { NavLink, Outlet} from "react-router-dom";

const Navigation = () => {
  <nav className="main-nav">
            <ul>
                <li><NavLink to="cats">Cats</NavLink></li>
                <li><NavLink to="dogs">Dogs</NavLink></li>
                <li><NavLink to="spiders">Spiders</NavLink></li>
            </ul>
            <Outlet />
        </nav>
};

export default Navigation;
