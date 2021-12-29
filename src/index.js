import React, { Component } from "react";
import ReactDOM from "react-dom";

import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Switch,
} from "react-router-dom";
import HomeV1 from "./components/home-v1";
import Founder from "./components/founder";
import Books from "./components/books";
import Videos from "./components/videos";
import Gallery from "./components/gallery";
import Audio from "./components/audio";
import EventList from "./components/events";
import SearchPage from "./components/search";
import MemberResponsibilities from "./components/member-responsibilities";
import ConstructionDetails from "./components/construction";
import Spiritual from "./components/spiritual";
import Blog from "./components/blog-details";
import Login from "./components/loginForm";

import Register from "./components/registerForm";
import WebTv from "./components/webTv";
import Forgot from "./components/forgot";
import ChangePassword from "./components/change_password";
import ProfileDetails from "./components/profile";

import GetEmail from "./components/getemail";
import webtv_videos from "./components/webtv_videos";
import single_event from "./components/single_event";
import ResendVerificationPage from "./components/ResendVerificationPage";
import ems_live from "./components/ems_live";

import "antd/dist/antd.css";
import Contact from "./components/contact";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Root extends Component {
  render() {
    return (
      <Router>
        <HashRouter basename="/">
          <div>
            <Switch>
              <Route exact path="/" component={HomeV1} />
              <Route path="/founder" component={Founder} />
              <Route path="/books" component={Books} />
              <Route path="/videos" component={Videos} />
              <Route path="/gallery" component={Gallery} />
              <Route path="/events" component={EventList} />
              <Route path="/audios" component={Audio} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/forgot" component={Forgot} />
              <Route path="/change_password" component={ChangePassword} />
              <Route path="/getemail" component={GetEmail} />
              <Route
                exact
                path="/member-responsibilities"
                component={MemberResponsibilities}
              />
              <Route
                exact
                path="/construction"
                component={ConstructionDetails}
              />
              <Route path="/blog" component={Blog} />
              <Route path="/spiritual" component={Spiritual} />
              <Route path="/webtv" component={WebTv} />
              <Route path="/profile" component={ProfileDetails} />
              <Route path="/webtv_videos" component={webtv_videos} />
              <Route path="/single_event/:eventid" component={single_event} />
              <Route path="/search/:query" component={SearchPage} />
              <Route
                exact
                path="/resend-verification/:id"
                component={ResendVerificationPage}
              />

              {/* <Route path="/home-v2" component={HomeV2} />
              <Route path="/home-v3" component={HomeV3} />
              <Route path="/home-v4" component={HomeV4} />
              <Route path="/home-v5" component={HomeV5} />
              <Route path="/about" component={About} />
              <Route path="/blog" component={Blog} />
              <Route path="/blog-details" component={BlogDetails} />
              <Route path="/product-details" component={SingleProducts} />
              <Route path="/shoping-cart" component={ShoppingCart} />
              <Route path="/faq" component={Faq} />
              <Route path="/error" component={Error} />
              <Route path="/comming-soon" component={CommingSoon} />
              <Route path="/collection" component={Collection} />
              <Route path="/collection-list" component={CollectionList} />
              <Route path="/collection-full" component={CollectionFull} /> */}
              <Route path="/contact" component={Contact} />
            </Switch>
          </div>
        </HashRouter>
       
      </Router>
    );
  }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById("stoon"));
