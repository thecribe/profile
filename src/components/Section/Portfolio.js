import React from "react";
import { SectionContentStyled, SectionTitleStyled } from "./Section.styled";
import { FaGripVertical } from "react-icons/fa";

const Portfolio = () => {
  return (
    <>
      <SectionTitleStyled>
        <h5>
          <FaGripVertical className="icons" /> PORTFOLIO
        </h5>
      </SectionTitleStyled>
      <SectionContentStyled>
        <h2>
          Featured <span id="special-text"> Projects</span>
        </h2>
      </SectionContentStyled>
    </>
  );
};

export default Portfolio;
