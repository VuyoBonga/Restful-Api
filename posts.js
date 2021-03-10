const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// GETS ALL THE POSTS

router.get("/", async (req, res) => {
    try {
        const posts = await Post.find();
        
    } catch (error) {
        res.json({message: error});
        
    }
    
});

// SUBMITS A POST

router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    try {
        const savedPost = await post.save();
        res.json(savedPosts);
    } catch (error) {
        res.json({ message: error});
        
    }

});

// GET SPECIFIC POST
router.get('/:postId', (req, res) =>{
 try {
        const post = await Post.findById(req.params.postid);
        res.json(post);
    } catch (error) {
        res.json({ message: error});
        
    }
    
});

//DELETE POST
router.delete('/:postId', async (req, res) =>{
    try {
        const removedPost = await Post.remove({_id: req.params.postId})
        res.json(removedPost);
    } catch (error) {
        res.json({message: error})
        
    }
    
});

// UPDATING POST
router.patch('/:postId',async (req, res) =>{
    try {
        const updatePost = await Post.updateIne({_id: req.params.postId}, { $set: {title: req.body.title} }
        );
        res.json(updatePost);
    } catch (error) {
        res.json({message: error})
        
    }
})
module.exports = router;