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

const Homepage = () => {
  return (
    <>
      <NavigationStyled>
        <Navigation />
      </NavigationStyled>
      <HomepageStyled>
        <SidebarStyled>
          <Sidebar />
        </SidebarStyled>
        <ContentBarStyled>
          <ContentBar />
        </ContentBarStyled>
      </HomepageStyled>
    </>
  );
};

export default Homepage;
