import React from "react";

import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

const Button = styled.button((props) => ({
  border: "1px solid #FFFFFF",
  borderRadius: "5px",

  // Conditional CSS properties based on React props
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

// Single button assists with reusability of a single component
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
