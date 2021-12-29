import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player/lazy";
import ReactAudioPlayer from "react-audio-player";
import "antd/dist/antd.css";
import Pagination from "../global-components/pagination";
import { paginate } from "../../paginate";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import * as homeServices from "../../Services/home-page-services";

const publicUrl = process.env.PUBLIC_URL + "/";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      videoId: "",
      searchList: [],
      pageSize: 8,
      currentPage: 1,
      displaySearchRange: 1,
      query: "",
    };
    this.openModal = this.openModal.bind(this);
    window.videoPopupComponent = this;
  }

  openModal = (value) => () => {
    this.setState({ videoId: value });
    this.setState({ isOpen: true });
  };

  async componentDidMount() {
    this.setState({ query: this.props.query });

    const result = await homeServices.doSearch({ search: this.props.query });
    this.setState({ searchList: result.data.records || [] });
  }
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
    this.setState({
      displaySearchRange: this.state.currentPage * this.state.pageSize + 1,
    });
  };
  onSearchChange = (e) => {
    this.setState({ query: e.target.value.trim() });
  };
  searchChange = (e) => {
    let query = e.target.value.trim();
    if (this.props.query === query) return;

    if (e.key === "Enter") {
      this.doSearch(query);
      e.preventDefault();
    }
  };
  doSearch(query) {
    if (!query || this.props.query === query) return;
    let reload = window.location.hash.startsWith("#/search");
    window.location.hash = `#/search/${query}`;

    reload && window.location.reload();
  }
  render() {
    const {
      searchList,
      pageSize,
      currentPage,
      displaySearchRange,
      query,
    } = this.state;

    const getSearches = paginate(searchList, currentPage, pageSize);

    return (
      <div className="collection-area">
        <div className="container">
          <div className="row">
            <div className="col-10 m-auto tab-top">
              <form>
                <div className="form-group main-searchbox-lg">
                  <div className="input-icons">
                    <i className="fa fa-search"></i>
                    <input
                      type="text"
                      className="input-field form-control"
                      id="phone"
                      placeholder="search here..."
                      value={query}
                      onChange={this.onSearchChange}
                      onKeyPress={this.searchChange}
                      onBlur={(e) => this.doSearch(e.target.value.trim())}
                    />
                  </div>
                </div>
              </form>
            </div>

            <div className="col-12">
              <div className="row mb-5">
                <div className="col-md-12">
                  <div className="d-flex justify-content-between pagination">
                    <h6>
                      Showing {displaySearchRange} to {currentPage * pageSize}{" "}
                      of {searchList.length} Searches
                    </h6>

                    <Pagination
                      itemsCount={searchList.length}
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
                    {getSearches.map((search, key) =>
                      generateComponent(search, key)
                    )}
                  </div>
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-md-12">
                  <div className="d-flex justify-content-between pagination">
                    <h6>
                      Showing {displaySearchRange} to {currentPage * pageSize}{" "}
                      of {searchList.length} Searches
                    </h6>

                    <Pagination
                      itemsCount={searchList.length}
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

function generateComponent(search, key) {
  let type = search.type.trim().toUpperCase();
  switch (type) {
    case "AUDIO":
      return audioComponent(search, key);
    case "VIDEO":
      return videoComponent(search, key);
    case "BOOK":
      return bookComponent(search, key);
    case "EVENTS":
      return eventComponent(search, key);
    case "ARTICLE":
      return articleComponent(search, key);
    default:
      return null;
  }
}

function eventComponent(event, key) {
  return (
    <div key={key} className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 ">
      <Link
        className="col-sm-12 col-12 eventList"
        type="button"
        to="#/events"
        target="_blank"
      >
        <div className="thumb">
          <img src={event.image} alt={event.name} width="100%" />
        </div>
      </Link>
      <div className="col-sm-12 col-12">
        <div className="content">
          <h6 className="title stone-go-top" id="event-title">
            <a href={"#/single_event/" + event.id} target="_blank">
              {event.name}
            </a>
          </h6>

          <p>{event.description.replace(/(<([^>]+)>)/gi, "")}</p>
        </div>
        <a
          class="btn btn-native"
          href={"#/single_event/" + event.id}
          class="btn btn-native"
          target="_blank"
        >
          Read more
        </a>
      </div>
    </div>
  );
}

function audioComponent(audio, key) {
  return (
    <div key={key} className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
      <div className="product-style-audio webVideo margin-top-40">
        <Link className="thumb " type="button" to="/audios" target="_blank">
          <img src={publicUrl + "assets/img/audio.jpg"} alt="" />
        </Link>
        <div className="thumb ">
          <ReactAudioPlayer src={audio.audio} controls />
        </div>
      </div>
    </div>
  );
}

function videoComponent(video, key) {
  return (
    <div key={key} className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
      <div className="product-style-03 webVideo imageHover margin-top-40">
        <a
          className="thumb youtubeVideo"
          type="button"
          onClick={window.videoPopupComponent.openModal(video.url)}
          target="_blank"
        >
          <img src={`http://img.youtube.com/vi/${video.url}/0.jpg`}></img>
        </a>

        <h6 className="title stone-go-top margin-top-20">
          <span></span>
          <span onClick={window.videoPopupComponent.openModal(video.url)}>
            {video.name}
          </span>
        </h6>
      </div>
    </div>
  );
}

function bookComponent(book, key) {
  return (
    <div key={key} className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 ">
      <div className="product-style-03  border-grey margin-top-40 book-div">
        <div className="thumb ">
          <a href="#/books" target="_blank">
            <img src={book.image} alt={book.name} />
          </a>
        </div>
        <div className=" align-center">
          <div className="content book_content">
            <h6 className="title stone-go-top">{book.name}</h6>
            <div className="content-price d-flex align-self-center justify-content-center">
              <span className="new-price">&#8377;{book.price}</span>
            </div>
          </div>
        </div>
        <Link className="btn btn-sm buyButton buy-btn-search" to={book.url} target="_blank">
          {" "}
          View/Buy
        </Link>
      </div>
    </div>
  );
}

function articleComponent(article, key) {
  return (
    <div key={key} className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 ">
      <div className="col-sm-12 col-12 margin-top-40 article-div-style">
        <div className="content article-content">
          <h6 className="title stone-go-top" id="event-title">
            <Link to="/product-details">{article.name}</Link>
          </h6>

          <p>{article.description.replace(/(<([^>]+)>)/gi, "")}</p>
        </div>
        <Link
          class="btn btn-block btn-native search-article-btn"
          to={article.page_url.replace(/^#/, "")}
          target="_blank"
        >
          Read more
        </Link>
      </div>
    </div>
  );
}

export default Search;
