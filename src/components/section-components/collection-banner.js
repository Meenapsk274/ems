import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import * as homeServices from "../../Services/home-page-services";

class CollectionBanner extends Component {
  constructor() {
    super();
    this.state = {
      banner: [],
      isOpen: false,
      videoId: "",
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal = (value) => () => {
    this.setState({ videoId: value });
    this.setState({ isOpen: true });
  };
  async componentDidMount() {
    
    const result1 = await homeServices.getWebBanner();
    console.log(result1);
    this.setState({ banner: result1.data.records });
  }
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    const { banner } = this.state;
    var settings = {
      dots: true,
      arrows: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };


    return (
      <div className="container collection-banner">
        <div className="row">
         
          <div className="col-lg-6">
          {banner.map((ban) => (
            ban.id==3 ?
            <a href={ban.url} target={ban.target_status==0 ? '_blank' : ''}><img src={ban.image} alt="" /></a>
           : '' ))}
          </div>
          <div className="col-lg-6">
          {banner.map((ban) => (
             ban.id==4 ?
            <a href={ban.url} target={ban.target_status==0 ? '_blank' : ''}><img src={ban.image} alt="" /></a>
           : '' ))}
            
          </div>
 
        </div>
      </div>

      // <div className="collection-banner">
      //   <div className="container">
      //     <div className="row">
      //       <div className="col-lg-6 stone-go-top">
      //         <div className="collection-style-01 margin-top-20">
      //           <div className="thumb">
      //             <img src={publicUrl + "assets/img/image 6.png"} alt="" />
      //           </div>
      //         </div>
      //       </div>
      //       <div className="col-lg-6 stone-go-top">
      //         <div className="collection-style-01 margin-top-20">
      //           <div className="thumb">
      //             <img src={publicUrl + "assets/img/image 7.png"} alt="" />
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default CollectionBanner;
