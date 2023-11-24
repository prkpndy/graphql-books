import React from "react";
import ReactDOM from "react-dom";
import { useQuery } from "@apollo/client";

import getBooksQuery from "../queries/getBooksQuery";

function BookList(props) {
    const { loading, error, data } = useQuery(getBooksQuery);

    if (loading) return <p>Loading Data...</p>;
    if (error) {
        console.log(error);
        return <p>Internal Error </p>;
    }

    return (
        <div>
            <h1>Authors and Books</h1>
            {data.authors.map((author) => {
                return (
                    <div key={author.id}>
                        <h3>
                            {" "}
                            {author.name} <i> ({author.id}) </i>{" "}
                        </h3>
                        <ul>
                            {author.books.map((book) => {
                                return (
                                    <li key={book.id}>
                                        {" "}
                                        {book.title} <i> ({book.id}) </i>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                );
            })}
        </div>
    );
}

export default BookList;
