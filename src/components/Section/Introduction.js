import React from "react";
import { FaHome } from "react-icons/fa";
import {
  SectionContentStyled,
  SectionTitleStyled,
  Spacing,
} from "./Section.styled";
import { forwardRef } from "react";

const Introduction = ({ props }, ref) => {
  return (
    <>
      <Spacing ref={ref} />
      <SectionTitleStyled>
        <h5>
          <FaHome className="icons" /> INTRODUCE
        </h5>
      </SectionTitleStyled>
      <SectionContentStyled>
        <h1>
          Say Hi from <span id="special-text">Drake</span>, Webflow Designer and
          Developer
        </h1>
        <p>
          I design and code beautifully simple things and i love what i do.{" "}
          <br />
          Just simple like that!
        </p>
        <div className="spacing"></div>
        <div className="project-count">
          <div>
            <h2>10+</h2>
            <p>YEARS OF EXPERIENCE</p>
          </div>
          <div>
            <h2>181+</h2>
            <p>PROJECTS COMPLETED ON 15 COUNTRIES</p>
          </div>
        </div>
      </SectionContentStyled>
    </>
  );
};

export default forwardRef(Introduction);
