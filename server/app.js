const { ApolloServer } = require("@apollo/server");

const mongoose = require("mongoose");

const schema = require("./schema/schema");
const resolvers = require("./resolvers/resolvers");

mongoose.connect(
    "mongodb+srv://" +
        process.env.MONGO_ATLAS_USER +
        ":" +
        process.env.MONGO_ATLAS_PW +
        "@node-rest-shop.jqorjie.mongodb.net/?retryWrites=true&w=majority"
);

mongoose.connection.once("open", () => {
    console.log("*** CONNECTED TO DATABASE ***");
});

const server = new ApolloServer({
    typeDefs: schema,
    resolvers: resolvers,
});

module.exports = server;
