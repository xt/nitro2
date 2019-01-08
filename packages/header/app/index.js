import React, { Component } from "react";
import { hydrate } from "react-dom";
import ExecutionEnvironment from "exenv";
import Header from "./Header";


if (ExecutionEnvironment.canUseDOM) {
  hydrate(
    <Header />, document.getElementById("header")
  );
}
