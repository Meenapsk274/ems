import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import ReactPlayer from "react-player";
import RelatedVideos from "../shop-components/related-videos";
import * as homeServices from "../../Services/home-page-services";

class EMSLive extends Component {
  constructor() {
    super();
    this.state = {
      cover: "",
      
    };
  }
  async componentDidMount() {
    const result = await homeServices.getWebTvVideos();
    this.setState({ cover: result.data.records[0].cover_video });
  
  }
  render() {
    const { cover } = this.state;
    const { title } = this.state;
    return (
      <div className="about-content about-content-webtv">
        <div className="container webtv-container">
          <div className="row webtv">
          <span className="webtv-head">Welcome to EMS Media</span>
          <a className="btn-blue-webtv" href="webtv_videos">View All</a>
            <ReactPlayer
              url={`https://www.youtube.com/embed/${cover}`}
              playing="true"
            />
          </div>
         
        </div>
      </div>
    );
  }
}

export default EMSLive;
