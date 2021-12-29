import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

import * as homeServices from "../../Services/home-page-services";

class SingleEvent extends Component {
  state = {
    event: [],
  };

  async componentDidMount() {
    const result = await homeServices.getSingleEvent({
      id: this.props.eventid,
    });
    this.setState({ event: result.data.records[0] || [] });
  }

  render() {
    const regex = /(<([^>]+)>)/gi;
    const { event } = this.state;

    const renderHTML = (escapedHTML: String) =>
      React.createElement("div", {
        dangerouslySetInnerHTML: { __html: escapedHTML },
      });
    return (
      <div className="blog-area margin-top-65">
        <div className="container">
          <div className="row justify-content-center">
          <div className="col-md-9">
            <div className="">
              <a id="goback-btn"
              href={"#/events"}
              className="btn btn-orange float-right"
              >
                Back
              </a>
            </div>
          </div>
            <div className="col-md-9">
              
              <div className="blog-content single_event_bg">
                <h3 className="event-head">{event.title}</h3>
                <img src={event.image} alt={event.title} />
                <br></br>
                <div className="event_date_tag">
                <span class="date ">
                <i class="fa fa-calendar"></i> {event.date}{" "}
              </span>
              </div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: event.description,
                  }}
                />
              </div>

              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleEvent;