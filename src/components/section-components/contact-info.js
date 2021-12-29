import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class ContactInfo extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";

    return (
      <div>
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              width="100%"
              height="100%"
              id="gmap_canvas"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15680.500897423031!2d78.5536635!3d10.7248237!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb28ba7a98bb04632!2sJamiya%20Yaseen%20Arabic%20College!5e0!3m2!1sen!2sin!4v1639475848483!5m2!1sen!2sin"
            />
          </div>
        </div>
        {/* contact area start  */}
        <div className="contact-info margin-top-80">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-title text-center">
                  <h3>CONTACT US FOR ANY QUERY</h3>
                </div>
              </div>
            </div>
            <div className="row ">
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="single-contact-box">
                  <div className="row ">
                    <div className="col-xl-6 col-lg-3 col-md-4 col-3">
                      <div className="icon float-right contact-icon">
                        <i className="icon-call-header" /> 
                      </div>
                    </div>
                    <div className="col-6 Address-title-div">
                      <span className="Address-title ">Mobile</span> <br></br>
                      <a href="tel:9943786268">0091 9943786268</a> <br></br>
                    </div>
                  </div> 
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-6 col-12 " id="icon2">
                <div className="single-contact-box">
                  <div className="row" >
                    <div className="col-xl-6 col-lg-3 col-md-4 col-3">
                      <div className="icon float-right contact-icon ">
                        <i className="fa fa-envelope-open" />
                      </div>
                    </div>
                    <div className="col-6 Address-title-div">
                      <span className="Address-title ">Email</span> <br></br>
                      <a href="mailto:contactus@emsmedia.net">contactus@emsmedia.net</a><br></br>
                      <a href="mailto:admin@emsmedia.net">admin@emsmedia.net</a>
                    </div>
                  </div> 
                </div>
              </div>

              <div className="col-xl-6 col-lg-5 col-md-6 col-sm-6 col-12 contact-third-div">
                <div className="single-contact-box">
                  <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-4 col-3">
                      <div className="icon float-right contact-icon">
                        <i className="fas fa-map-marker-alt" />
                      </div>
                    </div>
                    <div className="col-lg-9 col-md-8 col-9 Address-title-div">
                    <span className="Address-title ">Address</span> <br></br>
                      <span>
                      Jamiya Yaseen Arabic College
                      <br /> Madhrasatul Hasanain Fee Jamiya Yaseen Arabic College,
                      <br/>Seethapatti, Pulangulathupatti.post, Tirchy.Dt, Ammapettai, Tamil Nadu 620009. 
                      
                      <br /> 
                      </span>
                    </div>
                  </div> 
                </div>
              </div>
  
            </div>
          </div>
        </div>
        {/* contact area end  */}
      </div>
    );
  }
}

export default ContactInfo;
