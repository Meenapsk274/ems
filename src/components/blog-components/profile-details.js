import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class FounderDetails extends Component {
  state = {
    user: {}
  }

  async componentDidMount() {
    const user = localStorage.getItem('user');
    this.setState({ user: JSON.parse(user) });
  }

  render() {
    const { user } = this.state;
    let publicUrl = process.env.PUBLIC_URL + "/";

    if (!user) {
      return <Redirect to='/login'/>
    }

    return (
      
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
                                <a className="change_link" href="#/change_password">Change password?</a>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-9 col-md-8 margin-top-10">
                        <div className="user-div user3-details">
                            <h4 className="profile-head">About</h4>
                            <div className="row ">
                              <div className="col-lg-6 col-md-12">
                                <div className="row profilediv margin_right">
                                  <div className="col-lg-6 col-md-6 col-6">
                                    <p className="user-title1">Father Name: </p>
                                  </div>
                                  <div className="col-lg-6 col-md-6 col-6">
                                    <p className="user-title1 "> {user.father_name}</p>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-6 col-md-6 col-6">
                                    <p className="user-title1"> Contact No: </p>
                                  </div>
                                  <div className="col-lg-6 col-md-6 col-6">
                                    <p className="user-title1 "> {user.phone}</p>
                                  </div>
                                </div>
                                <div className="row profilediv margin_right">
                                  <div className="col-lg-6 col-md-6 col-6">
                                    <p className="user-title1">Date Of Birth: </p>
                                  </div>
                                  <div className="col-lg-6 col-md-6 col-6">
                                    <p className="user-title1 ">  {user.dob}</p>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-6 col-md-6 col-6">
                                    <p className="user-title1">Date Of Baiyath: </p>
                                  </div>
                                  <div className="col-lg-6 col-md-6 col-6">
                                    <p className="user-title1 ">  {user.dobaiyath}</p>
                                  </div>
                                </div>
                                
                                <div className="row profilediv margin_right">
                                  <div className="col-lg-6 col-md-6 col-6">
                                    <p className="user-title1">Gender: </p>
                                  </div>
                                  <div className="col-lg-6 col-md-6 col-6">
                                    <p className="user-title1 text-capitalize"> {user.gender}</p>
                                  </div>
                                </div>   
                                <div className="row">
                                  <div className="col-lg-6 col-md-6 col-6">
                                    <p className="user-title1">Country: </p>
                                  </div>
                                  <div className="col-lg-6 col-md-6 col-6">
                                    <p className="user-title1 "> {user.country}</p>
                                  </div>
                                </div>
                                <div className="row profilediv margin_right">
                                  <div className="col-lg-6 col-md-6 col-6">
                                    <p className="user-title1">State: </p>
                                  </div>
                                  <div className="col-lg-6 col-md-6 col-6">
                                    <p className="user-title1 "> {user.state}</p>
                                  </div>
                                </div> 
                                <div className="row">
                                  <div className="col-lg-6 col-md-6 col-6">
                                    <p className="user-title1">Permanent Addres: </p>
                                  </div>
                                  <div className="col-lg-6 col-md-6 col-6">
                                  <p className="user-title1 "> {user.permanent_address}</p>
                                  </div>
                                </div>   
                              </div>
                              
                              <div className="col-lg-6">
                              <div className="row profilediv set-div-width">
                                <div className="col-lg-6 col-md-6 col-6">
                                  <p className="user-title1">Qualification: </p>
                                </div>
                                <div className="col-lg-6 col-md-6 col-6">
                                 <p className="user-title1 "> {user.qualification}</p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6 col-md-6 col-6">
                                  <p className="user-title1">Alternate No: </p>
                                </div>
                                <div className="col-lg-6 col-md-6 col-6">
                                  <p className="user-title1 "> {user.alt_phone}</p>
                                </div>
                              </div>
                              <div className="row profilediv set-div-width">
                                <div className="col-lg-6 col-md-6 col-6">
                                 <p className="user-title1">UG: </p>
                                </div>
                                <div className="col-lg-6 col-md-6 col-6">
                                  <p className="user-title1 "> {user.ug}</p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-6 col-md-6 col-6">
                                 <p className="user-title1">PG: </p>
                                </div>
                                <div className="col-lg-6 col-md-6 col-6">
                                  <p className="user-title1 "> {user.pg}</p>
                                </div>
                              </div>
                              <div className="row profilediv set-div-width">
                                <div className="col-lg-6 col-md-6 col-6">
                                  <p className="user-title1">Blood Group: </p>
                                </div>
                                <div className="col-lg-6 col-md-6 col-6">
                                  <p className="user-title1 "> {user.blood}</p>
                                </div>
                              </div>   
                              <div className="row">
                                <div className="col-lg-6 col-md-6 col-6">
                                 <p className="user-title1">Yaseeni: </p>
                                </div>
                                <div className="col-lg-6 col-md-6 col-6">
                                  <p className="user-title1 "> {user.yaseeni}</p>
                                </div>
                              </div>
                              <div className="row profilediv set-div-width">
                              <div className="col-lg-6 col-md-6 col-6">
                                <p className="user-title1">city: </p>
                              </div>
                              <div className="col-lg-6 col-md-6 col-6">
                               <p className="user-title1 "> {user.city}</p>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-6 col-md-6 col-6">
                               <p className="user-title1">Present Address: </p>
                              </div>
                              <div className="col-lg-6 col-md-6 col-6">
                               <p className="user-title1 "> {user.present_address}</p>
                              </div>
                              <div className="col-lg-6 col-md-6 col-6">
                               
                              </div>
                              <div className="col-lg-6 col-md-6 col-6">
                                <a href="#/edit_bio" className="btn btn-blue hcolor-white"><i class="fa fa-plus" aria-hidden="true"></i> Add</a>
                              </div>
                            </div>
                            
                      </div>
                    </div>
                           
                  </div>
                </div>			
              </div>  
                {/* reply-area start  */}

                {/* reply-area end  */}
                <br />
              </div>
            </div>
          </div>
        </div>
      
    );
  }
}

export default FounderDetails;
