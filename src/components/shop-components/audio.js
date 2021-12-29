import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player/lazy";
import ReactAudioPlayer from "react-audio-player";
import "antd/dist/antd.css";
import { DatePicker, Space } from "antd";
import moment from 'moment';
import Pagination from "../global-components/pagination";
import { paginate, paginateInfo } from "../../paginate";
import * as homeServices from "../../Services/home-page-services";

class Audios extends Component {
  state = {
    audioCategories: [],
    audioList: [],
    audioCategorySearch: '',
    filteredCategories: new Set(),
    filteredMonth: '',
    filteredYear: '',
    pageSize: 6,
    currentPage: 1
  };

  async componentDidMount() {
    const category = await homeServices.getAudioCategory();
    const result = await homeServices.getAllAudios();
    console.log(result);
    this.setState({ audioList: result.data.records });
    this.setState({ audioCategories: category.data.records });
  }
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  searchCategory = (e) => {
    this.setState({ audioCategorySearch: e.target.value.trim() });
  }
  handleCategoryChange = (e) => {
    let filteredCategories = this.state.filteredCategories;

    if (e.target.checked) {
      filteredCategories.add(e.target.value);
    } else {
      filteredCategories.delete(e.target.value);
    }

    this.setState({ filteredCategories });
    this.handlePageChange(1);
  }
  handleMonthChange = (e) => {
    let filteredMonth = e.target.textContent.trim();
    if (filteredMonth === this.state.filteredMonth) {
      filteredMonth = '';
    }
    this.setState({ filteredMonth });
    this.handlePageChange(1);
  }
  handleYearChange = (date, dateString) => {
    this.setState({ filteredYear: dateString });
    this.handlePageChange(1);
  }
  getFilterAudioCategories = () => {
    const { audioCategories, audioCategorySearch } = this.state;

    return audioCategories.filter(({ category }) => category.toLowerCase().includes(audioCategorySearch.toLowerCase()));
  }
  getFilterAudioList = () => {
    const { filteredCategories, filteredMonth, filteredYear } = this.state;

    const audioList = this.state.audioList.filter(audio => {
      let audiodate = moment(audio.date, 'DD-MM-YYYY / hh:mm:ssa');
      if (filteredCategories.size && !filteredCategories.has(audio.category)) return false;
      if (filteredYear && filteredYear !== audiodate.format('YYYY')) return false;
      if (filteredYear && filteredMonth && filteredMonth !== audiodate.format('MMM')) return false;

      return true;
    });

    return audioList;
  }
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    const {
      filteredMonth,
      filteredYear,
      pageSize,
      currentPage
    } = this.state;

    const monthNameList = moment.monthsShort();
    
    const filteredAudios = this.getFilterAudioList();
    const getAudios = paginate(filteredAudios, currentPage, pageSize);
    const filteredAudioCategories = this.getFilterAudioCategories();
    
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
                  type="text" className="side-input"
                  placeholder="Search Category"
                  name="search"
                  onChange={this.searchCategory}
                />
              </form>
              </div>
              <div className="widget categories-widget">
                <div className="accordion-style-2" id="accordionExample1">
                  <div className="card">
                    <div className="card-header" id="headingOne">
                      <p className="mb-0">
                        <a
                          href="#"
                          role="button"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Categories
                        </a>
                      </p>
                    </div>
                    <div
                      id="collapseOne"
                      className="collapse show"
                      aria-labelledby="headingOne"
                      data-parent="#accordionExample1"
                    >
                      <div className="card-body">
                        <form action="#">
                          {filteredAudioCategories.map((audioCategory, i) => (
                            <div key={audioCategory.aid} className="custom-control custom-checkbox mb-3">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id={'category-' + i}
                                onChange={this.handleCategoryChange}
                                value={audioCategory.category}
                              />
                              <label
                                className="custom-control-label"
                                htmlFor={'category-' + i}
                              >
                                {audioCategory.category}
                              </label>
                            </div>
                          ))}
                          {!filteredAudioCategories.length && <div className="text-center">No Categories Found!</div>}
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
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
                              <DatePicker onChange={this.handleYearChange} picker="year" />
                            </Space>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {filteredYear && 
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
                          <ul className="size-list" onClick={this.handleMonthChange}>
                            {monthNameList.map((month) => (
                              <li className={month == filteredMonth && 'active'}>
                                <a>{month}</a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              }
            </div>
            <div className="col-xl-9 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="row mb-5">
                <div className="col-md-12">
                  <div className="d-flex justify-content-between pagination">
                    <h6>
                      {paginateInfo(filteredAudios, currentPage, pageSize)} Audios
                    </h6>

                    <Pagination
                      itemsCount={filteredAudios.length}
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
                    {getAudios.map((audio) => (
                      <div key={audio.aid} className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="product-style-audio webVideo margin-top-40 audio_div" >
                        <div className="thumb ">
                        <img src={publicUrl + "assets/img/audio.jpg"} alt="" />
                        </div>
                          <div className="thumb ">
                            <ReactAudioPlayer src={audio.audio} controls />
                          </div>
                          <hr></hr>
                          <div class="audio_name_div"><span className="audio_name">{audio.name}</span></div>
                          {/* <h6 className="title stone-go-top margin-top-20">
                          <Link to="/"></Link>
                        </h6> */}
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
                      {paginateInfo(filteredAudios, currentPage, pageSize)} Audios
                    </h6>

                    <Pagination
                      itemsCount={filteredAudios.length}
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

export default Audios;
