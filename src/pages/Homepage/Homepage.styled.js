import styled from "styled-components";
import { Circling } from "../../animationStyled";

export const HomepageStyled = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    gap: 1rem;
    height: auto;
  }
`;

export const SidebarStyled = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .settings-icon {
    margin: 0;
    position: absolute;
    top: 5%;
    left: 0;
    padding: 1rem;

    .icon {
      animation: ${({ theme }) => Circling(theme.secondary)} 4s linear infinite;
    }
  }
`;

export const ContentBarStyled = styled.div`
  flex: 3;
  overflow: hidden;

  .content-scroll {
    height: 100%;
    overflow-y: scroll;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    overflow: none;

    .content-scroll {
      height: fit-content;
      overflow-y: auto;
    }
  }
`;
