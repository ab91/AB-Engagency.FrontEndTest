import React from "react";

import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

import StyledButton from "../atoms/buttons/StyledButton";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  justify-content: center;
  font-family: Montserrat;
  color: white;

  margin-left: 18%;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 40px;
  font-weight: 375;
  letter-spacing: 2px;
`;

const Message = styled.h2`
  margin: 16px 0px;
  font-size: 18px;
  font-weight: 350;
  line-height: 1.5;
`;

const ButtonFlexbox = {
  display: "flex",
  flexDirection: "row",
};

const HeroText = (props) => {
  return (
    <Wrapper>
      <Title>
        WELCOME TO <strong>ENGAGE</strong>NCY
      </Title>
      <Message>
        We are a web developement company based in Austin, TX specializing in
        the Sitecore
        <br />
        CMS platform. we work hard, we play hard, and we eat lunch together.
      </Message>
      <div style={ButtonFlexbox}>
        <StyledButton padding={45} filled={true} text="Learn More" />
        <StyledButton padding={50} text="Get in Touch" />
      </div>
    </Wrapper>
  );
};

export default HeroText;
