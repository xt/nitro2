import React from "react";

import { gql } from "apollo-boost";
import { Query } from "react-apollo";

import Card from "../Card";

import "./styles.scss";

const GET_COUNTRIES = gql`
  query {
    countries {
      name
      phone
    }
  }
`;

const CardList = () => (
  <Query query={GET_COUNTRIES}>
    {({ loading, error, data }) => {
      if (loading) return <div>Loading...</div>;
      if (error) return <div>Error :</div>;

      return (
        <React.Fragment>
          {data.countries.map((country, index) => (
            <Card key={index} country={country} />
          ))}
        </React.Fragment>
      );
    }}
  </Query>
);

export default CardList;
