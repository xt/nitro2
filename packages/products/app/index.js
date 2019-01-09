import React, { Component } from "react";
import { hydrate } from "react-dom";
import CardList from "./CardList";
import mockResponse from "./data/mock-data.js";
import ExecutionEnvironment from "exenv";

//import styles from './style.scss';

if (ExecutionEnvironment.canUseDOM) {
  hydrate(
    <CardList data={mockResponse} />,
    document.getElementById("card-list")
  );
}
