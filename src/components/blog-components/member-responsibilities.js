import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

import * as homeServices from "../../Services/home-page-services";

// testing
class FounderDetails extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";

    return (
      <div>
        <div className="blog-area margin-top-65">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7 col-md-9">
                <div className="blog-content">
                  <h2> சீடர்களின் பொறுப்புகள் </h2>
                  <p>
                    உமவிய்ய ஆட்சி முடிய அப்பாஸிகள் ஆட்சி ஆரம்பமாயிற்று. அது
                    அறிவிற்கொரு முக்கிய காலமாயிற்றெனக் கூறலாம். எல்லாம் கலைகளும்
                    ஆங்கிருந்தே அக்காலை வெளியாயின என்பது வெள்ளிடைமலை.
                  </p>
                  <p>
                    அப்பாஸிய ஆட்சிக் காலத்திலே ஆட்சி வித்திரணமானதோடு மொழி
                    விரிவும், வளர்ச்சியும் அடைந்தது. செய்யுள் நூல்கள்
                    இயற்றுவதிலும், நூதன இலக்கியங்கள் இயற்றுவதிலும்
                    முயற்சியெடுத்தார்கள். அப்பாஸியப் புரட்சியினால் விவேகமும்,
                    அறிவு வளர்ச்சியும் எழுத்தாளர்களைக் கொண்டு விரிவுபட்டன.
                  </p>
                  <p>
                    உமவிய்ய ஆட்சி முடிய அப்பாஸிகள் ஆட்சி ஆரம்பமாயிற்று. அது
                    அறிவிற்கொரு முக்கிய காலமாயிற்றெனக் கூறலாம். எல்லாம் கலைகளும்
                    ஆங்கிருந்தே அக்காலை வெளியாயின என்பது வெள்ளிடைமலை.
                  </p>
                  <p>
                    அப்பாஸிய ஆட்சிக் காலத்திலே ஆட்சி வித்திரணமானதோடு மொழி
                    விரிவும், வளர்ச்சியும் அடைந்தது. செய்யுள் நூல்கள்
                    இயற்றுவதிலும், நூதன இலக்கியங்கள் இயற்றுவதிலும்
                    முயற்சியெடுத்தார்கள். அப்பாஸியப் புரட்சியினால் விவேகமும்,
                    அறிவு வளர்ச்சியும் எழுத்தாளர்களைக் கொண்டு விரிவுபட்டன.
                  </p>
                  <div className="container collection-banner margin-top-30">
                    <h3>You may also like these books</h3>
                    <hr></hr>
                    <div className="row">
                      <div className="col-xl-4 col-lg-6 ">
                        <div className="img_div gridm-height gridmat-top">
                          <img
                            className="book_img"
                            src={publicUrl + "assets/img/books/Irai Arulpa.jpg"}
                            alt=""
                          />
                          <div className="member-content">
                            <span class="date">
                              <i class="fa fa-calendar"></i> 10 January 2018{" "}
                            </span>
                            <h6 className="img-title"> இறையருட்பா </h6>
                            <p className="img-content">
                              {" "}
                              பிரபஞ்சமே ஓருடல். அதிற் காண்பன அதன் அங்கங்கள்.
                              கடவுளெனத் தனித் தொருவன் ...{" "}
                            </p>
                            <Link className="btn member-btn color-orange" to="construction">
                              View Details
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-6">
                        <div className="img_div gridm-height gridmat-top">
                          <img
                            className="book_img"
                            src={
                              publicUrl +
                              "assets/img/books/Iraivali Syed Moulana.jpg"
                            }
                            alt=""
                          />
                          <div className="member-content">
                            <span class="date">
                              <i class="fa fa-calendar"></i> 10 January 2018{" "}
                            </span>
                            <h6 className="img-title">
                              {" "}
                              இறைவலிய் ஸெய்யித்...{" "}
                            </h6>
                            <p className="img-content">
                              எம் தந்தை நாயகம் ஜமாலிய்யா ஸெய்யித் யாஸீன் மௌலானா
                              அல்ஹாஷிமிய் ...{" "}
                            </p>
                            <Link className="btn member-btn color-orange" to="construction">
                              View Details
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-6 gridm-top  gridmat-top">
                        <div className="img_div gridm-height">
                          <img
                            className="book_img"
                            src={
                              publicUrl + "assets/img/books/Kurunji Suvai.jpg"
                            }
                            alt=""
                          />
                          <div className="member-content">
                            <span className="date">
                              <i className="fa fa-calendar"></i> 10 January 2018{" "}
                            </span>
                            <h6 className="img-title"> குறிஞ்சிச் சுவை </h6>
                            <p className="img-content">
                              {" "}
                              எங்கணுமழகு, சுற்றிப் பார்க்குமிடனெல்லாம் சுவைதரும்
                              எழிற் காட்சிகள். பலப்பல...{" "}
                            </p>
                            <Link className="btn member-btn color-orange" to="construction">
                              View Details
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 divt-top">
                <h6 className="aside-widget">Lastest News</h6>
                <hr></hr>
                <div className="row sparate-div">
                  <div className="col-lg-3 col-3">
                    <img
                      className="aside-widget-user"
                      src={publicUrl + "assets/img/s-news-post/img-01.jpg"}
                      alt=""
                    />
                  </div>
                  <div className="col-lg-9 col-9">
                    <span className="aside-widget-user-content">
                      {" "}
                      Watch Magda Szubanski Read from He Award
                    </span>
                    <br></br>
                    <span className="aside-widget-posted">
                      {" "}
                      Posted on 24 March 2016
                    </span>
                  </div>
                </div>

                <div className="row sparate-div">
                  <div className="col-lg-3 col-md-3 col-sm-3 col-3">
                    <img
                      className="aside-widget-user"
                      src={publicUrl + "assets/img/s-news-post/img-02.jpg"}
                      alt=""
                    />
                  </div>
                  <div className="col-lg-9 col-md-9 col-sm-9 col-9">
                    <span className="aside-widget-user-content">
                      {" "}
                      Watch Magda Szubanski Read from He Award
                    </span>
                    <br></br>
                    <span className="aside-widget-posted">
                      {" "}
                      Posted on 24 March 2016
                    </span>
                  </div>
                </div>

                <div className="row sparate-div">
                  <div className="col-lg-3 col-md-3 col-sm-3 col-3">
                    <img
                      className="aside-widget-user"
                      src={publicUrl + "assets/img/s-news-post/img-03.jpg"}
                      alt=""
                    />
                  </div>
                  <div className="col-lg-9 col-md-9 col-sm-9 col-9">
                    <span className="aside-widget-user-content">
                      {" "}
                      Watch Magda Szubanski Read from He Award
                    </span>
                    <br></br>
                    <span className="aside-widget-posted">
                      {" "}
                      Posted on 24 March 2016
                    </span>
                  </div>
                </div>
                <div className="row sparate-div">
                  <div className="col-lg-3 col-md-3 col-sm-3 col-3">
                    <img
                      className="aside-widget-user"
                      src={publicUrl + "assets/img/s-news-post/img-04.jpg"}
                      alt=""
                    />
                  </div>
                  <div className="col-lg-9 col-md-9 col-sm-9 col-9">
                    <span className="aside-widget-user-content">
                      {" "}
                      Watch Magda Szubanski Read from He Award
                    </span>
                    <br></br>
                    <span className="aside-widget-posted">
                      {" "}
                      Posted on 24 March 2016
                    </span>
                  </div>
                </div>

                <div className="row sparate-div">
                  <img
                    className="aside-widget-banner"
                    src={publicUrl + "assets/img/banner/add-banner-1.jpg"}
                    alt=""
                  />
                </div>
                <div className="row sparate-div p-3">
                <h6 className="aside-widget">Books of the year </h6>
                <hr></hr>
                <div className="row sparate-div">
                  <div className="col-lg-3 col-3">
                    <img
                      className="aside-widget-user"
                      src={publicUrl + "assets/img/books-year-list/img-01.jpg"}
                      alt=""
                    />
                  </div>
                  <div className="col-lg-9 col-9">
                  <span className="aside-widget-user-content">
                    My Brilliant Friend The Neapolitan Novels, Book One
                  </span> 
                  <br></br>
                  <span className="color-orange">BY ELENA FERRANTE</span>
                  </div>
                </div>

                <div className="row sparate-div">
                  <div className="col-lg-3 col-md-3 col-sm-3 col-3">
                    <img
                      className="aside-widget-user"
                      src={publicUrl + "assets/img/books-year-list/img-02.jpg"}
                      alt=""
                    />
                  </div>
                  <div className="col-lg-9 col-md-9 col-sm-9 col-9">
                  <span className="aside-widget-user-content">
                    As night fell, something stirred the darkness.
                  </span> 
                  <br></br>
                  <span className="color-orange">BY MEG CADDY</span>
                  </div>
                </div>

                <div className="row sparate-div">
                  <div className="col-lg-3 col-md-3 col-sm-3 col-3">
                    <img
                      className="aside-widget-user"
                      src={publicUrl + "assets/img/books-year-list/img-03.jpg"}
                      alt=""
                    />
                  </div>
                  <div className="col-lg-9 col-md-9 col-sm-9 col-9">
                  <span className="aside-widget-user-content">
                    The Rosie Project: Don Tillman 1
                  
                  </span> 
                  <br></br>
                  <span className="color-orange">BY GRAEME SIMSION</span>
                  </div>
                </div>
                <div className="row sparate-div">
                  <div className="col-lg-3 col-md-3 col-sm-3 col-3">
                    <img
                      className="aside-widget-user"
                      src={publicUrl + "assets/img/books-year-list/img-04.jpg"}
                      alt=""
                    />
                  </div>
                  <div className="col-lg-9 col-md-9 col-sm-9 col-9">
                    <span className="aside-widget-user-content">
                    Heartbreaking, joyous, traumatic, intimate and
                    
                  </span> 
                  <br></br>
                  <span className="color-orange">BY MAGDA SZUBANSKI</span>
                  </div>
                </div>
              </div>
              </div>

              <div className="author-social-area margin-top-50">
                <div className="post-taglist">
                  <ul>
                    <li>
                      <a href="#">artical</a>
                    </li>
                    <li>
                      <a href="#">magazine</a>
                    </li>
                    <li>
                      <a href="#">lifestyle</a>
                    </li>
                    <li>
                      <a href="#">responsive</a>
                    </li>
                  </ul>
                </div>
                <div className="author-social-list">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-thumbs-o-up" /> Like{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook-f" /> Share{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter" /> Tweet{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-pinterest" /> Tweet{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* reply-area start  */}

            {/* reply-area end  */}
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default FounderDetails;
