const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const mongoose = require("mongoose");

const schema = require("./schema/schema");

mongoose.connect(
    "mongodb+srv://prkpandey:" +
        process.env.MONGO_ATLAS_PW +
        "@node-rest-shop.4peug.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);
mongoose.connection.once('open', () => {
    console.log('*** CONNECTED TO DATABASE ***');
});

const app = express();

app.use(
    "/graphql",
    graphqlHTTP({
        schema: schema,
        graphiql: true,
    })
);

module.exports = app;
