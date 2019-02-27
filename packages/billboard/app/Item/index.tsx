/** @jsx jsx */
import * as React from "react";
import { jsx, css } from "@emotion/core"

const rowStyle = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin:50px 0 0px 15%;
  &:last-child{
    margin-bottom:50px;
  }
  &[row-type="even"] {
    &>div:first-child {
      order: 2;
      &[col-type="text"] {
        padding:0 0px 0 50px;
      }
    }
  }
  & * {
    font-family: Arial, Helvetica, sans-serif;
  }
`;

const colStyle = css`
    flex-basis:100%;
   
    &[col-type="text"] {
      padding:0 50px 0 0px;
    }
`;

const imageStyle = css`
  height: 500px;
  width:542px;
`;

const buttonStyle = css`
  cursor: pointer;
  display: inline-block;  
  height: 40px;
  margin-right: 40px;
  position: relative;
  line-height: 2.5em;
  padding-left: 1em;
  padding-right: 1em;
  background: black;
  color: white;
  text-decoration:none;
  font-weight:bold;
  &:after {
    // triangle hover color
    border-left: 20px solid black;
    // the triangle
    content: "";
    position: absolute;
    border-bottom: 20px solid transparent;
    border-top: 20px solid transparent;
    height: 0px;
    width: 0px;
    margin-right: -20px;
    right: 0; 
  }
  &:hover, &:active{
    background: yellow;
    color: black;
    &:after {
      // triangle hover
      border-left: 20px solid yellow;
    }
  }
`;




const Item = (props: any) => {
  const { item } = props;
  const rowType = (item.order === 2) ? 'even' : 'odd';
  return (
    <div css={rowStyle} row-type={rowType}>
      <div col-type="text" css={colStyle}>
        <h1>{item.title}</h1>
        <p>{item.description}</p>

        <a href="/New-Arrivals" css={buttonStyle}>Find more in store</a>
      </div>
      <div css={colStyle}>
        <img css={imageStyle} src={item.image} />
      </div>
    </div>
  );
};

export default Item;
