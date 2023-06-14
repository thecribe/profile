import React from "react";
import { SectionContentStyled, SectionTitleStyled } from "./Section.styled";
import { GiSkills } from "react-icons/gi";

const Skills = () => {
  return (
    <>
      <SectionTitleStyled>
        <h5>
          <GiSkills className="icons" /> SKILLS
        </h5>
      </SectionTitleStyled>
      <SectionContentStyled>
        <h2>
          My <span id="special-text"> Advantages</span>
        </h2>
        <div className="service"></div>
      </SectionContentStyled>
    </>
  );
};

export default Skills;
