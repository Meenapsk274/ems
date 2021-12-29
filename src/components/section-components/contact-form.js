import React, { Component } from "react";
import {
  Form,
  Input,
  InputNumber,
  Button,
  Checkbox,
  Alert,
  message,
} from "antd";

import * as contactServices from "../../Services/contact-page-services";

const { TextArea } = Input;

class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "aaaaa",
      phone: "",
      msg: "",
      email: "",
      topic: "",
      success: "",
    };
    this.baseState = this.state;
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  onFinish = async (values) => {
    // const [form] = Form.useForm();
    try {
      const response = await contactServices.saveContact(values);
      this.setState({ name: "bbbbb" });
      if (response.status >= 200) {
        this.setState({
          success:
            "Thanks for contacting us! We will be in touch with you shortly.",
        });
      }
    } catch (ex) {
      const errors = { ...this.state.errors };
      // errors.name = ex.response.data;
      this.setState({ errors });
    }
  };

  render() {
    const { success, name, topic, phone, msg, email } = this.state;
    console.log(name);
    return (
      <div className="contact-form text-center padding-top-80 padding-bottom-80">
        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8 contact-div">
              <span>
                {success && <Alert message={success} type="success" />}
              </span>
              <h4 className="contact-header text-center">தொடர்பு கொள்ள</h4>

              <Form
                name="basic"
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
              >
                <div className="row">
                  <div className="col-md-6">
                    <Form.Item
                      name="name"
                      rules={[
                        {
                          required: true,
                          message: "Please input your username!",
                        },
                      ]}
                    >
                      <Input
                        name="name"
                        onChange={this.handleChange}
                        placeholder="Name"
                        value={this.state.name}
                      />
                    </Form.Item>
                  </div>
                  <div className="col-md-6">
                    <Form.Item
                      name="phone"
                      rules={[
                        {
                          required: true,
                          message: "Please input your phone!",
                        },
                      ]}
                    >
                      <Input
                        name="phone"
                        onChange={this.handleChange}
                        placeholder="Phone"
                      />
                    </Form.Item>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <Form.Item
                      name="email"
                      rules={[
                        {
                          type: "email",
                          message: "The input is not valid E-mail!",
                        },
                        {
                          message: "Please input your E-mail!",
                        },
                      ]}
                    >
                      <Input
                        name="email"
                        onChange={this.handleChange}
                        placeholder="E-mail"
                      />
                    </Form.Item>
                  </div>
                  <div className="col-md-6">
                    <Form.Item
                      name="topic"
                      rules={[
                        {
                          message: "Please input your Topic!",
                        },
                      ]}
                    >
                      <Input
                        name="topic"
                        onChange={this.handleChange}
                        placeholder="Subject"
                      />
                    </Form.Item>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 ">
                    <Form.Item
                      name="msg"
                      rules={[
                        {
                          required: true,
                          message: "Please input your Message!",
                        },
                      ]}
                    >
                      <TextArea
                        name="msg"
                        onChange={this.handleChange}
                        rows={4}
                        placeholder="Message"
                      />
                    </Form.Item>
                  </div>
                </div>
                <Form.Item>
                  <center>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="contact-btn text-center"
                    >
                      Send your message
                    </Button>
                  </center>
                </Form.Item>
              </Form>

              {/* <form onSubmit={this.handleSubmit} className="contact_form">
                <div className="form-row">
                  <div className="form-group col-md-6">
                    {this.renderInput("name", "Name")}
                  </div>
                  <div className="form-group col-md-6">
                    {this.renderInput("phone", "Phone")}
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    {this.renderInput("email", "Email")}
                  </div>
                  <div className="form-group col-md-6">
                    {this.renderInput("topic", "Topic")}
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-12">
                    {this.renderTextarea("msg", "Message")}
                  </div>
                </div>
                <button type="submit" className="btn btn-contact">
                  Send Message
                </button>
              </form> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactForm;
