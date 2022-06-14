import styled from "styled-components";

export const Container = styled.div`
  > * {
    padding: 15px;
    margin: 10px 0;
    display: flex;
    color: ${({ theme }) => theme.primaryText};
    background-color: ${({ theme }) => theme.primaryBg};
    border-radius: 10px;
    :hover {
      * {
        color: ${({ theme }) => theme.primaryBg};
      }

      background-color: ${({ theme }) => theme.theme};
    }
  }

  @media screen and (max-width: 1000px) {
    display: grid;
    place-content: center;

    p {
      display: none;
    }
  }
`;
