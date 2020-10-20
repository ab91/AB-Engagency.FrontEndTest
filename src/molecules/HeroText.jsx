import React from "react";

import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

import StyledButton from "../atoms/buttons/StyledButton";

const ParentFlex = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;

  justify-content: center;
  font-family: Montserrat;
  color: white;

  ${breakpoint("mobile")`
  margin: 0 10%;
    `}

  ${breakpoint("desktop")`
  margin-left: 18%;
    `}
`;

const Title = styled.h1`
  margin: 0;
  font-size: 40px;
  font-weight: 375;
  letter-spacing: 2px;

  ${breakpoint("mobile")`
  text-align: center;
    `}

  ${breakpoint("desktop")`
  text-align: left;
    `}
`;

const Message = styled.h2`
  margin: 16px 0px;
  font-size: 18px;
  line-height: 1.5;

  ${breakpoint("mobile")`
  font-weight: 400;
  text-align: center;
    `}

  ${breakpoint("tablet")`
  text-align: left;
  font-weight: 350;
    `}
`;

// align-items property needed due to flex 
// item behavior of expanding to width of container
const ChildFlex = styled.section`
  display: flex;
  margin: 5px 0px;
  align-items: flex-start;
  gap: 20px;

  ${breakpoint("mobile")`
  flex-direction: column;
  align-items: center;
  `}

  ${breakpoint("tablet")`
  flex-direction: row;
  `};
`;

// Displaying and hiding of break based on breakpoint
const Break = styled.br`
  ${breakpoint("mobile")`
  display: none;
    `}

  ${breakpoint("tablet")`
  display: static;
    `}
`;

const HeroText = (props) => {
  return (
    <ParentFlex>
      <Title>
        WELCOME TO <Break />
        <strong>ENGAGE</strong>NCY
      </Title>
      <Message>
        We are a web development company based in Austin, TX specializing in the
        Sitecore <Break />
        CMS platform. We work hard, we play hard, and we eat lunch together.
      </Message>
      <ChildFlex>
        <StyledButton padding={45} filled={true} text="Learn More" />
        <StyledButton padding={45} text="Get in Touch" />
      </ChildFlex>
    </ParentFlex>
  );
};

export default HeroText;
