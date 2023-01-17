const { User, Book } = require('../models/index');
const { AuthenticationError } = require('apollo-server-express');
// insert token

const resolvers = {
    Query: {

        getBooks: () => {
            return Book.find()
        },

        getBookById: () => {
            return Book.find({BookId})
        },

        getUser: () => {
            return User.find()
        },

        getUserById: () => {
            return User.find({username})
        },
    },

    Mutation: {

        addBook: async (parents, args) => {
            const Book = await Book.create({...args, title: context.Book.title});
        }

    }
};

module.exports = resolvers;