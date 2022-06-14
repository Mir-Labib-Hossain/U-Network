import React from "react";
import { Header3, Image, Paragraph } from "../../styles/common.styled";
import { Container } from "./styled";
const HomeCard1: React.FC = () => {
  return (
    <Container>
      <Image src="https://i.pinimg.com/originals/33/d4/85/33d485f05f43dfb475e23ad75e95de12.jpg" />
      <Header3>Workflows That Work</Header3>
      <Paragraph>Workflows That Work I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</Paragraph>
    </Container>
  );
};
export default HomeCard1;
