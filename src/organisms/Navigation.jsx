import React from "react";

import styled from "styled-components";
import StyledLink from "../atoms/buttons/StyledLink";
import breakpoint from "styled-components-breakpoint";

import { Media } from "react-breakpoints";
import Burger from "react-css-burger";

const Flexbox = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: #e24301;
  height: 100px;

  ${breakpoint("mobile")`
  padding: 0px 20px;
    `}

  ${breakpoint("tablet")`
  padding: 0px 55px;
  `}
`;

const Logo = styled.img`
  ${breakpoint("mobile")`
    width: 85%;
    `}

  ${breakpoint("tablet")`
    width: 100%;
  `}
`;

const FlexContainer = {
  display: "flex",
};

const BurgerCSSReset = {
  margin: "0",
};

class Navigation extends React.Component {
  // State used for react hamburger active and inactive statuses
  state = {
    active: false,
  };

  render() {
    return (
      <Flexbox>
        <a href="https://www.engagency.com">
          <Logo src="https://res.cloudinary.com/ab91/image/upload/v1603144357/Engagency%20Project/logo.png" />
        </a>
        <Media>
          {({ breakpoints, currentBreakpoint }) =>
            breakpoints[currentBreakpoint] > breakpoints.tablet ? (
              <nav data-cy="navigation" style={FlexContainer}>
                <StyledLink href="#" text="HOME" />
                <StyledLink href="#" text="PROJECTS" />
                <StyledLink href="#" text="ABOUT US" />
                <StyledLink href="#" text="CONTACT" />
              </nav>
            ) : (
              <Burger
                onClick={() => this.setState({ active: !this.state.active })}
                active={this.state.active}
                burger="slider"
                color="#FFFFFF"
                scale={0.75}
                hoverOpacity={0.9}
                style={BurgerCSSReset}
              />
            )
          }
        </Media>
      </Flexbox>
    );
  }
}

export default Navigation;
