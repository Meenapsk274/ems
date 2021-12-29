import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header-v2";
import Search from "./shop-components/search";
// import Delivery from "./section-components/delivery";
// import Instagram from "./section-components/instagram";
import Footer from "./global-components/footer";

const SearchPage = () => {
  const { query } = useParams();
  return (
    <div>
      <Navbar query={query}/>
      <PageHeader headertitle="Search" />
      <Search query={query}/>
      {/* <Delivery />
      <Instagram /> */}
      <Footer />
    </div>
  );
};

export default SearchPage;
