import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const PersonList = ({ data: { loading, allPersons } }) => {
  if (loading) return <h1> Loading </h1>;
  return allPersons.map(person => <div> {JSON.stringify(person)}</div>);
};

export const PersonQuery = gql`
  query {
    allPersons {
      id
      name
      age
    }
  }
`;

export default graphql(PersonQuery)(PersonList);
