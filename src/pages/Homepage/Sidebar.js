import React from "react";
import { FiSettings } from "react-icons/fi";
import { ProfileStyled } from "../../components/Profile/Profile.styled";
import Profile from "../../components/Profile/Profile";
import { SettingsBarStyled } from "../../components/SettingsBar/SettingsBarStyled";
import { useState } from "react";
import SettingsBar from "../../components/SettingsBar/SettingsBar";
import { FaTimes } from "react-icons/fa";

const Sidebar = () => {
  const [settingSwitchWrap, setSettingSwitchWrap] = useState(false);
  const [settingSwitch, setSettingSwitch] = useState(false);

  const settingBarSwitch = () => {
    setSettingSwitch(false);
    console.log("clicked", settingSwitch);
  };

  return (
    <>
      {settingSwitchWrap && (
        <SettingsBarStyled buttonSwitch={settingSwitch}>
          <SettingsBar func={() => settingBarSwitch()} />
        </SettingsBarStyled>
      )}

      <div className="settings-icon">
        {settingSwitch ? (
          <FaTimes className="icon" onClick={() => settingBarSwitch()} />
        ) : (
          <FiSettings
            className="icon"
            onClick={() => {
              setSettingSwitchWrap(true);
              setSettingSwitch(true);
            }}
          />
        )}
      </div>
      <ProfileStyled>
        <Profile />
      </ProfileStyled>
    </>
  );
};

export default Sidebar;
