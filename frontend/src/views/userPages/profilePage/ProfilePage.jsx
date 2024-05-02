import React, { useState } from "react";
import "./ProfilePage.scss"
import UpdadeProfile from "../../../components/user/profile/UpdadeProfile";
import UserSidebar from "../../../components/user/layout/userSidebar/UserSidebar";

const ProfilePage = () => {
  const [isActive, setIsActive] = useState(1);
  return (
    <main className="user-profile-page">
      <article className="user-profile-page-container">
        <h1 className="user-profile-page-title"> Profile Page </h1>
        <div className="user-profile-sidebar-and-main-wrapper">
          <UserSidebar isActive={isActive} setIsActive={setIsActive} />
          <UpdadeProfile isActive={isActive} />
        </div>
      </article>
    </main>
  );
};

export default ProfilePage;
