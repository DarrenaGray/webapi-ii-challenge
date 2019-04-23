const express = require('express');

const cors = require('cors');

const postsRouter = require('./data/db-router');

const server = express();

server.use(cors());

server.use(express.json());

server.get('/', (req, res) => {
    res.send(`Server is running`);
});

server.use('/api/posts', postsRouter);

module.exports = server;