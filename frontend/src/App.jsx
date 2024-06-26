import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./views/homePage/HomePage";
import AboutPage from "./views/aboutPage/AboutPage";
import StorePage from "./views/storePage/StorePage";
import ContactPage from "./views/contactPage/ContactPage";
import RegisterPage from "./views/userPages/registerPage/RegisterPage";
import LoginPage from "./views/userPages/loginPage/LoginPage";
import ProfilePage from "./views/userPages/profilePage/ProfilePage";
import ProductsPage from "./views/productsPage/ProductsPage";
import AdminDashboardPage from "./views/adminPages/adminDashboardPage/AdminDashboardPage";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* User Pages */}
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/user/profile" element={<ProfilePage />} />

          {/* Admin Pages */}
          <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
        </Routes>

        {/* React toastify */}
        <ToastContainer
          position="top-right"
          limit={1}
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </Router>
    </div>
  );
};

export default App;
