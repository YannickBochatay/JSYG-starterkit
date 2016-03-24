"use strict";

import React from "react";
import "react-dom";
import TestUtils from "react-addons-test-utils";
import CommentForm from "./CommentForm";

describe("CommentForm", () => {

  let component = TestUtils.renderIntoDocument(<CommentForm/>);

  let input = TestUtils.findRenderedDOMComponentWithTag(component,"input");
  let textarea = TestUtils.findRenderedDOMComponentWithTag(component,"textarea");
  let button = TestUtils.findRenderedDOMComponentWithTag(component,"button");
  let form = TestUtils.findRenderedDOMComponentWithTag(component,"form");

  it("has 4 fields", function() {

    expect(input).toBeTruthy();
    expect(textarea).toBeTruthy();
    expect(button).toBeTruthy();
    expect(form).toBeTruthy();
  });

  input.value = "YB";
  TestUtils.Simulate.change(input);

  textarea.value = "Salut";
  TestUtils.Simulate.change(textarea);

  //TestUtils.Simulate.submit(form);

  it("can change his values", function() {

    var author = component.state.author;
    var text = component.state.text;

    expect(author).toEqual("YB");
    expect(text).toEqual("Salut");

  });

});
