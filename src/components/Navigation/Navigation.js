import React from "react";
import { NavLinkStyled } from "./Navigation.styled";
import NavLinks from "./NavLinks/NavLinks";
import Hamburger from "./Hamburger";

const Navigation = ({ reference, func }) => {
  return (
    <NavLinkStyled>
      <Hamburger />
      <NavLinks reference={reference} func={func} />
    </NavLinkStyled>
  );
};

export default Navigation;
