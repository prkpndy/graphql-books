import React from "react";
import ReactDOM from "react-dom";

import BookList from "./components/BookList";
import AddAuthor from "./components/AddAuthor";
import AddBook from "./components/AddBook";

function App() {
    return (
        <div>
            <div>
                <BookList />
            </div>
            <div>
                <div>
                    <AddAuthor />
                </div>
                <div>
                    <AddBook />
                </div>
            </div>
        </div>
    );
}

export default App;
