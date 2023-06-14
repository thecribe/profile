import styled from "styled-components";

export const SectionStyled = styled.div`
  /* padding: 2rem 0; */
  margin-bottom: 7rem;
`;

export const SectionTitleStyled = styled.div`
  border: 1px solid ${({ theme }) => theme.accent};
  width: fit-content;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  margin-bottom: 2rem;
  h5 {
    font-size: 0.9rem;
    font-weight: 400;
    color: ${({ theme }) => theme.primary};
    .icons {
      margin-right: 0.5rem;
    }
  }
`;

export const SectionContentStyled = styled.div`
  h1 {
    font-size: 5rem;
    font-weight: 100;
    line-height: 1.2;
    color: ${({ theme }) => theme.primary};
    margin: 3rem 0rem;
  }

  #special-text {
    color: ${({ theme }) => theme.secondary};
  }

  p {
    color: ${({ theme }) => theme.accent};
    line-height: 2;
    width: 70%;
    text-align: justify;
  }

  .spacing {
    height: 10vh;
  }

  .project-count {
    display: flex;
    width: 80%;
    justify-content: space-between;
    margin: 3rem 0rem;

    p {
      line-height: 1.3rem;
      margin: 2rem 0rem;
      text-align: left;
    }

    h2 {
      color: ${({ theme }) => theme.secondary};
      font-size: 4rem;
      font-weight: 400;
    }
  }

  h2 {
    font-size: 3rem;
    font-weight: 100;
    line-height: 1.2;
    color: ${({ theme }) => theme.primary};
    margin: 3rem 0rem;
    width: 80%;
  }

  .resume {
    border-left: 1px solid ${({ theme }) => theme.accent};
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    .project-count {
      display: block;
      width: fit-content;
    }

    p,
    h2 {
      width: 100%;
    }
  }
`;
