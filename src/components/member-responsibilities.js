import React from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import FounderDetails from "./blog-components/member-responsibilities";
// import Instagram from "./section-components/instagram";
import Footer from "./global-components/footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="Responsiblities" />

      <FounderDetails />
      <br />
      <Footer />
    </div>
  );
};

export default About;
