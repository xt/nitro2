import React, { Component } from "react";
import { render } from "react-dom";
import fetch from "node-fetch";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import CardList from "./CardList";

const client = new ApolloClient({
  ssrMode: true,
  uri: "https://countries.trevorblades.com/"
});

const ApolloApp = AppComponent => (
  <ApolloProvider client={client}>
    <CardList />
  </ApolloProvider>
);

render(ApolloApp(CardList), document.getElementById("card-list"));
