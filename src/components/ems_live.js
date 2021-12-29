import React from "react";
import Navbar from "./global-components/navbar_webtv";
import PageHeader from "./global-components/page-header";
import EMSLive from "./shop-components/ems_live_details";

import Footer from "./global-components/footer-webtv";

const WebTvLive = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="EMS Web TV Channel" />
      <EMSLive />
      <Footer />
    </div>
  );
};

export default WebTvLive;