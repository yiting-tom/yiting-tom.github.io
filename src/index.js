
import React from "react";
import ReactDOM from "react-dom";
// Notice: to use router in Github pages, we use hashRouter here
import { HashRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";
import "res/data/stories.js";
// pages
import Index from "views/Index.js";
// import LandingPage from "views/LandingPage.js";
// others


ReactDOM.render(
  <HashRouter>    
    <Switch>
      <Route path={'/index'} render={(props) => <Index {...props} />} />
      
      {/* <Route
        path={'/landing-page'}        
        render={(props) => <LandingPage {...props} />}
      /> */}
      <Redirect to={'/index'} />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
