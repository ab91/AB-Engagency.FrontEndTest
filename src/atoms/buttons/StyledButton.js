import React from "react";

import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

const Button = styled.button`
  background-color: white;
  height: 35px;
  width: 120px;
`;

const StyledButton = (props) => {
  return <Button>{props.text}</Button>;
};

export default StyledButton;
