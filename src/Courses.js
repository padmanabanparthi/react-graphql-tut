/* eslint-disable react/react-in-jsx-scope */
import React from 'react';

import gql from "graphql-tag";
import { Query } from "react-apollo";

import Course from './Course';

const GET_USERS = gql`
  {
    allUsers {
      id
      name
      email
      comments {
        id
        user {
          id
        }
        createdAt
      }
      createdAt
    }
  }
`;

const Courses = () => (
  // eslint-disable-next-line react/react-in-jsx-scope
  <Query query={GET_USERS}>

    {({ loading, error, data }) => {
      
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.allUsers.map(({ id, name, email, createdAt}) => (
        
        <div key={id} className="col-md-6">
          <h3>{name}</h3>
          <p>Email: {email}</p>
          <p>Created Date: {createdAt}</p>
          <hr/>
        </div>

      ));

    }}

  </Query>
);
export default Courses;