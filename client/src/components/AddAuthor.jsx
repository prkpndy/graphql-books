import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useMutation } from "@apollo/client/react";

import addAuthorMutation from "../queries/addAuthorMutation";

function AddAuthor(props) {
    const [authorName, changeAuthorName] = useState("");
    const [authorAge, changeAuthorAge] = useState(0);

    const [submissionState, changeSubmissionState] = useState(""); // before-loading-done or error

    const [addAuthor, { loading, error, data }] =
        useMutation(addAuthorMutation);

    if (loading && submissionState !== "Loading...")
        changeSubmissionState("Loading...");
    if (error && submissionState !== "Error") changeSubmissionState(`Error`);
    if (data && submissionState !== "") changeSubmissionState("");

    const handleNameChange = (event) => {
        changeAuthorName(event.target.value);
    };
    const handleAgeChange = (event) => {
        changeAuthorAge(Number(event.target.value));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (authorAge === 0 || authorName === "") {
            return;
        }

        addAuthor({
            variables: {
                name: authorName,
                age: authorAge,
            },
        });

        changeAuthorName("");
        changeAuthorAge(0);
    };

    return (
        <div>
            <h2>Add Author</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        value={authorName}
                        onChange={handleNameChange}
                    />
                </label>
                <label>
                    Age:
                    <input
                        type="number"
                        value={authorAge}
                        onChange={handleAgeChange}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <p>{submissionState}</p>
        </div>
    );
}

export default AddAuthor;
