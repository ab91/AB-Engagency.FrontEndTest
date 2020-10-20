import React from "react";

import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

import StyledButton from "../atoms/buttons/StyledButton";

const Flexbox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  background-color: #e24301;
  box-shadow: 0px 2px 5px grey;
  height: 120px;

  font-family: Montserrat;
  color: white;
`;

const CTABanner = () => {
  return (
    <Flexbox>
      <h4 style={TextStyle}>
        We make the web a better place. View our work to find out how.
      </h4>
      <StyledButton padding={100} filled={false} text="Our Projects" url="#" />
    </Flexbox>
  );
};

export default CTABanner;
