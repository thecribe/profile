import React from "react";
import {
  SectionContentStyled,
  SectionTitleStyled,
  Spacing,
} from "./Section.styled";
import { FaGripVertical } from "react-icons/fa";
import { forwardRef } from "react";

const Portfolio = ({}, ref) => {
  return (
    <>
      <Spacing ref={ref} />
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
          <div className="port port-1">
            <div className="inner-box">
              <img
                src="./img/pictures/1.png"
                alt=""
                width="100%"
                height="100%"
              />
              <div className="tags">
                <h6>Frammer</h6>
                <h6>Frammer</h6>
                <h6>Frammer</h6>
              </div>
            </div>
            <h3>Testing mic</h3>
          </div>
          <div className="port port-2">
            <div className="inner-box">
              <img
                src="./img/pictures/2.jpg"
                alt=""
                width="100%"
                height="100%"
              />
              <div className="tags">
                <h6>Frammer</h6>
                <h6>Frammer</h6>
                <h6>Frammer</h6>
              </div>
            </div>
            <h3>Testing mic</h3>
          </div>
          <div className="port port-3">
            <div className="inner-box">
              <img
                src="./img/pictures/3.webp"
                alt=""
                width="100%"
                height="100%"
              />
              <div className="tags">
                <h6>Frammer</h6>
                <h6>Frammer</h6>
                <h6>Frammer</h6>
              </div>
            </div>
            <h3>Testing mic</h3>
          </div>
          <div className="port port-4">
            <div className="inner-box">
              <img
                src="./img/pictures/4.png"
                alt=""
                width="100%"
                height="100%"
              />
              <div className="tags">
                <h6>Frammer</h6>
                <h6>Frammer</h6>
                <h6>Frammer</h6>
              </div>
            </div>
            <h3>Testing mic</h3>
          </div>
        </div>
      </SectionContentStyled>
    </>
  );
};

export default forwardRef(Portfolio);
