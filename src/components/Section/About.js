import React from "react";
import { FaUser } from "react-icons/fa";
import {
  SectionContentStyled,
  SectionTitleStyled,
  Spacing,
} from "./Section.styled";
import { forwardRef } from "react";

const About = ({}, ref) => {
  return (
    <>
      <Spacing ref={ref} />
      <SectionTitleStyled>
        <h5>
          <FaUser className="icons" /> ABOUT
        </h5>
      </SectionTitleStyled>
      <SectionContentStyled>
        <h2>
          Every great design begin with an even{" "}
          <span id="special-text">better story</span>
        </h2>
        <p>
          Since beginning my journey as a freelance designer nearly 8 years ago,
          I've done remote work for agencies, consulted for startups, and
          collaborated with talented people to create digital products for both
          business and consumer use. I'm quietly confident, naturally curious,
          and perpetually working on improving my chopsone design problem at a
          time.
        </p>
      </SectionContentStyled>
    </>
  );
};

export default forwardRef(About);
