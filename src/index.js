"use strict";

import "bootstrap";

import React from 'react';
import ReactDOM from "react-dom";
import { Router, hashHistory } from 'react-router';

import './stubs/COURSES';
import App from "./components/App";
import Calendar from "./routes/Calendar/";
import Course from "./routes/Course/";
import Grades from "./routes/Grades/";
import Messages from "./routes/Messages/";
import Profile from "./routes/Profile/";

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
