import React from "react";

import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

const Flexbox = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #e24301;
  align-items: center;
  height: 100px;

  ${breakpoint("tablet")`
height: 75px;
  `}

  ${breakpoint("mobile")`
  height: 10px;
  `}
`;

const Logo = styled.img({
  maxHeight: "100%",
  maxWidth: "80%",
  display: "block",
  margin: "2% auto",
});

const Blurb = styled.h1`
  font-family: baskerville;
  font-weight: 550;
  color: #0080d5;
  flex: 1;
  margin: auto 0;

  ${breakpoint("mobile")`
    font-size: 1.3em;
    text-align: center;
    padding-bottom: 20px;
    `}

  ${breakpoint("tablet")`
    font-size: 1.5em;
    `}
`;

const Social = () => {
  return (
    <Flexbox id="social">
      <Logo src="https://res.cloudinary.com/ab91/image/upload/v1603144357/Engagency%20Project/logo.png" />
      <a href="#">Home</a>
      <a href="#">Projects</a>
      <a href="#">About Us</a>
      <a href="#">Contact</a>
    </Flexbox>
  );
};

export default Social;
