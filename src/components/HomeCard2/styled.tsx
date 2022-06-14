import styled from "styled-components";
import { Div } from "../../styles/common.styled";

export const CardContainer = styled.div`
  border: 3px solid black;
  border-radius: 30px;
  height: 500px;
  margin: 50px;
  background-color: ${({ theme }) => theme.blue};
  position: relative;
`;
export const Card = styled.div`
  border-radius: 0px 0px 30px 30px;
  height: 444px;
  margin-top: 50px;
  border-top: 3px solid black;
  background-image: url("../../../images/card2.gif");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;



export const Avatar = styled.div<{ bg: string; top?: string; left?: string; right?: string; bottom?: string }>`
  border: 3px solid black;
  position: absolute;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background-image: url(${({ bg }) => bg});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
`;

export const Icons = styled(Div)`
  i {
    color: ${({ theme }) => theme.primaryText};
    font-size: 30px;
  }

  span {
    max-width: 100px;
  }
`;
