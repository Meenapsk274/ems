import React from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import Footer from "./global-components/footer";
import { Link } from "react-router-dom";
import { Form, Input, Button, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Component } from "react";
import * as authServices from "../Services/authService";

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        email: "",
        password: "",
      },
      errors: {},
      value: 2,
    };
  }

  onFinish = async (values) => {
    try {
      const response = await authServices.checkUser(values);
      if (response.status >= 200) {
        if (response.data &&
          response.data[0] &&
          response.data[0].status == 0
        ) {
          message.error({
            content: "Invalid email or password",
            duration: 10,
            className: "ant-message-error-bg",
            style: {
              marginTop: "40vh",
            },
          });
          this.props.history.push("/login");
        } else if (
          response.data &&
          response.data[0] &&
          response.data[0].status == 3
        ) {
          this.props.history.push(
            `/resend-verification/${response.data[0].id}`
          );
        } else if (
          response.data &&
          response.data[0] &&
          response.data[0].status == 1
        ) {
          delete response.data.records[0].password;
          localStorage.setItem(
            "user",
            JSON.stringify(response.data.records[0])
          );
          this.props.history.push("/profile");
        }
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
        <PageHeader headertitle="Login  " />
        <div className="align-center">
          <section className="loginBlock">
            <div className="container container-login">
              <div className="row">
                <div className=" col-xl-4 col-lg-3 col-md-3 col-sm-2 col-12 col-md-offset-4"></div>
                <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8 col-12 col-md-offset-4">
                  <div className="account-wall div-border">
                    <i className="fas fa-user-lock register-user"></i>
                    <h3 className="pb-2">Login</h3>
                    <Form
                      name="normal_login"
                      className="login-form"
                      initialValues={{ remember: true }}
                      onFinish={this.onFinish}
                    >
                      <Form.Item
                        name="email"
                        rules={[
                          {
                            required: true,
                            message: "Please input your E-mail!",
                          },
                        ]}
                        hasFeedback
                      >
                        <Input
                          prefix={
                            <UserOutlined className="site-form-item-icon" />
                          }
                          type="text"
                          placeholder="User Name"
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
                      <Form.Item>
                        <Button
                          block
                          type="danger"
                          htmlType="submit"
                          className="btn btn-style-1"
                        >
                          Log in
                        </Button>
                        <center>
                          <a className="login-form-forgot" href="#/getemail">
                            Forgot Password?
                          </a>
                        </center>
                      </Form.Item>
                      <hr></hr>
                      <center>
                        <span>New to EMS Media?</span>
                      </center>
                      <Form.Item>
                        <center>
                          <a
                            class="text-center new-account btn btn-grey"
                            href="#/register"
                          >
                            Create Your EMS Account
                            <i class="fas fa-chevron-right first-chevron"></i>
                            <i class="fas fa-chevron-right sec-chevron"></i>
                          </a>
                        </center>
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

export default LoginForm;
