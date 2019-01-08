/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";

import Card from "../Card";

import store from "../store/store";

//--------Emotion  Styles -------/


const cardList = css `
  display: flex;
  margin-left:5px;
  flex-flow: row wrap;
`
const CardList = props => {
  const productList = props.data.allProducts.map((product, index) => (
    <Card key={index} product={product} store={store}/>
  ));

  return (
    <React.Fragment>
      <header><h1>Products</h1></header>
      <div css={cardList}>{productList}</div>
    </React.Fragment>
  );
};

export default CardList;
