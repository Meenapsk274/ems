import React from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import Footer from "./global-components/footer";
import { Link } from "react-router-dom";
import { Form, Input, Button, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import queryString from "query-string";
import { Component } from "react";
import * as authServices from "../Services/authService";

class ChangePassword extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        old_password: "",
        password: "",
      },
      user: {},
      errors: {},
      value: 2,
    };
  }
  async componentDidMount() {
    const user = localStorage.getItem("user");
    this.setState({ user: JSON.parse(user) });
    console.log(user);
  }
  success = () => {
    message.success({
      content: "Password has been updated successfully !",
      duration: 10,
      className: "custom-class",
      style: {
        marginTop: "40vh",
      },
    });
  };
  failure = () => {
    message.success({
      content:
        "Try Again!",
      duration: 10,
      className: "custom-class",
      style: {
        marginTop: "40vh",
      },
    });
  };
  onFinish = async (values) => {
    let queries = queryString.parse(this.props.location.search);

    values.id = queries.id;

    values.userid = this.state.user.id;

    try {
      const response = await authServices.changePassword(values);
      if (response.status >= 200) {
        if (response.data === 1) {
          console.log("success");
          this.success();
          this.props.history.push("/profile");
         } else {
          this.failure();
          this.props.history.push("/change_password");
         }
      } else {
        this.props.history.push("/change_password");
      }
    } catch (ex) {
      const errors = { ...this.state.errors };
      // errors.name = ex.response.data;
      this.setState({ errors });
    }
  };

  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    const { user } = this.state;
    return (
      <div>
        <Navbar />
        <PageHeader headertitle="Change Password" />
        <div className="blog-area margin-top-65">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-2 col-md-12"></div>
            <div className="col-lg-12 col-md-12 profile-content">
                <div className="row">
                    <div className="col-lg-3 col-md-4">
                        <div className="user-div">
                          <h4 className="user3-details profile-head profile-detail">Personal Details</h4>
                            <img className="user-img" src={publicUrl + "assets/img/user.png"} alt=""/>
                            <div className="user3-details">
                              <p><span className="user-title">Name:</span> {user.name}</p>
                              <p><span className="user-title">E-Mail:</span> {user.email}</p> 
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-8 margin-top-10 align-center">
                      <div className="row user-div user3-details justify-content-center">
                      <div className="col-xl-6 col-lg-5 col-md-6 col-sm-8 col-12">
                  <div className="account-wall div-border">
                  {/* <i class="fa fa-key register-user" aria-hidden="true"></i> */}
                    <h3 className="pb-2">Change Password</h3>
                    <Form
                      name="normal_login"
                      className="login-form"
                      initialValues={{ remember: true }}
                      onFinish={this.onFinish}
                    >
                      <Form.Item
                        name="old_password"
                        rules={[
                          {
                            required: true,
                            message: "Please input your Old Password!",
                          },
                        ]}
                      >
                        <Input
                          prefix={
                            <LockOutlined className="site-form-item-icon" />
                          }
                          type="password"
                          placeholder="Old Password"
                        />
                      </Form.Item>
                      <Form.Item
                        name="password"
                        rules={[
                          {
                            required: true,
                            message: "Please input your Password!",
                          },
                        ]}
                      >
                        <Input
                          prefix={
                            <LockOutlined className="site-form-item-icon" />
                          }
                          type="password"
                          placeholder="Password"
                        />
                      </Form.Item>
                      <Form.Item
                        name="confirmPassword"
                        rules={[
                          {
                            required: true,
                            message: "Please input your Confirm Password!",
                          },
                          ({ getFieldValue }) => ({
                            validator(_, value) {
                              if (
                                !value ||
                                getFieldValue("password") === value
                              ) {
                                return Promise.resolve();
                              }
                              return Promise.reject(
                                new Error(
                                  "The two passwords that you entered do not match!"
                                )
                              );
                            },
                          }),
                        ]}
                      >
                        <Input
                          prefix={
                            <LockOutlined className="site-form-item-icon" />
                          }
                          type="password"
                          placeholder="Confirm Password"
                        />
                      </Form.Item>
                      <Form.Item>
                        <Button
                          block
                          type="danger"
                          htmlType="submit"
                          className="btn btn-style-1"
                        >
                          Submit
                        </Button>
                      </Form.Item>
                    </Form>
                  </div>
                </div>
                      </div>
                    </div>			
                  </div>  
                <br />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ChangePassword;
