"use strict";

import React from "react";
import "react-dom";
import TestUtils from "react-addons-test-utils";
import Comment from "./Comment";
import { Card, CardTitle, CardText } from 'react-toolbox/lib/card';

describe("Comment", () => {

  let tree = TestUtils.renderIntoDocument(<Comment author="YB">Salut</Comment>);

/*
  it("has an author property", function() {

    let result = TestUtils.findRenderedComponentWithType(tree,Card);

    TestUtils.scryRenderedComponentsWithType(result,CardTitle);


    expect(result).toBeTruthy();

  });*/

  it("has a text content", function() {

    let elmt = TestUtils.findRenderedComponentWithType(tree,CardText);

    expect(elmt).toBeTruthy();

  });

});
