import React from "react";

import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

import StyledButton from "../atoms/buttons/StyledButton";

const Flexbox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: #e24301;
  box-shadow: 0px 2px 5px grey;
  height: 120px;
`;

const Wrapper = {
  padding: "20px",
};

const Text = styled.h4`
  font-family: Montserrat;
  font-size: 17px;
  font-weight: 175;
  color: white;
`;

const CTABanner = () => {
  return (
    <Flexbox>
      <div style={Wrapper}>
        <Text>
          We make the web a better place. View our work to find out how.
        </Text>
      </div>
      <div style={Wrapper}>
        <StyledButton
          padding={100}
          filled={false}
          text="Our Projects"
          url="#"
        />
      </div>
    </Flexbox>
  );
};

export default CTABanner;
