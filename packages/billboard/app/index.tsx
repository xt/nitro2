import * as React from "react";
import { hydrate } from "react-dom";
import ItemList from "./ItemList";
import mockResponse from "./data/mock-data.js";

hydrate(<ItemList data={mockResponse} />, document.getElementById("billboard"));
