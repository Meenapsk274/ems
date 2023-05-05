import React, { Component } from "react";
import { Link, useLocation } from "react-router-dom";
import Comments from "./comments";
import * as homeServices from "../../Services/home-page-services";

class BlogDetails extends React.Component {
  state = {
    blog: "",
    title: "",
  };
  async componentDidMount() {
    const blogTitle = this.props.blogTitle;

    const response = await homeServices.getBlogContent(blogTitle);
    if (response.status >= 200) {
      this.setState({ blog: response.data });
    }
  }
  async componentDidUpdate() {
    const blogTitle = this.props.blogTitle;

    const response = await homeServices.getBlogContent(blogTitle);
    if (response.status >= 200) {
      this.setState({ blog: response.data });
    }
  }
  toCamelCase(s) {
    return s.replace(/\w\S*/g, function (t) {
      return t.charAt(0).toUpperCase() + t.substr(1).toLowerCase();
    });
  }

  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";
    const { blog, title } = this.state;
    const renderHTML = (escapedHTML: String) =>
      React.createElement("div", {
        dangerouslySetInnerHTML: { __html: escapedHTML },
      });
    return (
      <div className="blog-area margin-top-65">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="row">
                <div className="col-md-12">
                  <div className="blog-content">
                    <h2>{this.toCamelCase(title)}</h2>
                    <img src="assets/img/media.jpg"></img>
                    {/* {renderHTML({ blog })} */}
                    <div
                      dangerouslySetInnerHTML={{
                        __html: blog,
                      }}
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

export default BlogDetails;
