export default`
    type Query{
        allPersons: [Person]
        person(id: ID): Person
    }

    type Person{
        id: ID
        name: String
        age: Int
        posts: [Post]
    }

    input PersonInput{
        name: String
        age: Int
        posts: [PostInput]
    }

    input PostInput{
        title: String
        author: PersonInput
    }

    type Post{
        id: ID
        title: String
        author: Person
    }

    type Mutation{
        createPerson(input: PersonInput): Person
    }
`;
