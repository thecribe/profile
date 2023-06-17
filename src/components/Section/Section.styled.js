import styled from "styled-components";

export const SectionStyled = styled.div`
  /* padding: 2rem 0; */
  margin-bottom: 4rem;
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

export const Spacing = styled.div`
  height: 5vh;
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

  .skills {
    display: flex;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;
  }

  .portfolio {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    .port {
      padding: 1rem;

      h3 {
        color: ${({ theme }) => theme.primary};
        margin-top: 2rem;
        font-weight: 400;
        width: fit-content;
        transition: all 0.5s ease-in-out;
        padding-bottom: 0.1rem;
        border-bottom: 1px solid transparent;
      }
      &-1 {
        grid-column: 1 / span 3;
      }
      &-2 {
      }
      &-3 {
      }
      &-4 {
        grid-column: 1 / span 3;
      }

      .inner-box {
        height: 40vh;
        border-radius: 2rem;
        max-width: 100%;
        position: relative;

        img {
          border-radius: 2rem;
          object-fit: cover;
        }

        &::after {
          position: absolute;
          content: "";
          background-color: ${({ theme }) => theme.background};
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 2rem;
          opacity: 0.4;
          transition: all 0.5s ease-in-out;
        }

        .tags {
          position: absolute;
          bottom: 5%;
          left: 3%;
          display: flex;
          gap: 0.5rem;
          z-index: 3;

          h6 {
            background-color: ${({ theme }) => theme.primary};
            padding: 0.5rem 1rem;
            border-radius: 3rem;
            color: ${({ theme }) => theme.background};
            font-weight: 400;
            transition: all 0.5s ease-in-out;
          }
        }
      }

      &:hover {
        cursor: pointer;
        .inner-box {
          &::after {
            opacity: 0.6;
          }
          .tags {
            h6 {
              background-color: ${({ theme }) => theme.background};
              color: ${({ theme }) => theme.primary};
            }
          }
        }

        h3 {
          border-bottom: 1px solid ${({ theme }) => theme.primary};
        }
      }
    }
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

    .portfolio {
      display: block;
    }
  }
`;
