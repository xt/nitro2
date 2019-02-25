import * as React from "react";
import { hydrate } from "react-dom";
import mockResponse from "./data/mock-data.js";

//const mockResponse = React.lazy(() => import('./data/mock-data'));
const LazyItemList = React.lazy(() =>  import('./ItemList'));
const App = () => {
  return (
    <React.Suspense fallback={<div> loading...</div>}>
      <LazyItemList data={mockResponse} />
    </React.Suspense>
  );
}
hydrate(<App />, document.getElementById("billboard"));
