import styled from "styled-components";
import { Circling, flyInSide } from "../../../animationStyled";

export const HamburgerStyled = styled.div`
  /* display: ${({ theme }) => (theme.hamburger ? "block" : "none")}; */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 4;

  .container {
    height: 100vh;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    /* align-items: center; */

    .backdrop {
      background-color: ${({ theme }) => theme.background};
      opacity: 0.9;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }

    .content-box {
      position: absolute;
      margin-top: 5rem;
      animation: ${flyInSide(70, 0)} 0.8s ease-in-out;

      h3 {
        text-align: center;
        width: 100%;
        position: relative;

        &::after {
          position: absolute;
          content: "";
          top: 50%;
          left: 100%;
          right: 0;
          width: 100%;
          height: 2px;
          background-color: ${({ theme }) => theme.accent};
          transform: translate(0%, -100%);
        }
        &::before {
          position: absolute;
          content: "";
          top: 50%;
          left: 0%;
          right: 100%;
          width: 100%;
          height: 2px;
          background-color: ${({ theme }) => theme.accent};
          transform: translate(-100%, -100%);
        }
      }
      .icons {
        font-size: 5rem;

        &:hover {
          animation: ${Circling("white")} 0.9s ease-in-out;
          cursor: pointer;
        }
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.mobile}) {
    .container {
      display: none;
    }
  }
`;

export const HamburgerLinkStyled = styled.div`
  margin: 3rem 0;
  ul {
    /* transform: translate(-25%, 0%); */
    li {
      list-style: none;
      margin-bottom: 2rem;
      padding: 2rem 3rem;
      transition: all 0.5s ease-in-out;

      /* background-color: red; */

      .links {
        font-size: 1.5rem;
        transition: all 1s ease-in-out;
      }

      &:hover {
        .links {
          color: ${({ theme }) => theme.secondary};
        }
      }
    }
  }
`;
