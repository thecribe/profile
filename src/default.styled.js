import { createGlobalStyle } from "styled-components";

const DefaultStyle = createGlobalStyle`
   *{
        margin: 0;
        padding:0;
        box-sizing: border-box;
   }

  
   body{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.15em;
   }

   @media (max-width: 768px){
    html{
     font-size: 70%;
    }
   }
`;

export default DefaultStyle;
