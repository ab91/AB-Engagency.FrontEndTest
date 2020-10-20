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

const Logo = styled.img({});

const FlexContainer = {
  display: "flex",
};

const Header = () => {
  return (
    <Flexbox>
      <a href="https://www.engagency.com">
        <Logo src="https://res.cloudinary.com/ab91/image/upload/v1603144357/Engagency%20Project/logo.png" />
      </a>
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
