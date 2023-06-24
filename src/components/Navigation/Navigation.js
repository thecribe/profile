import React, { useState } from "react";

import NavLinks from "./NavLinks/NavLinks";
import Hamburger from "./Hamburger";
import HamburgerMenu from "./Hamburger/HamburgerMenu";
import { HamburgerStyled } from "./Hamburger/HamburgerStyled";
import { NavLinkStyled } from "./Navigation.styled";

const Navigation = ({ reference, func }) => {
  const [hamburger, setHarmburger] = useState(false);

  return (
    <>
      {hamburger && (
        <HamburgerStyled>
          <HamburgerMenu
            reference={reference}
            func={func}
            trigger={() => setHarmburger(false)}
          />
        </HamburgerStyled>
      )}
      <NavLinkStyled>
        <Hamburger hamburger={hamburger} trigger={() => setHarmburger(true)} />
        <NavLinks
          reference={reference}
          func={func}
          click={() => setHarmburger(false)}
        />
      </NavLinkStyled>
    </>
  );
};

export default Navigation;
