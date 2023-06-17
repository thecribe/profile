import React from "react";
import { Container } from "../../default.styled";
import Introduction from "../../components/Section/Introduction";
import { SectionStyled } from "../../components/Section/Section.styled";
import About from "../../components/Section/About";
import Resume from "../../components/Section/Resume";
import Services from "../../components/Section/Services";
import Skills from "../../components/Section/Skills";
import Portfolio from "../../components/Section/Portfolio";
import Contact from "../../components/Section/Contact";

const ContentBar = ({ reference }) => {
  return (
    <>
      <div className="content-scroll">
        <Container>
          <SectionStyled>
            <Introduction ref={reference[0]} />
          </SectionStyled>
          <SectionStyled>
            <About ref={reference[1]} />
          </SectionStyled>
          <SectionStyled>
            <Resume ref={reference[2]} />
          </SectionStyled>
          <SectionStyled>
            <Services ref={reference[3]} />
          </SectionStyled>
          <SectionStyled>
            <Skills ref={reference[4]} />
          </SectionStyled>
          <SectionStyled>
            <Portfolio ref={reference[5]} />
          </SectionStyled>
          <SectionStyled>
            <Contact ref={reference[6]} />
          </SectionStyled>
        </Container>
      </div>
    </>
  );
};

export default ContentBar;
