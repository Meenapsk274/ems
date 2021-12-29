import React, { Component } from "react";
import { Link } from "react-router-dom";

class FounderDetails extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";

    return (
      
      <div className="blog-area margin-top-65">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-9">
              <div className="blog-content">
                
                
                <img src={publicUrl + "assets/img/books/page-under-construction1.jpg"} alt="" width="600"/>
                
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

                {/* reply-area start  */}

                {/* reply-area end  */}
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FounderDetails;
