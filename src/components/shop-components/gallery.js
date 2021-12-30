import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player/lazy";
import "antd/dist/antd.css";
import { DatePicker, Space } from "antd";
import Modal from "react-modal";
import ImageGallery from "react-image-gallery";
import moment from "moment";
import Pagination from "../global-components/pagination";
import { paginate, paginateInfo } from "../../paginate";
import "react-image-gallery/styles/css/image-gallery.css";

import * as homeServices from "../../Services/home-page-services";

class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      albums: [],
      filteredSearch: "",
      filteredMonth: "",
      filteredYear: "",
      showModal: false,
      pageSize: 9,
      currentPage: 1,
      galleryImages: [],
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  handleOpenModal = (values) => () => {
    this.setState({ galleryImages: values });
    this.setState({ showModal: true });
    console.log(this.state.galleryImages);
  };

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  async componentDidMount() {
    // console.log(homeServices.getActivities);
    const result = await homeServices.getAlbums();
    // const imgresults = await homeServices.getAlbumImages();
    this.setState({ albums: result.data.records });
    console.log(result.data.records);
    // this.setState({ images: imgresults.data });
  }

  searchGallery = (e) => {
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
  getFilterGalleryList = () => {
    const { filteredSearch, filteredMonth, filteredYear } = this.state;

    const galleryList = this.state.albums.filter((gallery) => {
      let gallerydate = moment(gallery.date, "DD-MM-YYYY / hh:mm:ssa");
      if (
        filteredSearch &&
        !gallery.title.toLowerCase().includes(filteredSearch.toLowerCase())
      )
        return false;
      if (filteredYear && filteredYear !== gallerydate.format("YYYY"))
        return false;
      if (
        filteredYear &&
        filteredMonth &&
        filteredMonth !== gallerydate.format("MMM")
      )
        return false;

      return true;
    });

    return galleryList;
  };

  render() {
    const { filteredMonth, filteredYear, pageSize, currentPage } = this.state;

    const monthNameList = moment.monthsShort();

    const filteredGallerys = this.getFilterGalleryList();
    const getGallerys = paginate(filteredGallerys, currentPage, pageSize);

    const customStyles = {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
      },
    };

    return (
      <div className="collection-area">
        <div className="container">
          <div className="row ">
            <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12 margin-top-20">
              <div className="widget search-widget">
                <form className="search" action="#">
                  <button type="submit">
                    <i className="icon-search" />
                  </button>
                  <input
                    type="text"
                    className="side-input"
                    placeholder="Search Images"
                    name="search"
                    onChange={this.searchGallery}
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
                      {paginateInfo(filteredGallerys, currentPage, pageSize)}{" "}
                      Albums
                    </h6>

                    <Pagination
                      itemsCount={filteredGallerys.length}
                      pageSize={pageSize}
                      currentPage={currentPage}
                      onPageChange={this.handlePageChange}
                    />
                  </div>
                </div>
              </div>
              <div className="tab-content">
                <div className="tab-pane fade in show active" id="one">
                  <div className="row">
                    {getGallerys.map((album) => (
                      <div
                        key={album.gid}
                        className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12"
                      >
                        <div className="product-style-03 imageHover webVideo margin-top-40">
                          <div className="thumb">
                            <span onClick={this.handleOpenModal(album.gallery)}>
                              <img src={album.image} alt="" />
                            </span>
                          </div>
                          <h6 className="title stone-go-top  margin-top-20">
                            <span onClick={this.handleOpenModal(album.gallery)}>
                              {album.title}
                            </span>
                          </h6>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="row mb-5">
                <div className="col-md-12">
                  <div className="d-flex justify-content-between pagination">
                    <h6>
                      {paginateInfo(filteredGallerys, currentPage, pageSize)}{" "}
                      Albums
                    </h6>

                    <Pagination
                      itemsCount={filteredGallerys.length}
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
        {this.state.galleryImages.length > 0 && (
          <Modal
            isOpen={this.state.showModal}
            // onAfterOpen={afterOpenModal}
            onRequestClose={this.handleCloseModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <button align="right" onClick={this.handleCloseModal}>
              X
            </button>
            <ImageGallery items={this.state.galleryImages} />
          </Modal>
        )}
      </div>
    );
  }
}

export default Gallery;
