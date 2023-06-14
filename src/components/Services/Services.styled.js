import styled from "styled-components";

export const ServiceStyled = styled.div`
  border: 1px solid ${({ theme }) => theme.accent};
  padding: 3rem;
  transition: all 0.5s ease-in-out;
  border-radius: 2rem;
  margin-bottom: 2rem;

  .service {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title {
      flex: 4;
      h3 {
        color: ${({ theme }) => theme.primary};
        font-weight: 400;
      }

      p {
        font-size: 1rem;
        font-weight: 400;
        margin-top: 0.6rem;
      }
    }

    .icons {
      color: ${({ theme }) => theme.secondary};
    }
  }

  h5 {
    margin-top: 2rem;
    color: ${({ theme }) => theme.primary};
    width: fit-content;
    font-weight: 400;
    font-size: 0.8rem;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
  &:hover {
    border: 1px solid ${({ theme }) => theme.secondary};
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    .icons {
      display: none;
    }
  }
`;
