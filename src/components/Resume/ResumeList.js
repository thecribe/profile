import React from "react";
import { ResumeStyled } from "./ResumeStyled";

const ResumeList = () => {
  return (
    <>
      <ResumeStyled>
        <div className="single">
          <h4>2013-2019</h4>
          <div className="single-job">
            <h3>Framer Desinger & Developer</h3>
            <h5>Bruno agency</h5>
          </div>
          <div className="single-job">
            <h3>Framer Desinger & Developer</h3>
            <h5>Bruno agency</h5>
          </div>
          <div className="single-job">
            <h3>Framer Desinger & Developer</h3>
            <h5>Bruno agency</h5>
          </div>
        </div>
      </ResumeStyled>
    </>
  );
};

export default ResumeList;
