import { array } from "joi";
import React, { Component } from "react";
import { Fragment } from "react";
import { Menu, Dropdown } from "antd";
import { Link, Redirect, useHistory } from "react-router-dom";
import * as homeServices from "../../Services/home-page-services";

class Navbar extends Component {
  state = {
    menus: [],
  };

  async componentDidMount() {
    const result = await homeServices.getMenu();
    const menuList = result.data.records;
    this.setState({ menus: result.data.records });


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
    let reload = window.location.hash.startsWith('#/search')
    window.location.hash = `#/search/${query}`

    reload && window.location.reload();
  }

  render() {
    const { menus } = this.state;
    const mainMenu = Object.keys(menus);
    // mainMenu.shift();
    let publicUrl = process.env.PUBLIC_URL + "/";
    return (
      <div>
        <div className="stoon-navbar">
          <div className="header-top d-none d-block top-header">
            <div className="container">
              <div className="row ">
                <div
                  class=""
                  className="col-lg-6 col-md-6 col-12 mt-1 hide-mobile-view"
                >
                  <span>
                    <i class="fas fa-envelope"></i>
                    <span className="text-space"> info@emsmedia.net</span>
                  </span>
                  <span class="top-contact">
                    <i class="fas fa-phone-volume"></i>{" "}
                    <span className="text-space">
                      <Link to="contact" className="color-white">
                        Contact Us
                      </Link>
                    </span>
                  </span>
                </div>
                <div className="col-lg-6 col-md-6 col-12 text-right hide-mobile-view">
                
              {AuthLinks()}
                  
                </div>
                <div className="col-lg-6 col-md-6 col-12 hide-large-view">
                  <div className="row mobile-tv">
                    <div className="col-8">
                      <Link className="top-content-size color-white" to="login">
                        <i class="fas fa-sign-in-alt"></i> Login
                      </Link>
                      <span className="space">|</span>
                      <Link
                        className="top-content-size color-white"
                        to="register"
                      >
                        <i class="fas fa-user-plus"></i> Register
                      </Link>
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
                      src={publicUrl + "assets/img/Logo_Web_TV.jpg"}
                      alt="EMS Media"
                    />
                  </a>
                </div>
            </div>
            
            </div>
            <div className="row  logo-bg-color hide-large-view1">
              <div className="col-lg-5 col-9 ">
                <div className="logo">
                  <Link to="/">
                    <img src={publicUrl + "assets/img/Logo_Web_TV.jpg"} alt="" />
                  </Link>
                </div>
              </div>

              

              <div className="col-2 ">
                <button
                  className="navbar-toggler mobile-btn hide-large-view1"
                  type="button"
                  data-toggle="collapse"
                  data-target="#shop-menu"
                >
                  <span className="navbar-toggler-icon">
                    <i className="fas fa-bars"></i>
                  </span>
                </button>
              </div>

            

              
            </div>
          </div>

          
        </div>
      </div>
    );
  }
}
function AuthLinks () {
  let user = localStorage.getItem('user');
  user = JSON.parse(user) || {};

  if (user.id) {

    const menu = (
      <Menu>
        <Menu.Item>
          <Link to="/profile"><i className="fas fa-user fa-fw"></i> Profile</Link>
        </Menu.Item>
        <Menu.Item onClick={() => logout()}>
          <Link to="/"><i className="fas fa-sign-out-alt fa-fw"></i> Logout</Link>
        </Menu.Item>
      </Menu>
    );

    return (
      <Fragment>
        <Dropdown overlay={menu}>
       
          <a type="button" className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          <i class="fas fa-user"></i> {user.name} <i className="fas fa-chevron-down"></i>
          </a>
        </Dropdown>
      </Fragment>
    )
  }

  return (
    <Fragment>
    
      <Link to="/login" className="top-content-size color-white">
        <i className="fas fa-sign-in-alt"></i> Login 
      </Link>
      <span className="space">|</span>
      <Link to="/register" className="top-content-size color-white">
        <i className="fas fa-user-plus"></i> Register
      </Link>
    </Fragment>
  )
}

function logout() {
  localStorage.removeItem('user');
}
export default Navbar;

