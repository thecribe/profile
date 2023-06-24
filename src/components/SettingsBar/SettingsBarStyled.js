import styled from "styled-components";
import { flyInSide } from "../../animationStyled";

export const SettingsBarStyled = styled.div`
  position: fixed;
  left: 0%;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 4;
  /* opacity: 0; */
  animation: ${(props) =>
      flyInSide(props.buttonSwitch ? -100 : 40, props.buttonSwitch ? 0 : -100)}
    1s forwards;

  .container {
    position: relative;
    height: 100%;
    width: 100%;

    .backdrop {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      height: 100%;
      background-color: ${({ theme }) => theme.accent};
      opacity: 0.5;
      /* z-index: -1; */
    }

    .contentBox {
      position: absolute;
      height: 100%;
      width: 40%;
      background-color: ${({ theme }) => theme.background};
      padding-top: 10rem;

      .inner-box {
        max-width: 90%;
        margin: 0 auto;
        color: ${({ theme }) => theme.primary};
        font-weight: lighter;
        letter-spacing: 1.5px;

        h2 {
          font-weight: 400;
          margin-left: 4rem;
          color: ${({ theme }) => theme.primary};
          letter-spacing: 0.1rem;
          text-align: center;
        }

        .config {
          margin: 4rem 0;
          padding: 2rem;
          display: flex;
          gap: 2rem;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid ${({ theme }) => theme.accent};
          border-bottom: 1px solid ${({ theme }) => theme.accent};
        }

        .others {
          p {
            margin: 2rem 0;
          }
        }
      }
    }
  }
`;

export const ThemeSwitchStyled = styled.button`
  border: none;
  padding: 0.5rem 2rem;
  transition: all 0.5s ease-in-out;
  font-size: 1rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.background};

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.secondary};
  }
`;

export const ColorStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;

  .inner {
    border-radius: 9999px;
    padding: 0.2rem;
    border: 1px solid transparent;
    transition: all 0.3s ease-in-out;

    &:hover {
      cursor: pointer;
      border: 1px solid ${({ theme }) => theme.primary};
    }
  }

  .circle {
    width: 50px;
    height: 50px;
    border-radius: 9999px;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      font-size: 2rem;
    }
  }

  .default {
    border: 1px solid ${({ theme }) => theme.primary};
  }

  .colorDef {
    background-color: ${({ theme }) => theme.secondary};
  }

  .color1 {
    background-color: blue;
  }
  .color2 {
    background-color: green;
  }
  .color3 {
    background-color: red;
  }
  .color4 {
    background-color: purple;
  }
  .color5 {
    background-color: grey;
  }
  .color6 {
    background-color: yellow;
  }
`;

export const ColorBoxStyled = styled.div`
  margin-top: 3rem;
  display: flex;
  gap: 3rem;
  p {
    margin: 1rem 0;
    font-size: 0.9rem;
    font-weight: 400;
  }

  .current {
    flex: 1;

    #color {
      text-align: center;
      width: 40%;
      padding: 1rem 0rem;
      background-color: ${({ selectedColor }) => selectedColor};
    }
  }
  .custom {
    flex: 1;

    input {
      padding: 1rem;
      font-size: 1rem;
    }

    .btn-color {
      border-radius: 0.2rem;
      margin-top: 1rem;
    }
  }
`;
