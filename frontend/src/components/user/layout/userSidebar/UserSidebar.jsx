import React from "react";
import "./UserSidebar.scss";
import { Link, useNavigate } from "react-router-dom";
import ReactIcons from "../../../reactIcons/ReactIcons";
import * as Action from "../../../../redux/reducers/userReducer";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import axios from "axios";
import { API } from "../../../utils/security/secreteKey";

const UserSidebar = ({ isActive, setIsActive }) => {
  // to navigate register page
  const navigate = useNavigate();

  // Global state variables
  const { u_logoutLoading, currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // Global react icons
  const {
    userIcon,
    addressIcon,
    passwordIcon,
    orderIcon,
    adminIcon,
    dashboardIcon,
    accountIcon,
  } = ReactIcons();

  // Logout handler
  const handleLogout = async () => {
    try {
      dispatch(Action.userLogoutStart());
      const { data } = await axios.get(`${API}/auths/logout`, {
        withCredentials: true,
      });

      dispatch(Action.userLogoutSuccess());
      toast.success(data.message);
      window.location.reload(true);
      navigate("/login");
    } catch (error) {
      dispatch(
        Action.userLogoutFailure(toast.error(error.response.data.message))
      );
    }
  };

  // Delete User Account

  const handleDeleteAccount = async () => {
    try {
      dispatch(Action.userDeleteStart());
      const { data } = await axios.delete(
        `${API}/auths/delete/${currentUser._id}`,
        { withCredentials: true }
      );
      dispatch(Action.userDeleteSuccess());
      toast.success(data.message);
      window.location.reload(true);
      navigate("/register");
    } catch (error) {
      dispatch(
        Action.userDeleteFailure(toast.error(error.response.data.message))
      );
    }
  };

  return (
    <aside className="user-sidebar-container">
      <h4 className="user-sidebar-title"> {dashboardIcon} Dashboard</h4>
      <nav className="sidebar-items-wrapper">
        <ul className="sidebar-items">
          {/* Profile */}
          <li
            onClick={() => setIsActive(1)}
            className={
              isActive === 1 ? "active-sidebar-item" : "passive-sidebar-item"
            }
          >
            <span className="sidebar-icon">{userIcon}</span>
            Profile
          </li>

          {/* Address */}
          <li
            onClick={() => setIsActive(2)}
            className={
              isActive === 2 ? "active-sidebar-item" : "passive-sidebar-item"
            }
          >
            <span className="sidebar-icon">{addressIcon}</span>
            Address
          </li>

          {/* Change Password */}

          <li
            onClick={() => setIsActive(3)}
            className={
              isActive === 3 ? "active-sidebar-item" : "passive-sidebar-item"
            }
          >
            <span className="sidebar-icon">{passwordIcon}</span>
            Change Password
          </li>

          {/* Orders */}
          <li
            onClick={() => setIsActive(4)}
            className={
              isActive === 4 ? "active-sidebar-item" : "passive-sidebar-item"
            }
          >
            <span className="sidebar-icon">{orderIcon}</span>
            User Orders
          </li>

          {/* Track Order */}
          <li
            onClick={() => setIsActive(5)}
            className={
              isActive === 5 ? "active-sidebar-item" : "passive-sidebar-item"
            }
          >
            <span className="sidebar-icon">{orderIcon}</span>
            Track Order
          </li>

          {/* Admin */}
          <Link to={"/admin/dashboard"}>
            <li
              onClick={() => setIsActive(6)}
              className={
                isActive === 6 ? "active-sidebar-item" : "passive-sidebar-item"
              }
            >
              <span className="sidebar-icon">{adminIcon}</span>
              Admin
            </li>
          </Link>

          {/* Supplier */}
          <Link to={"/supplier/dashboard"}>
            <li
              onClick={() => setIsActive(7)}
              className={
                isActive === 7 ? "active-sidebar-item" : "passive-sidebar-item"
              }
            >
              <span className="sidebar-icon">{userIcon}</span>
              Supplier
            </li>
          </Link>

          {/* Logout */}
          <li
            onClick={handleLogout}
            className={
              isActive === 8 ? "active-sidebar-item" : "passive-sidebar-item"
            }
          >
            <span className="sidebar-icon">{orderIcon}</span>
            Log Out
          </li>

          {/* Delete Account */}
          <li
            onClick={handleDeleteAccount}
            className={
              isActive === 9 ? "active-sidebar-item" : "passive-sidebar-item"
            }
          >
            <span className="sidebar-icon">{accountIcon}</span>
            Delete Account
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default UserSidebar;
