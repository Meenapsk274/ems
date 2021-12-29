import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as homeServices from "../../Services/home-page-services";
import Slider from "react-slick";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import { array } from "joi";

class RelatedVideos extends Component {
  constructor() {
    super();
    this.state = {
      videos: [],
      isOpen: false,
      videoId: "",
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal = (value) => () => {
    this.setState({ videoId: value });
    this.setState({ isOpen: true });
  };

  async componentDidMount() {
    const result = await homeServices.getWebTvVideos();
    const results = result.data.records;
    results.shift();
    this.setState({ videos: results });
  }

  render() {
    const { videos } = this.state;
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="container-fluid ">
        <div className="related-product-section related-product-webtv">
          <div className="related-product">
            <div className="row">
              <div className="col-lg-12">
                <div className="title webtv-title">
                  <div className="row">
                  <div className="col-lg-6">
                    <h3 className="related_videos_head">RELATED VIDEOS</h3>
                  </div>
                  <div className="col-lg-6">
                   <a className="btn-blue-webtv" id="webtv_view" href="#/webtv_videos">View All</a>
                  </div>
                  </div>
                  
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <Slider {...settings}>
                  {videos.map((video) => (
                    <div className="webtv-related-video">
                      <div className="product-style-03 webVideo imageHover margin-top-40">
                        <div className="thumb youtubeVideo">
                          <img
                            onClick={this.openModal(video.url)}
                            src={`http://img.youtube.com/vi/${video.url}/0.jpg`}
                          ></img>
                        </div>

                        <h6 className="title stone-go-top margin-top-20">
                          <span onClick={this.openModal(video.url)}>
                            {video.video_name}
                          </span>
                        </h6>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
        <ModalVideo
          channel="youtube"
          isOpen={this.state.isOpen}
          videoId={this.state.videoId}
          onClose={() => this.setState({ isOpen: false })}
        />
      </div>
    );
  }
}

export default RelatedVideos;
