const express = require('express');

const postsRouter = require('./data/db-router');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send(`Server is running`);
});

server.use('/api/posts', postsRouter);

module.exports = server;