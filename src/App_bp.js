import React from 'react';
import logo from './logo.svg';
import './App.css';

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import Courses from "./Courses";

const client = new ApolloClient({
  uri: "https://api.graph.cool/simple/v1/ciyz901en4j590185wkmexyex"
});

function App() {
  return (
      
        <div className="container">
          <nav className="navbar navbar-dark bg-primary">
            <a className="navbar-brand" href="#">React and GraphQL - Sample Application</a>
          </nav>
          <div className="row mt-4">
          <ApolloProvider client={client}>
            <Courses />
          </ApolloProvider>
         
          </div>
        </div>
      
  );
}

export default App;
