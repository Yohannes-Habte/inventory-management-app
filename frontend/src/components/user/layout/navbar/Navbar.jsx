import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  // Styling NavLink
  const navbarNavLink = ({ isActive }) =>
    isActive ? "active-navbar-item" : "passive-navbar-item";

  return (
    <nav className="navbar">
      <ul className="navbar-items">
        <li className="navbar-item">
          <NavLink to={"/"} className={navbarNavLink}>
            Home
          </NavLink>
        </li>

        <li className="navbar-item">
          <NavLink to={"/about"} className={navbarNavLink}>
            About Us
          </NavLink>
        </li>

        <li className="navbar-item">
          <NavLink to={"/products"} className={navbarNavLink}>
            Products
          </NavLink>
        </li>

        <li className="navbar-item">
          <NavLink to={"/store"} className={navbarNavLink}>
            Store
          </NavLink>
        </li>

        <li className="navbar-item">
          <NavLink to={"/contact"} className={navbarNavLink}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
