import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class Category extends Component {
  

  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";

    return (
      <div className="instagram-area margin-top-30 bg-white">
        <div className="container">
          <div className="row ems-heading padding-top-20 padding-bottom-20">
            <div className="col-lg-12 ">
              <h3>Our Categories</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 ">
              <div className="categories">
                <div className="row">
                  <div className="col-lg-7 col-md-6">
                    <h5>நூற்கள்</h5>
                    <ul>
                      <li>அகராதி</li>
                      <li>உபதேசக் கோர்வை</li>
                      <li>கவிதை நூற்கள்</li>
                      <li>ஞான விளக்க நூற்கள்</li>
                    </ul>
                  </div>
                  <div className="col-lg-5 col-md-5">
                    <img
                      src={publicUrl + "assets/img/chapter.png"}
                      alt="Card gap"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="categories">
                <div className="row">
                  <div className="col-lg-7  col-md-6">
                    <h5>நிகழ்ச்சிகள்</h5>
                    <ul>
                      <li>புகைப்படங்கள்</li>
                      <li>காணொளி</li>
                      <li>ஆடியோ</li>
                      <li>வலைப்பதிவு</li>
                    </ul>
                  </div>
                  <div className="col-lg-5  col-md-5">
                    <img
                      src={publicUrl + "assets/img/chapter.png"}
                      alt="Card gap"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 ">
              <div className="categories">
                <div className="row">
                  <div className="col-lg-7  col-md-6">
                    <h5>கல்வி</h5>
                    <ul>
                      <li>அஸ்ஸலாமு அலைக்கும்</li>
                      <li>மதரஸா நிறுவனர் பற்றி</li>
                      <li>கல்விக்கு உதவிடுவோம்</li>
                    </ul>
                  </div>
                  <div className="col-lg-5  col-md-5">
                    <img
                      src={publicUrl + "assets/img/chapter.png"}
                      alt="Card gap"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 ">
              <div className="categories">
                <div className="row">
                  <div className="col-lg-7  col-md-6">
                    <h5>மனிதா</h5>
                    <ul>
                      <li>மஹான்கள்</li>
                      <li>அமுத மொழிகள்</li>
                      <li>கல்விக்கு உதவிடுவோம்</li>
                      <li>அறிவுக் களஞ்சியம்</li>
                      <li>ஐயமும் - தெளிவும்</li>
                    </ul>
                  </div>
                  <div className="col-lg-5  col-md-5">
                    <img
                      src={publicUrl + "assets/img/chapter.png"}
                      alt="Card gap"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 ">
              <div className="categories">
                <div className="row">
                  <div className="col-lg-7  col-md-6">
                    <h5>ஒரே உள்ளமை</h5>
                    <ul>
                      <li>ஏக உள்ளமை</li>
                      <li>காணொளி</li>
                      <li>ஆடியோ</li>
                      <li>வலைப்பதிவு</li>
                    </ul>
                  </div>
                  <div className="col-lg-5  col-md-5">
                    <img
                      src={publicUrl + "assets/img/chapter.png"}
                      alt="Card gap"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 ">
              <div className="categories">
                <div className="row">
                  <div className="col-lg-7  col-md-6">
                    <h5>அறிவுக் களஞ்சியம்</h5>
                    <ul>
                      <li>தமிழ்</li>
                      <li>விருதுகள்</li>
                      <li>நூல் விமர்சனங்கள் </li>
                    </ul>
                  </div>
                  <div className="col-lg-5  col-md-5">
                    <img
                      src={publicUrl + "assets/img/chapter.png"}
                      alt="Card gap"
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

export default Category;
