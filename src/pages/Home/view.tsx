import React from "react";
import Footer from "../../components/Footer/indes";
import HomeCard1 from "../../components/HomeCard1";
import HomeCard2 from "../../components/HomeCard2";
import HomeCards3 from "../../components/HomeCards3";
import HomeCardSubscribe from "../../components/HomeCardSubscribe";
import { Block, Col2, Col4, Header1, Header2, Header3, Padded, PaddedB0, PaddedX, Paragraph, Row, Spanner } from "../../styles/common.styled";
import { Bg, UniversityIcon } from "./styled";
const View: React.FC = () => {
  return (
    <>
      <Padded>
        <Row wrap>
          <Col2>
            <Row alignItems="center" justifyContent="center">
              <Header1>
                Welcome to biggest University Network in the world <Spanner>!</Spanner>
              </Header1>
            </Row>
          </Col2>
          <Bg height="80vh" bg="../../../images/world.svg" />
        </Row>
      </Padded>
      <Block bg="theme">
        <Padded>
          <Row>
            <Col2>
              <Row alignItems="center" justifyContent="center">
                <Header2>With the Right Software, Great Things Can Happen.</Header2>
              </Row>
            </Col2>
            <Col2>
              <Paragraph>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</Paragraph>
            </Col2>
          </Row>
        </Padded>
      </Block>

      <PaddedB0>
        <Col2>
          <Header3>What We Offer</Header3>
          <Paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci officiis nihil neque quis nesciunt ut expedita natus nostrum doloremque quasi obcaecati sint officia fugiat quaerat saepe porro, eaque nobis voluptas?</Paragraph>
        </Col2>
      </PaddedB0>
      <PaddedX>
        <Row>
          <Col4>
            <HomeCard1 />
          </Col4>
          <Col4>
            <HomeCard1 />
          </Col4>
          <Col4>
            <HomeCard1 />
          </Col4>
          <Col4>
            <HomeCard1 />
          </Col4>
        </Row>
      </PaddedX>
      <PaddedX>
        <HomeCard2 />
      </PaddedX>
      <Block bg="pink">
        <PaddedB0>
          <Col2>
            <Header2>Trusted Among Top Universities</Header2>
            <br />
            <Paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci officiis nihil neque quis nesciunt ut expedita natus nostrum doloremque quasi obcaecati sint officia fugiat quaerat saepe porro, eaque nobis voluptas?</Paragraph>
          </Col2>
        </PaddedB0>
        <PaddedX>
          <Row wrap justifyContent="space-between">
            <UniversityIcon src="../../../images/uoda.png" />
            <UniversityIcon src="../../../images/nsu.png" />
            <UniversityIcon src="../../../images/diu.png" />
            <UniversityIcon src="../../../images/aiub.png" />
          </Row>
        </PaddedX>
      </Block>
      <PaddedB0>
        <Header2>What Our Client Say</Header2>
        <br />
        <br />
        <HomeCards3 />
      </PaddedB0>
      {/* <Block bg="secondary">
        <Padded>
          <Row>
            <Col2>
              <Row flexDirectionColumn justifyContent="center">
                <Header2>Explore Our Pricing Options</Header2>
                <br />
                <br />
                <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dolore dolor explicabo quasi, tempora numquam voluptatem, similique ab quos nostrum, ullam modi omnis aperiam consequuntur neque odio et laborum rerum!</Paragraph>
               </Row>
            </Col2>
            <Col2>
              <HomeCardSubscribe />
            </Col2>
          </Row>
        </Padded>
      </Block> */}
      <Footer></Footer>
    </>
  );
};
export default View;
