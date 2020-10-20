import React from "react";

import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

import HeroText from "../molecules/HeroText";

const BackgroundDiv = styled.div`
  background-image: url("https://res.cloudinary.com/ab91/image/upload/v1603157318/Engagency%20Project/skyline_hero.jpg");
  background-size: cover;
  background-position: center;
  position: relative;
  background-repeat: no-repeat;

  height: 500px;
  width: 100%;
`;

const Hero = () => {
  return (
    <BackgroundDiv>
      <HeroText />
    </BackgroundDiv>
  );
};

export default Hero;
