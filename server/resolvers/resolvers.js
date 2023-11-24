const Author = require("../models/author");
const Book = require("../models/book");

const resolvers = {
    Book: {
        async author(parent) {
            const resultAuthor = await Author.findById(parent.authorId);
            resultAuthor.id = resultAuthor._id;

            return resultAuthor;
        },
    },
    Author: {
        async books(parent) {
            const resultBooks = await Book.find({ authorId: parent.id });
            resultBooks.forEach((b) => {
                b.id = b._id;
            });

            return resultBooks;
        },
    },
    Query: {
        async book(parent, args, contextValue, info) {
            const resultBook = await Book.findById(args.id);
            resultBook.id = resultBook._id;

            return resultBook;
        },
        async author(parent, args, contextValue, info) {
            const resultAuthor = await Author.findById(args.id);
            resultAuthor.id = resultAuthor._id;

            return resultAuthor;
        },
        async books() {
            const resultBooks = await Book.find({});
            resultBooks.forEach((b) => {
                b.id = b._id;
            });

            return resultBooks;
        },
        async authors() {
            const resultAuthors = await Author.find({});
            resultAuthors.forEach((a) => {
                a.id = a._id;
            });

            return resultAuthors;
        },
    },
    Mutation: {
        async addAuthor(parent, args, contextValue, info) {
            const newAuthor = new Author({
                name: args.name,
                age: args.age,
            });

            const na = await newAuthor.save();
            na.id = na._id;
            return na;
        },
        async addBook(parent, args, contextValue, info) {
            const newBook = await Book({
                authorId: args.authorId,
                title: args.title,
                genre: args.genre,
            });

            const nb = await newBook.save();
            nb.id = nb._id;
            return nb;
        },
        async deleteAuthor(parent, args, contextValue, info) {
            const resultAuthor = Author.findByIdAndDelete(args.id);
            resultAuthor.id = resultAuthor._id;
            return resultAuthor;
        },
        async deleteBook(parent, args, contextValue, info) {
            const resultBook = Book.findByIdAndDelete(args.id);
            resultBook.id = resultBook._id;
            return resultBook;
        },
    },
};

module.exports = resolvers;
