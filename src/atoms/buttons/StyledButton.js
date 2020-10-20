import React from "react";

import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

//const Button = styled.button`
//border: 1px solid #FFFFFF;
//border-radius: 5px;
//background: white;

//color: #FFFFFF;
//font-size: 16px;
//cursor: pointer;
//`;

const Button = styled.a((props) => ({
  border: "1px solid #FFFFFF",
  borderRadius: "5px",
  backgroundColor: props.filled ? "#FFFFFF" : "transparent",
  color: props.filled ? "#333333" : "#FFFFFF",

  paddingTop: "12px",
  paddingBottom: "12px",
  paddingLeft: props.padding,
  paddingRight: props.padding,

  cursor: "pointer",
  textDecoration: "none",

  fontFamily: "Montserrat",
  fontSize: "16px",
  fontWeight: "350",
}));

const StyledButton = (props) => {
  return (
    <Button
      padding={props.padding}
      filled={props.filled}
      href={props.url}
      target="_blank"
    >
      {props.text}
    </Button>
  );
};

export default StyledButton;
