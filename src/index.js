"use strict";

import "bootstrap";

import React from 'react';
import ReactDOM from "react-dom";
import { Router, hashHistory } from 'react-router';

import App from "./components/App";
import Calendar from "./route/Calendar/";
import Course from "./route/Course/";
import Grades from "./route/Grades/";
import Messages from "./route/Messages/";
import Profile from "./route/Profile/";

const rootRoute = {

  component:"div",

  childRoutes:[{

    path:"/",

    component:App,

    childRoutes:[ Calendar, Course, Grades, Messages, Profile ]

  }]

};

ReactDOM.render(
  <Router history={hashHistory} routes={rootRoute} />,
  document.getElementById("content")
);
