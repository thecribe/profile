import React from "react";
import { NavLinkStyled } from "./Navigation.styled";
import NavLinks from "./NavLinks/NavLinks";

const Navigation = () => {
  return (
    <NavLinkStyled>
      <NavLinks />
    </NavLinkStyled>
  );
};

export default Navigation;
