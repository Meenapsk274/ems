import React from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import Construction from "./blog-components/construction_details";
// import Instagram from "./section-components/instagram";
import Footer from "./global-components/footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="Construction" />

      <Construction />

      <Footer />
    </div>
  );
};

export default About;
