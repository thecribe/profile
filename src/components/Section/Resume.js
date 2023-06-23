import React from "react";
import {
  SectionContentStyled,
  SectionTitleStyled,
  Spacing,
} from "./Section.styled";
import { FaBox } from "react-icons/fa";
import ResumeList from "../Resume/ResumeList";
import { forwardRef } from "react";

const Resume = ({ props }, ref) => {
  return (
    <>
      <Spacing ref={ref} />
      <SectionTitleStyled>
        <h5>
          <FaBox className="icons" /> RESUME
        </h5>
      </SectionTitleStyled>
      <SectionContentStyled>
        <h2>
          Education &<span id="special-text"> Experience</span>
        </h2>
        <div className="resume">
          <ResumeList />
          <ResumeList />
        </div>
      </SectionContentStyled>
    </>
  );
};

export default forwardRef(Resume);
