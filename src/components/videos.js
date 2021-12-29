import React from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header-v2";
import Videos from "./shop-components/videos";
// import Delivery from "./section-components/delivery";
// import Instagram from "./section-components/instagram";
import Footer from "./global-components/footer";

const Book = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="Videos" />
      <Videos />
      {/* <Delivery />
      <Instagram /> */}
      <Footer />
    </div>
  );
};

export default Book;
