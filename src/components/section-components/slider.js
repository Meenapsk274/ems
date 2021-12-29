import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import Slider from "react-slick";
import * as homeServices from "../../Services/home-page-services";

class Banner extends Component {
  state = {
    banners: [],
  };

  async componentDidMount() {
    const result = await homeServices.getBanners();

    this.setState({ banners: result.data.slider });
  }
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";
    const { banners } = this.state;
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 10000,
      cssEase: "linear"
    };
    return (
      
      <div className="banner-style-01 stone-go-top">
        <Slider {...settings}>
          {banners.map((banner) => (
            <div>
              <img src={banner.slider_image} />
            </div>
          ))}
        </Slider>
      </div>

      
    
      
    );
  }
}

export default Banner;
