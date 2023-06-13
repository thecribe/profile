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

   @media (max-width: 768px){
    html{
     font-size: 70%;
    }
   }
`;

export const ButtonStyled = styled.button`
  background-color: ${({ type, theme }) =>
    type === "transparent" ? theme.primary : theme.secondary};
`;

// {
//     if (type === "btn-filled") {
//       return ({ theme }) => theme.secondary;
//     } else {
//       return ({ theme }) => theme.primary;
//     }
//   }};

export default DefaultStyle;
