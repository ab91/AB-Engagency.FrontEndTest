import React from "react";

import { ThemeProvider } from "styled-components";
import ReactBreakpoints from "react-breakpoints";

import Social from "./organisms/Social";
import Header from "./organisms/Header";
import Hero from "./organisms/Hero";
import CTABanner from "./organisms/CTABanner";
import Content from "./organisms/Content";

const theme = {
  breakpoints: {
    mobile: 0,
    tablet: 768,
    desktop: 1025,
  },
};

const breakpoints = {
  mobile: 0,
  tablet: 768,
  desktop: 1025,
};

const App = () => {
  return (
    <ReactBreakpoints breakpoints={breakpoints}>
      <ThemeProvider theme={theme}>
        <header>
          <Social />
          <Navigation />
        </header>
        <Hero />
        <CTABanner />
        <Content />
      </ThemeProvider>
    </ReactBreakpoints>
  );
};

export default App;
