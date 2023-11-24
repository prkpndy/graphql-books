const { startStandaloneServer } = require("@apollo/server/standalone");

const server = require("./app");

const PORT = process.env.PORT || 3000;

const start = async () => {
    const { url } = await startStandaloneServer(server, {
        listen: { port: PORT },
    });

    console.log(`*** RUNNING THE SERVER AT ${url} ***`);
};

start();
