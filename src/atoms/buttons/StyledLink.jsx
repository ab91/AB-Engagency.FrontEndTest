import React from "react";

import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

const Link = styled.a`
  margin: 12px;
  cursor: pointer;
  text-decoration: none;

  color: #ffffff;
  font-family: Montserrat;
  font-weight: 550;
  letter-spacing: 1.1px;

  &:hover {
    border-bottom-width: 3px;
    border-color: white;
    border-bottom-style: solid;
    margin-bottom: 1px;
  }
`;

// Single link assists with reusability of a single component
const StyledLink = (props) => {
  return <Link href="#">{props.text}</Link>;
};

export default StyledLink;
