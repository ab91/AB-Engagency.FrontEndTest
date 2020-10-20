import React from "react";

import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

// SVGs converted into React components and imported
import SvgFacebookIcon from "../atoms/icons/facebook";
import SvgLinkedinIcon from "../atoms/icons/linkedin";
import SvgTwitterIcon from "../atoms/icons/twitter";

const Flexbox = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: #333333;
  height: 50px;

  font-family: Montserrat;
  font-weight: 300;
  letter-spacing: 1.1px;
  color: white;

  ${breakpoint("mobile")`
  padding: 0px 20px;
    `}

  ${breakpoint("tablet")`
  padding: 0px 55px;
  `}
`;

const Number = styled.h3`
  ${breakpoint("mobile")`
  font-size: 14px;
  font-weight: normal;
  `}

  ${breakpoint("tablet")`
  font-size: 17px;
    `}
`;

const FlexContainer = {
  display: "flex",
};

const SVGButtonStyle = {
  padding: "0px 5px",
};

const Social = () => {
  return (
    <Flexbox>
      <Number>Call us at: (888) 303-7332</Number>
      <nav style={FlexContainer}>
        <div style={SVGButtonStyle}>
          <a href="#">
            <SvgFacebookIcon />
          </a>
        </div>
        <div style={SVGButtonStyle}>
          <a href="#">
            <SvgLinkedinIcon />
          </a>
        </div>
        <div style={SVGButtonStyle}>
          <a href="#">
            <SvgTwitterIcon />
          </a>
        </div>
      </nav>
    </Flexbox>
  );
};

export default Social;
