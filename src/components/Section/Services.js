import React from "react";
import { FaServicestack } from "react-icons/fa";
import { SectionContentStyled, SectionTitleStyled } from "./Section.styled";
import Service from "../Services/Service";

const Services = () => {
  return (
    <>
      <SectionTitleStyled>
        <h5>
          <FaServicestack className="icons" /> SERVICES
        </h5>
      </SectionTitleStyled>
      <SectionContentStyled>
        <h2>
          My <span id="special-text"> Specialization</span>
        </h2>
        <div className="service">
          <Service />
          <Service />
          <Service />
        </div>
      </SectionContentStyled>
    </>
  );
};

export default Services;
