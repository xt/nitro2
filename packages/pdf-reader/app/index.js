import React, { Component } from "react";
import { render } from "react-dom";
import ExecutionEnvironment from "exenv";
import PDFReader from "./PDFReader";

if (ExecutionEnvironment.canUseDOM) {
  let props = {
    width: "600",
    height: "400",
    docId: "12345"
  };
  render(<PDFReader {...props}/>, document.getElementById("pdfReader"));
}
