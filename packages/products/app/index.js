import React, { Component } from "react";
import { hydrate } from "react-dom";
import fetch from "isomorphic-fetch";
import CardList from "./CardList";
import mockResponse from "./data/mock-data.js";
import ExecutionEnvironment from "exenv";

// export default function getProducts() {
//   return fetch("./data/data.json").then(res => res.json());
// }

if (ExecutionEnvironment.canUseDOM) {
  // getProducts().then(data => {
  //   hydrate(<CardList data={data} />, document.getElementById("card-list"));
  // });

  hydrate(
    <CardList data={mockResponse} />,
    document.getElementById("card-list")
  );
}
