import React from "react";

import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

const Flexbox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: Montserrat;
  text-align: center;
  line-height: 1.5;
`;

const Image = styled.img({
  height: "100px",
  width: "100px",
  //maxHeight: "100%",
  //maxWidth: "80%",
  //display: "block",
  //margin: "2% auto",
});

const Header = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: #e24301;
`;

const Description = styled.p`
  font-size: 15px;
  font-weight: 300;
  color: #333333;
  margin-top: 0;
`;

const Feature = (props) => {
  return (
    <Flexbox>
      <Image src={props.image} />
      <Header>{props.header}</Header>
      <Description>{props.description}</Description>
    </Flexbox>
  );
};

export default Feature;
