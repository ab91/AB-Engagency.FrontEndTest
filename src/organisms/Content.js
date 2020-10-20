import React from "react";

import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

import Feature from "../molecules/Feature";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 30%);
  justify-content: space-around;
  margin: 5% 10%;
`;

const ArchitectureProps = {
  image:
    "https://res.cloudinary.com/ab91/image/upload/v1603149096/Engagency%20Project/Architecture.png",
  header: "Smart Architecture",
  description:
    "Our job is to make you look good, and help you deliver award-winning results. We're as committed as you are to ensuring that your Sitecore projects look and work as your designers intended, and your clients are getting the most out of Sitecore.",
};

const MaintenanceProps = {
  image:
    "https://res.cloudinary.com/ab91/image/upload/v1603149063/Engagency%20Project/Maintenance.png",
  header: "Stress Free Maintenance",
  description:
    "Our team of experts are excited to help you execute your monthly todo list, perform upgrades, manage your hosting environment, educate and train your team to get the most out of Sitecore, and are always ready to respond to an emergency.",
};

const AuditsProps = {
  image:
    "https://res.cloudinary.com/ab91/image/upload/v1603149063/Engagency%20Project/Audits.png",
  header: "In Depth Audits",
  description:
    "Our Sitecore Implementation Audit is a comprehensive assessment of an existing Sitecore implementation, conducted by our team of Sitecore Certified Architects, Developers, and Support Engineers with 8 years of Sitecore implementation and support experience.",
};

const Content = () => {
  return (
    <Grid>
      <Feature {...ArchitectureProps} />
      <Feature {...MaintenanceProps} />
      <Feature {...AuditsProps} />
    </Grid>
  );
};

export default Content;
