import React from "react";
import Marquee from "react-fast-marquee";
import Navbar from "./global-components/navbar";
import Banner from "./section-components/slider";
import CollectionBanner from "./section-components/collection-banner";
import WebChannel from "./section-components/web-channel";
import NewArrival from "./section-components/new-arrival";
import SaleBanner from "./section-components/sale-banner";
import Trending from "./section-components/trending";
import CollectionSlider from "./section-components/collection-slider";
import Ads from "./section-components/ads";
import LatestArticle from "./section-components/latest-article";
import Brand from "./section-components/brand";
import Subscriber from "./section-components/subscriber";
import Delivery from "./section-components/delivery";
import Instagram from "./section-components/instagram";
import Books from "./section-components/books";
import Magazine from "./section-components/magazine";
import Categories from "./section-components/categories";
import Footer from "./global-components/footer";

const Home_V1 = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Brand />
      <CollectionBanner />
      <WebChannel />
      <Books />

      {/* <Magazine /> */}

      {/* <NewArrival />
      <SaleBanner />
      <Trending />
      <CollectionSlider />
      <Ads />
      <LatestArticle />

      <Subscriber />
      <Delivery /> 
      <Categories /> */}
      <Footer />
    </div>
  );
};

export default Home_V1;
