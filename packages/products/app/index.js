import React, { Component } from "react";
import { hydrate } from "react-dom";
import fetch from "isomorphic-fetch";
import ApolloClient from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { ApolloProvider } from "react-apollo";
import { InMemoryCache } from "apollo-cache-inmemory";
// import "cross-fetch/polyfill";
import CardList from "./CardList";
import ExecutionEnvironment from "exenv";
const client = new ApolloClient({
  ssrMode: true,
  link: createHttpLink({
    uri: "https://api.graph.cool/simple/v1/cj5lb586dfhpg0122q4bwpg1x"
  }),
  cache: new InMemoryCache()
});

const ApolloApp = AppContent => (
  <ApolloProvider client={client}>
    <CardList />
  </ApolloProvider>
);
export default ApolloApp;
if (ExecutionEnvironment.canUseDOM) {
  hydrate(ApolloApp(CardList), document.getElementById("card-list"));
}
