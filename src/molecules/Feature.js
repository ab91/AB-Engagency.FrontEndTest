import React from "react";

import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

const Image = styled.img({
  height: "100px",
  width: "100px",
  //maxHeight: "100%",
  //maxWidth: "80%",
  //display: "block",
  //margin: "2% auto",
});

const Header = styled.p``;

const Description = styled.p``;

const Feature = (props) => {
  return (
    <>
      <Image src={props.image} />
      <Header>{props.header}</Header>
      <Description>{props.description}</Description>
    </>
  );
};

export default Feature;
