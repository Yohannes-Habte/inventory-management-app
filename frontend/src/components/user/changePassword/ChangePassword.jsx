import axios from "axios";
import "./ChangePassword.scss";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactIcons from "../../reactIcons/ReactIcons";

const ChangePassword = () => {
  const navigate = useNavigate();

  // Global react icons
  const { passwordIcon, visiblePasswordIcon, invisiblePasswordIcon } =
    ReactIcons();

  // Local state variables
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Update input data
  const updateChange = (e) => {
    switch (e.target.name) {
      case "oldPassword":
        setOldPassword(e.target.value);
        break;
      case "newPassword":
        setNewPassword(e.target.value);
        break;
      case "confirmNewPassword":
        setConfirmNewPassword(e.target.value);
        break;
      default:
        break;
    }
  };

  // Function to show/hide password
  const displayPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  // Reset all state variables
  const resetVariables = () => {
    setOldPassword("");
    setNewPassword("");
    setConfirmNewPassword("");
  };

  // Handle change password
  const passwordChangeHandler = async (e) => {
    e.preventDefault();

    try {
      const changeUserpassword = {
        oldPassword: oldPassword,
        newPassword: newPassword,
        confirmNewPassword: confirmNewPassword,
      };
      const { data } = await axios.put(
        `auth/change-password}`,
        changeUserpassword
      );

      resetVariables();
      navigate("/login");
    } catch (error) {}
  };

  return (
    <section className="change-password-container">
      <h2 className="change-password-title">Change Password</h2>

      <form
        onSubmit={passwordChangeHandler}
        action=""
        className="change-password-form"
      >
        <div className="input-container">
          <span className="input-icon"> {passwordIcon} </span>
          <input
            type={showPassword ? "text" : "password"}
            name="oldPassword"
            id="oldPassword"
            autoComplete="current-password"
            required
            value={oldPassword}
            onChange={updateChange}
            placeholder="Enter Old Password"
            className="input-field"
          />
          <label htmlFor="oldPassword" className="input-label">
            Old Password
          </label>
          <span className="input-highlight"></span>
        </div>

        <div className="input-container">
          <span className="input-icon"> {passwordIcon} </span>
          <input
            type={showPassword ? "text" : "password"}
            name="newPassword"
            id="newPassword"
            autoComplete="current-password"
            value={newPassword}
            onChange={updateChange}
            placeholder="Enter New Password"
            className="input-field"
          />
          <label htmlFor="password" className="input-label">
            New Password
          </label>
          <span className="input-highlight"></span>
        </div>

        <div className="input-container">
          <span className="input-icon"> {passwordIcon} </span>
          <input
            type={showPassword ? "text" : "password"}
            name="confirmNewPassword"
            id="confirmNewPassword"
            autoComplete="current-password"
            value={confirmNewPassword}
            onChange={updateChange}
            placeholder="Confirm New Password"
            className="input-field"
          />
          <label htmlFor="confirmNewPassword" className="input-label">
            Confirm New Password
          </label>
          <span className="input-highlight"></span>
        </div>

        <button className="change-password-btn"> Change Password</button>
      </form>
    </section>
  );
};

export default ChangePassword;
