import React from "react";
import { A, Col2, Col4, Header3, Icon, PaddedB0, PaddedX, Paragraph, Row } from "../../styles/common.styled";
import { Container, CopyRightBlock, LayeredImageContainerFooter, LayerImageFooter, SocialIcon, Wrapper } from "./styled";
const Footer: React.FC = () => {
  return (
    <Wrapper>
      <LayeredImageContainerFooter height="90vh">
        <LayerImageFooter bg="../../../images/footer/1.svg" />
        <LayerImageFooter bg="../../../images/footer/2.svg" />
        <LayerImageFooter bg="../../../images/footer/3.svg" />
        <LayerImageFooter bg="../../../images/footer/4.svg" />
      </LayeredImageContainerFooter>
      <Container>
        <PaddedB0>
          <Row>
            <A href="#">
              <SocialIcon bg="../../../images/facebook.png" />
            </A>
            <A href="#">
              <SocialIcon bg="../../../images/instagram.png" />
            </A>
            <A href="#">
              <SocialIcon bg="../../../images/reddit.png " />
            </A>
            <A href="#">
              <SocialIcon bg="../../../images/messenger.png" />
            </A>
            <A href="#">
              <SocialIcon bg="../../../images/gmail.png" />
            </A>
          </Row>
        </PaddedB0>
        <PaddedX>
          <Row justifyContent="space-evenly">
            <Col2>
              <Header3>U-Network</Header3>
              <Paragraph>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore quod laboriosam alias dicta necessitatibus exercitationem corrupti sint esse, iusto minus neque, delectus nobis cupiditate odio nisi tenetur temporibus rem.</Paragraph>
            </Col2>
            <Col4>
              <Header3>Contact</Header3>
              <Row justifyContent="start" alignItems="center">
                <Icon className="fa-solid fa-phone" />
                <Paragraph>+8801670820474</Paragraph>
              </Row>
              <Row justifyContent="start" alignItems="center">
                <Icon className="fa-solid fa-location-dot" />
                <Paragraph>Mirpur 12, Dhaka, Bangladesh</Paragraph>
              </Row>
            </Col4>
            <Col4>
              <Header3>Quick Links</Header3>
              <Row justifyContent="start" alignItems="center">
                <Paragraph>Terms & Conditions</Paragraph>
              </Row>
              <Row justifyContent="start" alignItems="center">
                <Paragraph>Terms & Conditions</Paragraph>
              </Row>
            </Col4>
          </Row>
        </PaddedX>
      </Container>
      <CopyRightBlock>© 2023 by WeDu. Proudly created with Wix.com</CopyRightBlock>
    </Wrapper>
  );
};
export default Footer;
