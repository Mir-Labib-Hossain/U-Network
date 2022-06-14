import styled from "styled-components";
import { LayeredImageContainer, LayerImage } from "../../styles/common.styled";
export const Wrapper = styled.div`
  position: relative;
`;

export const Container = styled.div`
  margin-top: 80vh;
  height: 500px;
  background-color: ${({ theme }) => theme.theme}; 

  i{
    color:black ;
  }
h1{
  margin-bottom: 10px;
}
  > *>*>* {
 
  }

`;

export const LayeredImageContainerFooter = styled(LayeredImageContainer)`
  position: absolute;
  bottom: 467px;
  width: 100%;

  @media screen and (max-width: 800px) {
    top: -516px;
  }

  @media screen and (max-width: 600px) {
    top: -544px;
  }
`;
export const LayerImageFooter = styled(LayerImage)`
  background-size: 800px;

  @media screen and (max-width: 800px) {
    background-size: 600px;
  }

  @media screen and (max-width: 600px) {
    background-size: 300px;
  }
`;

export const SocialIcon = styled.div<{ bg: string }>`
  background-image: url(${({ bg }) => bg});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 30px;
  width: 30px;
  margin: 5px;
`;

export const CopyRightBlock = styled.div`
  padding: 10px;
  background-color: black;
  color: white;
  text-align: center;
`;
