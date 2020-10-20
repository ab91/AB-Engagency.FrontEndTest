import React from "react";

import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

import StyledButton from "../atoms/buttons/StyledButton";

const Flexbox = styled.section`
  display: flex;
  align-items: center;

  background-color: #e24301;
  box-shadow: 0px 2px 5px grey;

  ${breakpoint("mobile")`
  flex-direction: column;
  justify-content: center;
  height: 240px;
    `}

  ${breakpoint("tablet")`
  flex-direction: row;
  height: 175px;
    `}

  ${breakpoint("desktop")`
  flex-direction: row;
  height: 120px;
  justify-content: center;
    `}
`;

const Wrapper = styled.div`
  ${breakpoint("mobile")`
  padding: 10px;
  margin: 5px;
    `}

  ${breakpoint("tablet")`
  margin: 10px;
    `}

  ${breakpoint("desktop")`
  padding: 20px;
    `}
`;

const Text = styled.h4`
  font-family: Montserrat;
  font-size: 17px;
  font-weight: 175;
  color: white;
  line-height: 1.7;

  ${breakpoint("mobile")`
  text-align: center;
  font-size: 20px;
  font-weight: 200;
  margin: 0;
    `}

  ${breakpoint("tablet")`
  text-align: left;
    `}

  ${breakpoint("desktop")`
  text-align: left;
  font-size: 17px;
  font-weight: 175;
    `}
`;

// Displaying and hiding of break based on breakpoint
const Break = styled.br`
  ${breakpoint("mobile")`
  display: static;
    `}

  ${breakpoint("desktop")`
  display: none;
    `}
`;

const CTABanner = () => {
  return (
    <Flexbox>
      <Wrapper>
        <Text>
          We make the web a better place.
          <Break /> View our work to find out how.
        </Text>
      </Wrapper>
      <Wrapper>
        <StyledButton
          padding={100}
          filled={false}
          text="Our Projects"
          url="#"
        />
      </Wrapper>
    </Flexbox>
  );
};

export default CTABanner;
