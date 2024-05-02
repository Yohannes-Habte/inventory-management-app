import React, { useState } from "react";
import "./AdminDashboardPage.scss";
import AdminHeader from "../../../components/admin/layout/header/AdminHeader";
import AdminDashboardContent from "../../../components/admin/adminDashboardContent/AdminDashboardContent";
import AdminSidebar from "../../../components/admin/layout/adminSidebar/AdminSidebar";

const AdminDashboardPage = () => {
  const [isActive, setIsActive] = useState(1);
  return (
    <main className="admin-dashboard-page">
      <AdminHeader isActive={isActive} setIsActive={setIsActive} />
      <article className="admin-dashboard-page-container">
        <h1 className="admin-dashboard-page-title"> Admin Dashboard</h1>
        <div className="admin-dashboard-sidebar-main-wrapper">
          <AdminSidebar isActive={isActive} setIsActive={setIsActive} />

          <AdminDashboardContent
            isActive={isActive}
            setIsActive={setIsActive}
          />
        </div>
      </article>
    </main>
  );
};

export default AdminDashboardPage;
