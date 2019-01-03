import React, { Component } from "react";
import { render } from "react-dom";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Header from "./Header";

const client = new ApolloClient({ uri: "https://countries.trevorblades.com/" });

const ApolloApp = AppComponent => (
  <ApolloProvider client={client}>
    <Header />
  </ApolloProvider>
);

render(ApolloApp(Header), document.getElementById("header"));
