import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import Slider from "react-slick";
import * as homeServices from "../../Services/home-page-services";

class Brand extends Component {
  state = {
    activities: [],
  };

  async componentDidMount() {
    // console.log(homeServices.getActivities);
    const result = await homeServices.getActivities();
    // console.log(result);
    this.setState({ activities: result.data.records });
  }

  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";
    const { activities } = this.state;
    const regex = /(<([^>]+)>)/gi;
    var settings = {
      dots: false,
      arrows: true,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
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
      <div className="brand-area padding-top-30 event-height">
        <div className="container">
          <div className="row">
            <div className="col-lg-11 ems-heading">
              <h3 className="font_style">Event Activities</h3>
            </div>
            <div className="col-lg-1">
              <a href="#/events" className="btn btn-blue" id="event-btn">View All</a>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <Slider {...settings}>
                {activities.map((activity) => (
                  <div className="brant-item" key={activity.id}>
                    <div className="card">
                      <img
                        className="card-img-top"
                        src={activity.image}
                        alt="Card  cap"
                      />
                      <div className="card-body height-150">
                        <p className="card-text">
                          {activity.description.replace(regex, "")}
                        </p>
                        <a href={"/#/single_event/" + activity.id} className="blue-link">
                          Read more{" "}
                          <i className="fa fa-angle-double-right fa-lg" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Brand;
