import React from "react";

import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

import StyledLink from "../atoms/buttons/StyledLink";

const Flexbox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 55px;

  background-color: #e24301;
  height: 100px;
`;

const Logo = styled.img({
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

const FlexContainer = {
  display: "flex",
};

const Header = () => {
  return (
    <Flexbox id="social">
      <Logo src="https://res.cloudinary.com/ab91/image/upload/v1603144357/Engagency%20Project/logo.png" />
      <div style={FlexContainer}>
        <StyledLink href="#" text="HOME" />
        <StyledLink href="#" text="PROJECTS" />
        <StyledLink href="#" text="ABOUT US" />
        <StyledLink href="#" text="CONTACT" />
      </div>
    </Flexbox>
  );
};

export default Header;
