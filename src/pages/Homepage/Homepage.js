import React from "react";
import {
  ContentBarStyled,
  HomepageStyled,
  SidebarStyled,
} from "./Homepage.styled";
import Sidebar from "./Sidebar";
import ContentBar from "./ContentBar";
import { NavigationStyled } from "../../components/Navigation/Navigation.styled";
import Navigation from "../../components/Navigation/Navigation";
import { useRef } from "react";

const Homepage = () => {
  const introduceRef = useRef(null);
  const aboutRef = useRef(null);
  const resumeRef = useRef(null);
  const serviceRef = useRef(null);
  const skillRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  const arrayRef = [
    introduceRef,
    aboutRef,
    resumeRef,
    serviceRef,
    skillRef,
    portfolioRef,
    contactRef,
  ];

  return (
    <>
      <NavigationStyled>
        <Navigation reference={arrayRef} />
      </NavigationStyled>
      <HomepageStyled>
        <SidebarStyled>
          <Sidebar />
        </SidebarStyled>
        <ContentBarStyled>
          <ContentBar reference={arrayRef} />
        </ContentBarStyled>
      </HomepageStyled>
    </>
  );
};

export default Homepage;
