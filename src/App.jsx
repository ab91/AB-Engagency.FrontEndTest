import React from "react";

import Social from "./organisms/Social";
import Header from "./organisms/Header";
import Hero from "./organisms/Hero";
import CTABanner from "./organisms/CTABanner";
import Content from "./organisms/Content";

const App = () => {
  return (
    <>
      <Social />
      <Header />
      <Hero />
      <CTABanner />
      <Content />
    </>
  );
};

export default App;
