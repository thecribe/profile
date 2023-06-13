import styled, { createGlobalStyle } from "styled-components";

const DefaultStyle = createGlobalStyle`
   *{
        margin: 0;
        padding:0;
        box-sizing: border-box;
   }

  
   body{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.15em;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.accent};
   }

   .links{
      text-decoration: none;
      color: ${({ theme }) => theme.accent};

   }

   .icon{
      margin-right:1rem;
      transition: all .5s ease-in-out;

      &:hover{
         color: ${({ theme }) => theme.secondary};
         cursor: pointer;
      }
   }

   @media (max-width: ${({ theme }) => theme.mobile}){
    html{
     font-size: 70%;
    }
   }
`;

export const ButtonStyled = styled.button`
  background-color: ${({ type, theme }) =>
    type === "transparent" ? "transparent" : theme.secondary};
  width: 100%;
  padding: 1rem 0rem;
  border: 1px solid
    ${({ type, theme }) =>
      type === "transparent" ? theme.secondary : "transparent"};
  border-radius: 5rem;
  transition: all 0.5s ease-in-out;
  margin: 1rem 0;

  .links {
    color: ${({ type, theme }) =>
      type === "transparent" ? theme.secondary : "#000000"};
    font-size: 1.2em;
    transition: all 0.5s ease-in-out;

    .icons {
      margin-right: 0.1rem;
    }
  }

  &:hover {
    background-color: ${({ type, theme }) =>
      type === "transparent" ? theme.secondary : "transparent"};
    border: 1px solid
      ${({ type, theme }) =>
        type === "transparent" ? "transparent" : theme.secondary};
    cursor: pointer;

    .links {
      color: ${({ type, theme }) =>
        type === "transparent" ? "#000000" : theme.secondary};
      font-size: 1.2em;
    }
  }
`;

// {
//     if (type === "btn-filled") {
//       return ({ theme }) => theme.secondary;
//     } else {
//       return ({ theme }) => theme.primary;
//     }
//   }};

export default DefaultStyle;
