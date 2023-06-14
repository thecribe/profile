import styled from "styled-components";

export const SkillStyled = styled.div`
  border: 1px solid ${({ theme }) => theme.accent};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 3rem;
  transition: all 0.5s ease-in-out;

  border-radius: 60px;

  margin-bottom: 2rem;

  .img-box {
    width: 50px;
  }
  h4 {
    font-weight: 400;
    margin-top: 2rem;

    transition: all 0.5s ease-in-out;
  }

  &:hover {
    border: 1px solid ${({ theme }) => theme.secondary};

    h4 {
      color: ${({ theme }) => theme.secondary};
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    padding: 0rem;

    border: none;
  }
`;
