/* eslint-disable react/react-in-jsx-scope */
import React from 'react';

import gql from "graphql-tag";
import { Query } from "react-apollo";

const GET_CATEGORIES = gql`
{
  findCategories(storeId: ["5d28613649065f08f29b8f5c"], retailerId: ["5d23b2efe0d3ed0912e018dc"]) {
    categories {
      id
      name
      imageUrl
    }
    errors
  }
}
`;

const Categories = () => (
  // eslint-disable-next-line react/react-in-jsx-scope
  <Query query={GET_CATEGORIES}>

    {({ loading, error, data }) => {
      
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.findCategories.categories.map(({ id, name}) => (
        
        <div key={id} className="col-md-6">
          <h3>{name}</h3>
          <hr/>
        </div>

      ));

    }}

  </Query>
);
export default Categories;