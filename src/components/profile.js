import React from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import ProfileDetails from "./blog-components/profile-details";
// import Instagram from "./section-components/instagram";
import Footer from "./global-components/footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="Profile" />
      
      <ProfileDetails />
      <Footer />
    </div>
  );
};

export default About;
