import React from "react";

import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

import StyledButton from "../atoms/buttons/StyledButton";

const Flexbox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  background-color: #e24301;
  height: 120px;

  font-family: Montserrat;
  color: white;
`;

const CTABanner = () => {
  return (
    <Flexbox>
      We make the web a better place. View our work to find out how.
      <StyledButton text="Our Projects" />
    </Flexbox>
  );
};

export default CTABanner;
