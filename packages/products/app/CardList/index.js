/** @jsx jsx */
import React from "react";
import { jsx, css } from "emotion";

import Card from "../Card";

import store from "../store/store";

//--------Emotion  Styles -------/

const headingStyle = css`
  margin: 1rem 0.5rem 0rem 0.5rem;
`;
const cardList = css`
  display: flex;
  margin: 5px;
  flex-flow: row wrap;
`;
const CardList = props => {
  const productList = props.data.allProducts.map((product, index) => (
    <Card key={index} product={product} store={store} />
  ));

  return (
    <React.Fragment>
      <h2 css={headingStyle}>Products</h2>
      <div css={cardList}>{productList}</div>
    </React.Fragment>
  );
};

export default CardList;
