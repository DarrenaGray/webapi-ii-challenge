const express = require('express');

const db = require('./db');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const posts = await db.find(req.query);
        res.status(200).json(posts);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "The posts information could not be retrieved."
        });
    }
});

module.exports = router;