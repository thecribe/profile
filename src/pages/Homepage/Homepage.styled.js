import styled from "styled-components";

export const HomepageStyled = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    gap: 1rem;
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
      animation: circling 4s linear infinite;
    }
  }

  @keyframes circling {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
      color: ${({ theme }) => theme.secondary};
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
`;
