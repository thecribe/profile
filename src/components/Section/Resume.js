import React from "react";
import { SectionContentStyled, SectionTitleStyled } from "./Section.styled";
import { FaBox } from "react-icons/fa";

const Resume = () => {
  return (
    <>
      <SectionTitleStyled>
        <h5>
          <FaBox className="icons" /> RESUME
        </h5>
      </SectionTitleStyled>
      <SectionContentStyled>
        <h2>
          Education &<span id="special-text"> Experience</span>
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
      ;
    </>
  );
};

export default Resume;
