import React from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import Footer from "./global-components/footer";
import { Link } from "react-router-dom";
import { Form, Input, Button, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Component } from "react";
import * as authServices from "../Services/authService";

class GetMail extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        email: "",
      },
      errors: {},
      value: 2,
    };
  }
  success = () => {
    message.success({
      content: "Please check your email to update the password",
      duration: 10,
      className: "custom-class",
      style: {
        marginTop: "20vh",
      },
    });
  };

  onFinish = async (values) => {
    try {
      const response = await authServices.sendEmail(values);
      if (response.status >= 200) {
        this.success();
        this.props.history.push("/profile");
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
        <PageHeader headertitle="Forgot Password" />
        <div className="align-center">
          <section className="loginBlock">
            <div className="container container-login">
              <div className="row">
                <div className=" col-xl-4 col-lg-3 col-md-3 col-sm-2 col-12 col-md-offset-4"></div>
                <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8 col-12 col-md-offset-4">
                  <div className="account-wall div-border">
                    <h3 className="pb-2">Login</h3>
                    <Form
                      name="normal_login"
                      className="login-form"
                      initialValues={{ remember: true }}
                      onFinish={this.onFinish}
                    >
                      <Form.Item
                        name="email"
                        label="E-Mail"
                        rules={[
                          {
                            required: true,
                            message: "Please input your E-Mail!",
                          },
                        ]}
                        hasFeedback
                      >
                        <Input />
                      </Form.Item>

                      <Form.Item>
                        <Button
                          block
                          type="danger"
                          htmlType="submit"
                          className="btn btn-style-1"
                        >
                          Continue
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

export default GetMail;
