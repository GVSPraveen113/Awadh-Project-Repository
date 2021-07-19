const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');


router.get('/blogs', async(req, res) => {
    const blogs=await Blog.find({});
    res.render('blog/index',{blogs});
})

router.post('/blogs', async (req, res) => {

    try {
        const blog= await Blog.create(req.body.blog);
        req.flash('success', 'Blog Created Successfully');
        res.redirect('/blogs');
    }
    catch (e) {
        console.log(e.message);
        req.flash('error', 'Cannot Create Blog, Something is Wrong');
        res.render('error');
    } 
})

router.get('/blogs/:id', async (req, res) => {
    const blog = await Blog.findById(req.params.id);
    res.send(blog);
})

router.get('/blogs/:id/edit', async (req, res) => {
    const blog = await Blog.findById(req.params.id);
    res.send(blog);
})

router.patch('/blogs/:id', async (req, res) => {
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body);
    res.send(blog);
})

router.delete('/blogs/:id', async (req, res) => {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    res.send(blog);
})

module.exports = router;