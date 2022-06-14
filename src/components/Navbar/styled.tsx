import styled from "styled-components";

export const NavContainer = styled.div`
  background-color: ${({ theme }) => theme.primaryBg};
  padding: 10px;
  position: fixed;
z-index: 99;
  width: 100vw;
`;

export const NavIcon = styled.div`
  background-image: url("../../../images/logo.png");
  background-size: contain;
  background-repeat: no-repeat;
  height: 65px;
  width: 60px;
  @media screen and (max-width: 1000px) {
    /* background-image: url("../../../images/tvl-icon.png"); */
  }
`;
