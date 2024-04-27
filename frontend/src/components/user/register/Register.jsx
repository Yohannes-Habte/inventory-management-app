import React, { useState } from "react";
import "./Register.scss";
import { Link, useNavigate } from "react-router-dom";
import ReactIcons from "../../reactIcons/ReactIcons";
import axios from "axios";

const Register = () => {
  // to navigate register page
  const navigate = useNavigate();

  // Global icons
  const {
    userIcon,
    passwordIcon,
    emailIcon,
    visiblePasswordIcon,
    invisiblePasswordIcon,
  } = ReactIcons();

  // Local state variables
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Function to show/hide password
  const displayPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  // Function that is used to update the state variables of the registration form
  const updateChange = (event) => {
    switch (event.target.name) {
      case "firstName":
        setFirstName(event.target.value);
        break;
      case "lastName":
        setLastName(event.target.value);
        break;
      case "email":
        setEmail(event.target.value);
        break;
      case "confirmEmail":
        setConfirmEmail(event.target.value);
        break;
      case "password":
        setPassword(event.target.value);
        break;

      case "confirmPassword":
        setConfirmPassword(event.target.value);
        break;
      case "showPassword":
        setShowPassword(false);
        break;
      default:
        break;
    }
  };

  // Function to reset all the state variables
  const reset = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setAgree(false);
  };

  // Handle Submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check validation

    try {
      const newUser = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      };
      const { data } = await axios.post(`/auth/register`, newUser);

      navigate("/login");
    } catch (err) {}
  };
  return (
    <section className="signup-container">
      <h1 className="signup-title"> Create Account for Free</h1>

      <form action="" onSubmit={handleSubmit} className="signup-form">
        <div className="inputs-wrapper">
          {/* First Name */}
          <div className="input-container">
            <span className="input-icon"> {userIcon} </span>
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={updateChange}
              placeholder="First Name"
              className="input-field"
            />

            <label htmlFor="" className="input-label">
              First Name
            </label>
            <span className="input-highlight"></span>
          </div>

          {/* Last Name */}
          <div className="input-container">
            <span className="input-icon"> {userIcon} </span>
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={updateChange}
              placeholder="Last Name"
              className="input-field"
            />

            <label htmlFor="" className="input-label">
              Last Name
            </label>
            <span className="input-highlight"></span>
          </div>

          {/* Email address */}
          <div className="input-container">
            <span className="input-icon"> {emailIcon} </span>
            <input
              type="email"
              name="email"
              value={email}
              onChange={updateChange}
              placeholder="Email"
              className="input-field"
            />
            <label htmlFor="" className="input-label">
              Email Address
            </label>
            <span className="input-highlight"></span>
          </div>

          {/* Confirm Email address */}
          <div className="input-container">
            <span className="input-icon"> {emailIcon} </span>
            <input
              type="email"
              name="confirmEmail"
              id="confirmEmail"
              value={confirmEmail}
              onChange={updateChange}
              placeholder="Confirm Email"
              className="input-field"
            />
            <label htmlFor="confirmEmail" className="input-label">
              Confirm Email
            </label>
            <span className="input-highlight"></span>
          </div>

          {/* Password */}
          <div className="input-container">
            <span className="input-icon"> {passwordIcon} </span>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              onChange={updateChange}
              placeholder="Password"
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

          {/* Confirm Password */}
          <div className="input-container">
            <span className="input-icon"> {passwordIcon} </span>
            <input
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              id="confirmPassword"
              value={confirmPassword}
              onChange={updateChange}
              placeholder="Confirm Password"
              className="input-field"
            />
            <label htmlFor="confirmPassword" className="input-label">
              Confirm Password
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
        </div>

        {/* Consent container */}
        <div className="consent-container">
          <input
            type="checkbox"
            name="agree"
            onChange={updateChange}
            className="user-signup-consent-input"
          />
          <span className="user-signup-accept">I accept</span>
          <Link className={"terms-of-use"}> Terms of Use</Link>
        </div>

        {/* Register button */}
        <div className="register-btn-container">
          <button className="register-btn"> Register </button>
        </div>

        {/* Already have an account */}
        <p className="have-account">
          Already have an account?
          <Link to="/login" className={"link-to-login"}>
            Log In
          </Link>
        </p>
      </form>
    </section>
  );
};

export default Register;
