import React from "react";
import { ServiceStyled } from "./Services.styled";
import { FaBox } from "react-icons/fa";

const Service = () => {
  return (
    <ServiceStyled>
      <div className="service">
        <div className="title">
          <h3>Website Design</h3>
          <p>I created digital products with unique ideas use Figma & Framer</p>
        </div>
        <FaBox className="icons" />
      </div>
      <h5>24 PROJECTS</h5>
    </ServiceStyled>
  );
};

export default Service;
