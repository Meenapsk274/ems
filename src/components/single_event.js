import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import SingleEvent from "./blog-components/single_event";
// import Instagram from "./section-components/instagram";
import Footer from "./global-components/footer";

const About = () => {
  const { eventid } = useParams();
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="News and Events" />
      
      <SingleEvent eventid={eventid}/>
      <Footer />
    </div>
  );
};

export default About;
