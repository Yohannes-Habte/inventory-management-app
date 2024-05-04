import React, { useState } from "react";
import "./AdminSidebar.scss";
import { useNavigate } from "react-router-dom";
import ReactIcons from "../../../reactIcons/ReactIcons";

const AdminSidebar = ({ isActive, setIsActive }) => {
  // Navigate
  const navigate = useNavigate();

  // Global react icons
  const {
    orderIcon,
    dashboardIcon,
    categoryIcon,
    summaryIcon,
    productIcon,
    priceIcon,
    usersIcon,
    upArrowIcon,
    downArrowIcon,
    purchaseIcon,
    invoiceIcon,
    printIcon,
  } = ReactIcons();

  // Local variable
  const [clickCustomers, setClickCustomers] = useState(false);
  const [clickPurchases, setClickPurchases] = useState(false);
  const [clickInvoice, setClickInvoice] = useState(false);
  const [clickStock, setClickStock] = useState(false);

  return (
    <aside className="admin-sidebar-container">
      <h4 className="admin-sidebar-title"> {dashboardIcon} Dashboard</h4>
      <nav className="admin-sidebar-items-wrapper">
        {/* Summaries, Categories, Products and Suppliers */}
        <ul className="admin-sidebar-items">
          <li
            onClick={() => setIsActive(1)}
            className={
              isActive === 1 ? "active-sidebar-item" : "passive-sidebar-item"
            }
          >
            <span className="sidebar-icon">{summaryIcon}</span>
            Summary
          </li>

          <li
            onClick={() => setIsActive(2)}
            className={
              isActive === 2 ? "active-sidebar-item" : "passive-sidebar-item"
            }
          >
            <span className="sidebar-icon">{categoryIcon}</span>
            Categories
          </li>

          <li
            onClick={() => setIsActive(3)}
            className={
              isActive === 3 ? "active-sidebar-item" : "passive-sidebar-item"
            }
          >
            <span className="sidebar-icon">{productIcon}</span>
            Products
          </li>

          <li
            onClick={() => setIsActive(4)}
            className={
              isActive === 4 ? "active-sidebar-item" : "passive-sidebar-item"
            }
          >
            <span className="sidebar-icon">{orderIcon}</span>
            Suppliers
          </li>
        </ul>

        {/* Customers */}
        <aside
          onClick={() => setClickCustomers(!clickCustomers)}
          className="admin-sidebar-aside"
        >
          <h5 className="admin-sidebar-h4">
            <span className="icon"> {usersIcon} </span> Customers
          </h5>
          {clickCustomers ? (
            <span> {upArrowIcon} </span>
          ) : (
            <span> {downArrowIcon} </span>
          )}
        </aside>
        {clickCustomers && (
          <ul className="admin-dropdown-sidebar-items">
            <li
              onClick={() => setIsActive(5)}
              className={
                isActive === 5 ? "active-sidebar-item" : "passive-sidebar-item"
              }
            >
              <span className="sidebar-icon">{usersIcon}</span>
              All Customers
            </li>

            <li
              onClick={() => setIsActive(6)}
              className={
                isActive === 6 ? "active-sidebar-item" : "passive-sidebar-item"
              }
            >
              <span className="sidebar-icon">{usersIcon}</span>
              Paid Customers
            </li>

            <li
              onClick={() => setIsActive(7)}
              className={
                isActive === 7 ? "active-sidebar-item" : "passive-sidebar-item"
              }
            >
              <span className="sidebar-icon">{usersIcon}</span>
              Credit Customers
            </li>

            <li
              onClick={() => setIsActive(8)}
              className={
                isActive === 8 ? "active-sidebar-item" : "passive-sidebar-item"
              }
            >
              <span className="sidebar-icon">{usersIcon}</span>
              Customers Report
            </li>
          </ul>
        )}

        {/* Purchases */}
        <aside
          onClick={() => setClickPurchases(!clickPurchases)}
          className="admin-sidebar-aside"
        >
          <h5 className="admin-sidebar-h4">
            <span className="icon"> {purchaseIcon} </span>Purchases
          </h5>
          {clickPurchases ? (
            <span> {upArrowIcon} </span>
          ) : (
            <span> {downArrowIcon} </span>
          )}
        </aside>
        {clickPurchases && (
          <ul className="admin-dropdown-sidebar-items">
            <li
              onClick={() => setIsActive(9)}
              className={
                isActive === 9 ? "active-sidebar-item" : "passive-sidebar-item"
              }
            >
              <span className="sidebar-icon">{purchaseIcon}</span>
              All Purchases
            </li>

            <li
              onClick={() => setIsActive(10)}
              className={
                isActive === 10 ? "active-sidebar-item" : "passive-sidebar-item"
              }
            >
              <span className="sidebar-icon">{purchaseIcon}</span>
              Purchase Approval
            </li>

            <li
              onClick={() => setIsActive(11)}
              className={
                isActive === 11 ? "active-sidebar-item" : "passive-sidebar-item"
              }
            >
              <span className="sidebar-icon">{purchaseIcon}</span>
              Purchase Report
            </li>
          </ul>
        )}

        {/* Invoice */}

        <aside
          onClick={() => setClickInvoice(!clickInvoice)}
          className="admin-sidebar-aside"
        >
          <h5 className="admin-sidebar-h4">
            <span className="icon"> {invoiceIcon} </span> Invoice
          </h5>
          {clickInvoice ? (
            <span> {upArrowIcon} </span>
          ) : (
            <span> {downArrowIcon} </span>
          )}
        </aside>
        {clickInvoice && (
          <ul className="admin-dropdown-sidebar-items">
            <li
              onClick={() => setIsActive(12)}
              className={
                isActive === 12 ? "active-sidebar-item" : "passive-sidebar-item"
              }
            >
              <span className="sidebar-icon">{invoiceIcon}</span>
              All Invoice
            </li>

            <li
              onClick={() => setIsActive(13)}
              className={
                isActive === 13 ? "active-sidebar-item" : "passive-sidebar-item"
              }
            >
              <span className="sidebar-icon">{invoiceIcon}</span>
              Invoice Approval
            </li>

            <li
              onClick={() => setIsActive(14)}
              className={
                isActive === 14 ? "active-sidebar-item" : "passive-sidebar-item"
              }
            >
              <span className="sidebar-icon">{printIcon}</span>
              Invoice Report
            </li>

            <li
              onClick={() => setIsActive(15)}
              className={
                isActive === 15 ? "active-sidebar-item" : "passive-sidebar-item"
              }
            >
              <span className="sidebar-icon">{invoiceIcon}</span>
              Print Invoice List
            </li>
          </ul>
        )}

        {/* Stock */}
        <aside
          onClick={() => setClickStock(!clickStock)}
          className="admin-sidebar-aside"
        >
          <h5 className="admin-sidebar-h4">
            <span className="icon"> {invoiceIcon} </span> Stock
          </h5>
          {clickStock ? (
            <span> {upArrowIcon} </span>
          ) : (
            <span> {downArrowIcon} </span>
          )}
        </aside>
        {clickStock && (
          <ul className="admin-dropdown-sidebar-items">
            <li
              onClick={() => setIsActive(16)}
              className={
                isActive === 16 ? "active-sidebar-item" : "passive-sidebar-item"
              }
            >
              <span className="sidebar-icon">{summaryIcon}</span>
              Stock Report
            </li>

            <li
              onClick={() => setIsActive(17)}
              className={
                isActive === 17 ? "active-sidebar-item" : "passive-sidebar-item"
              }
            >
              <span className="sidebar-icon">{productIcon}</span>
              Suppplier Product
            </li>
          </ul>
        )}

        {/* Support and Logout */}
        <ul className="admin-sidebar-items">
        <li
            onClick={() => setIsActive(18)}
            className={
              isActive === 18 ? "active-sidebar-item" : "passive-sidebar-item"
            }
          >
            <span className="sidebar-icon">{categoryIcon}</span>
            Units
          </li>
          <li
            onClick={() => setIsActive(19)}
            className={
              isActive === 19 ? "active-sidebar-item" : "passive-sidebar-item"
            }
          >
            <span className="sidebar-icon">{categoryIcon}</span>
            Support
          </li>

          <li
            onClick={() => setIsActive(20)}
            className={
              isActive === 20 ? "active-sidebar-item" : "passive-sidebar-item"
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

export default AdminSidebar;
