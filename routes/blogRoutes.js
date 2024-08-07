const express = require('express');
const router = express.Router();
const Blog = require('../models/blogs');
const blogController = require('../controllers/blogController');

// 1) Get all blogs(index view):- blogIndex

router.get('/', blogController.blogIndex);

// 2) Get create-blog page(form):- getCreateblog

router.get('/create-blogs', blogController.getCreateblog);

// 3) Post new blog on submit:- postCreateblog

router.post('/create-blogs', blogController.postCreateblog);

// 4) Get single blog based on id(details view):-  getBlogDetail

router.get('/blog/:id', blogController.getBlogDetail);

// 5) Delete single blog based on id:-  deleteBlogDetail

router.delete('/blog/:id', blogController.deleteBlogDetail)


module.exports = router;
