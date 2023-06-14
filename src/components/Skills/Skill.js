import React from "react";
import { SkillStyled } from "./SkillStyed";

const Skill = () => {
  return (
    <>
      <SkillStyled>
        <div className="img-box">
          <img src="./img/tech/physics.png" alt="" width="100%" height="100%" />
        </div>
        <h4>React</h4>
      </SkillStyled>
    </>
  );
};

export default Skill;
