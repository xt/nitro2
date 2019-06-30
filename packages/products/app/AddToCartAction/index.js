/**@jsx jsx */
import React from "react";
//import pubSub from "../vendors/pubsub/pub-sub";
import { pubSub } from '@nitro2/shared';
import { jsx, css } from "@emotion/core";

const addBtnStyle = css`
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

const removeBtnStyle = css`
  background: #009999;
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
    this.state = {
      isItemAdded: false
    };
    this.store = props.store;
    this.item = props.item;
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }
  addToCart(event) {
    this.store.likedItems.push(this.item);
    pubSub.publish("itemAdded", this.item);
    this.setState({
      isItemAdded: true
    });
  }
  removeFromCart(event) {
    this.store.likedItems.splice(this.store.likedItems.findIndex((item) => {
      return item.sku === this.item.sku
    }), 1);
    pubSub.publish("itemRemoved", this.item);
    this.setState({
      isItemAdded: false
    });
  }
  render() {
    let jsxTemp = !this.state.isItemAdded ? 
      <button css={addBtnStyle} onClick={this.addToCart}>
        Add to Cart{" "}
      </button> : 
      <button css={removeBtnStyle} onClick={this.removeFromCart}>
        Remove from Cart{" "}
      </button>;
    return (
      jsxTemp
    );
  }
}

export default AddToCartAction;
