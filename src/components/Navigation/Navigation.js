import React from "react";
import { NavLinkStyled } from "./Navigation.styled";
import NavLinks from "./NavLinks/NavLinks";
import Hamburger from "./Hamburger";

const Navigation = () => {
  return (
    <NavLinkStyled>
      <Hamburger />
      <NavLinks />
    </NavLinkStyled>
  );
};

export default Navigation;
