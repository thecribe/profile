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
        <div className="portfolio">
          <div className="port port-1"></div>
          <div className="port port-2"></div>
          <div className="port port-3"></div>
          <div className="port port-4"></div>
        </div>
      </SectionContentStyled>
    </>
  );
};

export default Portfolio;
