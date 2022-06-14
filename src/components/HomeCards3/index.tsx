import React from "react";
import Carousel from "../Carousel";
import HomeCard3 from "../HomeCard3";
import { Wrapper } from "./styled";
const HomeCards3: React.FC = () => {
  return (
    <Wrapper>
      <Carousel>
        <HomeCard3 />
        <HomeCard3 />
        <HomeCard3 />
        <HomeCard3 />
        <HomeCard3 />
        <HomeCard3 />
      </Carousel>
    </Wrapper>
  );
};
export default HomeCards3;
