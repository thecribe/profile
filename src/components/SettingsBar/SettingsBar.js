import React from "react";
import {
  ColorBoxStyled,
  ColorStyled,
  ThemeSwitchStyled,
} from "./SettingsBarStyled";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";

const SettingsBar = ({ func }) => {
  const colors = [
    {
      id: "colorDef",
      color: "#28e98c",
    },
    {
      id: "color1",
      color: "blue",
    },
    {
      id: "color2",
      color: "green",
    },
    {
      id: "color3",
      color: "red",
    },
    {
      id: "color4",
      color: "purple",
    },
    {
      id: "color5",
      color: "grey",
    },
    {
      id: "color6",
      color: "yellow",
    },
  ];

  const { mode, themeSwitchHandler, accentHandler } = useOutletContext();
  const [selectedColor, setColor] = useState(colors[0].color);

  const themeHandler = () => {
    themeSwitchHandler(mode);
  };

  const colorHandler = () => {
    accentHandler(selectedColor, mode);
  };
  return (
    <>
      <div className="container">
        <div className="backdrop" onClick={func}></div>
        <div className="contentBox">
          <div className="inner-box">
            <h2>Site Configuration</h2>
            <div className="config">
              <p>Switch to {mode ? "light" : "dark"} theme:</p>
              <ThemeSwitchStyled onClick={themeHandler}>
                {mode ? "Light" : "Dark"}
              </ThemeSwitchStyled>
            </div>
            <div className="others">
              <p>Accent:</p>
              <ColorStyled>
                {colors.map((col) => (
                  <div
                    key={col.id}
                    className={[
                      "inner",
                      selectedColor === col.color && "default",
                    ].join(" ")}
                    onClick={() => setColor(col.color)}
                  >
                    <div className={["circle", col.id].join(" ")}>
                      <p>+</p>
                    </div>
                  </div>
                ))}
              </ColorStyled>
            </div>

            <ColorBoxStyled selectedColor={selectedColor}>
              <div className="current">
                <p>Current Color: {selectedColor}</p>
                <p id="color"></p>
              </div>
              <div className="custom">
                <p>
                  Please enter your prefeered color in HEX format. e.g #FF00FF
                </p>

                <input
                  type="text"
                  onChange={(e) => setColor(e.target.value)}
                  maxLength={7}
                  minLength={4}
                  value={selectedColor.toUpperCase()}
                />

                <ThemeSwitchStyled className="btn-color" onClick={colorHandler}>
                  Change Color
                </ThemeSwitchStyled>
              </div>
            </ColorBoxStyled>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsBar;
