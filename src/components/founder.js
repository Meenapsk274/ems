import React from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import FounderDetails from "./blog-components/founder-details";
// import Instagram from "./section-components/instagram";
import Footer from "./global-components/footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="Founder" />
      
      <FounderDetails />
      <Footer />
    </div>
  );
};

export default About;
