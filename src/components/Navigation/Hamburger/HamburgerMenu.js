import React from "react";
import { FaTimes } from "react-icons/fa";
import NavLinks from "../NavLinks/NavLinks";
import { HamburgerLinkStyled } from "./HamburgerStyled";

const HamburgerMenu = (props) => {
  return (
    <>
      <div className="container">
        <div className="backdrop" onClick={props.trigger}></div>
        <div className="content-box">
          <h3 onClick={props.trigger}>
            <FaTimes className="icons" />
          </h3>
          <HamburgerLinkStyled>
            <NavLinks
              reference={props.reference}
              func={props.func}
              click={props.trigger}
            />
          </HamburgerLinkStyled>
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;
