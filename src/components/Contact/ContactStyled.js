import styled from "styled-components";

export const ContactStyled = styled.div`
  p {
    width: 100%;
    margin-bottom: 2rem;
  }

  a {
    color: ${({ theme }) => theme.secondary};
  }
`;
