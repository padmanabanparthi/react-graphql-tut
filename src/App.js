import React from 'react';
import './App.css';

//for router
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//apollo graphql imports 
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

//import pages and navbar components
import Categories from "./Categories";
import AppRouter from "./UserAppRouter";
import Navbar from './Navbar';


const cache = new InMemoryCache();
const link = new HttpLink({
  uri: "https://hype-api.herokuapp.com/commands",
  headers: {
    "X-Hype-Language" : "en",
    "X-Hype-App" :"eyJhbGciOiJub25lIn0.eyJkYXRhIjoiNWI5MTk2YTY5YzBlNWYwMDAxNmY2MTdmIn0.",
    "X-Hype-User" :"eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjoiMzEwY2VkMzcyMDBiMWEwZGFlMjVlZGIyNjNmZTUyYzQ5MWY2ZTQ2NzI2OGFjYWIwZmZlYzA2NjY2ZTJlZDk1OSIsImV4cCI6MTU0NTgzOTAyMX0.u47jzF_y9mgH-aSPAkF4Y3nJJdW2RS07QSsN0HlYQXw"
  },
})

const client = new ApolloClient({
  cache,
  link
})

function App() {
  return (
      <ApolloProvider client={client}>
        <React.Fragment>
          <AppRouter />
        </React.Fragment>
      </ApolloProvider>
      
        // <div className="container">
        //   <nav className="navbar navbar-dark bg-primary">
        //     <a className="navbar-brand" href="#">React and GraphQL - Sample Application</a>
        //     <Navbar/>
        //   </nav>
        //   <div className="row mt-4">
        //   <ApolloProvider client={client}>
        //     <Categories />
        //   </ApolloProvider>
         
        //   </div>
        // </div>
      
  );
}

export default App;
