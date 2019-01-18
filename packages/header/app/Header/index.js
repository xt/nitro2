/**@jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";

import Logo from "../Logo";
import NavItem from "../NavItem";
import Notification from "../Notification";

import store from "../store/store";
// import pubSub from "../../../vendors/pubsub/pub-sub";

const headerStyle = css`
  align-items: center;
  background: #0d0d0d;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  padding: 0 1em;
`;
const navbarStyle = css`
  margin: 3rem 0 0 0rem;
`;

const items = ["Home", "About", "New-Arrivals"];
const Header = ({ active, setActive }) => (
  <React.Fragment>
    <div css={headerStyle}>
      <Logo />
      <nav css={navbarStyle}>
        {items.map((item, index) => (
          <NavItem
            key={index}
            index={index}
            active={index === active}
            onClick={setActive}
            linkName={item}
          />
        ))}
      </nav>
      <Notification store={store} />
    </div>
  </React.Fragment>
);

// let subscriptionAddItem = pubSub.subscribe("itemAdded", item => {
//   store.likedItems.push(item);
// });

// let subscriptionRemoveItem = pubSub.subscribe("itemRemoved", item => {
//   store.likedItems.splice(store.likedItems.findIndex((itemInStore) => {
//     return itemInStore.sku === item.sku
//   }), 1);
// });

export default Header;
