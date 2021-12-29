import React, { Component } from "react";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import { DatePicker, Space, Divider, Button } from "antd";
import moment from "moment";
import Pagination from "../global-components/pagination";
import { paginate, paginateInfo } from "../../paginate";
import * as homeServices from "../../Services/home-page-services";

class Books extends Component {
  state = {
    bookCategories: [],
    booksList: [],
    bookCategorySearch: "",
    filteredCategories: new Set(),
    filteredMonth: "",
    filteredYear: "",
    pageSize: 9,
    currentPage: 1
  };

  async componentDidMount() {
    // console.log(homeServices.getActivities);
    const result = await homeServices.getBookCategories();
    const bookResult = await homeServices.getAllBooks();
    this.setState({ bookCategories: result.data.records });
    this.setState({ booksList: bookResult.data.records });
    // const booksList = this.state.booksList.filter((e) => e._id !== id);
  }
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  searchCategory = (e) => {
    this.setState({ bookCategorySearch: e.target.value.trim() });
  };
  handleCategoryChange = (e) => {
    let filteredCategories = this.state.filteredCategories;

    if (e.target.checked) {
      filteredCategories.add(e.target.value);
    } else {
      filteredCategories.delete(e.target.value);
    }

    this.setState({ filteredCategories });
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
  getFilterBookCategories = () => {
    const { bookCategories, bookCategorySearch } = this.state;

    return bookCategories.filter(({ category }) =>
      category.toLowerCase().includes(bookCategorySearch.toLowerCase())
    );
  };
  getFilterBookList = () => {
    const { filteredCategories, filteredMonth, filteredYear } = this.state;

    const bookList = this.state.booksList.filter((book) => {
      let bookdate = moment(book.book_date, "DD-MM-YYYY / hh:mm:ssa");
      if (
        filteredCategories.size &&
        !filteredCategories.has(book.book_category)
      )
        return false;
      if (filteredYear && filteredYear !== bookdate.format("YYYY"))
        return false;
      if (
        filteredYear &&
        filteredMonth &&
        filteredMonth !== bookdate.format("MMM")
      )
        return false;

      return true;
    });

    return bookList;
  };
  render() {
    const {
      filteredMonth,
      filteredYear,
      pageSize,
      currentPage
    } = this.state;

    const monthNameList = moment.monthsShort();

    const filteredBooks = this.getFilterBookList();
    const getBooks = paginate(filteredBooks, currentPage, pageSize);
    const filteredBookCategories = this.getFilterBookCategories();

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
                          {filteredBookCategories.map((bookCategory, i) => (
                            <div
                              key={bookCategory.bid}
                              className="custom-control custom-checkbox mb-3"
                            >
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id={"category-" + i}
                                onChange={this.handleCategoryChange}
                                value={bookCategory.category}
                              />
                              <label
                                className="custom-control-label"
                                htmlFor={"category-" + i}
                              >
                                {bookCategory.category}
                              </label>
                            </div>
                          ))}
                          {!filteredBookCategories.length && (
                            <div className="text-center">
                              No Categories Found!
                            </div>
                          )}
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

              <div className="widget price-widget d-none">
                <div className="accordion-style-2" id="accordionExample4">
                  <div className="card">
                    <div className="card-header" id="headingFour">
                      <p className="mb-0">
                        <a
                          href="#"
                          role="button"
                          data-toggle="collapse"
                          data-target="#collapseFour"
                          aria-expanded="true"
                          aria-controls="collapseFour"
                        >
                          Filter by price
                        </a>
                      </p>
                    </div>
                    <div
                      id="collapseFour"
                      className="collapse show"
                      aria-labelledby="headingFour"
                      data-parent="#accordionExample4"
                    >
                      <div className="price_filter">
                        <div className="price_slider_amount">
                          <input type="submit" defaultValue="Price:" />
                          <input type="text" id="amount" name="price" />
                        </div>
                        <div id="slider-range" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="row">
                <div className="col-md-12">
                  <div className="d-flex justify-content-between pagination">
                    <h6>
                    {paginateInfo(filteredBooks, currentPage, pageSize)} Books
                    </h6>

                    <Pagination
                      itemsCount={filteredBooks.length}
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
                    {getBooks.map((book) => (
                      <div
                        key={book.bid}
                        className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 "
                      >
                        <div className="product-style-03  border-grey margin-top-40 book-div">
                          <div className="thumb ">
                            <img
                              src={book.original_image}
                              alt={book.book_name}
                            />
                          </div>
                          <div className=" align-center">
                            <div className="content book_content">
                              <h6 className="title stone-go-top">
                                {book.book_name}
                              </h6>
                              <div className="content-price d-flex align-self-center justify-content-center">
                                <span className="new-price">
                                  &#8377; {book.book_price}
                                </span>
                              </div>
                            </div>
                            <a
                              className="btn btn-sm buyButton buy-btn"
                              href={book.book_url}
                              target="_blank"
                            >
                              {" "}
                              View/Buy
                            </a>
                          </div>
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
                    {paginateInfo(filteredBooks, currentPage, pageSize)} Books
                    </h6>

                    <Pagination
                      itemsCount={filteredBooks.length}
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

export default Books;
