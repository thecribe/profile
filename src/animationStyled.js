import { keyframes } from "styled-components";

export const Circling = (color) => keyframes`
 from {
      transform: rotate(0deg);
    }
    to{
      transform: rotate(360deg);
      color: ${color};
    }
`;
export const fadeInUp = (from, to) => keyframes`
from{
    opacity: 0;
    transform: translateY(${from}%);
}

to{
    opacity: 1;
    transform: translateY(${to}%);
}
`;

export const flyInSide = (from, to) => keyframes`
from{
    opacity: 0;
    transform: translateX(${from}%);
}

to{
    opacity: 1;
    transform: translateX(${to}%);
}

`;
