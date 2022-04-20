const express = require("express");
const server = express();

server.all("/", (_, res) => res.send("BODO"));

function keepAlive() {
	server.listen(3000, () => console.log("Server is Ready!"));
}

module.exports = keepAlive;
