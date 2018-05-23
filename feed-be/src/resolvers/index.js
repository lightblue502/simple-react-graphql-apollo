import * as Person from "../models/personModel";

export default {
  Query: {
    allPersons: () => Person.list(),
    person: (_, { id }) => Person.findPersonById(id)
  },
  Mutation: {
    createPerson: (_, { input }) => Person.create(input)
  }
};
