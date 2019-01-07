import React, { Component } from "react";
import { render } from "react-dom";
import ExecutionEnvironment from "exenv";
import Footer from "./Footer";

if (ExecutionEnvironment.canUseDOM) {
  render(<Footer />, document.getElementById("footer"));
}
