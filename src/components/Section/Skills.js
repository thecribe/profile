import React from "react";
import {
  SectionContentStyled,
  SectionTitleStyled,
  Spacing,
} from "./Section.styled";
import { GiSkills } from "react-icons/gi";
import Skill from "../Skills/Skill";
import { forwardRef } from "react";

const Skills = ({}, ref) => {
  return (
    <>
      <Spacing ref={ref} />
      <SectionTitleStyled>
        <h5>
          <GiSkills className="icons" /> SKILLS
        </h5>
      </SectionTitleStyled>
      <SectionContentStyled>
        <h2>
          My <span id="special-text"> Advantages</span>
        </h2>
        <div className="skills">
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
        </div>
      </SectionContentStyled>
    </>
  );
};

export default forwardRef(Skills);
