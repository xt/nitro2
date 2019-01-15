/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";
import Card from "../Card";

//--------Emotion  Styles -------/

const headingStyle = css`
  margin: 1rem 0.5rem 0rem 0.5rem;
`;
const cardList = css`
  display: flex;
  margin: 5px;
  flex-flow: row wrap;
`;

interface Data {
  data: Array<Product>;
}

interface Product {
  sku: string;
  productName: string;
  picUrl: string;
  price: string;
}

const CardList = (props: Data) => {
  const productList = props.data.map((product: Product, index: any) => (
    <Card key={index} product={product} />
  ));

  return (
    <React.Fragment>
      <h2 css={headingStyle}>My best products</h2>

      <div css={cardList}>{productList}</div>
    </React.Fragment>
  );
};

export default CardList;
