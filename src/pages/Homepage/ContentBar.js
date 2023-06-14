import React from "react";
import { Container } from "../../default.styled";
import Introduction from "../../components/Section/Introduction";
import { SectionStyled } from "../../components/Section/Section.styled";
import About from "../../components/Section/About";
import Resume from "../../components/Section/Resume";
import Services from "../../components/Section/Services";
import Skills from "../../components/Section/Skills";
import Portfolio from "../../components/Section/Portfolio";

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
          <SectionStyled>
            <Services />
          </SectionStyled>
          <SectionStyled>
            <Skills />
          </SectionStyled>
          <SectionStyled>
            <Portfolio />
          </SectionStyled>
        </Container>
      </div>
    </>
  );
};

export default ContentBar;
