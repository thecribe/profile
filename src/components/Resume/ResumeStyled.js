import styled from "styled-components";

export const ResumeStyled = styled.div`
  position: relative;
  margin: 4rem 0;

  .single {
    padding-left: 5rem;
    line-height: 2rem;

    h3 {
      font-weight: 300;
      color: ${({ theme }) => theme.primary};
    }
    h4 {
      font-weight: 400;
      transition: all 0.5s ease-in-out;
      margin-bottom: 2rem;
    }

    h5 {
      font-weight: 400;
    }
  }

  &::after {
    content: "";
    position: absolute;
    width: 15px;
    height: 15px;
    top: 2%;
    left: 0;
    background-color: ${({ theme }) => theme.accent};
    border-radius: 9999px;
    transform: translate(-50%, 20%);
    transition: all 0.5s ease-in-out;
  }
  &:hover {
    h4 {
      color: ${({ theme }) => theme.secondary};
    }

    &::after {
      background-color: ${({ theme }) => theme.secondary};
    }
  }
`;
