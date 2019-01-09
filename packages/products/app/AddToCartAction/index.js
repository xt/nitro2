/**@jsx jsx */
import React from "react";
import pubSub from "../../../vendors/pubsub/pub-sub";
import { jsx, css } from "@emotion/core";

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
  display: block;
  width: 100%;
  &:hover {
    background-color: #006b6b;
    background-size: 2.2em;
    background-position: 1.5em 50%;
  }
`;

class AddToCartAction extends React.Component {
  constructor(props) {
    super(props);
    this.store = props.store;
    this.item = props.item;
    this.emitLikeAction = this.emitLikeAction.bind(this);
  }
  emitLikeAction(event) {
    this.store.likedItems.push(this.item);
    pubSub.publish("itemAdded", this.item);
  }
  render() {
    return (
      <button css={buttonStyle} onClick={this.emitLikeAction}>
        Add to Cart{" "}
      </button>
    );
  }
}

export default AddToCartAction;
