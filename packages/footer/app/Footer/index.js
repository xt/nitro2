/**@jsx jsx */
import React from "react";
import { jsx, css } from "emotion";

const footerStyle = css`
  background: #0d0d0d;
  padding: 0 1em;
  height: 30px;
  display: flex;
  align-items: center;
  font-weight: bold;
  color: #fff;
`;
const Footer = props => {
  return <div css={footerStyle}>Copyright 2019 Nitro2</div>;
};
export default Footer;
