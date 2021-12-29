import React, { Component } from "react";
import { Link } from "react-router-dom";

class Page_headerV2 extends Component {
  render() {
    let HeaderTitle = this.props.headertitle;
    let publicUrl = process.env.PUBLIC_URL + "/";
    let Subheader = this.props.subheader ? this.props.subheader : HeaderTitle;
    console.log(HeaderTitle);
    return (
      <div className="breadcrumb-area breadcrumb-area-webtv">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="breadcrumb-inner d-flex flex-column flex-md-row justify-content-md-between justify-content-center">
                <h2 className="page-title page-title-webtv color-white">
                  {HeaderTitle}
                </h2>
                <ul className="page-list">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <span className="">{Subheader}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Page_headerV2;
