import React from "react";
import { jsx, css } from "@emotion/core";

import Card from "../Card";

//--------Emotion  Styles -------/

const CardList = props => {
  const productList = props.data.allProducts.map((product, index) => (
    <Card key={index} product={product} />
  ));

  return <React.Fragment>{productList}</React.Fragment>;
};

export default CardList;
