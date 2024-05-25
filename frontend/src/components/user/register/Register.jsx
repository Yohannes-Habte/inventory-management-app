import React, { useState } from "react";
import "./Register.scss";
import { Link, useNavigate } from "react-router-dom";
import ReactIcons from "../../reactIcons/ReactIcons";
import axios from "axios";
import { validEmail, validPassword } from "../../utils/validators/Validate";
import { toast } from "react-toastify";
import { API } from "../../utils/security/secreteKey";
import * as RegisterAction from "../../../redux/reducers/userReducer";
import { useDispatch, useSelector } from "react-redux";
import ButtonLoader from "../../utils/loader/ButtonLoader";
import GoogleRegisterLogin from "../googleReLo/GoogleRegisterLogin";

const Register = () => {
  // to navigate register page
  const navigate = useNavigate();

  // Gloabl state variables
  const { u_postLoading } = useSelector((state) => state.user);
  const dispatch = useDispatch();

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
    setShowPassword((prevState) => (prevState = !prevState));
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

      default:
        break;
    }
  };

  // Function to reset all the state variables
  const reset = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setConfirmEmail("");
    setPassword("");
    setConfirmPassword("");
    setAgree(false);
  };

  // Handle Submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check Email and password validity
    if (!validEmail(email) || !validEmail(confirmEmail)) {
      toast.error("Enter valid email!");
    } else if (!validPassword(password) || !validPassword(confirmPassword)) {
      toast.error("Enter valid password!");
    } else {
      try {
        dispatch(RegisterAction.userPostStart());
        const newUser = {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
          agree: agree,
        };
        const { data } = await axios.post(`${API}/auths/register`, newUser);

        dispatch(RegisterAction.userPostSuccess(data.user));
        toast.success(data.message);
        reset();
        navigate("/login");
      } catch (err) {
        dispatch(
          RegisterAction.userPostFailure(toast.error(err.response.data.message))
        );
      }
    }
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
            onChange={() => setAgree(!agree)}
            className="user-signup-consent-input"
          />
          <span className="user-signup-accept">I accept</span>
          <Link className={"terms-of-use"}> Terms of Use</Link>
        </div>

        {/* Register button */}
        <div className="register-btn-container">
          <button className="register-btn" disabled={u_postLoading}>
            {u_postLoading ? <ButtonLoader /> : "Sign Up"}
          </button>
        </div>

        {/* Google Button */}
        <GoogleRegisterLogin signUp={"signUp"} />

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
