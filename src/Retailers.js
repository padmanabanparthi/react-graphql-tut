/* eslint-disable react/react-in-jsx-scope */
import React from 'react';

import gql from "graphql-tag";
import { Query } from "react-apollo";

const GET_CATEGORIES = gql`
{
    findRetailers(countryCode:"US", page: 1) {
      retailers {
        id
        name
        email
        phone
        logoUrl
        storeIds
      }
      errors
    }
}
`;

const Retailers = () => (
  // eslint-disable-next-line react/react-in-jsx-scope
  <Query query={GET_CATEGORIES}>

    {({ loading, error, data }) => {
      
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.findRetailers.retailers.map(({ id, name, email, phone}) => (
        
        <div key={id} className="col-md-6">
          <h3>{name}</h3>
          <p>Email : {email}</p>
          <p>Phone : {phone}</p>
          <hr/>
        </div>

      ));

    }}

  </Query>
);
export default Retailers;