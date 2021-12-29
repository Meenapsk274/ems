import React from "react";
import Navbar from "./global-components/navbar_webtv";
import PageHeader from "./global-components/page-header";
import Videos from "./shop-components/webtvvideos";
// import Delivery from "./section-components/delivery";
// import Instagram from "./section-components/instagram";
import Footer from "./global-components/footer-webtv";

const webtv_videos = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="Web TV videos" />
      <Videos />
      {/* <Delivery />
      <Instagram /> */}
      <Footer />
    </div>
  );
};

export default webtv_videos;
