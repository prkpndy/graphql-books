const typeDefs = `#graphql
    type OnlyBook {
        id: ID!
        title: String!
        genre: String!
    }

    type Author {
        id: ID!
        name: String!
        age: Int
        books: [OnlyBook]
    }

    type Book {
        id: ID!
        title: String!
        genre: String
        authorId: ID!
        author: Author!
    }

    type Query {
        book(id: ID!): Book
        books: [Book]
        author(id: ID!): Author
        authors: [Author]
    }

    type Mutation {
        addAuthor(name: String!, age: Int!): Author
        addBook(authorId: ID!, title: String!, genre: String): Book
        deleteAuthor(id: ID!): Author
        deleteBook(id: ID!): Book
    }
`;

module.exports = typeDefs;
