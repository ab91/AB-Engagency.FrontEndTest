import React from "react";

import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

const Link = styled.a`
  padding: 12px;
  cursor: pointer;
  text-decoration: none;

  color: #ffffff;
  font-family: Montserrat;
  font-weight: 550;
  letter-spacing: 1.1px;

  &:hover {
    text-decoration-line: underline;
    text-decoration-thickness: 3px;
    text-underline-offset: 10px;
  }
`;

const StyledLink = (props) => {
  return <Link href="#">{props.text}</Link>;
};

export default StyledLink;
