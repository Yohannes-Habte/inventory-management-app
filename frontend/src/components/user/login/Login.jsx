import React, { useState } from "react";
import "./Login.scss";
import ReactIcons from "../../reactIcons/ReactIcons";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  // Navigate to
  const navigate = useNavigate();

  const {
    emailIcon,
    passwordIcon,
    visiblePasswordIcon,
    invisiblePasswordIcon,
  } = ReactIcons();

  // State variables
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Function to show/hide password
  const displayPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  // Function to update login user data
  const updateData = (event) => {
    switch (event.target.name) {
      case "email":
        setEmail(event.target.value);
        break;
      case "password":
        setPassword(event.target.value);
        break;
      case "showPassword":
        setShowPassword(false);
        break;
      default:
        break;
    }
  };

  // Reset all state variables for the login form
  const reset = () => {
    setEmail("");
    setPassword("");
  };

  // Login and Submit Function
  const submitUserLogin = async (event) => {
    event.preventDefault();

    // Check validation

    try {
      // The body
      const loginUser = {
        email: email,
        password: password,
      };
      const { data } = await axios.post(`/auth/login`, loginUser);

      reset();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <section className="login-container">
      <h1 className="login-title"> Welcome To Your Account </h1>

      <form onSubmit={submitUserLogin} className="login-form">
        <div className="input-container">
          <span className="input-icon"> {emailIcon} </span>
          <input
            type="email"
            name="email"
            value={email}
            onChange={updateData}
            placeholder="Enter Email"
            className="input-field"
          />
          <label htmlFor="" className="input-label">
            Email Address
          </label>
          <span className="input-highlight"></span>
        </div>

        <div className="input-container">
          <span className="input-icon"> {passwordIcon} </span>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={password}
            onChange={updateData}
            placeholder="Enter Password"
            className="input-field"
          />
          <label htmlFor="" className="input-label">
            Password
          </label>
          <span className="input-highlight"></span>
          <span onClick={displayPassword} className="password-display">
            {showPassword ? (
              <span className="icon"> {visiblePasswordIcon} </span>
            ) : (
              <span className="icon"> {invisiblePasswordIcon} </span>
            )}
          </span>
        </div>

        <div className="keep-me-signin-forgot-password-wrapper">
          <div className="checkbox-and-keep-me-signin">
            <input type="checkbox" name="login" className="checkbox-field" />
            <span className="keep-me-login">Keep me signed in</span>
          </div>

          <Link to={"/forgot-password"} className="forgot-link">
            Forget your password?
          </Link>
        </div>

        <button className="user-login-btn"> Log In</button>
        <p className="have-no-account">
          Don't have an account?{" "}
          <Link to="/register" className={"link-to"}>
            Sign Up
          </Link>
        </p>
      </form>
    </section>
  );
};

export default Login;
