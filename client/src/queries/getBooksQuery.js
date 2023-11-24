import { gql } from "@apollo/client";

export default gql`
    query GetBooks {
        authors {
            id
            name
            age
            books {
                id
                title
                genre
            }
        }
    }
`;
