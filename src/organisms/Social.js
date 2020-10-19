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

  background-color: #333333;
  height: 28px;

  font-family: Montserrat;
  color: white;
`;

const Social = () => {
  return (
    <Flexbox>
      <p>Call us at: (888) 303-7332</p>
      <SvgFacebookIcon />
      <SvgLinkedinIcon />
      <SvgTwitterIcon />
    </Flexbox>
  );
};

export default Social;
