import React from "react";
// import PropTypes from "prop-types";

import { gql } from "apollo-boost";
import { Query } from "react-apollo";

import Logo from "../Logo";
import NavItem from "../NavItem";
import Notification from "../Notification";

import "./styles.scss";

import store from "../store/store";
import pubSub from "../../../vendors/pubsub/pub-sub";

const items = ["about", "products"];
const Header = ({ active, setActive }) => (
    <React.Fragment>
      <div className="header">
        <Logo />
        <nav className="navbar">
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
        <Notification store={store}/>
      </div>
    </React.Fragment>
);
// Header.propTypes = {
//   items: PropTypes.arrayOf(PropTypes.number).isRequired,
//   active: PropTypes.number.isRequired,
//   setActive: PropTypes.func.isRequired
// };

let subscription = pubSub.subscribe('itemLiked', (country) => {
  store.likedItems.push(country);
});

export default Header;
