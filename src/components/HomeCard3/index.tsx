import React from "react";
import { Dot, Header3, Paragraph } from "../../styles/common.styled";
import { BottomImg, Card, CardContainer } from "./styled";
const HomeCard3: React.FC = () => {
  return (
    <CardContainer>
      <Dot ml="20px" />
      <Dot ml="40px" />
      <Dot ml="60px" />
      <Card >
          
          <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, natus similique deleniti tenetur 
          </Paragraph>
          <Header3>
- Mir Labib Hossain
          </Header3>
      </Card>
      <BottomImg src="../../../images/review.png" />
    </CardContainer>
  );
};
export default HomeCard3;
