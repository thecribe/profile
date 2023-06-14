import styled from "styled-components";

export const ProfileStyled = styled.div`
  border: 1px solid ${({ theme }) => theme.accent};
  padding: 2rem;
  border-radius: 2rem;
  width: 85%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 2rem;

  .profile_img {
    border: 1px solid ${({ theme }) => theme.accent};
    width: 80%;
    background-color: ${({ theme }) => theme.accent};
    border-radius: 2rem;

    img {
      visibility: hidden;
    }
  }
  p {
    font-size: 0.8rem;
  }

  .socials {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    width: 100%;

    .icons {
      border: 1px solid ${({ theme }) => theme.accent};
      border-radius: 50%;
      width: 50px;
      height: 50px;
      padding: 0.7rem;
      transition: all 0.4s ease-in-out;

      &:hover {
        border: 1px solid ${({ theme }) => theme.secondary};
        cursor: pointer;
        color: ${({ theme }) => theme.secondary};
      }
    }
  }

  .profile-text {
    h3 {
      margin-bottom: 0.5rem;
      font-weight: 400;
    }
  }

  .profile-header {
    width: 100%;
    display: flex;
    justify-content: space-between;

    img {
      width: 100px;
    }

    h4 {
      font-size: 0.9rem;
      text-align: right;
    }
  }
`;
