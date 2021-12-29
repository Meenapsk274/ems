import React from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header-v2";
import Galleries from "./shop-components/gallery";
// import Delivery from "./section-components/delivery";
// import Instagram from "./section-components/instagram";
import Footer from "./global-components/footer";

const Gallery = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="Gallery" />
      <Galleries />
      <Footer />
    </div>
  );
};

export default Gallery;
