import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form, Input, Button, message } from "antd";
import * as authServices from "../../Services/authService";

class Footer_v1 extends Component {
  componentDidMount() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    const minscript = document.createElement("script");
    minscript.async = true;
    minscript.src = publicUrl + "assets/js/main.js";

    document.body.appendChild(minscript);
  }
  success = () => {
    message.success({
      content: "Your E-mail has been subscribed!",
      duration: 10,
      className: "custom-class",
      style: {
        marginTop: "20vh",
      },
    });
  };
  onFinish = async (values) => {
    try {
      const response = await authServices.sendSubscriberEmail(values);
      if (response.status >= 200) {
        this.success();
      }
    } catch (ex) {
      const errors = { ...this.state.errors };
      // errors.name = ex.response.data;
      this.setState({ errors });
    }
  };

  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    // let imgattr = "Footer logo";

    return (
      <footer className="footer-area footer-style-1">
        <div className="footer-top padding-bottom-50">
          <div className="row footer-address-bar-webtv">
            <div className="container">
              <div className="row mt-25">
                <div className=" col-xl-5 col-lg-5 col-md-6  mobile-location">
                  <h4 className="sub_text mt-1">Subscribe to Our Newsletter</h4>
                </div>
               
                <div className="col-xl-7 col-lg-7 col-md-6 mob-newsletter subscribe-div">
                <div className="row">
                  <Form
                    name="normal_login"
                    className="login-form sub_form"
                    initialValues={{ remember: true }}
                    onFinish={this.onFinish}
                  >
                    <div className="input-group mb-3">
                    
                      <div className="col-lg-10 col-md-9 col-sm-6 col-8">
                      <Form.Item
                        name="email"
                        rules={[
                          {
                            required: true,
                            message: "Please input your E-Mail!",
                            placeholder: "Please input your E-Mail!",
                          },
                        ]}
                        hasFeedback
                      >
                       <Input
                        name="email"
                        
                        placeholder="Please input your E-Mail"
                      />
                      </Form.Item>
                      </div> 
                      <div className="col-lg-2 col-md-3 col-sm-6 col-4 subscribe-btn">
                      <Form.Item>
                        <Button
                          type="danger"
                          htmlType="submit"
                          className="btn btn-style-1 subscribe-sub"
                        >
                          Subscribe
                        </Button>
                      </Form.Item>
                      </div>
                      </div>
                    
                  </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
          <div className="row">
         
            <div className="col-lg-3 col-md-6">
              <div className="widget widget_nav_menu">
                <h4 className="widget-title">OUR WEBSITE LINKS</h4>

                <ul className="stone-go-top">
                  <li>
                    <a target="_blank" href="http://emsmedia.net/magazine/">
                      {" "}
                      <i className="fa fa-angle-right" />
                      EMS Magazine
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://awniyyabookstore.com/">
                      {" "}
                      <i className="fa fa-angle-right" />
                      Awniyya Books Store
                    </a>
                  </li>

                  <li>
                    <a target="_blank" href="http://yaseenrali.com/">
                      {" "}
                      <i className="fa fa-angle-right" />
                      Yaseenrali
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="#/webtv">
                      {" "}
                      <i className="fa fa-angle-right" />
                      EMS Web TV channel
                    </a>
                  </li>
                  <li>
                    <Link to="/">
                      {" "}
                      <i className="fa fa-angle-right" />
                      EMS Media
                    </Link>
                  </li>
                 
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="widget widget_nav_menu">
                <h4 className="widget-title">USEFUL LINKS</h4>
                <ul className="stone-go-top">
                  <li>
                    <Link to="#/books">
                      <i className="fa fa-angle-right" />  நூற்கள்
                    </Link>
                  </li>
                  <li>
                    <Link to="#/gallery">
                      <i className="fa fa-angle-right" />
                      புகைப்படங்கள்
                    </Link>
                  </li>
                  <li>
                    <Link to="#/videos">
                      <i className="fa fa-angle-right" />
                      காணொளி
                    </Link>
                  </li>
                  <li>
                    <Link to="#/audios">
                      <i className="fa fa-angle-right" />
                      ஆடியோ
                    </Link>
                  </li>
                  <li>
                    <Link to="#/events">
                      <i className="fa fa-angle-right" />
                      நிகழ்வுகள்
                    </Link>
                  </li>
                  
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="widget widget_nav_menu">
                <h4 className="widget-title">INFORMATION</h4>
                <ul className="stone-go-top">
                  <li>
                    <Link to="/contact">
                      <i className="fa fa-angle-right" /> Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/login">
                      <i className="fa fa-angle-right" />
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link to="/register">
                      <i className="fa fa-angle-right" />
                      Register
                    </Link>
                  </li>
                  <li>
                    <Link to="/construction">
                      <i className="fa fa-angle-right" />
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/construction">
                      <i className="fa fa-angle-right" />
                      Terms & Conditions
                    </Link>
                  </li>
                  
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="widget">
                <h4 className="widget-title">DOWNLOAD APP</h4>
                <Link to="/">
                  <img
                    className="playstore-btn"
                    src={publicUrl + "assets/img/apple.png"}
                    alt=""
                  />
                </Link>
                &nbsp;
                <Link to="/">
                  <img
                    className="playstore-btn"
                    src={publicUrl + "assets/img/google-play.png"}
                    alt=""
                  />
                </Link>
                <h4 className="widget-title mt-4">FOLLOW US</h4>
                <div className="text-secondary">
                <a target="_blank" className="mr-3" href="https://www.facebook.com/emsabaimedia">
                      {" "}
                      <i className="fab fa-facebook fa-lg"></i>
                    </a>
                    <a target="_blank" className="mr-3" href="https://www.youtube.com/emsmedia">
                      {" "}
                      <i class="fab fa-youtube-square fa-lg"></i>
                    </a>
                    <a target="_blank" className="mr-3" href="https://twitter.com/media_ems">
                      {" "}
                      <i className="fab fa-twitter fa-lg"></i>
                    </a>
                    
                    <a target="_blank" className="mr-3" href="https://www.instagram.com/emsabaimedia">
                      {" "}
                      <i class="fab fa-instagram-square fa-lg"></i>
                    </a>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-6 align-self-center">
                <p>
                  Copyright © 2020{" "}
                  <a href="/">
                    <span className="color-black">EMS Media </span> All Rights
                    Reserved
                  </a>
                </p>
              </div>
              <div className="col-md-6 align-right">
                <p>
                  Powered by{" "}
                  <Link to="https://ilifetech.in/" target="_black">
                    <span className="color-black">ilife Technologies.</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer_v1;
