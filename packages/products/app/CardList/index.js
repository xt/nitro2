import React from "react";
import { jsx, css } from "@emotion/core";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

import Card from "../Card";

const GET_PRODUCTS = gql`
  query {
    allProducts {
      productName
      picUrl
      price
      description
    }
  }
`;

//--------Emotion  Styles -------/

const CardList = () => (
  <Query query={GET_PRODUCTS}>
    {({ loading, error, data }) => {
      console.log("------data-----", data);
      if (loading) return <div>Loading...</div>;
      if (error) return <div>Error :</div>;
      return (
        <React.Fragment>
          {data.allProducts.map((product, index) => (
            <Card key={index} product={product} />
          ))}
        </React.Fragment>
      );
    }}
  </Query>
);

export default CardList;
