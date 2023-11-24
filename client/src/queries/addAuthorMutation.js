import { gql } from "@apollo/client";

export default gql`
    mutation ($name: String!, $age: Int!) {
        addAuthor(name: $name, age: $age) {
            name
        }
    }
`;
