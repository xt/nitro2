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
    <div className="card">
   
      <img src={product.picUrl} />
       <h4 className="card-header--title">{product.productName}</h4>
       <aside>
        <ul>
          <li>Price: Rs {product.price}</li>
          <li>In Stock</li>
        </ul>
        <button>Add to Cart  {/* <LikeAction /> */}</button>
      </aside>
    
  
   
    </div>
  );
};

export default Card;
