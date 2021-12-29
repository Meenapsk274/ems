import React, { Component } from "react";
import { Link } from "react-router-dom";

import { DatePicker, Divider, Space } from "antd";
import moment from "moment";
import Pagination from "../global-components/pagination";
import { paginate, paginateInfo } from "../../paginate";
import * as homeServices from "../../Services/home-page-services";

class Events extends Component {
  state = {
    events: [],
    filteredSearch: "",
    filteredMonth: "",
    filteredYear: "",
    pageSize: 6,
    currentPage: 1
  };

  async componentDidMount() {
    // console.log(homeServices.getActivities);
    const result = await homeServices.getAllEvents();
    console.log(result);
    this.setState({ events: result.data.records });
  }
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  searchEvents = (e) => {
    this.setState({ filteredSearch: e.target.value.trim() });
    this.handlePageChange(1);
  };
  handleMonthChange = (e) => {
    let filteredMonth = e.target.textContent.trim();
    if (filteredMonth === this.state.filteredMonth) {
      filteredMonth = "";
    }
    this.setState({ filteredMonth });
    this.handlePageChange(1);
  };
  handleYearChange = (date, dateString) => {
    this.setState({ filteredYear: dateString });
    this.handlePageChange(1);
  };
  getFilterEventsList = () => {
    const { filteredSearch, filteredMonth, filteredYear } = this.state;

    const eventsList = this.state.events.filter((event) => {
      let eventdate = moment(event.date, "DD-MM-YYYY / hh:mm:ssa");
      if (
        filteredSearch &&
        !(event.title + " " + event.description)
          .toLowerCase()
          .includes(filteredSearch.toLowerCase())
      )
        return false;
      if (filteredYear && filteredYear !== eventdate.format("YYYY"))
        return false;
      if (
        filteredYear &&
        filteredMonth &&
        filteredMonth !== eventdate.format("MMM")
      )
        return false;

      return true;
    });

    return eventsList;
  };

  render() {
    const regex = /(<([^>]+)>)/gi;
    const {
      filteredMonth,
      filteredYear,
      pageSize,
      currentPage
    } = this.state;

    const monthNameList = moment.monthsShort();

    const filteredEvents = this.getFilterEventsList();
    const getEvents = paginate(filteredEvents, currentPage, pageSize);

    return (
      <div className="collection-area ">
        <div className="container">
          <div className="row">
            
            <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12 margin-top-20">
              <div className="widget search-widget">
                <form className="search" action="#">
                  <button type="submit">
                    <i className="icon-search" />
                  </button>
                  <input
                    type="text"
                    className="side-input"
                    placeholder="Search Events"
                    name="search"
                    onChange={this.searchEvents}
                  />
                </form>
              </div>

              <div className="widget ptype-widget">
                <div className="accordion-style-2" id="accordionExample3">
                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <p className="mb-0">
                        <a
                          href="#"
                          role="button"
                          data-toggle="collapse"
                          data-target="#collapseThree"
                          aria-expanded="true"
                          aria-controls="collapseThree"
                        >
                          Year
                        </a>
                      </p>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse show"
                      aria-labelledby="headingThree"
                      data-parent="#accordionExample3"
                    >
                      <div className="card-body">
                        <form action="#">
                          <div className="custom-control custom-checkbox mb-3">
                            <Space direction="vertical">
                              <DatePicker
                                onChange={this.handleYearChange}
                                picker="year"
                              />
                            </Space>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {filteredYear && (
                <div className="widget size-widget">
                  <div className="accordion-style-2" id="accordionExample6">
                    <div className="card">
                      <div className="card-header" id="headingSix">
                        <p className="mb-0">
                          <a
                            href="#"
                            role="button"
                            data-toggle="collapse"
                            data-target="#collapseSix"
                            aria-expanded="true"
                            aria-controls="collapseSix"
                          >
                            Month
                          </a>
                        </p>
                      </div>
                      <div
                        id="collapseSix"
                        className="collapse show"
                        aria-labelledby="headingSix"
                        data-parent="#accordionExample6"
                      >
                        <div className="card-body">
                          <ul
                            className="size-list"
                            onClick={this.handleMonthChange}
                          >
                            {monthNameList.map((month) => (
                              <li
                                className={month == filteredMonth && "active"}
                              >
                                <a>{month}</a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="col-xl-9 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="row">
                <div className="col-md-12">
                  <div className="d-flex justify-content-between pagination">
                    <h6>
                    {paginateInfo(filteredEvents, currentPage, pageSize)} Events
                    </h6>

                    <Pagination
                      itemsCount={filteredEvents.length}
                      pageSize={pageSize}
                      currentPage={currentPage}
                      onPageChange={this.handlePageChange}
                    />
                  </div>
                </div>
              </div>
              <div className="tab-content tab-margin-43">
                <div
                  className="tab-pane fade in show active list-item"
                  id="two"
                >
                  {getEvents.map((event) => (
                    <div key={event.id} className="row product-style-03 ">
                      <div className="col-md-3 col-sm-12 col-12 eventList">
                        <div className="thumb">
                          <img src={event.image} alt={event.title} />
                        </div>
                      </div>
                      <div className="col-md-9 col-sm-12 col-12">
                        <div className="content">
                          <h6 className="title stone-go-top" id="event-title">
                            <a href={"#/single_event/" + event.id}>
                              {event.title}
                            </a>
                          </h6>

                          <p>{event.description.replace(regex, "")}</p>
                        </div>
                        <a
                          href={"#/single_event/" + event.id}
                          className="btn btn-native"
                        >
                          Read more
                        </a>
                      </div>
                      <Divider />
                    </div>
                  ))}
                </div>
              </div>

              <div className="row">
                <div className="col-md-12 mb-5">
                  <div className="d-flex justify-content-between pagination">
                    <h6>
                    {paginateInfo(filteredEvents, currentPage, pageSize)} Events
                    </h6>

                    <Pagination
                      itemsCount={filteredEvents.length}
                      pageSize={pageSize}
                      currentPage={currentPage}
                      onPageChange={this.handlePageChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Events;
