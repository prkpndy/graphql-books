import { gql } from "@apollo/client";

export default gql`
    #graphql
    mutation AddBook($authorId: ID!, $title: String!, $genre: String) {
        addBook(authorId: $authorId, title: $title, genre: $genre) {
            id
            title
        }
    }
`;
