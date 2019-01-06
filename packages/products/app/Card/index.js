/** @jsx jsx */
import React from "react";
// import LikeAction from "../LikeAction/index";

import { jsx, css } from "@emotion/core";
import { from } from "zen-observable";
// import createCache from "@emotion/cache";

const cardStyle = css`
  border: thick solid #f00;
  display: flex;
  flex: 1;
  box-sizing: border-box;
  padding: 10px;
  cursor: pointer;
  background: #eaeaea;
`;
const nameStyle = css`
  font-family: san-serif;
  font-size: 1rem;
  color: #ff0066;
`;
const Card = props => {
  const { product } = props;
  return (
    <div css={cardStyle}>
      <h3 css={nameStyle}>{product.productName}</h3>
      <img src={product.picUrl} />
      <div>Rs {product.proce}</div>
      {/* <LikeAction /> */}
    </div>
  );
};

export default Card;
