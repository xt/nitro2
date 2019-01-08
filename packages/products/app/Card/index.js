/** @jsx jsx */
import React from "react";
// import LikeAction from "../LikeAction/index";

import { jsx, css } from "@emotion/core";
import { from } from "zen-observable";
// import createCache from "@emotion/cache";

const cardStyle = css`
max-width: 400px;
background: #fff;
padding: 0.5em;
margin: 1em 0;
border-radius: 4px;
`;

const buttonStyle = css`
  background: #009999 url(http://i.imgur.com/RWKrr8S.png);
  background-repeat: no-repeat;
  background-position: 2em 50%;
  background-size: 2em;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  color: #FFF;
  font-weight: bold;
  font-size: 13px;
  padding: 1em 3em;
  padding-left: 6em;
  text-transform: uppercase;
  display: block;
  width: 100%;
  &:hover {
    background-color: #006B6B;
    background-size: 2.2em;
    background-position: 1.5em 50%;
  }
`;
const ulStyle = css`
  list-style-type: none;
  padding: 0;
  margin-top:0;
  display:flex;
  justify-content: space-between;
`;

const liStyle = css`
list-style: none;
padding: 0.3em 0;
border-radius: 1em;
`;

const imageStyle = css`

`;

const nameStyle = css`
  margin-bottom:0;
`

const Card = props => {
  const { product } = props;
  return (
    <div css={cardStyle}>
      <img css={imageStyle} src={product.picUrl} />
       <h4 css={nameStyle}>{product.productName}</h4>
       <aside>
        <ul css={ulStyle}>
          <li css={liStyle}>Price: Rs {product.price}</li>
          <li>In Stock</li>
        </ul>
        <button css={buttonStyle}>Add to Cart  {/* <LikeAction /> */}</button>
      </aside>
    </div>
  );
};

export default Card;
