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
      errors: {},
      value: 2,
    };
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
  onFinish = async (values) => {
    let queries = queryString.parse(this.props.location.search);

    values.id = queries.id;

    try {
      const response = await authServices.changePassword(values);
      if (response.status >= 200) {
        console.log("success");
        this.success();
        this.props.history.push("/login");
        // } else {
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
    return (
      <div>
        <Navbar />
        <PageHeader headertitle="Change Password" />
        <div className="align-center">
          <section className="loginBlock">
            <div className="container container-login">
              <div className="row">
                <div className=" col-xl-4 col-lg-3 col-md-3 col-sm-2 col-12 col-md-offset-4"></div>
                <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8 col-12 col-md-offset-4">
                  <div className="account-wall div-border">
                  <i class="fa fa-key register-user" aria-hidden="true"></i>
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
          </section>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ChangePassword;
