import styled from "styled-components";

export const CardContainer = styled.div`
  border: 3px solid black;
  border-radius: 30px;
  height: 400px;
  width: 90%;
  margin-bottom: 30px;
  background-color: ${({ theme }) => theme.theme};
  position: relative;

  span {
    margin-top: 13px;
  }
`;

export const Card = styled.div`
  border-radius: 0px 0px 30px 30px;
  height: 354px;
  margin-top: 40px;
  border-top: 3px solid black;
  padding: 20px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  background-color: ${({ theme }) => theme.secondaryBg};

  *{
    text-align: center;
  }
`;

export const BottomImg = styled.img`
  position: absolute;
  height: 50px;
  width: 50px;
  bottom: -10px;
  margin-left: 40%;
`;
