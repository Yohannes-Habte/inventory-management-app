import React from "react";
import "./Header.scss"
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Search from "../../../search/Search";

const Header = () => {
  return (
    <header className="header">
      {/* Top part of the header */}
      <aside className="logo-register-login-wrapper">
        <h1> LisaStore </h1>
        {/* Register and login */}
        <ul className="register-login-box">
          <li className="account-item">
            <Link to={"/register"} className="acount">
              Sign Up
            </Link>
          </li>

          <li className="navbar-item">
            <Link to={"/login"} className="acount">
              Sign In
            </Link>
          </li>
        </ul>
      </aside>

      {/* Middle part of the header */}
      <div className="images-search-wrapper">
        <figure className="image-container">
          <Link to="/">
            <img className="logo-image" src={""} alt="LisaConsult Logo" />
          </Link>
        </figure>

        <Search />

        <figure className="image-container">
          <img className="image" src={""} alt="Logo" />
        </figure>
      </div>

      {/* Buttom part of the header */}
      <Navbar />
    </header>
  );
};

export default Header;
