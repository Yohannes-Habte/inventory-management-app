import React from "react";
import "./UserSidebar.scss";
import { Link, useNavigate } from "react-router-dom";
import ReactIcons from "../../../reactIcons/ReactIcons";

const UserSidebar = ({ isActive, setIsActive }) => {
  // Navigate
  const navigate = useNavigate();

  // Global react icons
  const {
    userIcon,
    addressIcon,
    passwordIcon,
    orderIcon,
    adminIcon,
    dashboardIcon,
  } = ReactIcons();
  return (
    <aside className="user-sidebar-container">
      <h4 className="user-sidebar-title"> {dashboardIcon} Dashboard</h4>
      <nav className="sidebar-items-wrapper">
        <ul className="sidebar-items">
          <li
            onClick={() => setIsActive(1)}
            className={
              isActive === 1 ? "active-sidebar-item" : "passive-sidebar-item"
            }
          >
            <span className="sidebar-icon">{userIcon}</span>
            User Profile
          </li>

          <li
            onClick={() => setIsActive(2)}
            className={
              isActive === 2 ? "active-sidebar-item" : "passive-sidebar-item"
            }
          >
            <span className="sidebar-icon">{addressIcon}</span>
            User Address
          </li>

          <li
            onClick={() => setIsActive(3)}
            className={
              isActive === 3 ? "active-sidebar-item" : "passive-sidebar-item"
            }
          >
            <span className="sidebar-icon">{passwordIcon}</span>
            Change Password
          </li>

          <li
            onClick={() => setIsActive(4)}
            className={
              isActive === 4 ? "active-sidebar-item" : "passive-sidebar-item"
            }
          >
            <span className="sidebar-icon">{orderIcon}</span>
            User Orders
          </li>

          <li
            onClick={() => setIsActive(5)}
            className={
              isActive === 5 ? "active-sidebar-item" : "passive-sidebar-item"
            }
          >
            <span className="sidebar-icon">{orderIcon}</span>
            Track Order
          </li>

          <Link to={"/admin/dashboar"}>
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

          <Link to={"/supplier/dashboar"}>
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

          <li
            onClick={() => setIsActive(8)}
            className={
              isActive === 8 ? "active-sidebar-item" : "passive-sidebar-item"
            }
          >
            <span className="sidebar-icon">{orderIcon}</span>
            Log Out
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default UserSidebar;
