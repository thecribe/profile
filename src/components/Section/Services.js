import React from "react";
import { FaServicestack } from "react-icons/fa";
import { SectionContentStyled, SectionTitleStyled } from "./Section.styled";

const Services = () => {
  return (
    <>
      <SectionTitleStyled>
        <h5>
          <FaServicestack className="icons" /> SERVICES
        </h5>
      </SectionTitleStyled>
      <SectionContentStyled></SectionContentStyled>
    </>
  );
};

export default Services;
