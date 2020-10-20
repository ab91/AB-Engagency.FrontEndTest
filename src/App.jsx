import React from "react";

import { ThemeProvider } from "styled-components";
import ReactBreakpoints from "react-breakpoints";

import Social from "./organisms/Social";
import Navigation from "./organisms/Navigation";
import Hero from "./organisms/Hero";
import CTABanner from "./organisms/CTABanner";
import Content from "./organisms/Content";

// Breakpoints for styled-components, CSS-in-JS library used
const theme = {
  breakpoints: {
    mobile: 0,
    tablet: 768,
    desktop: 1025,
  },
};

// Breakpoints for react-breakpoints, conditional rendering package
const breakpoints = {
  mobile: 0,
  tablet: 768,
  desktop: 1025,
};

// Full app, with wrappers to pass the above properties
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
