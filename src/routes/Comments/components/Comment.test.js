"use strict";

import React from "react";
import "react-dom";
import TestUtils from "react-addons-test-utils";
import Comment from "./Comment";

describe("Comment", () => {

  let tree = TestUtils.renderIntoDocument(<Comment author="YB">Salut</Comment>);

  it("has an author property", function() {

    let node = TestUtils.findRenderedDOMComponentWithTag(tree,"h2");

    expect(node.textContent).toEqual("YB");

  });

  it("has a text content", function() {

    let node = TestUtils.findRenderedDOMComponentWithTag(tree,"span");

    expect(node.textContent.trim()).toEqual("Salut");

  });

});
