import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useMutation } from "@apollo/client/react";

import addBookMutation from "../queries/addBookMutation";

function AddBook(props) {
    const [authorId, changeAuthorId] = useState("");
    const [bookTitle, changeBookTitle] = useState("");
    const [bookGenre, changeBookGenre] = useState("");

    const [submissionState, changeSubmissionState] = useState(""); // before-loading-done or error

    const [addBook, { loading, error, data }] = useMutation(addBookMutation);

    if (loading && submissionState !== "Loading...")
        changeSubmissionState("Loading...");
    if (error && submissionState !== "Error") changeSubmissionState(`Error`);
    if (data && submissionState !== "") changeSubmissionState("");

    const handleAuthorIdChange = (event) => {
        changeAuthorId(event.target.value);
    };
    const handleBookTitleChange = (event) => {
        changeBookTitle(event.target.value);
    };
    const handleBookGenreChange = (event) => {
        changeBookGenre(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (authorId === "" || bookTitle === "") {
            return;
        }

        addBook({
            variables: {
                authorId: authorId,
                title: bookTitle,
                genre: bookGenre,
            },
        });

        changeAuthorId("");
        changeBookTitle("");
        changeBookGenre("");
    };

    return (
        <div>
            <h2>Add Book</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Author ID:
                    <input
                        type="text"
                        value={authorId}
                        onChange={handleAuthorIdChange}
                    />
                </label>
                <label>
                    Title:
                    <input
                        type="text"
                        value={bookTitle}
                        onChange={handleBookTitleChange}
                    />
                </label>
                <label>
                    Genre:
                    <input
                        type="text"
                        value={bookGenre}
                        onChange={handleBookGenreChange}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <p>{submissionState}</p>
        </div>
    );
}

export default AddBook;
