import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <aside>
        <h3>All Categories</h3>
      </aside>

      <ul>
        <li>
          <NavLink to="/"> Home </NavLink>
        </li>
        <li>
          <NavLink to="/about"> Bout Us </NavLink>
        </li>
        <li>
          <NavLink to="/store"> Store </NavLink>
        </li>
        <li>
          <NavLink to="/contact"> Contact </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
