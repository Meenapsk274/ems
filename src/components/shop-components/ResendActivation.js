import React, { Component } from "react";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import { message } from "antd";
import Pagination from "../global-components/pagination";
import { paginate } from "../../paginate";
import * as homeServices from "../../Services/home-page-services";


class ResendActivation extends Component {

  async componentDidMount() {
    this.callResendActivation();
  }
  
  async callResendActivation(id) {
    const result = await homeServices.resendActivation({ id: this.props.id });
    if (result.data == 1) {
      message.success({
        content:
          "Email sent Successfully. Please check your registered email for email verification !",
        duration: 10,
        className: "custom-class",
        style: {
          marginTop: "40vh",
        },
      });
    }
  }

  render() {    
    return (
      <div className="customer_login">
          <div className="container">
              <div className="row">
                  <div className="col-lg-8 col-md-8 offset-2 bg-light my-5 py-4">
                      <div className="account_form">
                          <h5 className="text-center ">You will receive an email verification for activation.</h5>
                          <button className="btn btn-success btn-block" onClick={() => this.callResendActivation()}>Resend Activation Email</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default ResendActivation;
