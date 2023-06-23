import React from "react";

const Hamburger = (props) => {
  return (
    <div
      className="hamburger"
      onClick={props.trigger}
      style={{ visibility: props.hamburger ? "hidden" : "visible" }}
    >
      <div className="hamburger-line"></div>
      <div className="hamburger-line"></div>
      <div className="hamburger-line"></div>
    </div>
  );
};

export default Hamburger;
