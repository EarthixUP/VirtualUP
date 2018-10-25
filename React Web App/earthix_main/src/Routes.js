import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import AppliedRoute from "./components/AppliedRoute";
import Signup from "./containers/Signup";
import EarthixScans from "./containers/EarthixScans";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

export default ({ childProps }) =>
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <AppliedRoute path="/earthixhome" exact component={Home} props={childProps} />
    <UnauthenticatedRoute path="/earthixhome/login" exact component={Login} props={childProps} />
    <UnauthenticatedRoute path="/earthixhome/signup" exact component={Signup} props={childProps} />
    <AuthenticatedRoute path="/earthixhome/earthixscans" exact component={EarthixScans} props={childProps}/>
    { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
    </Switch>;
