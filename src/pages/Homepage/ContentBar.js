import React from "react";
import { Container } from "../../default.styled";
import Introduction from "../../components/Section/Introduction";
import { SectionStyled } from "../../components/Section/Section.styled";
import About from "../../components/Section/About";
import Resume from "../../components/Section/Resume";

const ContentBar = () => {
  return (
    <>
      <div className="content-scroll">
        <Container>
          <SectionStyled>
            <Introduction />
          </SectionStyled>
          <SectionStyled>
            <About />
          </SectionStyled>
          <SectionStyled>
            <Resume />
          </SectionStyled>
        </Container>
      </div>
    </>
  );
};

export default ContentBar;
