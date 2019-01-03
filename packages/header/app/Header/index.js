import React from "react";
// import PropTypes from "prop-types";

import { gql } from "apollo-boost";
import { Query } from "react-apollo";

import Logo from "../Logo";
import NavItem from "../NavItem";
import Notification from "../Notification";

import "./styles.scss";

import store from "../vendors/store";

const GET_COUNTRIES = gql`
  query {
    countries {
      name
      phone
    }
  }
`;
const items = ["about", "contact", "products"];
const Header = ({ active, setActive }) => (
  <Query query={GET_COUNTRIES}>
    {({ loading, error, data }) => {
      if (loading) return <div>Loading...</div>;
      if (error) return <div>Error :</div>;

      return (
        <React.Fragment>
          <div className="header">
            <Logo />
            total countries= {data.countries.length}
            {items.map((item, index) => (
              <NavItem
                key={index}
                index={index}
                active={index === active}
                onClick={setActive}
                linkName={item}
              />
            ))}
            <Notification store={store}/>
          </div>
        </React.Fragment>
      );
    }}
  </Query>
);
// Header.propTypes = {
//   items: PropTypes.arrayOf(PropTypes.number).isRequired,
//   active: PropTypes.number.isRequired,
//   setActive: PropTypes.func.isRequired
// };

export default Header;
