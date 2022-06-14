import React from "react";
import { Col2, Header2, Icon, Paragraph,Dot, Row, Span } from "../../styles/common.styled";
import { Avatar, Card, CardContainer, Icons } from "./styled";
const HomeCard2: React.FC = () => {
  return (
    <Row>
      <Col2>
        <CardContainer>
          <Dot ml="5%" />
          <Dot ml="10%" />
          <Dot ml="15%" />
          <Avatar bg="../../../images/avatar-pink.jpg" top="50%" left="-50px" />
          <Avatar bg="../../../images/avatar-green.jpg" top="5%" right="-60px" />
          <Avatar bg="../../../images/avatar-purple.jpg" top="90%" right="-50px" />
          <Card></Card>
        </CardContainer>
      </Col2>
      <Col2>
        <Row flexDirectionColumn alignItems="center" justifyContent="center">
          <Header2>Built for Creatives,</Header2>
          <Header2>by Creatives</Header2>
          <br />
          <br />
          <Paragraph>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</Paragraph>
          <br />
          <br />
          <Icons width="100%">
            <Row justifyContent="space-between">
              <Row alignItems="center">
                <Icon className="fa-solid fa-border-all" />
                <Span>All in One</Span>
              </Row>
              <Row alignItems="center">
                <Icon className="fa-solid fa-file-import" />
                <Span>Integrated File Sharing</Span>
              </Row>
              <Row alignItems="center">
                <Icon className="fa-solid fa-people-group" />
                <Span>Great community support</Span>
              </Row>
            </Row>
          </Icons>
        </Row>
      </Col2>
    </Row>
  );
};
export default HomeCard2;
