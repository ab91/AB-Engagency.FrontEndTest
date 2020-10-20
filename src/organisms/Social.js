import React from "react";

import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

import SvgFacebookIcon from "../atoms/icons/facebook";
import SvgLinkedinIcon from "../atoms/icons/linkedin";
import SvgTwitterIcon from "../atoms/icons/twitter";

const Flexbox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 55px;

  background-color: #333333;
  height: 50px;

  font-family: Montserrat;
  font-weight: 300;
  letter-spacing: 1.1px;
  color: white;
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
      <p>Call us at: (888) 303-7332</p>
      <div style={FlexContainer}>
        <div style={SVGButtonStyle}>
          <SvgFacebookIcon />
        </div>
        <div style={SVGButtonStyle}>
          <SvgLinkedinIcon />
        </div>
        <div style={SVGButtonStyle}>
          <SvgTwitterIcon />
        </div>
      </div>
    </Flexbox>
  );
};

export default Social;
