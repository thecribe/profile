import styled from "styled-components";

export const NavigationStyled = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 2rem;
  /* background-color: blue; */

  @media (max-width: ${({ theme }) => theme.mobile}) {
    position: relative;
    display: flex;
    justify-content: end;
  }
`;

export const NavLinkStyled = styled.nav`
  border: 1px solid ${({ theme }) => theme.accent};
  padding: 1rem;
  border-radius: 3rem;

  .hamburger {
    display: none;
    border: 1px solid transparent;
    padding: 0.5rem;
    transition: all 0.5s ease-in-out;
    .hamburger-line {
      width: 30px;
      height: 2px;
      background-color: ${({ theme }) => theme.primary};
      &:not(:last-child) {
        margin-bottom: 0.7rem;
      }
    }

    &:hover {
      transform: scale(1.05);
      cursor: pointer;
      border: 1px solid ${({ theme }) => theme.accent};
      padding: 0.5rem;
    }

    &:active {
      transform: scale(1);
      cursor: pointer;
      border: 1px solid ${({ theme }) => theme.accent};
      padding: 0.5rem;
    }
  }
  .icon {
    margin: 0;
    transition: all 0.5s ease-in-out;
  }
  li {
    list-style: none;
    position: relative;

    &:not(:last-child) {
      margin-bottom: 1rem;
    }

    &:hover {
      #link-name {
        font-size: 0.8em;
        background-color: ${({ theme }) => theme.accent};
        display: block;
        color: ${({ theme }) => theme.primary};
        padding: 0.2rem 0.4rem;
      }

      .icon {
        color: ${({ theme }) => theme.secondary};
      }
    }
  }

  #link-name {
    position: absolute;
    right: 175%;
    top: 0;
    display: none;
    transform: translateX(-1%);
    text-align: left;
    animation: fade-in 0.8s forwards;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    border: none;
    padding: 2rem;
    border-radius: none;
    ul {
      display: none;
    }

    .hamburger {
      display: block;
      color: white;
    }
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;
