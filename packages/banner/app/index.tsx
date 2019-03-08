/**@jsx jsx */
import React from 'react';
import { hydrate } from "react-dom";
import { jsx, css } from "@emotion/core";

const wrapperStyle = css`
background: #e2e2e2 url(https://d29u17ylf1ylz9.cloudfront.net/shopick-preview/shopick/img/slider/slider-1/1.jpg) no-repeat;
background-size: cover;
background-position: 50%;
display: flex;
width: 100%;
height: 100%;
min-height:90vh;
align-items: center;
justify-content: center;
& section {
    height: auto;
    width: 530px;
    padding: 30px;
    font-size: 1.3em;
    margin: auto;
    background-image: linear-gradient(
      to left,
      rgba(68, 68, 68, 0),
      rgba(68, 68, 68, 1)
    );
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
    margin: 0 auto 0 15%;

    & p {
      font-size: 0.75em;
    }
    & h1, h3 {
      text-transform: uppercase;
      margin-top: 5px;
    }
  }


@media screen and (max-width: 768px) {
    background-position: 70%;
}
`;

const buttonStyle = css`
  background: #009999 url(http://i.imgur.com/RWKrr8S.png);
  background-repeat: no-repeat;
  background-position: 2em 50%;
  background-size: 2em;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  color: #fff;
  font-weight: bold;
  font-size: 13px;
  padding: 1em 3em;
  padding-left: 6em;
  text-transform: uppercase;
  text-decoration: none;
  display: inline-block;
  margin-top: 20px;
`;

const App = () => {
  return (
    <div css={wrapperStyle}>
      <section>
        <h3>New Arrival</h3>
        <h1>Womens's Autumn Collection</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <a href="/New-Arrivals" css={buttonStyle}>Shop Now</a>
      </section>
    </div>
  );
}
hydrate(<App />, document.getElementById("banner"));
