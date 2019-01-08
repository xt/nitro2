/** @jsx jsx */
import React from "react";
import AddToCartAction from "../AddToCartAction/index";
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
  const { product, store } = props;
  return (
    <div css={cardStyle}>
      <img css={imageStyle} src={product.picUrl} />
       <h4 css={nameStyle}>{product.productName}</h4>
       <aside>
        <ul css={ulStyle}>
          <li css={liStyle}>Price: Rs {product.price}</li>
          <li>In Stock</li>
        </ul>
        <AddToCartAction store={store} item={product}/>
      </aside>
    </div>
  );
};

export default Card;
