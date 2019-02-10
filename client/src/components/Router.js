import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import ClubPicker from "./ClubPicker";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import NotFound from "./NotFound";

const Router = () => (
  <BrowserRouter>
    <div>
      <Switch>
        {/* <Route exact path="/" component={ClubPicker} /> */}
        <Route path="/club/:clubname" component={App} />
        <Route exact path="/:clubname/login" component={LoginForm} />
        <Route path="/signup" component={SignUpForm} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Router;
