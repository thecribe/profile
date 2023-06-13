import React from "react";
import { FiSettings } from "react-icons/fi";
import { ProfileStyled } from "../../components/Profile/Profile.styled";
import Profile from "../../components/Profile/Profile";

const Sidebar = () => {
  return (
    <>
      <div className="settings-icon">
        <FiSettings className="icon" />
      </div>
      <ProfileStyled>
        <Profile />
      </ProfileStyled>
    </>
  );
};

export default Sidebar;
