import React from "react";

import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

import StyledButton from "../atoms/buttons/StyledButton";

const Wrapper = styled.div`
  font-family: Montserrat;
  color: black;
`;

const Title = styled.h1``;

const Message = styled.h2``;

const HeroText = (props) => {
  return (
    <Wrapper>
      <Title>Welcome to ENGAGEncy</Title>
      <Message>
        We are a web developement company based in Austin, TX specializing in
        the Sitecore
        <br />
        CMS platform. we work hard, we play hard, and we eat lunch together.
      </Message>
      <StyledButton text="Learn More" />
      <StyledButton text="Get in Touch" />
    </Wrapper>
  );
};

export default HeroText;
