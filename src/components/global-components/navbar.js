import { array } from "joi";
import React, { Component } from "react";
import { Fragment } from "react";
import { Menu, Dropdown } from "antd";
import { Link, Redirect, useHistory } from "react-router-dom";
import * as homeServices from "../../Services/home-page-services";

class Navbar extends Component {
  state = {
    menus: [],
    moto: [],
  };

  async componentDidMount() {
    const result = await homeServices.getMenu();
    const menuList = result.data.records;
    this.setState({ menus: result.data.records });

    const result1 = await homeServices.getMoto();
    console.log(result1);
    this.setState({ moto: result1.data.records });

    const $ = window.$;

    let publicUrl = process.env.PUBLIC_URL + "/";

    var shoppingCart = (function () {
      // =============================
      // Private methods and propeties
      // =============================
      var cart = [];
      var item;
      var itemCopy;
      var p;

      // Constructor
      function Item(name, price, count, img) {
        this.name = name;
        this.price = price;
        this.count = count;
        this.img = img;
      }
    })();
  }
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
    const { menus } = this.state;
    const { moto } = this.state;
    const mainMenu = Object.keys(menus);
    // mainMenu.shift();
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div>
        <div className="stoon-navbar">
          <div className="header-top d-none d-block">
            <div className="container">
              <div className="row ">
                <div
                  className=""
                  className="col-xl-5 col-lg-4 col-md-5 col-12 mt-1 hide-mobile-view"
                >
                  <span>
                    <i className="fas fa-envelope"></i>
                    <span className="text-space"> info@emsmedia.net</span>
                  </span>
                  <span className="top-contact">
                    <i className="fas fa-phone-volume"></i>{" "}
                    <span className="text-space">
                      <a href="#/contact" className="color-white">
                        Contact Us
                      </a>
                    </span>
                  </span>
                </div>
                <div className="col-xl-7 col-lg-8 col-md-7 col-12 text-right hide-mobile-view">
                  <a
                    href="http://emsmedia.net/magazine/"
                    target="_blank"
                    type="button"
                    className="btn btn-sm magazine btn-tvchannel top-content-size color-white"
                    style={{ marginRight: "15px" }}
                  >
                    <i className="fa fa-book" />{" "}
                    <span className="tab">EMS</span> Magazine{" "}
                  </a>
                  {AuthLinks()}
                  <a
                    href="#/webtv"
                    target="_blank"
                    type="button"
                    className="btn btn-sm btn-tvchannel top-content-size hide-mobile-view color-white"
                  >
                    <i className="fa fa-play-circle fa-lg" />{" "}
                    <span className="tab">EMS</span> Web TV{" "}
                    <span className="tab">Channel</span>
                  </a>
                </div>
                <div className="col-lg-6 col-md-6 col-12 hide-large-view">
                  <div className="row mobile-tv">
                    <div className="col-4">
                      <a
                        className="top-content-size color-white"
                        href="#/login"
                      >
                        <i className="fas fa-sign-in-alt"></i> Login
                      </a>
                      
                      <a
                        className="top-content-size color-white hide-mobile-view tab-hide"
                        href="#/register"
                      >
                        <i className="fas fa-user-plus"></i> Register
                      </a>
                    </div>
                    <div className="col-4">
                    <a
                    href="http://emsmedia.net/magazine/"
                    target="_blank"
                    type="button"
                    className="btn btn-sm magazine btn-tvchannel top-content-size color-white "
                    style={{ marginRight: "15px" }}
                  >
                    {/* <i className="fa fa-book" />{" "} */}
                     Magazine{" "}
                  </a>
                  </div>
                  <div className="col-4">
                      <a
                        href="#/webtv"
                        type="button"
                        className="btn btn-sm btn-tvchannel top-content-size hide-large-view"
                      >
                        <i className="fa fa-play-circle fa-lg" /> Web TV
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid logo-bg-color">
            <div className="row">
              <div className="col-xl-8 col-lg-5  hide-mobile-view tab-hide">
                <div className="logo">
                  <a href="/">
                    <img
                      className="logo-img"
                      src={publicUrl + "assets/img/media.jpg"}
                      alt="EMS Media"
                    />
                  </a>
                </div>
              </div>

              <div className="col-xl-4 col-lg-5">
                <form>
                  <div className="form-group searchbox hide-mobile-view tab-hide">
                    <div className="input-icons input-size">
                      <i className="fa fa-search"></i>
                      <input
                        type="text"
                        className="input-field form-control"
                        id="phone"
                        placeholder="search here..."
                        onKeyPress={this.searchChange}
                        onBlur={(e) => this.doSearch(e.target.value.trim())}
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="row  logo-bg-color display_none_min_1025">
              <div className="col-lg-5 col-9 ">
                <div className="logo">
                  <a href="/">
                    <img
                      src={publicUrl + "assets/img/media.jpg"}
                      alt="EMS Media"
                    />
                  </a>
                </div>
              </div>

              <div className=" col-lg-5 view-large mt-2">
                <form className="">
                  <div className="form-group searchbox ">
                    <div className="input-icons">
                      <i className="fa fa-search"></i>
                      <input
                        type="text"
                        className="input-field form-control"
                        id="phone"
                        placeholder="search here..."
                        onKeyPress={this.searchChange}
                        onBlur={(e) => this.doSearch(e.target.value.trim())}
                      />
                    </div>
                  </div>
                </form>
              </div>

              <div className="col-2 ">

              <button
              className="navbar-toggler mobile-btn hide-large-view1"
              type="button"
              data-toggle="collapse"
              data-target="#shop-menu"
            >
              <span className="navbar-toggler-icon">
                <i className="fas fa-bars hide-large-view1"></i>
              </span>
            </button>
              </div>
            <div className="col-12 container-fluid hide-mobile-view tab-hide">
              <div className="news_content">
                <div className="row justify-content-center">
                  <div className="col-xl-8 col-sm-12">
                  <marquee onmouseover="this.stop();" onmouseout="this.start();">
                  {moto.map((single_moto) => (
                    single_moto.url=='' ?
                  <span className="news_line">{single_moto.moto_content}</span>
                  : <a href={single_moto.url} className="news_line">{single_moto.moto_content}</a>
                  ))} 
                  </marquee>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 container-fluid">
              <div className="quiz_content">
                <div className="row justify-content-center">
                <a href="https://emsmedia.net/quiz/" target="_blank">
                  <center>
                    <span className="quiz_text">இஸ்லாமிய வினா-விடைப் போட்டி</span>
                     <br></br>
                     <span className="sub_quiz">( மதரஸத்துல் ஹஸனைன் பீ ஜாமியா யாசீன் அறபுக்கல்லூரி )</span>
                     </center>
                     </a>
                </div>
              </div>
            </div>
              <nav className="navbar navbar-area navbar-expand-lg nav-style-01 hide-tab ">
                  <div className="container-fluid nav-container">
                    <div className="row">
                     
                      <div className="col-lg-12 order-3 order-lg-2">
                        <div className="collapse navbar-collapse" id="shop-menu">
                          <ul className="navbar-nav menu-open">
                          {mainMenu.map((item, i) => {
                            const subMenus = menus[item];
                            return (
                              <li className="menu-item-has-children" key={i}>
                                <a href="#">
                                  {item}
                                  <i className="fa fa-angle-down" />
                                </a>
                                {subMenus.length > 0 && (
                                  <ul className="sub-menu">
                                    {subMenus.map((childmenu, ch) => {
                                      const subSubMenu = childmenu.third_child;
                                      return (
                                        <li
                                          key={ch}
                                          className={
                                            subSubMenu
                                              ? "menu-item-has-children"
                                              : ""
                                          }
                                        >
                                          <a href={childmenu.url} target={childmenu.target_status==1 ? '_blank' : ''}>
                                            {childmenu.submenu}
                                          </a>
                                          {subSubMenu && (
                                            <ul
                                              className="sub-menu"
                                              id="third_menu"
                                            >
                                              {subSubMenu.map(
                                                (thirdMenu, tm) => (
                                                  <li key={tm}>
                                                    <a href={thirdMenu.url} target={thirdMenu.target_status==1 ? '_blank' : ''}>
                                                      {thirdMenu.thirdmenu}
                                                    </a>
                                                  </li>
                                                )
                                              )}
                                            </ul>
                                          )}
                                        </li>
                                      );
                                    })}
                                  </ul>
                                )}
                              </li>
                            );
                          })}
                        </ul>
                        </div>
                      </div>
                      <div className="col-lg-3 col-8 justify-content-end d-flex order-2 order-lg-3">
                        <div className="nav-right-part">
                          
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </nav>

              <div className="col-12 hide-large-view1 tab-top hide-large">
                <form>
                  <div className="form-group searchbox">
                    <div className="input-icons">
                      <i className="fa fa-search"></i>
                      <input
                        type="text"
                        className="input-field form-control"
                        id="phone"
                        placeholder="search here..."
                        onKeyPress={this.searchChange}
                        onBlur={(e) => this.doSearch(e.target.value.trim())}
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
            
          <div className="col-12 padding_0">
              <div className="news_content">
                <div className="row justify-content-center">
                  <div className="col-xl-10 col-sm-12">
                  <marquee onmouseover="this.stop();" onmouseout="this.start();">
                  {moto.map((single_moto) => (
                    
                    single_moto.url=='#' ?
                    <span>
                      <span className="news_line">{single_moto.moto_content}</span>
                      <span className="news_line">|</span>
                    </span>
                  : <span><a target="_blank" href={single_moto.url} className="news_line">{single_moto.moto_content}</a>
                  <span className="news_line">|</span></span>
                  ))} 
                  </marquee>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 padding_0  hide-mobile-view tab-hide">
              <div className="quiz_content">
                <div className="row justify-content-center">
                  <div className="col-xl-10 col-sm-12">
                      <a href="https://emsmedia.net/quiz/" target="_blank"><span class="quiz_text"><center>இஸ்லாமிய வினா-விடைப் போட்டி - ( மதரஸத்துல் ஹஸனைன் பீ ஜாமியா யாசீன் அறபுக்கல்லூரி )</center></span></a>
                  </div>
                </div>
              </div>
            </div>

          <nav className="navbar navbar-area navbar-expand-xl nav-style-01 hide-mobile-view mtwo tab-hide logo-bg-color">
            <div className="container-fluid nav-container">
              <div className="row">
                <div className="col-lg-12 order-3 order-lg-2">
                  <div className="collapse navbar-collapse" id="shop-menu">
                  <ul className="navbar-nav menu-open">
                  {mainMenu.map((item, i) => {
                    const subMenus = menus[item];
                    return (
                      <li className="menu-item-has-children" key={i}>
                        <a href="#">
                          {item}
                          <i className="fa fa-angle-down" />
                        </a>
                        {subMenus.length > 0 && (
                          <ul className="sub-menu">
                            {subMenus.map((childmenu, ch) => {
                              const subSubMenu = childmenu.third_child;
                              return (
                                <li
                                  key={ch}
                                  className={
                                    subSubMenu
                                      ? "menu-item-has-children"
                                      : ""
                                  }
                                >
                                  <a href={childmenu.url} target={childmenu.target_status==1 ? '_blank' : ''}>
                                    {childmenu.submenu}
                                  </a>
                                  {subSubMenu && (
                                    <ul
                                      className="sub-menu"
                                      id="third_menu"
                                    >
                                      {subSubMenu.map(
                                        (thirdMenu, tm) => (
                                          <li key={tm}>
                                            <a href={thirdMenu.url} target={thirdMenu.target_status==1 ? '_blank' : ''}n>
                                              {thirdMenu.thirdmenu}
                                            </a>
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  )}
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </li>
                    );
                  })}
                </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

function AuthLinks() {
  let user = localStorage.getItem("user");
  user = JSON.parse(user) || {};

  if (user.id) {
    const menu = (
      <Menu>
        <Menu.Item>
          <Link to="/profile">
            <i className="fas fa-user fa-fw"></i> Profile
          </Link>
        </Menu.Item>
        <Menu.Item onClick={() => logout()}>
          <Link to="/">
            <i className="fas fa-sign-out-alt fa-fw"></i> Logout
          </Link>
        </Menu.Item>
      </Menu>
    );

    return (
      <Fragment>
        <Dropdown overlay={menu}>
          <a
            type="button"
            className="ant-dropdown-link"
            onClick={(e) => e.preventDefault()}
          >
          <i class="fas fa-user"></i> {user.name} <i className="fas fa-chevron-down"></i>
          </a>
        </Dropdown>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <Link to="/login" className="top-content-size color-white">
        <i className="fas fa-sign-in-alt"></i> Login
      </Link>
      <span className="space tab-hide">|</span>
      <Link to="/register" className="top-content-size color-white tab-hide">
        <i className="fas fa-user-plus"></i> Register
      </Link>
    </Fragment>
  );
}

async function logout() {
  localStorage.removeItem("user");
  const result = await homeServices.logout();
}
export default Navbar;
