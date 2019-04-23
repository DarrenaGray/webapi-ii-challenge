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

router.get('/:id', async (req, res) => {
    try {
        const postId = await db.findById(req.params.id);

        if (postId) {
            res.status(200).json(postId);
        } else {
            res.status(404).json({
                message: "The post with the specified ID does not exist"
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "The post information could not be retrieved"
        });
    }
});

router.post('/', async (req, res) => {
    if (req.body.title && req.body.contents) {
        try {
            const post = await db.insert(req.body);
            res.status(201).json(post);
        } catch (error) {
            console.log(error);
            res.status(500).json({
                error: "There was an error while saving the post to the database"
            })
        }
    } else {
        res.status(400).json({
            errorMessage: "Please provide title and contents for the post"
        });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const postId = await db.remove(req.params.id);
        if (postId) {
            res.status(200).json(postId);
        } else {
            res.status(404).json({
                message: "The post with the specified ID does not exist."
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "The post could not be removed"
        });
    }
});

router.put('/:id', async (req, res) => {
    if (req.body.title && req.body.contents) {
        try {
            const post = await db.update(req.params.id, req.body)
            if (post) {
                res.status(200).json(post);
            } else {
                res.status(404).json({
                    message: "The post with the specified ID does not exist."
                });
            };
        } catch (error) {
            console.log(error);
            res.status(500).json({
                error: "The post information could not be modified."
            });
        }
    } else {
        res.status(400).json({
            errorMessage: "Please provide title and contents for the post."
        });
    }
});

module.exports = router;