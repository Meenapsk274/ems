import React, { Component } from "react";
import Navbar from "./global-components/navbar";
import PageHeader from "./global-components/page-header";
import { Link, Redirect } from "react-router-dom";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import * as authServices from "../Services/authService";
import Footer from "./global-components/footer";

import {
  Form,
  Input,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
  DatePicker,
  message,
  Modal,
} from "antd";
const { Option } = Select;
// import * as employeeServices from "../services/employeeServices";

class EditBio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: "",
      region: "",
      dateOfBirth: "",
      dateOfBaiyath: "",
      username: "",
      user: {}
    };
    
  }
  async componentDidMount() {
    const user = localStorage.getItem("user");
    this.setState({ user: JSON.parse(user) });
    console.log(user);
  }
  selectCountry(val) {
    this.setState({ country: val });
  }

  handleBirthChange = (date, dateString) => {
    this.setState({ dateOfBirth: dateString });
  };
  handleBaiyathChange = (date, dateString) => {
    this.setState({ dateOfBaiyath: dateString });
  };

  selectRegion(val) {
    this.setState({ region: val });
  }
  

  success = () => {
    message.success({
      content:
        "Registration Completed Successfully. Please check your registered email for email verification !",
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
    values.dateOfBirth = this.state.dateOfBirth;
    values.dateOfBaiyath = this.state.dateOfBaiyath;
    values.userid = this.state.user.id;

    try {
      const response = await authServices.editUser(values);
      if (response.status >= 200) {
        if (response.data === 1) {
          console.log("success");
          this.success();
          this.props.history.push("/profile");
        } else {
          this.failure();
          this.props.history.push("/edit_bio");
        }

      } else {
        this.props.history.push("/edit_bio");
      }
    } catch (ex) {
      const errors = { ...this.state.errors };
      // errors.name = ex.response.data;
      this.setState({ errors });
    }
  };

  render() {
    const { user } = this.state;
    const qualification = ["S.S.L.C", "Engineer", "UG", "PG", "Doctorate[Phd]"];
    const bloodGroup = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];
    const { country, region, username } = this.state;
    let publicUrl = process.env.PUBLIC_URL + "/";
    return (
      <div>
        <Navbar />
        <PageHeader headertitle="Register" />
        <section className="">
          <div className="container">
            <div className="row register-form margin-top-40">
            <div className="col-xl-3 col-lg-4 col-md-6 ">
                <div className="user-div margin-top-20">
                    <h4 className="user3-details profile-head profile-detail">Personal Details</h4>
                    <img className="user-img" src={publicUrl + "assets/img/user.png"} alt=""/>
                    <div className="user3-details">
                        <p><span className="user-title">Name:</span> {user.name}</p>
                        <p><span className="user-title">E-Mail:</span> {user.email}</p> 
                    </div>
                </div>
            </div>
              <div className="col-xl-9 col-lg-8 col-md-12">
                <div className="account-wall div-border" id="register_form">
                
                  <h3 className="text-center">Edit Your Account Details</h3>
                  <Form
                    name="register"
                    onFinish={this.onFinish}
                    // initialValues={{
                    //   residence: ["zhejiang", "hangzhou", "xihu"],
                    //   prefix: "86",
                    // }}
                    scrollToFirstError
                  >
                    <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <Form.Item
                          name="fatherName"
                          label="Father Name"
                          value={user.father_name}
                          rules={[
                            {
                              required: true,
                              message: "Please input your Father Name!",
                            },
                          ]}
                          hasFeedback
                        >
                          <Input />
                        </Form.Item>
                      </div>
                      <div className="col-md-6">
                        <Form.Item
                          name="qualification"
                          label="Qualification"
                          rules={[
                            {
                              required: true,
                              message: "Please select your qualification!",
                            },
                          ]}
                          hasFeedback
                        >
                          <Select
                            className="ant-input"
                            placeholder="select your qualification"
                          >
                            {qualification.map((qualification, i) => (
                              <Option key={i} value={qualification}>
                                {qualification}
                              </Option>
                            ))}
                          </Select>
                        </Form.Item>
                      </div>
                    </div>

                    <div className="row"> 
                      <div className="col-lg-6 col-md-6">
                        <Form.Item
                          name="ug"
                          label="UG Specialization"
                          hasFeedback
                        >
                          <Input />
                        </Form.Item>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <Form.Item
                          name="pg"
                          label="PG Specialization"
                          hasFeedback
                        >
                          <Input />
                        </Form.Item>
                      </div>
                    </div>
                    <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <Form.Item
                          name="dateOfBirth"
                          label="Date Of Birth"
                          hasFeedback
                        >
                          <DatePicker onChange={this.handleBirthChange} />
                        </Form.Item>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <Form.Item
                          name="dateOfBaiyath"
                          label="Date Of Baiyath"
                          hasFeedback
                        >
                          <DatePicker onChange={this.handleBaiyathChange} />
                        </Form.Item>
                      </div>
                      
                    </div>
                    <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <Form.Item name="bloodGroup" label="Blood Group">
                          <Select
                            className="ant-input"
                            placeholder="select your blood group"
                            hasFeedback
                          >
                            {bloodGroup.map((bg, j) => (
                              <Option key={j} value={bg}>
                                {bg}
                              </Option>
                            ))}
                          </Select>
                        </Form.Item>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <Form.Item
                          name="gender"
                          label="Gender"
                          rules={[
                            {
                              required: true,
                              message: "Please select your gender!",
                            },
                          ]}
                          hasFeedback
                        >
                          <Select
                            className="ant-input"
                            placeholder="select your gender"
                          >
                            <Option value="male">Male</Option>
                            <Option value="female">Female</Option>
                          </Select>
                        </Form.Item>
                      </div>
                    </div>
                    <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <Form.Item
                          name="yaseeni"
                          label="Are you a Yaseeni ?"
                          hasFeedback
                        >
                          <Select className="ant-input" placeholder="select">
                            <Option value="1">Yes</Option>
                            <Option value="0">No</Option>
                          </Select>
                        </Form.Item>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <Form.Item
                          name="country"
                          label="Country(Currently Residing)"
                          rules={[
                            {
                              required: true,
                              message: "Please select your Country!",
                            },
                          ]}
                          hasFeedback
                        >
                          <CountryDropdown
                            value={country}
                            onChange={(val) => this.selectCountry(val)}
                          />
                        </Form.Item>
                      </div>
                      
                      
                    </div>
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <Form.Item
                          name="state"
                          label="State(Currently Residing)"
                          rules={[
                            {
                              required: true,
                              message: "Please select your State!",
                            },
                          ]}
                          hasFeedback
                        >
                          <RegionDropdown
                            blankOptionLabel="No country selected"
                            defaultOptionLabel="Now select a region"
                            country={country}
                            value={region}
                            onChange={(val) => this.selectRegion(val)}
                          />
                        </Form.Item>
                      </div>
                      <div className="col-md-6">
                        <Form.Item
                          name="city"
                          label="City(Currently Residing)"
                          hasFeedback
                        >
                          <Input />
                        </Form.Item>
                      </div>
                    </div>
                    <div className="row">
                      
                      <div className="col-lg-6 col-md-6">
                        <Form.Item
                          name="contactNo"
                          label="Contact Number"
                          hasFeedback
                        >
                          <Input />
                        </Form.Item>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <Form.Item
                          name="alternateNo"
                          label="Alternate Number"
                          value={user.alt_phone}
                          hasFeedback
                        >
                          <Input />
                        </Form.Item>
                      </div>
                    </div>
                    <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <Form.Item
                          name="presentAddress"
                          label="Present Address"
                          hasFeedback
                        >
                          <Input.TextArea />
                        </Form.Item>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <Form.Item
                          name="permanentAddress"
                          label="Permanent Address"
                          hasFeedback
                        >
                          <Input.TextArea />
                        </Form.Item>
                      </div>
                      
                      
                    </div>
                    
                    <div className="row">
                      <Form.Item>
                        <center>
                          <Button
                            block
                            type="danger"
                            htmlType="submit"
                            className="btn btn-block btn-style-1 register-btn"
                          >
                            SUBMIT
                          </Button>
                        </center>
                      </Form.Item>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default EditBio;
