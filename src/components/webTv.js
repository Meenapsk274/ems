import React from "react";
import Navbar from "./global-components/navbar_webtv";
import PageHeader from "./global-components/page-header";
import WebTV from "./shop-components/webTV";

import Footer from "./global-components/footer-webtv";

const WebTv = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="EMS Web TV Channel" />
      <WebTV />
      <Footer />
    </div>
  );
};

export default WebTv;
