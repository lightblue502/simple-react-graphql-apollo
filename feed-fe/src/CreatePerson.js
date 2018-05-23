import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import PersonList, { PersonQuery } from "./PersonList";

class CreatePerson extends React.Component {
  handleSubmit = async event => {
    event.preventDefault();
    try {
      const person = {
        name: this.refs.name.value,
        age: Number(this.refs.age.value)
      };

      await this.props.mutate({
        variables: {
          input: person
        },
        optimisticResponse: {
          createPerson: {
            __typename: "Person",
            id: 9999,
            ...person
          }
        }
      });
    } catch (error) {
      console.error("error", error);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref="name" value="John" />
        <input type="number" ref="age" value="10" />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

const CreatePersonMutation = gql`
  mutation CreatePersonMutation($input: PersonInput) {
    createPerson(input: $input) {
      id
      name
      age
    }
  }
`;

export default graphql(CreatePersonMutation, {
  options: props => ({
    update: (proxy, { data: { createPerson } }) => {
      const data = proxy.readQuery({ query: PersonQuery });
      data.allPersons.push(createPerson);
      proxy.writeQuery({ query: PersonQuery, data });
    }
  })
})(CreatePerson);
