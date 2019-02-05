/** @jsx jsx */
import * as React from "react";
import { jsx, css } from "@emotion/core"

const cardStyle = css`
  max-width: 400px;
  background: #fff;
  padding: 0.25rem;
  margin-top: 1rem;
  border-radius: 4px;
`;

const ulStyle = css`
  list-style-type: none;
  padding: 0;
  margin-top: 0;
  display: flex;
  justify-content: space-between;
`;

const liStyle = css`
  list-style: none;
  padding: 0.3em 0;
  border-radius: 1em;
`;

const imageStyle = css`
  height: 350px;
`;

const nameStyle = css`
  margin-bottom: 0;
`;

const Card = (props: any) => {
  const { product } = props;
  return (
    <div css={cardStyle}>
      <img css={imageStyle} src={product.picUrl} />
      <h4 css={nameStyle}>{product.productName}</h4>
      <aside>
        <ul css={ulStyle}>
          <li css={liStyle}>Price: Rs {product.price}</li>
        </ul>
      </aside>
    </div>
  );
};

export default Card;
