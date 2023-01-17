const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type User {
        _id: ID
        username: String
        email: String
        password: String
        savedBooks: [Book]
    }

    type Book {
        _id: ID
        authors: String
        description: String
        bookId: String
        image: String
        link: String
        title: String
    }

    type Query {
        getBooks: [Book]
        getBookById(bookId:String!)
        getUsers: [User]
        getUserById(username:String!)
    }

    type Mutation {
        addBook(authors: String!, description: String!, bookId: String!, link: String!, title: String!): Book
        addUser(username: String!, email: String!, password: String!)
    }

    type Auth {
        token: ID!
        user: User
    }
`;

module.exports = typeDefs;