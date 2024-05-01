import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Search from "../../../search/Search";
import textLogo from "../../../../assets/textLog.png";
import clothes from "../../../../assets/modern.png";
import women from "../../../../assets/women.png";
import men from "../../../../assets/men.png";

const Header = () => {
  return (
    <header className="header">
      {/* Top part of the header */}
      <aside className="logo-register-login-wrapper">
        <figure className="logo-container">
          <Link to="/">
            <img className="logo-image" src={textLogo} alt="LisaConsult Logo" />
          </Link>
        </figure>

        {/* Search bar */}
        <Search />

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

      {/* Middle part of the header, which is advertisement */}
      <div className="advertisement-fashion-wrapper">
        <figure className="image-container">
          <Link to={"/"}>
            <img className="image" src={clothes} alt="Logo" />
          </Link>
        </figure>

        <figure className="image-container">
          <Link to={"/"}>
            <img className="image" src={women} alt="Logo" />
          </Link>
        </figure>
        <figure className="image-container">
          <Link to={"/"}>
            <img className="image" src={men} alt="Logo" />
          </Link>
        </figure>
      </div>

      {/* Buttom part of the header, which is navbar */}
      <Navbar />
    </header>
  );
};

export default Header;
